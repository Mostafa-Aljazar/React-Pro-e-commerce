import { Outlet } from "react-router-dom";
import "../styles/global.css";
import { Header } from "@/components/common/header";

export default function Root_Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 p-6">
        <Outlet />
      </main>

      <footer className="bg-gray-100 p-4 text-center">© 2025 My App</footer>
    </div>
  );
}
