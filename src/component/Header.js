import React,{Component,Fragment} from 'react';
import './Header.css';


class Header extends Component {
  constructor(){
    super()

    this.state={
      title:'Top-Movies-India',
      keyword:'user text here'
    }

    }

handleChange=(event) => {
  console.log(event.target.value)
  this.setState({keyword:event.target.value?event.target.value:'user text here'})
  this.props.userText(event.target.value)
}


  render(){
  return(
    <Fragment>
<header>

<div className="logo">{this.state.title}</div>
<center>
<input onChange={this.handleChange}/>

<div style={{color:'black'}}>{this.state.keyword}</div>
</center>
<hr/>
</header>
</Fragment>
)

}

}

export default Header;
