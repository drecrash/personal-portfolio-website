import React, { useState } from 'react';

type Props = {
  pdfUrl: string;
};

const PDFViewer: React.FC<Props> = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Function to handle when the PDF is loaded
  function onPDFLoaded(pdf: any) {
    setNumPages(pdf.numPages);
  }

  return (
    <div>
      <iframe
        title="PDF Viewer"
        src={pdfUrl}
        width="100%"
        height="500px"
        frameBorder="0"
        onLoad={() => onPDFLoaded(window.frames[0].document)}
      />
      {numPages && (
        <p>
          Page {pageNumber} of {numPages}
        </p>
      )}
    </div>
  );
};

export default PDFViewer;