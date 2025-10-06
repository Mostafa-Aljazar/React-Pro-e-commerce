import { Group, Text, Box } from "@mantine/core";

interface SectionHeaderProps {
  label: string;
}

export function Section_Header({ label }: SectionHeaderProps) {
  return (
    <Group gap={8}>
      <Box w={20} h={40} bg="red" style={{ borderRadius: 4 }} />
      <Text c="red" fw={600}>
        {label}
      </Text>
    </Group>
  );
}
