import { Image_App_Store, Image_Google_Play, Image_Qr_Code } from "@/assets";
import { FOOTER_MY_ACCOUNT, FOOTER_QUICK_LINKS } from "@/contents";
import {
  Container,
  Grid,
  Text,
  TextInput,
  Divider,
  Stack,
  Anchor,
  Image,
  Box,
  Group,
} from "@mantine/core";
import { SendHorizonal } from "lucide-react";

export default function Footer() {
  return (
    <Box bg="black" c="white" pt={{ base: 20, sm: 40, lg: 80 }} pb={24}>
      <Container size={"lg"} px={40}>
        <Grid justify="space-between" p={0} m={0}>
          <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
            <Stack gap={10}>
              <Text fz={20} fw={600}>
                Exclusive
              </Text>
              <Text>Subscribe</Text>
              <Stack gap={15}>
                <Text size="sm" c="white">
                  Get 10% off your first order
                </Text>
                <TextInput
                  placeholder="Enter your email"
                  variant="filled"
                  className="border-1 border-gray-300 border-solid rounded-sm"
                  classNames={{
                    input:
                      "placeholder:!text-sm  !bg-transparent border-1 !pl-2 !pr-0",
                  }}
                  rightSection={
                    <SendHorizonal size={20} className="text-white" />
                  }
                />
              </Stack>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
            <Stack gap={20}>
              <Text fz={20}>Support</Text>

              <Stack gap={10}>
                <Text size="sm" c="gray.5">
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </Text>
                <Text size="sm" c="gray.5">
                  exclusive@gmail.com
                </Text>
                <Text size="sm" c="gray.5">
                  +88015-88888-9999
                </Text>
              </Stack>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
            <Stack gap={10}>
              <Text fz={20}>Account</Text>
              {FOOTER_MY_ACCOUNT.map((item) => (
                <Anchor
                  key={item}
                  c="gray.5"
                  size="sm"
                  underline="never"
                  href="#"
                >
                  {item}
                </Anchor>
              ))}
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
            <Stack gap={10}>
              <Text fz={20}>Quick Link</Text>

              {FOOTER_QUICK_LINKS.map((item) => (
                <Anchor
                  key={item}
                  c="gray.5"
                  size="sm"
                  underline="never"
                  href="#"
                >
                  {item}
                </Anchor>
              ))}
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6, lg: 2 }}>
            <Stack gap="xs">
              <Text fz={20}>Download App</Text>
              <Text size="xs" c="gray.5">
                Save $3 with App New User Only
              </Text>
              <Group wrap="nowrap" gap={10}>
                <Image
                  src={Image_Qr_Code}
                  alt="QR Code"
                  h={80}
                  w={80}
                  fit="fill"
                  radius={0}
                />
                <Stack gap={10}>
                  <Image
                    src={Image_App_Store}
                    alt="App Store"
                    h={35}
                    w={100}
                    fit="fill"
                    radius={0}
                  />
                  <Image
                    src={Image_Google_Play}
                    alt="Google Play"
                    h={35}
                    w={100}
                    fit="fill"
                    radius={0}
                  />
                </Stack>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>

        <Divider color="gray.8" my={{ base: 20, md: 48 }} />

        <Text ta="center" size="sm" c="gray.5">
          © Copyright Rimel 2022. All right reserved
        </Text>
      </Container>
    </Box>
  );
}
