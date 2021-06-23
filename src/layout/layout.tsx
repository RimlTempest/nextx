import { VFC } from 'react';
import Header from '../components/Header';

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
    <>
      <Header onCreateAccount={onCreateAccount} onLogin={onCreateLogin} onLogout={onCreateLogout} />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
