
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Upload, Link, Video, Eye, Download, Star, Calendar, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UploadItem {
  id: number;
  title: string;
  status: 'queued' | 'processing' | 'almost-done' | 'ready';
  uploadTime: string;
  thumbnail: string;
  progress: number;
  clipCount: number;
  statusMessage: string;
}

const DashboardHome = () => {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [selectedUpload, setSelectedUpload] = useState<number | null>(null);
  const [uploads, setUploads] = useState<UploadItem[]>([
    {
      id: 1,
      title: "How to Create Viral Content",
      status: "ready",
      uploadTime: "2 minutes ago",
      thumbnail: "/placeholder.svg",
      progress: 100,
      clipCount: 3,
      statusMessage: "Ready to share with the world!"
    }
  ]);
  const { toast } = useToast();

  const handleYouTubeUpload = () => {
    if (!youtubeUrl.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a YouTube URL",
        variant: "destructive"
      });
      return;
    }

    const newUpload: UploadItem = {
      id: uploads.length + 1,
      title: "New Video from URL",
      status: "queued",
      uploadTime: "Just now",
      thumbnail: "/placeholder.svg",
      progress: 0,
      clipCount: 3,
      statusMessage: "Crushing it with AI magic..."
    };

    setUploads([newUpload, ...uploads]);
    setYoutubeUrl('');
    
    // Simulate processing progression
    simulateProcessing(newUpload.id);
    
    toast({
      title: "Video Added",
      description: "Your video is being processed!",
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newUpload: UploadItem = {
        id: uploads.length + 1,
        title: file.name.replace(/\.[^/.]+$/, ""),
        status: "queued",
        uploadTime: "Just now",
        thumbnail: "/placeholder.svg",
        progress: 0,
        clipCount: 3,
        statusMessage: "Crushing it with AI magic..."
      };

      setUploads([newUpload, ...uploads]);
      
      // Simulate processing progression
      simulateProcessing(newUpload.id);
      
      toast({
        title: "File Uploaded",
        description: `${file.name} is being processed!`,
      });
    }
  };

  const simulateProcessing = (uploadId: number) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 5;
      
      setUploads(prev => prev.map(upload => {
        if (upload.id === uploadId) {
          if (progress >= 100) {
            clearInterval(interval);
            return {
              ...upload,
              status: 'ready',
              progress: 100,
              statusMessage: "Ready to share with the world!"
            };
          } else if (progress >= 80) {
            return {
              ...upload,
              status: 'almost-done',
              progress,
              statusMessage: "Almost viral..."
            };
          } else if (progress >= 30) {
            return {
              ...upload,
              status: 'processing',
              progress,
              statusMessage: "Creating magic..."
            };
          }
          return {
            ...upload,
            progress,
            statusMessage: "Crushing it with AI magic..."
          };
        }
        return upload;
      }));
    }, 800);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready':
        return 'bg-green-100 text-green-800';
      case 'almost-done':
        return 'bg-electric-purple/10 text-electric-purple';
      case 'processing':
        return 'bg-neon-teal/10 text-neon-teal';
      case 'queued':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ready':
        return 'Ready';
      case 'almost-done':
        return 'Almost Done';
      case 'processing':
        return 'Processing';
      case 'queued':
        return 'Queued';
      default:
        return 'Unknown';
    }
  };

  if (selectedUpload) {
    return <ClipsResultsView 
      uploadId={selectedUpload} 
      onBack={() => setSelectedUpload(null)}
      onUploadAnother={() => setSelectedUpload(null)}
    />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Upload Your Video</h2>
        <p className="text-muted-foreground">Transform your content into viral short clips with AI-powered magic</p>
      </div>

      {/* Upload Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* YouTube URL Upload */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Link className="h-5 w-5 text-electric-purple" />
              YouTube URL
            </CardTitle>
            <CardDescription>Paste a YouTube video link to get started</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="https://youtube.com/watch?v=..."
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
            />
            <Button 
              onClick={handleYouTubeUpload}
              className="w-full bg-gradient-to-r from-electric-purple to-neon-teal hover:from-electric-purple/90 hover:to-neon-teal/90"
            >
              Process Video
            </Button>
          </CardContent>
        </Card>

        {/* File Upload */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-neon-teal" />
              Upload MP4
            </CardTitle>
            <CardDescription>Upload your video file directly</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-electric-purple/50 transition-colors">
              <input
                type="file"
                accept="video/mp4,video/*"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Video className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-muted-foreground">MP4, MOV, AVI up to 500MB</p>
              </label>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Uploads - Your Latest Video Processing Queue */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Uploads</CardTitle>
          <CardDescription>Your latest video processing queue</CardDescription>
        </CardHeader>
        <CardContent>
          {uploads.length > 0 ? (
            <div className="space-y-4">
              {uploads.map((upload) => (
                <div key={upload.id} className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-20 h-20 bg-gradient-to-br from-electric-purple/20 to-neon-teal/20 rounded-lg flex items-center justify-center">
                    <Video className="h-8 w-8 text-electric-purple" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-foreground">{upload.title}</h4>
                      <Badge className={`${getStatusColor(upload.status)} border-0`}>
                        {getStatusText(upload.status)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{upload.uploadTime}</p>
                    {upload.status !== 'ready' && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{upload.statusMessage}</span>
                          <span className="text-muted-foreground">{Math.round(upload.progress)}%</span>
                        </div>
                        <Progress value={upload.progress} className="h-2" />
                      </div>
                    )}
                    {upload.status === 'ready' && (
                      <p className="text-sm text-electric-purple font-medium">{upload.statusMessage}</p>
                    )}
                    <p className="text-xs text-muted-foreground">Generating {upload.clipCount} clips...</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {upload.status === 'ready' ? (
                      <Button 
                        onClick={() => setSelectedUpload(upload.id)}
                        className="bg-gradient-to-r from-electric-purple to-neon-teal hover:from-electric-purple/90 hover:to-neon-teal/90"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Clips
                      </Button>
                    ) : (
                      <Button variant="outline" disabled>
                        Processing...
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Video className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No uploads yet.</p>
              <p className="text-sm text-muted-foreground">Upload your first video to get started!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

// Clips Results View Component
const ClipsResultsView = ({ uploadId, onBack, onUploadAnother }: { 
  uploadId: number; 
  onBack: () => void;
  onUploadAnother: () => void;
}) => {
  const [favoriteClips, setFavoriteClips] = useState<number[]>([]);
  const [clipNotes, setClipNotes] = useState<Record<number, string>>({});
  const { toast } = useToast();

  const mockClips = [
    {
      id: 1,
      title: "Clip 1: Hook",
      duration: "0:24",
      thumbnail: "/placeholder.svg",
      aiTip: "This clip is likely to perform well on TikTok because it has a strong opening hook!"
    },
    {
      id: 2,
      title: "Clip 2: Value",
      duration: "0:18",
      thumbnail: "/placeholder.svg",
      aiTip: "Perfect for Instagram Reels - the value proposition is clear and concise."
    },
    {
      id: 3,
      title: "Clip 3: CTA",
      duration: "0:27",
      thumbnail: "/placeholder.svg",
      aiTip: "Great for YouTube Shorts with its compelling call-to-action."
    }
  ];

  const handleDownload = (clipId: number) => {
    toast({
      title: "Download Started",
      description: `Downloading clip ${clipId}...`,
    });
  };

  const handlePostTo = (platform: string, clipId: number) => {
    toast({
      title: `Posting to ${platform}`,
      description: `Clip ${clipId} is being posted to ${platform}!`,
    });
  };

  const handleSchedulePost = (clipId: number) => {
    toast({
      title: "Scheduling Post",
      description: `Clip ${clipId} scheduled for later!`,
    });
  };

  const toggleFavorite = (clipId: number) => {
    setFavoriteClips(prev => 
      prev.includes(clipId) 
        ? prev.filter(id => id !== clipId)
        : [...prev, clipId]
    );
  };

  const handleDownloadAll = () => {
    toast({
      title: "Download All Started",
      description: "Downloading all clips as ZIP file...",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={onBack}>
          ← Back to Uploads
        </Button>
        <div>
          <h2 className="text-3xl font-bold text-foreground">Your Viral Clips Are Ready! 🎉</h2>
          <p className="text-muted-foreground">AI generated 3 clips ready to share</p>
        </div>
      </div>

      {/* Original Video */}
      <Card>
        <CardHeader>
          <CardTitle>Original Video</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-gradient-to-br from-electric-purple/20 to-neon-teal/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Video className="h-16 w-16 mx-auto mb-4 text-electric-purple" />
              <p className="text-lg font-medium">How to Create Viral Content</p>
              <p className="text-sm text-muted-foreground">Duration: 3:45</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Generated Clips */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {mockClips.map((clip) => (
          <Card key={clip.id} className="overflow-hidden">
            <CardContent className="p-0">
              {/* Video Preview */}
              <div className="aspect-video bg-gradient-to-br from-electric-purple/20 to-neon-teal/20 flex items-center justify-center relative">
                <Video className="h-12 w-12 text-electric-purple" />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() => toggleFavorite(clip.id)}
                >
                  <Star className={`h-4 w-4 ${favoriteClips.includes(clip.id) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
                </Button>
              </div>
              
              <div className="p-4 space-y-4">
                {/* Clip Info */}
                <div>
                  <h3 className="font-semibold">{clip.title}</h3>
                  <p className="text-sm text-muted-foreground">Duration: {clip.duration}</p>
                </div>

                {/* Notes Input */}
                <Input
                  placeholder="Add notes or rename clip..."
                  value={clipNotes[clip.id] || ''}
                  onChange={(e) => setClipNotes(prev => ({ ...prev, [clip.id]: e.target.value }))}
                  className="text-sm"
                />

                {/* AI Tip */}
                <div className="bg-gradient-to-r from-electric-purple/10 to-neon-teal/10 p-3 rounded-lg">
                  <p className="text-sm text-foreground">💡 <strong>AI Tip:</strong> {clip.aiTip}</p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button
                    onClick={() => handleDownload(clip.id)}
                    variant="outline"
                    className="w-full"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  
                  <div className="grid grid-cols-3 gap-1">
                    <Button
                      onClick={() => handlePostTo('Instagram', clip.id)}
                      size="sm"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-xs"
                    >
                      <Instagram className="h-3 w-3 mr-1" />
                      IG
                    </Button>
                    <Button
                      onClick={() => handlePostTo('TikTok', clip.id)}
                      size="sm"
                      className="bg-black hover:bg-gray-800 text-xs"
                    >
                      <Video className="h-3 w-3 mr-1" />
                      TT
                    </Button>
                    <Button
                      onClick={() => handlePostTo('YouTube', clip.id)}
                      size="sm"
                      className="bg-red-600 hover:bg-red-700 text-xs"
                    >
                      <Video className="h-3 w-3 mr-1" />
                      YT
                    </Button>
                  </div>
                  
                  <Button
                    onClick={() => handleSchedulePost(clip.id)}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="flex gap-4 justify-center">
        <Button
          onClick={handleDownloadAll}
          className="bg-gradient-to-r from-electric-purple to-neon-teal hover:from-electric-purple/90 hover:to-neon-teal/90"
        >
          <Download className="h-4 w-4 mr-2" />
          Download All Clips (ZIP)
        </Button>
        <Button
          onClick={onUploadAnother}
          variant="outline"
        >
          <Upload className="h-4 w-4 mr-2" />
          Upload Another Video
        </Button>
      </div>
    </div>
  );
};

export default DashboardHome;
