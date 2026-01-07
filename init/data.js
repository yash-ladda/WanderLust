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
    }
];

module.exports = { data: sampleListings };