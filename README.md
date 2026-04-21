# GooglePeak - Digital Law & Strategic Branding Agency

A premium, ultra-fast Next.js portal for GooglePeak showcasing 40 years of legal legacy combined with modern digital estate services. Built with a dark mode aesthetic, gold accents, and optimized for international clients.

## Features

- 🏛️ **Dual Service Wings** - Legal Tech & Digital Estate showcase
- 👥 **Leadership Profiles** - High-profile advocates and bar leaders
- 📊 **Case Studies** - Detailed client success stories
- 💬 **Client Testimonials** - With ratings and service relations
- 📱 **Mobile-First** - Floating WhatsApp button for instant contact
- 🎨 **Premium Design** - Dark mode with gold/electric blue accents
- ⚡ **Headless Architecture** - Static generation for 100% PageSpeed
- 🌐 **International Ready** - Optimized for overseas Pakistanis

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69e6fbaa7945ab7cc4f1317c&clone_repository=69e6fd207945ab7cc4f13191)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Build a high-end, minimalist, and ultra-fast Digital Law & Strategic Branding Agency portal named GooglePeak.com. The site must feature two distinct wings: The Legal Tech Wing: Showcasing our 40-year legacy in Corporate Law, Tax Strategy, and Family Law (Online Nikah/Court Marriage) under the Qanoon Group banner. The Digital Estate Wing: Focusing on 'Rank & Flip' domain management, SEO Content, and Headless Static Web Architecture. Design Vibe: Modern, 'Dark Mode' aesthetics with gold or electric blue accents, professional typography, and zero clutter. It should feel like a premium consultancy firm, not a typical blog. Key Functionalities: A 'Service Showcase' for international clients. High-conversion lead generation forms for legal consultations. A 'Partner with Us' section for entrepreneurs to join our 100+ site network. Target Audience: International business owners, overseas Pakistanis, and digital real estate investors."

### Code Generation Prompt

> Build a Next.js application for a company website called "My Company". The content is managed in Cosmic CMS with the following object types: services, team-members, case-studies, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Cosmic SDK** - Headless CMS integration
- **Bun** - Package manager

## Getting Started

### Prerequisites

- Bun or Node.js 18+
- Cosmic account with bucket configured

### Installation

```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all services
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .depth(1)

// Fetch team members
const { objects: team } = await cosmic.objects
  .find({ type: 'team-members' })
  .depth(1)
```

## Cosmic CMS Integration

This app uses 4 object types: services, team-members, case-studies, testimonials - all fetched with depth=1 for connected objects.

## Deployment Options

- Vercel (recommended)
- Netlify
- Set environment variables: `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`

<!-- README_END -->