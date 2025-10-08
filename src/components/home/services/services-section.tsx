import { SimpleGrid, Stack, Text, Center } from "@mantine/core";
import { SERVICES_DATA } from "@/contents";

export default function Services_Section() {
  return (
    <section className="mx-auto px-0 md:px-5 lg:px-20 py-12 sm:py-16">
      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 24, sm: 32, md: 40 }}
        verticalSpacing={{ base: 32, sm: 40 }}
        className="text-center"
      >
        {SERVICES_DATA.map((service, index) => (
          <Stack key={index} align="center" gap={8} className="px-4 sm:px-0">
            <Center
              bg={"gray.5"}
              w={{ base: 60, md: 70 }}
              h={{ base: 60, md: 70 }}
              mb={20}
              className="rounded-full"
            >
              <Center
                w={{ base: 40, md: 50 }}
                h={{ base: 40, md: 50 }}
                className="bg-black rounded-full"
              >
                {service.icon}
              </Center>
            </Center>

            <Text fz={18} fw={600} className="leading-tight">
              {service.title}
            </Text>

            <Text fz={14} className="max-w-xs text-gray-500">
              {service.desc}
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
    </section>
  );
}
