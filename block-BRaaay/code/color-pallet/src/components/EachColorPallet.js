export default function EachColorPallet(props) {
    let {color} = props;
  return (
    <div className="flex-17 mb-4 mr-6">
        <div className="w-full h-12 rounded " style={{backgroundColor:color}}></div>
        <div className="flex justify-between">
          <p>{props.colorWeight}</p>
          <p className="text-gray-500">{color}</p>
        </div>
      </div>
  );
}