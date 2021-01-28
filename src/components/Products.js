import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

function Products(){
    const [successList,addSuccessItems] = useState([]);
    const [errorList,addErrorItems] = useState([]);
    const doLoadCsv = async () => {
        try{
            const {data: response} = await axios.get("http://localhost:8080/csv");
            const {ok=[],notOk = []} = response;
                addSuccessItems(ok)
                addErrorItems(notOk)
        }
        catch(err){
            console.error(err);
        }
    }
    return(
        <>
            <Button onClick = {doLoadCsv}>Load CSV file</Button>
            <Container>
            {successList.map(e => <div>{JSON.stringify(e)}</div>)}
            <hr/>
            {errorList.map(e => <div>{JSON.stringify(e)}</div>)}

            </Container>
        </>
        
    )
}

export default DisplayProducts;