# NextSaaS - Modern SaaS Template Collection 

A comprehensive, modern Next.js 15 SaaS template collection with 20+ homepage variations and complete inner pages. Built with React 19, TypeScript, Tailwind CSS 4, and cutting-edge web technologies for SaaS businesses, startups, and web applications.

![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-blue)
![GSAP](https://img.shields.io/badge/GSAP-3.12.5-green)
![Lenis](https://img.shields.io/badge/Lenis-1.0.38-orange)

## 📦 What's Included

- ✅ **Complete Source Code** - Full Next.js 15 project
- ✅ **20+ Homepage Variations** - Different layouts and styles
- ✅ **50+ Inner Pages** - Authentication, pricing, blog, and more
- ✅ **500+ Components** - Reusable React components
- ✅ **Documentation** - Comprehensive setup guide
- ✅ **Free Updates** - Future improvements included
- ✅ **Premium Support** - Email support from our team

## ✨ Features

### 🏠 **34+ Homepage Variations**

- Multiple design styles for different business needs
- Crypto, Finance, Analytics, SaaS, and more themes
- Modern layouts with unique hero sections and components

### 📄 **Complete Page Collection**

- **Authentication**: Login/Signup pages with multiple variants
- **Pricing**: Multiple pricing page designs with feature comparisons
- **Blog**: Blog listing, details, and markdown support
- **About**: Team, company story, and mission pages
- **Services**: Service listings and detailed service pages
- **Contact**: Contact forms with integrated maps
- **Legal**: Privacy policy, terms, GDPR compliance pages
- **Support**: FAQ, documentation, and help pages

### 🎨 **Modern Design System**

- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: GSAP and Lenis for premium interactions
- **Interactive Components**: Sliders, modals, and dynamic elements
- **Professional UI**: Clean, modern design with consistent spacing

### ⚡ **Performance & Developer Experience**

- **Next.js 15**: Latest features with Turbopack support
- **TypeScript**: Full type safety and better developer experience
- **Component Architecture**: Reusable, modular components
- **Code Quality**: ESLint, Prettier, and Husky pre-commit hooks
- **Conventional Commits**: Structured commit messages with Commitlint

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Custom component library
- **Animations**: GSAP 3.13, Lenis smooth scrolling
- **Maps**: Leaflet with React integration
- **Content**: Markdown support with gray-matter
- **Theme**: next-themes for dark/light mode
- **Development**: ESLint, Prettier, Husky, lint-staged

## 📋 Prerequisites

Before getting started, ensure you have:

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Quick Start

### 1. Download & Extract

1. **Download** the template files from ThemeForest
2. **Extract** the ZIP file to your development directory
3. **Navigate** to the project folder:

```bash
cd nextsaas-next
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install
```

### 3. Start Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
nextsaas-next/
├── public/                     # Static assets
│   ├── images/                # Images organized by components
│   ├── icons/                 # SVG icons and graphics
│   └── favicon.ico           # Site favicon
├── src/
│   ├── app/                  # Next.js 15 App Router
│   │   ├── (pages)/         # Route groups for different pages
│   │   ├── globals.css      # Global styles
│   │   └── layout.tsx       # Root layout component
│   ├── components/          # React components
│   │   ├── homepage-*/      # Homepage variations (01-20)
│   │   ├── authentication/  # Login/signup components
│   │   ├── pricing-*/       # Pricing page components
│   │   ├── blog-*/          # Blog-related components
│   │   ├── shared/          # Reusable components
│   │   │   ├── header/      # Navigation components
│   │   │   ├── footer/      # Footer components
│   │   │   └── ui/          # Base UI components
│   │   └── ui/              # Core UI components
│   ├── context/             # React contexts
│   ├── data/                # Static data and content
│   │   ├── blogs/           # Markdown blog posts
│   │   ├── services/        # Service descriptions
│   │   └── team/            # Team member data
│   ├── hooks/               # Custom React hooks
│   ├── styles/              # CSS modules and styles
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Utility functions
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🎯 Available Pages

### Homepage Variations

Access different homepage designs:

- `/` - Default homepage (Homepage 01)
- `/homepage-02` through `/homepage-20` - Additional variations

### Core Pages

- **Authentication**: `/login-01`, `/signup-01`, `/login-02`, etc.
- **Pricing**: `/pricing-01`, `/pricing-02`, `/pricing-03`
- **About**: `/about-01`, `/about-02`, `/about-03`
- **Blog**: `/blog-01`, `/blog-02`, `/blog-03`, `/blog/[slug]`
- **Services**: `/our-services-01`, `/our-services/[slug]`
- **Team**: `/our-team-01`, `/team/[slug]`
- **Features**: `/features-01`, `/features-02`
- **Contact**: `/contact-us`
- **Legal**: `/privacy`, `/terms-conditions`, `/gdpr`

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

### Code Quality Tools

This project uses several tools to maintain code quality:

- **ESLint**: JavaScript/TypeScript linting
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit checks
- **lint-staged**: Run linters on staged files only
- **Commitlint**: Enforce conventional commit messages

### Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```bash
feat: add new homepage variation.
fix: resolve responsive layout issue.
docs: update installation guide.
```

## 🎨 Customization

### Theme Customization

1. **Colors**: Edit `src/styles/variables.css` for color schemes
2. **Typography**: Modify font settings in `src/utils/font.ts`
3. **Components**: Customize components in `src/components/ui/`
4. **Tailwind**: Update `tailwind.config.ts` for design tokens

### Adding New Pages

Here's a complete example of creating a new "Portfolio" page:

#### Step 1: Create the Page Route

Create `src/app/portfolio/page.tsx`:

```tsx
import Portfolio from '@/components/portfolio/Portfolio';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - NextSaaS',
  description: 'Showcase of our amazing projects and work',
};

const PortfolioPage = () => {
  return (
    <>
      <NavbarOne />
      <Portfolio />
      <FooterOne />
    </>
  );
};

export default PortfolioPage;
```

#### Step 2: Create Page Components

Create `src/components/portfolio/Portfolio.tsx`:

```tsx
import Image from 'next/image';
import RevealAnimation from '@/components/animation/RevealAnimation';

const portfolioData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: '/images/portfolio/project-1.jpg',
    description: 'Modern e-commerce solution built with Next.js',
  },
  // Add more portfolio items...
];

const Portfolio = () => {
  return (
    <section className="pb-[100px] pt-[100px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-14">
          <RevealAnimation delay={0.3}>
            <h1 className="max-w-[742px] mx-auto">Our Portfolio</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="max-w-[482px] mx-auto">Discover our latest projects and creative solutions</p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {portfolioData.map((item, index) => (
            <RevealAnimation delay={0.5 + index * 0.1} key={item.id}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="bg-background-2 dark:bg-background-5 rounded-[20px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="p-6 space-y-3">
                    <span className="text-sm text-primary">{item.category}</span>
                    <h3 className="text-heading-5">{item.title}</h3>
                    <p className="text-body-text">{item.description}</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
```

#### Step 3: Add Navigation Link

Update the header component to include the new page. In `src/components/shared/header/NavbarOne.tsx`, add:

```tsx
// Add to the navigation items array
{
  id: 7,
  name: 'Portfolio',
  path: '/portfolio',
},
```

#### Step 4: Add Data (Optional)

Create `src/data/portfolio.ts` for dynamic content:

```tsx
export const portfolioItems = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: '/images/portfolio/project-1.jpg',
    description: 'Modern e-commerce solution built with Next.js',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://example.com',
  },
  // Add more items...
];
```

#### Step 5: Add Images

Place your portfolio images in:

```
public/images/portfolio/
├── project-1.jpg
├── project-2.jpg
└── project-3.jpg
```

#### Step 6: Test Your Page

1. Start the development server: `npm run dev`
2. Navigate to `http://localhost:3000/portfolio`
3. Check that the page loads correctly
4. Test navigation from the header menu

**That's it!** Your new portfolio page is ready with proper routing, components, navigation, and SEO metadata.

### Content Management

- **Blog Posts**: Add markdown files in `src/data/blogs/`
- **Services**: Update service data in `src/data/services/`
- **Team Members**: Modify team data in `src/data/team/`
- **Static Content**: Edit component files directly

## 🏗️ Building for Production

### Build Process

```bash
# Create production build
npm run build

# Start production server
npm run start
```

### Build Output

- Static assets are optimized and compressed
- JavaScript is minified and tree-shaken
- CSS is purged and optimized
- Images are automatically optimized by Next.js

### Performance Features

- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for better performance
- **Bundle Analysis**: Built-in bundle analyzer

## 🚀 Deployment

### Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js application:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The project can be deployed to:

- **Netlify**: Static site deployment with automatic builds
- **Railway**: Full-stack deployment with database support
- **DigitalOcean**: App Platform with automatic scaling
- **AWS**: Amplify or EC2 for enterprise solutions
- **Hostinger**: Shared hosting with Node.js support

### Deployment Guide

1. **Build the project**: Run `npm run build` locally to test
2. **Choose platform**: Select your preferred hosting provider
3. **Configure environment**: Set up any required environment variables
4. **Deploy**: Follow platform-specific deployment instructions

Need help with deployment? Contact us at [hello@pixel71.com](mailto:hello@pixel71.com)

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📖 Documentation

- [Development Guide](./DEVELOPMENT.md) - Detailed development workflow
- [Component Documentation](https://nextsaas-documentation.vercel.app/nextjs/get-started) - Usage guide

## 📧 Support & Contact

We provide comprehensive support for all our customers:

- **Email Support**: [hello@pixel71.com](mailto:hello@pixel71.com)
- **Response Time**: Within 24 hours on business days
- **Support Includes**:
  - Installation assistance
  - Bug fixes and troubleshooting
  - Customization guidance
  - Feature clarifications

---

**Made by [Pixel71](mailto:hello@pixel71.com)**

\_Happy coding!
