let movieList = [
    {title:"Forest Gump", isWatched: true},
    {title:"Titanic", isWatched: false},
    {title:"Inception", isWatched: false},
    {title:"Bell Bottom", isWatched: false},
]

let root = document.querySelector('.root');
let input = document.querySelector('input');
input.addEventListener('keyup', handelInput);

function handelInput(event){
    let value = event.target.value;
    if(event.keyCode === 13 && value !== ''){
        movieList.push({title:value, isWatched:false});
        event.target.value = '';
        createUI(root, movieList);
    }
}

function handleClick(event){
  movieList[event.target.id].isWatched = !movieList[event.target.id].isWatched;
  createUI(root, movieList);
}

// function createElement(type, attributes = {}, ...childElements){
//     let element = document.createElement(type);
//     for(let key in attributes){
//         if(key.startsWith('date-')){
//             element.setAttribute(key,attributes[key])
//         }else{
//             element[key] = attributes[key];
//         }
//     }
//     childElements.forEach(childElement => {
//         if(typeof childElement === 'object'){
//             element.append(childElement);
//         }
//         if(typeof childElement === 'string'){
//             let node = document.createTextNode(childElement);
//             element.append(node);
//         }
//     })
//     return element;
// }

function createUI(root, movieList){
    // root.innerHTML = ''
    let ui = movieList.map((movie, index) => {
        let li = React.createElement(
        'li',
        {classList: 'each-movie'},
        React.createElement('span', {classList: 'movie'}, movie.title),
        React.createElement('button', {id:index, function: addEventListener('click', handleClick)}, movie.isWatched ? 'Watched' : 'TO Watch')
         )
         return li
    })
    ReactDOM.render(ui, root);
}

createUI(root, movieList);