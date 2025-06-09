import "./App.css";
import Article from "./components/Article";
import ArticleProps from "./components/ArticleProps";

function App() {
  return (
    <>
      <div className="App">
        <Article />
        <br />
        <ArticleProps name="Rivay" title="Tutorial Java, Tutorial Mysql, Tutorial Ruby" titles={["Tutorial HTML, Tutorial CSS, Tutorial SCSS"]} />
      </div>
    </>
  );
}

export default App;
