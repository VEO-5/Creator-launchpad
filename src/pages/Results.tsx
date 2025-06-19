import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Video, Upload, Instagram, Calendar, Share2, Clock, Settings, Play, Pause, Volume2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { socialMediaService } from '@/services/socialMediaService';
import { webhookService } from '@/services/webhookService';

interface Clip {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  startTime: string;
  endTime: string;
}

interface Results {
  originalVideo: {
    title: string;
    duration: string;
    videoUrl?: string;
    youtubeUrl?: string;
  };
  clips: Clip[];
  captions: string[];
  hashtags: string[];
}

const getYouTubeEmbedUrl = (url: string): string => {
  const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)?.[1];
  return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
};

// Video Player Component
const VideoPlayer = ({ videoUrl, poster, title, onError }: {
  videoUrl: string;
  poster?: string;
  title: string;
  onError?: () => void;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center text-gray-600">
          <Video className="h-12 w-12 mx-auto mb-2 opacity-50" />
          <p className="text-sm">Clip failed to render. Try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <video
        src={videoUrl}
        poster={poster}
        controls
        className="w-full aspect-video rounded-lg bg-black"
        onPlay={handlePlay}
        onPause={handlePause}
        onError={handleError}
        preload="metadata"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Hover preview overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-lg pointer-events-none" />
    </div>
  );
};

const Results = () => {
  const [results, setResults] = useState<Results | null>(null);
  const [selectedClip, setSelectedClip] = useState(0);
  const [isPosting, setIsPosting] = useState<Record<string, boolean>>({});
  const [isScheduling, setIsScheduling] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const resultsData = localStorage.getItem('looplift_results');
    if (!resultsData) {
      navigate('/upload');
      return;
    }
    
    setResults(JSON.parse(resultsData));
  }, [navigate]);

  const handleCopyText = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard`,
    });
  };

  const handleDownloadClip = (clip: Clip) => {
    // Create actual download for the clip
    const link = document.createElement('a');
    link.href = clip.videoUrl;
    link.download = `${clip.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download Complete",
      description: `${clip.title} has been downloaded successfully!`,
    });
  };

  const handlePostToSocial = async (platform: string, clipIndex: number) => {
    if (!results) return;
    
    setIsPosting(prev => ({ ...prev, [platform]: true }));
    
    const clip = results.clips[clipIndex];
    const content = {
      clipId: clip.id,
      caption: results.captions[clipIndex] || results.captions[0],
      hashtags: results.hashtags[clipIndex] || results.hashtags[0]
    };

    try {
      let response;
      switch (platform) {
        case 'instagram':
          response = await socialMediaService.postToInstagram(content);
          break;
        case 'tiktok':
          response = await socialMediaService.postToTikTok(content);
          break;
        case 'youtube':
          response = await socialMediaService.postToYouTubeShorts(content);
          break;
        default:
          throw new Error('Unsupported platform');
      }

      if (response.success) {
        toast({
          title: "Posted Successfully!",
          description: response.message,
        });
        
        // Trigger webhook if configured
        await webhookService.triggerWebhook(platform, {
          eventType: 'post_scheduled',
          videoData: {
            title: results.originalVideo.title,
            clips: results.clips
          },
          captions: results.captions,
          hashtags: results.hashtags,
          timestamp: new Date().toISOString()
        });
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      toast({
        title: "Posting Failed",
        description: "This is a demo feature. Real posting will be available when APIs are configured.",
        variant: "destructive",
      });
    } finally {
      setIsPosting(prev => ({ ...prev, [platform]: false }));
    }
  };

  const handleSchedulePost = async (platform: string, clipIndex: number) => {
    if (!results) return;
    
    setIsScheduling(true);
    
    const clip = results.clips[clipIndex];
    const content = {
      clipId: clip.id,
      caption: results.captions[clipIndex] || results.captions[0],
      hashtags: results.hashtags[clipIndex] || results.hashtags[0],
      scheduledTime: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours from now
    };

    try {
      const response = await socialMediaService.schedulePost(platform, content);
      
      if (response.success) {
        toast({
          title: "Scheduled Successfully!",
          description: `Post scheduled for tomorrow at this time`,
        });
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      toast({
        title: "Scheduling Failed",
        description: "This is a demo feature. Real scheduling will be available when APIs are configured.",
        variant: "destructive",
      });
    } finally {
      setIsScheduling(false);
    }
  };

  const handleNewVideo = () => {
    localStorage.removeItem('looplift_input');
    localStorage.removeItem('looplift_results');
    navigate('/upload');
  };

  if (!results) {
    return <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <Video className="h-12 w-12 text-purple-600 mx-auto mb-4" />
        <p className="text-gray-600">Loading results...</p>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="container mx-auto max-w-6xl pt-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Viral Clips Are Ready! 🎉
          </h1>
          <p className="text-lg text-gray-600">
            AI generated {results.clips.length} clips with captions and hashtags
          </p>
        </div>

        <div className="space-y-8">
          {/* Original Video Section */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-6 w-6 text-purple-600" />
                Original Video
              </CardTitle>
              <CardDescription>
                Your uploaded video - {results.originalVideo.duration}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {results.originalVideo.videoUrl ? (
                <VideoPlayer
                  videoUrl={results.originalVideo.videoUrl}
                  title={results.originalVideo.title}
                />
              ) : results.originalVideo.youtubeUrl ? (
                <iframe
                  src={getYouTubeEmbedUrl(results.originalVideo.youtubeUrl)}
                  className="w-full aspect-video rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <Video className="h-16 w-16 text-gray-400" />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Generated Clips Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">AI-Generated Clips</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.clips.map((clip, index) => (
                <Card key={clip.id} className="shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-4 pb-2">
                      <h3 className="font-semibold text-lg mb-1">Clip {index + 1}: {clip.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Duration: {clip.duration} ({clip.startTime}s - {clip.endTime}s)
                      </p>
                    </div>

                    {/* Video Player */}
                    <div className="px-4 mb-4">
                      <VideoPlayer
                        videoUrl={clip.videoUrl}
                        poster={clip.thumbnail}
                        title={clip.title}
                        onError={() => {
                          toast({
                            title: "Playback Error",
                            description: "Clip failed to render. Try again.",
                            variant: "destructive",
                          });
                        }}
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="p-4 pt-0 space-y-3">
                      <Button
                        onClick={() => handleDownloadClip(clip)}
                        className="w-full bg-purple-600 hover:bg-purple-700"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>

                      <div className="grid grid-cols-3 gap-2">
                        <Button
                          onClick={() => handlePostToSocial('instagram', index)}
                          disabled={isPosting.instagram}
                          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                          size="sm"
                        >
                          <Instagram className="h-4 w-4" />
                        </Button>
                        
                        <Button
                          onClick={() => handlePostToSocial('tiktok', index)}
                          disabled={isPosting.tiktok}
                          className="bg-black hover:bg-gray-800"
                          size="sm"
                        >
                          <Video className="h-4 w-4" />
                        </Button>
                        
                        <Button
                          onClick={() => handlePostToSocial('youtube', index)}
                          disabled={isPosting.youtube}
                          className="bg-red-600 hover:bg-red-700"
                          size="sm"
                        >
                          <Video className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Captions and Hashtags Section */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>AI-Generated Captions</CardTitle>
                <CardDescription>
                  Engaging captions for each clip
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {results.captions.map((caption, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-medium text-purple-600">Clip {index + 1}</span>
                    </div>
                    <p className="text-sm text-gray-800 mb-2">{caption}</p>
                    <Button
                      onClick={() => handleCopyText(caption, 'Caption')}
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      Copy Caption
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Trending Hashtags</CardTitle>
                <CardDescription>
                  Optimized hashtags for maximum reach
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {results.hashtags.map((hashtags, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-medium text-purple-600">Clip {index + 1}</span>
                    </div>
                    <p className="text-sm text-gray-800 mb-2 font-mono">{hashtags}</p>
                    <Button
                      onClick={() => handleCopyText(hashtags, 'Hashtags')}
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      Copy Hashtags
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Bottom Actions */}
          <div className="text-center">
            <Button
              onClick={handleNewVideo}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Upload className="h-4 w-4 mr-2" />
              Process New Video
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
