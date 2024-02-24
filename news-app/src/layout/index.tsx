import { Layout as LayoutAntd } from "antd";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <LayoutAntd style={{ width: "600px", marginInline: "auto" }}>
      <Outlet />
    </LayoutAntd>
  );
}
