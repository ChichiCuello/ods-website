import './App.css';
import {Navbar} from './components/Navbar';

function App() {
  return (
    <div> 
      <Navbar /> 
        <main> 
        <h1>This is a Display 1 Heading</h1>
        <h2>This is a Heading 1</h2>
        <h3>This is a Heading 2</h3>
        <h4>This is a Heading 3</h4>
        <p>This is a Paragraph 1</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur velit nibh, semper non pulvinar vitae, venenatis iaculis dolor. Sed dictum odio at augue porttitor egestas. Etiam hendrerit euismod cursus. Vestibulum semper mauris nec erat aliquet, vitae porttitor libero euismod. Pellentesque id ex gravida, euismod neque posuere, vulputate ex. Aenean ullamcorper odio purus, at sagittis enim tempor at. Sed finibus risus vel enim congue molestie. Mauris sagittis tempor libero, eu egestas neque placerat sed. Duis tempus tortor ac dolor gravida, non feugiat erat vestibulum.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur velit nibh, semper non pulvinar vitae, venenatis iaculis dolor. Sed dictum odio at augue porttitor egestas. Etiam hendrerit euismod cursus. Vestibulum semper mauris nec erat aliquet, vitae porttitor libero euismod. Pellentesque id ex gravida, euismod neque posuere, vulputate ex. Aenean ullamcorper odio purus, at sagittis enim tempor at. Sed finibus risus vel enim congue molestie. Mauris sagittis tempor libero, eu egestas neque placerat sed. Duis tempus tortor ac dolor gravida, non feugiat erat vestibulum.</p>
        <p className="paragraph-2">This is a Paragraph 2
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur velit nibh, semper non pulvinar vitae, venenatis iaculis dolor. Sed dictum odio at augue porttitor egestas. Etiam hendrerit euismod cursus. Vestibulum semper mauris nec erat aliquet, vitae porttitor libero euismod. Pellentesque id ex gravida, euismod neque posuere, vulputate ex. Aenean ullamcorper odio purus, at sagittis enim tempor at. Sed finibus risus vel enim congue molestie. Mauris sagittis tempor libero, eu egestas neque placerat sed. Duis tempus tortor ac dolor gravida, non feugiat erat vestibulum.</p>
        <button className='button'>BUTTON</button>
        <a href="#" className='hyperlink'>Hyperlink</a>
        </main>  
      </div>

  );
}

export default App;
