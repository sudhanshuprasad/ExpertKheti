import React from 'react'
import "./css/Dashboard.css"
import { Button, Card, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

let cropPlan = [
    {
        "cropName": "rice",
        "index": "1",
        "price": "30000",
    },
    {
        "cropName": "wheat",
        "index": "2",
        "price": "10000",
    },
    {
        "cropName": "maze",
        "index": "3",
        "price": "20000",
    },
    // {
    //     "cropName": "sugarcane",
    //     "index": "4",
    //     "price": "40000",
    // },
    // {
    //     "cropName": "peanuts",
    //     "index": "5",
    //     "price": "35000",
    // }
];

function Dashboard() {

    const navigate = useNavigate();
    return (
        <div className='plan mx-2 my-4'>
            <>
                {cropPlan.map((element) => (
                    <Card
                        onClick={()=>navigate(`/plan/${element.cropName}`)}
                        bg={"light"}
                        key={element.index}
                        text={"dark"}
                        style={{ width: '18rem' }}
                        className="mb-2 mx-2"
                    >
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Header>{element.cropName}</Card.Header>
                        <Card.Body>
                            <Card.Title>Plan</Card.Title>
                            <Card.Text>
                                The Estimated profit will be about ₹{element.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </>
            {/* <Table hover variant="light">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Crop Name</th>
                        <th>Estimated Profit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cropPlan.map((element) => (
                            <tr onClick={()=>navigate(`/plan/${element.cropName}`)}>
                                <td>{element.index}</td>
                                <td>{element.cropName}</td>
                                <td>₹{element.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table> */}
        </div>
    )
}

export default Dashboard