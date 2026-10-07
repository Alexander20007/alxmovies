import { Outlet } from "react-router-dom";
import { AiAssistant } from "./AiAssistant";
import { SiteFooter } from "./SiteFooter";
import { BottomNav, Header } from "./Header";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <SiteFooter />
      <BottomNav />
      <AiAssistant />
    </>
  );
}
