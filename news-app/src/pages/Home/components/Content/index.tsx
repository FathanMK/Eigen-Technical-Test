import { Layout, Spin } from "antd";
import { Fragment, useContext, useEffect, useRef } from "react";

import Card from "../../../../components/Card";
import Attribution from "../../../../components/Text/Attribution";
import { HomeContext } from "../../providers";
import Center from "../../../../components/Center";

const { Content: AntdContent } = Layout;

export default function Content() {
  const { data, status, fetchNextPage, hasNextPage, isFetching } =
    useContext(HomeContext);

  const contentRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching ||
      !hasNextPage
    ) {
      return;
    }
    fetchNextPage();
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, [isFetching]);

  return (
    <AntdContent
      ref={contentRef}
      style={{
        marginBlock: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      {status !== "pending" &&
        data?.pages.map((group, i) => (
          <Fragment key={i}>
            {group.data.articles.length === 0 ? (
              <Center>
                <p style={{ textAlign: "center" }}>
                  No article found <br /> ):
                </p>
              </Center>
            ) : (
              group.data.articles.map((item: any, index: any) => (
                <Card key={index} cover={item.urlToImage}>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Description>{item.description}</Card.Description>
                  <Card.Footer>
                    <Attribution isAuthor title={item.author} />
                    <Attribution
                      isSource
                      title={item.source.name}
                      link={item.url}
                    />
                  </Card.Footer>
                </Card>
              ))
            )}
          </Fragment>
        ))}
      <Center>{isFetching && <Spin />}</Center>
    </AntdContent>
  );
}
