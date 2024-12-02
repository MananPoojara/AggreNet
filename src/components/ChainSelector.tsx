import { Chain } from "@/types/crypto";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";

interface ChainSelectorProps {
  selectedChain: Chain;
  onChainSelect: (chain: Chain) => void;
  chains: Chain[];
}

export const ChainSelector = ({
  selectedChain,
  onChainSelect,
  chains,
}: ChainSelectorProps) => {
  return (
    <Select
      value={selectedChain.id}
      onValueChange={(chainId) => {
        const chain = chains.find(c => c.id === chainId);
        if (chain) onChainSelect(chain);
      }}
    >
      <SelectTrigger className="flex-1 bg-transparent border-none text-white hover:bg-white/5 transition-colors">
        <div className="flex items-center gap-2">
          <img
            src={selectedChain.icon}
            alt={selectedChain.name}
            className="w-6 h-6 rounded-full"
          />
          <span className="font-medium">{selectedChain.name}</span>
        </div>
      </SelectTrigger>
      <SelectContent className="bg-[#1a2c38] border-[#0ea5e9]/20">
        {chains.map((chain) => (
          <SelectItem
            key={chain.id}
            value={chain.id}
            className="text-white hover:bg-white/5"
          >
            <div className="flex items-center gap-2">
              <img
                src={chain.icon}
                alt={chain.name}
                className="w-4 h-4 rounded-full"
              />
              <span>{chain.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};