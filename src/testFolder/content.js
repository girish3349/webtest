import logo from '../logo.svg';
import '../App.css';
import Table from './table';

function Content() {
  return (
    render(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Table/>
      </header> 
    </div>

  ));
}

export default Content;
