import { useState } from "react";
import { ArrowDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useWalletConnection } from "@/hooks/useWalletConnection";
import { WalletConnectionDialog } from "@/components/WalletConnectionDialog";
import { ChainCoinSelector } from "@/components/ChainCoinSelector";
import { ModeSelector } from "@/components/exchange/ModeSelector";
import { Chain, Coin } from "@/types/crypto";
import { BridgeDetails } from "@/components/exchange/BridgeDetails";

interface ExchangeCardProps {
  isSliding: boolean;
  selectedFromChain: Chain;
  selectedFromCoin: Coin;
  selectedToCoin: Coin;
  onFromChainSelect: (chain: Chain) => void;
  onFromCoinSelect: (coin: Coin) => void;
  onToCoinSelect: (coin: Coin) => void;
  chains: Chain[];
  toChain: Chain;
  selectedBridgeDetails: any;
  handleReviewSwap: () => void;
  activeMode: 'degen' | 'advance';
  setActiveMode: (mode: 'degen' | 'advance') => void;
}

export const ExchangeCard = ({
  isSliding,
  selectedFromChain,
  selectedFromCoin,
  selectedToCoin,
  onFromChainSelect,
  onFromCoinSelect,
  onToCoinSelect,
  chains,
  toChain,
  selectedBridgeDetails,
  handleReviewSwap,
  activeMode,
  setActiveMode,
}: ExchangeCardProps) => {
  const [amount, setAmount] = useState("");
  const [isWalletDialogOpen, setIsWalletDialogOpen] = useState(false);
  const { fromWalletAddress, toWalletAddress } = useWalletConnection();

  const handleSwapNowClick = () => {
    if (!fromWalletAddress || !toWalletAddress) {
      setIsWalletDialogOpen(true);
    } else {
      handleReviewSwap();
    }
  };

  return (
    <Card
      className={`
        relative overflow-hidden p-6 max-w-[420px] mx-auto 
        transition-all duration-500 ease-in-out transform 
        ${isSliding ? 'opacity-80 scale-95' : 'opacity-100 scale-100'}
        bg-gradient-to-br from-[#1a2c38] via-[#0f1922] to-[#162736]
        before:absolute before:inset-0 
        before:bg-[url('https://images.unsplash.com/photo-1640340434855-6084b1f4901c')] 
        before:opacity-5 before:bg-cover before:bg-center before:mix-blend-overlay
        ${activeMode === 'degen' ? 'shadow-[0_0_50px_-5px_#0ea5e9]' : ''}
      `}
    >
      <div className="relative z-10">
        <ModeSelector activeMode={activeMode} setActiveMode={setActiveMode} />

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-[#1a2c38]/50 backdrop-blur-md border border-[#0ea5e9]/10 hover:bg-[#1a2c38]/70 hover:border-[#0ea5e9]/20 transition-all duration-300">
            <div className="mb-2">
              <span className="text-sm text-gray-400">From</span>
            </div>
            <ChainCoinSelector
              selectedChain={selectedFromChain}
              selectedCoin={selectedFromCoin}
              onChainSelect={onFromChainSelect}
              onCoinSelect={onFromCoinSelect}
              chains={chains}
              label="From"
            />
            <div className="mt-3">
              <Input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-transparent border-none text-xl text-white placeholder:text-gray-600 focus:ring-0 p-0 h-auto"
                placeholder="Add amount"
              />
            </div>
          </div>

          <div className="flex justify-center -my-2 relative z-10">
            <div className="p-4">
              <ArrowDownIcon className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#1a2c38]/50 backdrop-blur-md border border-[#0ea5e9]/10 hover:bg-[#1a2c38]/70 hover:border-[#0ea5e9]/20 transition-all duration-300">
            <div className="mb-2">
              <span className="text-sm text-gray-400">To</span>
            </div>
            <ChainCoinSelector
              selectedChain={toChain}
              selectedCoin={selectedToCoin}
              onChainSelect={() => { }}
              onCoinSelect={onToCoinSelect}
              chains={[toChain]}
              label="To"
              isToSection
            />
          </div>

          {activeMode === 'advance' && selectedBridgeDetails && (
            <BridgeDetails bridge={selectedBridgeDetails} />
          )}

          <Button
            className="w-full bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] hover:from-[#0ea5e9]/90 hover:to-[#22c55e]/90 text-white py-6 font-medium text-lg rounded-xl shadow-lg transition-all duration-300 mt-2 backdrop-blur-md border border-[#0ea5e9]/20"
            onClick={handleSwapNowClick}
          >
            Swap Now
          </Button>
        </div>
      </div>

      <WalletConnectionDialog
        isOpen={isWalletDialogOpen}
        onClose={() => setIsWalletDialogOpen(false)}
      />
    </Card>
  );
};