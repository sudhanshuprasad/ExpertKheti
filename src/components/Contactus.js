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
                    Email: sudhasnhuprasad.sp@gmail.com
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
                Email: sudhasnhuprasad.sp@gmail.com
                </div>
            </Collapse><br/>
            
            <Alert variant="secondary"
                onClick={() => setOpen3(!open3)}
                aria-controls="example-collapse-text"
                aria-expanded={open4}>
                Sudhanshu Prasad
            </Alert>
            <Collapse in={open3}>
                <div id="example-collapse-text">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </Collapse><br/>
            
            <Alert variant="secondary"
                onClick={() => setOpen4(!open4)}
                aria-controls="example-collapse-text"
                aria-expanded={open4}>
                Sudhanshu Prasad
            </Alert>
            <Collapse in={open4}>
                <div id="example-collapse-text">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </Collapse><br/>
        </div>
    )
}

export default Contactus