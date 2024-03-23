import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import Central from "./Central";

function Home() {
  return (
    <div>
         <Header />
		<Central />
        <Sidebar />
        <Footer />
    </div>
  );
}

export default Home;
