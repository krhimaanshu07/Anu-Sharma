# Professional Portfolio Website

## Overview

This is a modern, full-stack portfolio website built with React and Express.js, showcasing a professional executive's career achievements, skills, and projects. The application features a responsive design with smooth animations, contact form functionality, and a clean, modern aesthetic using shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth page transitions and scroll animations
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Validation**: Zod for request/response validation
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple

### Design System
- **Component Library**: Custom implementation using shadcn/ui
- **Theme System**: CSS custom properties with dark/light mode support
- **Layout**: Responsive design with mobile-first approach
- **Typography**: Consistent font scaling and spacing system
- **Color Palette**: Neutral base with blue primary accent

## Key Components

### Frontend Components
1. **Layout Component**: Responsive navigation with theme toggle and smooth scroll
2. **Hero Section**: Animated landing area with call-to-action
3. **About Section**: Professional summary with intersection observer animations
4. **Skills Component**: Interactive skill display with percentage indicators
5. **Projects Gallery**: Filterable project showcase with detailed modals
6. **Experience Timeline**: Professional history with achievements
7. **Contact Form**: Validated contact form with success/error handling

### Backend Components
1. **Route Handlers**: RESTful API endpoints for contact form submission
2. **Storage Layer**: Abstracted storage interface with in-memory implementation
3. **Validation Layer**: Zod schemas for type-safe data validation
4. **Error Handling**: Centralized error handling middleware

## Data Flow

### Contact Form Submission
1. User fills out contact form with validation
2. Form data validated client-side using Zod schema
3. Data sent to `/api/contact` endpoint via POST request
4. Server validates data using shared schema
5. Contact record created in database
6. Success/error response sent back to client
7. UI updates with toast notification

### Theme Management
1. Theme preference stored in localStorage
2. CSS custom properties updated on theme change
3. Document class updated for theme-specific styles
4. Component re-renders with new theme values

### Animation System
1. Intersection Observer detects when elements enter viewport
2. Framer Motion triggers animation variants
3. Staggered animations create smooth page progression
4. Scroll-based animations enhance user experience

## External Dependencies

### UI and Styling
- **@radix-ui/***: Accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **framer-motion**: Animation library
- **class-variance-authority**: Type-safe variant generation
- **clsx**: Conditional className utility

### Form Management
- **react-hook-form**: Performant form library
- **@hookform/resolvers**: Validation resolver integration
- **zod**: TypeScript-first schema validation

### Data Management
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe ORM
- **@neondatabase/serverless**: Serverless PostgreSQL client

### Development Tools
- **typescript**: Static type checking
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution for Node.js

## Deployment Strategy

### Production Build Process
1. **Frontend Build**: Vite compiles React app with optimizations
2. **Backend Build**: esbuild bundles Node.js server
3. **Asset Optimization**: Images and static files optimized
4. **Environment Configuration**: Production environment variables set

### Database Setup
1. **Schema Generation**: Drizzle generates SQL from TypeScript schema
2. **Migration System**: Database schema versioning with Drizzle Kit
3. **Connection Management**: Serverless database connection pooling

### Environment Configuration
- **Development**: Local development with Vite dev server
- **Production**: Compiled static files served by Express
- **Database**: PostgreSQL connection via environment variables

### Key Features
- **Responsive Design**: Mobile-first responsive layout
- **Performance Optimization**: Code splitting and lazy loading
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessibility**: ARIA labels and keyboard navigation
- **Type Safety**: End-to-end TypeScript coverage
- **Error Handling**: Graceful error boundaries and user feedback