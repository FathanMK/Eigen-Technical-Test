import { Flex } from "antd";
import { ReactNode } from "react";

export default function Center({ children }: { children: ReactNode }) {
  return (
    <Flex align="center" justify="center">
      {children}
    </Flex>
  );
}
