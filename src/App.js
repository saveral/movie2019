import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About"
import Home from "./routes/Home"
import Navigation from "./components/Navigation";
import "./App.css";
import Detail from "./routes/Detail";

function App(){
    return(
     <HashRouter> {/* 네비게이션의 link를 사용하려면 무조건 라우터 안에 있어야 된다 */}
         <Navigation />
         <Route path="/" exact={true} component={Home} />
         <Route path="/about" component={About} />
         <Route path="/movie-detail" component={Detail} />
    </HashRouter>
    );
}

export default App;