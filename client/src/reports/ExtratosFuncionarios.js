
import pdfMake from "pdfmake/build/pdfmake.js"
import pdfFonts from "pdfmake/build/vfs_fonts.js"

export const extrato = (user) => {

    pdfMake.vfs = pdfFonts.pdfMake.vfs;;

    const reportTitle = [{
        text: 'EXTRATO CONTA-CORRENTE',
        fontSize: 15,
        bold: true,
        margin: [15, 20, 0, 45],
        alignment: 'center'
    }];

    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();
    const dataAtualCompleta = dia + '/' + mes + '/' + ano;
   

    const details = [
        { text: `Agencia 00031032132                     Data: ${dataAtualCompleta} ` },
        { text: "Empresa: ELiLab" },
        { text: `Funcionario: ${user.nome}` },
        { text: `Cargo: ${user.cargo}` },
        {text:"------------------------------------------------------------"},
        { text: `Saldo anterior--------------------R$ 1000,00` },
        { text: `Deposito--------------------R$ 500,00` },
        { text: `Saldo atual--------------------R$ 1500,00` },



    ];

    const rodape = [{text: "Pagina 1/1"}];

    const docDefinitions = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        header: [reportTitle],
        content: [details],
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
        targetElement.appendChild(iframe);
    });
}

export const downloadExtrato = (extrato) => {
    pdfMake.createPdf(extrato).download()
}