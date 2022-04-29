import React, { useState } from 'react'
import { Alert, Collapse } from 'react-bootstrap'

function Contactus() {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    return (
        <div className='m-5'>

            <Alert variant="secondary"
                onClick={() => setOpen1(!open1)}
                aria-controls="example-collapse-text"
                aria-expanded={open1}>
                Sudhanshu Prasad
            </Alert>
            <Collapse in={open1}>
                <div id="example-collapse-text">
                    <a href="mailto:sudhanshuprasad.sp@gmail.com">Email: sudhasnhuprasad.sp@gmail.com</a>
                </div>
            </Collapse><br/>

            <Alert variant="secondary"
                onClick={() => setOpen2(!open2)}
                aria-controls="example-collapse-text"
                aria-expanded={open2}>
                Biswanaath Patra
            </Alert>
            <Collapse in={open2}>
                <div id="example-collapse-text">
                <a href="mailto:sudhanshuprasad.sp@gmail.com">Email: roshanbiswanathpatra@gmail.com</a>
                </div>
            </Collapse><br/>
            
            <Alert variant="secondary"
                onClick={() => setOpen3(!open3)}
                aria-controls="example-collapse-text"
                aria-expanded={open4}>
                Debangan
            </Alert>
            <Collapse in={open3}>
                <div id="example-collapse-text">
                <a href="mailto:sudhanshuprasad.sp@gmail.com">Email: roshanbiswanathpatra@gmail.com</a>
                </div>
            </Collapse><br/>
            
            <Alert variant="secondary"
                onClick={() => setOpen4(!open4)}
                aria-controls="example-collapse-text"
                aria-expanded={open4}>
                Om Tanmaya Pati
            </Alert>
            <Collapse in={open4}>
                <div id="example-collapse-text">
                <a href="mailto:sudhanshuprasad.sp@gmail.com">Email: roshanbiswanathpatra@gmail.com</a>
                </div>
            </Collapse><br/>
        </div>
    )
}

export default Contactus