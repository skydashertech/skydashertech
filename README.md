# SkyDasher Tech Website

## 🚀 Production-Ready Website Package

This package contains both the **production-ready static files** and the **complete source code** for the SkyDasher Tech website.

### 📁 Package Contents

#### Production Files (Ready for Hosting)
- `index.html` - Main website file (at root level)
- `assets/` - Optimized CSS, JavaScript, and other assets
- `Full Logo sbs COlor.png` - Company logo
- `Full Logo tbtm Color.png` - Company logo (alternative)
- `robots.txt` - SEO robots file
- `sitemap.xml` - SEO sitemap
- `site.webmanifest` - PWA manifest
- `browserconfig.xml` - Browser configuration

#### Source Code (For Future Editing)
- `src/` - React components and source files
- `public/` - Public assets and static files
- `package.json` - Dependencies and scripts
- Configuration files (Vite, Tailwind, TypeScript, etc.)

### 🌐 Hosting Instructions

#### Option 1: Upload Production Files Only
1. Upload all files from the root directory to your hosting panel
2. Ensure `index.html` is at the root of your `httpdocs/` or `public_html/` folder
3. Your website will be live immediately!

#### Option 2: Development Setup (For Future Editing)
1. Install Node.js (v18 or higher)
2. Run `npm install` to install dependencies
3. Run `npm run dev` for development server
4. Run `npm run build` to create new production files

### 📧 Contact Form Setup

The contact form sends leads to both email and WhatsApp. **IMPORTANT: Complete EmailJS setup for automatic email delivery:**

1. **Create EmailJS Account:**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Create a free account
   - Add Gmail service in your dashboard

2. **Create Email Template:**
   - Create a new template in EmailJS dashboard
   - Template ID: `template_contact`
   - Use this template content (copy exactly):
   ```
   Subject: New Lead: {{from_name}} from {{company}} - {{service}}
   
   New Contact Form Submission from SkyDasher Tech Website
   
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Company: {{company}}
   Service: {{service}}
   
   Message:
   {{message}}
   
   Submitted: {{timestamp}}
   ```
   - Set "To Email" to: {{to_email}} (will be skydashertech@gmail.com)
   - Set "Reply To" to: {{reply_to}}

3. **Update Configuration:**
   - Replace the EmailJS IDs in `src/components/Contact.tsx`:
     - Replace `service_skydasher` with your actual Service ID
     - Keep `template_contact` as Template ID (or change if different)
     - Replace `YOUR_EMAILJS_PUBLIC_KEY` with your Public Key

4. **Test the Form:**
   - Fill out the contact form on your website
   - Check skydashertech@gmail.com for the email
   - WhatsApp will also open automatically
   - If it doesn't work, check EmailJS dashboard for errors

**Quick Setup Guide:**
- EmailJS Service ID: Found in EmailJS Dashboard > Email Services
- Template ID: Found in EmailJS Dashboard > Email Templates  
- Public Key: Found in EmailJS Dashboard > Account > API Keys

**How It Works:**
- Form submits → Email sent to skydashertech@gmail.com
- WhatsApp opens automatically with inquiry details
- If email fails, WhatsApp still works as backup
- All leads captured through multiple channels
### 🛠️ Technology Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Email Service**: EmailJS
- **Icons**: Lucide React

### 📱 Features
- ✅ Fully responsive design
- ✅ SEO optimized
- ✅ PWA ready
- ✅ Automatic email contact form
- ✅ WhatsApp integration
- ✅ Performance optimized
- ✅ Accessibility compliant

### 🔧 Development Commands
```bash
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
```

### 📞 Support
For any technical support or modifications:
- **Email**: skydashertech@gmail.com
- **Phone**: +91 913 567 6155
- **WhatsApp**: https://wa.me/919135676155

### 🎯 Services Offered
- AGENTIC AI / MULTI AGENTIC AI DEVELOPMENT
- AI Development
- Big Data Solutions
- Blockchain
- Chat Bot
- Cloud Computing
- Custom Software
- Data Analytics
- DevOps
- Game Development
- IoT Development
- Machine Learning Solutions
- Mobile App Development
- UI/UX Designs
- VR & AR Development
- Web Development

---
**© 2025 SkyDasher Tech. All rights reserved.**