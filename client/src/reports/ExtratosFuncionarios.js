
import pdfMake from "pdfmake/build/pdfmake.js"
import pdfFonts from "pdfmake/build/vfs_fonts.js"

export const extrato = (user) => {

    pdfMake.vfs = pdfFonts.pdfMake.vfs;;

    const reportTitle = [{
        text: 'Extrato',
        fontSize: 10,
        bold: true,
        margin: [15, 20, 0, 45],
        alignment: 'center'
    }];

    const details = [];

    const rodape = [];

    const docDefinitions = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        header: [reportTitle],
        continue: [details],
        footer: [rodape]
    };

    return docDefinitions
}


export const gerarPDF = (extrato) => {
    const pdfDocGenerator = pdfMake.createPdf(extrato);
    
    pdfDocGenerator.getDataUrl((dataUrl) => {
        const targetElement = document.querySelector('#iframeContainer');


        const iframe = document.querySelector('#iframePDF');
        iframe.src = dataUrl;
        iframe.width = "500"
        iframe.height = "500"
        targetElement.appendChild(iframe);
    });
}

export const downloadExtrato = (extrato) => {
    pdfMake.createPdf(extrato).download()
}