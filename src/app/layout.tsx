import "../styles/global.css";
import { Outlet } from "react-router-dom";
import Header from "@/components/common/header";
import { AppShell } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";
import Footer from "@/components/common/footer";
import Scroll_To_Top from "@/components/common/scroll-to-top";

export default function Root_Layout() {
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{
        height: { base: 120, md: 124 },
        collapsed: !pinned,
        offset: false,
      }}
      withBorder={false}
    >
      <AppShell.Header p={0} bg={"transparent"}>
        <Header />
      </AppShell.Header>

      <AppShell.Main mt={{ base: 120, md: 124 }}>
        <Outlet />
        <Scroll_To_Top />
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
}
