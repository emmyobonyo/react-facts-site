import './App.css';

function Header() {
  return(
    <header>
      <nav className='nav'>
        <img className = "image" src="./react-logo.png" alt="logo"/>
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  )
}

function MainContent() {
  return (
    <div className = "main-content">
      <h1 className = "main-title">Fun Facts about React</h1>
      <ul className='main-content-ul'>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps including Mobile apps </li>
      </ul>
    </div>
  )
}

function Footer() {
  return(
    <footer>
      <small>© 2021 Ziroll development. All rights reserved.</small>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
