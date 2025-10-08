import { HERO_CATEGORIES } from "@/contents";
import { Accordion, Text } from "@mantine/core";
import { useState } from "react";

export default function Category_List() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Accordion
      radius={0}
      value={active}
      onChange={setActive}
      className="w-full"
      transitionDuration={300}
    >
      {HERO_CATEGORIES.map((cat) =>
        cat.sub ? (
          <Accordion.Item key={cat.name} value={cat.name} p={0}>
            <Accordion.Control pl={10} fz={"md"}>
              {cat.name}
            </Accordion.Control>
            <Accordion.Panel>
              <ul className="flex flex-col gap-2 text-gray-600 transition-all duration-300 ease-in-out">
                {cat.sub.map((sub) => (
                  <li
                    key={sub}
                    className="text-gray-600 hover:text-black text-sm transition-colors duration-300 cursor-pointer"
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </Accordion.Panel>
          </Accordion.Item>
        ) : (
          <Text
            key={cat.name}
            py={12}
            px={10}
            fz={"md"}
            className="hover:!bg-gray-100 transition-colors duration-300 cursor-pointer"
          >
            {cat.name}
          </Text>
        )
      )}
    </Accordion>
  );
}
