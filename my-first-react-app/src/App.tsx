import "./App.css";
import { Card } from "./components/Card/card";
import { MusicCard } from "./components/MusicCard/musicCard";

const blogPosts = [
  {
    title: "Dagur í lifinu mínu",
    text: "Í dag fór ég að vinna og síðan fór ég að sofa",
    image:
      "https://res.cloudinary.com/icelandtours/image/upload/v1670580099/flatey_island_summer_e2506cca1c.jpg",
    authorName: "Kinga",
  },
  {
    title: "Hvað borðaði ég í gær?",
    text: "Fékk mér fisk og kartöflur.",
    image: "https://fiskkaup.is/wp-content/uploads/2019/11/fisktegund-cod.png",
    authorName: "Jón",
  },
];

const musicData = [
  {
    title: "Eurovision lag 2025",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/spotify-minimal-playlist-album-cover-floral-design-template-386954a3206172a6251e3639ba986976_screen.jpg?ts=1681851633",
    url: "https://www.postermywall.com/index.php/art/template/386954a3206172a6251e3639ba986976/spotify-minimal-playlist-album-cover-floral-design-template",
  },
  {
    title: "Autumn",
    image:
      "https://storage.googleapis.com/pr-newsroom-wp/1/2024/10/original_ab67706c1c641da235742a888c2a13f7-1-1024x1024.png",
    url: "https://newsroom.spotify.com/2024-10-22/create-cover-art-playlists-custom-beta/",
  },
  {
    title: "JH Dam",
    image:
      "https://img.freepik.com/free-vector/gradient-album-cover-template_23-2150597431.jpg?semt=ais_hybrid&w=740&q=80",
    url: "https://www.freepik.com/vectors/spotify-album-cover",
  },
];

function App() {
  return (
    <div>
      <h2>Hæ</h2>
      <div style={{ maxWidth: "500px", display: "flex", overflowX: "scroll" }}>
        {blogPosts.map((blog) => (
          <Card
            title={blog.title}
            text={blog.text}
            image={blog.image}
            authorName={blog.authorName}
          />
        ))}
      </div>
      <div style={{ maxWidth: "500px", display: "flex", overflowX: "scroll" }}>
        {musicData.map((song) => (
          <MusicCard title={song.title} image={song.image} url={song.url} />
        ))}
      </div>
    </div>
  );
}

export default App;
