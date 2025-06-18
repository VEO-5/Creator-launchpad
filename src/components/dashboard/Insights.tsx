
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Eye, Heart, MessageCircle, TrendingUp, Users, Star } from "lucide-react";

const Insights = () => {
  const stats = {
    totalViews: 15420,
    totalLikes: 1240,
    totalComments: 89,
    followers: 2450,
    growthRate: 12.5,
    engagementRate: 8.2
  };

  const topPerformers = [
    {
      title: "How to Create Viral Content",
      views: 8500,
      likes: 650,
      comments: 45,
      engagement: 8.2
    },
    {
      title: "Marketing Tips for Creators",
      views: 4200,
      likes: 380,
      comments: 28,
      engagement: 9.7
    },
    {
      title: "Building Your Personal Brand",
      views: 2720,
      likes: 210,
      comments: 16,
      engagement: 8.3
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Insights</h2>
        <p className="text-muted-foreground">Track your content performance and growth</p>
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
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Growth Metrics */}
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
          </CardContent>
        </Card>
      </div>

      {/* Top Performers */}
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
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-lg font-bold text-electric-purple">{video.engagement}%</p>
                  <p className="text-sm text-muted-foreground">Engagement</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Over Time</CardTitle>
          <CardDescription>Views and engagement trends</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gradient-to-br from-electric-purple/5 to-neon-teal/5 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-electric-purple mx-auto mb-4" />
              <p className="text-lg font-semibold text-foreground">Chart Coming Soon</p>
              <p className="text-muted-foreground">Advanced analytics and visualizations in development</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Insights;
