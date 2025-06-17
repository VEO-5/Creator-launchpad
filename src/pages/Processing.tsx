
import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Upload, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Processing = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('Analyzing video...');
  const navigate = useNavigate();

  const steps = [
    'Analyzing video content...',
    'Extracting key moments...',
    'Generating clips...',
    'Creating captions...',
    'Generating hashtags...',
    'Finalizing results...'
  ];

  useEffect(() => {
    // Check if we have input data
    const inputData = localStorage.getItem('looplift_input');
    if (!inputData) {
      navigate('/upload');
      return;
    }

    // Simulate processing with realistic timing
    let stepIndex = 0;
    let progressValue = 0;

    const interval = setInterval(() => {
      progressValue += Math.random() * 15 + 5; // Random progress increment
      
      if (progressValue >= 100) {
        progressValue = 100;
        setProgress(100);
        setCurrentStep('Complete!');
        
        // Generate mock results and navigate to results page
        setTimeout(() => {
          const mockResults = generateMockResults();
          localStorage.setItem('looplift_results', JSON.stringify(mockResults));
          navigate('/results');
        }, 1000);
        
        clearInterval(interval);
        return;
      }
      
      setProgress(progressValue);
      
      // Update step based on progress
      const newStepIndex = Math.floor((progressValue / 100) * steps.length);
      if (newStepIndex < steps.length && newStepIndex !== stepIndex) {
        stepIndex = newStepIndex;
        setCurrentStep(steps[stepIndex]);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [navigate]);

  const generateMockResults = () => {
    const inputData = JSON.parse(localStorage.getItem('looplift_input') || '{}');
    
    return {
      originalVideo: {
        title: inputData.type === 'youtube' ? 'YouTube Video' : inputData.data,
        duration: '3:45'
      },
      clips: [
        {
          id: 1,
          title: 'Clip 1 - Key Moment',
          duration: '0:24',
          thumbnail: '/placeholder.svg',
          videoUrl: '#',
          startTime: '0:15',
          endTime: '0:39'
        },
        {
          id: 2,
          title: 'Clip 2 - Highlight',
          duration: '0:18',
          thumbnail: '/placeholder.svg',
          videoUrl: '#',
          startTime: '1:22',
          endTime: '1:40'
        },
        {
          id: 3,
          title: 'Clip 3 - Best Part',
          duration: '0:27',
          thumbnail: '/placeholder.svg',
          videoUrl: '#',
          startTime: '2:45',
          endTime: '3:12'
        }
      ],
      captions: [
        "🚀 This game-changing tip will transform your workflow",
        "💡 The secret technique nobody talks about",
        "✨ Amazing results in just minutes"
      ],
      hashtags: [
        "#productivity #lifehacks #tutorial #viral #trending",
        "#tips #workflow #gamechange #shorts #fyp",
        "#creative #inspiration #growth #success #mindset"
      ]
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="container mx-auto max-w-2xl pt-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Processing Your Video
          </h1>
          <p className="text-lg text-gray-600">
            Our AI is analyzing your content and creating viral clips
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-6 w-6 text-purple-600" />
              AI Processing in Progress
            </CardTitle>
            <CardDescription>
              This usually takes 1-3 minutes depending on video length
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  {currentStep}
                </span>
                <span className="text-sm text-gray-500">
                  {Math.round(progress)}%
                </span>
              </div>
              
              <Progress value={progress} className="w-full h-3" />
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Upload className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-xs text-gray-600">Upload Complete</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto ${
                  progress > 30 ? 'bg-purple-100' : 'bg-gray-100'
                }`}>
                  <Video className={`h-6 w-6 ${
                    progress > 30 ? 'text-purple-600' : 'text-gray-400'
                  }`} />
                </div>
                <p className="text-xs text-gray-600">AI Analysis</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto ${
                  progress >= 100 ? 'bg-purple-100' : 'bg-gray-100'
                }`}>
                  <Download className={`h-6 w-6 ${
                    progress >= 100 ? 'text-purple-600' : 'text-gray-400'
                  }`} />
                </div>
                <p className="text-xs text-gray-600">Generate Results</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Processing;
