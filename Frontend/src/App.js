import logo from './logo.svg';
import './App.css';
import LandPage from './LandPage';
import RestofPage from './restofPage';
import '@radix-ui/themes/styles.css';
import {Theme} from '@radix-ui/themes';
import Footer from './footer';





function App() {
  return (
    <div className="App">
    <Theme>
      <LandPage/>
      <RestofPage/>
      <Footer/>
    </Theme>
    </div>
  );
}

export default App;
