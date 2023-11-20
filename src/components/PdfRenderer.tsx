'use client';

import { ChevronDown, ChevronUp, Loader2 } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useToast } from './ui/use-toast';
import { useResizeDetector } from 'react-resize-detector';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PdfRendererProps {
  url: string;
}

const PdfRenderer = ({ url }: PdfRendererProps) => {
  const { toast } = useToast();

  const [numPages, setNumPages] = useState<number>();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { width, ref } = useResizeDetector();
  return (
    <div className='w-full bg-white rounded-md shadow flex flex-col items-center'>
      <div className='h-14 w-full border-b border-zinc-200 flex items-center justify-between px-2'>
        <div className='flex items-center gap-1.5'>
          <Button
            disabled={numPages === undefined || currentPage === 1}
            onClick={() =>
              setCurrentPage((prev) => (prev - 1 > 1 ? prev - 1 : 1))
            }
            variant='ghost'
            aria-label='previous page'
          >
            <ChevronDown className='h-4 w-4' />
          </Button>
        </div>
        <div className='flex items-center gap-1.5'>
          <Input value={currentPage} className='w-12 h-8' />
          <p className='text-zinc-700 text-sm space-x-1'>
            <span>/</span>
            <span>{numPages ?? 'x'}</span>
          </p>
        </div>
        <div className='flex items-center gap-1.5'>
          <Button
            disabled={numPages === undefined || currentPage === numPages}
            onClick={() =>
              setCurrentPage((next) =>
                next + 1 < numPages! ? next + 1 : numPages!
              )
            }
            variant='ghost'
            aria-label='next page'
          >
            <ChevronUp className='h-4 w-4' />
          </Button>
        </div>
      </div>

      <div className='flex-1 w-full max-h-screen'>
        <div ref={ref}>
          <Document
            loading={
              <div className='flex justify-center'>
                <Loader2 className='h-6 w-6 my-24 animate-spin' />
              </div>
            }
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            onLoadError={() => {
              toast({
                title: 'Something went wrong',
                description: 'Please try again later',
                variant: 'destructive',
              });
            }}
            file={url}
            className='max-h-full'
          >
            <Page width={width ? width : 1} pageNumber={currentPage} />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PdfRenderer;
