import { Layout } from "antd";
import { useContext } from "react";
import Center from "../../../../components/Center";
import Tag from "../Tag";
import tags from "../../../../data/tags";
import { HomeContext } from "../../providers";
import Search from "../Search";

const { Header: HeaderAntd } = Layout;

export default function Header() {
  const { search, setSearch } = useContext(HomeContext);

  const handleClick = (item: string) => {
    setSearch(item);
  };

  return (
    <HeaderAntd className="headerContainer">
      <div
        style={{
          display: "flex",
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
        <Search />
      </div>
      <div
        style={{
          marginTop: "1rem",
          overflowX: "scroll",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          paddingBottom: "16px",
        }}
      >
        {tags.map((item, index) => (
          <Tag
            key={index}
            isActive={search === item}
            onClick={() => handleClick(item)}
          >
            {item}
          </Tag>
        ))}
      </div>
    </HeaderAntd>
  );
}
