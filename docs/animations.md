# Animation System

## Keyframe Definitions

### Accordion Animations
```typescript
keyframes: {
  "accordion-down": {
    from: { height: "0" },
    to: { height: "var(--radix-accordion-content-height)" },
  },
  "accordion-up": {
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: "0" },
  },
}
```

### Fade Animations
```typescript
"fade-in": {
  "0%": { opacity: "0", transform: "translateY(20px)" },
  "100%": { opacity: "1", transform: "translateY(0)" },
},
"fade-out": {
  "0%": { opacity: "1", transform: "translateY(0)" },
  "100%": { opacity: "0", transform: "translateY(20px)" },
}
```

### Scale Animations
```typescript
"scale-in": {
  "0%": { transform: "scale(0.95)", opacity: "0" },
  "100%": { transform: "scale(1)", opacity: "1" },
},
"scale-out": {
  "0%": { transform: "scale(1)", opacity: "1" },
  "100%": { transform: "scale(0.95)", opacity: "0" },
}
```

## Animation Classes
- `animate-fade-in`: Smooth entrance (0.8s)
- `animate-accordion-down`: Panel expansion
- `animate-accordion-up`: Panel collapse
- `animate-scale-in`: Element growth
- `animate-scale-out`: Element shrink

## Implementation Examples

### Mode Switch Animation
```typescript
<Button 
  className={`
    transition-all duration-300
    ${activeMode === 'degen' ? 'scale-105' : 'scale-100'}
  `}
>
  Degen Mode
</Button>
```

### Route Panel Slide
```typescript
<div className={`
  transition-transform duration-500
  ${showRoutes ? 'translate-y-0' : 'translate-y-full'}
`}>
  {/* Panel Content */}
</div>
```

### Hover Effects
```typescript
<div className="
  hover:scale-105
  hover:bg-opacity-90
  transition-all
  duration-300
">
  {/* Content */}
</div>
```

## Animation Timing
- Quick transitions: 200ms
- Standard transitions: 300ms
- Complex animations: 500ms
- Delayed sequences: Use setTimeout

## Performance Considerations
- Use `will-change` for heavy animations
- Implement `requestAnimationFrame`
- Monitor frame rates
- Consider reduced motion