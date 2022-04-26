import React from 'react'
import { Table } from 'react-bootstrap'

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
    }
];

function Dashboard() {
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
                            <tr>
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