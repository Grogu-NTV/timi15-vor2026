import "./musicCard.css";
export function MusicCard({
  title,
  image,
  url,
}: {
  title: string;
  image: string;
  url: string;
}) {
  return (
    <div className="musicCard">
      <img src={image} />
      <h3>{title}</h3>
      <a href={url}>Hlusta á lagið</a>
    </div>
  );
}
