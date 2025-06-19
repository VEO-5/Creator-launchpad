
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Eye, Heart, MessageCircle, TrendingUp, Users, Star, Calendar, Clock, Target } from "lucide-react";

const Insights = () => {
  const stats = {
    totalViews: 15420,
    totalLikes: 1240,
    totalComments: 89,
    followers: 2450,
    growthRate: 12.5,
    engagementRate: 8.2
  };

  const weeklyStats = [
    { day: 'Mon', views: 2100, engagement: 8.1 },
    { day: 'Tue', views: 1800, engagement: 7.9 },
    { day: 'Wed', views: 2400, engagement: 9.2 },
    { day: 'Thu', views: 2200, engagement: 8.5 },
    { day: 'Fri', views: 2800, engagement: 9.8 },
    { day: 'Sat', views: 2600, engagement: 8.7 },
    { day: 'Sun', views: 1520, engagement: 7.4 },
  ];

  const topPerformers = [
    {
      title: "How to Create Viral Content",
      views: 8500,
      likes: 650,
      comments: 45,
      engagement: 8.2,
      platform: "TikTok",
      growth: "+15%"
    },
    {
      title: "Marketing Tips for Creators",
      views: 4200,
      likes: 380,
      comments: 28,
      engagement: 9.7,
      platform: "Instagram",
      growth: "+22%"
    },
    {
      title: "Building Your Personal Brand",
      views: 2720,
      likes: 210,
      comments: 16,
      engagement: 8.3,
      platform: "YouTube",
      growth: "+8%"
    }
  ];

  const platformStats = [
    { platform: "TikTok", views: 8940, percentage: 58, color: "bg-black" },
    { platform: "Instagram", views: 4200, percentage: 27, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { platform: "YouTube", views: 2280, percentage: 15, color: "bg-red-600" },
  ];

  const getMaxViews = () => Math.max(...weeklyStats.map(s => s.views));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Insights</h2>
        <p className="text-muted-foreground">Track your content performance and growth across all platforms</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-electric-purple" />
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.totalViews.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Views</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-xs text-green-500">+{stats.growthRate}%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.totalLikes.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Likes</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-xs text-green-500">+18%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-neon-teal" />
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.totalComments}</p>
                <p className="text-sm text-muted-foreground">Comments</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-xs text-green-500">+32%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-electric-purple" />
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.followers.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Followers</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-xs text-green-500">+{stats.growthRate}%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Growth and Engagement Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Growth Rate
            </CardTitle>
            <CardDescription>Month over month growth</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">+{stats.growthRate}%</p>
              <p className="text-sm text-muted-foreground">This month</p>
            </div>
            <Progress value={stats.growthRate * 5} className="w-full" />
            <div className="text-center text-xs text-muted-foreground">
              Goal: 15% monthly growth
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-electric-purple" />
              Engagement Rate
            </CardTitle>
            <CardDescription>Average engagement across content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-electric-purple">{stats.engagementRate}%</p>
              <p className="text-sm text-muted-foreground">Average rate</p>
            </div>
            <Progress value={stats.engagementRate * 10} className="w-full" />
            <div className="text-center text-xs text-muted-foreground">
              Industry average: 6.2%
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Platform Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-neon-teal" />
            Platform Performance
          </CardTitle>
          <CardDescription>Views distribution across platforms</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {platformStats.map((platform, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{platform.platform}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{platform.views.toLocaleString()} views</span>
                  <Badge variant="secondary">{platform.percentage}%</Badge>
                </div>
              </div>
              <Progress value={platform.percentage} className="h-3" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Weekly Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-electric-purple" />
            Weekly Performance
          </CardTitle>
          <CardDescription>Daily views and engagement this week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {weeklyStats.map((day, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 text-sm font-medium text-muted-foreground">{day.day}</div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{day.views.toLocaleString()} views</span>
                    <span className="text-electric-purple">{day.engagement}% engagement</span>
                  </div>
                  <div className="relative">
                    <Progress value={(day.views / getMaxViews()) * 100} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Performing Content */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Content</CardTitle>
          <CardDescription>Your most successful videos this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPerformers.map((video, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-electric-purple/20 to-neon-teal/20 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-electric-purple">#{index + 1}</span>
                </div>
                
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{video.title}</h4>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{video.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      <span>{video.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" />
                      <span>{video.comments}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {video.platform}
                    </Badge>
                  </div>
                </div>

                <div className="text-right space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-bold text-electric-purple">{video.engagement}%</p>
                    <Badge className="bg-green-100 text-green-800 border-0">
                      {video.growth}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Engagement</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Insights;
