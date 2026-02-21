const sampleListings = [

/* ================= 🇮🇳 INDIA ================= */

{
  title: "Modern Apartment Pune",
  description: "Comfortable apartment in the heart of Pune.",
  image: { url: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1", filename: "unsplash" },
  price: 1500,
  location: "Pune",
  country: "India",
  category: "City",
  geometry: { type: "Point", coordinates: [73.8567, 18.5204] }
},
{
  title: "Luxury Sea View Mumbai",
  description: "Luxury apartment with stunning sea view.",
  image: { url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", filename: "unsplash" },
  price: 8000,
  location: "Mumbai",
  country: "India",
  category: "Trending",
  geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
},
{
  title: "Hill Cottage Lonavala",
  description: "Peaceful cottage surrounded by hills.",
  image: { url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c", filename: "unsplash" },
  price: 2200,
  location: "Lonavala",
  country: "India",
  category: "Mountains",
  geometry: { type: "Point", coordinates: [73.4072, 18.7546] }
},
{
  title: "Beach Hut Goa",
  description: "Relaxing beach hut near the sea.",
  image: { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", filename: "unsplash" },
  price: 3500,
  location: "Goa",
  country: "India",
  category: "Beach",
  geometry: { type: "Point", coordinates: [74.1240, 15.2993] }
},
{
  title: "Organic Farm Stay Nashik",
  description: "Experience peaceful rural farm life.",
  image: { url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6", filename: "unsplash" },
  price: 2800,
  location: "Nashik",
  country: "India",
  category: "Farms",
  geometry: { type: "Point", coordinates: [73.7898, 19.9975] }
},

/* ================= 🇺🇸 USA ================= */

{
  title: "Downtown Apartment New York",
  description: "Live in the heart of NYC.",
  image: { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", filename: "unsplash" },
  price: 9000,
  location: "New York",
  country: "USA",
  category: "City",
  geometry: { type: "Point", coordinates: [-74.0060, 40.7128] }
},
{
  title: "Beach House Malibu",
  description: "Luxury beach house with ocean views.",
  image: { url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb", filename: "unsplash" },
  price: 12000,
  location: "Malibu",
  country: "USA",
  category: "Beach",
  geometry: { type: "Point", coordinates: [-118.7798, 34.0259] }
},
{
  title: "Mountain Cabin Colorado",
  description: "Cozy mountain cabin retreat.",
  image: { url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb", filename: "unsplash" },
  price: 4500,
  location: "Colorado",
  country: "USA",
  category: "Mountains",
  geometry: { type: "Point", coordinates: [-105.7821, 39.5501] }
},

/* ================= 🇫🇷 FRANCE ================= */

{
  title: "Paris Romantic Studio",
  description: "Romantic studio near Eiffel Tower.",
  image: { url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", filename: "unsplash" },
  price: 7000,
  location: "Paris",
  country: "France",
  category: "Trending",
  geometry: { type: "Point", coordinates: [2.3522, 48.8566] }
},

/* ================= 🇮🇹 ITALY ================= */

{
  title: "Florence Heritage Villa",
  description: "Historic villa in Florence.",
  image: { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945", filename: "unsplash" },
  price: 6000,
  location: "Florence",
  country: "Italy",
  category: "Nature",
  geometry: { type: "Point", coordinates: [11.2558, 43.7696] }
},

/* ================= 🇨🇭 SWITZERLAND ================= */

{
  title: "Alpine Chalet Zermatt",
  description: "Snow-covered luxury chalet.",
  image: { url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", filename: "unsplash" },
  price: 11000,
  location: "Zermatt",
  country: "Switzerland",
  category: "Arctic",
  geometry: { type: "Point", coordinates: [7.7491, 46.0207] }
},

/* ================= 🇯🇵 JAPAN ================= */

{
  title: "Tokyo City Apartment",
  description: "Compact modern apartment.",
  image: { url: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c", filename: "unsplash" },
  price: 9500,
  location: "Tokyo",
  country: "Japan",
  category: "City",
  geometry: { type: "Point", coordinates: [139.6917, 35.6895] }
},

/* ================= 🌍 MORE COUNTRIES ================= */

{
  title: "Sydney Harbour Stay",
  description: "Harbour view apartment.",
  image: { url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9", filename: "unsplash" },
  price: 10000,
  location: "Sydney",
  country: "Australia",
  category: "Beach",
  geometry: { type: "Point", coordinates: [151.2093, -33.8688] }
},
{
  title: "Banff Mountain Cabin",
  description: "Cabin with stunning mountain views.",
  image: { url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb", filename: "unsplash" },
  price: 4000,
  location: "Banff",
  country: "Canada",
  category: "Mountains",
  geometry: { type: "Point", coordinates: [-115.5708, 51.1784] }
},
{
  title: "Bali Tropical Villa",
  description: "Private villa near beach.",
  image: { url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", filename: "unsplash" },
  price: 7000,
  location: "Bali",
  country: "Indonesia",
  category: "Beach",
  geometry: { type: "Point", coordinates: [115.1889, -8.4095] }
},
{
  title: "Dubai Smart Villa",
  description: "High-tech luxury villa.",
  image: { url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c", filename: "unsplash" },
  price: 15000,
  location: "Dubai",
  country: "UAE",
  category: "Amazing Tools",
  geometry: { type: "Point", coordinates: [55.2708, 25.2048] }
},
{
  title: "Cape Town Beach Stay",
  description: "Ocean-view beach house.",
  image: { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750", filename: "unsplash" },
  price: 6000,
  location: "Cape Town",
  country: "South Africa",
  category: "Beach",
  geometry: { type: "Point", coordinates: [18.4241, -33.9249] }
},
{
  title: "Queenstown Lake House",
  description: "Lakefront nature stay.",
  image: { url: "https://images.unsplash.com/photo-1499696010181-8b6b7cc9f6d3", filename: "unsplash" },
  price: 5500,
  location: "Queenstown",
  country: "New Zealand",
  category: "Nature",
  geometry: { type: "Point", coordinates: [168.6626, -45.0312] }
}

];

module.exports = { data: sampleListings };