import { Card } from "@/components/ui/card";
import { RefreshCwIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useRef } from "react";

interface Bridge {
  name: string;
  time: string;
  fee: string;
  icon: string;
}

interface BridgeRoutesPanelProps {
  showRoutes: boolean;
  bridges: Bridge[];
  selectedBridge: string | null;
  onBridgeSelect: (bridge: Bridge) => void;
  isLoading?: boolean;
  onClose?: () => void;
}

export const BridgeRoutesPanel = ({
  showRoutes,
  bridges,
  selectedBridge,
  onBridgeSelect,
  isLoading = false,
  onClose,
}: BridgeRoutesPanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showRoutes && panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showRoutes, onClose]);

  if (!showRoutes) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className={`fixed left-1/2 -translate-x-1/2 transform transition-all duration-300 ease-in-out ${showRoutes ? 'translate-y-0 bottom-0' : 'translate-y-full bottom-[-100%]'
          } max-w-[480px] w-full bg-[#1a2c38] rounded-t-3xl shadow-lg z-50`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between text-lg text-white px-2 mb-4">
            <span className="font-bold text-xl">Best Routes</span>
            {isLoading && (
              <RefreshCwIcon className="w-5 h-5 animate-spin text-blue-400" />
            )}
          </div>

          <div className="space-y-3">
            {isLoading ? (
              [...Array(3)].map((_, index) => (
                <Card key={`skeleton-${index}`} className="glass-card p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Skeleton className="w-10 h-10 rounded-full bg-white/10" />
                      <div>
                        <Skeleton className="h-5 w-24 bg-white/10 mb-2" />
                        <Skeleton className="h-4 w-32 bg-white/10" />
                      </div>
                    </div>
                    <div className="text-right">
                      <Skeleton className="h-5 w-16 bg-white/10 mb-2" />
                      <Skeleton className="h-4 w-20 bg-white/10" />
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              bridges.map((bridge, index) => (
                <Card
                  key={bridge.name}
                  className={`glass-card p-4 hover:bg-white/5 cursor-pointer transition-all duration-300 ${selectedBridge === bridge.name ? 'bg-white/10 ring-2 ring-white/20 scale-[1.02]' : ''
                    }`}
                  onClick={() => onBridgeSelect(bridge)}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/5 p-2">
                        <img src={bridge.icon} alt={bridge.name} className="w-full h-full" />
                      </div>
                      <div>
                        <div className="font-bold text-base text-white">{bridge.name}</div>
                        <div className="text-sm text-gray-400">Est. Time: {bridge.time}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-base text-white">{bridge.fee}</div>
                      <div className="text-sm text-white/70">Best Value</div>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};