import data from '../data/data';
import propTypes from 'prop-types';
function Articles(){
    return (
         <section className="articles container">
             <h2 className="center">
                 Articles
             </h2>
             <div className="flex wrap">
                 {data.map((article, index) =>(
                    <Article key={index } {...article} />
                 ))}
             </div>
         </section>
    )
}

function Article(props){
    function getDate(date){
        return new Date(date);
    }
    return (
        <>
        <article className="flex-28">
                     <img src={props.urlToImage} alt="" />
                     <div className="text">
                         <h4 >{props.title}</h4>
                         <h5 >by: {props.author}</h5>
                         <h5 >published on {getDate(props.publishedAt).getDate()}/{getDate(props.publishedAt).getMonth()}/{getDate(props.publishedAt).getFullYear()}</h5>
                         <p>{props.content.slice(0,50)}...</p>
                         <a href={props.url} target="_blank" className="center btn">Learn More</a>
                     </div>
                 </article>
        </>
    )
}

Article.propTypes = {
    urlToImage: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    author: propTypes.string.isRequired,
    publishedAt: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
}

export default Articles;