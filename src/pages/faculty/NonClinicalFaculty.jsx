import React from 'react'
import PDFViewer from '../../components/msi/PdfViewer'

function NonClinicalFaculty() {
  return (
    <div style={{height:"100vh"}}>
      <PDFViewer file='nonclinical.pdf'/>
    </div>
  )
}

export default NonClinicalFaculty
