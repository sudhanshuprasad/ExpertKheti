import React from 'react';
import { Table } from 'react-bootstrap';
import "./css/Home.css"

let cropPlan=[];

function Home() {
    return (
        <div >
            <Table hover variant="light">
                <thead>
                    <tr>
                        <th></th>
                        <th colSpan={2}>Crop Name</th>
                        <th>Estimated Profit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td colSpan={2}>Wheat</td>
                        <td>₹50000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td colSpan={2}>Corn</td>
                        <td>₹60000</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Rice</td>
                        <td>₹40000</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Home