const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="fluff" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
