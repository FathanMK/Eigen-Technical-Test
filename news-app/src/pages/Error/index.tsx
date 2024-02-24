export default function Error() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <p>:(</p>
      <a className="link" href="/">
        Back to Home
      </a>
    </div>
  );
}
