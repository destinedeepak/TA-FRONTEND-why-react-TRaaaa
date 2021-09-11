import ColorPallet from './ColorPallet'
import colors from '../colors.json';

export default function App(){
    return(
        <div className="p-8">
        {Object.keys(colors).map((key)=>(
            <ColorPallet key={key} colorKey={colors[key]} keyName={key}/>
        ))}
        </div>
    )
}