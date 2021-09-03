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

function createUI(root, movieList){
    root.innerHTML = ''
    movieList.forEach((movie, index) => {
        let li = document.createElement('li');
        li.classList.add('each-movie')
        let span =  document.createElement('span');
        span.classList.add('movie')
        span.innerText = movie.title;
        let button =  document.createElement('button');
        button.id = index;
        button.innerText = movie.isWatched ? 'Watched' : 'TO Watch';
        button.addEventListener('click', handleClick)
        li.append(span,button);
        root.append(li);
    })
}

createUI(root, movieList);