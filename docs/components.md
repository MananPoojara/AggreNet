# Component Logic

## ExchangeCard Component

### State Management
```typescript
const [amount, setAmount] = useState<string>("");
const [isWalletDialogOpen, setIsWalletDialogOpen] = useState<boolean>(false);
```

### Mode Switching Logic
```typescript
const handleModeSwitch = (mode: 'degen' | 'advance') => {
  setActiveMode(mode);
  if (mode === 'advance') {
    setShowRoutes(true);
    setIsSliding(true);
  } else {
    setShowRoutes(false);
    setIsSliding(false);
  }
};
```

### Wallet Connection Flow
1. User clicks connect
2. Dialog opens
3. Source wallet connection
4. Destination wallet connection
5. Connection validation
6. UI update

### Input Validation
- Amount validation
- Network compatibility
- Balance verification
- Gas estimation

## WalletConnectionDialog Component

### Connection States
```typescript
interface ConnectionState {
  isConnecting: boolean;
  error: string | null;
  address: string | null;
}
```

### Connection Flow
1. Provider detection
2. Network validation
3. Account request
4. Balance check
5. Connection confirmation

### Error Handling
- Provider missing
- User rejection
- Network mismatch
- Insufficient balance

## BridgeRoutesPanel Component

### Route Selection
```typescript
const handleRouteSelect = (bridge: Bridge) => {
  setSelectedBridge(bridge);
  calculateFees(bridge);
  estimateTime(bridge);
};
```

### Panel Animation
```typescript
const [showPanel, setShowPanel] = useState(false);
const [isAnimating, setIsAnimating] = useState(false);
```

### Route Sorting
- By fee
- By time
- By reliability
- By user preference

## CoinSelector Component

### Selection Logic
```typescript
const handleCoinSelect = (coin: Coin) => {
  validateNetwork(coin);
  updateBalance(coin);
  onSelect(coin);
};
```

### Coin Filtering
- By network
- By balance
- By popularity
- By recent usage

### Search Implementation
- Fuzzy search
- Symbol matching
- Name matching
- Recent selections