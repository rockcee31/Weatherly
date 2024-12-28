import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
function App() {

  return (
    <div className="h-full font-serif ">

      <Header/>
      <main className="relative">
      <Body />
      </main>

      <footer>
         <Footer/>
      </footer>
      
    </div>
  );
}

export default App;
