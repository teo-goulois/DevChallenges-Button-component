import "./App.scss";

// components
import Sidebar from "./components/sidebar/Sidebar";
import Button from "./components/buttons/Button";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="main">
        <h1>Buttons</h1>
        {/* button */}
        <div className="buttons-container">
          <div className="button-wrapper">
            <Button />
          </div>
          <div className="button-wrapper">
            <Button hover={true} />
          </div>
        </div>
        {/* button variant outline */}
        <div className="buttons-container">
          <div className="button-wrapper">
            <Button variant={"outline"} />
          </div>
          <div className="button-wrapper">
            <Button variant={"outline"} hover={true} />
          </div>
        </div>
        {/* button variant text */}
        <div className="buttons-container">
          <div className="button-wrapper">
            <Button variant={"text"} />
          </div>
          <div className="button-wrapper">
            <Button variant={"text"} hover={true} />
          </div>
        </div>
        {/* button disable shadow */}
        <div className="buttons-container">
          <div className="button-wrapper">
            <Button disableShadow />
          </div>
        </div>
        {/* button disabled */}
        <div className="buttons-container">
          <div className="button-wrapper">
            <Button disabled />
          </div>
          <div className="button-wrapper">
            <Button variant={"text"} disabled />
          </div>
        </div>
        {/* buttons icon */}
        <div className="buttons-container">
          <div className="button-wrapper">
            <Button startIcon={"local_grocery_store"} />
          </div>
          <div className="button-wrapper">
            <Button endIcon={"local_grocery_store"} />
          </div>
        </div>

        {/* button size */}
        <div className="buttons-container">
          <div className="button-wrapper">
            <Button size={"sm"} />
          </div>
          <div className="button-wrapper">
            <Button size={"md"} />
          </div>
          <div className="button-wrapper">
            <Button size={"lg"} />
          </div>
        </div>
        {/* buttons colors */}
        <div className="buttons-container">
          <div className="button-wrapper">
            <Button color={"default"} />
          </div>
          <div className="button-wrapper">
            <Button color={"primary"} />
          </div>
          <div className="button-wrapper">
            <Button color={"secondary"} />
          </div>
          <div className="button-wrapper">
            <Button color={"danger"} />
          </div>
        </div>
        {/* buttons colors hover, focus */}
        <div className="buttons-container">
          <div className="button-wrapper">
            <Button color={"default"} hover />
          </div>
          <div className="button-wrapper">
            <Button color={"primary"} hover />
          </div>
          <div className="button-wrapper">
            <Button color={"secondary"} hover />
          </div>
          <div className="button-wrapper">
            <Button color={"danger"} hover />
          </div>
        </div>
        {/* ------------------------------------------------------------ */}
        <p className="references">
          Icons: https://material.io/resources/icons/?style=round
        </p>
        <h4 className="create-by">
          created by <span>teo_goulois</span> - devChallenges.io
        </h4>
      </main>
    </div>
  );
}

export default App;
