const Person = (props) => {
    let msg;
    if (props.age < 18) {
        msg = "you must be 18";
    } else msg = "please go vote!";
    return (
        <div>
            <p>Learn some information about this person</p>
            <p>
                {props.name}: I am {props.age} years old.
            </p>
            <h3>{msg}</h3>
            <hr />
        </div>
    );
};
