# EmailJS Setup Guide

This guide will help you set up EmailJS to receive contact form submissions directly to your email inbox.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's FREE - 200 emails/month)
3. Sign up with your Google account or email

### Step 2: Add Email Service
1. After logging in, go to **Email Services** tab
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email service)
4. Click **Connect Account**
5. Log in with your Gmail account (m6784104@gmail.com)
6. Copy your **Service ID** (looks like: `service_abc1234`)

### Step 3: Create Email Template
1. Go to **Email Templates** tab
2. Click **Create New Template**
3. Use this template content:

**Template Name:** Contact Form

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Content:**
```
You have received a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Click **Save**
5. Copy your **Template ID** (looks like: `template_abc1234`)

### Step 4: Get Public Key
1. Go to **Account** tab (top right, click your profile)
2. Find **Public Key** section
3. Copy your **Public Key** (looks like: `aBcDeFgHiJkLmNoP`)

### Step 5: Update the Code

Open `/components/ContactSection.tsx` and update these values at the top of the file:

```typescript
// Initialize EmailJS with your public key
useEffect(() => {
  emailjs.init("YOUR_PUBLIC_KEY_HERE"); // Replace with your actual public key
}, []);

// In the handleSubmit function, update:
emailjs.send(
  "YOUR_SERVICE_ID_HERE",   // Replace with your actual service ID
  "YOUR_TEMPLATE_ID_HERE",  // Replace with your actual template ID
  {
    from_name: `${formData.firstName} ${formData.lastName}`,
    from_email: formData.email,
    subject: formData.subject || `New message from ${formData.firstName}`,
    message: formData.message,
  }
)
```

### Step 6: Test It!
1. Save your changes
2. Refresh your portfolio website
3. Fill out the contact form
4. Click "Send Message"
5. Check your inbox (m6784104@gmail.com) - you should receive the email!

## 📋 Example Configuration

After setup, your configuration should look like:

```typescript
// Public Key
emailjs.init("aBcDeFgHiJkLmNoP");

// Service ID
"service_abc1234"

// Template ID  
"template_abc1234"
```

## ✅ Features

Once set up, your contact form will:
- ✅ Send emails directly to m6784104@gmail.com
- ✅ Work on any device (mobile, tablet, desktop)
- ✅ Not require visitors to have email clients
- ✅ Show success/error notifications
- ✅ Validate email addresses
- ✅ Prevent spam with rate limiting (200/month on free tier)

## 🔒 Security Notes

- Your EmailJS public key is safe to use in frontend code
- EmailJS handles all the email sending securely
- Your Gmail password is never exposed
- Rate limiting prevents spam abuse

## 💡 Alternative: Web3Forms (Even Simpler!)

If you want an even simpler solution that requires NO signup:

### Web3Forms Setup
1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter your email: m6784104@gmail.com
3. Get your **Access Key** instantly (sent to your email)
4. Replace EmailJS code with Web3Forms (see ALTERNATIVE_SETUP.md)

## 🆘 Troubleshooting

### "Failed to send email" error
- Check that all IDs are correct (Service ID, Template ID, Public Key)
- Make sure you've connected your Gmail account in EmailJS dashboard
- Verify your EmailJS account is active

### Emails not arriving
- Check spam/junk folder
- Verify the template is using {{from_email}} variable correctly
- Check EmailJS dashboard for delivery logs

### Rate limit exceeded
- Free tier: 200 emails/month
- Upgrade to paid plan if needed ($5/month for 1000 emails)

## 📞 Need Help?

- EmailJS Docs: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/contact/
- Or contact me if you need assistance!

---

**Last Updated**: March 1, 2026  
**Your Email**: m6784104@gmail.com  
**Status**: Setup Required
