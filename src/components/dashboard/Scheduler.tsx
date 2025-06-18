
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Instagram, Youtube, Play, Plus } from "lucide-react";

const Scheduler = () => {
  const [scheduledPosts, setScheduledPosts] = useState([
    {
      id: 1,
      title: "How to Create Viral Content - Clip 1",
      platform: "Instagram",
      scheduledTime: "Today, 2:00 PM",
      status: "Scheduled",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Marketing Tips - Best Moments",
      platform: "TikTok",
      scheduledTime: "Tomorrow, 10:00 AM",
      status: "Scheduled",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Personal Brand Building Tips",
      platform: "YouTube Shorts",
      scheduledTime: "Dec 20, 3:00 PM",
      status: "Scheduled",
      thumbnail: "/placeholder.svg"
    }
  ]);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Instagram':
        return <Instagram className="h-4 w-4" />;
      case 'YouTube Shorts':
        return <Youtube className="h-4 w-4" />;
      case 'TikTok':
        return <Play className="h-4 w-4" />;
      default:
        return <Calendar className="h-4 w-4" />;
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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Scheduler</h2>
          <p className="text-muted-foreground">Manage and schedule your content across platforms</p>
        </div>
        <Button className="bg-gradient-to-r from-electric-purple to-neon-teal hover:from-electric-purple/90 hover:to-neon-teal/90">
          <Plus className="h-4 w-4 mr-2" />
          Schedule Post
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-electric-purple" />
              <div>
                <p className="text-2xl font-bold text-foreground">{scheduledPosts.length}</p>
                <p className="text-sm text-muted-foreground">Scheduled Posts</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-neon-teal" />
              <div>
                <p className="text-2xl font-bold text-foreground">2</p>
                <p className="text-sm text-muted-foreground">Posts Today</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Play className="h-5 w-5 text-electric-purple" />
              <div>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-sm text-muted-foreground">Platforms</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Calendar View Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Calendar View</CardTitle>
          <CardDescription>Visual schedule of your upcoming posts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gradient-to-br from-electric-purple/5 to-neon-teal/5 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-electric-purple mx-auto mb-4" />
              <p className="text-lg font-semibold text-foreground">Calendar View Coming Soon</p>
              <p className="text-muted-foreground">Interactive calendar for better scheduling</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scheduled Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Posts</CardTitle>
          <CardDescription>Your scheduled content queue</CardDescription>
        </CardHeader>
        <CardContent>
          {scheduledPosts.length > 0 ? (
            <div className="space-y-4">
              {scheduledPosts.map((post) => (
                <div key={post.id} className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-purple/20 to-neon-teal/20 rounded-lg flex items-center justify-center">
                    <Play className="h-8 w-8 text-electric-purple" />
                  </div>
                  
                  <div className="flex-1 space-y-1">
                    <h4 className="font-semibold text-foreground">{post.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{post.scheduledTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Badge className={`${getPlatformColor(post.platform)} border-0`}>
                      <div className="flex items-center gap-1">
                        {getPlatformIcon(post.platform)}
                        {post.platform}
                      </div>
                    </Badge>
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      {post.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No scheduled posts yet.</p>
              <p className="text-sm text-muted-foreground">Schedule your first post to get started!</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Platform Connections */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Connections</CardTitle>
          <CardDescription>Connect your social media accounts for seamless posting</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 border border-border rounded-lg">
              <Instagram className="h-8 w-8 text-pink-600" />
              <div className="flex-1">
                <p className="font-semibold text-foreground">Instagram</p>
                <p className="text-sm text-green-600">Connected</p>
              </div>
              <Button variant="outline" size="sm">Configure</Button>
            </div>

            <div className="flex items-center gap-3 p-4 border border-border rounded-lg">
              <Play className="h-8 w-8 text-purple-600" />
              <div className="flex-1">
                <p className="font-semibold text-foreground">TikTok</p>
                <p className="text-sm text-muted-foreground">Not connected</p>
              </div>
              <Button variant="outline" size="sm">Connect</Button>
            </div>

            <div className="flex items-center gap-3 p-4 border border-border rounded-lg">
              <Youtube className="h-8 w-8 text-red-600" />
              <div className="flex-1">
                <p className="font-semibold text-foreground">YouTube</p>
                <p className="text-sm text-green-600">Connected</p>
              </div>
              <Button variant="outline" size="sm">Configure</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Scheduler;
