import React, { useEffect, useState } from 'react'
import "./css/Dashboard.css"
import { collection, getDocs, getDocsFromCache, getFirestore } from "firebase/firestore"
import { Database, getDatabase, onValue, ref } from "firebase/database";
import PlanPrefab from "./PlanPrefab.js"
import { useNavigate } from 'react-router-dom';
import { app, getData } from "../firebaseConfig.js"
import { useObject } from "react-firebase-hooks/database"

const host = `https://expertkheti-default-rtdb.asia-southeast1.firebasedatabase.app`;


function Dashboard() {

    const [plans, setPlans] = useState([])

    let url = `${host}/plans.json`;

    useEffect(()=>{

        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setPlans(data);
        });
    },[])
    
    // const plansarr = Object.entries(plans);

    let plansarr=[];
    for (let index = 0; index < 10; index++) {
        let plstr=`plans.p${index}`;
        plansarr.push(Object.entries(plstr))
    }
    plansarr.pop();

    plansarr.push(Object.entries(plans))
    // console.log(plansarr)
    
    // const navigate = useNavigate()
    return (
        <>
            <PlanPrefab key={""} crop={""} />
            {/* {plansarr.map((element) => (
                <>
                    {console.log(element[1])}
                    <PlanPrefab key={element[1]} crop={element[1]} />
                </>
            ))} */}
        </>
    )
}

export default Dashboard