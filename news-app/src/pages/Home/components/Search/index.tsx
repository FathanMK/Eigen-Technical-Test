import { Input } from "antd";
import { useContext, useEffect, useState } from "react";
import { HomeContext } from "../../providers";

const { Search: SearchAntd } = Input;

export default function Search() {
  const { search, setSearch } = useContext(HomeContext);
  const [value, setValue] = useState(search);

  useEffect(() => {
    setValue(search);
  }, [search]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setSearch(value);
    }, 500);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <SearchAntd
      style={{ width: "200px" }}
      value={value}
      placeholder="Search Articles..."
      onChange={(e) => setValue(e.currentTarget.value)}
    />
  );
}
