function Button(props) {

    function sendColorBack(e) {
        props.handleClick(e.target.value)
    }

    return(
        <button onClick={sendColorBack} className={"mx-2 btn btn-" + props.color} value={props.color}>{props.color}</button>
    )
}

export default Button;