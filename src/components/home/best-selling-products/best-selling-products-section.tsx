import { Button, Group, SimpleGrid, Stack, Title } from "@mantine/core";
import { Section_Header } from "../../common/section-header";
import { Product_Card } from "../../common/product-card";
import { BEST_SELLING_PRODUCTS } from "@/contents";

export default function Best_Selling_Products_Section() {
  const flashSaleEnd = new Date();
  flashSaleEnd.setDate(flashSaleEnd.getDate() + 3);

  return (
    <section className="mx-auto mb-2 md:mb-5 py-10 md:py-16 container">
      <Stack gap={20}>
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
              w={{ base: 100, md: 160 }}
              h={{ base: 35, md: 56 }}
              radius={"xs"}
              fw={500}
              fz={"sm"}
              className="!bg-red-dark"
            >
              View All
            </Button>
          </Group>
        </Stack>

        <SimpleGrid
          cols={{ base: 2, md: 2, lg: 4 }}
          spacing={30}
          verticalSpacing={20}
        >
          {BEST_SELLING_PRODUCTS.map((product, i) => (
            <Product_Card key={i} {...product} />
          ))}
        </SimpleGrid>
      </Stack>
    </section>
  );
}
