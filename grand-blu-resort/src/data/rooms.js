const roomsData = [
  {
    id: 1,
    name: "Guest Room",
    description:
      "A bright and peaceful room perfect for solo travelers or couples. Features soft blue accents, a comfortable queen bed, and calming garden views.",
    specs: ["🛏 1 Queen Bed", "📐 25 m²", "🪟 Garden View"],
    image: "/images/guest-room.jpg",
    filters: { guests: 2, rooms: 1 },
  },
  {
    id: 2,
    name: "Family Room",
    description:
      "Spacious and sunlit, ideal for families or groups. Includes two double beds, cozy textiles, smart TV, and a private bathroom with a bathtub.",
    specs: ["🛏 2 Double Beds", "👨‍👩‍👧 Up to 4 Guests", "📺 Smart TV + Bathtub"],
    image: "/images/family-room.jpg",
    filters: { guests: 4, rooms: 2 },
  },
  {
    id: 3,
    name: "Sea View Suite",
    description:
      "Wake up to breathtaking panoramic sea views. This luxurious suite includes a king-sized bed and access to an outdoor pool area.",
    specs: ["🛏 1 King Bed", "🌅 Sea View", "🛁 Outdoor Pool Access"],
    image: "/images/sea-view-suite.jpg",
    filters: { guests: 2, rooms: 1 },
  },
  {
    id: 4,
    name: "Premium Room with Terrace",
    description:
      "A modern and stylish room with elegant coastal tones, featuring a private balcony and an in-room espresso machine for your morning ritual.",
    specs: ["🛏 1 King Bed", "🌿 Private Balcony", "☕ Espresso Machine"],
    image: "/images/premium-terrace.jpg",
    filters: { guests: 2, rooms: 1 },
  },
  {
    id: 5,
    name: "Luxury Executive Suite",
    description:
      "An open-plan suite with panoramic oceanfront views, a king bed and sofa bed, a dedicated workspace, and a private balcony for ultimate relaxation.",
    specs: [
      "🛏 King + Sofa Bed",
      "🖥 Desk & Lounge Area",
      "🌇 Oceanfront Balcony",
    ],
    image: "/images/executive-suite.jpg",
    filters: { guests: 4, rooms: 2 },
  },
];

export default roomsData;
