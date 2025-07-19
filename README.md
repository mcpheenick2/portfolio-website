# Nick McPhee - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS for showcasing my software engineering and computer science projects.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Fast performance with Next.js
- 🎯 SEO optimized
- 📧 Contact form with API integration
- 🌟 Project showcase
- 📄 About page with experience timeline

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information
- Update personal details in components and pages
- Replace placeholder content with your information
- Add your actual project data in `pages/projects.tsx`

### Styling
- Customize colors in `tailwind.config.js`
- Modify global styles in `styles/globals.css`
- Update component styles as needed

### Contact Form
- Configure email service in `pages/api/contact.ts`
- Add your email service API keys to environment variables

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
- Netlify: Add `next.config.js` build settings
- AWS/Digital Ocean: Use Docker or static export

## Environment Variables

Create a `.env.local` file for local development:

```
SENDGRID_API_KEY=your_sendgrid_api_key
CONTACT_EMAIL=your.email@example.com
```

## Project Structure

```
├── components/          # Reusable React components
├── pages/              # Next.js pages and API routes
├── public/             # Static assets
├── styles/             # CSS files
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).
