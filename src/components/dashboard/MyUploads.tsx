
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Video, Eye, Clock, CheckCircle, AlertCircle, Star, Search, Filter } from "lucide-react";

interface Upload {
  id: number;
  title: string;
  uploadTime: string;
  status: 'completed' | 'processing' | 'failed';
  duration: string;
  clips: number;
  views: number;
  thumbnail: string;
  isFavorite?: boolean;
  tags?: string[];
}

const MyUploads = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [favoriteUploads, setFavoriteUploads] = useState<number[]>([]);

  const uploads: Upload[] = [
    {
      id: 1,
      title: "How to Create Viral Content",
      uploadTime: "2 hours ago",
      status: "completed",
      duration: "12:34",
      clips: 5,
      views: 1240,
      thumbnail: "/placeholder.svg",
      tags: ["tutorial", "viral", "marketing"]
    },
    {
      id: 2,
      title: "Marketing Tips for Creators",
      uploadTime: "1 day ago",
      status: "processing",
      duration: "8:22",
      clips: 0,
      views: 0,
      thumbnail: "/placeholder.svg",
      tags: ["marketing", "tips"]
    },
    {
      id: 3,
      title: "Building Your Personal Brand",
      uploadTime: "3 days ago",
      status: "completed",
      duration: "15:45",
      clips: 8,
      views: 3240,
      thumbnail: "/placeholder.svg",
      tags: ["branding", "personal", "growth"]
    },
    {
      id: 4,
      title: "Social Media Strategy 2024",
      uploadTime: "1 week ago",
      status: "failed",
      duration: "10:12",
      clips: 0,
      views: 0,
      thumbnail: "/placeholder.svg",
      tags: ["strategy", "social-media"]
    },
    {
      id: 5,
      title: "Content Creation Workflow",
      uploadTime: "2 weeks ago",
      status: "completed",
      duration: "7:30",
      clips: 4,
      views: 890,
      thumbnail: "/placeholder.svg",
      tags: ["workflow", "content", "productivity"]
    }
  ];

  const filteredUploads = uploads.filter(upload => {
    const matchesSearch = upload.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         upload.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || upload.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'processing':
        return <Clock className="h-4 w-4 text-electric-purple" />;
      case 'failed':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-electric-purple/10 text-electric-purple';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const toggleFavorite = (uploadId: number) => {
    setFavoriteUploads(prev => 
      prev.includes(uploadId) 
        ? prev.filter(id => id !== uploadId)
        : [...prev, uploadId]
    );
  };

  const statusCounts = {
    all: uploads.length,
    completed: uploads.filter(u => u.status === 'completed').length,
    processing: uploads.filter(u => u.status === 'processing').length,
    failed: uploads.filter(u => u.status === 'failed').length,
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">My Uploads</h2>
        <p className="text-muted-foreground">Manage and track all your uploaded videos</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Video className="h-5 w-5 text-electric-purple" />
              <div>
                <p className="text-2xl font-bold text-foreground">{uploads.length}</p>
                <p className="text-sm text-muted-foreground">Total Videos</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-2xl font-bold text-foreground">{statusCounts.completed}</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-electric-purple" />
              <div>
                <p className="text-2xl font-bold text-foreground">{statusCounts.processing}</p>
                <p className="text-sm text-muted-foreground">Processing</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-neon-teal" />
              <div>
                <p className="text-2xl font-bold text-foreground">{uploads.reduce((sum, u) => sum + u.views, 0).toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Views</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search videos or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={statusFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setStatusFilter('all')}
                size="sm"
              >
                All ({statusCounts.all})
              </Button>
              <Button
                variant={statusFilter === 'completed' ? 'default' : 'outline'}
                onClick={() => setStatusFilter('completed')}
                size="sm"
              >
                Completed ({statusCounts.completed})
              </Button>
              <Button
                variant={statusFilter === 'processing' ? 'default' : 'outline'}
                onClick={() => setStatusFilter('processing')}
                size="sm"
              >
                Processing ({statusCounts.processing})
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Uploads List */}
      <Card>
        <CardHeader>
          <CardTitle>All Uploads</CardTitle>
          <CardDescription>Your video processing history and status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredUploads.map((upload) => (
              <div key={upload.id} className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-20 h-20 bg-gradient-to-br from-electric-purple/20 to-neon-teal/20 rounded-lg flex items-center justify-center relative">
                  <Video className="h-8 w-8 text-electric-purple" />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute -top-1 -right-1 h-6 w-6"
                    onClick={() => toggleFavorite(upload.id)}
                  >
                    <Star className={`h-3 w-3 ${favoriteUploads.includes(upload.id) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
                  </Button>
                </div>
                
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-foreground">{upload.title}</h4>
                    {favoriteUploads.includes(upload.id) && (
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{upload.uploadTime}</span>
                    <span>Duration: {upload.duration}</span>
                    {upload.clips > 0 && <span>{upload.clips} clips generated</span>}
                    {upload.views > 0 && (
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{upload.views.toLocaleString()} views</span>
                      </div>
                    )}
                  </div>
                  {upload.tags && (
                    <div className="flex gap-1 flex-wrap">
                      {upload.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <Badge className={`${getStatusColor(upload.status)} border-0`}>
                    <div className="flex items-center gap-1">
                      {getStatusIcon(upload.status)}
                      {upload.status.charAt(0).toUpperCase() + upload.status.slice(1)}
                    </div>
                  </Badge>
                  <Button variant="outline" size="sm">
                    {upload.status === 'completed' ? 'View Clips' : upload.status === 'failed' ? 'Retry' : 'Details'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredUploads.length === 0 && (
            <div className="text-center py-8">
              <Video className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No uploads found matching your criteria.</p>
              <p className="text-sm text-muted-foreground">Try adjusting your search or filters.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MyUploads;
