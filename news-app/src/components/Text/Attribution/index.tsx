interface Props {
  isAuthor?: boolean;
  isSource?: boolean;
  title?: string;
  link?: string;
}

export default function Attribution({
  isAuthor,
  isSource,
  link,
  title,
}: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };
  if (isAuthor) {
    return (
      <p>
        Author —{" "}
        <a
          className="link"
          href={link}
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </p>
    );
  }
  if (isSource) {
    return (
      <p>
        Source —{" "}
        <a
          className="link"
          href={link}
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </p>
    );
  }
}
