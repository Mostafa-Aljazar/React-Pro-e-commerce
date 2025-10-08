import { Button, Group, SimpleGrid, Stack, Title } from "@mantine/core";
import { Section_Header } from "../../common/section-header";
import { Product_Card } from "../../common/product-card";
import { BEST_SELLING_PRODUCTS } from "@/contents";

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
          {BEST_SELLING_PRODUCTS.map((product, i) => (
            <Product_Card key={i} {...product} />
          ))}
        </SimpleGrid>
      </Stack>
    </section>
  );
}
