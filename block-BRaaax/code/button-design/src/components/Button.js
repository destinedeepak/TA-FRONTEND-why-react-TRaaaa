import {buttonSizes, buttonTypes} from '../buttonInfo';
function Button(props){
    let {type=buttonSizes.PRIMARY, size=buttonTypes.MEDIUM} = props;
    function getStyles(){
        return `button button-${size} button-${type}`
    }
    return(
        <button className={getStyles()} disabled={props.disabled} onClick={props.onClickHandler}>{props.label}</button>
    )
}

export default Button;