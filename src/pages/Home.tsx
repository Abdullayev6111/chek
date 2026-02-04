import logoChek from '../assets/images/logo-chek.svg';
import naqsh from '../assets/images/naqsh.svg';
import QRCode from '../assets/images/Vector.svg';

const Home = () => {
  return (
    <>
      <button onClick={() => window.print()}>PDF chiqarish</button>
      <section className="chek">
        <img src={logoChek} className="logo" />
        <img src={naqsh} className="naqsh" />
        <div className="chek-content">
          <div className="chek-row">
            <span>F.I.O:</span>
            <span>Abdumannobov Muhammadibrohim Mahammadjon o‘g‘li</span>
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

          <div className="chek-row">
            <span>O‘qituvchi:</span>
            <span>X.S.Qodirov</span>
          </div>

          <div className="chek-row">
            <span>Summa:</span>
            <span>350 000 so‘m</span>
          </div>

          <div className="chek-row">
            <span>To‘lov turi:</span>
            <span>Naqd</span>
          </div>

          <div className="chek-row">
            <span>To‘lov ID:</span>
            <span>51872</span>
          </div>

          <div className="chek-row">
            <span>To‘lov sanasi:</span>
            <span>2024-10-17</span>
          </div>

          <div className="chek-row">
            <span>To‘lov vaqti:</span>
            <span>11:45:00</span>
          </div>

          <div className="chek-row">
            <span>Kassir:</span>
            <span>I.I. Obidov</span>
          </div>
        </div>
        <div className="chek-bottom">
          <h1>“ILMPLYUS O‘QUV” NTM</h1>
          <h1>STIR | 303451853</h1>
          <img src={QRCode} className="qr-code" />
          <p>www.ilmplyus.uz</p>
        </div>
      </section>
    </>
  );
};

export default Home;
