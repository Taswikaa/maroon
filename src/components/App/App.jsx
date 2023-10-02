import './App.css';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Bestsellers from '../Bestsellers/Bestsellers';
import Promo from '../Promo/Promo';
import History from '../History/History';
import Join from '../Join/Join';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="app">
      <HeaderMain></HeaderMain>
      <Bestsellers></Bestsellers>
      <Promo
        title='Встречайте весну
        вместе с нами'
        subtitle='Попробуйте новую коллекцию
        ухаживающих средств для лица
        с SPF защитой'
        btnText='Подробнее'
        isSecondPromo={false}>
      </Promo>
      <Promo
        title='Индивидуальный
        уход'
        subtitle='Заполните анкету, и мы подберем уход, подходящий именно вам, учитывая ваш образ жизни, место жительства и другие факторы. '
        btnText='Заполнить анкету'
        isSecondPromo={true}>
      </Promo>
      <History></History>
      <Join></Join>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  );
}

export default App;
