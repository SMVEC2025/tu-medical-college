import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({file}) => {
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div className="pdf-viewer" style={{height:"100vh"}} >
            <iframe
                src={`/assets/images/msi/${file}`}
                width="100%"
                height="100%"
                title="PDF Viewer"
            />
        </div>
    );
};

export default PDFViewer;
