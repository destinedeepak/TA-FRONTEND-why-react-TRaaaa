import EachColorPallet from './EachColorPallet';

let colorWeight = [50,100,200,300,400,500,600,700,800,900];

export default function ColorPallet(props) {
  return (
    <section className="flex mb-8">
      <div className="flex-12">
        <h4 className="font-bold capitalize">{props.keyName}</h4>
        <h6 className="text-gray-500">{props.keyName}</h6>
      </div>
      <div className="flex-85 flex justify-start flex-wrap">
          {props.colorKey.map((color,index)=>(
              <EachColorPallet key={color} color={color} colorWeight={colorWeight[index]}/>
          ))}
      </div>
    </section>
  );
}


