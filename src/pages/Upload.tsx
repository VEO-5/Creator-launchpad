
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload as UploadIcon, Video } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      setUploadedFile(file);
      setYoutubeUrl(''); // Clear YouTube URL if file is uploaded
    }
  };

  const handleYoutubeUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
    if (event.target.value) {
      setUploadedFile(null); // Clear uploaded file if URL is entered
    }
  };

  const handleSubmit = async () => {
    if (!youtubeUrl && !uploadedFile) return;
    
    setIsProcessing(true);
    
    // Store the input data in localStorage for the processing page
    const inputData = {
      type: youtubeUrl ? 'youtube' : 'upload',
      data: youtubeUrl || uploadedFile?.name || '',
      timestamp: Date.now()
    };
    
    localStorage.setItem('looplift_input', JSON.stringify(inputData));
    
    // Navigate to processing page
    navigate('/processing');
  };

  const isValid = youtubeUrl.trim() !== '' || uploadedFile !== null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="container mx-auto max-w-2xl pt-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Upload Your Video
          </h1>
          <p className="text-lg text-gray-600">
            Paste a YouTube URL or upload an MP4 file to get started
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-6 w-6 text-purple-600" />
              Choose Your Video Source
            </CardTitle>
            <CardDescription>
              Select either a YouTube video or upload your own MP4 file
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* YouTube URL Input */}
            <div className="space-y-2">
              <Label htmlFor="youtube-url">YouTube Video URL</Label>
              <Input
                id="youtube-url"
                type="url"
                placeholder="https://www.youtube.com/watch?v=..."
                value={youtubeUrl}
                onChange={handleYoutubeUrlChange}
                className="w-full"
              />
            </div>

            <div className="text-center text-gray-500">or</div>

            {/* File Upload */}
            <div className="space-y-2">
              <Label htmlFor="video-upload">Upload MP4 File</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors">
                <input
                  id="video-upload"
                  type="file"
                  accept="video/mp4,video/quicktime,video/x-msvideo"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <label
                  htmlFor="video-upload"
                  className="cursor-pointer flex flex-col items-center space-y-2"
                >
                  <UploadIcon className="h-12 w-12 text-gray-400" />
                  <div className="text-sm text-gray-600">
                    {uploadedFile ? (
                      <span className="text-purple-600 font-medium">
                        {uploadedFile.name}
                      </span>
                    ) : (
                      <>
                        <span className="font-medium">Click to upload</span> or drag and drop
                        <br />
                        <span className="text-xs">MP4, MOV, AVI up to 100MB</span>
                      </>
                    )}
                  </div>
                </label>
              </div>
            </div>

            <Button 
              onClick={handleSubmit}
              disabled={!isValid || isProcessing}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 text-lg"
            >
              {isProcessing ? 'Starting...' : 'Process Video'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Upload;
