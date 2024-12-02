# Component Architecture

## Core Structure
```typescript
App
├── Landing
│   └── WalletConnectionDialog
└── Exchange
    ├── Navigation
    ├── ExchangeCard
    │   ├── CoinSelector
    │   └── BridgeRoutesPanel
    └── WalletConnectionDialog
```

## Component Relationships

### Landing Page
- Entry point for users
- Handles initial wallet connection flow
- Manages navigation to Exchange interface

### Exchange Page
- Core functionality hub
- Manages mode switching (Degen/Advance)
- Coordinates between components:
  - ExchangeCard: Main interface
  - Navigation: User controls
  - BridgeRoutesPanel: Route selection

### Component Communication
- Props drilling for direct parent-child
- Context for global states
- Custom hooks for shared logic

## Routing System
- React Router v6
- Dynamic route handling
- Protected routes for authenticated users

## Data Flow
1. User input triggers state changes
2. State updates propagate through component tree
3. Effects handle side effects (API calls, wallet connections)
4. UI updates reflect new state

## Component Lifecycle
1. Initialization
   - State setup
   - Effect registration
   - Event listener binding
2. Runtime
   - State updates
   - Re-renders
   - Effect cleanup
3. Cleanup
   - Effect cleanup
   - Event listener removal
   - Resource release