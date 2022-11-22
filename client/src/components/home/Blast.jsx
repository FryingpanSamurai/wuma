const Blast = (props) => {
    console.log(props);
    return (
        <ul>
            <li>{props.user}props.user</li>
            <li>{props.message}props.msg</li>
            <li>{props.date}props.date</li>
        </ul>
    )
}

export default Blast;