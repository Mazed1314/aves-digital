import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main className="flex-grow p-4 min-h-screen">
        <Dashboard></Dashboard>
      </main>
      <Footer />
    </>
  );
}

export default App;
