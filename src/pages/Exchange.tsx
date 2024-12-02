import { ExchangeCard } from "@/components/ExchangeCard";
import { BridgeRoutesPanel } from "@/components/BridgeRoutesPanel";
import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { WalletConnectionDialog } from "@/components/WalletConnectionDialog";
import { useWalletConnection } from "@/hooks/useWalletConnection";
import { Chain, Coin } from "@/types/crypto";

const chains = [
  {
    id: "eth-mainnet",
    name: "Ethereum Mainnet",
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
    coins: [
      { id: "ethereum", name: "Ethereum", symbol: "ETH", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg" },
      { id: "usdc", name: "USD Coin", symbol: "USDC", icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg" },
      { id: "dai", name: "Dai", symbol: "DAI", icon: "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg" }
    ]
  },
  {
    id: "eth-arbitrum",
    name: "Arbitrum",
    icon: "https://cryptologos.cc/logos/arbitrum-arb-logo.svg",
    coins: [
      { id: "ethereum", name: "Ethereum", symbol: "ETH", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg" },
      { id: "usdc", name: "USD Coin", symbol: "USDC", icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg" }
    ]
  },
  {
    id: "eth-optimism",
    name: "Optimism",
    icon: "https://cryptologos.cc/logos/optimism-op-logo.svg",
    coins: [
      { id: "ethereum", name: "Ethereum", symbol: "ETH", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg" },
      { id: "usdt", name: "Tether", symbol: "USDT", icon: "https://cryptologos.cc/logos/tether-usdt-logo.svg" }
    ]
  },
  {
    id: "polygon-mainnet",
    name: "Polygon Mainnet",
    icon: "https://cryptologos.cc/logos/polygon-matic-logo.svg",
    coins: [
      { id: "polygon", name: "Polygon", symbol: "MATIC", icon: "https://cryptologos.cc/logos/polygon-matic-logo.svg" },
      { id: "usdc", name: "USD Coin", symbol: "USDC", icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg" },
      { id: "dai", name: "Dai", symbol: "DAI", icon: "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg" }
    ]
  },
  {
    id: "bsc-mainnet",
    name: "BNB Chain",
    icon: "https://cryptologos.cc/logos/bnb-bnb-logo.svg",
    coins: [
      { id: "bsc", name: "BNB", symbol: "BNB", icon: "https://cryptologos.cc/logos/bnb-bnb-logo.svg" },
      { id: "busd", name: "Binance USD", symbol: "BUSD", icon: "https://cryptologos.cc/logos/binance-usd-busd-logo.svg" }
    ]
  },
  {
    id: "bitcoin-mainnet",
    name: "Bitcoin",
    icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg",
    coins: [
      { id: "bitcoin", name: "Bitcoin", symbol: "BTC", icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg" }
    ]
  },
  {
    id: "solana-mainnet",
    name: "Solana",
    icon: "https://cryptologos.cc/logos/solana-sol-logo.svg",
    coins: [
      { id: "solana", name: "Solana", symbol: "SOL", icon: "https://cryptologos.cc/logos/solana-sol-logo.svg" },
      { id: "usdc", name: "USD Coin", symbol: "USDC", icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg" }
    ]
  }
];

const toChain = {
  id: "starknet",
  name: "Starknet",
  icon: "https://cryptologos.cc/logos/starknet-strk-logo.svg",
  coins: [
    { id: "ethereum", name: "Ethereum", symbol: "ETH", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg" },
    { id: "usdc", name: "USD Coin", symbol: "USDC", icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg" },
    { id: "dai", name: "Dai", symbol: "DAI", icon: "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg" }
  ]
};

const bridges = [
  { name: "Hop", time: "15 min", fee: "$2.5", icon: "/placeholder.svg" },
  { name: "Across", time: "10 min", fee: "$3.2", icon: "/placeholder.svg" },
  { name: "Stargate", time: "20 min", fee: "$1.8", icon: "/placeholder.svg" },
];

const Exchange = () => {
  const [selectedFromChain, setSelectedFromChain] = useState(chains[0]);
  const [selectedFromCoin, setSelectedFromCoin] = useState(chains[0].coins[0]);
  const [selectedToCoin, setSelectedToCoin] = useState(toChain.coins[0]);
  const [showRoutes, setShowRoutes] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [selectedBridge, setSelectedBridge] = useState<string | null>(null);
  const [selectedBridgeDetails, setSelectedBridgeDetails] = useState(null);
  const [activeMode, setActiveMode] = useState<'degen' | 'advance'>('degen');
  const [degenBridgeDetails, setDegenBridgeDetails] = useState(null);
  const [isWalletDialogOpen, setIsWalletDialogOpen] = useState(false);
  const [isLoadingBridges, setIsLoadingBridges] = useState(false);
  const { fromWalletAddress, toWalletAddress } = useWalletConnection();

  const handleFromChainSelect = (chain: Chain) => {
    setSelectedFromChain(chain);
    setSelectedFromCoin(chain.coins[0]);
  };

  const handleFromCoinSelect = (coin: Coin) => {
    setSelectedFromCoin(coin);
  };

  const handleToCoinSelect = (coin: Coin) => {
    setSelectedToCoin(coin);
  };

  const handleReviewSwap = () => {
    if (activeMode === 'advance') {
      setIsSliding(true);
      setShowRoutes(true);
      setIsLoadingBridges(true);

      // Simulate loading time of 3.5 seconds
      setTimeout(() => {
        setIsLoadingBridges(false);
      }, 3500);
    } else {
      const cheapestBridge = bridges.reduce((prev, current) => {
        const prevFee = parseFloat(prev.fee.replace('$', ''));
        const currentFee = parseFloat(current.fee.replace('$', ''));
        return prevFee < currentFee ? prev : current;
      });
      setDegenBridgeDetails(cheapestBridge);
    }
  };

  const handleBridgeSelect = (bridge: any) => {
    setSelectedBridge(bridge.name);
    setSelectedBridgeDetails(bridge);
    setShowRoutes(false);
    setIsSliding(false);
  };

  const handleCloseRoutes = () => {
    setShowRoutes(false);
    setIsSliding(false);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a2c38] via-[#0f1922] to-[#162736] text-white">
      <Navigation />
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-6xl px-4 sm:px-8 py-8">
          <div className="relative">
            <ExchangeCard
              isSliding={isSliding}
              selectedFromChain={selectedFromChain}
              selectedFromCoin={selectedFromCoin}
              selectedToCoin={selectedToCoin}
              onFromChainSelect={handleFromChainSelect}
              onFromCoinSelect={handleFromCoinSelect}
              onToCoinSelect={handleToCoinSelect}
              chains={chains}
              toChain={toChain}
              selectedBridgeDetails={activeMode === 'advance' ? selectedBridgeDetails : degenBridgeDetails}
              handleReviewSwap={handleReviewSwap}
              activeMode={activeMode}
              setActiveMode={setActiveMode}
            />
            {activeMode === 'advance' && (
              <BridgeRoutesPanel
                showRoutes={showRoutes}
                bridges={bridges}
                selectedBridge={selectedBridge}
                onBridgeSelect={handleBridgeSelect}
                isLoading={isLoadingBridges}
                onClose={handleCloseRoutes}
              />
            )}
          </div>
        </div>
      </div>

      <WalletConnectionDialog
        isOpen={isWalletDialogOpen}
        onClose={() => setIsWalletDialogOpen(false)}
      />
    </div>
  );
};
export default Exchange;