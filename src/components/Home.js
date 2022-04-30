import React from 'react';
import "./css/Home.css"


function Home() {
    return (
        <div className='m-5'>
            <h1>Hello Farmer!!</h1>
            <h3>We are here to help you <strong>Maximize</strong> your profit</h3>
            So now lets start by filling in details about your farm and you so that we can suggest you the best plan
            {/* <Table hover variant="light">
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
            </Table> */}
        </div>
    )
}

export default Home