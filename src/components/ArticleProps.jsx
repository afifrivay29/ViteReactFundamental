function ArticleProps(props) {
    return (
        <>
            <div>{props.name}</div>
            <p>{props.title}</p>
            <div>
                {props.titles.map((title) => {
                return <div>{title}</div>
            })}
            </div>
        </>
    );
}

export default ArticleProps;