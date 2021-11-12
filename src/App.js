import "./App.css";
import "./styles.css";
import phonesImage from "./phones-1.jpg";

function App() {
  return (
    <div className="App">
      <div className="images" style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Phones Shop</h1>
        <img src={phonesImage} alt="phones" />
        <img src="/phones.jpg" alt="phones" />
      </div>
      <video width={320} height={240} controls>
        <source src="/iphoneX.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
