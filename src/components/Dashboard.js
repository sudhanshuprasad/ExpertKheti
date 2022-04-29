import React from 'react'
import "./css/Dashboard.css"
import { collection, getDocs, getDocsFromCache, getFirestore } from "firebase/firestore"
import { getDatabase, onValue, ref } from "firebase/database";
import PlanPrefab from "./PlanPrefab.js"
import { useNavigate } from 'react-router-dom';


const plans = {
    "p21": [
        "c1",
        "c8",
        "c17"
    ],
    "p22": [
        "c1",
        "c8",
        "c22"
    ],
    "p23": [
        "c1",
        "c8",
        "c28"
    ]
}

const database = getFirestore();
const collectionRef = collection(database, "plans");

console.log(collectionRef)
getDocs(collectionRef)
    .then((snapshot) => {
        console.log(snapshot.docs)
    })

function Dashboard() {

    const plansarr = Object.entries(plans);
    // console.log(plansarr)

    const navigate = useNavigate();
    return (
        <>
            {plansarr.map((element) => (
                <>
                    <PlanPrefab key={element[1]} crop={element[1]} />
                </>
            ))}
        </>
    )
}

export default Dashboard