# Chamidu Rathnayake Portfolio

A modern, responsive personal portfolio built with React (Vite) and Tailwind CSS.

## Setup

1. Install dependencies:
   - `npm install`
2. Configure EmailJS:
   - Copy `.env.example` to `.env`
   - Replace values with your EmailJS credentials
   - Never commit `.env` to source control
3. Run development server:
   - `npm run dev`

## Build

- `npm run build`
- `npm run preview`

## Notes

- Contact form sends messages using EmailJS environment variables:
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`
- These values are public-side integration keys for EmailJS, but should still be kept in `.env` for safer management and easier environment separation.
- Replace placeholder project/profile images as needed
