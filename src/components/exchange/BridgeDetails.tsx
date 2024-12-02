import { ClockIcon, DollarSignIcon, ZapIcon } from "lucide-react";

interface Bridge {
  name: string;
  time: string;
  fee: string;
  icon: string;
}

interface BridgeDetailsProps {
  bridge: Bridge;
}

export const BridgeDetails = ({ bridge }: BridgeDetailsProps) => {
  return (
    <div className="p-4 rounded-xl bg-[#1a2c38]/50 backdrop-blur-md border border-[#0ea5e9]/10 hover:bg-[#1a2c38]/70 hover:border-[#0ea5e9]/20 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/10 p-1.5">
            <img src={bridge.icon} alt={bridge.name} className="w-full h-full" />
          </div>
          <span className="text-white font-medium">{bridge.name}</span>
        </div>
        <div className="px-3 py-1 rounded-full bg-[#22c55e]/20 text-[#22c55e] text-sm border border-[#22c55e]/20">
          Selected Bridge
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-2">
        <div className="flex items-center gap-2">
          <ClockIcon className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-400">Est. Time: {bridge.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSignIcon className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-400">Fee: {bridge.fee}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <ZapIcon className="w-4 h-4 text-[#22c55e]" />
        <span className="text-sm text-[#22c55e]">Fastest and most reliable option</span>
      </div>
    </div>
  );
};