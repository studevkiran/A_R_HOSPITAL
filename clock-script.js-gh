/* ============================================
   24x7 SERVICES CLOCK LOGIC
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {

    // 2. Service Rotation Logic
    const services = [
        {
            key: 'emergency',
            label: 'Emergency Care',
            desc: 'Immediate medical attention and trauma support whenever you need it most.',
            next: 'Pharmacy',
            shortLabel: 'Emergency',
            icon: '<img src="assets/icon-emergency.png" alt="Emergency" class="service-icon-img" />'
        },
        {
            key: 'pharmacy',
            label: 'Pharmacy',
            desc: '24×7 in-house pharmacy for all essential medicines available day and night.',
            next: 'Laboratory',
            shortLabel: 'Pharmacy',
            icon: '<img src="assets/icon-pharmacy.png" alt="Pharmacy" class="service-icon-img" />'
        },
        {
            key: 'lab',
            label: 'Laboratory',
            desc: 'Round-the-clock lab for urgent blood tests and accurate diagnostics.',
            next: 'X-Ray',
            shortLabel: 'Laboratory',
            icon: '<img src="assets/icon-lab.png" alt="Laboratory" class="service-icon-img" />'
        },
        {
            key: 'xray',
            label: 'X-Ray',
            desc: 'Digital X-Ray and advanced imaging services for timely diagnosis.',
            next: 'ICU',
            shortLabel: 'X-Ray',
            icon: '<img src="assets/icon-xray.png" alt="X-Ray" class="service-icon-img" />'
        },
        {
            key: 'icu',
            label: 'I C U',
            desc: 'Advanced intensive care unit with continuous monitoring for critical patients.',
            next: 'In-Patient Care',
            shortLabel: 'ICU',
            icon: '<img src="assets/icon-icu.png" alt="ICU" class="service-icon-img" />'
        },
        {
            key: 'inpatient',
            label: 'In-Patient Care',
            desc: 'Comfortable, well-equipped rooms with round-the-clock nursing support.',
            next: 'Operation Theater',
            shortLabel: 'In-Patient',
            icon: '<img src="assets/icon-inpatient.png" alt="In-Patient" class="service-icon-img" />'
        },
        {
            key: 'ot',
            label: 'Operation Theater',
            desc: 'Modern, sterile OTs ready for both emergency and planned surgeries.',
            next: 'Emergency Care',
            shortLabel: 'OT',
            icon: '<img src="assets/icon-ot.png" alt="OT" class="service-icon-img" />'
        }
    ];

    const segments = document.querySelectorAll('.service-segment');
    const activeRing = document.querySelector('.clock-active-ring');
    const titleEl = document.getElementById('serviceTitle');
    const descEl = document.getElementById('serviceDesc');
    const centerIconEl = document.getElementById('centerIcon');
    const centerLabelEl = document.getElementById('centerLabel');

    // Only proceed if elements exist (e.g., we are on the homepage)
    if (!segments.length || !activeRing) return;

    let currentIndex = 0;
    const totalSegments = segments.length;
    const anglePerSegment = 360 / totalSegments;
    let autoPlayInterval;
    let isPaused = false;

    // Initialize Positions
    function positionSegments() {
        const isMobile = window.innerWidth <= 992;
        const radius = isMobile ? 110 : 170; // Adjusted: 110 for mobile (tighter), 170 for desktop

        segments.forEach((segment, index) => {
            // Position segments in a circle
            // -90deg offset to start at top (12 o'clock)
            const angle = (index * anglePerSegment) - 90;

            // Use transforms to position
            segment.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`;

            // Add hover listeners
            segment.onmouseenter = () => {
                isPaused = true;
                setActiveService(index);
            };

            segment.onmouseleave = () => {
                isPaused = false;
            };
        });
    }

    positionSegments();
    window.addEventListener('resize', positionSegments);

    function setActiveService(index) {
        currentIndex = index;
        const data = services[index];

        // 1. Update Segments Visuals
        segments.forEach((seg, i) => {
            if (i === index) {
                seg.classList.add('active');
            } else {
                seg.classList.remove('active');
            }
        });

        // 2. Rotate Ring
        const rotation = index * anglePerSegment;
        activeRing.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

        // 3. Update Text Content with Animation (Left Side)
        if (titleEl && descEl) {
            // Fade out
            titleEl.style.opacity = '0';
            titleEl.style.transform = 'translateY(10px)';
            descEl.style.opacity = '0';
            descEl.style.transform = 'translateY(10px)';

            // Center Element Animation
            if (centerIconEl) centerIconEl.style.transform = 'scale(0.8)';
            if (centerLabelEl) centerLabelEl.style.opacity = '0.5';

            setTimeout(() => {
                // Update text content
                titleEl.textContent = data.label;
                descEl.textContent = data.desc;

                // Update Center Content
                if (centerIconEl) {
                    centerIconEl.innerHTML = data.icon;
                    centerIconEl.style.transform = 'scale(1)';
                }
                if (centerLabelEl) {
                    centerLabelEl.textContent = data.shortLabel;
                    centerLabelEl.style.opacity = '1';
                }

                // Fade in text
                titleEl.style.opacity = '1';
                titleEl.style.transform = 'translateY(0)';
                descEl.style.opacity = '1';
                descEl.style.transform = 'translateY(0)';
            }, 300); // Wait for fade out
        }
    }

    // Auto Play Logic
    function startAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(() => {
            if (!isPaused) {
                let nextIndex = (currentIndex + 1) % totalSegments;
                setActiveService(nextIndex);
            }
        }, 4000); // 4 seconds per slide
    }

    // Initialize
    setActiveService(0);
    startAutoPlay();
});
