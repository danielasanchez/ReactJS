import '../App.css'

const Header = (props) => {
    return (        
    <div className="App-header">
      {props.titulo}
    </div>
  );
}
 
export default Header;