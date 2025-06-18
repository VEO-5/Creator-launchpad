
import React, { useState } from 'react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
  SidebarHeader
} from '@/components/ui/sidebar';
import { Home, Upload, Brain, TrendingUp, Calendar, Archive } from 'lucide-react';
import LoopLiftLogo from '@/components/LoopLiftLogo';
import DashboardHome from '@/components/dashboard/DashboardHome';
import MyUploads from '@/components/dashboard/MyUploads';
import AISuggestions from '@/components/dashboard/AISuggestions';
import Insights from '@/components/dashboard/Insights';
import Scheduler from '@/components/dashboard/Scheduler';
import PublishHistory from '@/components/dashboard/PublishHistory';

const menuItems = [
  { id: 'home', title: 'Home', icon: Home, component: DashboardHome },
  { id: 'uploads', title: 'My Uploads', icon: Upload, component: MyUploads },
  { id: 'ai-suggestions', title: 'AI Suggestions', icon: Brain, component: AISuggestions },
  { id: 'insights', title: 'Insights', icon: TrendingUp, component: Insights },
  { id: 'scheduler', title: 'Scheduler', icon: Calendar, component: Scheduler },
  { id: 'publish-history', title: 'Publish History', icon: Archive, component: PublishHistory },
];

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('home');

  const ActiveComponent = menuItems.find(item => item.id === activeSection)?.component || DashboardHome;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <SidebarProvider defaultOpen={true}>
        <div className="flex w-full min-h-screen">
          <Sidebar className="border-r border-gray-200">
            <SidebarHeader className="p-4 border-b border-gray-200">
              <LoopLiftLogo size="sm" />
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {menuItems.map((item) => (
                      <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton 
                          onClick={() => setActiveSection(item.id)}
                          isActive={activeSection === item.id}
                          className="w-full justify-start"
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <SidebarInset className="flex-1">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <SidebarTrigger />
                  <h1 className="text-xl font-semibold text-gray-900">
                    {menuItems.find(item => item.id === activeSection)?.title}
                  </h1>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-electric-purple to-neon-teal rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">U</span>
                  </div>
                </div>
              </div>
            </header>

            {/* Main Content Area */}
            <main className="p-6">
              <ActiveComponent />
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
