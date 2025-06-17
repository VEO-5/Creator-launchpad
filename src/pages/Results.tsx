
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Video, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

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
  };
  clips: Clip[];
  captions: string[];
  hashtags: string[];
}

const Results = () => {
  const [results, setResults] = useState<Results | null>(null);
  const [selectedClip, setSelectedClip] = useState(0);
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
    toast({
      title: "Download Started",
      description: `Downloading ${clip.title}...`,
    });
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Clips Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Video className="h-6 w-6 text-purple-600" />
                    Generated Clips
                  </span>
                  <Badge variant="secondary">{results.clips.length} clips</Badge>
                </CardTitle>
                <CardDescription>
                  Preview and download your short-form content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Main Video Player */}
                <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center relative">
                  <div className="text-center text-white">
                    <Video className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">{results.clips[selectedClip]?.title}</p>
                    <p className="text-sm opacity-75">Duration: {results.clips[selectedClip]?.duration}</p>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Button
                      onClick={() => handleDownloadClip(results.clips[selectedClip])}
                      className="bg-purple-600 hover:bg-purple-700"
                      size="sm"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>

                {/* Clip Thumbnails */}
                <div className="grid grid-cols-3 gap-4">
                  {results.clips.map((clip, index) => (
                    <div
                      key={clip.id}
                      onClick={() => setSelectedClip(index)}
                      className={`cursor-pointer rounded-lg border-2 p-3 transition-all ${
                        selectedClip === index
                          ? 'border-purple-600 bg-purple-50'
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <div className="aspect-video bg-gray-200 rounded mb-2 flex items-center justify-center">
                        <Video className="h-8 w-8 text-gray-400" />
                      </div>
                      <p className="text-sm font-medium text-gray-900">{clip.title}</p>
                      <p className="text-xs text-gray-500">{clip.duration}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Captions and Hashtags Section */}
          <div className="space-y-6">
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

            <Button
              onClick={handleNewVideo}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
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
