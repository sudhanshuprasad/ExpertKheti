import React from 'react'
import { Table } from 'react-bootstrap'
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
    {
        "cropName": "sugarcane",
        "index": "4",
        "price": "40000",
    },
    {
        "cropName": "peanuts",
        "index": "5",
        "price": "35000",
    }
];

function Dashboard() {

    const navigate=useNavigate();
    return (
        <div>
            <Table hover variant="light">
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
            </Table>
        </div>
    )
}

export default Dashboard