# Aimen's Portfolio

My personal developer portfolio — built with React, Vite, and Tailwind CSS.

**Live site:** https://portfolio-chi-three-56.vercel.app/

## Sections

- **Hero** — quick intro and links to my work / contact
- **About** — a bit about who I am
- **Skills** — languages and tools I work with
- **Projects** — featured work with live demos and source code
- **Contact** — a working contact form (powered by EmailJS)

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- React Router
- EmailJS (contact form)
- Spline (3D hero scene)
- Lucide + react-icons (iconography)

## Running locally

```bash
npm install
npm run dev
```

Create a `.env` file with your EmailJS credentials to enable the contact form:

```
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## Build

```bash
npm run build
```
