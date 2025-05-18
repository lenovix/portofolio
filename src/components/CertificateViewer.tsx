'use client'

import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

// Atur worker source (wajib)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function CertificateViewer() {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset)
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <Document
        file="/1661357757143.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        className="border shadow rounded"
      >
        <Page pageNumber={pageNumber} width={600} />
      </Document>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => changePage(-1)}
          disabled={pageNumber <= 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 dark:bg-gray-700"
        >
          Prev
        </button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button
          onClick={() => changePage(1)}
          disabled={numPages ? pageNumber >= numPages : true}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 dark:bg-gray-700"
        >
          Next
        </button>
      </div>
    </div>
  )
}
