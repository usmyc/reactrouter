import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = new URLSearchParams(useLocation().search);
  const name = queryString.get("name");
  return (
    <div>
      <h1>Hey {name}, Hello</h1>
      <p>Be droid!</p>
    </div>
  );
}
