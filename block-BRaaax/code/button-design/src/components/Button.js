function Button(props){
    let {type='primary', size='medium'} = props;
    function getStyles(){
        return `button button-${size} button-${type}`
    }
    return(
        <button className={getStyles()} disabled={props.disabled} onClick={props.onClickHandler}>{props.label}</button>
    )
}

export default Button;