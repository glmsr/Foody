import { icons, images } from "./";

const myProfile = {
    name: "FoodyApp User",
    profile_image: require("../assets/images/profile.png"),
    address: "Atatürk Mahallesi, No: 1, Çankaya/Ankara",
}

const categories = [
    { id: 1, name: "Fast Food", icon: require("../assets/icons/burger.png") },
    { id: 2, name: "Fruit Item", icon: require("../assets/icons/cherry.png") },
    { id: 3, name: "Rice Item", icon: require("../assets/icons/rice.png") },
]

const hamburger = {
    id: 1,
    name: "Hamburger",
    description: "Chicken patty hamburger",
    categories: [1, 2],
    price: 15.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/hamburger.png")
}

const hotTacos = {
    id: 2,
    name: "Hot Tacos",
    description: "Mexican tortilla & tacos",
    categories: [1, 3],
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: require("../assets/dummyData/hot_tacos.png")
}

const vegBiryani = {
    id: 3,
    name: "Veg Biryani",
    description: "A simple, easy, and flavorful vegetable biryani recipe made in the Instant pot pressure cooker with layers of spiced vegetables, warm spices, herbs like mint and cilantro, fried onions, and basmati rice.",
    categories: [1, 2, 3],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/veg_biryani.png")
}

const wrapSandwich = {
    id: 4,
    name: "Wrap Sandwich",
    description: "Grilled vegetables sandwich",
    categories: [1, 2],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/wrap_sandwich.png")
}

const menu = [
    { id: 1, name: "Featured", list: [hamburger, hotTacos, vegBiryani] },
    { id: 2, name: "Nearby you", list: [hamburger, vegBiryani, wrapSandwich] },
    { id: 3, name: "Popular", list: [hamburger, hotTacos, wrapSandwich] },
    { id: 4, name: "Newest", list: [hamburger, hotTacos, vegBiryani] },
    { id: 5, name: "Trending", list: [hamburger, vegBiryani, wrapSandwich] },
    { id: 6, name: "Recommended", list: [hamburger, hotTacos, wrapSandwich] },
]
const sizes = [
    { id: 1, label: '12"' },
    { id: 2, label: '14"' },
    { id: 3, label: '16"' },
    { id: 4, label: '18"' }
]

const myCart = [
    { ...hamburger, qty: 1 },
    { ...hotTacos, qty: 1 },
    { ...vegBiryani, qty: 1 }
]

const myCards = [
    { id: 1, name: "Master Card", icon: require("../assets/icons/mastercard.png"), card_no: "1234" },
    { id: 2, name: "Google Pay", icon: require("../assets/icons/google.png"), card_no: "1234" },
]

const allCards = [
    { id: 1, name: "Apple Pay", icon: require("../assets/icons/apple.png") },
    { id: 2, name: "Visa", icon: require("../assets/icons/visa.png"), },
    { id: 3, name: "PayPal", icon: require("../assets/icons/paypal.png"), },
    { id: 4, name: "Google Pay", icon: require("../assets/icons/google.png"), },
    { id: 5, name: "Master Card", icon: require("../assets/icons/mastercard.png"), },
]

const fromLocs = [
    { latitude: 1.5347282806345879, longitude: 110.35632207358996, },
    { latitude: 1.556306570595712, longitude: 110.35504616746915, },
    { latitude: 1.5238753474714375, longitude: 110.34261833833622, },
    { latitude: 1.5578068150528928, longitude: 110.35482523764315, },
    { latitude: 1.558050496260768, longitude: 110.34743759630511, },
    { latitude: 1.5573478487252896, longitude: 110.35568783282145, }
]

export default { myProfile, categories, hamburger, hotTacos, vegBiryani, wrapSandwich, menu, sizes, myCart, myCards, allCards, fromLocs }