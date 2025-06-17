
import React from 'react';
import { Rocket } from 'lucide-react';

interface LoopLiftLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

const LoopLiftLogo: React.FC<LoopLiftLogoProps> = ({ 
  size = 'md', 
  showText = true, 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl'
  };

  const iconSizes = {
    sm: 20,
    md: 28,
    lg: 40,
    xl: 64
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-purple to-neon-teal rounded-full blur-sm opacity-70"></div>
        <div className="relative bg-gradient-to-r from-electric-purple to-neon-teal p-2 rounded-full">
          <Rocket 
            size={iconSizes[size]} 
            className="text-white transform rotate-45 bounce-subtle" 
          />
        </div>
      </div>
      {showText && (
        <div className={`font-bold bg-gradient-to-r from-electric-purple to-neon-teal bg-clip-text text-transparent ${sizeClasses[size]}`}>
          LoopLift
        </div>
      )}
    </div>
  );
};

export default LoopLiftLogo;
