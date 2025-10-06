import { Box, Button, Container, Flex, Stack, Title } from "@mantine/core";
import { Section_Header } from "../common/section-header";
import { Countdown_Timer } from "../common/countdown-timer";
import { Product_Card } from "../common/product-card";
import { Item_Card_Image } from "@/assets";

export default function Flash_Sales_Section() {
  const flashSaleEnd = new Date();
  flashSaleEnd.setDate(flashSaleEnd.getDate() + 3);
  return (
    <section className="mx-auto px-4 py-16 container">
      <Container size="lg" flex={1}>
        <Stack gap={0}>
          <Stack gap={10} mb={20}>
            <Section_Header label="Today's" />
            <Flex
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
              gap={{ base: 10, md: 100 }}
            >
              <Title
                order={2}
                fz={{ base: 20, sm: 28, md: 32 }}
                fw={700}
                textWrap="nowrap"
              >
                Flash Sales
              </Title>
              <Countdown_Timer targetDate={flashSaleEnd} />
            </Flex>
          </Stack>

          <Box className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Product_Card
              name="HAVIT HV-G92 Gamepad"
              price={120}
              originalPrice={160}
              rating={5}
              reviews={88}
              discount={40}
              image={Item_Card_Image}
            />
            <Product_Card
              name="AK-900 Wired Keyboard"
              price={960}
              originalPrice={1160}
              rating={4}
              reviews={75}
              discount={35}
              image={Item_Card_Image}
            />
            <Product_Card
              name="IPS LCD Gaming Monitor"
              price={370}
              originalPrice={400}
              rating={5}
              reviews={99}
              discount={30}
              image={Item_Card_Image}
            />
            <Product_Card
              name="S-Series Comfort Chair"
              price={375}
              originalPrice={400}
              rating={4}
              reviews={99}
              discount={25}
              image={Item_Card_Image}
            />
          </Box>

          <Button bg={"red"} radius={"xs"} px={48} c={"white"} mx={"auto"}>
            View All Products
          </Button>
        </Stack>
      </Container>
    </section>
  );
}
