
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Play, Sparkles, Calendar, Share2, Zap, Users, TrendingUp, CheckCircle, Star, Quote } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-purple-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              LoopLift
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-purple-600 transition-colors">FAQ</a>
            <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Start Free
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-200">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Content Creation
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent leading-tight">
              Post Less.
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Grow More.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your long-form YouTube videos into viral short clips with AI. Generate captions, 
              hashtags, and schedule across all platforms automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6 group">
                Start Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6 group">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Platform Mockup */}
      <section className="px-6 py-16 relative">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-purple-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gray-100 rounded-lg h-32"></div>
                    <div className="space-y-2">
                      <div className="bg-gray-200 rounded h-3 w-full"></div>
                      <div className="bg-gray-200 rounded h-3 w-3/4"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg h-32 flex items-center justify-center">
                      <Zap className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="bg-purple-200 rounded h-3 w-full"></div>
                      <div className="bg-purple-200 rounded h-3 w-2/3"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-100 rounded-lg h-32"></div>
                    <div className="space-y-2">
                      <div className="bg-gray-200 rounded h-3 w-full"></div>
                      <div className="bg-gray-200 rounded h-3 w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
              Everything you need to go viral
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform handles the entire content creation workflow, 
              from video processing to cross-platform distribution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-purple-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-900">Auto-video repurposing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  AI identifies the best moments in your long-form content and creates engaging short clips automatically.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-900">AI caption generator</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Generate compelling captions and trending hashtags that maximize reach and engagement across platforms.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-900">Smart scheduler</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Schedule posts at optimal times for maximum engagement based on your audience analytics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-900">Cross-platform posting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Distribute your content to Instagram Reels, TikTok, YouTube Shorts, and more with one click.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
              Trusted by 10,000+ creators
            </h2>
            <p className="text-xl text-gray-600">See how creators are growing their audience with LoopLift</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div>
                    <CardTitle className="text-lg">Sarah Chen</CardTitle>
                    <CardDescription>YouTube Creator, 850K subs</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic">
                  "LoopLift increased my short-form content output by 300%. My Instagram Reels now get 10x more views!"
                </blockquote>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +245% engagement growth
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div>
                    <CardTitle className="text-lg">Marcus Rivera</CardTitle>
                    <CardDescription>Tech Reviewer, 1.2M subs</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic">
                  "The AI perfectly captures the most engaging moments. I went from 2 hours of editing to 15 minutes."
                </blockquote>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-1" />
                  Saves 20+ hours weekly
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <CardTitle className="text-lg">Alex Thompson</CardTitle>
                    <CardDescription>Fitness Coach, 500K subs</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic">
                  "My TikTok following grew 500% in 3 months using LoopLift's automated posting and hashtag generation."
                </blockquote>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +500% follower growth
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
              Choose your growth plan
            </h2>
            <p className="text-xl text-gray-600">Start free, upgrade as you scale</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Free</CardTitle>
                <div className="text-3xl font-bold">$0<span className="text-lg font-normal text-gray-500">/month</span></div>
                <CardDescription>Perfect for getting started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>3 video clips per month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Basic AI captions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Manual posting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>720p export quality</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            {/* Creator Plan */}
            <Card className="border-purple-200 hover:shadow-lg transition-shadow relative bg-gradient-to-b from-purple-50 to-white">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-purple-700">Creator</CardTitle>
                <div className="text-3xl font-bold">$29<span className="text-lg font-normal text-gray-500">/month</span></div>
                <CardDescription>For serious content creators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>50 video clips per month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Advanced AI captions & hashtags</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Auto-scheduling</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Cross-platform posting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>1080p export quality</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Analytics dashboard</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Pro Boost Plan */}
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Pro Boost</CardTitle>
                <div className="text-3xl font-bold">$79<span className="text-lg font-normal text-gray-500">/month</span></div>
                <CardDescription>For agencies & power users</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Unlimited video clips</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Premium AI features</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>4K export quality</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>White-label options</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-6 py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about LoopLift</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg border border-purple-100 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                How does the AI identify the best moments for clips?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our AI analyzes your video content using advanced machine learning to identify high-engagement moments, 
                emotional peaks, key talking points, and audience retention patterns. It considers factors like speech 
                patterns, visual elements, and viewer engagement data to select the most viral-worthy segments.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg border border-purple-100 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Which platforms can I post to automatically?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                LoopLift supports automatic posting to Instagram Reels, TikTok, YouTube Shorts, Twitter, LinkedIn, 
                and Facebook. We're constantly adding new platforms based on user feedback and platform popularity.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg border border-purple-100 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Can I customize the generated captions and hashtags?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Absolutely! While our AI generates optimized captions and hashtags, you have full control to edit, 
                customize, or completely rewrite them. You can also save custom templates and brand guidelines 
                for consistent messaging across all your content.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg border border-purple-100 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Is there a limit on video length for processing?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Free accounts can process videos up to 30 minutes. Creator plan supports up to 2 hours, 
                and Pro Boost has no length restrictions. Processing time varies based on video length and quality, 
                but most videos are processed within 5-15 minutes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg border border-purple-100 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                How does the scheduling feature work?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our smart scheduler analyzes your audience's activity patterns and platform algorithms to recommend 
                optimal posting times. You can schedule content weeks in advance, set up recurring posts, 
                and automatically distribute content across multiple platforms with platform-specific optimizations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to 10x your content reach?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join thousands of creators who've automated their short-form content strategy with LoopLift.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">LoopLift</span>
              </div>
              <p className="text-gray-400">
                AI-powered content creation for the modern creator.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LoopLift. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
