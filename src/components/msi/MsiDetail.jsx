import React, { useRef, useState } from 'react'
import './MsiDetail.css'
import PDFViewer from './PdfViewer'

function MsiDetail() {
    const admittedStudents2025 = [
        ['TU6256110110001', 'AARTHI S'],
        ['TU6256110110002', 'AASHIKA R'],
        ['TU6256110110003', 'ABIRAM JASHA'],
        ['TU6256110110004', 'AGALYA V'],
        ['TU6256110110005', 'AKSHAYA RAMESH BABU'],
        ['TU6256110110006', 'AKSHAYA V'],
        ['TU6256110110007', 'ANANTH M'],
        ['TU6256110110008', 'ANBARASI S'],
        ['TU6256110110009', 'ANITHA A'],
        ['TU6256110110010', 'ANITHA A'],
        ['TU6256110110011', 'ASEMA SAFAA M'],
        ['TU6256110110012', 'BALAJI E K'],
        ['TU6256110110013', 'BAVANA G'],
        ['TU6256110110014', 'BHUVANESH T'],
        ['TU6256110110015', 'BOOBESH S'],
        ['TU6256110110016', 'BRINDHA G'],
        ['TU6256110110017', 'CHAARUHASINI S'],
        ['TU6256110110018', 'CHANDRA PRAKASH R'],
        ['TU6256110110019', 'DARVIN VISWA D'],
        ['TU6256110110020', 'DEVADHARSHINI S'],
        ['TU6256110110021', 'DHARANI V'],
        ['TU6256110110022', 'DHARANIDHARAN R'],
        ['TU6256110110023', 'DHARSHANA PRASATH M'],
        ['TU6256110110024', 'DHESHWARIYA S'],
        ['TU6256110110025', 'FATHIMA NASRIN A'],
        ['TU6256110110026', 'GOKILA V'],
        ['TU6256110110027', 'HARINI D'],
        ['TU6256110110028', 'HARIPRASATH S'],
        ['TU6256110110029', 'HARISH DURAI RAJA M'],
        ['TU6256110110030', 'HEMASRE A D'],
        ['TU6256110110031', 'INIYA D K'],
        ['TU6256110110032', 'JOSHUA PAUL'],
        ['TU6256110110033', 'KALYAN KUMAR V'],
        ['TU6256110110034', 'KARTHICK R'],
        ['TU6256110110035', 'KAVYA MOHAN'],
        ['TU6256110110036', 'KAYATHRI'],
        ['TU6256110110037', 'KEERTHANA K'],
        ['TU6256110110038', 'KEERTHI D'],
        ['TU6256110110039', 'KOSALARAM S'],
        ['TU6256110110040', 'LAKSHANA R'],
        ['TU6256110110041', 'LOCHANA G'],
        ['TU6256110110042', 'MADESHWAR P S'],
        ['TU6256110110043', 'MADHUMITHA R'],
        ['TU6256110110044', 'MAHARAJAN K'],
        ['TU6256110110045', 'MAHBOOBA M'],
        ['TU6256110110046', 'MIRUDULA SREE SJ'],
        ['TU6256110110047', 'MOHAMMED IRFAAN M'],
        ['TU6256110110048', 'MONASRI T'],
        ['TU6256110110049', 'MYTHILI V'],
        ['TU6256110110050', 'NANDHA KISHORE'],
        ['TU6256110110051', 'NAVEEN KUMAR B'],
        ['TU6256110110052', 'NAVEEN PRAKASH R G'],
        ['TU6256110110053', 'NAWIN BABU K'],
        ['TU6256110110054', 'NEERRAJA R'],
        ['TU6256110110055', 'NEHA SRI J'],
        ['TU6256110110056', 'NIHARIKA S B'],
        ['TU6256110110057', 'NITHILAN SIVA SANKARA KUMAR'],
        ['TU6256110110058', 'PRIYADHARSHINI P'],
        ['TU6256110110059', 'R HEMA'],
        ['TU6256110110060', 'RAHUL ELAMARAN KARIKALAN'],
        ['TU6256110110061', 'RAJANBABU V'],
        ['TU6256110110062', 'RENAHA M'],
        ['TU6256110110063', 'RITHISH N'],
        ['TU6256110110064', 'ROHIT A S'],
        ['TU6256110110065', 'SAJITHA C'],
        ['TU6256110110066', 'SAM SHARAN A K'],
        ['TU6256110110067', 'SANTHOSH KUMAR S'],
        ['TU6256110110068', 'SELVAPRIYA P'],
        ['TU6256110110069', 'SHAMALA SHREE M'],
        ['TU6256110110070', 'SHINY HEBSIBA K'],
        ['TU6256110110071', 'SHREYA TEJASWINI S'],
        ['TU6256110110072', 'SINU MANOHAR'],
        ['TU6256110110073', 'SIVAPRAKASH C'],
        ['TU6256110110074', 'SREENIDHI C S'],
        ['TU6256110110075', 'SRIMATHI K'],
        ['TU6256110110076', 'SRINIDHI U V'],
        ['TU6256110110077', 'SUJANA ASFAR Z'],
        ['TU6256110110078', 'SUJEETH G B'],
        ['TU6256110110079', 'SUJITA N'],
        ['TU6256110110080', 'SUREKA P'],
        ['TU6256110110081', 'SURYAMOORTHI G'],
        ['TU6256110110082', 'SUVETHA M'],
        ['TU6256110110083', 'T R HARINI SHREE'],
        ['TU6256110110084', 'TAMILMUTHALVAN B'],
        ['TU6256110110085', 'THAMIZHNILAVAN S'],
        ['TU6256110110086', 'V.JAYAHARI'],
        ['TU6256110110087', 'VANDANA P R'],
        ['TU6256110110088', 'VARSHNI S'],
        ['TU6256110110089', 'VASAVI DEVI B'],
        ['TU6256110110090', 'VETRIVEL G'],
        ['TU6256110110091', 'VIBILEN MUTHUKRISHNAN'],
        ['TU6256110110092', 'VISHNU PRASAD A'],
        ['TU6256110110093', 'VISHNU PRIYA K'],
        ['TU6256110110094', 'VISHRUTHA R'],
        ['TU6256110110095', 'YOGASRI M'],
        ['TU6256110110096', 'YOGITA'],
        ['TU6256110110097', 'BHUVAN SAGAR K J'],
        ['TU6256110110098', 'KAVYA PRIYA J'],
        ['TU6256110110099', 'LALIT ADITHYA S'],
        ['TU6256110110100', 'VIJAY SHREE S']
    ]
    const researchPublications = [
        {
            id: 1,
            authors: "Parameshwar P, Kangeyan N, Ramadass DB",
            title: "Body Image Perception and its Impact on Psychosocial Well-being among youths: A Cross sectional study",
            journal: "International Journal of Medical and Pharmaceutical Research",
            year: 2025,
            volume_issue_pages: "6:427-31",
            link: "https://ijmpr.in/article/body-image-perception-and-its-impact-on-psychosocial-well-being-among-youths-a-cross-sectional-study-1501/"
        },
        {
            id: 2,
            authors: "Parameshwar P, Ramadass DB, Khan A, Subramanian B",
            title: "Identify the learning style preference by using VARK (Visual, Auditory, Read, Write & Kinesthetic) model among first year B.Sc. Nursing students",
            journal: "Journal of Population Therapeutics and Clinical Pharmacology",
            year: 2025,
            volume_issue_pages: "32(10):663-70",
            link: "https://www.jptcp.com/index.php/jptcp/article/view/12210"
        },
        {
            id: 3,
            authors: "Gunalan P, Riswan MM, Rajarajachozhan D, Gunalan P",
            title: "Clinico-Epidemiological Profile of Psoriasis in a Tertiary Care Centre, South India",
            journal: "International Journal of Medicine and Public Health",
            year: 2026,
            volume_issue_pages: "16(1):62-66",
            link: "https://www.ijmedph.org/Uploads/Volume16Issue1/13.%204058.%20IJMEDPH_PH_62-66.pdf"
        },
        {
            id: 4,
            authors: "Gunalan P, Riswan MM, Rajarajachozhan D, Gunalan P",
            title: "Clinico-Epidemiological Profile of Psoriasis in a Tertiary Care Centre, South India",
            journal: "International Journal of Life Sciences Biotechnology and Pharma Research",
            year: 2025,
            volume_issue_pages: "15(1):19-23",
            link: "https://ijlbpr.com/uploadfiles/4vol15issue1pp19-23.20260106115852.pdf"
        },
        {
            id: 5,
            authors: "Gopal M et al.",
            title: "Immunity, Metabolism, and Beyond Bones: Unraveling the Physiological Mysteries of Vitamin D",
            journal: "Functional Biochemistry of Micronutrients (Springer)",
            year: 2026,
            volume_issue_pages: "Vol 35",
            link: "https://doi.org/10.1007/978-3-032-14441-6_12"
        },
        {
            id: 6,
            authors: "Nagarajan P, Rajarathinam M, Ekambaram G, Louis LR, Kaliaperumal R",
            title: "Narrative Review of Advancements in Stem Cell Therapy: Adipose-Derived Stem Cells for Diabetic Foot Ulcer Treatment",
            journal: "International Journal of Hematology-Oncology and Stem Cell Research",
            year: 2025,
            volume_issue_pages: "",
            link: "https://publish.kne-publishing.com/index.php/IJHOSCR/article/view/19987/18553"
        },
        {
            id: 7,
            authors: "Vignesh Kanna Balaji et al.",
            title: "Effectiveness of the Modified Peyton's Method in Teaching Acid-Fast Staining for Phase II Indian Medical Graduates",
            journal: "Chettinad Health City Medical Journal",
            year: 2025,
            volume_issue_pages: "14(4):11-15",
            link: "https://doi.org/10.24321/2278.2044.202543"
        },
        {
            id: 8,
            authors: "Solomon S, Sabarinathan T, Saleem M, Velmurugan P",
            title: "A comparative evaluation of conventional and automated (VITEK 2) methods for antibiotic susceptibility testing of Enterococcus species",
            journal: "Journal of Medical Science and Research",
            year: 2025,
            volume_issue_pages: "13(4):367-376",
            link: "http://dx.doi.org/10.17727/JMSR.2025/13-65"
        },
        {
            id: 9,
            authors: "Solomon S et al.",
            title: "Diagnostic Performance of the Truenat MTB/RIF Assay Compared with Ziehl-Neelsen and Fluorescence Microscopy",
            journal: "Journal of Pure and Applied Microbiology",
            year: 2026,
            volume_issue_pages: "20(1):534-542",
            link: "https://doi.org/10.22207/jpam.20.1.38"
        }
    ]

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
            type: "admissions-table",
            data: ""
        },
        {
            id: "e",
            name: "Any research publication during the last one year",
            type: "research-table",
            data: ""
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
                                <div key={e.id} className={`con ${state?.id === e.id ? 'true' : ""}`} onClick={() => { handleClick(e) }}>{e.name}</div>
                            ))}
                        </div>
                    </div>

                    <div className='right' ref={targetRef}>
                        <h4>{state?.name}</h4>
                        {state?.type === "admissions-table" ? (
                            <div className='admission-card'>
                                <div className='admission-card__heading'>MBBS - 2025 Batch</div>
                                {/* <div className='admission-card__batch'>I MBBS - 2025 Batch</div> */}
                                <div className='admission-card__table-wrap'>
                                    <table className='admission-table'>
                                        <thead>
                                            <tr>
                                                <th>Sl.No</th>
                                                <th>ENTOLLMENT NUMBER</th>
                                                <th>NAME</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {admittedStudents2025.map(([enrollment, name], index) => (
                                                <tr key={enrollment}>
                                                    <td>{index + 1}</td>
                                                    <td>{enrollment}</td>
                                                    <td>{name}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ) : state?.type === "research-table" ? (
                            <div className='admission-card'>
                                <div className='admission-card__table-wrap research-table-wrap'>
                                    <table className='admission-table research-table'>
                                        <thead>
                                            <tr>
                                                <th>Sl.No</th>
                                                <th>Authors</th>
                                                <th>Title</th>
                                                <th>Journal</th>
                                                <th>Link</th>
                                                <th>Year</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {researchPublications.map((item, index) => (
                                                <tr key={item.id}>
                                                    <td data-label='Sl.No'>{index + 1}</td>
                                                    <td data-label='Authors'>{item.authors}</td>
                                                    <td data-label='Title'>{item.title}</td>
                                                    <td data-label='Journal'>{item.journal}</td>
                                                    <td data-label='Link'>
                                                        <a
                                                            href={item.link}
                                                            target='_blank'
                                                            rel='noreferrer'
                                                            className='research-link-btn'
                                                        >
                                                            Open Link
                                                        </a>
                                                    </td>
                                                    <td data-label='Year'>{item.year}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ) : state?.filepath ? (
                            // <img src={`/assets/images/msi/${state.filepath}`} alt="" />
                            <PDFViewer file={state.filepath} />
                        ) : (
                            <span className='plain-data'>{state?.data}</span>
                        )}

                    </div>
                </div>
            </div>

        </>
    )
}

export default MsiDetail
