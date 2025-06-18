
import React, { useState } from 'react';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarInset 
} from "@/components/ui/sidebar";
import { Home, Upload, Bot, BarChart3, Calendar, History, User } from "lucide-react";
import LoopLiftLogo from "@/components/LoopLiftLogo";
import DashboardHome from "@/components/dashboard/DashboardHome";
import MyUploads from "@/components/dashboard/MyUploads";
import AILab from "@/components/dashboard/AILab";
import Insights from "@/components/dashboard/Insights";
import Scheduler from "@/components/dashboard/Scheduler";
import DashboardHistory from "@/components/dashboard/DashboardHistory";
import { UploadsProvider } from "@/contexts/UploadsContext";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'home', title: 'Home', icon: Home },
    { id: 'uploads', title: 'My Uploads', icon: Upload },
    { id: 'ai-lab', title: 'AI Lab', icon: Bot },
    { id: 'insights', title: 'Insights', icon: BarChart3 },
    { id: 'scheduler', title: 'Scheduler', icon: Calendar },
    { id: 'history', title: 'History', icon: History },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <DashboardHome />;
      case 'uploads':
        return <MyUploads />;
      case 'ai-lab':
        return <AILab />;
      case 'insights':
        return <Insights />;
      case 'scheduler':
        return <Scheduler />;
      case 'history':
        return <DashboardHistory />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <UploadsProvider>
      <div className="min-h-screen bg-background">
        <SidebarProvider>
          <div className="flex w-full min-h-screen">
            {/* Sidebar */}
            <Sidebar className="border-r border-border">
              <SidebarHeader className="p-4">
                <LoopLiftLogo size="sm" />
              </SidebarHeader>
              <SidebarContent>
                <SidebarMenu className="px-2">
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        onClick={() => setActiveSection(item.id)}
                        isActive={activeSection === item.id}
                        className="w-full justify-start"
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.title}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarContent>
            </Sidebar>

            {/* Main Content */}
            <SidebarInset className="flex-1">
              {/* Top Navigation */}
              <header className="flex h-16 items-center justify-between border-b border-border px-6">
                <div className="flex items-center gap-4">
                  <h1 className="text-xl font-semibold text-foreground">
                    {menuItems.find(item => item.id === activeSection)?.title || 'Dashboard'}
                  </h1>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-electric-purple to-neon-teal rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      U
                    </div>
                    <span className="text-sm text-foreground">User</span>
                  </div>
                  <User className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-foreground" />
                </div>
              </header>

              {/* Content Area */}
              <main className="flex-1 p-6">
                {renderContent()}
              </main>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
    </UploadsProvider>
  );
};

export default Dashboard;
