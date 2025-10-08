import { cn } from "@/utils/cn";
import {
  Card,
  Image,
  Badge,
  Button,
  Group,
  Stack,
  Text,
  Box,
  ActionIcon,
} from "@mantine/core";
import { Eye, Heart } from "lucide-react";

export interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  discount?: number;
  isNew?: boolean;
  colors?: { color: string; active?: boolean }[];
}

export function Product_Card({
  name,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  discount,
  isNew,
  colors,
}: ProductCardProps) {
  return (
    <Card
      shadow="xs"
      radius="xs"
      withBorder={false}
      className="group relative !overflow-hidden"
      p={0}
    >
      <Box pos="relative" mb={0} className="!bg-gray-100">
        <Image
          src={image}
          alt={name}
          fit="contain"
          className="p-10 aspect-square group-hover:scale-105 transition-transform"
        />

        {/* Discount or New badges */}
        {(discount || isNew) && (
          <Group gap="xs" pos="absolute" top={8} left={8}>
            {discount && (
              <Badge
                c={"white"}
                size="lg"
                radius={"xs"}
                className="!bg-red-dark"
              >
                -{discount}%
              </Badge>
            )}
            {isNew && (
              <Badge
                size="lg"
                radius={"xs"}
                c={"white"}
                className="!bg-green-light"
              >
                NEW
              </Badge>
            )}
          </Group>
        )}

        {/* Action buttons */}
        <Stack gap={8} pos="absolute" top={12} right={12}>
          <ActionIcon
            variant="filled"
            radius="100%"
            bg={"white"}
            className="!text-black hover:!text-red-500 transition-colors"
          >
            <Heart size={18} />
          </ActionIcon>
          <ActionIcon
            variant="filled"
            radius="100%"
            bg={"white"}
            className="!text-black hover:!text-red-500 transition-colors"
          >
            <Eye size={18} />
          </ActionIcon>
        </Stack>

        {/* Add to Cart button */}
        <Button
          fullWidth
          radius={0}
          // color="dark"
          size="sm"
          pos="absolute"
          bottom={-5}
          left={0}
          right={0}
          className="!bg-black opacity-0 group-hover:opacity-100 !font-light transition-opacity"
        >
          Add To Cart
        </Button>
      </Box>

      {/* Product info */}
      <Stack gap={4} p={"md"}>
        <Text
          fw={{ base: 600, md: 700 }}
          lh={1.2}
          fz={{ base: "sm", md: "md" }}
        >
          {name}
        </Text>

        <Group gap="xs">
          <Text fw={600} c="red" fz={{ base: "sm", md: "md" }}>
            ${price}
          </Text>
          {originalPrice && (
            <Text td="line-through" c="dimmed" fz={{ base: "sm", md: "md" }}>
              ${originalPrice}
            </Text>
          )}
        </Group>

        <Group gap={4}>
          <Group gap={2}>
            {[...Array(5)].map((_, i) => (
              <Text key={i} fz="sm" c={i < rating ? "yellow" : "gray"} lh={1}>
                ★
              </Text>
            ))}
          </Group>
          <Text fz="sm" fw={"bold"} c="dimmed">
            ({reviews})
          </Text>
        </Group>

        {colors && (
          <Group gap={5}>
            {colors.map((item, i) => (
              <Box
                key={i}
                h={20}
                w={20}
                bg={item.color}
                className={cn(
                  "rounded-full",
                  item.active && "border-2 border-gray-800"
                )}
              />
            ))}
          </Group>
        )}
      </Stack>
    </Card>
  );
}
