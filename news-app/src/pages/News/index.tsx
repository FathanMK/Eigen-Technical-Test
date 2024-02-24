import { Layout } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import Center from "../../components/Center";

const { Header, Content } = Layout;

export default function News() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  const goBack = () => {
    navigate(-1);
  };

  if (!state) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <p>:(</p>
        <a className="link" href="/">
          Back to Home
        </a>
      </div>
    );
  }
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
            <a onClick={goBack}>news.</a>
          </h1>
        </Center>
      </Header>
      <Content style={{ marginBlock: "2rem" }}>
        <h1 className="card-title hoverable">
          <a href={state.data.url}>{state.data.title}</a>
        </h1>
        <img
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "200px",
            objectFit: "cover",
            marginTop: "1rem",
            borderRadius: "16px",
          }}
          src={state.data.urlToImage}
        />
        <p style={{ marginBlock: "2rem .5rem" }}>{state.data.description}</p>
        <a
          className="link"
          href={state.data.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          read more
        </a>
      </Content>
    </>
  );
}
