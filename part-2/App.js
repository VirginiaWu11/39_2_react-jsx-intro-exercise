const App = () => {
    return (
        <div>
            <Tweet
                message="hellooooo"
                username="bleep"
                name="bb"
                date="10/8/21"
            />
            <Tweet
                message="where are you?"
                username="bleep"
                name="bb"
                date="10/9/21"
            />
            <Tweet
                message="still waiting"
                username="bleep"
                name="bb"
                date="10/9/21"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
