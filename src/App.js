import './App.css';
import HomeLayout from './layouts/HomeLayout';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

function App() {
  return <HomeLayout>
    <HomePage />
    {/* Chỉ cần sửa code từ homepage => about page để hiển thị trang còn lại là Okie nhé */}
  </HomeLayout>
}

export default App;
