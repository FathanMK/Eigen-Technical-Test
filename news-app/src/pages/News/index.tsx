import { Layout } from "antd";
import Center from "../../components/Center";

const { Header, Content } = Layout;

export default function News() {
  return (
    <>
      <Header
        style={{
          paddingBlock: "2rem",
          position: "sticky",
          top: 0,
          zIndex: 100,
          height: "auto",
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
            <a href="/">news.</a>
          </h1>
        </Center>
      </Header>
      <Content style={{ marginBlock: "2rem" }}>
        <h1 className="card-title hoverable">
          <a>The Trial Over Bitcoin’s True Creator Is in Session</a>
        </h1>
        <img
          style={{
            width: "100%",
            height: "auto",
            marginTop: "1rem",
            borderRadius: "16px",
          }}
          src="https://media.wired.com/photos/65bd7e2524c06ba3ede91a33/191:100/w_1280,c_limit/Craig-Wright-Trial-Day-1-Business-Yellow-1494808061.jpg"
        />
        <p style={{ marginBlock: "2rem .5rem" }}>
          A UK High Court will settle a long-running debate over whether Craig
          Wright really is Satoshi Nakamoto, inventor of Bitcoin. Monday’s
          opening arguments laid the groundwork for both sides.
        </p>
        <a className="link">read more</a>
      </Content>
    </>
  );
}
