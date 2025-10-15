
import React, { useState } from 'react';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent as SidebarContentUI, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";
import { Home, Upload, Bot, BarChart3, Calendar, History, User } from "lucide-react";
import LoopLiftLogo from "@/components/LoopLiftLogo";
import DashboardHome from "@/components/dashboard/DashboardHome";
import MyUploads from "@/components/dashboard/MyUploads";
import AILab from "@/components/dashboard/AILab";
import Insights from "@/components/dashboard/Insights";
import Scheduler from "@/components/dashboard/Scheduler";
import DashboardHistory from "@/components/dashboard/DashboardHistory";
import ThemeToggle from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const SidebarContent = () => {
  const { open } = useSidebar();
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
    <>
      {/* Sidebar */}
      <motion.div
        initial={{ x: -250, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Sidebar className="border-r border-border" collapsible="icon">
          <SidebarHeader className="p-4">
            <LoopLiftLogo size="sm" />
          </SidebarHeader>
          <SidebarContentUI>
            <SidebarMenu className="px-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => setActiveSection(item.id)}
                      isActive={activeSection === item.id}
                      className="w-full justify-start hover:scale-105 transition-transform"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              ))}
            </SidebarMenu>
          </SidebarContentUI>
        </Sidebar>
      </motion.div>

      {/* Main Content */}
      <SidebarInset className="flex-1 relative">
        {/* Top Navigation */}
        <motion.header 
          className="flex h-16 items-center justify-between border-b border-border px-4 sm:px-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-4">
            <SidebarTrigger className="hover:bg-accent hover:text-accent-foreground" />
            <h1 className="text-lg sm:text-xl font-semibold text-foreground">
              {menuItems.find(item => item.id === activeSection)?.title || 'Dashboard'}
            </h1>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-electric-purple to-neon-teal rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-semibold">
                U
              </div>
              <span className="text-xs sm:text-sm text-foreground hidden sm:inline">User</span>
            </div>
            <User className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground cursor-pointer hover:text-foreground" />
          </div>
        </motion.header>

        {/* Content Area */}
        <main className="flex-1 p-4 sm:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Theme Toggle - Bottom Left */}
        <motion.div 
          className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ThemeToggle />
        </motion.div>
      </SidebarInset>
    </>
  );
};

const Dashboard = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SidebarProvider>
        <div className="flex w-full min-h-screen">
          <SidebarContent />
        </div>
      </SidebarProvider>
    </motion.div>
  );
};

export default Dashboard;
