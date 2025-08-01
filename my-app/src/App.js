import './App.css';
import logo from './logo.svg';
import Profile from './Profile/Profile';
import RappersList from './List/List';
import MyButton from './Button/Button';

function App() {
  return (
    <>
      <div className="app-style">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit either <code>src/App.js</code> or <code>src/App.css</code> and save to reload.</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <br/>
        </header>
      </div>
      <main className="app-style">
        <div className='section'>
          <div className='section1'>
            <AboutPage />
            <MyButton SectionName='section1'/>
          </div>
          <div className='section2'>
            <AboutPageWithoutWrapper />
            <MyButton SectionName='section2' />
          </div>
        </div>
        <br />
        <div className='section'>
          <div className='section1'>
            <Profile />
          </div>
          <div className='section2'>
            <RappersList />
          </div>
        </div>
      </main>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <p>This is the <code>AboutPage component</code>. It is just returning a paragraph element inside an empty wrapper.</p>
    </>
  );
}

function AboutPageWithoutWrapper() {
  return (
    <p>This is the <code>AboutPageWithoutWrapper component</code></p>
  );
}



export default App;
