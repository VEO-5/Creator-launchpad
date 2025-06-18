
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Eye, Heart, MessageCircle, Users, Trophy } from 'lucide-react';

const mockInsights = {
  totalViews: 15672,
  totalLikes: 1234,
  totalComments: 567,
  totalShares: 89,
  avgEngagement: 8.2,
  topPerformer: {
    title: "How to Build a Startup in 2024",
    views: 5432,
    engagement: 12.4
  }
};

const recentPosts = [
  {
    id: 1,
    title: "React Performance Tips",
    platform: "YouTube",
    views: 2341,
    likes: 187,
    comments: 45,
    engagement: 9.8
  },
  {
    id: 2,
    title: "Design System Best Practices",
    platform: "TikTok", 
    views: 1876,
    likes: 234,
    comments: 67,
    engagement: 16.1
  },
  {
    id: 3,
    title: "JavaScript Tips & Tricks",
    platform: "Instagram",
    views: 3421,
    likes: 289,
    comments: 78,
    engagement: 10.7
  }
];

const Insights = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-purple-600" />
          Insights
        </h2>
        <p className="text-gray-600">Track your content performance and engagement</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-600">Total Views</span>
            </div>
            <div className="mt-2">
              <span className="text-2xl font-bold">{mockInsights.totalViews.toLocaleString()}</span>
              <span className="text-sm text-green-600 ml-2">+12.5%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-600" />
              <span className="text-sm font-medium text-gray-600">Total Likes</span>
            </div>
            <div className="mt-2">
              <span className="text-2xl font-bold">{mockInsights.totalLikes.toLocaleString()}</span>
              <span className="text-sm text-green-600 ml-2">+8.3%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-gray-600">Comments</span>
            </div>
            <div className="mt-2">
              <span className="text-2xl font-bold">{mockInsights.totalComments}</span>
              <span className="text-sm text-green-600 ml-2">+15.7%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-600">Avg Engagement</span>
            </div>
            <div className="mt-2">
              <span className="text-2xl font-bold">{mockInsights.avgEngagement}%</span>
              <span className="text-sm text-green-600 ml-2">+2.1%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Performer */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-600" />
            Top Performer
          </CardTitle>
          <CardDescription>Your best performing content this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
            <div>
              <h3 className="font-semibold text-gray-900">{mockInsights.topPerformer.title}</h3>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                <span>{mockInsights.topPerformer.views.toLocaleString()} views</span>
                <span>{mockInsights.topPerformer.engagement}% engagement</span>
              </div>
            </div>
            <Badge className="bg-yellow-100 text-yellow-800">
              Best Performance
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Posts Performance</CardTitle>
          <CardDescription>Performance metrics for your latest content</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{post.title}</h4>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                    <Badge variant="outline">{post.platform}</Badge>
                    <span>{post.views.toLocaleString()} views</span>
                    <span>{post.likes} likes</span>
                    <span>{post.comments} comments</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-semibold text-purple-600">{post.engagement}%</span>
                  <div className="text-xs text-gray-500">engagement</div>
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
