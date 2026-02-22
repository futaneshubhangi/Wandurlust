const adminOwnerId = "699963d8649e48b054d72da8";

const listingsWithOwner = [

  {
    title: "Admin Royal Palace Stay Jaipur",
    description: "Heritage palace stay curated by admin.",
    image: {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      filename: "unsplash"
    },
    price: 7500,
    location: "Jaipur",
    country: "India",
    category: "Trending",
    geometry: {
      type: "Point",
      coordinates: [75.7873, 26.9124]
    },
    owner: adminOwnerId
  },

  {
    title: "Admin Lake View House Udaipur",
    description: "Lake-facing luxury house with royal vibes.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      filename: "unsplash"
    },
    price: 8200,
    location: "Udaipur",
    country: "India",
    category: "Nature",
    geometry: {
      type: "Point",
      coordinates: [73.7125, 24.5854]
    },
    owner: adminOwnerId
  },

  {
    title: "Admin Snow Cottage Manali",
    description: "Snow-covered wooden cottage in Manali.",
    image: {
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      filename: "unsplash"
    },
    price: 5500,
    location: "Manali",
    country: "India",
    category: "Mountains",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2432]
    },
    owner: adminOwnerId
  },

  {
    title: "Admin Desert Safari Camp Jaisalmer",
    description: "Luxury desert camping experience.",
    image: {
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      filename: "unsplash"
    },
    price: 4200,
    location: "Jaisalmer",
    country: "India",
    category: "Camping",
    geometry: {
      type: "Point",
      coordinates: [70.9083, 26.9157]
    },
    owner: adminOwnerId
  },

  {
    title: "Admin Tea Estate Stay Munnar",
    description: "Stay amidst lush green tea plantations.",
    image: {
      url: "https://images.unsplash.com/photo-1499696010181-8b6b7cc9f6d3",
      filename: "unsplash"
    },
    price: 4800,
    location: "Munnar",
    country: "India",
    category: "Nature",
    geometry: {
      type: "Point",
      coordinates: [77.0601, 10.0889]
    },
    owner: adminOwnerId
  },

  {
    title: "Admin Backwater Villa Alleppey",
    description: "Private villa on Kerala backwaters.",
    image: {
      url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
      filename: "unsplash"
    },
    price: 6200,
    location: "Alleppey",
    country: "India",
    category: "Beach",
    geometry: {
      type: "Point",
      coordinates: [76.3388, 9.4981]
    },
    owner: adminOwnerId
  },

  {
    title: "Admin Riverfront Homestay Rishikesh",
    description: "Peaceful homestay near Ganga river.",
    image: {
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb",
      filename: "unsplash"
    },
    price: 3900,
    location: "Rishikesh",
    country: "India",
    category: "Nature",
    geometry: {
      type: "Point",
      coordinates: [78.2676, 30.0869]
    },
    owner: adminOwnerId
  },

  {
    title: "Admin Forest Lodge Tadoba",
    description: "Wildlife forest lodge near tiger reserve.",
    image: {
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      filename: "unsplash"
    },
    price: 4600,
    location: "Tadoba",
    country: "India",
    category: "Nature",
    geometry: {
      type: "Point",
      coordinates: [79.3000, 20.2287]
    },
    owner: adminOwnerId
  },

  {
    title: "Admin City Penthouse Bengaluru",
    description: "Luxury penthouse in tech city.",
    image: {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      filename: "unsplash"
    },
    price: 8800,
    location: "Bengaluru",
    country: "India",
    category: "City",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716]
    },
    owner: adminOwnerId
  },

  {
    title: "Admin Cliffside Stay Varkala",
    description: "Cliff-facing beach stay with sunset views.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "unsplash"
    },
    price: 5300,
    location: "Varkala",
    country: "India",
    category: "Beach",
    geometry: {
      type: "Point",
      coordinates: [76.7060, 8.7379]
    },
    owner: adminOwnerId
  }

];

module.exports = { data: listingsWithOwner };