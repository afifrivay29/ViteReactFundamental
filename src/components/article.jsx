function Article() {
  const name = "Afif";
  const titles = ["Tutorial React.JS", "Tutorial Node.JS", "Tutorial Next.JS"];
  return (
    <>
      <div>Ini adalah komponen pertama</div>
      <p>Author: {name}</p>
      <div>
        {titles.map((title) => {
          return (
            <>
              <div>{title}</div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Article;
