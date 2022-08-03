import React, { Component } from 'react';
import SingleItms from './SingleItms';
 class List extends Component {
    constructor(props){
        super(props)
    } 
  render() {
    return (
<div>
        <div>
      {this.props.articles.map((el)=>(<SingleItms key={el.id} el={el} incrementqt={this.props.incrementqt} decrementqt={this.props.decrementqt} drop={this.props.drop} 
      handletotalincrement={this.props.handletotalincrement} handletotaldecrement={this.props.handletotaldecrement}/>))}
        </div>
    <div style={{display :'flex',justifyContent:'center'}}>
      <h1>Total sum:</h1>
      <h1>{this.props.sum}</h1>
      <h1>$</h1>
    </div>

</div>
    )
  }
}
export default List;