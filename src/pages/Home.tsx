import logoChek from '../assets/images/logo-chek.svg';
import naqsh from '../assets/images/naqsh.svg';
import QRCode from '../assets/images/Vector.svg';

const Home = () => {
  return (
    <section className="chek">
      <img src={logoChek} className="logo" />
      <img src={naqsh} className="naqsh" />
      <div className="chek-content">
        <h2>
          <span>F.I.O.:</span>
          Abdumannobov Muhammadibrohim Mahammadjon o‘g‘li
        </h2>
        <h2>
          <span>Filial:</span>
          Asosiy filial
        </h2>
        <h2>
          <span>Kurs:</span>
          Arab tili
        </h2>
        <h2>
          <span>Guruh:</span>
          AF-01-20
        </h2>
        <h2>
          <span>O‘qtuvchi::</span>
          X.S.Qodirov
        </h2>
        <h2>
          <span>Summa:</span>
          350 000 so‘m
        </h2>
        <h2>
          <span>To‘lov turi:</span>
          Naqd
        </h2>
        <h2>
          <span>To‘lov ID:</span>
          51872
        </h2>
        <h2>
          <span>To‘lov sanasi:</span>
          2024-10-17
        </h2>
        <h2>
          <span>To‘lov vaqti:</span>
          11:45:00
        </h2>
        <h2>
          <span>Kassir:</span>
          I.I. Obidov
        </h2>
      </div>
      <div className="chek-bottom">
        <h1>“ILMPLYUS O‘QUV” NTM</h1>
        <h1>STIR | 303451853</h1>
        <img src={QRCode} className="qr-code" />
        <p>www.ilmplyus.uz</p>
      </div>
    </section>
  );
};

export default Home;
