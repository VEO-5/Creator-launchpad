import React from 'react';
import { Button } from '@/components/ui/button';
import LoopLiftLogo from '@/components/LoopLiftLogo';
import { Rocket, Video, Brain, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Navigation */}
      <nav className="p-6">
        <div className="container mx-auto flex items-center justify-between">
          <LoopLiftLogo size="md" />
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/dashboard')}
              className="border-purple-200 text-purple-700 hover:bg-purple-50"
            >
              Dashboard
            </Button>
            <Button 
              onClick={() => navigate('/upload')}
              className="bg-gradient-to-r from-electric-purple to-neon-teal hover:from-purple-700 hover:to-teal-700 text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6">
            Turn Your{' '}
            <span className="bg-gradient-to-r from-electric-purple to-neon-teal bg-clip-text text-transparent">
              Long Videos
            </span>{' '}
            Into Viral Clips
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            LoopLift uses AI to automatically slice your YouTube videos into engaging short clips, 
            generate catchy captions, and suggest trending hashtags. Perfect for TikTok, Instagram Reels, and YouTube Shorts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              onClick={() => navigate('/upload')}
              className="bg-gradient-to-r from-electric-purple to-neon-teal hover:from-purple-700 hover:to-teal-700 text-white px-8 py-4 text-lg creator-glow"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Start Creating Clips
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/dashboard')}
              className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg"
            >
              View Dashboard
            </Button>
          </div>

          {/* Feature Preview */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-r from-electric-purple to-neon-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">AI Video Slicing</h3>
              <p className="text-gray-600">Automatically detect the best moments and create engaging short clips</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-r from-electric-purple to-neon-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Smart Captions</h3>
              <p className="text-gray-600">Generate catchy, viral-ready captions that boost engagement</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-r from-electric-purple to-neon-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Auto Publishing</h3>
              <p className="text-gray-600">Schedule and publish directly to all your social media platforms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
