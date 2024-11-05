import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set the workerSrc to load the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const PdfPreviewModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1); // reset to first page on new document load
  };

  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages));

  return (
    <div className="inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white py-5 rounded-lg shadow-lg max-w-4xl w-full relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
          &times;
        </button>

        {/* PDF Document */}
        <div className="flex flex-col items-center w-full">
          <Document
            file="/pdf/Ashish_cv.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            className="flex justify-center h-[500px] overflow-y-scroll"
          >
            <Page pageNumber={pageNumber} renderTextLayer={true} renderAnnotationLayer={true} />
          </Document>

          {/* Page Number Display */}
          <p className="text-center text-gray-700 mt-4">
            Page {pageNumber} of {numPages}
          </p>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4 w-full px-8">
            <button
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              className="bg-gray-200 text-gray-600 py-1 px-3 rounded-md hover:bg-gray-300 disabled:bg-gray-100"
            >
              Previous
            </button>
            <button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className="bg-gray-200 text-gray-600 py-1 px-3 rounded-md hover:bg-gray-300 disabled:bg-gray-100"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfPreviewModal;
