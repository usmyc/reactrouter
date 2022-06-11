import { useFetch } from "../hooks/useFetch.js";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3000/articles");
  return (
    <div className="home">
      <h1>Homepage</h1>
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {articles &&
        articles.map((article) => (
          <div key={article.id} className="card">
            <h1> {article.title}</h1>
            <p>{article.author}</p>
            <Link to={`/articles/${article.id}`}>More</Link>
          </div>
        ))}
    </div>
  );
}
