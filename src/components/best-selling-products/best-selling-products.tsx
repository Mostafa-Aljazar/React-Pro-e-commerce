import { Button, Group, SimpleGrid, Stack, Title } from "@mantine/core";
import { Section_Header } from "../common/section-header";
import { Product_Card } from "../common/product-card";
import { Image_Item_Card } from "@/assets";

const bestSellingProducts = [
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

export default function Best_Selling_Products_Section() {
  const flashSaleEnd = new Date();
  flashSaleEnd.setDate(flashSaleEnd.getDate() + 3);

  return (
    <section className="mx-auto py-6 container">
      <Stack gap={0}>
        <Stack gap={10} mb={20}>
          <Section_Header label="This Month" />

          <Group justify="space-between" flex={1} w={"100%"}>
            <Title
              order={2}
              fz={{ base: 20, sm: 28, md: 32 }}
              fw={700}
              textWrap="nowrap"
            >
              Best Selling Products
            </Title>

            <Button
              size={"sm"}
              radius={"xs"}
              fw={500}
              fz={"sm"}
              px={{ base: 20, md: 35 }}
              className="!bg-red-dark"
            >
              View All
            </Button>
          </Group>
        </Stack>

        <SimpleGrid
          cols={{ base: 2, md: 2, lg: 4 }}
          spacing={20}
          verticalSpacing={20}
        >
          {bestSellingProducts.map((product, i) => (
            <Product_Card key={i} {...product} />
          ))}
        </SimpleGrid>
      </Stack>
    </section>
  );
}
