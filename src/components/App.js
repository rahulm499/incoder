import './App.css';
import Editor from './Editor';
import {useState, useEffect} from 'react';
import useLocalStorage from '../hooks/localstorage';

function App() {

  const [html, setHtml] = useState(`<header class="panel-info">
  <h1 class="panel-title">CodePen Clone</h1>
  <p class="panel-text">  
  </p>      
</header>`);
  const [css, setCss] = useState(`.panel-info {
    margin-bottom: 50px;
    text-align: center;
  }`);
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  
  useEffect(() => {
    const timeout = setTimeout(() => {
        setSrcDoc(`
        <html>
          <body>${html}</body>
          <style type="text/css" media="screen">
            ${css}
          </style>
          <script type="text/javascript" src="${js}"></script>
        </html>`)
    }, 250);
 
    return () => clearTimeout(timeout);
  }, [html, css, js]);


  return (
    <div className="App">
      <div className="pane top-pane">
        <Editor language="xml" display="HTML" onchange={setHtml} value={html} />  
        <Editor language="css" display="CSS" onchange={setCss} value={css} />
        <Editor language="javascript" display="JS" onchange={setJs} value={js} />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
</div>
    </div>
  );
}

export default App;
