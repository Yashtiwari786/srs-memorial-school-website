// Static data for S.R.S Memorial Kids Garden School

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string; // e.g. "22 Apr"
  month: string; // e.g. "APR"
  day: string; // e.g. "22"
  year: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

export interface ValueCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const coreValues: ValueCard[] = [
  {
    id: "integrity",
    title: "Integrity",
    description: "Doing the right thing even when no one is watching. Honesty is our foundation.",
    iconName: "Shield",
  },
  {
    id: "respect",
    title: "Respect",
    description: "Valuing diversity, listening to others, and treating everyone with kindness and dignity.",
    iconName: "Heart",
  },
  {
    id: "responsibility",
    title: "Responsibility",
    description: "Taking ownership of actions, embracing duties, and caring for our environment.",
    iconName: "UserCheck",
  },
  {
    id: "excellence",
    title: "Excellence",
    description: "Striving to do our best in academics, co-curriculars, and character development.",
    iconName: "Award",
  },
  {
    id: "compassion",
    title: "Compassion",
    description: "Showing empathy, helping others in need, and fostering a supportive community.",
    iconName: "HeartHandshake",
  },
];

export const facilities: Facility[] = [
  {
    id: "library",
    title: "Library",
    description: "A treasure trove of diverse books, periodicals, and resources to foster a life-long love for reading.",
    iconName: "BookOpen",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600",
  },
  {
    id: "reading-corner",
    title: "Reading Corner",
    description: "Cozy, dedicated, and interactive spaces for our toddlers to explore colorful pictorial books.",
    iconName: "BookMarked",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600",
  },
  {
    id: "smart-classrooms",
    title: "Smart Classrooms",
    description: "Equipped with interactive audio-visual systems, making learning dynamic, visual, and highly engaging.",
    iconName: "MonitorPlay",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600",
  },
  {
    id: "play-area",
    title: "Play Area",
    description: "Safe, colorful indoor & outdoor spaces with modern play structures for early physical development.",
    iconName: "Smile",
    image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=600",
  },
  {
    id: "drinking-water",
    title: "Drinking Water",
    description: "RO purified, multi-stage filtered cold drinking water stations ensuring maximum health and hygiene.",
    iconName: "Droplet",
    image: "https://images.unsplash.com/photo-1608889175123-8ec330b86f84?q=80&w=600",
  },
  {
    id: "transport",
    title: "Transport Facility",
    description: "Safe, GPS-enabled school buses with trained drivers and helpers covering all major city routes.",
    iconName: "Bus",
    image: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=600",
  },
  {
    id: "generator",
    title: "Generator Backup",
    description: "100% silent power backup ensuring that fans, smart boards, and systems function without interruption.",
    iconName: "Zap",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600",
  },
  {
    id: "cctv",
    title: "CCTV Security",
    description: "24/7 high-definition camera surveillance across classrooms, play areas, corridors, and campus gates.",
    iconName: "ShieldAlert",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=600",
  },
];

export const events: EventItem[] = [
  {
    id: "earth-day",
    title: "Earth Day Celebration",
    date: "22",
    month: "APR",
    day: "22",
    year: "2026",
    description: "Our kids planted saplings, learned about recycling, and made colorful paintings to save Mother Earth.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600",
  },
  {
    id: "independence-day",
    title: "Independence Day",
    date: "15",
    month: "AUG",
    day: "15",
    year: "2025",
    description: "A patriotic morning with flag hoisting, national anthem, beautiful drill displays, and freedom songs.",
    image: "https://images.unsplash.com/photo-1532375811409-90d115934665?q=80&w=600",
  },
  {
    id: "teachers-day",
    title: "Teachers Day Celebration",
    date: "05",
    month: "SEP",
    day: "05",
    year: "2025",
    description: "Students put up a heartwarming cultural program and game show to express gratitude to their educators.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600",
  },
  {
    id: "republic-day",
    title: "Republic Day",
    date: "26",
    month: "JAN",
    day: "26",
    year: "2026",
    description: "Flag hoisting ceremony, cultural dances portraying unity in diversity, and awards for excellence.",
    image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=600",
  },
  {
    id: "christmas",
    title: "Christmas Celebration",
    date: "25",
    month: "DEC",
    day: "25",
    year: "2025",
    description: "Santa Claus distributed gifts, classes sang carols, and we held a special craft bazaar for charity.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600",
  },
  {
    id: "sports-day",
    title: "Annual Sports Day",
    date: "10",
    month: "FEB",
    day: "10",
    year: "2026",
    description: "Full day of action-packed track races, obstacle runs, team games, and parents' special fun events.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    category: "Activities",
    title: "Arts & Craft Workshop",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600",
  },
  {
    id: "g2",
    category: "Sports",
    title: "Athletics Practice",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600",
  },
  {
    id: "g3",
    category: "Classroom",
    title: "Interactive Storytelling Session",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600",
  },
  {
    id: "g4",
    category: "Celebrations",
    title: "Republic Day Parade",
    image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=600",
  },
  {
    id: "g5",
    category: "Annual Function",
    title: "Folk Dance Drama Performance",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600",
  },
  {
    id: "g6",
    category: "Classroom",
    title: "Science Experiments Lab",
    image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=600",
  },
  {
    id: "g7",
    category: "Sports",
    title: "Kids Playing Football",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600",
  },
  {
    id: "g8",
    category: "Activities",
    title: "Plantation Drive (Eco-Club)",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600",
  },
  {
    id: "g9",
    category: "Celebrations",
    title: "Christmas Carol Performance",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600",
  },
  {
    id: "g10",
    category: "Annual Function",
    title: "Music and Choir Show",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600",
  },
  {
    id: "g11",
    category: "Activities",
    title: "Sensory Play Sandbox",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600",
  },
  {
    id: "g12",
    category: "Classroom",
    title: "English Grammar Board Games",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Mrs. Neha Sharma",
    role: "Mother of Aarav (Class 2)",
    quote: "S.R.S Memorial Kids Garden has completely transformed Aarav's attitude towards school. The teachers are exceptionally patient and supportive, and the play-based method keeps him very excited to study daily.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150",
  },
  {
    id: "t2",
    name: "Mr. Deepak Verma",
    role: "Father of Riya (Class 5)",
    quote: "What stands out most is the focus on moral and ethical values alongside top-tier academics. The smart classrooms and clean playground make the school environment ideal. We highly recommend this institution.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
  },
  {
    id: "t3",
    name: "Mrs. Pooja Gupta",
    role: "Mother of Divya (Prep-2)",
    quote: "The safety standards, RO pure drinking water, active CCTV system, and reliable bus transport service give us total peace of mind as parents. Choosing S.R.S Memorial was the best decision for our daughter.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150",
  },
];
