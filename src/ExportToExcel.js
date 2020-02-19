import React, { component, Component } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
class ExportToExcel extends Component{
render(){
    return(
        <div style={{marginRight:'25px'}}>
            <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="waves-effect waves-light btn "
            table="table-to-xls"
            filename="filtredData"
            sheet="tablexls"
            buttonText="Export"
            />
            <table hidden={true} id="table-to-xls">
                <thead>
                    <tr>
                        <th>S/No</th>
                        <th>Description</th>
                        <th>Tag No</th>
                        <th>Serial no</th>
                        <th>PO No</th>
                        <th>GRN No</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.posts.map(post =>{
                            return(
                                <tr key={post.id}>
                                    <td>{post.s_no}</td>
                                    <td>{post.des}</td>
                                    <td>{post.tag_no}</td>
                                    <td>{post.serial}</td>
                                    <td>{post.po_no}</td>
                                    <td>{post.grn_no}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

        </div>
    )
}
}
export default ExportToExcel;
