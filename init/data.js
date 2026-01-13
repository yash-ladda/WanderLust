const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description:
            "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
        co_ordinates: { ltd: 34.0259, lng: -118.7798 },
        category: "beach_vibes",
    },
    {
        title: "Modern Loft in Downtown",
        description:
            "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "New York City",
        country: "United States",
        co_ordinates: { ltd: 40.7128, lng: -74.006 },
        category: "urban_stays",
    },
    {
        title: "Mountain Retreat",
        description:
            "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
        },
        price: 1000,
        location: "Aspen",
        country: "United States",
        co_ordinates: { ltd: 39.1911, lng: -106.8175 },
        category: "mountain_escapes",
    },
    {
        title: "Historic Villa in Tuscany",
        description:
            "Experience the charm of Tuscany in this beautifully restored villa.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
        },
        price: 2500,
        location: "Florence",
        country: "Italy",
        co_ordinates: { ltd: 43.7696, lng: 11.2558 },
        category: "family_favs",
    },
    {
        title: "Secluded Treehouse Getaway",
        description:
            "Live among the treetops in this unique treehouse retreat.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
        },
        price: 800,
        location: "Portland",
        country: "United States",
        co_ordinates: { ltd: 45.5152, lng: -122.6784 },
        category: "nature_nooks",
    },
    {
        title: "Beachfront Paradise",
        description:
            "Step out of your door onto the sandy beach.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
        },
        price: 2000,
        location: "Cancun",
        country: "Mexico",
        co_ordinates: { ltd: 21.1619, lng: -86.8515 },
        category: "poolside_stays",
    },
    {
        title: "Luxury Penthouse with City Views",
        description:
            "Indulge in luxury living with panoramic city views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
        },
        price: 3500,
        location: "Los Angeles",
        country: "United States",
        co_ordinates: { ltd: 34.0522, lng: -118.2437 },
        category: "whole_place",
    },
    {
        title: "Ski-In/Ski-Out Chalet",
        description:
            "Hit the slopes right from your doorstep.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
        },
        price: 3000,
        location: "Verbier",
        country: "Switzerland",
        co_ordinates: { ltd: 46.0961, lng: 7.2286 },
        category: "mountain_escapes",
    },
    {
        title: "Safari Lodge in the Serengeti",
        description:
            "Experience the thrill of the wild.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
        },
        price: 4000,
        location: "Serengeti National Park",
        country: "Tanzania",
        co_ordinates: { ltd: -2.3333, lng: 34.8333 },
        category: "eco_retreats",
    },
    {
        title: "Historic Canal House",
        description:
            "Stay in a piece of history in Amsterdam.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Amsterdam",
        country: "Netherlands",
        co_ordinates: { ltd: 52.3676, lng: 4.9041 },
        category: "urban_stays",
    },
    {
        title: "Private Island Retreat",
        description:
            "Have an entire island to yourself.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60",
        },
        price: 10000,
        location: "Fiji",
        country: "Fiji",
        co_ordinates: { ltd: -17.7134, lng: 178.065 },
        category: "other_stays",
    },
    {
        title: "Modern Apartment in Tokyo",
        description:
            "Explore the vibrant city of Tokyo.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60",
        },
        price: 2000,
        location: "Tokyo",
        country: "Japan",
        co_ordinates: { ltd: 35.6762, lng: 139.6503 },
        category: "urban_stays",
    },
    {
        title: "Rustic Cabin by the Lake",
        description:
            "A charming wooden cabin overlooking a serene lake, ideal for nature lovers and slow travel.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
        },
        price: 900,
        location: "Lake Tahoe",
        country: "United States",
        co_ordinates: { ltd: 39.0968, lng: -120.0324 },
        category: "nature_nooks",
    },
    {
        title: "Minimal Studio in Seoul",
        description:
            "A clean and modern studio apartment located close to cafes, metro, and nightlife.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=60",
        },
        price: 1400,
        location: "Seoul",
        country: "South Korea",
        co_ordinates: { ltd: 37.5665, lng: 126.9780 },
        category: "urban_stays",
    },
    {
        title: "Luxury Pool Villa in Ubud",
        description:
            "A private pool villa surrounded by lush greenery, offering a true tropical escape.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
        },
        price: 3200,
        location: "Ubud",
        country: "Indonesia",
        co_ordinates: { ltd: -8.5069, lng: 115.2625 },
        category: "poolside_stays",
    },
    {
        title: "Hillside Homestay in Manali",
        description:
            "Stay amidst pine forests with panoramic mountain views and fresh Himalayan air.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1486334803289-1623f249dd1e?auto=format&fit=crop&w=800&q=60",
        },
        price: 700,
        location: "Manali",
        country: "India",
        co_ordinates: { ltd: 32.2396, lng: 77.1887 },
        category: "mountain_escapes",
    },
    {
        title: "Eco Bamboo Hut near Waterfalls",
        description:
            "Sustainable bamboo hut close to waterfalls and jungle trails. Perfect for eco-conscious travelers.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=800&q=60",
        },
        price: 600,
        location: "Ella",
        country: "Sri Lanka",
        co_ordinates: { ltd: 6.8651, lng: 81.0463 },
        category: "eco_retreats",
    },
    {
        title: "Family Villa with Garden",
        description:
            "Spacious villa with a private garden and play area, ideal for family vacations.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=60",
        },
        price: 2200,
        location: "Barcelona",
        country: "Spain",
        co_ordinates: { ltd: 41.3851, lng: 2.1734 },
        category: "family_favs",
    },
    {
        title: "Desert Dome Stay under the Stars",
        description:
            "Sleep beneath the stars in a cozy desert dome with panoramic night skies and peaceful surroundings.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=format&fit=crop&w=800&q=60",
        },
        price: 1100,
        location: "Jaisalmer",
        country: "India",
        co_ordinates: { ltd: 26.9157, lng: 70.9083 },
        category: "other_stays",
    },
    {
        title: "Lakefront Wooden Cabin",
        description:
            "A peaceful wooden cabin right by the lake, ideal for kayaking, reading, and digital detox.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60",
        },
        price: 950,
        location: "Hallstatt",
        country: "Austria",
        co_ordinates: { ltd: 47.5615, lng: 13.6493 },
        category: "nature_nooks",
    },
    {
        title: "Skyline Apartment with Balcony",
        description:
            "Modern apartment with skyline views, located close to restaurants and nightlife.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60",
        },
        price: 1700,
        location: "Dubai",
        country: "United Arab Emirates",
        co_ordinates: { ltd: 25.2048, lng: 55.2708 },
        category: "urban_stays",
    },
    {
        title: "Snow Cabin with Fireplace",
        description:
            "Warm up in this wooden snow cabin featuring a fireplace and stunning winter views.",
        image: {
            filename: "listingimage",
            url: "https://images.pexels.com/photos/2463815/pexels-photo-2463815.jpeg",
        },
        price: 2100,
        location: "Lapland",
        country: "Finland",
        co_ordinates: { ltd: 67.9222, lng: 26.5046 },
        category: "mountain_escapes",
    },
    {
        title: "Courtyard Home in Old City",
        description:
            "Traditional home with an open courtyard, offering an authentic cultural stay.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1521401292936-0a2129a30b1c?auto=format&fit=crop&w=800&q=60",
        },
        price: 1300,
        location: "Jaipur",
        country: "India",
        co_ordinates: { ltd: 26.9124, lng: 75.7873 },
        category: "family_favs",
    },
    {
        title: "Infinity Pool Cliff Villa",
        description:
            "Luxury cliffside villa with an infinity pool overlooking the ocean.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
        },
        price: 4500,
        location: "Uluwatu",
        country: "Indonesia",
        co_ordinates: { ltd: -8.8292, lng: 115.0847 },
        category: "poolside_stays",
    },
    {
        title: "Green Farm Stay with Organic Food",
        description:
            "Experience rural life with fresh organic meals and open green fields.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=60",
        },
        price: 750,
        location: "Coorg",
        country: "India",
        co_ordinates: { ltd: 12.3375, lng: 75.8069 },
        category: "eco_retreats",
    },
    {
        title: "Backwater Houseboat Stay",
        description:
            "Drift along the serene backwaters in a traditional houseboat equipped with modern amenities.",
        image: {
            filename: "listingimage",
            url: "https://images.pexels.com/photos/244517/pexels-photo-244517.jpeg",
        },
        price: 1200,
        location: "Alleppey",
        country: "India",
        co_ordinates: { ltd: 9.4981, lng: 76.3388 },
        category: "other_stays",
    },
    {
        title: "Historic Castle Suite",
        description:
            "Live like royalty in a suite within a historic Scottish castle surrounded by highlands.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60",
        },
        price: 5000,
        location: "Edinburgh",
        country: "United Kingdom",
        co_ordinates: { ltd: 55.9533, lng: -3.1883 },
        category: "family_favs",
    },
    {
        title: "Overwater Bungalow",
        description:
            "A romantic overwater bungalow with direct access to turquoise lagoon waters.",
        image: {
            filename: "listingimage",
            url: "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg",
        },
        price: 6000,
        location: "Male",
        country: "Maldives",
        co_ordinates: { ltd: 4.1755, lng: 73.5093 },
        category: "poolside_stays",
    },
    {
        title: "Whitewashed Cave House",
        description:
            "Stay in a traditional cave house with iconic sunset views over the caldera.",
        image: {
            filename: "listingimage",
            url: "https://images.pexels.com/photos/163872/italy-cala-gonone-air-sky-163872.jpeg",
        },
        price: 2800,
        location: "Santorini",
        country: "Greece",
        co_ordinates: { ltd: 36.3932, lng: 25.4615 },
        category: "beach_vibes",
    },
    {
        title: "Traditional Ryokan with Onsen",
        description:
            "Experience Japanese hospitality in a ryokan featuring tatami mats and a private hot spring.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=800&q=60",
        },
        price: 2500,
        location: "Kyoto",
        country: "Japan",
        co_ordinates: { ltd: 35.0116, lng: 135.7681 },
        category: "other_stays",
    }
];

module.exports = { data: sampleListings };