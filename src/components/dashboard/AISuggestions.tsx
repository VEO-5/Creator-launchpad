
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Copy, ThumbsUp, ThumbsDown, Sparkles } from 'lucide-react';

const mockCaptions = [
  "🚀 This will blow your mind! The secret nobody talks about",
  "💡 Amazing results you need to see - this changes everything!",
  "✨ You won't believe what happens next in this tutorial",
  "🔥 The one trick that made me 10x more productive",
  "💯 This simple hack will save you hours every day"
];

const mockHashtags = [
  "#viral #trending #fyp #amazing #mindblown",
  "#tips #lifehacks #tutorial #howto #learn", 
  "#creative #inspiration #motivation #success #growth",
  "#shorts #reels #tiktok #youtube #content",
  "#productivity #entrepreneur #business #tech #innovation"
];

const AISuggestions = () => {
  const [selectedCaptions, setSelectedCaptions] = useState<number[]>([]);
  const [selectedHashtags, setSelectedHashtags] = useState<number[]>([]);

  const toggleCaption = (index: number) => {
    setSelectedCaptions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleHashtag = (index: number) => {
    setSelectedHashtags(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Brain className="h-6 w-6 text-purple-600" />
            AI Suggestions
          </h2>
          <p className="text-gray-600">AI-generated captions and hashtags for your content</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
          <Sparkles className="h-4 w-4 mr-2" />
          Generate New
        </Button>
      </div>

      <Tabs defaultValue="captions" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="captions">Captions</TabsTrigger>
          <TabsTrigger value="hashtags">Hashtags</TabsTrigger>
        </TabsList>

        <TabsContent value="captions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Generated Captions</CardTitle>
              <CardDescription>
                AI-generated catchy captions optimized for engagement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockCaptions.map((caption, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                  <input
                    type="checkbox"
                    checked={selectedCaptions.includes(index)}
                    onChange={() => toggleCaption(index)}
                    className="rounded"
                  />
                  <span className="flex-1">{caption}</span>
                  <div className="flex gap-1">
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => copyToClipboard(caption)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <ThumbsDown className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <div className="flex gap-2 pt-4">
                <Button 
                  disabled={selectedCaptions.length === 0}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Use Selected ({selectedCaptions.length})
                </Button>
                <Button variant="outline">
                  Generate More
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hashtags" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Generated Hashtags</CardTitle>
              <CardDescription>
                Trending hashtags to maximize your reach
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockHashtags.map((hashtag, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                  <input
                    type="checkbox"
                    checked={selectedHashtags.includes(index)}
                    onChange={() => toggleHashtag(index)}
                    className="rounded"
                  />
                  <span className="flex-1 font-mono text-sm">{hashtag}</span>
                  <div className="flex gap-1">
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => copyToClipboard(hashtag)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Badge variant="secondary" className="text-xs">
                      High reach
                    </Badge>
                  </div>
                </div>
              ))}
              <div className="flex gap-2 pt-4">
                <Button 
                  disabled={selectedHashtags.length === 0}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Use Selected ({selectedHashtags.length})
                </Button>
                <Button variant="outline">
                  Generate More
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AISuggestions;
