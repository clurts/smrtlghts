import React from "react";
import "./App.css";
import LightSlider from "./components/LightSlider";
import Form from "./components/Form";
import Button from "./components/Button";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <LightSlider initial="10" />
                <Button color="#235846" txt="Party" />
                <Button color="#3654ff" txt="Fun" />
                <Button color="#9845cc" txt="BooHaa" />
                <Form />
            </header>
        </div>
    );
}

export default App;
