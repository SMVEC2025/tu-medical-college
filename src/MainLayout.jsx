// src/components/layout/MainLayout.jsx
import ChatBot from './components/chatbot/ChatBot';
import FooterOne from './components/FooterOne';
import MobileMenu from './components/mobilemenu/MobileMenu';
import Navbar from './components/Navbar';

const MainLayout = ({ children }) => {

  return (
    <>
         <Navbar/>
         <MobileMenu/>
      <ChatBot />
      {children}
      <FooterOne />
    </>
  );
};

export default MainLayout;
