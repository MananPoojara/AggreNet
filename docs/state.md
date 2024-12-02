# State Management

## Wallet Connection Hook
```typescript
const useWalletConnection = () => {
  const [fromWalletAddress, setFromWalletAddress] = useState<string | null>(null);
  const [toWalletAddress, setToWalletAddress] = useState<string | null>(null);
  const [isConnectingFrom, setIsConnectingFrom] = useState<boolean>(false);
  const [isConnectingTo, setIsConnectingTo] = useState<boolean>(false);
  // ... connection logic
};
```

## Bridge Selection State
```typescript
interface BridgeSelectionState {
  selectedBridge: string | null;
  bridgeDetails: Bridge | null;
  isLoading: boolean;
  error: Error | null;
}
```

## Global State Management
- React Query for API data
- Context for shared state
- Local state for UI
- URL state for routing

## State Updates
```typescript
const updateState = (newState: Partial<State>) => {
  setState(prev => ({
    ...prev,
    ...newState
  }));
};
```

## State Persistence
- Local Storage
- Session Storage
- URL Parameters
- Cookies

## State Synchronization
- WebSocket updates
- Polling mechanisms
- Event listeners
- State reconciliation

## Performance Optimization
- Memoization
- Debouncing
- Throttling
- Batch updates