
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Plus, Edit, Trash2 } from 'lucide-react';

const mockScheduledPosts = [
  {
    id: 1,
    title: "React Performance Tips - Clip 1",
    platform: "YouTube Shorts",
    scheduledDate: "2024-01-20",
    scheduledTime: "10:00 AM",
    status: "scheduled",
    content: "🚀 This will blow your mind! The secret nobody talks about..."
  },
  {
    id: 2,
    title: "Design System Best Practices - Clip 3",
    platform: "TikTok",
    scheduledDate: "2024-01-20",
    scheduledTime: "2:00 PM", 
    status: "scheduled",
    content: "💡 Amazing results you need to see - this changes everything!"
  },
  {
    id: 3,
    title: "JavaScript Tips & Tricks - Clip 2",
    platform: "Instagram Reels",
    scheduledDate: "2024-01-21",
    scheduledTime: "9:00 AM",
    status: "pending",
    content: "✨ You won't believe what happens next in this tutorial"
  }
];

const Scheduler = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'YouTube Shorts': return 'bg-red-100 text-red-800';
      case 'TikTok': return 'bg-black text-white';
      case 'Instagram Reels': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-purple-600" />
            Scheduler
          </h2>
          <p className="text-gray-600">Manage your scheduled posts across platforms</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Schedule New Post
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">5</div>
            <div className="text-sm text-gray-600">Scheduled Today</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">3</div>
            <div className="text-sm text-gray-600">Pending Approval</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">12</div>
            <div className="text-sm text-gray-600">This Week</div>
          </CardContent>
        </Card>
      </div>

      {/* Scheduled Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Posts</CardTitle>
          <CardDescription>Your scheduled content across all platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockScheduledPosts.map((post) => (
              <div key={post.id} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium text-gray-900">{post.title}</h4>
                    <Badge className={getPlatformColor(post.platform)}>
                      {post.platform}
                    </Badge>
                    <Badge className={getStatusColor(post.status)}>
                      {post.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.scheduledDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.scheduledTime}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 bg-gray-50 p-2 rounded">
                    {post.content}
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Calendar View (Placeholder) */}
      <Card>
        <CardHeader>
          <CardTitle>Calendar View</CardTitle>
          <CardDescription>Visual overview of your posting schedule</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Calendar className="h-12 w-12 mx-auto mb-4" />
              <p>Calendar view coming soon</p>
              <p className="text-sm">Full calendar integration for easier scheduling</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Scheduler;
