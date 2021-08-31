import React, { useState, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';

function DataList() {
    const [user, setUser] = useState([])
    const { ExportCSVButton } = CSVExport;
    const MyExportCSV = (props) => {
        const handleClick = () => {
            props.onExport();
        };
        return (
            <div className="btn btn-success" onClick={handleClick}>Export to CSV</div>
        );
    };



    const columns = [
        { dataField: 'Bill_No', text: 'Bill_No', sort: true, filter: textFilter() },
        { dataField: 'Retailer_Name', text: 'Retailer_Name', sort: true, filter: textFilter() },
        { dataField: 'Order_Date', text: 'Order_Date', sort: true, filter: textFilter() },
        { dataField: 'Date', text: 'Delivery_Date', sort: true, filter: textFilter() },
        { dataField: 'Order_Amount', text: 'Order_Amount', sort: true, filter: textFilter() },
        { dataField: 'status', text: 'status', sort: true, filter: textFilter() },
        //  { dataField: 'city', text: 'CITY', sort: true, filter: textFilter() },
    ]
    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 5,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
            console.log('page', page)
            console.log('sizePerPage', sizePerPage)
        },
        onSizePerPageChange: function (sizePerPage, page) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        }
    });

    useEffect(() => {
        fetch("http://localhost:3000/results").then((result) => {
            result.json().then((resp) => {
                console.log("result", resp)
                setUser(resp)
            })
        })
    }, [])
    return (
        <div>
            <ToolkitProvider
                bootstrap4
                keyField='id'
                columns={columns}
                data={user}
                exportCSV
            >
                {
                    props => (
                        <>
                            <MyExportCSV {...props.csvProps} />
                            <ExportCSVButton {...props.csvProps}></ExportCSVButton>
                            <hr />


                            <BootstrapTable
                                // bootstrap4
                                // keyField='id'
                                // columns={columns}
                                // data={user}
                                ColumnToggle
                                pagination={pagination}
                                filter={filterFactory()}
                                {...props.baseProps}

                            />
                        </>
                    )
                }
            </ToolkitProvider>


            {/* <table border="1" style={{ float:'left' }}>
        <tbody>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>EMAIL</td>
            <td>BODY</td>
          </tr>{
            user.map((item) =>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.body}</td>
              </tr>
            )
            
          }
        </tbody>
        : 'Loading..........'
      </table> */}
        </div >
    )
}

export default DataList