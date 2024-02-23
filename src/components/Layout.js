import Header from './Header.js';
import Main from './Main.js';
import {Specials} from './Specials.js';
import About from './About.js';
import Footer from './Footer.js';
function Layout(){
  return (
    <>
      <Main />
      <Specials />
      <About />
    </>
  );
}
export default Layout;