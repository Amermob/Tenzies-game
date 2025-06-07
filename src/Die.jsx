export default function Die(props) {
    return <button style={{backgroundColor: props.isHeld ? "#FFCA28" : "#fff"}} onClick={props.held}>{props.value}</button>;
}
