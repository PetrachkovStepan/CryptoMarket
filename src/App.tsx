import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
//npm run lint

function App() {
  return (
    <div className="fixed flex h-[100vh] w-[100%] flex-col justify-between bg-dark-theme-main-blue">
      <div className="overflow-auto scroll-auto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
