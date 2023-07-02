import { PDFDownloadLink } from "@react-pdf/renderer"
import DocuPDF from "./DocPdf";
import MyDocument from "./DocPdfH";
 export function Hero(){
    return <div className="min-h-screen hero bg-zinc-800">
  <div className="flex-col hero-content lg:flex-row h-60">
    <div>
      <h1 className="mb-8 text-3xl font-bold text-white">Visualizar Informacion de los clientes!</h1>
      <div className="flex flex-col gap-y-5">
      <PDFDownloadLink document={<DocuPDF/>} fileName="informacionDeClientes.pdf">
      <button className="text-white bg-red-600 btn hover:bg-red-500 hover:scale-125">Descargar pdf vertical</button>
      </PDFDownloadLink>
      <PDFDownloadLink document={<MyDocument/>} fileName="informacionDeClientesH.pdf">
      <button className="text-white bg-red-600 btn hover:bg-red-500 hover:scale-125">Descargar pdf  horizontal</button>
      </PDFDownloadLink>
      </div>
      
    </div>
  </div>
</div>
}