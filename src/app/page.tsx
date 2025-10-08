import Best_Selling_Products_Section from "@/components/home/best-selling-products/best-selling-products-section";
import Browse_By_Category_Section from "@/components/home/browse-by-category/browse-by-category-section";
import Explore_Our_Products_Section from "@/components/home/explore-our-products/explore-our-products-section";
import Flash_Sales_Section from "@/components/home/flash-sales/flash-sales-section";
import Hero_Section from "@/components/home/hero/hero-section";
import Music_Experience_Banner_Section from "@/components/home/music-experience-banner/music-experience-banner-section";
import New_Arrival_Section from "@/components/home/new-arrival/new-arrival-section";
import Services_Section from "@/components/home/services/services-section";
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
      <Music_Experience_Banner_Section />
      <Explore_Our_Products_Section />
      <New_Arrival_Section />
      <Services_Section />
    </Container>
  );
}
