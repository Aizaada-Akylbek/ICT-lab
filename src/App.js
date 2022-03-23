import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

import AppHeader from './components/common/header';
import AppHome from './components/views/home';
import AppFooter from './components/common/footer';
import AppQuestions from './components/home/questions';


const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
      <Content>
        
      </Content>
      <AppHome/>

      <Footer>
       <AppFooter/>
      </Footer>
  </Layout>
  
  );
}

export default App;
