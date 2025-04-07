# Personal Website - Iftekhar Ahmed Shafi

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS. The website features a clean, professional design and includes sections for your profile, blog, and contact information.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Blog section for publishing articles
- Contact form for getting in touch
- About page with professional background
- Built with Next.js 14 and TypeScript
- Styled with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
personal-website/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   └── Navigation.tsx     # Navigation component
├── public/               # Static files
└── styles/              # Global styles
```

## Adding Blog Posts

To add a new blog post:

1. Create a new markdown file in the `content/blog` directory
2. Add frontmatter with title, date, and excerpt
3. Write your blog post content in markdown format

## Deployment

The website can be deployed to Vercel with zero configuration:

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Vercel will automatically deploy your website

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [MDX](https://mdxjs.com/) - Blog content

## License

This project is licensed under the MIT License - see the LICENSE file for details. 