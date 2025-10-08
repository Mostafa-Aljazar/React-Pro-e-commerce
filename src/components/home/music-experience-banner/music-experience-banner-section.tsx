import { Stack, Text, Button, Box, Image, Flex } from "@mantine/core";
import { Music_Countdown_Timer } from "./music-countdown-timer";
import { Image_Wireless_Speaker } from "@/assets";

export default function Music_Experience_Banner_Section() {
  const flashSaleEnd = new Date();
  flashSaleEnd.setDate(flashSaleEnd.getDate() + 3);

  return (
    <section className="mx-auto container">
      <Box className="bg-black overflow-hidden text-white">
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify={"space-between"}
          align={"center"}
          gap={32}
          p={{ base: 32, lg: 64 }}
        >
          <Stack gap="md">
            <Text size="sm" fw={600} className="!text-green-light">
              Categories
            </Text>
            <Text
              fz={{ base: 25, md: 35, lg: 50 }}
              lh={1.2}
              className="font-bold leading-tight"
            >
              Enhance Your Music Experience
            </Text>
            <Music_Countdown_Timer targetDate={flashSaleEnd} />
            <Button
              radius={"xs"}
              size="md"
              fw={500}
              fz={"sm"}
              h={{ base: 50, md: 56 }}
              w={{ base: 120, md: 170 }}
              className="!bg-green-light hover:!bg-green-600 mt-4 transition-colors"
            >
              Buy Now!
            </Button>
          </Stack>

          <Box className="block">
            <Image src={Image_Wireless_Speaker} alt="JBL Speaker" w={800} />
          </Box>
        </Flex>
      </Box>
    </section>
  );
}
