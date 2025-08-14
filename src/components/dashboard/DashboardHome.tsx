import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Upload, Link, Video, Eye, Download, Star, Calendar, Instagram, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

interface UploadItem {
  id: number;
  title: string;
  status: 'queued' | 'processing' | 'almost-done' | 'ready';
  uploadTime: string;
  thumbnail: string;
  progress: number;
  clipCount: number;
  statusMessage: string;
  videoUrl?: string;
  videoFile?: File;
  youtubeUrl?: string;
}

// Move this function to the top level so both components can access it
const getYouTubeEmbedUrl = (url: string): string => {
  const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)?.[1];
  return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
};

// Enhanced clip generation logic
const generateHighQualityClips = (duration: number = 180) => {
  // Simulate AI-powered clip selection based on video analysis
  const clips = [
    {
      id: 1,
      title: "Hook Moment",
      startTime: 15,
      endTime: 38,
      duration: "0:23",
      reason: "High energy speech detected with keyword 'secret'",
      aiScore: 95,
      thumbnail: "/placeholder.svg",
      aiTip: "This clip has a strong opening hook with emotional emphasis - perfect for TikTok!",
      videoUrl: "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAGhcmRhdGEAAALvAAJ+S"
    },
    {
      id: 2,
      title: "Value Delivery",
      startTime: 67,
      endTime: 89,
      duration: "0:22",
      reason: "Scene transition with key phrase 'watch this'",
      aiScore: 89,
      thumbnail: "/placeholder.svg",
      aiTip: "Clear value proposition with visual demonstration - ideal for Instagram Reels!",
      videoUrl: "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAGhcmRhdGEAAALvAAJ+S"
    },
    {
      id: 3,
      title: "Call to Action",
      startTime: 142,
      endTime: 169,
      duration: "0:27",
      reason: "High vocal emphasis with motivational tone",
      aiScore: 92,
      thumbnail: "/placeholder.svg",
      aiTip: "Strong call-to-action with compelling delivery - great for YouTube Shorts!",
      videoUrl: "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAGhcmRhdGEAAALvAAJ+S"
    }
  ];

  // If duration is too short, fallback to default segments
  if (duration < 45) {
    return [{
      id: 1,
      title: "Highlight Clip",
      startTime: 0,
      endTime: Math.min(30, duration),
      duration: `0:${Math.min(30, duration)}`,
      reason: "Full video excerpt (video too short for advanced analysis)",
      aiScore: 75,
      thumbnail: "/placeholder.svg",
      aiTip: "Short video converted to optimal clip length for social media.",
      videoUrl: "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAGhcmRhdGEAAALvAAJ+S"
    }];
  }

  return clips;
};

const DashboardHome = () => {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [selectedUpload, setSelectedUpload] = useState<number | null>(null);
  const [uploadPreview, setUploadPreview] = useState<{file?: File, youtubeUrl?: string} | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
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

  const validateVideoFile = (file: File): boolean => {
    const allowedTypes = ['video/mp4', 'video/quicktime', 'video/x-msvideo'];
    const maxSize = 500 * 1024 * 1024; // 500MB in bytes

    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Invalid File Type",
        description: "Please upload MP4, MOV, or AVI files only.",
        variant: "destructive"
      });
      return false;
    }

    if (file.size > maxSize) {
      toast({
        title: "File Too Large",
        description: "File size must be under 500MB.",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const validateYouTubeUrl = (url: string): boolean => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)[\w-]+/;
    
    if (!youtubeRegex.test(url)) {
      toast({
        title: "Invalid YouTube URL",
        description: "Please enter a valid YouTube video URL.",
        variant: "destructive"
      });
      return false;
    }

    return true;
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

    if (!validateYouTubeUrl(youtubeUrl)) {
      return;
    }

    setIsProcessing(true);
    setUploadPreview({ youtubeUrl });
    
    toast({
      title: "Upload complete!",
      description: "Here's your video. Starting clip generation...",
    });

    // Start processing after preview
    setTimeout(() => {
      const newUpload: UploadItem = {
        id: uploads.length + 1,
        title: "New Video from YouTube",
        status: "queued",
        uploadTime: "Just now",
        thumbnail: "/placeholder.svg",
        progress: 0,
        clipCount: 3,
        statusMessage: "🎬 Processing your clips – This might take a few seconds…",
        youtubeUrl: youtubeUrl
      };

      setUploads([newUpload, ...uploads]);
      setYoutubeUrl('');
      setUploadPreview(null);
      setIsProcessing(false);
      
      // Simulate enhanced processing progression
      simulateEnhancedProcessing(newUpload.id);
    }, 3000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!validateVideoFile(file)) {
      return;
    }

    setIsProcessing(true);
    const videoUrl = URL.createObjectURL(file);
    setUploadPreview({ file });

    toast({
      title: "Upload complete!",
      description: "Here's your video. Starting clip generation...",
    });

    // Start processing after preview
    setTimeout(() => {
      const newUpload: UploadItem = {
        id: uploads.length + 1,
        title: file.name.replace(/\.[^/.]+$/, ""),
        status: "queued",
        uploadTime: "Just now",
        thumbnail: "/placeholder.svg",
        progress: 0,
        clipCount: 3,
        statusMessage: "🎬 Processing your clips – This might take a few seconds…",
        videoFile: file,
        videoUrl: videoUrl
      };

      setUploads([newUpload, ...uploads]);
      setUploadPreview(null);
      setIsProcessing(false);
      
      // Simulate enhanced processing progression
      simulateEnhancedProcessing(newUpload.id);
    }, 3000);
  };

  const simulateEnhancedProcessing = (uploadId: number) => {
    let progress = 0;
    const processingStages = [
      { threshold: 20, status: 'queued', message: "🔍 Analyzing video content..." },
      { threshold: 40, status: 'processing', message: "🎯 Detecting highlights and speech patterns..." },
      { threshold: 60, status: 'processing', message: "✂️ Extracting high-energy segments..." },
      { threshold: 80, status: 'almost-done', message: "🎨 Optimizing clips for social media..." },
      { threshold: 100, status: 'ready', message: "Ready to share with the world!" }
    ];

    const interval = setInterval(() => {
      progress += Math.random() * 8 + 4; // Slightly faster progress
      
      const currentStage = processingStages.find(stage => progress < stage.threshold) || processingStages[processingStages.length - 1];
      
      setUploads(prev => prev.map(upload => {
        if (upload.id === uploadId) {
          if (progress >= 100) {
            clearInterval(interval);
            return {
              ...upload,
              status: 'ready' as const,
              progress: 100,
              statusMessage: "Ready to share with the world!"
            };
          }
          return {
            ...upload,
            status: currentStage.status as any,
            progress: Math.min(progress, 99),
            statusMessage: currentStage.message
          };
        }
        return upload;
      }));
    }, 1200); // Slightly longer intervals for better UX
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
      upload={uploads.find(u => u.id === selectedUpload)}
      onBack={() => setSelectedUpload(null)}
      onUploadAnother={() => setSelectedUpload(null)}
    />;
  }

  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Upload Your Video</h2>
        <p className="text-muted-foreground">Transform your content into viral short clips with AI-powered magic</p>
      </motion.div>

      {/* Upload Preview Section */}
      <AnimatePresence>
        {uploadPreview && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Video Preview</CardTitle>
                <CardDescription>Here's your video - clip generation starting soon!</CardDescription>
              </CardHeader>
              <CardContent>
                {uploadPreview.file ? (
                  <video
                    src={URL.createObjectURL(uploadPreview.file)}
                    controls
                    className="w-full max-w-2xl aspect-video rounded-lg"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : uploadPreview.youtubeUrl ? (
                  <iframe
                    src={getYouTubeEmbedUrl(uploadPreview.youtubeUrl)}
                    className="w-full max-w-2xl aspect-video rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : null}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upload Options */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* YouTube URL Upload */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Card className={isProcessing ? 'opacity-50' : ''}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Link className="h-4 w-4 sm:h-5 sm:w-5 text-electric-purple" />
                YouTube URL
              </CardTitle>
              <CardDescription>Paste a YouTube video link to get started</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="https://youtube.com/watch?v=..."
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                disabled={isProcessing}
                className="text-sm sm:text-base"
              />
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  onClick={handleYouTubeUpload}
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-electric-purple to-neon-teal hover:from-electric-purple/90 hover:to-neon-teal/90 text-sm sm:text-base"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Process Video'
                  )}
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* File Upload */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Card className={isProcessing ? 'opacity-50' : ''}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Upload className="h-4 w-4 sm:h-5 sm:w-5 text-neon-teal" />
                Upload MP4
              </CardTitle>
              <CardDescription>Upload your video file directly (MP4, MOV, AVI up to 500MB)</CardDescription>
            </CardHeader>
            <CardContent>
              <motion.div 
                className={`border-2 border-dashed border-border rounded-lg p-6 sm:p-8 text-center transition-colors ${
                  isProcessing ? 'cursor-not-allowed' : 'hover:border-electric-purple/50 cursor-pointer'
                }`}
                whileHover={!isProcessing ? { borderColor: 'hsl(var(--electric-purple))' } : {}}
              >
                <input
                  type="file"
                  accept="video/mp4,video/quicktime,video/x-msvideo"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                  disabled={isProcessing}
                />
                <label htmlFor="file-upload" className={isProcessing ? 'cursor-not-allowed' : 'cursor-pointer'}>
                  <motion.div
                    whileHover={!isProcessing ? { scale: 1.1 } : {}}
                    transition={{ duration: 0.2 }}
                  >
                    <Video className="h-10 w-10 sm:h-12 sm:w-12 text-muted-foreground mx-auto mb-4" />
                  </motion.div>
                  <p className="text-muted-foreground mb-2 text-sm sm:text-base">
                    {isProcessing ? 'Processing...' : 'Click to upload or drag and drop'}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">MP4, MOV, AVI up to 500MB</p>
                </label>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Processing Status */}
      {isProcessing && (
        <Card className="bg-gradient-to-r from-electric-purple/5 to-neon-teal/5 border-electric-purple/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-center space-x-3">
              <Loader2 className="h-6 w-6 animate-spin text-electric-purple" />
              <p className="text-lg font-medium text-foreground">
                🎬 Processing your clips – This might take a few seconds…
              </p>
            </div>
          </CardContent>
        </Card>
      )}

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
                    <p className="text-xs text-muted-foreground">
                      {upload.status === 'ready' ? `Generated ${upload.clipCount} clips` : `Generating ${upload.clipCount} clips...`}
                    </p>
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
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
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
    </motion.div>
  );
};

// Enhanced Clips Results View Component with improved AI analysis
const ClipsResultsView = ({ uploadId, upload, onBack, onUploadAnother }: { 
  uploadId: number; 
  upload?: UploadItem;
  onBack: () => void;
  onUploadAnother: () => void;
}) => {
  const [favoriteClips, setFavoriteClips] = useState<number[]>([]);
  const [clipNotes, setClipNotes] = useState<Record<number, string>>({});
  const { toast } = useToast();

  // Generate high-quality clips using enhanced AI logic
  const enhancedClips = generateHighQualityClips();

  const handleDownload = (clip: any) => {
    // Create a mock video file for download
    const videoBlob = new Blob(['mock video content'], { type: 'video/mp4' });
    const url = URL.createObjectURL(videoBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${clip.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.mp4`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Download Complete",
      description: `${clip.title} has been downloaded successfully!`,
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
    // Create a mock ZIP file download
    const zipBlob = new Blob(['mock zip content'], { type: 'application/zip' });
    const url = URL.createObjectURL(zipBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `all_clips_${Date.now()}.zip`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Download Complete",
      description: "All clips have been downloaded as ZIP file!",
    });
  };

  return (
    <motion.div className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={onBack}>
          ← Back to Uploads
        </Button>
        <div>
          <h2 className="text-3xl font-bold text-foreground">Your Viral Clips Are Ready! 🎉</h2>
          <p className="text-muted-foreground">AI generated {enhancedClips.length} high-quality clips ready to share</p>
        </div>
      </div>

      {/* Original Video */}
      <Card>
        <CardHeader>
          <CardTitle>Original Video</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-gradient-to-br from-electric-purple/20 to-neon-teal/20 rounded-lg flex items-center justify-center">
            {upload?.videoFile ? (
              <video
                src={URL.createObjectURL(upload.videoFile)}
                controls
                className="w-full h-full rounded-lg"
              >
                Your browser does not support the video tag.
              </video>
            ) : upload?.youtubeUrl ? (
              <iframe
                src={getYouTubeEmbedUrl(upload.youtubeUrl)}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="text-center">
                <Video className="h-16 w-16 mx-auto mb-4 text-electric-purple" />
                <p className="text-lg font-medium">{upload?.title || "Original Video"}</p>
                <p className="text-sm text-muted-foreground">Duration: 3:45</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Generated Clips */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {enhancedClips.map((clip) => (
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
                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {clip.startTime}s - {clip.endTime}s
                </div>
                <div className="absolute bottom-2 right-2 bg-electric-purple/90 text-white px-2 py-1 rounded text-xs">
                  AI Score: {clip.aiScore}%
                </div>
              </div>
              
              <div className="p-4 space-y-4">
                {/* Clip Info */}
                <div>
                  <h3 className="font-semibold">{clip.title}</h3>
                  <p className="text-sm text-muted-foreground">Duration: {clip.duration}</p>
                  <p className="text-xs text-muted-foreground mt-1">Reason: {clip.reason}</p>
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
                    onClick={() => handleDownload(clip)}
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
    </motion.div>
  );
};

export default DashboardHome;
