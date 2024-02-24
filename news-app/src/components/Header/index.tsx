import { Layout } from "antd";
import Center from "../Center";
import { ReactNode } from "react";

const { Header: HeaderAntd } = Layout;

export default function Header({
  children,
  flexDirection,
}: {
  children?: ReactNode;
  flexDirection?: any;
}) {
  return (
    <HeaderAntd
      style={{
        paddingBlock: "2rem",
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: "auto",
        display: "flex",
        flexDirection: flexDirection || "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Center>
        <h1
          className="card-title hoverable"
          style={{ fontWeight: "bolder", margin: 0, fontSize: "40px" }}
        >
          <a>news.</a>
        </h1>
      </Center>
      {children}
    </HeaderAntd>
  );
}
