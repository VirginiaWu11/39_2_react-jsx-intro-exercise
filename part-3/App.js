const App = () => {
    return (
        <div>
            <Person name="John" age="17" hobbies={["play", "tv", "sleep"]} />
            <Person name="Joe" age="19" hobbies={["play", "tv", "sleep"]} />
            <Person
                name="Jonathana"
                age="19"
                hobbies={["play", "tv", "sleep"]}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
