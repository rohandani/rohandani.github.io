# Quick Reference Guide

Fast access to common tasks and code snippets.

## 🚀 Quick Commands

### Start Local Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

### Git Commands
```bash
# First time setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/rohandani/rohandani.github.io.git
git push -u origin main

# Update portfolio
git add .
git commit -m "Update portfolio"
git push

# Check status
git status

# View changes
git diff
```

## 📝 Quick Edits

### Add a Project
**File**: `projects.json`
```json
{
  "title": "Project Name",
  "description": "What it does and impact",
  "technologies": ["Tech1", "Tech2"],
  "icon": "code",
  "github": "",
  "demo": ""
}
```

### Add a Testimonial
**File**: `testimonials.json`
```json
{
  "name": "Client Name",
  "position": "Title",
  "company": "Company",
  "text": "Testimonial text",
  "rating": 5
}
```

### Change Primary Color
**File**: `styles.css` (line ~2)
```css
--primary-color: #6366f1; /* Change this hex code */
```

### Update Email
**File**: `index.html` (search for "rohanhdani@gmail.com")
```html
<a href="mailto:your-new-email@example.com">your-new-email@example.com</a>
```

### Update Location
**File**: `index.html` (search for "Surrey, BC, Canada")
```html
<span>Your City, State, Country</span>
```

## 🎨 Color Schemes

### Professional Blue
```css
--primary-color: #2563eb;
--secondary-color: #3b82f6;
--accent-color: #60a5fa;
```

### Tech Green
```css
--primary-color: #10b981;
--secondary-color: #059669;
--accent-color: #34d399;
```

### Modern Orange
```css
--primary-color: #f59e0b;
--secondary-color: #d97706;
--accent-color: #fbbf24;
```

### Creative Purple (Current)
```css
--primary-color: #6366f1;
--secondary-color: #8b5cf6;
--accent-color: #ec4899;
```

## 🔧 Common Fixes

### Site Not Loading
1. Wait 5-10 minutes after deployment
2. Clear cache: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
3. Check GitHub Pages is enabled in Settings
4. Verify repository name is `username.github.io`

### Changes Not Showing
1. Clear browser cache
2. Check if changes were pushed: `git status`
3. Wait a few minutes for GitHub to rebuild
4. Try incognito/private browsing mode

### JSON Errors
1. Validate at [JSONLint](https://jsonlint.com/)
2. Check for:
   - Missing commas
   - Extra commas at end
   - Unmatched brackets
   - Missing quotes

### Layout Broken
1. Check browser console (F12)
2. Validate HTML at [W3C Validator](https://validator.w3.org/)
3. Check for missing closing tags
4. Verify CSS syntax

## 📱 Testing URLs

### Responsive Design Tester
- [Responsive Design Checker](https://responsivedesignchecker.com/)
- [BrowserStack](https://www.browserstack.com/)

### Performance Testing
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### Validation Tools
- [HTML Validator](https://validator.w3.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [JSON Validator](https://jsonlint.com/)

## 🔗 Important Links

### Your Portfolio
- **Live Site**: https://rohandani.github.io
- **Repository**: https://github.com/rohandani/rohandani.github.io
- **Settings**: https://github.com/rohandani/rohandani.github.io/settings

### Documentation
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [MDN Web Docs](https://developer.mozilla.org/)

### Tools
- [Color Picker](https://coolors.co/)
- [Gradient Generator](https://cssgradient.io/)
- [Image Optimizer](https://tinypng.com/)

## 📊 File Structure

```
portfolio/
├── index.html              # Main HTML file
├── styles.css              # All styles
├── script.js               # JavaScript functionality
├── projects.json           # Projects data
├── testimonials.json       # Testimonials data
├── README.md              # Main documentation
├── DEPLOYMENT.md          # Deployment guide
├── CUSTOMIZATION_GUIDE.md # Customization help
├── CHECKLIST.md           # Launch checklist
├── QUICK_REFERENCE.md     # This file
├── .gitignore             # Git ignore rules
└── CNAME.example          # Custom domain template
```

## 🎯 Key Sections in index.html

| Section | ID | Purpose |
|---------|----|------------|
| Navigation | - | Fixed top menu |
| Hero | #home | Introduction |
| About | #about | Professional summary |
| Experience | #experience | Timeline of work |
| Skills | #skills | Technical skills |
| Certifications | #certifications | AWS certs |
| Projects | #projects | Portfolio projects |
| Testimonials | #testimonials | Client feedback |
| Contact | #contact | Contact form |
| Footer | - | Copyright info |

## 💡 Pro Tips

1. **Before Pushing**: Always test locally first
2. **Commit Messages**: Be descriptive ("Add AI project" not "Update")
3. **Backup**: Keep a local copy of your portfolio
4. **Regular Updates**: Update monthly with new projects/skills
5. **Mobile First**: Always test on mobile devices
6. **Performance**: Keep page under 2MB total size
7. **Accessibility**: Use semantic HTML and alt text
8. **SEO**: Update meta descriptions regularly

## 🆘 Emergency Contacts

### If Something Breaks
1. Check browser console (F12) for errors
2. Validate HTML/CSS/JSON
3. Revert to last working version:
   ```bash
   git log  # Find last good commit
   git revert <commit-hash>
   ```
4. Check GitHub Pages status page

### Rollback Changes
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Push force (use carefully!)
git push -f origin main
```

## 📞 Support Resources

- **GitHub Support**: https://support.github.com/
- **Stack Overflow**: https://stackoverflow.com/
- **Web Dev Discord**: Various communities available
- **MDN Community**: https://discourse.mozilla.org/

---

**Last Updated**: 2024
**Version**: 1.0
**Maintained by**: Rohan H. Dani

---

## Quick Copy-Paste

### Add to LinkedIn Profile
```
🌐 Portfolio: https://rohandani.github.io
```

### Add to Email Signature
```
Rohan H. Dani
Technical Lead | AI/ML Enthusiast
📧 rohanhdani@gmail.com
🌐 https://rohandani.github.io
💼 https://linkedin.com/in/rohanhdani
```

### Add to GitHub Profile README
```markdown
## 🌐 Portfolio
Check out my portfolio: [rohandani.github.io](https://rohandani.github.io)
```

---

**Need more help?** Check the full documentation in README.md, DEPLOYMENT.md, and CUSTOMIZATION_GUIDE.md
