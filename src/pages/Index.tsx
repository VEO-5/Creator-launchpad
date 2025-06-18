
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video, Upload, Download, Zap, Calendar, Share2, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LoopLiftLogo from "@/components/LoopLiftLogo";

const Index = () => {
  const navigate = useNavigate();

  const handleStartFree = () => {
    navigate('/upload');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-white to-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <LoopLiftLogo size="md" />
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
            <Button variant="outline" size="sm">Sign In</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-24 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-electric-purple to-neon-teal text-white border-0">
            ✨ AI-Powered Content Creation
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Post Less.
            <br />
            <span className="bg-gradient-to-r from-electric-purple to-neon-teal bg-clip-text text-transparent">
              Grow More.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Turn your YouTube videos into viral short clips with AI-powered captions, hashtags, and cross-platform scheduling.
          </p>
          <Button 
            onClick={handleStartFree}
            size="lg" 
            className="bg-gradient-to-r from-electric-purple to-neon-teal hover:from-electric-purple/90 hover:to-neon-teal/90 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all creator-glow"
          >
            <Rocket className="w-5 h-5 mr-2" />
            Start Free
          </Button>
          <p className="text-sm text-muted-foreground mt-4">No credit card required • 3 free clips</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Creator-First Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to create viral content that connects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-electric-purple/10 to-neon-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Video className="h-10 w-10 text-electric-purple" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Auto-Video Repurposing
              </h3>
              <p className="text-muted-foreground">
                AI finds the most engaging moments in your long-form content
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-electric-purple/10 to-neon-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-10 w-10 text-neon-teal" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                AI Caption Generator
              </h3>
              <p className="text-muted-foreground">
                Generate scroll-stopping captions that drive engagement
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-electric-purple/10 to-neon-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="h-10 w-10 text-electric-purple" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Smart Scheduler
              </h3>
              <p className="text-muted-foreground">
                Post at optimal times across all your platforms automatically
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-electric-purple/10 to-neon-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Share2 className="h-10 w-10 text-neon-teal" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Cross-Platform Posting
              </h3>
              <p className="text-muted-foreground">
                Share to Instagram, TikTok, YouTube Shorts with one click
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="bg-gradient-to-br from-electric-purple/5 to-neon-teal/5 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            See LoopLift in Action
          </h2>
          <Card className="max-w-4xl mx-auto shadow-2xl border-0 creator-glow">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-electric-purple/20 to-neon-teal/20 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <Video className="w-24 h-24 text-electric-purple mx-auto mb-4 opacity-50" />
                  <p className="text-muted-foreground text-lg">Platform Preview Coming Soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Creator-Friendly Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Start free and scale as you grow your audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="shadow-xl border-2 border-transparent hover:border-electric-purple/20 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Free</CardTitle>
                <CardDescription>
                  Perfect for testing the waters
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-4xl font-bold text-foreground">$0</div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-teal rounded-full mr-3"></div>
                    3 clips per month
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-teal rounded-full mr-3"></div>
                    AI captions & hashtags
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-teal rounded-full mr-3"></div>
                    Basic support
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Get Started</Button>
              </CardContent>
            </Card>

            {/* Creator Plan */}
            <Card className="shadow-xl border-2 border-electric-purple bg-gradient-to-br from-electric-purple/5 to-neon-teal/5 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-electric-purple to-neon-teal text-white border-0">
                  Most Popular
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Creator</CardTitle>
                <CardDescription>
                  For serious content creators
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-4xl font-bold text-foreground">$29</div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-electric-purple rounded-full mr-3"></div>
                    Unlimited clips
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-electric-purple rounded-full mr-3"></div>
                    Advanced AI features
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-electric-purple rounded-full mr-3"></div>
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-electric-purple rounded-full mr-3"></div>
                    Analytics dashboard
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-electric-purple to-neon-teal hover:from-electric-purple/90 hover:to-neon-teal/90">
                  Upgrade Now
                </Button>
              </CardContent>
            </Card>

            {/* Pro Boost Plan */}
            <Card className="shadow-xl border-2 border-transparent hover:border-neon-teal/20 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Pro Boost</CardTitle>
                <CardDescription>
                  For teams and agencies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-4xl font-bold text-foreground">$99</div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-teal rounded-full mr-3"></div>
                    Everything in Creator
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-teal rounded-full mr-3"></div>
                    Team collaboration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-teal rounded-full mr-3"></div>
                    Custom branding
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-neon-teal rounded-full mr-3"></div>
                    24/7 support
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gradient-to-br from-electric-purple/5 to-neon-teal/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Creator Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about LoopLift
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Question 1 */}
            <div className="bg-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                How does LoopLift work?
              </h3>
              <p className="text-muted-foreground">
                Simply upload your video or paste a YouTube URL. Our AI analyzes the content and automatically creates engaging short clips with captions and hashtags.
              </p>
            </div>

            {/* Question 2 */}
            <div className="bg-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                What platforms can I post to?
              </h3>
              <p className="text-muted-foreground">
                You can post directly to Instagram Reels, TikTok, YouTube Shorts, and more platforms with our integrated scheduler.
              </p>
            </div>

            {/* Question 3 */}
            <div className="bg-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Can I edit the AI-generated content?
              </h3>
              <p className="text-muted-foreground">
                Absolutely! You have full control to edit captions, hashtags, and even trim clips to match your brand voice perfectly.
              </p>
            </div>

            {/* Question 4 */}
            <div className="bg-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Is there a free plan?
              </h3>
              <p className="text-muted-foreground">
                Yes! You can create 3 clips per month for free. Perfect for trying out LoopLift and seeing the magic happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Creator Love
            </h2>
            <p className="text-lg text-muted-foreground">
              Real stories from creators who are growing with LoopLift
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="shadow-xl border-0 creator-glow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-gradient-to-r from-electric-purple to-neon-teal rounded-full mr-1"></div>
                  ))}
                </div>
                <p className="text-foreground mb-4">
                  "LoopLift transformed my content game! I went from 10K to 100K followers in 3 months. The AI clips are pure magic! ✨"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-electric-purple to-neon-teal rounded-full mr-4 flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Sarah Chen
                    </p>
                    <p className="text-muted-foreground">Lifestyle Creator</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="shadow-xl border-0 creator-glow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-gradient-to-r from-electric-purple to-neon-teal rounded-full mr-1"></div>
                  ))}
                </div>
                <p className="text-foreground mb-4">
                  "I save 10+ hours a week with LoopLift. The hashtag suggestions are spot-on and my engagement is through the roof! 🚀"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-electric-purple to-neon-teal rounded-full mr-4 flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Marcus Johnson
                    </p>
                    <p className="text-muted-foreground">Tech Reviewer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="shadow-xl border-0 creator-glow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-gradient-to-r from-electric-purple to-neon-teal rounded-full mr-1"></div>
                  ))}
                </div>
                <p className="text-foreground mb-4">
                  "As a busy mom, LoopLift helps me stay consistent. One video becomes 5 viral clips. It's like having a content team! 💜"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-electric-purple to-neon-teal rounded-full mr-4 flex items-center justify-center text-white font-bold">
                    E
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Emily Rodriguez
                    </p>
                    <p className="text-muted-foreground">Mom Blogger</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-midnight-gray text-soft-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <LoopLiftLogo size="sm" className="mb-4 md:mb-0" />
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-neon-teal transition-colors">Privacy</a>
              <a href="#" className="hover:text-neon-teal transition-colors">Terms</a>
              <a href="#" className="hover:text-neon-teal transition-colors">Support</a>
            </div>
          </div>
          <div className="border-t border-soft-white/20 mt-8 pt-8 text-center">
            <p className="text-sm text-soft-white/70">
              &copy; {new Date().getFullYear()} LoopLift. Making creators go viral, one clip at a time. 🚀
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
