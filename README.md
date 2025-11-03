# Rohan H. Dani - Portfolio Website

A modern, professional portfolio website showcasing my experience as a Technical Lead with 14+ years in web, mobile, and AI/ML development.

## Features

- 🎨 Modern, responsive design with smooth animations
- 🌓 Dark/Light mode toggle
- 📱 Mobile-friendly and fully responsive
- ⚡ Fast loading and optimized performance
- 🎯 Interactive timeline for experience
- 💼 Dynamic projects section (JSON-driven)
- 💬 Client testimonials section (JSON-driven)
- 📧 Contact form with validation
- 🎓 Certifications showcase
- 🛠️ Comprehensive skills display

## Tech Stack

- HTML5
- CSS3 (Custom properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- JSON for dynamic content

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/rohandani/rohandani.github.io.git
cd rohandani.github.io
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

3. Visit `http://localhost:8000` in your browser

## Customization

### Adding Projects

Edit `projects.json` to add or modify projects:

```json
{
  "title": "Project Name",
  "description": "Project description",
  "technologies": ["Tech1", "Tech2", "Tech3"],
  "icon": "code",
  "github": "https://github.com/username/repo",
  "demo": "https://demo-url.com"
}
```

Available icons: Any Font Awesome icon name (without 'fa-' prefix)

### Adding Testimonials

Edit `testimonials.json` to add or modify testimonials:

```json
{
  "name": "Client Name",
  "position": "Job Title",
  "company": "Company Name",
  "text": "Testimonial text here...",
  "rating": 5
}
```

### Customizing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... other variables */
}
```

## Deployment to GitHub Pages

### Option 1: Using GitHub Web Interface

1. Create a new repository named `rohandani.github.io` (replace with your GitHub username)
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "main" branch as source
5. Save and wait a few minutes
6. Visit `https://rohandani.github.io`

### Option 2: Using Git Command Line

1. Create a new repository on GitHub named `rohandani.github.io`

2. Initialize and push your code:
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/rohandani/rohandani.github.io.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings > Pages
   - Select "main" branch
   - Click Save

4. Your site will be live at `https://rohandani.github.io` in a few minutes

## Contact Form Integration

The contact form currently shows an alert. To make it functional, integrate with one of these services:

### Option 1: Formspree (Recommended)
1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Update the form action in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Follow their integration guide
3. Update `script.js` with EmailJS code

### Option 3: Netlify Forms
If deploying to Netlify, add `netlify` attribute to form:
```html
<form name="contact" method="POST" data-netlify="true">
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- No external dependencies (except Font Awesome CDN)

## License

© 2024 Rohan H. Dani. All rights reserved.

## Contact

- Email: rohanhdani@gmail.com
- LinkedIn: [linkedin.com/in/rohanhdani](https://www.linkedin.com/in/rohanhdani/)
- GitHub: [github.com/rohandani](https://github.com/rohandani)

---

Built with ❤️ using modern web technologies
