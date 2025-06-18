
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Archive, Search, Filter, Eye, Heart, MessageCircle, ExternalLink } from 'lucide-react';

const mockPublishHistory = [
  {
    id: 1,
    title: "How to Build a Startup in 2024 - Clip 1",
    platform: "YouTube Shorts",
    publishDate: "2024-01-15",
    status: "published",
    views: 5432,
    likes: 287,
    comments: 45,
    link: "https://youtube.com/shorts/abc123"
  },
  {
    id: 2,
    title: "React Performance Tips - Clip 2",
    platform: "TikTok",
    publishDate: "2024-01-14",
    status: "published",
    views: 8765,
    likes: 543,
    comments: 87,
    link: "https://tiktok.com/@user/video/123"
  },
  {
    id: 3,
    title: "Design System Best Practices - Clip 3",
    platform: "Instagram Reels",
    publishDate: "2024-01-13",
    status: "published",
    views: 3241,
    likes: 198,
    comments: 32,
    link: "https://instagram.com/reel/xyz789"
  },
  {
    id: 4,
    title: "JavaScript Tips & Tricks - Clip 1",
    platform: "YouTube Shorts",
    publishDate: "2024-01-12",
    status: "failed",
    views: 0,
    likes: 0,
    comments: 0,
    link: ""
  },
  {
    id: 5,
    title: "Web Development Trends - Clip 4",
    platform: "TikTok",
    publishDate: "2024-01-11",
    status: "published",
    views: 12453,
    likes: 876,
    comments: 123,
    link: "https://tiktok.com/@user/video/456"
  }
];

const PublishHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [platformFilter, setPlatformFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

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
      case 'published': return 'bg-green-100 text-green-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredHistory = mockPublishHistory.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform = platformFilter === 'all' || post.platform === platformFilter;
    const matchesStatus = statusFilter === 'all' || post.status === statusFilter;
    return matchesSearch && matchesPlatform && matchesStatus;
  });

  const totalViews = mockPublishHistory.reduce((sum, post) => sum + post.views, 0);
  const totalLikes = mockPublishHistory.reduce((sum, post) => sum + post.likes, 0);
  const totalComments = mockPublishHistory.reduce((sum, post) => sum + post.comments, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Archive className="h-6 w-6 text-purple-600" />
            Publish History
          </h2>
          <p className="text-gray-600">View all your published content and performance</p>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600">{mockPublishHistory.length}</div>
            <div className="text-sm text-gray-600">Total Posts</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{totalViews.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Views</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">{totalLikes.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Likes</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{totalComments}</div>
            <div className="text-sm text-gray-600">Total Comments</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={platformFilter} onValueChange={setPlatformFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Platforms</SelectItem>
                <SelectItem value="YouTube Shorts">YouTube Shorts</SelectItem>
                <SelectItem value="TikTok">TikTok</SelectItem>
                <SelectItem value="Instagram Reels">Instagram Reels</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Posts List */}
      <Card>
        <CardHeader>
          <CardTitle>Published Posts</CardTitle>
          <CardDescription>Complete history of your published content</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredHistory.map((post) => (
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
                  
                  <div className="text-sm text-gray-500 mb-2">
                    Published on {post.publishDate}
                  </div>
                  
                  {post.status === 'published' && (
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {post.views.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {post.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        {post.comments}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex gap-2">
                  {post.link && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={post.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PublishHistory;
