"use client";

function Greeting(props) {
    const {name,age} = props.user;
    return(
        <h2>
            Hello, {name} I You are {age} years old.
        </h2>
    );
}
//Example8: Passing an Object as a props
function Parent() {
    const user1 = {name:"Alice",age:25};
    const user2 = {name:"Bob", age:50};

    return(
        <div>
            <Greeting user={user1}/>
            <Greeting user={user2}/>
        </div>
    );
}

export default Parent;