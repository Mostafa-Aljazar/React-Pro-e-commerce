import About_Page from "@/app/about/page";
import Contact_Page from "@/app/contact/page";
import Root_Layout from "@/app/layout";
import Home from "@/app/page";
import { PAGE_ROUTES } from "@/contents/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Root_Layout />}>
          <Route path={PAGE_ROUTES.HOME} element={<Home />} />
          <Route path={PAGE_ROUTES.ABOUT} element={<About_Page />} />
          <Route path={PAGE_ROUTES.CONTACT} element={<Contact_Page />} />
          <Route path={PAGE_ROUTES.SIGN_UP} element={<Contact_Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
