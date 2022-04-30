import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const host = `https://expertkheti-default-rtdb.asia-southeast1.firebasedatabase.app`;

let cropshard = {
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

    const navigate = useNavigate();
    const crop = props.crop;
    const cropsarr = Object.entries(cropshard);

    const [crop0, setCrop0] = useState();
    useEffect(() => {
        try {
            if (crop[1].length >= 2) {
                console.log(props.crop[1][0])

                let url = `${host}/crops/${props.crop[1][0]}.json`;
                fetch(url)
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        setCrop0(data);
                        // console.log(data)
                    });
            }
        } catch (error) {

        }
    }, [props, crop])

    // console.log(crop0)

    //2nd copy
    const [crop1, setCrop1] = useState();
    useEffect(() => {
        try {
            if (crop[1].length >= 2) {
                console.log(props.crop[1][1])

                let url = `${host}/crops/${props.crop[1][1]}.json`;
                fetch(url)
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        setCrop1(data);
                        // console.log(data)
                    });
            }
        } catch (error) {

        }
    }, [props, crop])

    // console.log(crop1)
    
    //3rd copy
    const [crop2, setCrop2] = useState();
    useEffect(() => {
        try {
            if (crop[1].length >= 2) {
                console.log(props.crop[1][2])

                let url = `${host}/crops/${props.crop[1][2]}.json`;
                fetch(url)
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        setCrop2(data);
                        // console.log(data)
                    });
            }
        } catch (error) {

        }
    }, [props, crop])

    // console.log(crop2)

    return (
        <div className='mx-2 my-5 plan'>
            {/* <>
                {crop0!==undefined?<Card
                    onClick={() => navigate(`/plan/${crop0.name.toString()}`)}
                    className="mx-5"
                >
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/high-angle-farmland-view_23-2148579680.jpg?t=st=1651124973~exp=1651125573~hmac=8d47e18e38529661398047648e484f69fba50d6bf0b6c2636dd062dab24481c2&w=1060" />
                    <Card.Body>
                        <Card.Title>{crop0.name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>:<></>}


                {crop1!==undefined?<Card
                    onClick={() => navigate(`/plan/${crop1.name.toString()}`)}
                    className="mx-5"
                >
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/high-angle-farmland-view_23-2148579680.jpg?t=st=1651124973~exp=1651125573~hmac=8d47e18e38529661398047648e484f69fba50d6bf0b6c2636dd062dab24481c2&w=1060" />
                    <Card.Body>
                        <Card.Title>{crop1.name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>:<></>}


                {crop2!==undefined?<Card
                    onClick={() => navigate(`/plan/${crop2.name.toString()}`)}
                    className="mx-5"
                >
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/high-angle-farmland-view_23-2148579680.jpg?t=st=1651124973~exp=1651125573~hmac=8d47e18e38529661398047648e484f69fba50d6bf0b6c2636dd062dab24481c2&w=1060" />
                    <Card.Body>
                        <Card.Title>{crop2.name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>:<></>}


            </> */}

            {cropsarr.map((element) => (
                <>
                    <Card
                        onClick={() => navigate(`/plan/${element[1].name.toString()}`)}
                        className="mx-5"
                    >
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/high-angle-farmland-view_23-2148579680.jpg?t=st=1651124973~exp=1651125573~hmac=8d47e18e38529661398047648e484f69fba50d6bf0b6c2636dd062dab24481c2&w=1060" />
                        <Card.Body>
                            <Card.Title>{element[1].name}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </>
            ))}
            <hr />
        </div>
    )
}

export default PlanPrefab
