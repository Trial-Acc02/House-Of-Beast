# Setup Guide for House of Beasts Gym Website

This guide will help you set up and run the House of Beasts Gym website locally and deploy it online.

## 📦 What You Need

1. **Node.js** - Download from [nodejs.org](https://nodejs.org/) (Version 18 or higher)
2. **A code editor** - VS Code recommended ([code.visualstudio.com](https://code.visualstudio.com/))
3. **Internet connection**

## 🚀 Quick Start (5 Minutes)

### Step 1: Install Node.js

1. Go to [nodejs.org](https://nodejs.org/)
2. Download the LTS version
3. Run the installer
4. Verify installation by opening Terminal/Command Prompt and typing:
   \`\`\`
   node --version
   npm --version
   \`\`\`

### Step 2: Open Project

1. Extract the project folder
2. Open Terminal/Command Prompt
3. Navigate to the project folder:
   \`\`\`
   cd path/to/house-of-beasts-gym
   \`\`\`

### Step 3: Install Dependencies

Run this command:
\`\`\`
npm install
\`\`\`

Wait 1-2 minutes for installation to complete.

### Step 4: Start the Website

Run this command:
\`\`\`
npm run dev
\`\`\`

Open your browser and go to: `http://localhost:5173`

**That's it!** Your website is now running locally.

## 🌐 How to Deploy Online

### Option 1: Deploy to Vercel (Easiest - FREE)

1. **Create Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or email

2. **Install Vercel CLI**
   \`\`\`
   npm install -g vercel
   \`\`\`

3. **Deploy**
   \`\`\`
   vercel
   \`\`\`

4. Follow the prompts:
   - Login to your Vercel account
   - Set up project (press Enter to accept defaults)
   - Your site will be live in 30 seconds!

5. **Get Your URL**
   - Vercel will provide a URL like: `house-of-beasts-gym.vercel.app`
   - Share this with anyone!

### Option 2: Deploy to Netlify (Also FREE)

1. **Create Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up

2. **Build the Project**
   \`\`\`
   npm run build
   \`\`\`

3. **Deploy**
   - Drag and drop the `dist` folder to Netlify's deploy zone
   - Your site is live!

## ⚙️ Configuration

### Change Admin Password

1. Open `src/components/AdminDashboard.tsx`
2. Find this line:
   \`\`\`typescript
   const ADMIN_PASSWORD = 'admin123';
   \`\`\`
3. Change `'admin123'` to your desired password
4. Rebuild the project:
   \`\`\`
   npm run build
   \`\`\`

### Update Contact Information

1. Open `src/components/Contact.tsx`
2. Update phone numbers, email addresses
3. Save and rebuild

### Update WhatsApp Number

1. Open `src/components/WhatsAppButton.tsx`
2. Change the phone number:
   \`\`\`typescript
   const phoneNumber = '919876543210';
   \`\`\`
3. Save and rebuild

### Change Membership Prices

1. Open `src/components/MembershipPlans.tsx`
2. Update the `plans` array with new prices
3. Save and rebuild

## 📊 Viewing Registrations

### Access Admin Dashboard

1. Go to your website
2. Click the "Admin" button (bottom-left corner)
3. Enter password (default: `admin123`)
4. View all member registrations

### Export Registration Data

1. In Admin Dashboard, click "Export CSV"
2. Opens a CSV file with all registration data
3. Open in Excel or Google Sheets

## 🔧 Common Issues & Solutions

### Issue: Website won't start
**Solution:**
\`\`\`
rm -rf node_modules package-lock.json
npm install
npm run dev
\`\`\`

### Issue: Build fails
**Solution:**
\`\`\`
npm run build
\`\`\`
Check the error message and fix any TypeScript errors

### Issue: Database not working
**Solution:**
- Check `.env` file exists
- Verify Supabase credentials are correct
- Ensure internet connection

### Issue: Form submission fails
**Solution:**
- Check browser console (F12) for errors
- Verify all form fields are filled correctly
- Try with a different email address

## 📱 Testing the Website

### Test Registration Form
1. Click "Join Now"
2. Fill in all fields
3. Submit
4. Check Admin Dashboard for the entry

### Test Admin Dashboard
1. Click "Admin"
2. Login with password
3. Verify all registrations show
4. Try the search function
5. Export CSV

### Test WhatsApp Button
1. Click the green WhatsApp icon
2. Verify it opens WhatsApp with pre-filled message

### Test BMI Calculator
1. Scroll to BMI section
2. Enter weight and height
3. Click "Calculate BMI"
4. Verify result shows

## 📈 Performance Tips

1. **Optimize Images**
   - Use compressed images
   - Recommended size: 800px width for gallery images

2. **Enable Caching**
   - Most hosting platforms do this automatically

3. **Use CDN**
   - Vercel and Netlify provide CDN by default

## 🔒 Security Checklist

- [ ] Changed admin password from default
- [ ] Database RLS policies are enabled
- [ ] Environment variables are not exposed
- [ ] HTTPS is enabled (automatic with Vercel/Netlify)
- [ ] Regular backups of registration data

## 📞 Support

For technical issues:
1. Check this guide first
2. Review the main README.md
3. Check browser console for errors (Press F12)

## 🎉 You're All Set!

Your premium gym website is ready to attract members and handle online registrations. Good luck with House of Beasts Gym!

---

**Last Updated:** March 2026
**Version:** 1.0.0
