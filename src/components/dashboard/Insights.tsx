
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Eye, Heart, MessageCircle, TrendingUp, Users, Star } from "lucide-react";
import { useUploads } from "@/contexts/UploadsContext";

const Insights = () => {
  const { uploads } = useUploads();

  const completedUploads = uploads.filter(u => u.status === 'Completed');
  
  const stats = {
    totalViews: completedUploads.reduce((sum, u) => sum + u.views, 0),
    totalLikes: completedUploads.reduce((sum, u) => sum + u.likes, 0),
    totalComments: completedUploads.reduce((sum, u) => sum + u.comments, 0),
    followers: 2450 + Math.floor(completedUploads.length * 50), // Mock growth based on uploads
    growthRate: completedUploads.length > 0 ? 12.5 + (completedUploads.length * 2) : 0,
    engagementRate: completedUploads.length > 0 ? 
      ((completedUploads.reduce((sum, u) => sum + u.likes + u.comments, 0) / Math.max(1, completedUploads.reduce((sum, u) => sum + u.views, 0))) * 100).toFixed(1)
      : 0
  };

  const topPerformers = completedUploads
    .sort((a, b) => b.views - a.views)
    .slice(0, 3)
    .map(upload => ({
      title: upload.title,
      views: upload.views,
      likes: upload.likes,
      comments: upload.comments,
      engagement: upload.views > 0 ? ((upload.likes + upload.comments) / upload.views * 100).toFixed(1) : '0'
    }));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Insights</h2>
        <p className="text-muted-foreground">Track your content performance and growth</p>
      </div>

      {completedUploads.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No Insights Available</h3>
            <p className="text-muted-foreground">Upload and process some videos to see your content insights here.</p>
          </CardContent>
        </Card>
      ) : (
        <>
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
                <CardDescription>Based on your upload activity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-500">+{stats.growthRate}%</p>
                  <p className="text-sm text-muted-foreground">This month</p>
                </div>
                <Progress value={Math.min(stats.growthRate * 2, 100)} className="w-full" />
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
                <Progress value={Number(stats.engagementRate) * 10} className="w-full" />
              </CardContent>
            </Card>
          </div>

          {/* Top Performers */}
          {topPerformers.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Content</CardTitle>
                <CardDescription>Your most successful videos</CardDescription>
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
          )}

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
        </>
      )}
    </div>
  );
};

export default Insights;
