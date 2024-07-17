import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import DefaultLayout from "./layout";

function App(): React.ReactElement {
    //--------------------------------------------------------------------
    // state
    //--------------------------------------------------------------------

    //--------------------------------------------------------------------
    // hooks
    //--------------------------------------------------------------------

    //--------------------------------------------------------------------
    // function
    //--------------------------------------------------------------------

    //--------------------------------------------------------------------
    // render
    //--------------------------------------------------------------------

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
