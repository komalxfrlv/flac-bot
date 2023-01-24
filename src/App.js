import './App.css';

const tg = window.Telegram.WebApp;

function App() {

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      <h1>It works!</h1>
      <button onClick={onClose}></button>
    </div>
  );
}

export default App;
