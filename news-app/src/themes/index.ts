import { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  components: {
    // titleMarginTop not respecting the value
    // Typography: {
    //   titleMarginBottom: 0,
    //   titleMarginTop: 0,
    // },
    Layout: {
      headerBg: "#fff",
      bodyBg: "transparent",
      headerPadding: 0,
    },
  },
};

export default theme;
