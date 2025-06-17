import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video, Upload, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleStartFree = () => {
    navigate('/upload');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Post Less.
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Grow More.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Turn your YouTube videos into viral short clips with AI-powered captions, hashtags, and cross-platform scheduling.
          </p>
          <Button 
            onClick={handleStartFree}
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Start Free
          </Button>
          <p className="text-sm text-gray-500 mt-4">No credit card required • 3 free clips</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Features
            </h2>
            <p className="text-lg text-gray-600">
              Supercharge your content creation with our advanced AI tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Smart Clip Generation
              </h3>
              <p className="text-gray-600">
                AI identifies the most engaging moments in your videos
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Automatic Captions
              </h3>
              <p className="text-gray-600">
                Generate accurate and engaging captions for each clip
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Trending Hashtags
              </h3>
              <p className="text-gray-600">
                AI suggests the best hashtags to maximize your reach
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            See LoopLift in Action
          </h2>
          <Card className="max-w-4xl mx-auto shadow-2xl">
            <CardContent>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="LoopLift Platform Preview"
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Start free and upgrade as you grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>
                  Perfect for getting started
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-gray-900">$0</div>
                <ul className="list-disc list-inside space-y-2">
                  <li>3 free clips per month</li>
                  <li>Basic AI features</li>
                  <li>Community support</li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="shadow-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>
                  For serious content creators
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold">$29</div>
                <ul className="list-disc list-inside space-y-2">
                  <li>Unlimited clips</li>
                  <li>Advanced AI features</li>
                  <li>Priority support</li>
                </ul>
                <Button variant="secondary" className="w-full">
                  Upgrade Now
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>
                  Custom solutions for large teams
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-gray-900">
                  Contact Us
                </div>
                <ul className="list-disc list-inside space-y-2">
                  <li>Custom clip limits</li>
                  <li>Dedicated AI models</li>
                  <li>24/7 support</li>
                </ul>
                <Button className="w-full">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about LoopLift
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Question 1 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How does LoopLift work?
              </h3>
              <p className="text-gray-600">
                LoopLift uses AI to analyze your videos and automatically
                generate short, engaging clips with captions and hashtags.
              </p>
            </div>

            {/* Question 2 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What type of videos can I upload?
              </h3>
              <p className="text-gray-600">
                You can upload any video in MP4, MOV, or AVI format. You can
                also paste a YouTube video URL.
              </p>
            </div>

            {/* Question 3 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How accurate are the AI-generated captions?
              </h3>
              <p className="text-gray-600">
                Our AI is highly accurate, but you can always edit the captions
                to ensure they are perfect.
              </p>
            </div>

            {/* Question 4 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Can I use LoopLift for free?
              </h3>
              <p className="text-gray-600">
                Yes, you can generate 3 free clips per month. For unlimited
                clips, you can upgrade to our Pro plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from creators who love LoopLift
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="shadow-xl">
              <CardContent>
                <p className="text-gray-700 mb-4">
                  "LoopLift has completely transformed my content creation
                  workflow. I can now create viral clips in minutes!"
                </p>
                <div className="flex items-center">
                  <img
                    src="/placeholder.svg"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Sarah Johnson
                    </p>
                    <p className="text-gray-500">Content Creator</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="shadow-xl">
              <CardContent>
                <p className="text-gray-700 mb-4">
                  "I've seen a significant increase in engagement since I
                  started using LoopLift. The AI-generated captions are spot
                  on!"
                </p>
                <div className="flex items-center">
                  <img
                    src="/placeholder.svg"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Michael Smith
                    </p>
                    <p className="text-gray-500">Vlogger</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="shadow-xl">
              <CardContent>
                <p className="text-gray-700 mb-4">
                  "LoopLift is a game-changer for anyone looking to grow their
                  audience on social media. I highly recommend it!"
                </p>
                <div className="flex items-center">
                  <img
                    src="/placeholder.svg"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Emily Brown
                    </p>
                    <p className="text-gray-500">Influencer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} LoopLift. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
