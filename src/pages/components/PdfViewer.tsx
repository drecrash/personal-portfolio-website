import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set the worker source to asynchronously load PDF files
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfUrl: string;
  pageNumber: number;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, pageNumber }) => {
  const pageStyle: React.CSSProperties = {
    width: 612, // Width in points (8.5 inches)
    height: 792, // Height in points (11 inches)
  };



  return (
    <div>
      <Document file={pdfUrl}>
        <Page 
        renderTextLayer={false}
        renderAnnotationLayer={false}
        pageNumber={pageNumber} 
        width={612} 
        height={792} 
        />
      </Document>
    </div>
  );
};

export default PDFViewer;