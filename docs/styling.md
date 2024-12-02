# Styling System

## Glass Morphism
```css
.glass-card {
  @apply bg-opacity-10 backdrop-blur-lg bg-white border border-[#0ea5e9]/10;
}
```

## Gradient Backgrounds
```css
.gradient-bg {
  background: linear-gradient(
    to bottom right,
    #1a2c38,
    #0f1922,
    #162736
  );
}
```

## Component-Specific Styles

### Financial Elements
```css
.financial-card {
  @apply bg-gradient-to-br from-[#1a2c38]/95 to-[#0f1922]/95
         border border-[#0ea5e9]/10
         shadow-lg;
}

.financial-input {
  @apply bg-[#1a2c38]/50
         border border-[#0ea5e9]/10;
}

.financial-button {
  @apply bg-gradient-to-r from-[#0ea5e9] to-[#22c55e]
         text-white
         transition-all duration-300;
}
```

### Interactive Elements
```css
.hover-scale {
  @apply hover:scale-105
         transition-transform
         duration-300;
}

.active-shrink {
  @apply active:scale-95
         transition-transform
         duration-150;
}

.focus-ring {
  @apply focus:ring-2
         focus:ring-[#0ea5e9]
         focus:ring-opacity-50;
}
```

## Responsive Design
```css
.responsive-container {
  @apply max-w-7xl
         mx-auto
         px-4
         sm:px-6
         lg:px-8;
}

.responsive-grid {
  @apply grid
         grid-cols-1
         sm:grid-cols-2
         lg:grid-cols-3
         gap-6;
}
```

## Dark Mode Support
```css
.dark-mode-text {
  @apply text-white
         dark:text-gray-200;
}

.dark-mode-bg {
  @apply bg-white
         dark:bg-gray-900;
}
```

## Animation Classes
```css
.animate-fade {
  @apply transition-opacity
         duration-300;
}

.animate-slide {
  @apply transition-transform
         duration-500;
}

.animate-scale {
  @apply transition-transform
         duration-200;
}
```

## Layout Utilities
```css
.center-absolute {
  @apply absolute
         top-1/2
         left-1/2
         -translate-x-1/2
         -translate-y-1/2;
}

.flex-center {
  @apply flex
         items-center
         justify-center;
}
```