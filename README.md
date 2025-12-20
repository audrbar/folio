# Folio - Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 14, React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a functional contact form.

## 🌟 Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Dark Mode** - Toggle between light and dark themes with persistent preferences
- **Smooth Animations** - Powered by Framer Motion for engaging user experience
- **Interactive Sections** - Dynamic navigation with active section highlighting
- **Contact Form** - Functional email integration using Resend API
- **Modern UI** - Clean design with Tailwind CSS styling
- **Type-Safe** - Built with TypeScript for robust code quality

## 🚀 Tech Stack

### Core
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility

### Components & Features
- **[React Vertical Timeline](https://www.npmjs.com/package/react-vertical-timeline-component)** - Experience timeline
- **[React Hot Toast](https://react-hot-toast.com/)** - Notification system
- **[React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)** - Scroll detection
- **[React Email](https://react.email/)** - Email template components
- **[Resend](https://resend.com/)** - Email sending service

## 📁 Project Structure

```
folio/
├── actions/              # Server actions
│   └── sendEmail.ts     # Email sending logic
├── app/                 # Next.js App Router
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/          # React components
│   ├── about.tsx
│   ├── contact.tsx
│   ├── experience.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── intro.tsx
│   ├── project.tsx
│   ├── projects.tsx
│   ├── section-divider.tsx
│   ├── section-heading.tsx
│   ├── skills.tsx
│   ├── submit-btn.tsx
│   └── theme-switch.tsx
├── context/             # React Context providers
│   ├── active-section-context.tsx
│   └── theme-context.tsx
├── email/               # Email templates
│   └── contact-form-email.tsx
├── lib/                 # Utilities and data
│   ├── data.ts         # Portfolio content
│   ├── hooks.ts        # Custom React hooks
│   ├── types.ts        # TypeScript types
│   └── utils.ts        # Helper functions
├── public/             # Static assets
└── types/              # TypeScript declarations
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/audrbar/folio.git
cd folio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
RESEND_API_KEY=your_resend_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

- `RESEND_API_KEY` - Your Resend API key for email functionality ([Get it here](https://resend.com/))

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information

Update your personal information in `lib/data.ts`:

- `links` - Navigation menu items
- `experiencesData` - Work experience and education
- `projectsData` - Portfolio projects
- `skillsData` - Technical skills

### Contact Email

Update the recipient email in `actions/sendEmail.ts`:

```typescript
to: ["your-email@example.com"]
```

### Styling

- Global styles: `app/globals.css`
- Tailwind configuration: `tailwind.config.ts`
- Theme colors and fonts: `app/layout.tsx`

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy

See [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more options.

## 📄 License

This project is open source and available for personal use.

## 🙏 Acknowledgments

Original design and tutorial by [ByteGrad](https://github.com/ByteGrad/portfolio-website)
- [YouTube Tutorial](https://www.youtube.com/watch?v=sUKptmUVIBM)
- [Original Repository](https://github.com/ByteGrad/portfolio-website)

## 👤 Author

**Audrius Baronas**

- LinkedIn: [@audrius-baronas](https://www.linkedin.com/in/audrius-baronas-525078257/)
- GitHub: [@audrbar](https://github.com/audrbar)

---

Built with ❤️ using React & Next.js
