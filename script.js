/* ============================================
   BOOKING MODAL AND NAVIGATION FUNCTIONALITY
   ============================================ */

// Get DOM elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navBookBtn = document.getElementById('navBookBtn');
const heroBookBtn = document.getElementById('heroBookBtn');
const bookingModal = document.getElementById('bookingModal');
const closeModal = document.querySelector('.close-modal');
const bookingForm = document.getElementById('bookingForm');

// ============================================
// ANIMATED HERO CANVAS BACKGROUND
// ============================================

const {sin, cos, PI, abs, pow} = Math;

const DEBOUNCE_MS = 300;
const QUALITY = 1;
const STEP_SIZE = 40;

const canvas = document.getElementById('heroCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let w, h, scale;
    
    function setSize() {
        scale = window.devicePixelRatio * QUALITY;
        w = window.innerWidth;
        canvas.width = w * scale;
        h = window.innerHeight;
        canvas.height = h * scale;
        ctx.scale(scale, scale);
    }
    setSize();

    window.addEventListener('resize', (() => {
        let debounce;
        let lastTrigger = -DEBOUNCE_MS;
        return () => {
            clearTimeout(debounce);
            const now = Date.now();
            const diff = now - lastTrigger - DEBOUNCE_MS;
            if (diff > 0) {
                setSize();
                lastTrigger = now;
            } else {
                debounce = setTimeout(setSize, -diff);
            }
        };
    })());

    function polarToCartesian(r, theta) {
        return [r * sin(theta), r * cos(theta)];
    }

    function drawFrame(t) {
        ctx.clearRect(0, 0, w, h);
        ctx.save();
        ctx.setTransform(scale, 0, 0, scale, 0, 0);
        ctx.translate(w / 2, h / 2);
        ctx.scale(1, -1);
        
        t /= 1000;
        for (let ring = 20; ring > 0; --ring) {
            const ringProgress = ring / 30;
            const goldBase = 43; // Hue for gold
            const lightness = 50 + ringProgress * 30;
            const saturation = 80 - ringProgress * 20;
            ctx.fillStyle = `hsl(${goldBase}, ${saturation}%, ${lightness}%)`;
            ctx.strokeStyle = `rgba(255, 255, 255, 0.4)`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            for (let point = 0; point < 1000; ++point) {
                let pointProgress = point / 1000;
                let angle = PI * 2 * pointProgress;
                let p = 4 * (angle + sin(ringProgress * 2 * PI + t/2) + ((ring % 2) ? 0 : PI/4));
                let a = pow(abs(sin(p)), 1/3);
                let b = pow(1-abs(sin(p + PI/2)), 9) / 4;
                let rOgee = (a + b) * STEP_SIZE;
                let rRing = ring * STEP_SIZE;
                const [x, y] = polarToCartesian(rRing + rOgee, angle);
                if (!point) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
        
        ctx.restore();
    }

    window.requestAnimationFrame(function drawLoop(t) {
        drawFrame(t);
        window.requestAnimationFrame(drawLoop);
    });
}

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

function openBookingModal() {
    bookingModal.classList.add('show');
}

function closeBookingModal() {
    bookingModal.classList.remove('show');
}

// Close modal when X button clicked
if (closeModal) {
    closeModal.addEventListener('click', closeBookingModal);
}

// Close modal when clicking outside the modal content
if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
        if (e.target === bookingModal) {
            closeBookingModal();
        }
    });
}

// Event listeners for booking buttons
if (navBookBtn) {
    navBookBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openBookingModal();
    });
}

// DEPARTMENTS NAVIGATION
// ============================================

// Department data
const departments = {
    cardiology: {
        icon: '❤️',
        title: 'Cardiology Department',
        description: 'Advanced cardiac care with state-of-the-art facilities for heart-related treatments and diagnostics.',
        features: [
            'ECG & Echocardiography',
            'Cardiac Catheterization',
            '24/7 Emergency Cardiac Care',
            'Preventive Cardiology Programs'
        ]
    },
    orthopedics: {
        icon: '🦴',
        title: 'Orthopedics Department',
        description: 'Comprehensive bone and joint care with advanced surgical and non-surgical treatment options.',
        features: [
            'Joint Replacement Surgery',
            'Sports Medicine',
            'Trauma & Fracture Care',
            'Arthroscopy Procedures'
        ]
    },
    neurology: {
        icon: '🧠',
        title: 'Neurology Department',
        description: 'Expert neurological care for brain, spine, and nervous system disorders.',
        features: [
            'Stroke Management',
            'Epilepsy Treatment',
            'Movement Disorders',
            'Neuromuscular Disorders'
        ]
    },
    pediatrics: {
        icon: '👶',
        title: 'Pediatrics Department',
        description: 'Specialized healthcare for infants, children, and adolescents with compassionate care.',
        features: [
            'Newborn Care',
            'Child Immunization',
            'Growth & Development Monitoring',
            'Pediatric Emergency Care'
        ]
    },
    gynecology: {
        icon: '👩‍⚕️',
        title: 'Gynecology Department',
        description: 'Comprehensive women\'s health services including maternity and reproductive care.',
        features: [
            'Prenatal & Postnatal Care',
            'High-Risk Pregnancy Management',
            'Gynecological Surgeries',
            'Fertility Treatments'
        ]
    },
    surgery: {
        icon: '⚕️',
        title: 'General Surgery Department',
        description: 'Advanced surgical procedures with minimally invasive techniques for faster recovery.',
        features: [
            'Laparoscopic Surgery',
            'Emergency Surgery',
            'Hernia Repair',
            'Gastrointestinal Surgery'
        ]
    },
    dermatology: {
        icon: '🧴',
        title: 'Dermatology Department',
        description: 'Expert skin care treatments for medical and cosmetic dermatological conditions.',
        features: [
            'Acne Treatment',
            'Skin Cancer Screening',
            'Laser Treatments',
            'Cosmetic Dermatology'
        ]
    },
    psychiatry: {
        icon: '🧘',
        title: 'Psychiatry Department',
        description: 'Mental health services with compassionate care for psychological and emotional well-being.',
        features: [
            'Depression & Anxiety Treatment',
            'Addiction Counseling',
            'Child Psychiatry',
            'Stress Management Programs'
        ]
    }
};

// Handle department navigation clicks
function initDepartmentNav() {
    const deptLinks = document.querySelectorAll('.dept-links a');
    const deptContent = document.querySelector('.department-content');

    console.log('Department links found:', deptLinks.length);

    if (deptLinks.length > 0 && deptContent) {
        deptLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Get the department ID
                const deptId = link.getAttribute('href').substring(1);
                console.log('Department clicked:', deptId);
                
                // Remove active state from all links
                deptLinks.forEach(l => l.setAttribute('data-active', 'false'));
                
                // Add active state to clicked link
                link.setAttribute('data-active', 'true');
                
                // Update the department content
                updateDepartmentContent(deptId);
                
                // Scroll the active link into view (center alignment)
                link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            });
        });
    }
}

// Initialize department navigation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDepartmentNav);
} else {
    initDepartmentNav();
}

function updateDepartmentContent(deptId) {
    const deptContent = document.querySelector('.department-content');
    const dept = departments[deptId];
    
    if (!dept || !deptContent) return;
    
    // Fade out
    deptContent.style.opacity = '0';
    
    setTimeout(() => {
        const featuresHTML = dept.features.map(feature => 
            `<li>${feature}</li>`
        ).join('');
        
        deptContent.innerHTML = `
            <div class="vibrant-card department-card" id="${deptId}" data-dept="${deptId}">
                <div class="dept-icon">${dept.icon}</div>
                <h3>${dept.title}</h3>
                <p>${dept.description}</p>
                <ul class="dept-features">
                    ${featuresHTML}
                </ul>
                <button class="vibrant-button dept-book-btn" onclick="openBookingModal()">Book Consultation</button>
            </div>
        `;
        
        // Fade in
        setTimeout(() => {
            deptContent.style.opacity = '1';
        }, 50);
    }, 300);
}

if (heroBookBtn) {
    heroBookBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openBookingModal();
    });
}

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
*Appointment Booking Request - AR Hospital*

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

    // WhatsApp API URL - Use hospital number
    const hospitalPhone = '919008994827'; // AR Hospital +91 9008994827
    const whatsappURL = `https://wa.me/${hospitalPhone}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Show success message
    alert('Opening WhatsApp to send appointment request...');

    // Reset form
    bookingForm.reset();
});

// ============================================
// PACKAGE BOOKING BUTTONS
// ============================================

const packageButtons = document.querySelectorAll('.package-card .vibrant-button');

packageButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Open booking modal
        openBookingModal();
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
// GSAP ANIMATIONS
// ============================================

window.addEventListener('load', function() {
    console.log('Window loaded');
    
    if (typeof gsap === 'undefined') {
        console.error('GSAP not loaded!');
        return;
    }
    
    if (typeof ScrollTrigger === 'undefined') {
        console.error('ScrollTrigger not loaded!');
        return;
    }
    
    gsap.registerPlugin(ScrollTrigger);
    console.log('GSAP registered');

    // Package Horizontal Scroll
    const packagesList = document.querySelector('.packages-list');
    const packageItems = document.querySelectorAll('.package-item');
    
    console.log('Found', packageItems.length, 'packages');
    
    if (packageItems.length > 0 && packagesList) {
        let scrollTween = gsap.to('.packages-list', {
            x: () => -(packagesList.scrollWidth - window.innerWidth),
            ease: 'none',
            scrollTrigger: {
                trigger: '.packages-section',
                pin: true,
                scrub: 1,
                start: 'top top',
                end: () => `+=${packagesList.scrollWidth}`,
                markers: true,
                invalidateOnRefresh: true
            }
        });
        console.log('Package animation created');
    }

    // Doctor Cards Animation
    const doctorCards = document.querySelectorAll('.doctor-card');
    if (doctorCards.length > 0) {
        doctorCards.forEach((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: index * 0.15,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
    }
});

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c🏥 Welcome to AR Hospital Website', 'color: #D4AF37; font-size: 16px; font-weight: bold;');
console.log('%cExcellence in Healthcare', 'color: #FFBF00; font-size: 14px;');
console.log('%cFor appointments, click "Book Now" or contact: +91 9008994827', 'color: #2C2416; font-size: 12px;');
