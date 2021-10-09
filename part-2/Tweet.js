const Tweet = (props) => {
    return (
        <div>
            <p>{props.message}</p>
            <p>username: {props.username}</p>
            <p>name: {props.name}</p>
            <p>date: {props.date}</p>
            <hr />
        </div>
    );
};
