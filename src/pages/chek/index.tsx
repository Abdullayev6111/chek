import { useRef, useEffect, useCallback } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import logoChek from '../../assets/images/logo-chek.svg';
import naqsh from '../../assets/images/naqsh.svg';
import './chek.css';

const Chek = () => {
  const chekRef = useRef<HTMLElement>(null);

  const downloadPDF = useCallback(async () => {
    if (!chekRef.current) return;

    const canvas = await html2canvas(chekRef.current, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
    });

    const imgData = canvas.toDataURL('image/png');
    const pxToMm = 0.2645833333;
    const imgWidth = (canvas.width / 2) * pxToMm;
    const imgHeight = (canvas.height / 2) * pxToMm;

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [imgWidth, imgHeight],
    });

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('chek.pdf');
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('download') === 'pdf') {
      const timer = setTimeout(downloadPDF, 600);
      return () => clearTimeout(timer);
    }
  }, [downloadPDF]);

  const qrUrl = `${window.location.origin}${window.location.pathname}?download=pdf`;

  const formatPerson = (text: string) => {
    const match = text.match(/^([A-Z]\.[A-Z]\.)(.+)$/i);
    if (!match) return text;

    const prefix = match[1];
    const rest = match[2].trim();

    if (rest.length > 10) {
      return `${prefix}\n${rest}`;
    }

    return text;
  };

  return (
    <>
      <button onClick={downloadPDF}>PDF yuklash</button>
      <section className="chek" ref={chekRef}>
        <img src={logoChek} className="logo" />
        <img src={naqsh} className="naqsh" />
        <div className="chek-content">
          <div className="chek-row">
            <span>F.I.O:</span>
            <span>Abdumannobov Muhammadibrohim Mahammadjon o'g'li</span>
          </div>

          <div className="chek-row">
            <span>Filial:</span>
            <span>Asosiy filial</span>
          </div>

          <div className="chek-row">
            <span>Kurs:</span>
            <span>Arab tili</span>
          </div>

          <div className="chek-row">
            <span>Guruh:</span>
            <span>AF-01-20</span>
          </div>

          <div className="chek-row surname-row">
            <span>O'qituvchi:</span>
            <span style={{ whiteSpace: 'pre-line' }}>{formatPerson('I.I.Muhammadjonov')}</span>
          </div>

          <div className="chek-row">
            <span>Summa:</span>
            <span>350 000 so'm</span>
          </div>

          <div className="chek-row">
            <span>To'lov turi:</span>
            <span>Naqd</span>
          </div>

          <div className="chek-row">
            <span>To'lov ID:</span>
            <span>51872</span>
          </div>

          <div className="chek-row date-row">
            <span>To'lov sanasi:</span>
            <span>2024-10-17</span>
          </div>

          <div className="chek-row">
            <span>To'lov vaqti:</span>
            <span>11:45:00</span>
          </div>

          <div className="chek-row surname-row">
            <span>Kassir:</span>
            <span style={{ whiteSpace: 'pre-line' }}>{formatPerson('X.S.Abdullajonov')}</span>
          </div>
        </div>
        <div className="chek-bottom">
          <h1>"ILMPLYUS O'QUV" NTM</h1>
          <h1>STIR | 303451853</h1>
          <QRCodeCanvas
            value={qrUrl}
            size={353}
            className="qr-code"
            bgColor="#ffffff"
            fgColor="#000000"
          />
          <p>www.ilmplyus.uz</p>
        </div>
      </section>
    </>
  );
};

export default Chek;
