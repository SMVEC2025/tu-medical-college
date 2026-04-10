import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ file }) => {
    const [numPages, setNumPages] = useState(0);
    const [pageWidth, setPageWidth] = useState(900);
    const viewerRef = useRef(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    useEffect(() => {
        const updatePageWidth = () => {
            if (!viewerRef.current) return;
            const containerWidth = viewerRef.current.clientWidth;
            // Keep small side padding so page shadow doesn't clip at edges
            setPageWidth(Math.max(280, containerWidth - 16));
        };

        updatePageWidth();
        window.addEventListener("resize", updatePageWidth);

        return () => {
            window.removeEventListener("resize", updatePageWidth);
        };
    }, []);

    return (
        <div className="pdf-viewer" ref={viewerRef}>
            <Document
                file={`/assets/images/msi/${file}`}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div className="plain-data">Loading PDF...</div>}
            >
                <div className="pdf-viewer__pages">
                    {Array.from({ length: numPages }, (_, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            width={pageWidth}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                        />
                    ))}
                </div>
            </Document>
        </div>
    );
};

export default PDFViewer;
