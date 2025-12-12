import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { FileText } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import termsPdf from "@/assets/files/zeroTolerance.pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ZeroTolerance = () => {
  const [numPages, setNumPages] = useState<number>();

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Zero Tolerance</h1>
                <p className="text-muted-foreground">Last updated: December 2025</p>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border overflow-y-auto shadow-lg" style={{ height: '800px' }}>
              <Document
                file={termsPdf}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                className="flex flex-col items-center gap-4 p-8"
              >
                {Array.from(new Array(numPages), (_, index) => (
                  <div key={`page_${index + 1}`} className="shadow-lg rounded-lg overflow-hidden">
                    <Page
                      pageNumber={index + 1}
                      width={Math.min(window.innerWidth * 0.7, 700)}
                    />
                  </div>
                ))}
              </Document>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ZeroTolerance;
