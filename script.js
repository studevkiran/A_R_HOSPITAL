/* ============================================
   BOOKING MODAL AND NAVIGATION FUNCTIONALITY
   ============================================ */

// Get DOM elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navBookBtn = document.getElementById('navBookBtn');
const heroBookBtn = document.getElementById('heroBookBtn');
const bookingModal = document.getElementById('bookingModal');
const modalClose = document.getElementById('modalClose');
const bookingForm = document.getElementById('bookingForm');
const contactForm = document.getElementById('contactForm');

// ============================================
// HAMBURGER MENU FUNCTIONALITY
// ============================================

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ============================================
// BOOKING MODAL FUNCTIONALITY
// ============================================

// Open modal
function openBookingModal() {
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeBookingModal() {
    bookingModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners for opening modal
navBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openBookingModal();
});

heroBookBtn.addEventListener('click', openBookingModal);

// Event listener for closing modal
modalClose.addEventListener('click', closeBookingModal);

// Close modal when clicking outside content
bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
        closeBookingModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bookingModal.classList.contains('active')) {
        closeBookingModal();
    }
});

// ============================================
// BOOKING FORM SUBMISSION - WhatsApp Integration
// ============================================

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const patientName = document.getElementById('patientName').value;
    const patientPhone = document.getElementById('patientPhone').value;
    const department = document.getElementById('department').value;
    const doctor = document.getElementById('doctor').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const notes = document.getElementById('notes').value;

    // Validate phone number (basic validation)
    if (!patientPhone || patientPhone.length < 10) {
        alert('Please enter a valid phone number');
        return;
    }

    // Format phone number for WhatsApp (remove special characters)
    let whatsappPhone = patientPhone.replace(/\D/g, '');
    
    // If number doesn't start with country code, add +91 (India)
    if (!whatsappPhone.startsWith('91')) {
        whatsappPhone = '91' + whatsappPhone;
    }

    // Create WhatsApp message
    const message = `
*Appointment Booking Request - LifeCare Hospital*

*Patient Details:*
Name: ${patientName}
Phone: ${patientPhone}
Department: ${department}
Doctor: ${doctor}
Preferred Date: ${appointmentDate}

*Additional Notes:*
${notes || 'None'}

---
Please confirm the appointment or suggest alternative dates.
    `.trim();

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp API URL
    const whatsappURL = `https://wa.me/${whatsappPhone}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Show success message
    alert('Opening WhatsApp to send appointment request...');

    // Reset form
    bookingForm.reset();

    // Close modal
    closeBookingModal();
});

// ============================================
// CONTACT FORM SUBMISSION
// ============================================

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Create WhatsApp message
    const whatsappMessage = `
*Contact Form Submission - LifeCare Hospital*

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `.trim();

    // Encode message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Hospital WhatsApp number (replace with actual number)
    const hospitalPhone = '919876543210'; // Example: +91 98765 43210

    // WhatsApp URL
    const whatsappURL = `https://wa.me/${hospitalPhone}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Show success message
    alert('Thank you! Your message has been sent to WhatsApp. We will respond shortly.');

    // Reset form
    contactForm.reset();
});

// ============================================
// PACKAGE BOOKING BUTTONS
// ============================================

const packageButtons = document.querySelectorAll('.package-card .vibrant-button');

packageButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const packageName = button.parentElement.querySelector('h3').textContent;
        
        // Pre-fill department with "General Checkup"
        document.getElementById('department').value = 'General';
        
        // Open booking modal
        openBookingModal();
        
        // Scroll to form
        setTimeout(() => {
            document.querySelector('.right-page').scrollIntoView({ behavior: 'smooth' });
        }, 300);
    });
});

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for modal triggers
        if (href === '#' || href === '#bookingModal') {
            return;
        }

        const element = document.querySelector(href);
        if (element) {
            e.preventDefault();
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.vibrant-card, .service-card, .doctor-card, .package-card, .stat-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
});

// ============================================
// DATE PICKER - Set minimum date to today
// ============================================

const dateInput = document.getElementById('appointmentDate');
if (dateInput) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    dateInput.min = `${year}-${month}-${day}`;
}

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================================

const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Add active class styling in CSS
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--primary-gold);
        font-weight: 700;
    }
`;
document.head.appendChild(style);

// ============================================
// FORM VALIDATION
// ============================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return re.test(phone);
}

// Add real-time validation feedback
const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value && !validatePhone(input.value)) {
            input.style.borderColor = '#ff6b6b';
        } else {
            input.style.borderColor = 'var(--light-gold)';
        }
    });
});

const emailInputs = document.querySelectorAll('input[type="email"]');
emailInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value && !validateEmail(input.value)) {
            input.style.borderColor = '#ff6b6b';
        } else {
            input.style.borderColor = 'var(--light-gold)';
        }
    });
});

// ============================================
// PRINT FUNCTIONALITY
// ============================================

function printAppointmentConfirmation() {
    const printContent = `
        <h2>Appointment Confirmation</h2>
        <p>Your appointment request has been sent to LifeCare Hospital.</p>
        <p>Emergency Contact: +91 1234567890</p>
    `;
    
    const printWindow = window.open('', '', 'height=400,width=800');
    printWindow.document.write('<pre>' + printContent + '</pre>');
    printWindow.document.close();
    printWindow.print();
}

// ============================================
// PERFORMANCE: Lazy Loading Images
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c🏥 Welcome to LifeCare Hospital Website', 'color: #D4AF37; font-size: 16px; font-weight: bold;');
console.log('%cExcellence in Healthcare', 'color: #FFBF00; font-size: 14px;');
console.log('%cFor appointments, click "Book Now" or contact: +91 1234567890', 'color: #2C2416; font-size: 12px;');
