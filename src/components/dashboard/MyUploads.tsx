
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Video, Eye, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { useUploads } from "@/contexts/UploadsContext";

const MyUploads = () => {
  const { uploads } = useUploads();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Processing':
        return <Clock className="h-4 w-4 text-electric-purple" />;
      case 'Failed':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-electric-purple/10 text-electric-purple';
      case 'Failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const completedUploads = uploads.filter(u => u.status === 'Completed').length;
  const processingUploads = uploads.filter(u => u.status === 'Processing').length;
  const totalViews = uploads.reduce((sum, u) => sum + u.views, 0);

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
                <p className="text-2xl font-bold text-foreground">{completedUploads}</p>
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
                <p className="text-2xl font-bold text-foreground">{processingUploads}</p>
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
                <p className="text-2xl font-bold text-foreground">{totalViews.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Views</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Uploads List */}
      <Card>
        <CardHeader>
          <CardTitle>All Uploads</CardTitle>
          <CardDescription>Your video processing history and status</CardDescription>
        </CardHeader>
        <CardContent>
          {uploads.length > 0 ? (
            <div className="space-y-4">
              {uploads.map((upload) => (
                <div key={upload.id} className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-20 h-20 bg-gradient-to-br from-electric-purple/20 to-neon-teal/20 rounded-lg flex items-center justify-center">
                    <Video className="h-8 w-8 text-electric-purple" />
                  </div>
                  
                  <div className="flex-1 space-y-1">
                    <h4 className="font-semibold text-foreground">{upload.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{upload.uploadTime}</span>
                      <span>Duration: {upload.duration}</span>
                      {upload.clips && upload.clips > 0 && <span>{upload.clips} clips generated</span>}
                      {upload.views > 0 && (
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{upload.views.toLocaleString()} views</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Badge className={`${getStatusColor(upload.status)} border-0`}>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(upload.status)}
                        {upload.status}
                      </div>
                    </Badge>
                    <Button variant="outline" size="sm">
                      {upload.status === 'Completed' ? 'View Clips' : upload.status === 'Failed' ? 'Retry' : 'Details'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Video className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No uploads yet.</p>
              <p className="text-sm text-muted-foreground">Upload your first video to get started!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MyUploads;
