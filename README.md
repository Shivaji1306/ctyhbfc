# Roast & Ritual — Coffee Shop Website

This project is a small, responsive multi-page website for "Roast & Ritual" — an artisan coffee shop. It uses HTML, JavaScript, and Tailwind CSS classes for styling. Google Fonts are used for headings and body text.

Files
- index.html — Home page with hero, interactive menu with filters, features, and newsletter modal.
- about.html — About page with story, roasting philosophy, and team section.
- contact.html — Contact page with location, hours, map placeholder, and a contact form.
- script.js — Shared JavaScript powering menu rendering, modal interactions, and form handling.

Design Notes
- The layout is fluid and intentionally fills the full width of the viewport. Main wrappers use w-full / max-w-none so the content scales to all screen sizes.
- Tailwind CSS is loaded via CDN. All styling is applied using Tailwind utility classes directly in HTML.
- Subtle animations and hover effects are added using Tailwind classes (transitions, transform, hover:scale, shadow changes).
- Images use dynamic placeholders in the format accepted by the system (e.g., https://images.unsplash.com/photo-1652458290272-b4b99de25e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODkyNDZ8MHwxfHNlYXJjaHwzfHxkZXNjcmlwdGlvbnxlbnwwfDB8fHwxNzU1MjQyNzQyfDA&ixlib=rb-4.1.0&q=80&w=1080). Replace these placeholders with actual image URLs or base64 data URIs if you have assets.

Interactivity
- The menu on the home page is rendered from a JavaScript array (MENU_ITEMS) and supports filtering (All, Espresso, Brew, Pastry).
- Each menu card includes "Details" and "Add" buttons. Details opens a quick modal, Add shows a small toast confirmation.
- A newsletter modal can be opened from the header. Submission is validated and simulates a subscribe action.
- Contact form validates required fields and simulates sending a message.

Customization
- To change fonts, modify the Google Fonts link in the HTML head sections and adjust the CSS variables.
- To replace placeholder images with real assets, search for "{{image:" placeholders in HTML and script.js and replace the entire placeholder string with your image src (URL or data URI). If you have user-provided images (base64), use the data URI directly in the img src.
- To add or edit menu items, update the MENU_ITEMS array in script.js.

Notes on Assets
- The prototype uses descriptive image placeholders so an image-fetcher service can supply appropriate photos. If you have local images, replace the placeholder strings with actual paths or data URIs.

How to Run
1. Open index.html in a browser. All pages are static and linked via relative paths.
2. For local development you can also serve the folder with a simple static server (e.g., `npx serve` or `python -m http.server`).

Accessibility & Performance
- This is a lightweight static demo. For production, consider adding server-side form handling, image optimization, and accessibility improvements (ARIA where needed, better focus management for modals).

License
- This demo project is provided as-is for demonstration and can be adapted for your coffee shop website.
