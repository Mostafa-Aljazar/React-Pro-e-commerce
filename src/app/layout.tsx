import "../styles/global.css";
import { Outlet } from "react-router-dom";
import Header from "@/components/common/header";
import { AppShell } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";
import Footer from "@/components/common/footer";

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
      bg={"grape"}
    >
      <AppShell.Header p={0} bg={"transparent"}>
        <Header />
      </AppShell.Header>

      <AppShell.Main mt={{ base: 120, md: 124 }} className="bg-amber-400">
        <Outlet />
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
}
