const Person = (props) => {
    let msg;
    let name = props.name;
    if (props.age < 18) {
        msg = "you must be 18";
    } else msg = "please go vote!";

    if (props.name.length > 8) {
        name = name.slice(0, 6);
    }
    return (
        <div>
            <p>Learn some information about this person</p>
            <p>
                {name}: I am {props.age} years old.
            </p>
            <h3>{msg}</h3>
            <h4>Hobbies:</h4>
            <ul>
                {props.hobbies.map((hobby) => (
                    <li>{hobby}</li>
                ))}
            </ul>
            <hr />
        </div>
    );
};
