
import React, { Component } from 'react';
import List from "./Component/List";
import "./App.css";

class App extends Component {
  state={articles:[{id:0,name:"pc",price:1155,qt:0,image:"https://www.01net.com/app/uploads/2019/10/MEA-autonomie-PC.jpg"},{id:1,name:"ipad",price:1000,qt:0,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ72npCSnF7uJB2Y2Iul30HaioefqtHmhf_A&usqp=CAU"}],sum:0};
  incrementqt=(id)=>{
    this.setState({articles:this.state.articles.map((el)=>{
if(el.id==id){
  return{...el,qt:el.qt+1}
}
else{
  return el
}
    })})

  }
  decrementqt=(id)=>{
    this.setState({articles:this.state.articles.map((el)=>{
      if(el.id==id && el.qt>0){
      return{...el,qt:el.qt-1}
      }
      else{
        return el
      }
    })})
  }
  drop=(article)=>{
    this.setState({articles: this.state.articles.filter((el)=> el.id !== article.id), sum: this.state.sum - article.qt * article.price,
    })
  }
  handletotalincrement=(article)=>{
this.setState({sum:this.state.sum+article.price})
  }
  handletotaldecrement=(article)=>{
     if(this.state.sum>0){
    this.setState({sum: this.state.sum-article.price})
    }
  }
  render() {
    const {articles,sum}=this.state;
    return (<div className='App'>
      <List articles={articles} sum={sum} incrementqt={this.incrementqt} decrementqt={this.decrementqt} 
      drop={this.drop} handletotalincrement={this.handletotalincrement} handletotaldecrement={this.handletotaldecrement}/>
    </div>
    )
  }
}
export default  App;