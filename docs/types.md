# Type System

## Core Types

### Bridge Interface
```typescript
interface Bridge {
  name: string;      // Bridge protocol name
  time: string;      // Estimated transaction time
  fee: string;       // Transaction fee
  icon: string;      // Bridge protocol icon URL
}
```

### Coin Interface
```typescript
interface Coin {
  id: string;        // Unique identifier
  name: string;      // Display name
  symbol: string;    // Token symbol
  icon: string;      // Token icon URL
}
```

### Wallet Connection State
```typescript
interface WalletConnectionState {
  fromWalletAddress: string | null;  // Source wallet
  toWalletAddress: string | null;    // Destination wallet
  isConnectingFrom: boolean;         // Source connection state
  isConnectingTo: boolean;           // Destination connection state
}
```

## Component Props

### ExchangeCard Props
```typescript
interface ExchangeCardProps {
  isSliding: boolean;
  fromCoin: Coin;
  toCoin: Coin;
  setFromCoin: (coin: Coin) => void;
  setToCoin: (coin: Coin) => void;
  coins: Coin[];
  selectedBridgeDetails: Bridge | null;
  handleSwap: () => void;
  handleReviewSwap: () => void;
  activeMode: 'degen' | 'advance';
  setActiveMode: (mode: 'degen' | 'advance') => void;
}
```

### BridgeRoutesPanel Props
```typescript
interface BridgeRoutesPanelProps {
  showRoutes: boolean;
  bridges: Bridge[];
  selectedBridge: string | null;
  onBridgeSelect: (bridge: Bridge) => void;
}
```

## Custom Type Guards
```typescript
const isBridge = (value: unknown): value is Bridge => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'name' in value &&
    'time' in value &&
    'fee' in value &&
    'icon' in value
  );
};
```

## Utility Types
```typescript
type Mode = 'degen' | 'advance';
type WalletStatus = 'disconnected' | 'connecting' | 'connected';
type TransactionStatus = 'pending' | 'processing' | 'completed' | 'failed';
```