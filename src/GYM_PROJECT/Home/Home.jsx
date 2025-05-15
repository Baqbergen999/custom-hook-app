import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
// import "./Home.css";
import { ThemeProvider } from "./ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <Header/>
      <Main></Main>
      <Footer></Footer>
    </ThemeProvider>
  );
}
