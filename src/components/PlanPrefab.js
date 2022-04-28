import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

let crops = {
    "c1": {
        "name": "beans-bush",
        "days": "60",
        "wait": "2",
        "weather": "summer"
    },
    "c8": {
        "name": "cauliflower",
        "days": "57",
        "wait": "2",
        "weather": "spring fall"
    },
    "c17": {
        "name": "lettuce-leaf",
        "days": "45",
        "wait": "2",
        "weather": "cool weather"
    },
    // "c23": {
    //     "name": "peas",
    //     "days": "63",
    //     "wait": "1",
    //     "weather": "spring fall"
    // },
    // "c22": {
    //     "name": "greena",
    //     "days": "45",
    //     "wait": "2",
    //     "weather": "cool weather"
    // },
    // "c28": {
    //     "name": "radishes",
    //     "days": "28",
    //     "wait": "2",
    //     "weather": "cool weather"
    // }
};

function PlanPrefab(props) {

    const cropsarr = Object.entries(crops);
    const navigate = useNavigate();
    // console.log(cropsarr)

    return (
        <div className='plan mx-2 my-4'>
            {cropsarr.map((element) => (
                <>
                    <Card
                        onClick={() => navigate(`/plan/${element[1].name.toString()}`)}
                        className="mx-5"
                    >
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/high-angle-farmland-view_23-2148579680.jpg?t=st=1651124973~exp=1651125573~hmac=8d47e18e38529661398047648e484f69fba50d6bf0b6c2636dd062dab24481c2&w=1060" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    {console.log(element[1].name.toString())}
                </>
            ))}
            <hr />
        </div>
    )
}

export default PlanPrefab
