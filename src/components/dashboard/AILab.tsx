
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Zap, Hash, TrendingUp, Sparkles } from "lucide-react";

const AILab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">AI Lab</h2>
        <p className="text-muted-foreground">Powerful AI tools to supercharge your content creation</p>
      </div>

      {/* Coming Soon Banner */}
      <Card className="bg-gradient-to-br from-electric-purple/5 to-neon-teal/5 border-electric-purple/20">
        <CardContent className="p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-electric-purple to-neon-teal rounded-full flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">AI Magic Coming Soon!</h3>
          <p className="text-muted-foreground text-lg mb-6">
            We're cooking up something amazing. Advanced AI tools for captions, tags, and trends are on the way.
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-electric-purple to-neon-teal text-white px-4 py-2 rounded-full text-sm font-medium">
            <Bot className="h-4 w-4" />
            Launching Soon
          </div>
        </CardContent>
      </Card>

      {/* Preview Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-electric-purple" />
              Smart Captions
            </CardTitle>
            <CardDescription>AI-generated captions that drive engagement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="w-3/4 h-2 bg-gradient-to-r from-electric-purple to-neon-teal rounded-full"></div>
              </div>
              <p className="text-sm text-muted-foreground">75% Complete</p>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Hash className="h-5 w-5 text-neon-teal" />
              Hashtag Generator
            </CardTitle>
            <CardDescription>Trending hashtags for maximum reach</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="w-1/2 h-2 bg-gradient-to-r from-electric-purple to-neon-teal rounded-full"></div>
              </div>
              <p className="text-sm text-muted-foreground">50% Complete</p>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-electric-purple" />
              Trend Analysis
            </CardTitle>
            <CardDescription>Identify viral content opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="w-1/4 h-2 bg-gradient-to-r from-electric-purple to-neon-teal rounded-full"></div>
              </div>
              <p className="text-sm text-muted-foreground">25% Complete</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Beta Access */}
      <Card>
        <CardHeader>
          <CardTitle>Want Early Access?</CardTitle>
          <CardDescription>Be the first to try our AI features when they launch</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Join our beta waitlist to get exclusive early access to AI captions, hashtag generation, 
            and trend analysis tools. We'll notify you as soon as they're ready!
          </p>
          <div className="flex gap-2">
            <div className="flex-1 p-3 border border-border rounded-md bg-muted/30">
              <p className="text-sm text-muted-foreground">📧 your-email@example.com</p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-electric-purple to-neon-teal text-white rounded-md font-medium hover:opacity-90 transition-opacity">
              Join Waitlist
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AILab;
