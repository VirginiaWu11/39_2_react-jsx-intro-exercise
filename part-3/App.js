const App = () => {
    return (
        <div>
            <Person name="John" age="17" />
            <Person name="Joe" age="19" />
            <Person name="Jonathana" age="19" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
