/* ============================================
   BOOKING MODAL AND NAVIGATION FUNCTIONALITY
   ============================================ */

// Get DOM elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navBookBtn = document.getElementById('navBookBtn');
const heroBookBtn = document.getElementById('heroBookBtn');
const bookingModal = document.getElementById('bookingModal');
const doctorModal = document.getElementById('doctorModal');
const closeModal = document.querySelector('#bookingModal .close-modal');
const closeDoctorModalBtn = document.querySelector('#doctorModal .close-modal');
const bookingForm = document.getElementById('bookingForm');

// ============================================
// ANIMATED HERO CANVAS BACKGROUND
// ============================================

const { sin, cos, PI, abs, pow } = Math;

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
                let p = 4 * (angle + sin(ringProgress * 2 * PI + t / 2) + ((ring % 2) ? 0 : PI / 4));
                let a = pow(abs(sin(p)), 1 / 3);
                let b = pow(1 - abs(sin(p + PI / 2)), 9) / 4;
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

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
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

// ============================================
// BOOKING MODAL FUNCTIONALITY
// ============================================

function openBookingModal(prefill = null) {
    if (!bookingModal) return;

    bookingModal.classList.add('show');

    // Reset form first
    if (bookingForm) bookingForm.reset();

    // Handle prefill data
    if (prefill) {
        const deptSelect = document.getElementById('department');
        const docSelect = document.getElementById('doctor');

        if (deptSelect && prefill.department) {
            const prefillDept = prefill.department.toLowerCase();
            let found = false;

            // 1. Try exact match
            for (let i = 0; i < deptSelect.options.length; i++) {
                if (deptSelect.options[i].value.toLowerCase() === prefillDept) {
                    deptSelect.selectedIndex = i;
                    found = true;
                    break;
                }
            }

            // 2. Try fuzzy match (contains)
            if (!found) {
                for (let i = 0; i < deptSelect.options.length; i++) {
                    const optVal = deptSelect.options[i].value.toLowerCase();
                    if (optVal.includes(prefillDept) || prefillDept.includes(optVal)) {
                        deptSelect.selectedIndex = i;
                        found = true;
                        break;
                    }
                }
            }
        }

        if (docSelect && prefill.doctor) {
            // Use the doctor name
            for (let i = 0; i < docSelect.options.length; i++) {
                if (docSelect.options[i].value === prefill.doctor) {
                    docSelect.selectedIndex = i;
                    break;
                }
            }
        }
    }
}

function closeBookingModal() {
    bookingModal.classList.remove('show');
}

// Close modal when X button clicked
if (closeModal) {
    closeModal.addEventListener('click', closeBookingModal);
}

// Close modal when clicking outside the modal content
// Close modal when checking outside
if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
        if (e.target === bookingModal) closeBookingModal();
    });
}

function closeDoctorModal() {
    if (doctorModal) doctorModal.classList.remove('show');
}

if (closeDoctorModalBtn) {
    closeDoctorModalBtn.addEventListener('click', closeDoctorModal);
}

// ============================================
// HEALTH PACKAGE BOOKING VIA WHATSAPP
// ============================================
function bookPackage(packageName, packagePrice, packageFeatures) {
    // WhatsApp number for A R Hospital
    const whatsappNumber = '919008994827';

    // Create WhatsApp message with package details
    const message = `🏥 *Health Package Booking Request*
━━━━━━━━━━━━━━━━━━━━━

📦 *Package:* ${packageName}
💰 *Price:* ${packagePrice}

✨ *Included Features:*
${packageFeatures}

━━━━━━━━━━━━━━━━━━━━━

📝 *Submitted from:* A R Hospital Website

I would like to book this health checkup package. Please confirm the appointment date and time.

Thank you! 🙏`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
}


const insuranceModal = document.getElementById('insuranceModal');
const closeInsuranceModalBtn = document.getElementById('closeInsuranceModal');

function openInsuranceModal() {
    console.log('Opening Insurance Modal...');
    if (insuranceModal) {
        insuranceModal.classList.add('show');
        insuranceModal.style.display = 'flex'; // Force display just in case CSS fails
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
        console.error('Insurance modal element not found!');
    }
}

function closeInsuranceModal() {
    if (insuranceModal) {
        insuranceModal.classList.remove('show');
        insuranceModal.style.display = 'none'; // Reset display
        document.body.style.overflow = '';
    }
}

if (closeInsuranceModalBtn) {
    closeInsuranceModalBtn.addEventListener('click', closeInsuranceModal);
}

if (insuranceModal) {
    insuranceModal.addEventListener('click', (e) => {
        if (e.target === insuranceModal) closeInsuranceModal();
    });
}

// 3D CUBE DATA
const insuranceData = [
    { name: 'Tata AIG General', img: 'assets/tata_real.jpeg' },
    { name: 'Star Health Insurance', img: 'assets/star_real.jpeg' },
    { name: 'SBI General Insurance', img: 'assets/sbi_real.jpeg' },
    { name: 'Universal Sompoo', img: 'assets/universal.jpeg' },
    { name: 'Galaxy Health', img: 'assets/galaxy.jpeg' },
    { name: 'ACKO General', img: 'assets/acko.jpeg' },
    { name: 'Cholamandalam MS', img: 'assets/chola.jpeg' },
    { name: 'Aditya Birla Health', img: 'assets/adityabirla.jpeg' },
    { name: 'Iffco Tokio', img: 'assets/iffco.png' },
    { name: 'Niva Bupa Health', img: 'assets/nivabupa.jpeg' }
];

const tpaData = [
    { name: 'VOLO Health TPA', img: 'assets/volo.jpeg' },
    { name: 'FHPL (ACKO)', img: 'assets/fhpl.jpeg' },
    { name: 'Ericson TPA', img: 'assets/ericson.png' },
    { name: 'HealthIndia TPA', img: 'assets/healthindia.jpeg' },
    { name: 'Medsave Health TPA', img: 'assets/medsave.png' }
];

const schemeData = [
    { name: 'Yeshasvini Scheme', img: 'assets/yeshasvini.jpeg' },
    { name: 'S.K.D.R.D.P', img: 'assets/skdrdp.jpeg' },
    { name: 'State Govt Schemes', img: 'assets/stategovt.jpeg' }
];

function updateCubeFaceContent(cubeId, dataArray, rotationStep) {
    const cube = document.getElementById(cubeId);
    if (!cube) return;

    // We act on the face that will be visible NEXT.
    // Faces order in rotation: Front(0) -> Top(1) -> Back(2) -> Bottom(3) -> Loop
    const faces = ['front', 'top', 'back', 'bottom'];

    // The face index that corresponds to (rotationStep + 1)
    const faceIndex = (rotationStep + 1) % 4;
    const contentIndex = (rotationStep + 1) % dataArray.length;

    const faceClass = `.cube-face-${faces[faceIndex]}`;
    const faceEl = cube.querySelector(faceClass);

    if (faceEl) {
        const item = dataArray[contentIndex];
        const img = faceEl.querySelector('img');
        const txt = faceEl.querySelector('.cube-text');

        if (img) img.src = item.img;
        if (txt) txt.textContent = item.name;
    }
}

let cubeInterval;
let cubeRotationX = 0;

function startCubeRotation() {
    const insuranceCube = document.getElementById('insuranceCube');
    const tpaCube = document.getElementById('tpaCube');
    const schemeCube = document.getElementById('schemeCube');

    // Initial Pre-fill for Face 0 (Front) is assumed to be done or static.
    // Actually, we should probably pre-fill all 4 faces to start with.
    // But since HTML has placeholders, let's just let the loop handle updates.

    // Initialize all faces for all cubes to ensure they match data
    [
        { id: 'insuranceCube', data: insuranceData },
        { id: 'tpaCube', data: tpaData },
        { id: 'schemeCube', data: schemeData }
    ].forEach(cubeSet => {
        const cube = document.getElementById(cubeSet.id);
        if (!cube) return;
        const faces = ['front', 'top', 'back', 'bottom'];
        faces.forEach((face, i) => {
            const faceClass = `.cube-face-${face}`;
            const faceEl = cube.querySelector(faceClass);
            if (faceEl && cubeSet.data[i % cubeSet.data.length]) { // Protect against short arrays
                const item = cubeSet.data[i % cubeSet.data.length];
                const img = faceEl.querySelector('img');
                const txt = faceEl.querySelector('.cube-text');
                if (img) img.src = item.img;
                if (txt) txt.textContent = item.name;
            }
        });
    });

    let step = 0;

    // Clear any existing
    if (cubeInterval) clearInterval(cubeInterval);

    cubeInterval = setInterval(() => {
        // 1. Prepare Next Content
        updateCubeFaceContent('insuranceCube', insuranceData, step);
        updateCubeFaceContent('tpaCube', tpaData, step);
        updateCubeFaceContent('schemeCube', schemeData, step);

        // 2. Rotate
        step++;
        cubeRotationX = -90 * step;

        if (insuranceCube) insuranceCube.style.transform = `rotateX(${cubeRotationX}deg)`;
        if (tpaCube) tpaCube.style.transform = `rotateX(${cubeRotationX}deg)`;
        if (schemeCube) schemeCube.style.transform = `rotateX(${cubeRotationX}deg)`;

    }, 2500);
}

function stopCubeRotation() {
    if (cubeInterval) clearInterval(cubeInterval);
}

const insuranceCard = document.getElementById('insuranceCard');
if (insuranceCard) {
    insuranceCard.addEventListener('click', (e) => {
        openInsuranceModal();
    });
}

// Start immediately on load
document.addEventListener('DOMContentLoaded', () => {
    startCubeRotation();
});

if (doctorModal) {
    doctorModal.addEventListener('click', (e) => {
        if (e.target === doctorModal) closeDoctorModal();
    });
}

// ============================================
// HOSPITAL DOCTORS DATA (Consolidated)
// ============================================
const doctorsData = [
    {
        name: 'Dr. Madhuram Chowdry',
        specialty: 'Orthopedic Surgeon',
        department: 'Orthopedics',
        experience: '15+ years',
        qualification: 'MBBS, MS Orthopedics',
        consultationFee: '₹500',
        timings: 'Mon-Sat: 10:00 AM - 2:00 PM',
        bio: 'Senior Orthopedic Surgeon specializing in joint replacements and trauma care.',
        image: '👨‍⚕️'
    },
    {
        name: 'Dr. Keerthi MS',
        specialty: 'Gynaecologist',
        department: 'Gynecology',
        experience: '12+ years',
        qualification: 'MBBS, DGO, DNB',
        consultationFee: '₹400',
        timings: 'Mon-Sat: 10:30 AM - 1:30 PM, 5:00 PM - 8:00 PM',
        bio: 'Compassionate care for women’s health, maternity, and infertility issues.',
        image: '👩‍⚕️'
    },
    {
        name: 'Dr. Sachin HM',
        specialty: 'General Surgeon',
        department: 'Surgery',
        experience: '10+ years',
        qualification: 'MBBS, MS General Surgery',
        consultationFee: '₹400',
        timings: 'Mon-Sat: 11:00 AM - 3:00 PM',
        bio: 'Expert in laparoscopic and general surgical procedures.',
        image: '👨‍⚕️'
    },
    {
        name: 'Dr. Lokesh',
        specialty: 'General Surgeon',
        department: 'Surgery',
        experience: '10+ years',
        qualification: 'MS Surgery, Rajendra Institute',
        consultationFee: '₹400',
        timings: 'Mon, Wed, Fri: 11 AM - 2 PM, 6 PM - 8 PM',
        bio: 'Specialist in emergency and trauma surgery',
        image: '👨‍⚕️'
    },
    {
        name: 'Dr. Geetha',
        specialty: 'Gynecologist',
        department: 'Gynecology',
        experience: '11+ years',
        qualification: 'DM Obs & Gyn, Government Medical College',
        consultationFee: '₹350',
        timings: 'Mon-Thu: 9 AM - 1 PM, 4 PM - 6 PM',
        bio: 'Expert in family planning and reproductive health',
        image: '👩‍⚕️'
    },
    {
        name: 'Dr. Vijay Kumar',
        specialty: 'Plastic Surgeon',
        department: 'Plastic Surgery',
        experience: '13+ years',
        qualification: 'MS Plastic Surgery, NIMHANS',
        consultationFee: '₹600',
        timings: 'Wed-Sat: 10 AM - 1 PM, 4 PM - 7 PM',
        bio: 'Specialist in aesthetic and reconstructive surgery',
        image: '👨‍⚕️'
    },
    {
        name: 'Dr. Chethan',
        specialty: 'Plastic Surgeon',
        department: 'Plastic Surgery',
        experience: '9+ years',
        qualification: 'MS Plastic Surgery, RGUHS',
        consultationFee: '₹500',
        timings: 'Mon-Thu: 2 PM - 6 PM, Fri-Sat: 10 AM - 2 PM',
        bio: 'Experienced in burn management and hand surgery',
        image: '👨‍⚕️'
    },
    {
        name: 'Dr. Ramya',
        specialty: 'General Physician',
        department: 'General Medicine',
        experience: '8+ years',
        qualification: 'MD General Medicine, Bangalore University',
        consultationFee: '₹300',
        timings: 'Mon-Sat: 9 AM - 12 PM, 4 PM - 7 PM',
        bio: 'Specialist in chronic disease management and preventive healthcare',
        image: '👩‍⚕️'
    },
    {
        name: 'Dr. Arun',
        specialty: 'Physician',
        department: 'General Medicine',
        experience: '7+ years',
        qualification: 'MD Internal Medicine, RGUHS',
        consultationFee: '₹250',
        timings: 'Tue-Sat: 10 AM - 1 PM, 5 PM - 8 PM',
        bio: 'Expert in respiratory and infectious diseases',
        image: '👨‍⚕️'
    },
    {
        name: 'Dr. Chandan',
        specialty: 'Vascular Surgeon',
        department: 'Surgery', // or Vascular Surgery
        experience: '16+ years',
        qualification: 'MS Surgery, MCh Vascular Surgery, AIIMS',
        consultationFee: '₹700',
        timings: 'Mon, Wed, Fri: 10 AM - 1 PM, 4 PM - 6 PM',
        bio: 'Leading specialist in vascular and endovascular surgery',
        image: '👨‍⚕️'
    },
    {
        name: 'Dr. Harsha Huliappa',
        specialty: 'Neurologist',
        department: 'Neurology',
        experience: '12+ years',
        qualification: 'MD Neurology, NIMHANS',
        consultationFee: '₹500',
        timings: 'Thu-Sat: 10 AM - 1 PM, 4 PM - 7 PM',
        bio: 'Specialist in epilepsy, stroke, and movement disorders',
        image: '👨‍⚕️'
    },
    {
        name: 'Dr. Punith',
        specialty: 'Neurologist',
        department: 'Neurology',
        experience: '9+ years',
        qualification: 'DM Neurology, NIMHANS',
        consultationFee: '₹400',
        timings: 'Mon-Wed: 2 PM - 6 PM, Fri-Sat: 10 AM - 1 PM',
        bio: 'Expert in headache management and neurological emergencies',
        image: '👨‍⚕️'
    },
    {
        name: 'Dr. Madhuri',
        specialty: 'Dermatologist',
        department: 'Dermatology',
        experience: '10+ years',
        qualification: 'MD Dermatology, Bangalore Medical College',
        consultationFee: '₹350',
        timings: 'Tue-Sat: 11 AM - 2 PM, 5 PM - 8 PM',
        bio: 'Specialist in skin diseases and cosmetic dermatology',
        image: '👩‍⚕️'
    },
    {
        name: 'Dr. Manjushree',
        specialty: 'Psychiatrist',
        department: 'Psychiatry',
        experience: '11+ years',
        qualification: 'MD Psychiatry, Government Medical College',
        consultationFee: '₹400',
        timings: 'Mon-Fri: 10 AM - 1 PM, 4 PM - 6 PM',
        bio: 'Expert in depression, anxiety, and behavioral disorders',
        image: '👩‍⚕️'
    },
    {
        name: 'Dr. Lakshmi Narayan',
        specialty: 'Pulmonologist',
        department: 'Pulmonology',
        experience: '13+ years',
        qualification: 'MD Respiratory Medicine, RGUHS',
        consultationFee: '₹450',
        timings: 'Wed-Sat: 10 AM - 1 PM, 3 PM - 6 PM',
        bio: 'Specialist in asthma, COPD, and lung cancer',
        image: '👨‍⚕️'
    },
    {
        name: 'Dr. Abhilash (1st)',
        specialty: 'Physician',
        department: 'General Medicine',
        experience: '6+ years',
        qualification: 'MD General Medicine, Rajendra Medical College',
        consultationFee: '₹250',
        timings: 'Mon-Sat: 9 AM - 12 PM, 6 PM - 8 PM',
        bio: 'Focused on preventive medicine and health counseling',
        image: '👨‍⚕️'
    },
    {
        name: 'Dr. Pooja',
        specialty: 'Ophthalmologist',
        department: 'Ophthalmology',
        experience: '8+ years',
        qualification: 'MD Ophthalmology, RGUHS',
        consultationFee: '₹300',
        timings: 'Mon-Fri: 10 AM - 1 PM, 4 PM - 7 PM',
        bio: 'Expert in cataract surgery and refractive procedures',
        image: '👩‍⚕️'
    },
    {
        name: 'Dr. Nitish',
        specialty: 'Intensivist',
        department: 'Intensive Care',
        experience: '14+ years',
        qualification: 'MD Critical Care, AIIMS',
        consultationFee: '₹600',
        timings: '24/7 Available - ICU Specialist',
        bio: 'Expert in critical care management and emergency medicine',
        image: '👨‍⚕️'
    },
    {
        name: 'Dr. Mohan',
        specialty: 'Urologist',
        department: 'Urology',
        experience: '11+ years',
        qualification: 'MS Urology, Government Medical College',
        consultationFee: '₹450',
        timings: 'Tue-Fri: 10 AM - 1 PM, 5 PM - 7 PM',
        bio: 'Specialist in kidney stones, prostate, and urological cancer',
        image: '👨‍⚕️'
    },
    {
        name: 'Dr. Abhilash (2nd)',
        specialty: 'ENT Specialist',
        department: 'ENT',
        experience: '8+ years',
        qualification: 'MS ENT, RGUHS',
        consultationFee: '₹350',
        timings: 'Mon-Sat: 11:00 AM - 4:00 PM',
        bio: 'Expert in ear, nose, and throat disorders and surgeries.',
        image: '👨‍⚕️'
    },
    {
        name: 'Dr. Yogesh',
        specialty: 'Physician',
        department: 'General Medicine',
        experience: '5+ years',
        qualification: 'MBBS, MD',
        consultationFee: '₹250',
        timings: 'Mon-Sat: 2:00 PM - 6:00 PM',
        bio: 'Dedicated physician focusing on general health and wellness.',
        image: '👨‍⚕️'
    }
];

// Function to open doctor details
function openDoctorDetails(doctorName) {
    // Search for doctor in local data
    let doctor = doctorsData.find(d => d.name === doctorName);

    if (!doctor) {
        console.warn('Doctor details not found for:', doctorName);
        // Fallback
        doctor = {
            name: doctorName,
            specialty: 'Specialist',
            qualification: 'MBBS, MD',
            bio: 'Experienced specialist dedicated to providing detailed care.',
            experience: '10+ Years',
            department: 'General',
            timings: 'By Appointment',
            consultationFee: 'Ask at Reception',
            image: ''
        };
    }

    // Populate Modal
    const safeText = (text) => text || '--';
    document.getElementById('docModalName').textContent = safeText(doctor.name);
    document.getElementById('docModalSpecialty').textContent = safeText(doctor.specialty);
    document.getElementById('docModalQual').textContent = safeText(doctor.qualification);
    document.getElementById('docModalBio').textContent = safeText(doctor.bio);
    document.getElementById('docModalExp').textContent = safeText(doctor.experience);
    document.getElementById('docModalDept').textContent = safeText(doctor.department);
    document.getElementById('docModalTime').textContent = safeText(doctor.timings);
    document.getElementById('docModalFee').textContent = safeText(doctor.consultationFee);

    const imgContainer = document.getElementById('docModalImage');
    imgContainer.innerHTML = doctor.image || '👨‍⚕️'; // Simplified as we handled logic before

    // Update Book Button to pre-fill data
    const bookBtn = document.querySelector('#doctorModal .vibrant-button');
    if (bookBtn) {
        bookBtn.onclick = function () {
            closeDoctorModal();
            // Map data department to form value if needed, or pass directly
            openBookingModal({
                doctor: doctor.name,
                department: doctor.department
            });
        };
    }

    // Show Modal
    if (doctorModal) {
        doctorModal.classList.add('show');
    }
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
    orthopedics: {
        icon: '<i class="fas fa-bone"></i>',
        title: 'Orthopedics Department',
        description: 'Comprehensive bone and joint care with advanced surgical and non-surgical treatment options.',
        features: ['Joint Replacement Surgery', 'Sports Medicine', 'Trauma & Fracture Care', 'Spine Surgery'],
        doctors: [{ name: 'Dr. Madhuram Chowdry', specialty: 'Orthopedic Surgeon', image: '👨‍⚕️' }]
    },
    general_surgery: {
        icon: '<i class="fas fa-user-md"></i>',
        title: 'General Surgery Department',
        description: 'Advanced surgical procedures with minimally invasive techniques for faster recovery.',
        features: ['Laparoscopic Surgery', 'Emergency Surgery', 'Hernia Repair', 'Gastrointestinal Surgery'],
        doctors: [{ name: 'Dr. Sachin', specialty: 'General Surgery', image: '👨‍⚕️' }]
    },
    pediatrics: {
        icon: '<i class="fas fa-baby"></i>',
        title: 'Pediatrics Department',
        description: 'Specialized healthcare for infants, children, and adolescents with compassionate care.',
        features: ['Newborn Care', 'Child Vaccinations', 'Growth Monitoring', 'Pediatric Emergencies'],
        doctors: [
            { name: 'Dr. Banu', specialty: 'Pediatric', image: '👩‍⚕️' },
            { name: 'Dr. Rajshekhar BK', specialty: 'Pediatric', image: '👨‍⚕️' },
            { name: 'Dr. Anjana S Mavinahalli', specialty: 'Pediatric', image: '👩‍⚕️' }
        ]
    },
    intensive_care: {
        icon: '<i class="fas fa-heartbeat"></i>',
        title: 'Intensive Care Unit',
        description: '24/7 critical care for patients requiring intensive monitoring and advanced life support.',
        features: ['Critical Care Management', 'Ventilator Support', 'Post-Surgical Care', 'Emergency Response'],
        doctors: [{ name: 'Dr. Krupa Subramanya', specialty: 'Intensiveist', image: '👩‍⚕️' }]
    },
    anesthesiology: {
        icon: '<i class="fas fa-syringe"></i>',
        title: 'Anesthesiology Department',
        description: 'Expert anesthesia services ensuring safe and pain-free surgical procedures.',
        features: ['General Anesthesia', 'Regional Anesthesia', 'Pain Management', 'Sedation Services'],
        doctors: [
            { name: 'Dr. Lingaraju', specialty: 'Anesthetist', image: '👨‍⚕️' },
            { name: 'Dr. Rathnamala', specialty: 'Anesthetist', image: '👩‍⚕️' },
            { name: 'Dr. Shivakumar', specialty: 'Anesthetist', image: '👨‍⚕️' }
        ]
    },
    omfs_surgery: {
        icon: '<i class="fas fa-tooth"></i>',
        title: 'OMFS Surgery Department',
        description: 'Oral and Maxillofacial Surgery for jaw, face, and dental-related surgical procedures.',
        features: ['Jaw Surgery', 'Facial Trauma Repair', 'Dental Implants', 'TMJ Disorders'],
        doctors: [
            { name: 'Dr. Adarsh Chowdry', specialty: 'OMFS Surgeon', image: '👨‍⚕️' },
            { name: 'Dr. Lakshith Biddappa', specialty: 'OMFS Surgeon', image: '👨‍⚕️' }
        ]
    },
    neurosurgery: {
        icon: '<i class="fas fa-brain"></i>',
        title: 'Neurosurgery Department',
        description: 'Advanced surgical interventions for complex brain and spine conditions.',
        features: ['Brain Tumor Surgery', 'Spine Surgery', 'Trauma Surgery', 'Minimally Invasive Neurosurgery'],
        doctors: [{ name: 'Dr. Punith', specialty: 'Neuro Surgeon', image: '👨‍⚕️' }]
    },
    physiotherapy: {
        icon: '<i class="fas fa-running"></i>',
        title: 'Physiotherapy Department',
        description: 'Comprehensive rehabilitation services to restore movement and reduce pain.',
        features: ['Sports Injury Rehabilitation', 'Post-Surgical Recovery', 'Pain Management', 'Mobility Training'],
        doctors: [{ name: 'Dr. Vinod Kumar Seervi', specialty: 'Physiotherapist', image: '👨‍⚕️' }]
    },
    urology: {
        icon: '<i class="fas fa-droplet"></i>',
        title: 'Urology Department',
        description: 'Surgical and medical diseases of the male and female urinary-tract system.',
        features: ['Kidney Stone Treatment', 'Prostate Care', 'Urinary Infections', 'Male Infertility'],
        doctors: [
            { name: 'Dr. Kiran Shetty', specialty: 'Urology', image: '👨‍⚕️' },
            { name: 'Dr. Abhijith', specialty: 'Urology', image: '👨‍⚕️' }
        ]
    },
    gynecology: {
        icon: '<i class="fas fa-venus"></i>',
        title: 'Gynecology Department',
        description: 'Comprehensive women\'s health services including maternity and reproductive care.',
        features: ['Prenatal & Postnatal Care', 'High-Risk Pregnancy Management', 'Gynecological Surgeries', 'Fertility Treatments'],
        doctors: [{ name: 'Dr. Chandrika', specialty: 'Gynecology', image: '👩‍⚕️' }]
    },
    dermatology: {
        icon: '<i class="fas fa-hand-sparkles"></i>',
        title: 'Dermatology Department',
        description: 'Expert skin care treatments for medical and cosmetic dermatological conditions.',
        features: ['Acne Treatment', 'Skin Cancer Screening', 'Laser Treatments', 'Cosmetic Dermatology'],
        doctors: [{ name: 'Dr. Pujith', specialty: 'Dermatologist', image: '👨‍⚕️' }]
    },
    general_medicine: {
        icon: '<i class="fas fa-stethoscope"></i>',
        title: 'General Medicine Department',
        description: 'Comprehensive primary care, chronic disease management, and preventive healthcare.',
        features: ['Health Checkups', 'Fever & Infection Treatment', 'Diabetes Management', 'Hypertension Care'],
        doctors: [{ name: 'Dr. Ramya', specialty: 'General Physician', image: '👩‍⚕️' }]
    },
    pulmonology: {
        icon: '<i class="fas fa-lungs"></i>',
        title: 'Pulmonology Department',
        description: 'Diagnosis and treatment of respiratory system diseases and sleep disorders.',
        features: ['Asthma/COPD Management', 'Lung Function Tests', 'Bronchoscopy', 'Sleep Medicine'],
        doctors: [{ name: 'Dr. Sushma', specialty: 'Pulmonology', image: '👩‍⚕️' }]
    },
    ent: {
        icon: '<i class="fas fa-ear-listen"></i>',
        title: 'ENT Department',
        description: 'Comprehensive ear, nose, and throat care including diagnostics and surgical treatments.',
        features: ['Hearing Tests', 'Sinus Treatment', 'Tonsillectomy', 'Voice Disorders'],
        doctors: [{ name: 'Dr. Abhilash', specialty: 'ENT', image: '👨‍⚕️' }]
    }
};
// Handle department navigation clicks
function initDepartmentNav() {
    const deptBtns = document.querySelectorAll('.dept-nav-btn');
    const deptContent = document.querySelector('.department-card'); // Note: changed selector to target the card inside display area if needed, but updateDepartmentContent targets .department-display-area actually?
    // Wait, updateDepartmentContent currently targets .department-content, but in index.html I changed it to .department-display-area
    // I need to update the selector in updateDepartmentContent as well.

    console.log('Department buttons found:', deptBtns.length);

    if (deptBtns.length > 0) {
        deptBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                // Get the department ID
                const deptId = btn.getAttribute('data-dept');
                console.log('Department selected:', deptId);

                // Remove active state from all buttons
                deptBtns.forEach(b => b.classList.remove('active'));

                // Add active state to clicked button
                btn.classList.add('active');

                // Update the department content
                updateDepartmentContent(deptId);

                // Scroll button into view (for mobile horizontal scroll)
                btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            });
        });

        // Auto-load first department (Orthopedics) on page load
        if (deptBtns.length > 0) {
            updateDepartmentContent('orthopedics');
        }
    }
}

// Initialize department navigation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDepartmentNav);
} else {
    initDepartmentNav();
}

function updateDepartmentContent(deptId) {
    console.log('Updating content for:', deptId);
    // Selector updated to match new HTML structure
    const deptContent = document.querySelector('.department-display-area');

    // Check if departments object exists
    if (typeof departments === 'undefined') {
        console.error('Departments data missing');
        return;
    }

    const dept = departments[deptId];

    if (!dept) {
        console.error('Department not found in data:', deptId);
        return;
    }

    // Verify department container
    if (!deptContent) {
        console.error('Department content container not found');
        return;
    }

    try {
        console.log('Rendering content for:', dept.title);

        // Generate Features List as Cards
        const featuresHTML = (dept.features || []).map(feature =>
            `<div class="vibrant-card key-service-card">
                <span><i class="fas fa-circle-check" style="color: var(--primary-gold);"></i></span>
                <span>${feature}</span>
            </div>`
        ).join('');

        // Generate Doctors List
        let doctorsHTML = '';
        if (dept.doctors && dept.doctors.length > 0) {
            const doctorsList = dept.doctors.map(doc => {
                const safeName = doc.name ? doc.name.replace(/'/g, "\\'") : '';
                // Fix potential image path issues or empty images
                const imageDisplay = doc.image || '👨‍⚕️';

                return `
                <div class="dept-doctor-mini-card" onclick="openDoctorDetails('${safeName}')" role="button" tabindex="0">
                    <div class="mini-doc-image">${imageDisplay}</div>
                    <div class="mini-doc-info">
                        <h4>${doc.name}</h4>
                        <span class="mini-doc-spec">${doc.specialty}</span>
                    </div>
                </div>`;
            }).join('');

            doctorsHTML = `
                <div class="dept-doctors-section">
                    <h4>Our Specialists</h4>
                    <div class="dept-doctors-grid">
                        ${doctorsList}
                    </div>
                </div>
            `;
        } else {
            doctorsHTML = `
                <div class="dept-doctors-section">
                    <h4>Our Team</h4>
                    <p class="dept-team-note">Expert team of specialists available.</p>
                </div>
            `;
        }

        // Direct update without timeouts or animations
        deptContent.style.opacity = '1';

        // Construct new HTML
        const newContent = `
            <div class="vibrant-card department-card" id="${deptId}" data-dept="${deptId}">
                <div class="dept-header">
                    <div class="dept-icon">${dept.icon}</div>
                    <div class="dept-title-box">
                        <h3>${dept.title}</h3>
                        <p>${dept.description}</p>
                    </div>
                </div>
                
                <div class="dept-body">
                    <div class="dept-features-box">
                        <h4>Key Services</h4>
                        <div class="dept-features-grid">
                            ${featuresHTML}
                        </div>
                    </div>
                    
                    ${doctorsHTML}
                </div>
                
                <button class="vibrant-button dept-book-btn" onclick="openBookingModal()">Book Consultation</button>
            </div>
        `;

        console.log('Injecting HTML length:', newContent.length);
        deptContent.innerHTML = newContent;

    } catch (err) {
        console.error('Error updating department content:', err);
        deptContent.innerHTML = `<p class="error-msg" style="color: red; padding: 20px;">Error loading department details. ${err.message}</p>`;
        deptContent.style.opacity = '1';
    }
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
*Appointment Booking Request - A R Hospital*

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
    const hospitalPhone = '919008994827'; // A R Hospital +91 9008994827
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
            // Close mobile menu if open
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');

            // Offset for fixed header (80px)
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// Active Link Highlighting (Scroll Spy)
const scrollSections = document.querySelectorAll('section, footer'); // Tracking footer for Contact if needed, usually sections have IDs
const scrollNavItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    scrollSections.forEach(section => {
        let sectionTop = section.offsetTop - 150; // Offset for header
        let sectionHeight = section.offsetHeight;

        // Custom handling for Pinned Packages Section
        // Because GSAP pins the section, the 'scroll duration' is longer than the visual height
        if (section.id === 'packages') {
            const pList = document.querySelector('.packages-list');
            // Add the horizontal scroll distance to the logic
            if (pList) {
                sectionHeight += (pList.scrollWidth - window.innerWidth);
            }
        }

        // Check if current scroll position is WITHIN this section
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    scrollNavItems.forEach(a => {
        a.classList.remove('active');
        // Match href="#id" with ID
        if (a.getAttribute('href').includes(current) && current !== '') {
            a.classList.add('active');
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

window.addEventListener('load', function () {
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

    // Package Scroll Disabled (Manual Active)
    console.log('Package Manual Slider Active');

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

console.log('%c🏥 Welcome to A R Hospital Website', 'color: #bc9f3fff; font-size: 16px; font-weight: bold;');
console.log('%cExcellence in Healthcare', 'color: #FFBF00; font-size: 14px;');
console.log('%cFor appointments, click "Book Now" or contact: +91 9008994827', 'color: #2C2416; font-size: 12px;');

// ============================================
// CAROUSEL SLIDER FUNCTIONALITY
// ============================================
const pList = document.querySelector('.packages-list');
const prevBtns = document.querySelectorAll('.prev-btn, .prev-mobile');
const nextBtns = document.querySelectorAll('.next-btn, .next-mobile');

function updateButtonState() {
    if (!pList) return;

    const scrollLeft = pList.scrollLeft;
    const maxScroll = pList.scrollWidth - pList.clientWidth;
    const buffer = 10; // Tolerance

    // Dim Prev Button if at start
    if (scrollLeft <= buffer) {
        prevBtns.forEach(btn => btn.classList.add('disabled'));
    } else {
        prevBtns.forEach(btn => btn.classList.remove('disabled'));
    }

    // Dim Next Button if at end
    if (scrollLeft >= maxScroll - buffer) {
        nextBtns.forEach(btn => btn.classList.add('disabled'));
    } else {
        nextBtns.forEach(btn => btn.classList.remove('disabled'));
    }
}

if (pList) {
    pList.addEventListener('scroll', updateButtonState);
    // Initial check with delay
    setTimeout(updateButtonState, 500);
    window.addEventListener('resize', updateButtonState);
}

window.scrollPackages = function (direction) {
    if (pList) {
        const scrollAmount = 380; // Card width (350) + gap (30)
        pList.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
};

// ============================================
// TESTIMONIALS PLAY/PAUSE CONTROLS
// ============================================

const pauseTestimonialsBtn = document.getElementById('pauseTestimonials');
const playTestimonialsBtn = document.getElementById('playTestimonials');
const testimonialsTrack = document.getElementById('testimonialsTrack');

// Function to pause testimonials
function pauseTestimonials() {
    if (testimonialsTrack) {
        testimonialsTrack.classList.add('paused');
        if (pauseTestimonialsBtn) pauseTestimonialsBtn.style.display = 'none';
        if (playTestimonialsBtn) playTestimonialsBtn.style.display = 'flex';
    }
}

// Function to play testimonials
function playTestimonials() {
    if (testimonialsTrack) {
        testimonialsTrack.classList.remove('paused');
        if (playTestimonialsBtn) playTestimonialsBtn.style.display = 'none';
        if (pauseTestimonialsBtn) pauseTestimonialsBtn.style.display = 'flex';
    }
}

if (pauseTestimonialsBtn && playTestimonialsBtn && testimonialsTrack) {
    // Pause button click
    pauseTestimonialsBtn.addEventListener('click', pauseTestimonials);

    // Play button click
    playTestimonialsBtn.addEventListener('click', playTestimonials);

    // Auto-pause when clicking on any video card
    const videoCards = document.querySelectorAll('.testimonial-card.video-card');
    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            pauseTestimonials();
        });
    });
}

// ============================================
// SMART APPOINTMENT BOOKING - DEPARTMENT & DOCTOR SYNC
// ============================================

const departmentSelect = document.getElementById('department');
const doctorSelect = document.getElementById('doctor');

if (departmentSelect && doctorSelect) {
    // Store all doctor options
    const allDoctorOptions = Array.from(doctorSelect.options);

    // When department is selected, filter doctors
    departmentSelect.addEventListener('change', function () {
        const selectedDept = this.value;

        // Reset doctor selection
        doctorSelect.value = '';

        // Remove all current options except the first placeholder
        doctorSelect.innerHTML = '<option value="">Select Doctor</option>';

        if (selectedDept === '') {
            // If no department selected, show all doctors
            allDoctorOptions.forEach((option, index) => {
                if (index > 0) { // Skip the placeholder
                    doctorSelect.appendChild(option.cloneNode(true));
                }
            });
        } else {
            // Filter doctors for selected department
            allDoctorOptions.forEach((option, index) => {
                if (index === 0) return; // Skip placeholder

                const doctorDept = option.getAttribute('data-dept');
                if (doctorDept === selectedDept) {
                    doctorSelect.appendChild(option.cloneNode(true));
                }
            });
        }

        // If no doctors found for this department, show message
        if (doctorSelect.options.length === 1) {
            const noDocOption = document.createElement('option');
            noDocOption.value = '';
            noDocOption.textContent = 'No doctors available in this department';
            noDocOption.disabled = true;
            doctorSelect.appendChild(noDocOption);
        }
    });

    // When doctor is selected, auto-fill department
    doctorSelect.addEventListener('change', function () {
        const selectedOption = this.options[this.selectedIndex];
        const doctorDept = selectedOption.getAttribute('data-dept');

        if (doctorDept) {
            // Auto-select the corresponding department
            departmentSelect.value = doctorDept;
        }
    });
}

// ============================================
// PHONE NUMBER VALIDATION - ONLY 10 DIGITS
// ============================================

const phoneInput = document.getElementById('patientPhone');

if (phoneInput) {
    // Prevent non-numeric input in real-time
    phoneInput.addEventListener('input', function (e) {
        // Remove any non-digit characters
        this.value = this.value.replace(/[^0-9]/g, '');

        // Limit to 10 digits
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }
    });

    // Prevent paste of non-numeric content
    phoneInput.addEventListener('paste', function (e) {
        e.preventDefault();
        const pastedText = (e.clipboardData || window.clipboardData).getData('text');
        const numericOnly = pastedText.replace(/[^0-9]/g, '').slice(0, 10);
        this.value = numericOnly;
    });

    // Validate on blur (when user clicks away)
    phoneInput.addEventListener('blur', function () {
        if (this.value.length > 0 && this.value.length !== 10) {
            this.setCustomValidity('Phone number must be exactly 10 digits');
        } else {
            this.setCustomValidity('');
        }
    });
}
