import type { Category } from "@/@types/category.type";
import { PAGE_ROUTES } from "./routes";
import { Image_Hero_IPhone, Image_Item_Card } from "@/assets";
import {
  Smartphone,
  Laptop,
  Watch,
  Camera,
  Headphones,
  Gamepad,
  ShoppingBag,
  Home,
  Dumbbell,
  ShoppingCart,
  HeartPulse,
  Shirt,
  BriefcaseMedical,
  Baby,
  Truck,
  Headset,
  ShieldCheck,
} from "lucide-react";
import type { ProductCardProps } from "@/components/common/product-card";

export const PAGES_LINKS = [
  { label: "Home", link: PAGE_ROUTES.HOME },
  { label: "Contact", link: PAGE_ROUTES.CONTACT },
  { label: "About", link: PAGE_ROUTES.ABOUT },
  { label: "Sign Up", link: PAGE_ROUTES.SIGN_UP },
] as const;

export const FOOTER_MY_ACCOUNT = [
  "My Account",
  "Login / Register",
  "Cart",
  "Wishlist",
  "Shop",
] as const;

export const FOOTER_QUICK_LINKS = [
  "Privacy Policy",
  "Terms Of Use",
  "FAQ",
  "Contact",
] as const;

// Hero Section
export const HERO_SLIDES_DATA = [
  {
    title: "iPhone 14 Series",
    discount: "Up to 10% off Voucher",
    img: Image_Hero_IPhone,
  },
  {
    title: "iPhone 13 Series",
    discount: "Up to 15% off Voucher",
    img: Image_Hero_IPhone,
  },
  {
    title: "iPhone 12 Series",
    discount: "Up to 20% off Voucher",
    img: Image_Hero_IPhone,
  },
  {
    title: "iPhone 11 Series",
    discount: "Up to 25% off Voucher",
    img: Image_Hero_IPhone,
  },
  {
    title: "iPhone X Series",
    discount: "Up to 30% off Voucher",
    img: Image_Hero_IPhone,
  },
] as const;

export const HERO_CATEGORIES: Category[] = [
  { name: "Woman’s Fashion", sub: ["Dresses", "Shoes", "Bags", "Accessories"] },
  { name: "Men’s Fashion", sub: ["Shirts", "Jeans", "Shoes", "Watches"] },
  { name: "Electronics" },
  { name: "Home & Lifestyle" },
  { name: "Medicine" },
  { name: "Sports & Outdoor" },
  { name: "Baby’s & Toys" },
  { name: "Groceries & Pets" },
  { name: "Health & Beauty" },
] as const;

// Flash Sales Section
export const FLASH_SALES_PRODUCTS = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: Image_Item_Card,
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 75,
    discount: 35,
    image: Image_Item_Card,
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    rating: 5,
    reviews: 99,
    discount: 30,
    image: Image_Item_Card,
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    originalPrice: 400,
    rating: 4,
    reviews: 99,
    discount: 25,
    image: Image_Item_Card,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: Image_Item_Card,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: Image_Item_Card,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: Image_Item_Card,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: Image_Item_Card,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: Image_Item_Card,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: Image_Item_Card,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: Image_Item_Card,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: Image_Item_Card,
  },
];

// Browse By Category Section
export const BROWSED_CATEGORIES_DATA = [
  {
    icon: <Shirt strokeWidth={1.5} className="w-10 h-10" />,
    label: "Women’s Fashion",
  },
  {
    icon: <ShoppingBag strokeWidth={1.5} className="w-10 h-10" />,
    label: "Men’s Fashion",
  },
  {
    icon: <Smartphone strokeWidth={1.5} className="w-10 h-10" />,
    label: "Phones",
  },
  {
    icon: <Laptop strokeWidth={1.5} className="w-10 h-10" />,
    label: "Computers",
  },
  {
    icon: <Watch strokeWidth={1.5} className="w-10 h-10" />,
    label: "SmartWatch",
  },
  {
    icon: <Camera strokeWidth={1.5} className="w-10 h-10" />,
    label: "Camera",
  },
  {
    icon: <Headphones strokeWidth={1.5} className="w-10 h-10" />,
    label: "Headphones",
  },
  {
    icon: <Gamepad strokeWidth={1.5} className="w-10 h-10" />,
    label: "Gaming",
  },
  {
    icon: <Home strokeWidth={1.5} className="w-10 h-10" />,
    label: "Home & Lifestyle",
  },
  {
    icon: <BriefcaseMedical strokeWidth={1.5} className="w-10 h-10" />,
    label: "Medicine",
  },
  {
    icon: <Dumbbell strokeWidth={1.5} className="w-10 h-10" />,
    label: "Sports & Outdoor",
  },
  {
    icon: <Baby strokeWidth={1.5} className="w-10 h-10" />,
    label: "Baby & Toys",
  },
  {
    icon: <ShoppingCart strokeWidth={1.5} className="w-10 h-10" />,
    label: "Groceries & Pets",
  },
  {
    icon: <HeartPulse strokeWidth={1.5} className="w-10 h-10" />,
    label: "Health & Beauty",
  },
];

// Best Selling Products Section
export const BEST_SELLING_PRODUCTS = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
    image: Image_Item_Card,
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 75,
    discount: 35,
    image: Image_Item_Card,
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    rating: 5,
    reviews: 99,
    discount: 30,
    image: Image_Item_Card,
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    originalPrice: 400,
    rating: 4,
    reviews: 99,
    discount: 25,
    image: Image_Item_Card,
  },
];

// Explore Our Products Section
export const EXPLORE_OUR_PRODUCTS_DATA: ProductCardProps[] = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    rating: 5,
    reviews: 88,
    isNew: true,
    image: Image_Item_Card,
    colors: [
      { color: "#ff00aa", active: true },
      { color: "#1122ff" },
      { color: "#aa8822" },
    ],
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    rating: 4,
    reviews: 75,
    image: Image_Item_Card,
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    rating: 5,
    reviews: 99,
    isNew: true,
    image: Image_Item_Card,
    colors: [{ color: "#ff0000", active: true }, { color: "#0000ff" }],
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    rating: 4,
    reviews: 99,
    isNew: true,
    image: Image_Item_Card,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    rating: 5,
    reviews: 88,
    image: Image_Item_Card,
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    rating: 4,
    reviews: 75,
    image: Image_Item_Card,
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    rating: 5,
    reviews: 99,
    image: Image_Item_Card,
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    rating: 4,
    reviews: 99,
    image: Image_Item_Card,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    rating: 5,
    reviews: 88,
    isNew: true,
    image: Image_Item_Card,
    colors: [
      { color: "#ff00aa", active: true },
      { color: "#1122ff" },
      { color: "#aa8822" },
    ],
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    rating: 4,
    reviews: 75,
    image: Image_Item_Card,
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    rating: 5,
    reviews: 99,
    isNew: true,
    image: Image_Item_Card,
    colors: [
      { color: "#ff0000", active: true },
      { color: "#00ff00" },
      { color: "#0000ff" },
    ],
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    rating: 4,
    reviews: 99,
    image: Image_Item_Card,
    colors: [{ color: "#8B4513", active: true }, { color: "#FFD700" }],
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    rating: 5,
    reviews: 88,
    image: Image_Item_Card,
    colors: [{ color: "#ff00aa", active: true }, { color: "#1122ff" }],
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    rating: 4,
    reviews: 75,
    image: Image_Item_Card,
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    rating: 5,
    reviews: 99,
    isNew: true,
    image: Image_Item_Card,
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    rating: 4,
    reviews: 99,
    image: Image_Item_Card,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    rating: 5,
    reviews: 88,
    image: Image_Item_Card,
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    rating: 4,
    reviews: 75,
    image: Image_Item_Card,
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    rating: 5,
    reviews: 99,
    isNew: true,
    image: Image_Item_Card,
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    rating: 4,
    reviews: 99,
    image: Image_Item_Card,
    colors: [{ color: "#8B4513", active: true }, { color: "#FFD700" }],
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    rating: 5,
    reviews: 88,
    image: Image_Item_Card,
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    rating: 4,
    reviews: 75,
    image: Image_Item_Card,
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    rating: 5,
    reviews: 99,
    image: Image_Item_Card,
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    rating: 4,
    reviews: 99,
    isNew: true,
    image: Image_Item_Card,
  },
];

// Services Section
export const SERVICES_DATA = [
  {
    icon: <Truck size={32} className="text-white" />,
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
  },
  {
    icon: <Headset size={32} className="text-white" />,
    title: "24/7 CUSTOMER SERVICE",
    desc: "Friendly 24/7 customer support",
  },
  {
    icon: <ShieldCheck size={32} className="text-white" />,
    title: "MONEY BACK GUARANTEE",
    desc: "We return money within 30 days",
  },
];
