import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./GlobalStyle";
//pages
import Tv from "./pages/Tv";
import Events from "./pages/Events";
import Athletes from "./pages/Athletes";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Products} />
                    <Route path="/discover" component={Tv} />
                    <Route path="/events" component={Events} />
                    <Route path="/athletes" component={Athletes} />
                    <Route path="/energydrink" component={Products} />
                </Switch>
                <Footer />
            </Router>
        </ThemeProvider>
    );
};

export default App;
