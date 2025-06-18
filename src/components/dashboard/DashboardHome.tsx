
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Link, Video } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useUploads } from "@/contexts/UploadsContext";
import { useNavigate } from 'react-router-dom';

const DashboardHome = () => {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const { uploads, addUpload } = useUploads();
  const { toast } = useToast();
  const navigate = useNavigate();

  const extractVideoTitle = (url: string) => {
    // Mock function to extract video title from YouTube URL
    const videoId = url.split('v=')[1]?.split('&')[0];
    return videoId ? `Video from YouTube (${videoId.substring(0, 8)})` : 'YouTube Video';
  };

  const handleYouTubeUpload = () => {
    if (!youtubeUrl.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a YouTube URL",
        variant: "destructive"
      });
      return;
    }

    // Store input and navigate to processing
    const inputData = {
      type: 'youtube',
      data: youtubeUrl,
      timestamp: Date.now()
    };
    
    localStorage.setItem('looplift_input', JSON.stringify(inputData));
    navigate('/processing');
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Store input and navigate to processing
      const inputData = {
        type: 'upload',
        data: file.name,
        timestamp: Date.now()
      };
      
      localStorage.setItem('looplift_input', JSON.stringify(inputData));
      navigate('/processing');
    }
  };

  const handleUploadPageNavigation = () => {
    navigate('/upload');
  };

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

      {/* Alternative Upload Page Access */}
      <Card>
        <CardHeader>
          <CardTitle>Need More Options?</CardTitle>
          <CardDescription>Access the full upload interface with additional features</CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={handleUploadPageNavigation}
            variant="outline"
            className="w-full"
          >
            <Upload className="h-4 w-4 mr-2" />
            Go to Upload Page
          </Button>
        </CardContent>
      </Card>

      {/* Recent Uploads */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Uploads</CardTitle>
          <CardDescription>Your latest video processing queue</CardDescription>
        </CardHeader>
        <CardContent>
          {uploads.length > 0 ? (
            <div className="space-y-4">
              {uploads.slice(0, 3).map((upload) => (
                <div key={upload.id} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-purple/20 to-neon-teal/20 rounded-lg flex items-center justify-center">
                    <Video className="h-8 w-8 text-electric-purple" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{upload.title}</h4>
                    <p className="text-sm text-muted-foreground">{upload.uploadTime}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      upload.status === 'Processing' 
                        ? 'bg-electric-purple/10 text-electric-purple' 
                        : upload.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-neon-teal/10 text-neon-teal'
                    }`}>
                      {upload.status}
                    </span>
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

export default DashboardHome;
