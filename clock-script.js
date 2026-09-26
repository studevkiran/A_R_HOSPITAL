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
            next: 'Ambulance Service',
            shortLabel: 'Emergency',
            icon: '<img src="assets/siren_icon.png?v=9" alt="Emergency" class="service-icon-img" />'
        },
        {
            key: 'ambulance',
            label: 'Ambulance Service',
            desc: 'Rapid response advanced life support ambulances available 24x7.',
            next: 'Pharmacy',
            shortLabel: 'Ambulance',
            icon: '<img src="assets/ambulance_icon.png?v=9" alt="Ambulance" class="service-icon-img" />'
        },
        {
            key: 'pharmacy',
            label: 'Pharmacy',
            desc: 'In-house pharmacy with essential medicines available for patient needs.',
            next: 'Laboratory',
            shortLabel: 'Pharmacy',
            icon: '<img src="assets/pharmacy_icon.png?v=6" alt="Pharmacy" class="service-icon-img" />'
        },
        {
            key: 'lab',
            label: 'Laboratory',
            desc: 'High-tech diagnostic labs delivering accurate and timely reports.',
            next: 'X-Ray',
            shortLabel: 'Lab',
            icon: '<img src="assets/labarotary_icon.png?v=6" alt="Laboratory" class="service-icon-img" />'
        },
        {
            key: 'xray',
            label: 'X-Ray',
            desc: 'Digital X-Ray and advanced imaging services for timely diagnosis.',
            next: 'ICU',
            shortLabel: 'X-Ray',
            icon: '<img src="assets/x%20ray.png?v=6" alt="X-Ray" class="service-icon-img" />'
        },
        {
            key: 'icu',
            label: 'I C U',
            desc: 'Advanced intensive care unit with continuous monitoring for critical patients.',
            next: 'In-Patient Care',
            shortLabel: 'ICU',
            icon: '<img src="assets/icu_icon.png?v=6" alt="ICU" class="service-icon-img" />'
        },
        {
            key: 'inpatient',
            label: 'In-Patient Care',
            desc: 'Comfortable, well-equipped rooms with round-the-clock nursing support.',
            next: 'Operation Theater',
            shortLabel: 'In-Patient',
            icon: '<img src="assets/in_patient_icon.png?v=6" alt="In-Patient" class="service-icon-img" />'
        },
        {
            key: 'ot',
            label: 'Operation Theater',
            desc: 'Modern, sterile OTs ready for both emergency and planned surgeries.',
            next: 'Emergency Care',
            shortLabel: 'OT',
            icon: '<img src="assets/ot_icon.png?v=11" alt="OT" class="service-icon-img" />'
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
        let resumeTimeout;

        segments.forEach((segment, index) => {
            // Position segments in a circle
            // -90deg offset to start at top (12 o'clock)
            const angle = (index * anglePerSegment) - 90;

            // Use transforms to position
            segment.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`;

            // Inject PNG Icon from Data (Replaces SVG)
            const data = services[index];
            const iconContainer = segment.querySelector('.segment-icon');
            if (data && iconContainer) {
                // Use the string from data.icon which is <img ... class="service-icon-img" />
                // Use a slightly different class or style if needed, but existing .service-icon-img rule should work.
                // We might want to remove the specific class 'service-icon-img' from the ring if it conflicts, 
                // but currently .service-icon-img is sized 48px which fits perfectly in 60px container.
                iconContainer.innerHTML = data.icon;
            }

            // Add hover/click listeners
            // Resume animation automatically after interaction to prevent "stuck" state
            const handleInteraction = () => {
                isPaused = true;
                setActiveService(index);

                // Clear any pending resume
                if (resumeTimeout) clearTimeout(resumeTimeout);

                // Auto-resume after 4 seconds of inactivity
                resumeTimeout = setTimeout(() => {
                    isPaused = false;
                }, 4000);
            };

            segment.onmouseenter = handleInteraction;
            segment.onclick = handleInteraction; // For touch devices explicitly

            segment.onmouseleave = () => {
                // Determine behavior on leave: 
                // fast resume? or keep the 4s buffer? 
                // Let's keep the buffer to allow reading unless they move out.
                // Actually, if mouse leaves, we can resume sooner.
                // But specifically for MOBILE tap, there is no mouseleave.
                // So the timeout in handleInteraction is key for mobile.
                // For desktop, mouseleave can resume immediately.
                if (!isMobile) {
                    if (resumeTimeout) clearTimeout(resumeTimeout);
                    isPaused = false;
                }
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
