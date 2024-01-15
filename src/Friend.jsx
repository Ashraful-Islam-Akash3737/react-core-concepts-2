export default function Friend({friend}) {
    // const {name, email} = {friend};
    console.log(friend);
    const {name, email} = friend;
    return (
        <div>
            <h3>Name: {name} </h3>
            <p>Email: </p>
        </div>
    )
}