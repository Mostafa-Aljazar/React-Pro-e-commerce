import { Heart, Search, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Container, TextInput, Group, Box, ActionIcon } from "@mantine/core";
import { PAGE_ROUTES } from "@/contents/routes";
import { cn } from "@/utils/cn";

export default function Header() {
  const links = [
    {
      label: "Home",
      link: PAGE_ROUTES.HOME,
    },
    {
      label: "Contact",
      link: PAGE_ROUTES.CONTACT,
    },
    {
      label: "About",
      link: PAGE_ROUTES.ABOUT,
    },
    {
      label: "Sign Up",
      link: PAGE_ROUTES.SIGN_UP,
    },
  ];
  const location = useLocation();

  return (
    <header className="bg-white border-b-1 border-b-gray-300 w-full">
      <Box py={12} bg="black" className="text-white">
        <Container className="text-sm text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link to={PAGE_ROUTES.SHOP} className="ml-2 font-semibold underline">
            ShopNow
          </Link>
        </Container>
      </Box>

      <Container
        size="lg"
        flex={1}
        className="flex justify-between items-center py-3 md:pt-8"
      >
        <Link to={PAGE_ROUTES.HOME} className="font-bold text-2xl">
          Exclusive
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              className={cn(
                "font-normal hover:underline underline-offset-4",
                location.pathname === item.link && "font-semibold"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Group gap={16} className="flex items-center">
          <TextInput
            visibleFrom="md"
            placeholder="What are you looking for?"
            variant="filled"
            size="sm"
            className="!bg-gray-100 rounded-md outline-none w-64 text-sm"
            rightSection={<Search size={20} />}
            classNames={{
              input: "placeholder:!font-light !outline-none !border-none",
            }}
          />
          <ActionIcon variant="transparent">
            <Heart size={24} strokeWidth={1.5} className="text-black" />
          </ActionIcon>
          <ActionIcon variant="transparent">
            <ShoppingCart size={24} strokeWidth={1.5} className="text-black" />
          </ActionIcon>
        </Group>
      </Container>
    </header>
  );
}
