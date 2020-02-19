import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link } from 'react-router-dom';
class AddP extends Component {
    constructor(props) {
        super(props);

        this.onChangeSNo = this.onChangeSNo.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeTagnumber = this.onChangeTagnumber.bind(this);
        this.onChangeSerialnumber = this.onChangeSerialnumber.bind(this);
        this.onChangePono = this.onChangePono.bind(this);
        this.onChangeGrnno = this.onChangeGrnno.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          s_no :  '' ,
           des :  '' ,
           tag_no : 0 ,
           serial : '' ,
           po_no : 0 ,
           grn_no : 0 , 
           date: new Date()
        }
    }
   /* componentDidMount(){
      axios.get('http://localhost:5000/users')
      .then(response => {
          if (response.data.length > 0) {
              this, this.setState({

              })
          }
      })
    }*/
    onChangeSNo(e) {
      this.setState({
          s_no: e.targer.value
      });
  }
  onChangeDescription(e) {
    this.setState({
        des: e.targer.value
    });
}
onChangeTagnumber(e) {
  this.setState({
      tag_no: e.targer.value
  });
}
onChangeSerialnumber(e) {
  this.setState({
      serial: e.targer.value
  });
}
onChangePono(e) {
  this.setState({
      po_no: e.targer.value
  });
}
onChangeGrnno(e) {
  this.setState({
      grn_no: e.targer.value
  });
}
onChangeDate(date) {
  this.setState({
      date: date
  });
}
onSubmit(e) {
  e.preventDefault();
  const purchase = {
    s_no :  this.state.s_no ,     
    des :  this.state.des ,     
    tag_no :  this.state.tag_no ,     
    serial :  this.state.serial ,     
    po_no :  this.state.s_no ,     
    grn_no :  this.state.grn_no ,     
    date: new Date()
  }
  console.log(purchase);
  /*axios.post('http://localhost:5000/exercise/add', exercise)
      .then(res => console.log(res.data));*/
  window.location = '/';
}
    render() {
        return (
            <div className="container ">
           <Form>
      <FormGroup>
        <Label for="sno">S/No</Label>
        <Input type="text" name="sno" id="sno" placeholder="with a placeholder" value= {this.state.s_no} onChange= {this.onChangeSNo}/>
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="text" name="description" id="description" placeholder="with a placeholder"  value= {this.state.des} onChange= {this.onChangeDescription}/>
      </FormGroup>
      <FormGroup>
        <Label for="tag">Tag No</Label>
        <Input type="text" name="tag" id="tag" placeholder="with a placeholder"  value= {this.state.tag_no} onChange= {this.onChangeTagnumber}/>
      </FormGroup>
      <FormGroup>
        <Label for="serial">Serial No</Label>
        <Input type="text" name="serial" id="serial" placeholder="with a placeholder"  value= {this.state.serial} onChange= {this.onChangeSerialnumber}/>
      </FormGroup>
      <FormGroup>
        <Label for="pno">PO No</Label>
        <Input type="text" name="pno" id="pno" placeholder="with a placeholder"  value= {this.state.po_no} onChange= {this.onChangePono}/>
      </FormGroup>   
      <FormGroup>
        <Label for="grn">GRN No</Label>
        <Input type="text" name="grn" id="grn" placeholder="with a placeholder"  value= {this.state.grn_no} onChange= {this.onChangeGrnno}/>
      </FormGroup> 
      <FormGroup>
        <Label for="date">Date</Label>
        <DatePicker
        selected={this.setState.date}
          onChange={this.onChangeDate}
        />
      </FormGroup>
      <Button color="info" type="submit">ADD</Button>
      <Link to="/purchase"><Button>Cancel</Button></Link>
    </Form>
            </div>
        )
    }
}

export default AddP; 
