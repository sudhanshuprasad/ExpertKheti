import React from 'react'
import "./css/Dashboard.css"
import PlanPrefab from "./PlanPrefab.js"
import { Button, Card, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const plans = {
    "p21": [
        "c1",
        "c8",
        "c17"
    ],
    // "p22": [
    //     "c1",
    //     "c8",
    //     "c22"
    // ],
    // "p23": [
    //     "c1",
    //     "c8",
    //     "c28"
    // ]
}

function Dashboard() {


    const plansarr=Object.entries(plans);
    // console.log(plansarr)

    const navigate = useNavigate();
    return (
        <>
            {plansarr.map((element) => (
                <>
                {/* {console.log(element[1])} */}
                <PlanPrefab crop={element[1]} />
                </>
            ))}
        </>
    )
}

export default Dashboard