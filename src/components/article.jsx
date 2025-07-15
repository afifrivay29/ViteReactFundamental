import { useContext } from "react";
import { GlobalContext } from "../content";

function Article(props) {
  const user = useContext(GlobalContext)

  return (
    <>
      <h3>{props.title}</h3>
      <small>Date : {props.date}, tags : {props.tags.join(", ")}</small>
      <div>
        <small>Ditulis oleh {user.username}</small>
      </div>
    </>
  );
}

export default Article;
