import { useState } from "react";
import { Popover, Button, Stack } from "@mantine/core";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

export default function Language_Switcher() {
  const [opened, setOpened] = useState(false);
  const [language, setLanguage] = useState("English");

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
    setOpened(false);
  };

  return (
    <Popover
      width={120}
      position="bottom-end"
      withArrow
      opened={opened}
      onChange={setOpened}
      classNames={{
        dropdown: "!bg-black !rounded-sm !border-none",
      }}
    >
      <Popover.Target>
        <Button
          size="sm"
          onClick={() => setOpened((o) => !o)}
          rightSection={<ChevronDown size={16} />}
          variant="transparent"
          bg={"transparent"}
          fw={500}
          p={0}
        >
          {language}
        </Button>
      </Popover.Target>

      <Popover.Dropdown>
        <Stack gap={8}>
          <Button
            size="sm"
            onClick={() => toggleLanguage("English")}
            fullWidth
            variant="transparent"
            bg={"transparent"}
            fw={500}
            className={cn(language === "English" && "!text-red-dark")}
          >
            English
          </Button>
          <Button
            size="sm"
            variant="transparent"
            bg={"transparent"}
            onClick={() => toggleLanguage("Arabic")}
            fullWidth
            fw={500}
            className={cn(language === "Arabic" && "!text-red-dark")}
          >
            العربية
          </Button>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
