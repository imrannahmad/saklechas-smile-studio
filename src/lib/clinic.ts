export const CLINIC = {
  name: "Saklecha's Dental and Braces Clinic & Implant Centre",
  shortName: "Saklecha's Dental",
  phone: "+91 8989121916",
  phoneRaw: "+918989121916",
  whatsapp: "918989121916",
  address: "Shop 3, Greater Brajeshwari, Pipliyahana Rd, Indore, MP 452016",
  mapsUrl:
    "https://google.com/maps/place/Saklecha%27s+Dental+and+Braces+Clinic+%26Implant+Centre",
  mapsEmbed:
    "https://www.google.com/maps?q=Saklecha%27s+Dental+and+Braces+Clinic+%26+Implant+Centre,+Pipliyahana+Rd,+Indore&output=embed",
  hours: [
    { day: "Mon – Sat", time: "10:00 AM – 2:00 PM, 5:00 PM – 9:00 PM" },
    { day: "Sunday", time: "By Appointment" },
  ],
  rating: "4.9",
  patients: "2000+",
  experience: "5+",
  instagram: "https://instagram.com",
};

export const SERVICES = [
  {
    slug: "root-canal",
    title: "Root Canal Treatment",
    short: "Painless single-sitting RCT to save your natural tooth.",
    benefits: [
      "Single-sitting RCT available",
      "Advanced rotary endodontics",
      "Virtually painless with modern anaesthesia",
      "Saves your natural tooth",
    ],
  },
  {
    slug: "braces",
    title: "Braces & Aligners",
    short: "Metal, ceramic and clear aligners for a confident smile.",
    benefits: [
      "Metal, ceramic & invisible aligners",
      "Customised treatment plan",
      "Easy EMI options",
      "Faster, predictable results",
    ],
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    short: "Permanent tooth replacement that looks and feels natural.",
    benefits: [
      "World-class implant systems",
      "Same-day implants available",
      "Lifelong replacement solution",
      "Performed by certified implantologist",
    ],
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    short: "Brighter, whiter teeth in a single visit.",
    benefits: [
      "Visible results in 1 sitting",
      "Safe on enamel",
      "Take-home kits available",
      "Long-lasting whiteness",
    ],
  },
  {
    slug: "tooth-extraction",
    title: "Tooth Extraction",
    short: "Quick, painless removal including wisdom teeth.",
    benefits: [
      "Atraumatic extractions",
      "Wisdom tooth specialists",
      "Minimal swelling protocol",
      "Implant-ready healing",
    ],
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    short: "Gentle dental care for kids in a friendly environment.",
    benefits: [
      "Child-friendly clinic",
      "Preventive sealants & fluoride",
      "Cavity treatment",
      "Stress-free first visits",
    ],
  },
  {
    slug: "dentures",
    title: "Dentures",
    short: "Comfortable, natural-looking complete and partial dentures.",
    benefits: [
      "Premium acrylic & flexible options",
      "Perfect fit guarantee",
      "Natural aesthetics",
      "Quick turnaround",
    ],
  },
  {
    slug: "smile-makeover",
    title: "Smile Makeover",
    short: "Veneers, crowns & whitening to redesign your smile.",
    benefits: [
      "Digital smile design",
      "Premium veneers & crowns",
      "Personalised aesthetics",
      "Confidence-boosting results",
    ],
  },
] as const;

export const SERVICE_FAQS: Record<string, { q: string; a: string }[]> = {
  "root-canal": [
    { q: "Is root canal painful?", a: "Modern RCT is virtually painless. We use effective local anaesthesia so you feel no pain during the procedure." },
    { q: "How many sittings will it take?", a: "Most cases finish in a single sitting. Complex cases may need 2 visits." },
  ],
  braces: [
    { q: "How long does braces treatment take?", a: "Most patients complete treatment in 12–24 months depending on case complexity." },
    { q: "Do you offer invisible aligners?", a: "Yes, we offer clear aligners that are virtually invisible and removable." },
  ],
  "dental-implants": [
    { q: "How long do implants last?", a: "With proper care, dental implants can last a lifetime." },
    { q: "Am I eligible for implants?", a: "Most adults with healthy gums and adequate bone are candidates. We confirm with a CBCT scan." },
  ],
  "teeth-whitening": [
    { q: "Is whitening safe?", a: "Yes, our in-clinic whitening is FDA-approved and safe on enamel." },
    { q: "How long do results last?", a: "Results typically last 6–12 months depending on diet and habits." },
  ],
  "tooth-extraction": [
    { q: "Will extraction hurt?", a: "No. Local anaesthesia ensures a completely pain-free experience." },
    { q: "What is the recovery time?", a: "Most patients return to normal routine within 24–48 hours." },
  ],
  "pediatric-dentistry": [
    { q: "From what age should kids visit a dentist?", a: "We recommend the first visit by age 1, or when the first tooth appears." },
  ],
  dentures: [
    { q: "How long do dentures take?", a: "Typically 5–7 days from impression to delivery." },
  ],
  "smile-makeover": [
    { q: "What does a smile makeover include?", a: "It can combine veneers, crowns, whitening and gum contouring based on your goals." },
  ],
};