import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  imageSrc?: string;
  className?: string;
  alt?: string;
}

export const PhoneMockup = ({ imageSrc, className, alt = "App screenshot" }: PhoneMockupProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* iPhone Frame */}
      <div className="relative bg-foreground rounded-[3rem] p-3 shadow-uni-lg">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-foreground rounded-b-2xl z-10" />
        
        {/* Screen */}
        <div className="relative bg-secondary rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={alt}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <p className="text-muted-foreground text-sm">App Screenshot</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-muted-foreground/30 rounded-full" />
      </div>
    </div>
  );
};
