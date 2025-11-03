# Deployment Guide for GitHub Pages

## Quick Start (5 minutes)

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name it **exactly**: `rohandani.github.io` (use your GitHub username)
4. Make it **Public**
5. Do NOT initialize with README (we already have files)
6. Click "Create repository"

### Step 2: Upload Your Files

#### Option A: Using GitHub Web Interface (Easiest)

1. On your new repository page, click "uploading an existing file"
2. Drag and drop ALL files from your portfolio folder:
   - index.html
   - styles.css
   - script.js
   - projects.json
   - testimonials.json
   - README.md
   - .gitignore
3. Add commit message: "Initial portfolio commit"
4. Click "Commit changes"

#### Option B: Using Git Command Line

```bash
# Navigate to your portfolio folder
cd /path/to/your/portfolio

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote (replace 'rohandani' with your username)
git remote add origin https://github.com/rohandani/rohandani.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click "Save"

### Step 4: Wait and Visit

1. Wait 2-5 minutes for GitHub to build your site
2. Visit: `https://rohandani.github.io`
3. 🎉 Your portfolio is live!

## Updating Your Portfolio

### Update Projects

1. Edit `projects.json` file
2. Add/modify project entries
3. Commit and push changes:
```bash
git add projects.json
git commit -m "Update projects"
git push
```

### Update Testimonials

1. Edit `testimonials.json` file
2. Add/modify testimonial entries
3. Commit and push changes:
```bash
git add testimonials.json
git commit -m "Update testimonials"
git push
```

### Update Content

1. Edit `index.html` for content changes
2. Edit `styles.css` for styling changes
3. Edit `script.js` for functionality changes
4. Commit and push:
```bash
git add .
git commit -m "Update portfolio content"
git push
```

## Custom Domain (Optional)

If you want to use a custom domain like `rohandani.com`:

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. Create a file named `CNAME` in your repository with your domain:
```
rohandani.com
```
3. Add DNS records at your domain registrar:
   - Type: A, Host: @, Value: 185.199.108.153
   - Type: A, Host: @, Value: 185.199.109.153
   - Type: A, Host: @, Value: 185.199.110.153
   - Type: A, Host: @, Value: 185.199.111.153
   - Type: CNAME, Host: www, Value: rohandani.github.io
4. Wait 24-48 hours for DNS propagation
5. Enable HTTPS in GitHub Pages settings

## Troubleshooting

### Site not loading?
- Wait 5-10 minutes after first deployment
- Check GitHub Pages settings are correct
- Ensure repository name is exactly `username.github.io`
- Check browser console for errors

### Changes not showing?
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a few minutes for GitHub to rebuild
- Check if changes were pushed to GitHub

### 404 Error?
- Ensure `index.html` is in the root directory
- Check repository is public
- Verify GitHub Pages is enabled

### Contact form not working?
- Integrate with Formspree, EmailJS, or Netlify Forms
- See README.md for integration instructions

## Performance Tips

1. **Optimize images**: Use compressed images (if you add any)
2. **Enable caching**: GitHub Pages automatically handles this
3. **Monitor performance**: Use Google Lighthouse
4. **Keep it simple**: Avoid heavy external dependencies

## Security

- Never commit sensitive data (API keys, passwords)
- Use environment variables for secrets
- Keep dependencies updated
- Enable HTTPS (automatic with GitHub Pages)

## Analytics (Optional)

Add Google Analytics to track visitors:

1. Create Google Analytics account
2. Get tracking ID
3. Add before `</head>` in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Support

If you encounter issues:
1. Check [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review error messages in browser console
3. Verify all files are properly uploaded
4. Ensure JSON files have valid syntax

---

Good luck with your portfolio! 🚀
