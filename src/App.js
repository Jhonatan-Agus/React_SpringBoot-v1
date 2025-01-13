import logo from './logo.svg';
import './App.css';

function returnRandomNumber(){
  return Math.trunc(Math.random()*10);
}

function returnHtml(text){
    return (
        <h1>{text}</h1>
    );
}

function App() {
  const siglo = 21;
  const persona = {
    name: 'John',
    age: 25,
  }
  const buscadores = ['http://www.google.com', 'https://www.yahoo.com', 'https://www.bing.com'];

  return (
      <div>
          <h1>Test</h1>
          <p> Acceso a variables {siglo} y datos de persona: {persona.name} - {persona.age}</p>
          <p>LLamada a funcion: {returnRandomNumber()}</p>
          <p>3 + 3 = {3 + 3}</p>

          <br/>

          <a href={buscadores[0]}>Google</a>
          <a href={buscadores[2]}>Bing</a>
          <a href={buscadores[1]}>Yahoo</a>

          <br/>

          {returnHtml('jiji')}
          {returnHtml(siglo)}
      </div>
  );
}

export default App;
