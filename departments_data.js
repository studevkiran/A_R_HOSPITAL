// Updated Departments Data for A R Hospital - 14 Departments, 20 Doctors
const departmentsData = {
    orthopedics: {
        icon: '🦴',
        title: 'Orthopedics Department',
        description: 'Comprehensive bone and joint care with advanced surgical and non-surgical treatment options.',
        features: [
            'Joint Replacement Surgery',
            'Sports Medicine',
            'Trauma & Fracture Care',
            'Spine Surgery'
        ],
        doctors: [
            { name: 'Dr. Madhuram Chowdry', specialty: 'Orthopedic Surgeon', image: '👨‍⚕️' }
        ]
    },
    general_surgery: {
        icon: '⚕️',
        title: 'General Surgery Department',
        description: 'Advanced surgical procedures with minimally invasive techniques for faster recovery.',
        features: [
            'Laparoscopic Surgery',
            'Emergency Surgery',
            'Hernia Repair',
            'Gastrointestinal Surgery'
        ],
        doctors: [
            { name: 'Dr. Sachin', specialty: 'General Surgery', image: '👨‍⚕️' }
        ]
    },
    pediatrics: {
        icon: '👶',
        title: 'Pediatrics Department',
        description: 'Specialized healthcare for infants, children, and adolescents with compassionate care.',
        features: [
            'Newborn Care',
            'Child Vaccinations',
            'Growth Monitoring',
            'Pediatric Emergencies'
        ],
        doctors: [
            { name: 'Dr. Banu', specialty: 'Pediatric', image: '👩‍⚕️' },
            { name: 'Dr. Rajshekhar BK', specialty: 'Pediatric', image: '👨‍⚕️' },
            { name: 'Dr. Anjana S Mavinahalli', specialty: 'Pediatric', image: '👩‍⚕️' }
        ]
    },
    intensive_care: {
        icon: '🏥',
        title: 'Intensive Care Unit',
        description: '24/7 critical care for patients requiring intensive monitoring and advanced life support.',
        features: [
            'Critical Care Management',
            'Ventilator Support',
            'Post-Surgical Care',
            'Emergency Response'
        ],
        doctors: [
            { name: 'Dr. Krupa Subramanya', specialty: 'Intensiveist', image: '👩‍⚕️' }
        ]
    },
    anesthesiology: {
        icon: '💉',
        title: 'Anesthesiology Department',
        description: 'Expert anesthesia services ensuring safe and pain-free surgical procedures.',
        features: [
            'General Anesthesia',
            'Regional Anesthesia',
            'Pain Management',
            'Sedation Services'
        ],
        doctors: [
            { name: 'Dr. Lingaraju', specialty: 'Anesthetist', image: '👨‍⚕️' },
            { name: 'Dr. Rathnamala', specialty: 'Anesthetist', image: '👩‍⚕️' },
            { name: 'Dr. Shivakumar', specialty: 'Anesthetist', image: '👨‍⚕️' }
        ]
    },
    omfs_surgery: {
        icon: '🦷',
        title: 'OMFS Surgery Department',
        description: 'Oral and Maxillofacial Surgery for jaw, face, and dental-related surgical procedures.',
        features: [
            'Jaw Surgery',
            'Facial Trauma Repair',
            'Dental Implants',
            'TMJ Disorders'
        ],
        doctors: [
            { name: 'Dr. Adarsh Chowdry', specialty: 'OMFS Surgeon', image: '👨‍⚕️' },
            { name: 'Dr. Lakshith Biddappa', specialty: 'OMFS Surgeon', image: '👨‍⚕️' }
        ]
    },
    neurosurgery: {
        icon: '🧠',
        title: 'Neurosurgery Department',
        description: 'Advanced surgical interventions for complex brain and spine conditions.',
        features: [
            'Brain Tumor Surgery',
            'Spine Surgery',
            'Trauma Surgery',
            'Minimally Invasive Neurosurgery'
        ],
        doctors: [
            { name: 'Dr. Punith', specialty: 'Neuro Surgeon', image: '👨‍⚕️' }
        ]
    },
    physiotherapy: {
        icon: '🏃',
        title: 'Physiotherapy Department',
        description: 'Comprehensive rehabilitation services to restore movement and reduce pain.',
        features: [
            'Sports Injury Rehabilitation',
            'Post-Surgical Recovery',
            'Pain Management',
            'Mobility Training'
        ],
        doctors: [
            { name: 'Dr. Vinod Kumar Seervi', specialty: 'Physiotherapist', image: '👨‍⚕️' }
        ]
    },
    urology: {
        icon: '💧',
        title: 'Urology Department',
        description: 'Surgical and medical diseases of the male and female urinary-tract system.',
        features: [
            'Kidney Stone Treatment',
            'Prostate Care',
            'Urinary Infections',
            'Male Infertility'
        ],
        doctors: [
            { name: 'Dr. Kiran Shetty', specialty: 'Urology', image: '👨‍⚕️' },
            { name: 'Dr. Abhijith', specialty: 'Urology', image: '👨‍⚕️' }
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
        ],
        doctors: [
            { name: 'Dr. Chandrika', specialty: 'Gynecology', image: '👩‍⚕️' }
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
        ],
        doctors: [
            { name: 'Dr. Pujith', specialty: 'Dermatologist', image: '👨‍⚕️' }
        ]
    },
    general_medicine: {
        icon: '💊',
        title: 'General Medicine Department',
        description: 'Comprehensive primary care, chronic disease management, and preventive healthcare.',
        features: [
            'Health Checkups',
            'Fever & Infection Treatment',
            'Diabetes Management',
            'Hypertension Care'
        ],
        doctors: [
            { name: 'Dr. Ramya', specialty: 'General Physician', image: '👩‍⚕️' }
        ]
    },
    pulmonology: {
        icon: '🫁',
        title: 'Pulmonology Department',
        description: 'Diagnosis and treatment of respiratory system diseases and sleep disorders.',
        features: [
            'Asthma/COPD Management',
            'Lung Function Tests',
            'Bronchoscopy',
            'Sleep Medicine'
        ],
        doctors: [
            { name: 'Dr. Sushma', specialty: 'Pulmonology', image: '👩‍⚕️' }
        ]
    },
    ent: {
        icon: '👂',
        title: 'ENT Department',
        description: 'Comprehensive ear, nose, and throat care including diagnostics and surgical treatments.',
        features: [
            'Hearing Tests',
            'Sinus Treatment',
            'Tonsillectomy',
            'Voice Disorders'
        ],
        doctors: [
            { name: 'Dr. Abhilash', specialty: 'ENT', image: '👨‍⚕️' }
        ]
    }
};
