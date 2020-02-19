import React, { Component } from 'react'
import ReactTable from "react-table";
import "react-table/react-table.css";
import ExportToExcel from '../ExportToExcel';
import axios from 'axios';
import {Link} from 'react-router-dom';
import PurchaseData from '../data/Purchase.json';
import Addpurchase from './Addpurchase';
import { Button } from 'reactstrap';
class Purchase extends Component {
    constructor(props) {
        super(props);
        this.deletePurchase= this.deletePurchase.bind(this);
        this.state = {
            purchases: [],
            addModalShow: false,
            fullname: '',
            company: '',
            email: '',
            phone: '',
            date: '',
            room_no: '',
            description: ''
        }
    }
    componentDidMount(){
      const url="http://localhost:5000/purchases/";
      fetch(url,{
        method:"GET"
      }).then(response => response.json()).then(purchases =>{
       console.log("purchases",purchases)
       this.setState({purchases: purchases})
      })
    }
    deletePurchase(id){
      axios.delete('http://localhost:5000/purchases/'+ id)
        .then(res => console.log(res.data));      
    }
    render() {

        let addModalClose = () => {
            this.setState({ addModalShow: false })
        }
        const columns = [
            {
                Header: "S/No",
                accessor: "s_no",
                style: {
                    // textAlign : "right"
                }

            },
            {
                Header: "Description",
                accessor: "des",
                style: {
                    // textAlign : "right"
                },


            },
            {
                Header: "Tag No",
                accessor: "tag_no",
                width: 120,
                maxWidth: 120,
                minWidth: 120
            },
            {
                Header: "Serial no",
                accessor: "serial",
                style: {
                    textAlign: "center"
                },
                
            },
            {
                Header: "PO No",
                accessor: "po_no",
                style: {
                    textAlign: "center"
                },
                
            },
            {
                Header: "GRN no",
                accessor: "grn_no",
                style: {
                    textAlign: "center"
                },
                
            },
            {
                Header: "",
                Cell: props => {
                    return (<Button color="danger" onClick={() => {
                        this.deletePurchase(props.row._original._id);
                    }}>Delete</Button>)
                },
                sortable: false,
                filterable: false
            },
        ]
        return (
            <div className="container ">
                <br />    
              
                <p><b>Purchases</b> </p>
               
                <Link to="/addpurchase"> <Button>Add Purchase</Button></Link>
                <br />
                <ReactTable
                    columns={columns}
                    data={this.state.purchases}
                    filterable
                    defaultPageSize={10}
                >
                    {(state, filtredData, instance) => {
                        this.ReactTable = state.pageRows.map(post => {
                            return post._original
                        });
                        return (
                            <div>
                                {filtredData()}
                                <ExportToExcel posts={this.ReactTable} />
                            </div>
                        )
                    }}


                </ReactTable>
            </div>
        )
    }
}

export default Purchase 
