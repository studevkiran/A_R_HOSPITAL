# 🏥 LifeCare Hospital - Website

A modern, mobile-first hospital website built with HTML5, CSS3, and vanilla JavaScript. This project features a beautiful gold-themed design with responsive layouts, interactive booking system, and WhatsApp integration.

## 📋 Features

### Navigation & UI
- **Fixed Navigation Bar** - Sticky header with mobile hamburger menu
- **Responsive Design** - Mobile-first approach with breakpoints for tablet and desktop
- **Smooth Scrolling** - Fluid navigation between sections
- **Touch-Optimized** - Minimum 44px touch targets for accessibility

### Sections
1. **Hero Section** - Eye-catching landing with CTA buttons and statistics
2. **About Section** - Hospital information and key features
3. **Services Section** - 6 medical service cards (Emergency, Pharmacy, Lab, etc.)
4. **Doctors Section** - Featured doctors with specialties
5. **Packages Section** - Health checkup packages with pricing
6. **Contact Section** - Contact form with info cards
7. **Footer** - Quick links and company information

### Interactive Features
- 📱 **Booking Modal** - 3D ledger-style booking interface
- 💬 **WhatsApp Integration** - Direct appointment booking via WhatsApp
- 📝 **Form Validation** - Real-time email and phone validation
- 🎨 **Animations** - Fade-in animations on scroll with Intersection Observer
- 📅 **Date Picker** - Prevents past date selection
- 🍔 **Mobile Menu** - Smooth hamburger menu with close functionality

## 🎨 Design Features

### Color Palette (Kalparuksha Gold Theme)
- **Primary Gold**: #D4AF37
- **Dark Gold**: #B8960C
- **Light Gold**: #F4E4C1
- **Amber**: #FFBF00
- **Cream**: #FFF8DC
- **Text Dark**: #2C2416
- **Text Light**: #5C5440

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
├── index.html          # Main HTML file with all sections
├── styles.css          # Mobile-first CSS styling
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## 🚀 Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/studevkiran/A_R_HOSPITAL.git
cd A_R_HOSPITAL
```

2. **Open in browser**
```bash
# Simply open index.html in your browser
open index.html

# Or use a local server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## 💻 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Mobile-first responsive design with Grid and Flexbox
- **JavaScript (ES6+)** - Vanilla JS, no dependencies
- **WhatsApp API** - For appointment booking integration

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (full-width layouts)
- **Tablet**: 640px - 968px (2-column grids)
- **Desktop**: 968px+ (3-4 column grids, max-width 1200px)

## 🔧 Customization

### Update Hospital Information
Edit these sections in `index.html`:
- Logo/Hospital name in navbar
- Contact details in footer and contact section
- Doctor information in doctors section
- WhatsApp number in `script.js` (hospitalPhone variable)

### Modify Colors
Update CSS variables in `styles.css`:
```css
:root {
    --primary-gold: #D4AF37;  /* Change primary color */
    --text-dark: #2C2416;      /* Change text color */
    /* ... other variables */
}
```

### WhatsApp Integration Setup
1. Open `script.js`
2. Find the `hospitalPhone` variable in the contact form submission
3. Replace `919876543210` with your hospital's WhatsApp number
4. Format: Country code (91 for India) + Phone number without spaces

## 📧 Contact Form

The contact form and booking form are integrated with WhatsApp:
- Collects customer information
- Sends formatted message to WhatsApp
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

- No external dependencies (vanilla JavaScript)
- Lazy loading ready for images
- CSS animations using transforms
- Optimized bundle size

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

## 📄 License

This project is open source and available for personal and commercial use.

## 📞 Contact

**LifeCare Hospital**
- 📍 123 Medical Center Road, Healthcare City
- 📞 +91 1234567890
- 🚨 Emergency: 108
- ✉️ info@lifecarehospital.com

---

**Made with ❤️ for excellent healthcare services**

Last Updated: December 14, 2025
