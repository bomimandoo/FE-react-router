import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./containers/Header.jsx"
import Main from "./pages/Main.jsx";
import Menu from "./pages/Menu.jsx"
import Product from "./pages/Product.jsx";
import NotFound from "./pages/NotFound.jsx";



const App = () => {
  return (
    <>
    <BrowserRouter>
    
      <Header/>     
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/Menu" element={<Menu/>}></Route>
        <Route path="/Product/:Brand" element={<Product/>}></Route>    
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;

//URL 파라미터는 경로에 /setting/:userId/ 와 같이 : 을 사용하여 설정(중첩 사용)