import {
  Image_Amazon_Echo,
  Image_Gucci,
  Image_Playstation,
  Image_Woman_Wearing_Hat,
} from "@/assets";
import { Section_Header } from "../../common/section-header";
import { Stack, Text, Button, Box, SimpleGrid, Image } from "@mantine/core";

export default function New_Arrival_Section() {
  return (
    <section className="mx-auto py-6 container">
      <Section_Header label="Featured" />

      <SimpleGrid
        mt={30}
        p={0}
        className="!overflow-hidden"
        spacing={20}
        cols={{ base: 1, md: 2 }}
      >
        <Box
          h={500}
          pos={"relative"}
          c={"white"}
          bg={"#0D0D0D"}
          className="rounded-sm"
        >
          <Image
            src={Image_Playstation}
            alt="PlayStation 5"
            pos={"absolute"}
            mt={50}
            left={"12.5%"}
            bottom={0}
            w={"75%"}
          />
          <Stack className="bottom-6 left-6 z-20 absolute max-w-md" gap={6}>
            <Text fw={500} fz={{ base: 20, md: 22, lg: 24 }}>
              PlayStation 5
            </Text>
            <Text
              fz={{ base: 14, md: 14 }}
              className="w-60 md:w-80 text-gray-300"
            >
              Black and White version of the PS5 coming out on sale.
            </Text>
            <Button
              p={0}
              variant="transparent"
              bg={"transparent"}
              fw={500}
              fz={14}
              className="!w-fit text-white !underline underline-offset-4 transition-all"
            >
              Shop Now
            </Button>
          </Stack>
        </Box>

        <Stack p={0} gap={20} w={"100%"} h={500}>
          <Box
            pos={"relative"}
            h={"50%"}
            c={"white"}
            bg={"#0D0D0D"}
            className="rounded-sm"
          >
            <Stack
              c={"white"}
              gap={5}
              pos={"absolute"}
              bottom={0}
              left={0}
              className="z-20 p-6"
            >
              <Text fw={500} fz={{ base: 20, md: 22, lg: 25 }}>
                Women's Collections
              </Text>
              <Text fz={14} className="w-64 text-gray-300">
                Featured woman collections that give you another vibe.
              </Text>

              <Button
                p={0}
                variant="transparent"
                bg={"transparent"}
                fw={500}
                fz={14}
                className="!w-fit text-white !underline underline-offset-4 transition-all"
              >
                Shop Now
              </Button>
            </Stack>

            <Image
              src={Image_Woman_Wearing_Hat}
              alt="Women's Collections"
              w={"70%"}
              pos={"absolute"}
              right={0}
              bottom={0}
              radius={0}
            />
          </Box>

          <SimpleGrid cols={2} h={"50%"} p={0} className="w-full">
            <Box
              w={"100%"}
              h={"100%"}
              pos={"relative"}
              c={"white"}
              bg={"#0D0D0D"}
              className="rounded-sm"
            >
              <Image
                src={Image_Amazon_Echo}
                alt="Amazon_Echo_Image"
                pos="absolute"
                top="50%"
                left="50%"
                className="!-translate-x-1/2 !-translate-y-1/2 !"
                w="60%"
              />
              <Stack
                c={"white"}
                gap={5}
                pos={"absolute"}
                bottom={0}
                left={0}
                className="z-20 p-6"
              >
                <Text fw={500} fz={{ base: 20, md: 22, lg: 25 }}>
                  Speakers
                </Text>
                <Text fz={14} className="w-32 lg:w-64 text-gray-300">
                  Amazon wireless speakers
                </Text>

                <Button
                  p={0}
                  variant="transparent"
                  bg={"transparent"}
                  fw={500}
                  fz={14}
                  className="!w-fit text-white !underline underline-offset-4 transition-all"
                >
                  Shop Now
                </Button>
              </Stack>
            </Box>
            <Box
              w={"100%"}
              h={"100%"}
              pos={"relative"}
              c={"white"}
              bg={"#0D0D0D"}
              className="rounded-sm"
            >
              <Image
                src={Image_Gucci}
                alt="Perfume"
                pos="absolute"
                top="50%"
                left="50%"
                className="!-translate-x-1/2 !-translate-y-1/2 !"
                w="60%"
              />
              <Stack
                c={"white"}
                gap={5}
                pos={"absolute"}
                bottom={0}
                left={0}
                className="z-20 p-6"
              >
                <Text fw={500} fz={{ base: 20, md: 22, lg: 24 }}>
                  Perfume
                </Text>
                <Text fz={14} className="w-32 lg:w-64 text-gray-300">
                  GUCCI INTENSE OUD EDP
                </Text>

                <Button
                  p={0}
                  variant="transparent"
                  bg={"transparent"}
                  fw={500}
                  fz={14}
                  className="!w-fit text-white !underline underline-offset-4 transition-all"
                >
                  Shop Now
                </Button>
              </Stack>
            </Box>
          </SimpleGrid>
        </Stack>
      </SimpleGrid>
    </section>
  );
}
