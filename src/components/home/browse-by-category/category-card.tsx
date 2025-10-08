import { Button, Stack, Text, ThemeIcon } from "@mantine/core";
import type { ReactNode } from "react";

interface CategoryCardProps {
  icon: ReactNode;
  label: string;
}

export function Category_Card({ icon, label }: CategoryCardProps) {
  return (
    <Button
      variant="subtle"
      radius="md"
      h={145}
      w={170}
      className="group !bg-white hover:!bg-red-dark border !border-gray-300 transition-colors"
    >
      <Stack gap={4} align="center" justify="center">
        <ThemeIcon
          size={60}
          radius="md"
          bg="transparent"
          className="!text-black group-hover:!text-white !transition-colors"
        >
          {icon}
        </ThemeIcon>
        <Text
          size="sm"
          fw={500}
          ta="center"
          className="!text-black group-hover:!text-white truncate !transition-colors"
        >
          {label}
        </Text>
      </Stack>
    </Button>
  );
}
