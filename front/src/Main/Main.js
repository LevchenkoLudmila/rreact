import './Main.css';
import article from '../data/article.json';

function Main() {
   return (
      <div className="Main">
         {article.map(item=>
         <div className="section-article">
            <h2>{item.title}</h2>
            <div>{item.body}</div>
         </div>)}
      </div>
   );
}
export default Main;