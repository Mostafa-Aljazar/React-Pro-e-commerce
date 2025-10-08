import type { Category } from "@/@types/category.type";
import { PAGE_ROUTES } from "./routes";


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

export const CATEGORIES: Category[] = [
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