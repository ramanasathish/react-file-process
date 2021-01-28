import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';

function Products() {
    const [successList, addSuccessItems] = useState([]);
    const [errorList, addErrorItems] = useState([]);
    const doLoadCsv = async () => {
        try {
            const { data: response } = await axios.get("http://localhost:8080/csv");
            const { ok = [], notOk = [] } = response;
            addSuccessItems(ok)
            addErrorItems(notOk)
        }
        catch (err) {
            console.error(err);
        }
    }
    return (
        <>
            <Container>
                <h5 className="float-left">Inserted Products</h5>
                <Button className="clearfix float-right" size="sm" variant="outline-primary" onClick={doLoadCsv}>Load CSV</Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Manufacturer</th>
                        </tr>
                    </thead>
                    <tbody>

                        {successList.map((item) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.manufacturer}</td>

                            </tr>
                        )}
                    </tbody>
                </Table>
                <h5 className="float-left">Error Products</h5>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Manufacturer</th>
                            <th>Error Message</th>
                        </tr>
                    </thead>
                    <tbody>

                        {errorList.map((item) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.manufacturer}</td>
                                <td>{item.error[0]?.message}</td>

                            </tr>
                        )}
                    </tbody>
                </Table>


            </Container>
        </>

    )
}

export default Products;