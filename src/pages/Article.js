import { useParams, useHistory } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

function Article() {
  const { id } = useParams();
  const url = "http://localhost:3000/articles/" + id;
  const { data, isPending, error } = useFetch(url);
  const history = useHistory();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, [error, history]);

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <h1>{data.title}</h1>}
      {data && <p>{data.body}</p>}
      {data && <p>By {data.author}</p>}
    </div>
  );
}

export default Article;
