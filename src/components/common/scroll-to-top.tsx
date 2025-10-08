import { useWindowScroll } from "@mantine/hooks";
import { Affix, ActionIcon, Transition } from "@mantine/core";
import { ArrowUp } from "lucide-react";

export default function Scroll_To_Top() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(styles) => (
          <ActionIcon
            size="lg"
            radius="xl"
            color="gray.3"
            variant="filled"
            style={styles}
            onClick={() => scrollTo({ y: 0 })}
          >
            <ArrowUp size={20} color="black" />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
}
