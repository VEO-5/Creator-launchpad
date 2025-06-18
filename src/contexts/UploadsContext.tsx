
import React, { createContext, useContext, useState } from 'react';

export interface Upload {
  id: string;
  title: string;
  uploadTime: string;
  status: 'Processing' | 'Completed' | 'Failed';
  duration?: string;
  clips?: number;
  views: number;
  likes: number;
  comments: number;
  thumbnail: string;
  type: 'file' | 'youtube';
  originalUrl?: string;
}

interface UploadsContextType {
  uploads: Upload[];
  addUpload: (upload: Omit<Upload, 'id'>) => void;
  updateUpload: (id: string, updates: Partial<Upload>) => void;
}

const UploadsContext = createContext<UploadsContextType | undefined>(undefined);

export const useUploads = () => {
  const context = useContext(UploadsContext);
  if (!context) {
    throw new Error('useUploads must be used within an UploadsProvider');
  }
  return context;
};

export const UploadsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [uploads, setUploads] = useState<Upload[]>([]);

  const addUpload = (upload: Omit<Upload, 'id'>) => {
    const newUpload: Upload = {
      ...upload,
      id: Date.now().toString(),
    };
    setUploads(prev => [newUpload, ...prev]);
    
    // Simulate processing completion after 3 seconds
    setTimeout(() => {
      updateUpload(newUpload.id, { 
        status: 'Completed',
        clips: Math.floor(Math.random() * 8) + 3,
        views: Math.floor(Math.random() * 5000) + 100,
        likes: Math.floor(Math.random() * 500) + 10,
        comments: Math.floor(Math.random() * 50) + 1
      });
    }, 3000);
  };

  const updateUpload = (id: string, updates: Partial<Upload>) => {
    setUploads(prev => prev.map(upload => 
      upload.id === id ? { ...upload, ...updates } : upload
    ));
  };

  return (
    <UploadsContext.Provider value={{ uploads, addUpload, updateUpload }}>
      {children}
    </UploadsContext.Provider>
  );
};
