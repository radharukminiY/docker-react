import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Movies from './Movies';
import JSON from './db.json';

class Home extends Component{
constructor(){
  super()


this.state={
  movies:JSON,
  filtered:JSON
}
}

filterMovies=(userInput)=>{
const Output=this.state.movies.filter((data)=>{
  return data.feed.toLowerCase().indexOf(userInput.toLowerCase())>-1 || //gives data based on feed
  data.title.toLowerCase().indexOf(userInput.toLowerCase())>-1 //gives data based on title
})
this.setState({filtered:Output})
}

render(){
return(
  <React.Fragment>


<Header userText={(data)=>{this.filterMovies(data)}}/>
<Movies moviesdata={this.state.filtered}/>
<hr/>
<Footer year="2021"/>
  </React.Fragment>
)
}
}

export default Home;
