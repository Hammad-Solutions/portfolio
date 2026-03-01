# ⚡ Quick Deploy to GitHub Pages - 5 Minutes

## 🎯 Super Fast Deployment

### Step 1: Export Your Files
- Download portfolio from Figma Make
- Extract the ZIP file

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Name: `portfolio`
3. Public repository
4. Click "Create repository"

### Step 3: Upload Files

Open terminal in your portfolio folder:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/Hammad-Solutions/portfolio.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to repository **Settings**
2. Click **Pages** (left sidebar)
3. Source: Select **GitHub Actions**

### Step 5: Wait & Visit! 🎉

Wait 2-3 minutes, then visit:
```
https://hammad-solutions.github.io/portfolio/
```

---

## 📝 Required Files Before Upload

Make sure these files exist:

### 1. Create `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
```

### 2. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
    steps:
      - uses: actions/deploy-pages@v4
```

---

## 🔄 Update Your Portfolio

After making changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Auto-deploys in 2-3 minutes! ✨

---

## ✅ Verify Everything Works

- [ ] Portfolio loads at: https://hammad-solutions.github.io/portfolio/
- [ ] Navigation works
- [ ] Contact form sends to: m6784104@gmail.com
- [ ] GitHub links go to: https://github.com/Hammad-Solutions
- [ ] Feedback box shows after sending message
- [ ] Mobile responsive

---

## 🐛 Quick Fixes

**404 Error?**
- Check `vite.config.js` has `base: '/portfolio/'`
- Wait 5 minutes

**Styles broken?**
- Verify `vite.config.js` exists
- Hard refresh: Ctrl+Shift+R

**Deploy failed?**
- Check Actions tab for errors
- Ensure repository is public
- Verify all files uploaded

---

## 📞 Your Portfolio Info

**Live URL:** `https://hammad-solutions.github.io/portfolio/`

**Contact Form:**
- Form ID: `xjgedepk`
- Emails to: `m6784104@gmail.com`
- Service: Formspree

**Your Links:**
- GitHub: https://github.com/Hammad-Solutions
- LinkedIn: https://www.linkedin.com/in/hammad-solution/
- Email: m6784104@gmail.com

---

**That's it! Your portfolio is now live! 🚀**

For detailed instructions, see: `DEPLOY_TO_GITHUB_PAGES.md`
