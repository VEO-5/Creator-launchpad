
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Video, Clock, Eye, Calendar } from 'lucide-react';

const mockUploads = [
  {
    id: 1,
    title: 'How to Build a Startup in 2024',
    thumbnail: '/placeholder.svg',
    duration: '15:32',
    uploadDate: '2024-01-15',
    status: 'processed',
    clips: 5,
    views: 1234
  },
  {
    id: 2,
    title: 'React Performance Tips',
    thumbnail: '/placeholder.svg',
    duration: '8:45',
    uploadDate: '2024-01-12',
    status: 'processing',
    clips: 0,
    views: 0
  },
  {
    id: 3,
    title: 'Design System Best Practices',
    thumbnail: '/placeholder.svg',
    duration: '22:18',
    uploadDate: '2024-01-10',
    status: 'processed',
    clips: 8,
    views: 2567
  }
];

const MyUploads = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Uploads</h2>
          <p className="text-gray-600">Manage your uploaded videos and generated clips</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
          Upload New Video
        </Button>
      </div>

      <div className="grid gap-4">
        {mockUploads.map((upload) => (
          <Card key={upload.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-32 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Video className="h-8 w-8 text-gray-400" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 truncate">{upload.title}</h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {upload.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {upload.uploadDate}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {upload.views.toLocaleString()} views
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={upload.status === 'processed' ? 'default' : 'secondary'}
                        className={upload.status === 'processed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                        }
                      >
                        {upload.status}
                      </Badge>
                      {upload.status === 'processed' && (
                        <Badge variant="outline">
                          {upload.clips} clips generated
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                    {upload.status === 'processed' && (
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        View Clips
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyUploads;
