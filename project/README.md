# House of Beasts Gym - Premium Fitness Website

A complete, production-ready website for House of Beasts Gym in Meerut, India. Built with modern web technologies and featuring a premium dark theme design.

## 🌟 Features

### Core Pages & Sections
- **Hero Section** - Eye-catching landing with "Unleash the Beast Within" tagline
- **About Us** - Company vision, mission, and key highlights
- **Facilities** - Comprehensive showcase of gym equipment and training zones
- **Gallery** - Categorized photo gallery with filtering
- **Membership Plans** - Three-tier pricing structure (Basic, Premium, Elite)
- **Trainers** - Professional trainer profiles with certifications
- **Timings** - Operating hours and group class schedule
- **Contact** - Location details with embedded Google Maps
- **Testimonials** - Customer reviews and ratings
- **BMI Calculator** - Interactive health tool

### Functional Features
- **Online Registration Form**
  - Full form validation
  - Email uniqueness check
  - Data stored in Supabase database
  - Success confirmation modal

- **Admin Dashboard**
  - Password-protected access (default: `admin123`)
  - View all registrations
  - Search and filter functionality
  - Export data to CSV
  - Registration statistics

- **Extra Features**
  - WhatsApp floating button for instant messaging
  - Responsive design for all devices
  - Smooth scroll navigation
  - Premium animations and transitions

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL)
- **Build Tool**: Vite
- **Form Handling**: Native React with validation

## 📋 Prerequisites

- Node.js 18+ and npm
- Supabase account (already configured)

## 🚀 Setup Instructions

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Environment Variables

The project already includes a `.env` file with Supabase credentials:

\`\`\`env
VITE_SUPABASE_URL=https://ygmvjbsfonceyjjrwmsg.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
\`\`\`

### 3. Database Setup

The database schema is already created with the following tables:

**registrations** - Stores member sign-up data
- first_name, last_name, email, phone, address
- age, gender, fitness_goal, preferred_plan
- Row Level Security (RLS) enabled

**testimonials** - Stores customer reviews
- name, rating, review, image_url, is_featured
- Row Level Security (RLS) enabled

### 4. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

The website will be available at `http://localhost:5173`

### 5. Build for Production

\`\`\`bash
npm run build
\`\`\`

### 6. Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## 📱 Key Functionalities

### Member Registration
1. Click "Join Now" button anywhere on the site
2. Fill out the registration form with required details
3. Form validates all inputs (email format, phone number, age range)
4. Data is stored in Supabase
5. Success message displayed upon completion

### Admin Dashboard
1. Click "Admin" button in bottom-left corner
2. Enter password (default: `admin123`)
3. View all registrations in a table
4. Search members by name, email, or phone
5. Export data to CSV for external use
6. View statistics (total members, plan distribution)

### WhatsApp Integration
- Click the green WhatsApp button in bottom-right
- Opens chat with pre-filled message
- Phone number: +91 98765 43210

### BMI Calculator
- Enter weight (kg) and height (cm)
- Instantly calculates BMI
- Shows category (Underweight, Normal, Overweight, Obese)
- Color-coded results

## 🎨 Design Highlights

- **Color Scheme**: Black and Red (premium fitness aesthetic)
- **Typography**: Bold, uppercase headings with tracking
- **Animations**: Smooth hover effects, scroll animations, fade-ins
- **Responsiveness**: Fully optimized for mobile, tablet, and desktop
- **Images**: High-quality stock photos from Pexels

## 📍 Business Information

**Name**: House of Beasts Gym - Meerut

**Address**:
Aditya Complex, Pallav Puram Phase 1
Near Meerut North Metro Station
Modipuram, Meerut, Uttar Pradesh, India

**Operating Hours**:
- Monday - Friday: 5:30 AM - 11:00 PM
- Saturday: 6:00 AM - 10:00 PM
- Sunday: 6:00 AM - 9:00 PM

**Contact**:
- Phone: +91 98765 43210
- Email: info@houseofbeastsgym.com

## 💰 Membership Plans

| Plan | Price | Duration |
|------|-------|----------|
| Basic | ₹1,999 | Monthly |
| Premium | ₹4,999 | Quarterly (Best Value) |
| Elite | ₹15,999 | Yearly |

## 🔐 Security Features

- Row Level Security (RLS) on all database tables
- Email uniqueness validation
- Form input sanitization
- Password-protected admin access
- Anonymous users can only register (not view data)

## 📊 SEO Optimization

- Semantic HTML structure
- Meta tags for search engines
- Open Graph tags for social sharing
- Geographic meta tags for local SEO
- Optimized page titles and descriptions
- Fast loading times with Vite

## 🚢 Deployment

The website can be deployed to:
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

### Deploy to Vercel

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## 📝 Admin Credentials

**Default Admin Password**: `admin123`

⚠️ **Important**: Change this password in production by updating the `ADMIN_PASSWORD` constant in `src/components/AdminDashboard.tsx`

## 🎯 Future Enhancements

Potential features to add:
- Email notifications on registration
- Payment gateway integration
- Member login portal
- Online class booking
- Workout plan downloads
- Progress tracking for members
- Blog section
- Multi-language support

## 🐛 Troubleshooting

### Build Errors
\`\`\`bash
rm -rf node_modules package-lock.json
npm install
npm run build
\`\`\`

### Database Connection Issues
- Verify `.env` file exists with correct Supabase credentials
- Check Supabase project is active
- Ensure RLS policies are properly configured

### Form Submission Fails
- Check browser console for errors
- Verify Supabase connection
- Ensure all required fields are filled
- Check email is not already registered

## 📄 License

This project is created for House of Beasts Gym - Meerut.

## 🙏 Credits

- Stock Images: [Pexels](https://pexels.com)
- Icons: [Lucide React](https://lucide.dev)
- Database: [Supabase](https://supabase.com)
- Framework: [React](https://react.dev) + [Vite](https://vitejs.dev)

---

**Built with dedication to fitness excellence** 💪
