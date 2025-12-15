const hospitalDetails = {
  // Hospital Basic Info
  name: 'AR Hospital',
  location: 'Mysuru, Karnataka',
  established: 2015,
  
  // Contact Information
  contact: {
    primaryPhone: '+91 9008994827',
    emergencyPhone: '0821-3501645',
    email: 'info@arhospital.com',
    website: 'www.arhospital.com',
    address: '123 Medical Road, Mysuru - 570001, Karnataka',
    coordinates: {
      lat: 12.2958,
      lng: 76.6394
    }
  },

  // Working Hours
  hours: {
    emergency: '24/7 Open',
    outpatient: '9:00 AM - 5:00 PM',
    inpatient: '24/7',
    daysOpen: 'Monday - Saturday',
    sunday: 'Emergency Only'
  },

  // Hospital Features
  features: [
    {
      icon: '🏥',
      title: 'State-of-the-Art Facilities',
      description: '500+ bed capacity with ICU, NICU, and operation theaters'
    },
    {
      icon: '👨‍⚕️',
      title: '21 Specialist Doctors',
      description: 'Expert consultants across all major medical fields'
    },
    {
      icon: '🚑',
      title: '24/7 Ambulance Service',
      description: 'Emergency response within 15 minutes'
    },
    {
      icon: '🔬',
      title: 'Advanced Diagnostics',
      description: 'MRI, CT Scan, Digital X-Ray, Ultrasound, Lab Services'
    },
    {
      icon: '💊',
      title: 'In-House Pharmacy',
      description: 'Complete range of medicines and medical supplies'
    },
    {
      icon: '🩺',
      title: 'Telemedicine Available',
      description: 'Online consultations with our specialists'
    }
  ],

  // Departments
  departments: [
    {
      name: 'General Medicine',
      description: 'Comprehensive primary care and internal medicine',
      doctors: ['Dr. Ramya - General Physician', 'Dr. Arun - Physician', 'Dr. Abhilash - Physician', 'Dr. Yogesh - Physician'],
      icon: '💊'
    },
    {
      name: 'Emergency Care',
      description: '24/7 emergency medical services and trauma care',
      doctors: ['Dr. Nitish - Intensivist', 'Emergency Team Available Round-the-clock'],
      icon: '🚨'
    },
    {
      name: 'Surgery',
      description: 'General and specialized surgical procedures',
      doctors: ['Dr. Sachin HM - General Surgeon', 'Dr. Lokesh - General Surgeon', 'Dr. Chandan - Vascular Surgeon'],
      icon: '🔪'
    },
    {
      name: 'Orthopedics',
      description: 'Bone, joint, and musculoskeletal disorders',
      doctors: ['Dr. Madhuram Chowdary - Orthopedic Specialist'],
      icon: '🦴'
    },
    {
      name: 'Gynecology & Obstetrics',
      description: 'Women\'s health, pregnancy, and delivery care',
      doctors: ['Dr. Keerthi MS - Gynecologist', 'Dr. Geetha - Gynaecologist'],
      icon: '👶'
    },
    {
      name: 'Cardiology',
      description: 'Heart and cardiovascular disease treatment',
      doctors: ['Cardiology Team Available'],
      icon: '❤️'
    },
    {
      name: 'Neurology',
      description: 'Neurological disorders and brain treatments',
      doctors: ['Dr. Harsha Huliappa - Neurologist', 'Dr. Punith - Neurologist'],
      icon: '🧠'
    },
    {
      name: 'Pediatrics',
      description: 'Specialized care for infants and children',
      doctors: ['Pediatric Team Available'],
      icon: '🍼'
    },
    {
      name: 'Dermatology',
      description: 'Skin diseases and cosmetic treatments',
      doctors: ['Dr. Madhuri - Dermatologist'],
      icon: '💆'
    },
    {
      name: 'Psychiatry',
      description: 'Mental health and behavioral care',
      doctors: ['Dr. Manjushree - Psychiatrist'],
      icon: '🧠'
    },
    {
      name: 'Pulmonology',
      description: 'Respiratory and lung diseases',
      doctors: ['Dr. Lakshmi Narayan - Pulmonologist'],
      icon: '💨'
    },
    {
      name: 'Urology',
      description: 'Urinary tract and male reproductive health',
      doctors: ['Dr. Mohan - Urologist'],
      icon: '⚕️'
    },
    {
      name: 'Plastic Surgery',
      description: 'Reconstructive and cosmetic surgery',
      doctors: ['Dr. Vijay Kumar - Plastic Surgeon', 'Dr. Chethan - Plastic Surgeon'],
      icon: '✨'
    },
    {
      name: 'Ophthalmology',
      description: 'Eye care and vision treatment',
      doctors: ['Dr. Pooja - Ophthalmologist'],
      icon: '👁️'
    },
    {
      name: 'ENT',
      description: 'Ear, nose, and throat specialist care',
      doctors: ['Dr. Abhilash (2nd) - ENT Specialist'],
      icon: '👂'
    },
    {
      name: 'Vascular Surgery',
      description: 'Blood vessel and vascular disorders',
      doctors: ['Dr. Chandan - Vascular Surgeon'],
      icon: '🩸'
    }
  ],

  // All Doctors with Details
  doctors: [
    {
      id: 1,
      name: 'Dr. Madhuram Chowdary',
      specialty: 'Orthopedic Surgeon',
      department: 'Orthopedics',
      experience: '15+ years',
      qualification: 'MS Orthopedics, AIIMS Delhi',
      consultationFee: '₹500',
      timings: 'Mon-Fri: 10 AM - 1 PM, 3 PM - 6 PM',
      image: '/doctors/madhuram.jpg',
      bio: 'Expert in joint replacement, sports medicine, and trauma surgery'
    },
    {
      id: 2,
      name: 'Dr. Keerthi MS',
      specialty: 'Gynecologist & Obstetrician',
      department: 'Gynecology & Obstetrics',
      experience: '12+ years',
      qualification: 'MD Obstetrics & Gynecology, Bangalore Medical College',
      consultationFee: '₹400',
      timings: 'Mon-Sat: 9 AM - 12 PM, 4 PM - 7 PM',
      image: '/doctors/keerthi.jpg',
      bio: 'Specialized in high-risk pregnancies and minimally invasive gynecological procedures'
    },
    {
      id: 3,
      name: 'Dr. Sachin HM',
      specialty: 'General Surgeon',
      department: 'Surgery',
      experience: '14+ years',
      qualification: 'MS General Surgery, RGUHS',
      consultationFee: '₹500',
      timings: 'Tue-Sat: 10 AM - 1 PM, 5 PM - 8 PM',
      image: '/doctors/sachin.jpg',
      bio: 'Experienced in laparoscopic surgery, appendectomy, and gastrointestinal surgery'
    },
    {
      id: 4,
      name: 'Dr. Lokesh',
      specialty: 'General Surgeon',
      department: 'Surgery',
      experience: '10+ years',
      qualification: 'MS Surgery, Rajendra Institute',
      consultationFee: '₹400',
      timings: 'Mon, Wed, Fri: 11 AM - 2 PM, 6 PM - 8 PM',
      image: '/doctors/lokesh.jpg',
      bio: 'Specialist in emergency and trauma surgery'
    },
    {
      id: 5,
      name: 'Dr. Geetha',
      specialty: 'Gynecologist',
      department: 'Gynecology & Obstetrics',
      experience: '11+ years',
      qualification: 'DM Obs & Gyn, Government Medical College',
      consultationFee: '₹350',
      timings: 'Mon-Thu: 9 AM - 1 PM, 4 PM - 6 PM',
      image: '/doctors/geetha.jpg',
      bio: 'Expert in family planning and reproductive health'
    },
    {
      id: 6,
      name: 'Dr. Vijay Kumar',
      specialty: 'Plastic Surgeon',
      department: 'Plastic Surgery',
      experience: '13+ years',
      qualification: 'MS Plastic Surgery, NIMHANS',
      consultationFee: '₹600',
      timings: 'Wed-Sat: 10 AM - 1 PM, 4 PM - 7 PM',
      image: '/doctors/vijay.jpg',
      bio: 'Specialist in aesthetic and reconstructive surgery'
    },
    {
      id: 7,
      name: 'Dr. Chethan',
      specialty: 'Plastic Surgeon',
      department: 'Plastic Surgery',
      experience: '9+ years',
      qualification: 'MS Plastic Surgery, RGUHS',
      consultationFee: '₹500',
      timings: 'Mon-Thu: 2 PM - 6 PM, Fri-Sat: 10 AM - 2 PM',
      image: '/doctors/chethan.jpg',
      bio: 'Experienced in burn management and hand surgery'
    },
    {
      id: 8,
      name: 'Dr. Ramya',
      specialty: 'General Physician',
      department: 'General Medicine',
      experience: '8+ years',
      qualification: 'MD General Medicine, Bangalore University',
      consultationFee: '₹300',
      timings: 'Mon-Sat: 9 AM - 12 PM, 4 PM - 7 PM',
      image: '/doctors/ramya.jpg',
      bio: 'Specialist in chronic disease management and preventive healthcare'
    },
    {
      id: 9,
      name: 'Dr. Arun',
      specialty: 'Physician',
      department: 'General Medicine',
      experience: '7+ years',
      qualification: 'MD Internal Medicine, RGUHS',
      consultationFee: '₹250',
      timings: 'Tue-Sat: 10 AM - 1 PM, 5 PM - 8 PM',
      image: '/doctors/arun.jpg',
      bio: 'Expert in respiratory and infectious diseases'
    },
    {
      id: 10,
      name: 'Dr. Chandan',
      specialty: 'Vascular Surgeon',
      department: 'Surgery',
      experience: '16+ years',
      qualification: 'MS Surgery, MCh Vascular Surgery, AIIMS',
      consultationFee: '₹700',
      timings: 'Mon, Wed, Fri: 10 AM - 1 PM, 4 PM - 6 PM',
      image: '/doctors/chandan.jpg',
      bio: 'Leading specialist in vascular and endovascular surgery'
    },
    {
      id: 11,
      name: 'Dr. Harsha Huliappa',
      specialty: 'Neurologist',
      department: 'Neurology',
      experience: '12+ years',
      qualification: 'MD Neurology, National Institute of Mental Health & Neurosciences',
      consultationFee: '₹500',
      timings: 'Thu-Sat: 10 AM - 1 PM, 4 PM - 7 PM',
      image: '/doctors/harsha.jpg',
      bio: 'Specialist in epilepsy, stroke, and movement disorders'
    },
    {
      id: 12,
      name: 'Dr. Punith',
      specialty: 'Neurologist',
      department: 'Neurology',
      experience: '9+ years',
      qualification: 'DM Neurology, NIMHANS',
      consultationFee: '₹400',
      timings: 'Mon-Wed: 2 PM - 6 PM, Fri-Sat: 10 AM - 1 PM',
      image: '/doctors/punith.jpg',
      bio: 'Expert in headache management and neurological emergencies'
    },
    {
      id: 13,
      name: 'Dr. Madhuri',
      specialty: 'Dermatologist',
      department: 'Dermatology',
      experience: '10+ years',
      qualification: 'MD Dermatology, Bangalore Medical College',
      consultationFee: '₹350',
      timings: 'Tue-Sat: 11 AM - 2 PM, 5 PM - 8 PM',
      image: '/doctors/madhuri.jpg',
      bio: 'Specialist in skin diseases and cosmetic dermatology'
    },
    {
      id: 14,
      name: 'Dr. Manjushree',
      specialty: 'Psychiatrist',
      department: 'Psychiatry',
      experience: '11+ years',
      qualification: 'MD Psychiatry, Government Medical College',
      consultationFee: '₹400',
      timings: 'Mon-Fri: 10 AM - 1 PM, 4 PM - 6 PM',
      image: '/doctors/manjushree.jpg',
      bio: 'Expert in depression, anxiety, and behavioral disorders'
    },
    {
      id: 15,
      name: 'Dr. Lakshmi Narayan',
      specialty: 'Pulmonologist',
      department: 'Pulmonology',
      experience: '13+ years',
      qualification: 'MD Respiratory Medicine, RGUHS',
      consultationFee: '₹450',
      timings: 'Wed-Sat: 10 AM - 1 PM, 3 PM - 6 PM',
      image: '/doctors/lakshmi.jpg',
      bio: 'Specialist in asthma, COPD, and lung cancer'
    },
    {
      id: 16,
      name: 'Dr. Abhilash (1st)',
      specialty: 'Physician',
      department: 'General Medicine',
      experience: '6+ years',
      qualification: 'MD General Medicine, Rajendra Medical College',
      consultationFee: '₹250',
      timings: 'Mon-Sat: 9 AM - 12 PM, 6 PM - 8 PM',
      image: '/doctors/abhilash1.jpg',
      bio: 'Focused on preventive medicine and health counseling'
    },
    {
      id: 17,
      name: 'Dr. Pooja',
      specialty: 'Ophthalmologist',
      department: 'Ophthalmology',
      experience: '8+ years',
      qualification: 'MD Ophthalmology, RGUHS',
      consultationFee: '₹300',
      timings: 'Mon-Fri: 10 AM - 1 PM, 4 PM - 7 PM',
      image: '/doctors/pooja.jpg',
      bio: 'Expert in cataract surgery and refractive procedures'
    },
    {
      id: 18,
      name: 'Dr. Nitish',
      specialty: 'Intensivist (Critical Care)',
      department: 'Emergency Care',
      experience: '14+ years',
      qualification: 'MD Critical Care, AIIMS',
      consultationFee: '₹600',
      timings: '24/7 Available - ICU Specialist',
      image: '/doctors/nitish.jpg',
      bio: 'Expert in critical care management and emergency medicine'
    },
    {
      id: 19,
      name: 'Dr. Mohan',
      specialty: 'Urologist',
      department: 'Urology',
      experience: '11+ years',
      qualification: 'MS Urology, Government Medical College',
      consultationFee: '₹450',
      timings: 'Tue-Fri: 10 AM - 1 PM, 5 PM - 7 PM',
      image: '/doctors/mohan.jpg',
      bio: 'Specialist in kidney stones, prostate, and urological cancer'
    },
    {
      id: 20,
      name: 'Dr. Abhilash (2nd)',
      specialty: 'ENT Specialist',
      department: 'ENT',
      experience: '8+ years',
      qualification: 'MS ENT, RGUHS',
      consultationFee: '₹350',
      timings: 'Mon-Fri: 11 AM - 2 PM, 5 PM - 7 PM',
      image: '/doctors/abhilash2.jpg',
      bio: 'Specialist in ear, nose, throat disorders and endoscopic procedures'
    },
    {
      id: 21,
      name: 'Dr. Yogesh',
      specialty: 'Physician',
      department: 'General Medicine',
      experience: '5+ years',
      qualification: 'MD General Medicine, RGUHS',
      consultationFee: '₹200',
      timings: 'Mon-Sat: 10 AM - 2 PM, 7 PM - 9 PM',
      image: '/doctors/yogesh.jpg',
      bio: 'Enthusiastic about patient care and health education'
    }
  ],

  // Services
  services: [
    {
      title: 'Emergency Medical Care',
      description: '24/7 emergency department with trauma and ICU facilities',
      icon: '🚨'
    },
    {
      title: 'Inpatient Services',
      description: 'Comfortable wards with experienced nursing care',
      icon: '🛏️'
    },
    {
      title: 'Outpatient Clinics',
      description: 'Specialized consultations across all departments',
      icon: '🏥'
    },
    {
      title: 'Diagnostic Services',
      description: 'MRI, CT Scan, X-Ray, Ultrasound, and pathology labs',
      icon: '🔬'
    },
    {
      title: 'Surgical Services',
      description: 'Advanced operation theaters with latest equipment',
      icon: '🔪'
    },
    {
      title: 'Pharmacy Services',
      description: 'Complete range of medicines and medical supplies',
      icon: '💊'
    },
    {
      title: 'Ambulance Services',
      description: 'Fast and equipped ambulances for medical transport',
      icon: '🚑'
    },
    {
      title: 'Telemedicine',
      description: 'Online consultations with our specialist doctors',
      icon: '💻'
    }
  ],

  // Facilities
  facilities: {
    beds: 500,
    icuBeds: 50,
    nicuBeds: 30,
    operatingTheaters: 8,
    labs: 'Advanced pathology laboratory',
    imaging: ['MRI', 'CT Scan', 'Digital X-Ray', '3D Ultrasound'],
    pharmacy: 'In-house pharmacy with 24/7 availability',
    ambulances: 15
  },

  // Insurance
  acceptedInsurance: [
    'AROGYA SANJEEVANI',
    'HEALTH COMPANION',
    'MEDASSIST',
    'TPA NETWORK',
    'UNITED INDIA',
    'NATIONAL INSURANCE',
    'ICICI LOMBARD',
    'BAJAJ ALLIANZ',
    'SBI GENERAL',
    'NEW INDIA ASSURANCE'
  ],

  // Testimonials
  testimonials: [
    {
      name: 'Rajesh Kumar',
      feedback: 'Excellent treatment and very caring staff. Dr. Madhuram is truly an expert!',
      rating: 5,
      department: 'Orthopedics'
    },
    {
      name: 'Priya Sharma',
      feedback: 'Safe delivery with professional team. Thank you Dr. Keerthi and team!',
      rating: 5,
      department: 'Gynecology'
    },
    {
      name: 'Arvind Patel',
      feedback: 'Emergency response was quick. Highly satisfied with the treatment.',
      rating: 5,
      department: 'Emergency'
    }
  ]
};
