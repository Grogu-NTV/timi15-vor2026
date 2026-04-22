import "./card.css";

export function Card({
  title,
  text,
  image,
  authorName,
}: {
  title: string;
  text: string;
  image: string;
  authorName: string;
}) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{text}</p>
      <img src={image} width={300} />
      <p>Author: {authorName}</p>
    </div>
  );
}
