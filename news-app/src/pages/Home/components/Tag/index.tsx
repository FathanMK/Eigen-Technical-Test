import { ReactNode } from "react";

export default function Tag({
  children,
  isActive,
  onClick,
}: {
  children: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={`tagContainer ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
