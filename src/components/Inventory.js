import React, { Component } from 'react'
import ReactTable from "react-table";
import "react-table/react-table.css";
import ExportToExcel from '../ExportToExcel';
import { Button } from 'react-bootstrap';
import InventoryData from '../data/Inventory.json';

class Inventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
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
    /*componentDidMount(){
      const url="https://jsonplaceholder.typicode.com/posts";
      fetch(url,{
        method:"GET"
      }).then(response => response.json()).then(posts =>{
     //   console.log("posts",posts)
       this.setState({posts: posts})
      })
    }*/
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
                    return (<button className="waves-effect waves-light btn red" onClick={() => {
                        console.log("props", props)
                    }}>Delete</button>)
                },
                sortable: false,
                filterable: false
            },
        ]
        return (
            <div className="container ">
                <br />
                <p><b>Inventory</b> </p>
                <ReactTable
                    columns={columns}
                    data={InventoryData}
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

export default Inventory 
