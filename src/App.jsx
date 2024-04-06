import "./App.css";
import AddNewLoginScreen from "./components/AddNewLoginScreen/AddNewLoginScreen";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import ShowLoginDetailsScreen from "./components/ShowLoginDetailsScreen/ShowLoginDetailsScreen";
import { LoginListThemeProvider } from "./context/LoginListContext";

function App() {
  return (
    <LoginListThemeProvider>
      <div className="app">
        <Header />
        <div className="wrapper">
          <List />
          <ShowLoginDetailsScreen />
        </div>
      </div>
    </LoginListThemeProvider>
  );
}

export default App;
