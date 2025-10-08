import {
  createTheme,
  DirectionProvider,
  MantineProvider,
  rem,
  type MantineColorsTuple,
} from "@mantine/core";
import type { ReactNode } from "react";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

const primary: MantineColorsTuple = [
  "#fafafa",
  "#e7e7e7",
  "#cdcdcd",
  "#b2b2b2",
  "#9a9a9a",
  "#8b8b8b",
  "#848484",
  "#717171",
  "#656565",
  "#575757",
] as const;

const secondary: MantineColorsTuple = [
  "#f5f5f5",
  "#e7e7e7",
  "#cdcdcd",
  "#b2b2b2",
  "#9a9a9a",
  "#8b8b8b",
  "#848484",
  "#717171",
  "#656565",
  "#0a0a0a",
] as const;

export const theme = createTheme({
  black: "#1a1a1a",
  white: "#ffffff",
  breakpoints: {
    xs: "450px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },

  colors: {
    primary,
    secondary,
  },

  primaryColor: "primary",
  radius: {
    xs: "0.25rem",
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
  },

  components: {
    Divider: {
      defaultProps: {
        color: "secondary.2",
      },
    },
    Badge: {
      defaultProps: {
        size: "sm",
        radius: "md",
        fw: 600,
        variant: "light",
        c: "black",
        style: {
          textTransform: "uppercase",
          fontSize: rem(10),
        },
      },
    },
    Menu: {
      defaultProps: {
        shadow: "md",
        radius: "md",
      },
    },
    Input: {
      defaultProps: {
        size: "md",
        fw: 400,
        c: "black",
        variant: "default",
        classNames: {
          input: "placeholder:text-secondary.5 text-sm",
          label: "text-sm font-medium text-black",
        },
      },
    },

    Select: {
      defaultProps: {
        size: "md",
        fw: 400,
        // rightSection: <ChevronDown size={14} />,
        classNames: {
          input: "placeholder:text-secondary.5 text-sm",
          dropdown: "bg-white border-secondary.2",
        },
        labelProps: {
          style: {
            fontSize: rem(14),
            fontWeight: 500,
          },
        },
      },
    },

    TextInput: {
      defaultProps: {
        size: "md",
        variant: "default",
        classNames: {
          input: "placeholder:text-secondary.5 text-sm",
          label: "text-sm font-medium text-black",
        },
        labelProps: {
          style: {
            fontSize: rem(14),
            fontWeight: 500,
          },
        },
      },
    },
    TagsInput: {
      defaultProps: {
        size: "md",
        classNames: {
          inputField: "placeholder:text-secondary.5 text-sm",
          label: "text-sm font-medium text-black",
        },
        labelProps: {
          style: {
            fontSize: rem(14),
            fontWeight: 500,
          },
        },
      },
    },
    NumberInput: {
      defaultProps: {
        size: "md",
        classNames: {
          input: "placeholder:text-secondary.5 text-sm",
          label: "text-sm font-medium text-black",
        },
        labelProps: {
          style: {
            fontSize: rem(14),
            fontWeight: 500,
          },
        },
      },
    },

    Button: {
      defaultProps: {
        fw: 600,
        size: "md",
        variant: "filled",
        c: "white",
        bg: "primary.9",
        classNames: {
          root: "hover:bg-primary.8 transition-colors duration-200",
        },
      },
    },

    RadioGroup: {
      defaultProps: {
        labelProps: {
          fw: 500,
          c: "black",
        },
      },
    },
    Radio: {
      defaultProps: {
        fw: 500,
        c: "secondary.7",
        label: "text-sm",
      },
    },

    Card: {
      defaultProps: {
        shadow: "sm",
        padding: "md",
        radius: "md",
        withBorder: true,
        bg: "white",
      },
    },

    Image: {
      defaultProps: {
        fit: "cover",
        radius: "md",
      },
    },
  },

  defaultRadius: "md",
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
    "2xl": rem(24),
  },
  headings: {
    fontWeight: "700",
    sizes: {
      h1: { fontSize: rem(32) },
      h2: { fontSize: rem(28) },
      h3: { fontSize: rem(24) },
    },
  },
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
});

interface Props {
  children: ReactNode;
}

export default function Mantine_Provider({ children }: Props) {
  return (
    <DirectionProvider detectDirection>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </DirectionProvider>
  );
}
