# 🏥 AR Hospital - Website

A modern, mobile-first hospital website built with HTML5, CSS3, and vanilla JavaScript. This project features the Apollo Maroon Theme with clean light backgrounds, responsive layouts, interactive booking system, and multi-platform integration.

## 📋 Features

### Navigation & UI
- **Fixed Navigation Bar** - Sticky header with mobile hamburger menu
- **Responsive Design** - Mobile-first approach with breakpoints for tablet and desktop
- **Smooth Scrolling** - Fluid navigation between sections
- **Touch-Optimized** - Minimum 44px touch targets for accessibility

### Sections
1. **Hero Section** - Clean landing with animated canvas background and CTA buttons
2. **About Section** - Hospital information and key features
3. **Services Section** - 6 medical service cards with light maroon backgrounds
4. **Departments Section** - 9 interactive department tabs with dynamic content (Plastic Surgery, Physiotherapy, Orthopedics, etc.)
5. **Doctors Section** - 21 specialist doctors with specialties
6. **Health Packages Section** - GSAP horizontal scroll animation with 3 packages
7. **Connect Section** - 8 social platform icons with official brand logos
8. **Footer** - Quick links and contact information

### Interactive Features
- 📱 **Booking Modal** - Professional appointment booking interface
- 💬 **Multi-Platform Connect** - WhatsApp, Facebook, Instagram, Email, Phone, Maps, JustDial, Website
- 🎨 **GSAP Animations** - Horizontal scrolling package cards with ScrollTrigger
- 🎭 **Canvas Animation** - Animated geometric pattern background in hero section
- 📍 **Dynamic Departments** - Click-to-switch department content with smooth transitions
- 🍔 **Mobile Menu** - Smooth hamburger menu with close functionality

## 🎨 Design Features

### Color Palette (Apollo Maroon Theme)
- **Maroon Primary**: #7A1236 (Main buttons, links, active states)
- **Maroon Dark**: #5E0F2A (Hover states, footer, heavy headings)
- **Maroon Classic**: #8B1E3F (Accents, borders, icons)
- **Maroon Soft**: #A63A5D (Subheadings, hover effects)
- **Maroon Light**: #E6B3C1 (Decorations, weak borders)
- **Maroon BG**: #F5D6DF (Light section backgrounds)
- **Text Main**: #111827
- **Text Muted**: #6B7280

### Typography
- **Font**: System fonts (San Francisco, Segoe UI, Roboto, Helvetica)
- **Base Size**: 16px (never smaller on mobile)
- **Responsive Sizing**: Scales from mobile to desktop

### Spacing System
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)

## 📁 Project Structure

```
A_R_HOSPITAL/
├── index.html                              # Main HTML file with all sections
├── styles.css                              # Mobile-first CSS styling with Apollo Maroon Theme
├── script.js                               # JavaScript functionality and animations
├── hospitalData.js                         # Hospital data (21 doctors)
├── Screenshot_2025-12-16_at_14.50.40...png # Hospital logo (transparent)
└── README.md                              # Project documentation
```

## 🚀 Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/studevkiran/A_R_HOSPITAL.git
cd A_R_HOSPITAL
```

2. **Open in browser**
```bash
# Use a local server (recommended)
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## 💻 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern features including CSS Anchor Positioning
- **JavaScript (ES6+)** - Vanilla JS with dynamic content rendering
- **GSAP 3.12.2** - ScrollTrigger for horizontal scroll animations
- **Canvas API** - Animated geometric background patterns
- **Multi-Platform Integration** - WhatsApp, Facebook, Instagram, Email, Maps

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (full-width layouts)
- **Tablet**: 640px - 968px (2-column grids)
- **Desktop**: 968px+ (3-4 column grids, max-width 1200px)

## 🔧 Customization

### Update Hospital Information
Edit these sections in `index.html`:
- Logo in navbar: Update image src
- Contact details: Update phone numbers and email
- Department information in `script.js`: Modify the `departments` object
- Doctor information: Edit `hospitalData.js` (21 doctors array)

### Modify Colors (Apollo Maroon Theme)
Update CSS variables in `styles.css`:
```css
:root {
    --maroon-primary: #7A1236;  /* Main action color */
    --maroon-dark: #5E0F2A;     /* Hover states */
    --maroon-bg: #F5D6DF;       /* Light backgrounds */
    /* ... other maroon variables */
}
```

### Multi-Platform Integration
Contact links are configured in the Connect section:
- **Phone**: 08213501645
- **WhatsApp**: +919008994827
- **Email**: arhospitalmysore@gmail.com
- **Facebook**: facebook.com/Arhospitalmysuru
- **Instagram**: instagram.com/ar_hospital_mysuru

## 📧 Booking System

The booking modal opens for appointment scheduling:
- Collects patient information
- Opens WhatsApp with pre-filled message
- No backend required - client-side only

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA attributes for screen readers
- Keyboard navigation support
- Color contrast compliant
- Touch-friendly buttons (44px minimum)

## 🔍 SEO Optimization

- Meta tags for description
- Semantic HTML structure
- Mobile viewport settings
- Performance optimizations

## 📊 Performance

- Minimal external dependencies (only GSAP for animations)
- Official brand logos loaded from CDN
- CSS animations using transforms
- Canvas animations with requestAnimationFrame
- Optimized file structure

## 🎯 Key Features

### Dynamic Departments
- 9 departments with click-to-switch functionality
- Smooth transitions between department content
- CSS Anchor Positioning for active indicator (with fallback)

### GSAP Animations
- Horizontal scrolling package section
- ScrollTrigger integration
- Smooth scrubbing effects

### Canvas Background
- Animated geometric patterns
- Maroon-themed color scheme
- Low opacity for subtle effect

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

## 📄 License

This project is open source and available for personal and commercial use.

## 📞 Contact

**AR Hospital**
- 📍 AR Hospital, Mysuru
- 📞 Emergency: 08213501645
- 💬 WhatsApp: +919008994827
- ✉️ arhospitalmysore@gmail.com
- 🌐 Facebook: Arhospitalmysuru
- 📸 Instagram: ar_hospital_mysuru

---

**Made with ❤️ for AR Hospital - Excellence in Healthcare**

Last Updated: December 14, 2025
