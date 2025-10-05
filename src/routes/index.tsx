import About_Page from "@/app/about/page";
import Contact_Page from "@/app/contact/page";
import Root_Layout from "@/app/layout";
import Home from "@/app/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function ROUTES() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Root_Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About_Page />} />
          <Route path="/contact" element={<Contact_Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
