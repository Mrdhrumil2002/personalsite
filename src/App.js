import React from "react";
import "./styles.css";
import Navbars from "./component/navbar.jsx";
import Firstintro from "./component/firstintro.jsx";
import Workline from "./component/workline.jsx";
import Cards from "./component/cards/cards.jsx";
import Aboutpage from "./component/aboutcard/aboutpage.jsx";
import Footer from "./component/footer.jsx";
import Skills from "./component/skillis.jsx";

function App() {
  return (
    <>
      <Navbars> </Navbars>

      <Firstintro> </Firstintro>

      <Workline></Workline>

      <Cards> </Cards>

      <Aboutpage></Aboutpage>

      <Skills></Skills>

      <Footer></Footer>
    </>
  );
}

export default App;
