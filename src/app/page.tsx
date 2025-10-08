import Best_Selling_Products_Section from "@/components/best-selling-products/best-selling-products";
import Browse_By_Category_Section from "@/components/browse-by-category/browse-by-category-section";
import Explore_Our_Products from "@/components/explore-our-products/explore-our-products";
import Flash_Sales_Section from "@/components/flash-sales/flash-sales-section";
import Hero_Section from "@/components/hero/hero-section";
import Music_Experience_Banner from "@/components/music-experience-banner/music-experience-banner";
import New_Arrival from "@/components/new-arrival/new-arrival";
import Services from "@/components/services/services";
import { Container, Divider } from "@mantine/core";

export default function Home() {
  return (
    <Container size="lg" flex={1} className="min-h-screen" py={10}>
      <Hero_Section />
      <Flash_Sales_Section />
      <Divider h={2} w={"100%"} className="bg-gray-50" />
      <Browse_By_Category_Section />
      <Divider h={2} w={"100%"} className="bg-gray-50" />
      <Best_Selling_Products_Section />
      <Divider h={2} w={"100%"} className="bg-gray-50" />
      <Music_Experience_Banner />
      <Explore_Our_Products />
      <New_Arrival />
      <Services />
    </Container>
  );
}
