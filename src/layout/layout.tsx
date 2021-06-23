import { VFC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Background from '../components/Background';
import particles from '../../particles';

type Props = {
  children: React.ReactNode;
};

// VFCで定義しているが実際のところJSX.Elementで良い
const Layout: VFC<Props> = (props) => {
  return (
    <body className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center">{props.children}</main>
      <Footer appName="NextX" name="Riml" twitterId="Fande4d" />
      <Background options={{ ...particles }} />
    </body>
  );
};

export default Layout;
