import { Group, Text, Box } from "@mantine/core";

interface SectionHeaderProps {
  label: string;
}

export function Section_Header({ label }: SectionHeaderProps) {
  return (
    <Group gap={8}>
      <Box w={20} h={40} style={{ borderRadius: 4 }} className="!bg-red-dark" />
      <Text fw={600} className="!text-red-dark">
        {label}
      </Text>
    </Group>
  );
}
