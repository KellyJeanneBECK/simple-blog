import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
