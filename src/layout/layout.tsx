import { VFC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Backgrtound from '../components/Background';
import particles from '../../particles';

type Props = {
  children: React.ReactNode;
};

// VFCで定義しているが実際のところJSX.Elementで良い
const Layout: VFC<Props> = (props) => {
  const onCreateAccount = () => {
    console.log('onCreate');
  };
  const onCreateLogin = () => {
    console.log('onLogin');
  };
  const onCreateLogout = () => {
    console.log('onLogout');
  };

  return (
    <body className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center">{props.children}</main>
      <Footer appName="NextX" name="Riml" twitterId="Fande4d" />
      <Backgrtound options={{ ...particles }} />
    </body>
  );
};

export default Layout;
