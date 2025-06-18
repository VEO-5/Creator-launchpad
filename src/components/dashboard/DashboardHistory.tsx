
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Clock, Instagram, Youtube, Play, Eye, Heart, MessageCircle } from "lucide-react";

const DashboardHistory = () => {
  const publishHistory = [
    {
      id: 1,
      title: "How to Create Viral Content - Clip 1",
      platform: "Instagram",
      publishedTime: "2 hours ago",
      status: "Posted",
      views: 1240,
      likes: 89,
      comments: 12,
      thumbnail: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Marketing Tips - Best Moments",
      platform: "TikTok",
      publishedTime: "1 day ago",
      status: "Posted",
      views: 3420,
      likes: 234,
      comments: 28,
      thumbnail: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Personal Brand Building Tips",
      platform: "YouTube Shorts",
      publishedTime: "2 days ago",
      status: "Failed",
      views: 0,
      likes: 0,
      comments: 0,
      thumbnail: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Social Media Strategy Highlights",
      platform: "Instagram",
      publishedTime: "3 days ago",
      status: "Posted",
      views: 856,
      likes: 67,
      comments: 8,
      thumbnail: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Content Creation Workflow",
      platform: "TikTok",
      publishedTime: "1 week ago",
      status: "Pending",
      views: 0,
      likes: 0,
      comments: 0,
      thumbnail: "/placeholder.svg"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Posted':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Failed':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'Pending':
        return <Clock className="h-4 w-4 text-electric-purple" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Posted':
        return 'bg-green-100 text-green-800';
      case 'Failed':
        return 'bg-red-100 text-red-800';
      case 'Pending':
        return 'bg-electric-purple/10 text-electric-purple';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Instagram':
        return <Instagram className="h-4 w-4" />;
      case 'YouTube Shorts':
        return <Youtube className="h-4 w-4" />;
      case 'TikTok':
        return <Play className="h-4 w-4" />;
      default:
        return <Play className="h-4 w-4" />;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Instagram':
        return 'bg-pink-100 text-pink-800';
      case 'YouTube Shorts':
        return 'bg-red-100 text-red-800';
      case 'TikTok':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const totalPosts = publishHistory.length;
  const successfulPosts = publishHistory.filter(p => p.status === 'Posted').length;
  const failedPosts = publishHistory.filter(p => p.status === 'Failed').length;
  const pendingPosts = publishHistory.filter(p => p.status === 'Pending').length;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Publish History</h2>
        <p className="text-muted-foreground">Track all your published content and performance</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Play className="h-5 w-5 text-electric-purple" />
              <div>
                <p className="text-2xl font-bold text-foreground">{totalPosts}</p>
                <p className="text-sm text-muted-foreground">Total Posts</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-2xl font-bold text-foreground">{successfulPosts}</p>
                <p className="text-sm text-muted-foreground">Successful</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <XCircle className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-2xl font-bold text-foreground">{failedPosts}</p>
                <p className="text-sm text-muted-foreground">Failed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-electric-purple" />
              <div>
                <p className="text-2xl font-bold text-foreground">{pendingPosts}</p>
                <p className="text-sm text-muted-foreground">Pending</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Publish History List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Publications</CardTitle>
          <CardDescription>Your content publishing history and performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {publishHistory.map((post) => (
              <div key={post.id} className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-electric-purple/20 to-neon-teal/20 rounded-lg flex items-center justify-center">
                  <Play className="h-8 w-8 text-electric-purple" />
                </div>
                
                <div className="flex-1 space-y-1">
                  <h4 className="font-semibold text-foreground">{post.title}</h4>
                  <p className="text-sm text-muted-foreground">{post.publishedTime}</p>
                  {post.status === 'Posted' && (
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <Badge className={`${getPlatformColor(post.platform)} border-0`}>
                    <div className="flex items-center gap-1">
                      {getPlatformIcon(post.platform)}
                      {post.platform}
                    </div>
                  </Badge>
                  
                  <Badge className={`${getStatusColor(post.status)} border-0`}>
                    <div className="flex items-center gap-1">
                      {getStatusIcon(post.status)}
                      {post.status}
                    </div>
                  </Badge>

                  <Button variant="outline" size="sm">
                    {post.status === 'Failed' ? 'Retry' : post.status === 'Pending' ? 'Cancel' : 'View'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Summary</CardTitle>
          <CardDescription>Overall content performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-electric-purple/10 to-neon-teal/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Eye className="h-8 w-8 text-electric-purple" />
              </div>
              <p className="text-2xl font-bold text-foreground">
                {publishHistory.filter(p => p.status === 'Posted').reduce((sum, p) => sum + p.views, 0).toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground">Total Views</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-electric-purple/10 to-neon-teal/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Heart className="h-8 w-8 text-red-500" />
              </div>
              <p className="text-2xl font-bold text-foreground">
                {publishHistory.filter(p => p.status === 'Posted').reduce((sum, p) => sum + p.likes, 0)}
              </p>
              <p className="text-sm text-muted-foreground">Total Likes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-electric-purple/10 to-neon-teal/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <MessageCircle className="h-8 w-8 text-neon-teal" />
              </div>
              <p className="text-2xl font-bold text-foreground">
                {publishHistory.filter(p => p.status === 'Posted').reduce((sum, p) => sum + p.comments, 0)}
              </p>
              <p className="text-sm text-muted-foreground">Total Comments</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHistory;
