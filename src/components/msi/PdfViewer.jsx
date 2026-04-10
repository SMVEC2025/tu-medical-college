const PDFViewer = ({ file }) => {
    return (
        <div className="pdf-viewer">
            <iframe
                className="pdf-viewer__frame"
                src={`/assets/images/msi/${file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                width="100%"
                height="100%"
                title="PDF Viewer"
            />
        </div>
    );
};

export default PDFViewer;
