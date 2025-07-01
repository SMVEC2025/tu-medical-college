import React, { useRef, useState } from 'react'
import './MsiDetail.css'
import PDFViewer from './PdfViewer'
import Navbar from '../Navbar'
import FooterThree from '../FooterThree'
import FooterOne from '../FooterOne'
function MsiDetail() {
    const MsiData = [

        {
            id: "a",
            name: "Details of Dean and Medical Superintendent",
            filepath: 'dean.pdf',
            data: ""
        },
        {
            id: "b",
            name: "Teaching as well as non-teaching staff",
            filepath: "",
            data: "Updating..."
        },
        {
            id: "c",
            name: "Details of sanctioned intake capacity of various UG & PG courses",
            filepath: "",
            data: "Not Applicable"
        },
        {
            id: "d",
            name: "List of students admitted merit wise category wise for the current and previous year for all UG & PG courses",
            data: "Not Applicable"
        },
        {
            id: "e",
            name: "Any research publication during the last one year",
            data: "Updating..."
        },
        {
            id: "f",
            name: "Details of CME programmes, Conferences and academic activities conducted by the institution",
            data: "Not Applicable"
        },
        {
            id: "g",
            name: "Details of any awards and achievement received by the students or the faculty",
            data: "Not Applicable"
        },
        {
            id: "h",
            name: "Details of affiliating University and its Vice Chancellor and Registrar",
            filepath: "affiliated.pdf",
            data: ""
        },
        {
            id: "i",
            name: "Result of all examinations of last one year",
            filepath: "",
            data: "Not Applicable"
        },
        {
            id: "j",
            name: "Details of status of recognition of all the courses",
            filepath: "",
            data: "Not Applicable"
        },
        {
            id: "k",
            name: "Details of the clinical material in the hospital",
            filepath: "clinicalmaterial.pdf",
            data: ""
        }
    ]
    const [state, setState] = useState(MsiData[0])
    const targetRef = useRef(null);

    const handleClick = (e) => {
        setState(e)
        targetRef.current?.scrollIntoView({ behavior: 'smooth' });

    }

    return (
        <>
            <Navbar />
            <div className='msi-main'>
                <h2>Biometric Attendance Dashboard</h2>
                <div className='msi-splitter'>

                    <div className='left'>
                        <div className='msi-container'>
                            {MsiData?.map((e) => (
                                <div className={`con ${state?.id == e.id ? 'true' : ""}`} onClick={() => { handleClick(e) }}>{e.name}</div>
                            ))}
                        </div>
                    </div>

                    <div className='right' ref={targetRef}>
                        <h4>{state?.name}</h4>
                        {state?.filepath ? (
                            // <img src={`/assets/images/msi/${state.filepath}`} alt="" />
                            <PDFViewer file={state.filepath} />
                        ) : (
                            <span>{state?.data}</span>
                        )}

                    </div>
                </div>
            </div>
            <FooterOne />
        </>
    )
}

export default MsiDetail
