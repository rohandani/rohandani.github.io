# Portfolio Customization Guide

This guide will help you customize your portfolio to match your preferences and keep it updated.

## Table of Contents
1. [Adding/Updating Projects](#adding-projects)
2. [Adding/Updating Testimonials](#adding-testimonials)
3. [Changing Colors & Theme](#changing-colors)
4. [Updating Personal Information](#updating-personal-info)
5. [Adding New Sections](#adding-sections)
6. [Customizing Skills](#customizing-skills)

---

## Adding Projects

### Edit `projects.json`

```json
[
  {
    "title": "Your Project Name",
    "description": "Brief description of what the project does and its impact",
    "technologies": ["React", "Node.js", "MongoDB"],
    "icon": "code",
    "github": "https://github.com/yourusername/repo",
    "demo": "https://your-demo-url.com"
  }
]
```

### Available Icons

Use any Font Awesome icon name (without 'fa-' prefix):
- `code` - Generic code icon
- `robot` - AI/ML projects
- `mobile-alt` - Mobile apps
- `chart-line` - Analytics/Dashboard
- `cloud` - Cloud/SaaS
- `brain` - AI/Intelligence
- `database` - Database projects
- `shopping-cart` - E-commerce
- `graduation-cap` - Education
- `solar-panel` - Energy/Solar

[Browse all icons](https://fontawesome.com/icons)

### Tips
- Keep descriptions concise (2-3 sentences)
- List 3-5 key technologies
- Add GitHub link if open source
- Add demo link if publicly accessible
- Leave links empty ("") if not available

---

## Adding Testimonials

### Edit `testimonials.json`

```json
[
  {
    "name": "Client Full Name",
    "position": "Job Title",
    "company": "Company Name",
    "text": "The testimonial text goes here. Keep it authentic and specific.",
    "rating": 5
  }
]
```

### Tips
- Get permission before adding testimonials
- Use real names and positions
- Keep testimonials 2-4 sentences
- Focus on specific achievements
- Rating is optional (1-5)

---

## Changing Colors

### Edit `styles.css` - Root Variables

```css
:root {
    /* Primary brand color */
    --primary-color: #6366f1;
    
    /* Secondary accent color */
    --secondary-color: #8b5cf6;
    
    /* Accent/highlight color */
    --accent-color: #ec4899;
    
    /* Text colors */
    --text-primary: #1f2937;
    --text-secondary: #6b7280;
    
    /* Background colors */
    --bg-primary: #ffffff;
    --bg-secondary: #f9fafb;
    --bg-card: #ffffff;
}
```

### Popular Color Schemes

#### Professional Blue
```css
--primary-color: #2563eb;
--secondary-color: #3b82f6;
--accent-color: #60a5fa;
```

#### Tech Green
```css
--primary-color: #10b981;
--secondary-color: #059669;
--accent-color: #34d399;
```

#### Creative Purple (Current)
```css
--primary-color: #6366f1;
--secondary-color: #8b5cf6;
--accent-color: #ec4899;
```

#### Modern Orange
```css
--primary-color: #f59e0b;
--secondary-color: #d97706;
--accent-color: #fbbf24;
```

---

## Updating Personal Info

### Contact Information

Edit `index.html` - Find the contact section:

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <a href="mailto:your-email@example.com">your-email@example.com</a>
</div>
```

### Social Links

Update URLs in the hero section and contact section:

```html
<a href="https://github.com/yourusername" target="_blank">
    <i class="fab fa-github"></i>
</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank">
    <i class="fab fa-linkedin"></i>
</a>
```

### Professional Summary

Edit the hero section in `index.html`:

```html
<p class="hero-description">
    Your updated professional summary here...
</p>
```

### Location

```html
<div class="hero-location">
    <i class="fas fa-map-marker-alt"></i>
    <span>Your City, State/Province, Country</span>
</div>
```

---

## Customizing Skills

### Edit `script.js` - Skills Data

```javascript
const skillsData = [
    {
        category: "Your Category Name",
        skills: ["Skill 1", "Skill 2", "Skill 3"]
    },
    // Add more categories...
];
```

### Example: Adding a New Category

```javascript
{
    category: "Design Tools",
    skills: ["Figma", "Adobe XD", "Sketch", "Photoshop"]
}
```

### Tips
- Group related skills together
- Use industry-standard names
- Keep 3-8 skills per category
- Order by proficiency or importance

---

## Adding New Sections

### 1. Add HTML Section

```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <div class="section-content">
            <!-- Your content here -->
        </div>
    </div>
</section>
```

### 2. Add Navigation Link

```html
<li><a href="#new-section" class="nav-link">New Section</a></li>
```

### 3. Add Styles

```css
.new-section {
    padding: 5rem 0;
    background: var(--bg-secondary);
}

.section-content {
    /* Your styles */
}
```

---

## Advanced Customizations

### Change Font

Add to `<head>` in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
```

Update in `styles.css`:

```css
body {
    font-family: 'Poppins', sans-serif;
}
```

### Add Animations

```css
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animated-element {
    animation: slideIn 0.6s ease;
}
```

### Modify Timeline

Edit the experience section in `index.html`:

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <h3>Your Experience Title</h3>
        <p class="timeline-description">
            Description of your work...
        </p>
    </div>
</div>
```

---

## Best Practices

### Content
- ✅ Keep descriptions concise and impactful
- ✅ Use action verbs (Built, Developed, Led, Implemented)
- ✅ Include metrics when possible (70% improvement, 10,000+ users)
- ✅ Update regularly with new projects and skills
- ❌ Don't use jargon without context
- ❌ Don't make unverifiable claims

### Design
- ✅ Maintain consistent spacing
- ✅ Use high contrast for readability
- ✅ Test on mobile devices
- ✅ Keep load times fast
- ❌ Don't use too many colors
- ❌ Don't overcrowd sections

### Performance
- ✅ Optimize images before adding
- ✅ Minimize external dependencies
- ✅ Test with Lighthouse
- ✅ Use lazy loading for images
- ❌ Don't add heavy libraries unnecessarily

---

## Testing Your Changes

### Local Testing
```bash
# Start local server
python -m http.server 8000

# Visit in browser
http://localhost:8000
```

### Check Responsiveness
- Desktop: 1920px, 1440px, 1024px
- Tablet: 768px
- Mobile: 375px, 320px

### Browser Testing
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers

### Validation
- [HTML Validator](https://validator.w3.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [JSON Validator](https://jsonlint.com/)

---

## Need Help?

### Resources
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Color Palette Generator](https://coolors.co/)

### Common Issues

**Changes not showing?**
- Clear browser cache (Ctrl+Shift+R)
- Check file was saved
- Verify JSON syntax is valid

**Layout broken?**
- Check for missing closing tags
- Validate HTML structure
- Review CSS syntax

**JavaScript errors?**
- Open browser console (F12)
- Check for syntax errors
- Verify JSON files are valid

---

Happy customizing! 🎨
