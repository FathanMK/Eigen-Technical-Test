import { ReactNode } from "react";
import { Card as AntdCard, Flex, Skeleton } from "antd";

function Title({ children }: { children: ReactNode }) {
  return <h2 className="card-title">{children}</h2>;
}

function Description({ children }: { children: ReactNode }) {
  return <p style={{ marginTop: "0.5rem" }}>{children}</p>;
}

function Footer({ children }: { children: ReactNode }) {
  return (
    <Flex vertical gap="1px" align="flex-end" style={{ marginTop: "2rem" }}>
      {children}
    </Flex>
  );
}

export default function Card({
  children,
  loading,
  cover,
  onClick,
}: {
  children: ReactNode;
  loading?: boolean;
  cover?: string;
  onClick?: () => void;
}) {
  return (
    <AntdCard
      className="card"
      style={{ padding: "1rem", cursor: "pointer" }}
      loading={loading}
      onClick={onClick}
      cover={
        loading ? (
          <Skeleton.Image active={true} />
        ) : (
          <img
            style={{
              maxHeight: "150px",
              objectFit: "cover",
              borderRadius: "10px 10px",
            }}
            alt="cover image"
            src={
              cover ||
              "https://res.cloudinary.com/dts5hyzdq/image/upload/v1698804475/j19x3xnfap1pt6wbwrfc.avif"
            }
          />
        )
      }
    >
      {children}
    </AntdCard>
  );
}

Card.Title = Title;
Card.Description = Description;
Card.Footer = Footer;
