# Task 04: Hero Section

**Status**: [ ] NOT STARTED

**Dependencies**: Task 02

**Estimated Complexity**: Medium

## Objective

Create an eye-catching hero section with headline, subheadline, call-to-action buttons, and modern design elements.

## Requirements

1. Large, prominent headline with engaging copy
2. Supporting subheadline text
3. Call-to-action buttons
4. Modern gradient background
5. Fully responsive design
6. Use lorem ipsum for content

## Steps

### 1. Update Hero Component

Replace `src/sections/Hero.jsx`:

```jsx
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-16"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
              ✨ Welcome to ModernSite
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              {" "}Amazing{" "}
            </span>
            Today
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl">
              Get Started
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="group bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-2 border-2 border-gray-200">
              <PlayCircle size={20} />
              Watch Demo
            </button>
          </div>

          {/* Stats or Social Proof */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">10K+</div>
              <div className="text-gray-600 text-sm md:text-base">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600 text-sm md:text-base">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">99%</div>
              <div className="text-gray-600 text-sm md:text-base">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 2. Test Responsiveness

Test the hero section at different viewport sizes:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

Verify:
- Text scales appropriately
- Buttons stack on mobile, inline on desktop
- Stats grid remains readable
- No horizontal overflow

## Acceptance Criteria

- [ ] Hero section has compelling headline and subheadline
- [ ] Two CTA buttons with icons
- [ ] Gradient background is visually appealing
- [ ] Stats section displays social proof
- [ ] Fully responsive across all screen sizes
- [ ] Buttons have hover effects
- [ ] Typography is clear and readable

## Files to Modify

- `src/sections/Hero.jsx` (modified)

## Completion

When complete:
1. Update status to `[✓ COMPLETED]`
2. Commit changes with message: "feat: implement hero section with CTAs and stats"
3. Proceed to Task 05
