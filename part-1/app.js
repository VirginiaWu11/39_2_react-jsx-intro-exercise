const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="fluff" />
            <NamedComponent name="bleep" />
            <NamedComponent name="bloop" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
