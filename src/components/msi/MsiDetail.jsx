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
            filepath: 'Details-of-Dean.pdf',
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
            data: "MBBS : 100 seats"
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
            filepath: "cme-programs.pdf",
            data: ""
        },
        {
            id: "g",
            name: "Details of any awards and achievement received by the students or the faculty",
            filepath: "awardsandachivements.pdf",
            data: ""
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
            data: "MBBS : 100 seats"
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
        if (targetRef.current) {
            const elementPosition = targetRef.current.getBoundingClientRect().top + window.pageYOffset;
            const offset = 200; // adjust this as needed
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    }

    return (
        <>

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

        </>
    )
}

export default MsiDetail
