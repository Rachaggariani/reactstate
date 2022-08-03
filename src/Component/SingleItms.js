import { ThirtyFpsSelect } from '@mui/icons-material';
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class SingleItms extends Component {
    constructor(props){
     super(props)
    }
    handleIncrement=()=>{
        this.props.incrementqt(this.props.el.id)
        this.props.handletotalincrement(this.props.el)
    }
    handledecrement=()=>{
        this.props.decrementqt(this.props.el.id)
        this.props.handletotaldecrement(this.props.el)
    }
    handledelete=()=>{
        this.props.drop(this.props.el)
    }
  
  render() {
    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'10px'}}>
      <div>
        <Card.Text>
        <img src={this.props.el.image} width="200px"/>
        <Card.Title>{this.props.el.name}</Card.Title>
        {this.props.el.price}
        </Card.Text>
        <Button variant="primary" onClick={this.handledelete}>Delete</Button>
      </div>
      <div style={{display :'flex'}} >
      <Button variant="success" onClick={this.handleIncrement}>+</Button>{' '}
      <span style={{fontSize:"20px"}}>{this.props.el.qt}</span>
      <Button variant="danger" onClick={this.handledecrement}>-</Button>{' '}
      </div>
    </div>
    
  );
  }
}
export default SingleItms;
