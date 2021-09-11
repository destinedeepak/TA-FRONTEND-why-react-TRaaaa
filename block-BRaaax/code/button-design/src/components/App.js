import Button from './Button';


export default function App(){
    return(
        <div className="app">
        <Button label="button" size="medium" type="secondary"/>
        <Button label="button" size="small" type="primary"/>
        <Button label="button" size="large" type="tertiary"/>
        <Button label="button" onClickHandler={()=>{alert('You just clikced!')}} />
        <Button label="button" disabled/>
        </div>
    )
}