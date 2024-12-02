import { max } from "date-fns";

export const chains = [
    {    
    id: "ETHEREUM_SEPOLIA",
      name: "Ethereum Mainnet",
      icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
      chainid: '11155111',
      coins: [
        { id: "ETH", name: "Ethereum", symbol: "ETH", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg" },
        { id: "USDC", name: "USD Coin", symbol: "USDC", icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg" },
        { id: "USDT", name: "USDT", symbol: "USDT", icon: "https://cryptologos.cc/logos/multi-collateral-usdt-dai-logo.svg" }
      ]
    },
    {
        id : "ARBITRUM_MAINNET",
      name: "Arbitrum",
      chainid: '42161',
      icon: "https://cryptologos.cc/logos/arbitrum-arb-logo.svg",
      coins: [
        { id: "ETH", name: "Ethereum", symbol: "ETH", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg" },
        { id: "USDC", name: "USD Coin", symbol: "USDC", icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg" }
      ]
    },
    {
        id: "eth-optimism",
      name: "Optimism",
      chainid: '10',
      icon: "https://cryptologos.cc/logos/optimism-op-logo.svg",
      coins: [
        { id: "ETH", name: "Ethereum", symbol: "ETH", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg" },
        { id: "USDT", name: "Tether", symbol: "USDT", icon: "https://cryptologos.cc/logos/tether-usdt-logo.svg" }
      ]
    },
    {
        id: "polygon-mainnet",
      name: "Polygon Mainnet",
      chainid: '-1',
      icon: "https://cryptologos.cc/logos/polygon-matic-logo.svg",
      coins: [
        { id: "MATIC", name: "Polygon", symbol: "MATIC", icon: "https://cryptologos.cc/logos/polygon-matic-logo.svg" },
        { id: "USDC", name: "USD Coin", symbol: "USDC", icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg" },
        { id: "DAI", name: "Dai", symbol: "DAI", icon: "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg" }
      ]
    },
    {
        id: "bsc-mainnet",
      name: "BNB Chain",
      chainid: '56',
      icon: "https://cryptologos.cc/logos/bnb-bnb-logo.svg",
      coins: [
        { id: "BNB", name: "BNB", symbol: "BNB", icon: "https://cryptologos.cc/logos/bnb-bnb-logo.svg" },
        { id: "BUSD", name: "Binance USD", symbol: "BUSD", icon: "https://cryptologos.cc/logos/binance-usd-busd-logo.svg" }
      ]
    },
    
  ];
  

 export  const toChain = {
    // id: "STARKNET_SEPOLIA",  
    // name: "Starknet",
    // chainid: '0x534e5f4d41494e',
    // icon: "https://cryptologos.cc/logos/starknet-strk-logo.svg",
    // coins: [
    //   { id: "ethereum", name: "Ethereum", symbol: "ETH", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg" },
    //   { id: "usdc", name: "USD Coin", symbol: "USDC", icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg" },
    //   { id: "dai", name: "Dai", symbol: "USDT", icon: "https://cryptologos.cc/logos/usd-coin-usdt-logo.svg" },
    //   { id: "arusdc", name: "Arusdc", symbol: "ARUSDC", icon: "https://cryptologos.cc/logos/usd-coin-usdt-logo.svg" }

    // ]
    
    id: "MINT_SEPOLIA",
    name: "Mint",
    chainid: 'MINT_SEPOLIA',
    icon: "https://cryptologos.cc/logos/starknet-strk-logo.svg",
    coins: [
      { id: "ETH", name: "ETH", symbol: "ETH", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg" },
      { id: "usdc", name: "USD Coin", symbol: "USDC", icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg" },
      { id: "dai", name: "Dai", symbol: "USDT", icon: "https://cryptologos.cc/logos/usd-coin-usdt-logo.svg" },
      { id: "arusdc", name: "Arusdc", symbol: "ARUSDC", icon: "https://cryptologos.cc/logos/usd-coin-usdt-logo.svg" }

    ]


  };

  
export const testNetChainId = ""


// export const bridge = [
//   { name: "LayerSwap", time: "15 min", fee: "0.00", icon: "/placeholder.svg", minReceived: "0.0000", maxReceived: "0.0000" },
  
// ];

export const backendApi = "http://localhost:3000/" 
