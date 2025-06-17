
// Webhook service for external automation
export interface WebhookPayload {
  eventType: 'video_processed' | 'clips_generated' | 'post_scheduled';
  videoData: {
    title: string;
    clips: Array<{
      id: number;
      title: string;
      duration: string;
    }>;
  };
  captions: string[];
  hashtags: string[];
  timestamp: string;
}

export interface PostingPlatform {
  id: string;
  name: string;
  enabled: boolean;
  webhook?: string;
}

export class WebhookService {
  private webhooks: Map<string, string> = new Map();

  async triggerWebhook(platform: string, payload: WebhookPayload): Promise<boolean> {
    const webhookUrl = this.webhooks.get(platform);
    
    if (!webhookUrl) {
      console.warn(`No webhook configured for ${platform}, skipping trigger`);
      return false;
    }

    try {
      // TODO: Replace with actual webhook call
      console.log(`Webhook would be triggered for ${platform}:`, payload);
      
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return true;
    } catch (error) {
      console.error(`Failed to trigger webhook for ${platform}:`, error);
      return false;
    }
  }

  setWebhook(platform: string, url: string) {
    this.webhooks.set(platform, url);
  }

  removeWebhook(platform: string) {
    this.webhooks.delete(platform);
  }

  getWebhook(platform: string): string | undefined {
    return this.webhooks.get(platform);
  }
}

export const webhookService = new WebhookService();
