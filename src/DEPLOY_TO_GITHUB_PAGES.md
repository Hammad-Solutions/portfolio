# 🚀 Deploy Your Portfolio to GitHub Pages

## Quick Overview
This guide will help you deploy your portfolio to GitHub Pages in about **10 minutes**.

Your portfolio will be live at: `https://Hammad-Solutions.github.io/portfolio/`

---

## 📋 Prerequisites

Before you start, make sure you have:

- ✅ A GitHub account (you already have: **Hammad-Solutions**)
- ✅ Git installed on your computer
- ✅ Your portfolio files ready to deploy

---

## 🎯 Deployment Steps

### Step 1: Download Your Portfolio Files (2 minutes)

1. **Export from Figma Make**
   - Click the **"Export"** or **"Download"** button in Figma Make
   - Download all files as a `.zip`
   - Extract the `.zip` file to a folder (e.g., `portfolio`)

### Step 2: Create a GitHub Repository (3 minutes)

1. **Go to GitHub**
   - Visit: https://github.com/Hammad-Solutions
   - Click the **"+"** icon in the top right
   - Select **"New repository"**

2. **Repository Settings**
   ```
   Repository name: portfolio
   Description: My Professional Portfolio Website
   Visibility: Public ✅
   
   ❌ Do NOT initialize with README, .gitignore, or license
   ```

3. **Click "Create repository"**

### Step 3: Add Deployment Configuration (2 minutes)

Before uploading, you need to add a configuration file:

1. **Create a file named `vite.config.js`** in your portfolio folder (same level as `package.json`)

2. **Add this content:**
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import path from 'path'

   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/',
     resolve: {
       alias: {
         '@': path.resolve(__dirname, './src'),
       },
     },
     build: {
       outDir: 'dist',
       assetsDir: 'assets',
     },
   })
   ```

3. **Create a file named `.github/workflows/deploy.yml`**

   First create the folders:
   ```
   portfolio/
   └── .github/
       └── workflows/
           └── deploy.yml
   ```

4. **Add this content to `deploy.yml`:**
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches:
         - main

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: 20

         - name: Install dependencies
           run: npm install

         - name: Build
           run: npm run build

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./dist

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

### Step 4: Upload to GitHub (3 minutes)

Open your terminal/command prompt in your portfolio folder and run:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Portfolio website"

# Connect to GitHub repository
git remote add origin https://github.com/Hammad-Solutions/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**If this is your first time:**
- You'll be asked to login to GitHub
- Follow the authentication prompts

### Step 5: Enable GitHub Pages (2 minutes)

1. **Go to your repository**
   - Visit: https://github.com/Hammad-Solutions/portfolio

2. **Open Settings**
   - Click the **"Settings"** tab

3. **Configure Pages**
   - Scroll down to **"Pages"** in the left sidebar
   - Under **"Source"**, select:
     - Source: **GitHub Actions**

4. **Wait for deployment**
   - Go to the **"Actions"** tab
   - You'll see a workflow running
   - Wait for the green checkmark ✅ (takes 2-3 minutes)

### Step 6: View Your Live Portfolio! 🎉

Your portfolio will be live at:

```
https://hammad-solutions.github.io/portfolio/
```

---

## 🔄 Making Updates

Whenever you make changes to your portfolio:

```bash
# Save your changes
git add .

# Commit changes
git commit -m "Update portfolio"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild and deploy your changes in 2-3 minutes!

---

## ✅ Verification Checklist

After deployment, test these features:

- [ ] Portfolio loads correctly
- [ ] All navigation buttons work
- [ ] Contact form sends emails to m6784104@gmail.com
- [ ] GitHub links go to https://github.com/Hammad-Solutions
- [ ] LinkedIn link works
- [ ] Feedback box appears after sending message
- [ ] Animations work smoothly
- [ ] Responsive on mobile devices

---

## 🐛 Troubleshooting

### Issue 1: 404 Page Not Found

**Solution:**
1. Check that `base: '/portfolio/'` is in `vite.config.js`
2. Make sure repository name matches (case-sensitive)
3. Wait 5 minutes after deployment

### Issue 2: Styles Not Loading

**Solution:**
1. Verify `vite.config.js` exists
2. Check that you pushed all files
3. Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)

### Issue 3: GitHub Actions Failed

**Solution:**
1. Go to **Actions** tab
2. Click the failed workflow
3. Check error messages
4. Common fixes:
   - Make sure `package.json` is included
   - Verify `deploy.yml` is in `.github/workflows/`
   - Check that repository is public

### Issue 4: Contact Form Not Working

**Solution:**
- Formspree works on any domain
- Your form ID: **xjgedepk**
- Emails go to: **m6784104@gmail.com**
- Test by submitting the form on your live site

---

## 📱 Mobile Testing

Test your portfolio on:
- ✅ Chrome Mobile
- ✅ Safari Mobile (iPhone)
- ✅ Different screen sizes

Use Chrome DevTools:
1. Press F12
2. Click device toggle icon
3. Test different devices

---

## 🎨 Custom Domain (Optional)

Want a custom domain like `muhammadh.dev`?

1. **Buy a domain** (from Namecheap, Google Domains, etc.)
2. **Add CNAME file** to your repository:
   ```
   muhammadh.dev
   ```
3. **Configure DNS** in your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: hammad-solutions.github.io
   ```
4. **Update GitHub Pages settings**
   - Go to Settings → Pages
   - Add your custom domain
   - Enable HTTPS

---

## 🚀 Performance Tips

Your portfolio is already optimized with:
- ✅ Lazy loading images
- ✅ Code splitting
- ✅ Minified assets
- ✅ Optimized animations

To make it even faster:
1. **Enable caching** (automatic with GitHub Pages)
2. **Compress images** before uploading
3. **Use WebP format** for photos

---

## 📊 Analytics (Optional)

Want to track visitors?

### Add Google Analytics:

1. **Get tracking ID** from Google Analytics
2. **Add to `index.html`** (or create it in your public folder):
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

---

## 🔒 Security Notes

Your portfolio is secure:
- ✅ HTTPS enabled automatically
- ✅ No sensitive data in code
- ✅ Formspree handles email securely
- ✅ No API keys exposed

---

## 📧 Contact Form Reminder

Your contact form is configured with:
- **Service:** Formspree
- **Form ID:** xjgedepk
- **Sends to:** m6784104@gmail.com
- **Features:**
  - Automatic email delivery
  - Spam protection
  - Form validation
  - Success/error notifications
  - Feedback box after submission

---

## 🎯 Next Steps

After deployment:

1. **Share your portfolio:**
   - Add to LinkedIn profile
   - Include in resume
   - Share on social media

2. **SEO Optimization:**
   - Add meta descriptions
   - Include keywords
   - Submit to Google Search Console

3. **Monitor performance:**
   - Check email deliverability
   - Test on different devices
   - Get feedback from friends

---

## 📝 Quick Reference

**Your Links:**
- GitHub: https://github.com/Hammad-Solutions
- LinkedIn: https://www.linkedin.com/in/hammad-solution/
- Email: m6784104@gmail.com
- Portfolio (after deploy): https://hammad-solutions.github.io/portfolio/

**Repository:**
- Name: portfolio
- URL: https://github.com/Hammad-Solutions/portfolio

**Commands:**
```bash
# Push changes
git add .
git commit -m "Update"
git push

# Check status
git status

# View remote URL
git remote -v
```

---

## 🆘 Need Help?

If you get stuck:

1. **Check GitHub Actions logs**
   - Go to repository → Actions
   - Click failed workflow
   - Read error messages

2. **Common resources:**
   - GitHub Pages docs: https://pages.github.com/
   - Vite docs: https://vitejs.dev/
   - GitHub Discussions: https://github.com/orgs/community/discussions

3. **Test locally first:**
   ```bash
   npm install
   npm run dev
   ```
   Make sure everything works locally before deploying

---

## ✨ Success!

Once deployed, you'll have:
- ✅ Professional portfolio website
- ✅ Live at github.io URL
- ✅ Auto-deploy on every change
- ✅ Working contact form
- ✅ All features functional
- ✅ Mobile responsive
- ✅ Fast loading times

**Your portfolio represents you professionally - make it count!** 🚀

---

**Created by Muhammad Hammad**
*Software Developer | BS Software Engineering Student*
