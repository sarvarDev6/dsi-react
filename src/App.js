import "./App.css";
import { useTranslation } from "react-i18next";
import NavBar from "./navBar";
import Header from "./components/Header/header";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
