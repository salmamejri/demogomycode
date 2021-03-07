
import './App.css';
import Pub from './component/Pub';
import Navbarr from './component/Navbarr';
import Home from './component/Home'
import NewProduct from './component/NewProduct';
import NewProductList from './component/NewProductList'


function App() {
  return (
    <div >
    <Pub/> 
    <Navbarr/>
    <Home/>
    <NewProduct title="card title"
    imageUrl="https://5.imimg.com/data5/EX/NJ/MY-6389184/kids-jeans-500x500.jpg"
   
    body="xxxxxx"
    
    />
    <NewProductList/>
 
  
  
    </div>
  );
}

export default App;
