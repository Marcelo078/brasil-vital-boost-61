import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: "cta" | "cta-primary";
  size?: "default" | "lg" | "xl";
  className?: string;
}

const CTAButton = ({ 
  href, 
  text, 
  variant = "cta", 
  size = "lg",
  className = ""
}: CTAButtonProps) => {
  const handleClick = () => {
    // Track the click for analytics if needed
    try {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'affiliate_click', {
          event_category: 'engagement',
          event_label: href,
        });
      }
    } catch (error) {
      // Silently handle analytics errors
    }
    
    // Open link in new tab
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button 
      variant={variant} 
      size={size}
      className={`group ${className}`}
      onClick={handleClick}
    >
      {text}
      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  );
};

export default CTAButton;