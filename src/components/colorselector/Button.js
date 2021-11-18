function Button(props) {
    // Fonction déclenchée au click qui rappelle la fonction du parent passée en props
    // Cela permet de passer à handleclick un paramètre qui est la valeur du boutton
    function sendColorBack(e) {
        props.handleClick(e.target.value)
    }

    return(
        <button onClick={sendColorBack} className={"mx-2 btn btn-" + props.color} value={props.color}>{props.color}</button>
    )
}

export default Button;