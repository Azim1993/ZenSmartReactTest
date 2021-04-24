import './style/style.scss';
import TodoList from './components/Todo/TodoList'
import Buttons from './components/Button/Buttons'

function App() {
    return (
        <div className="App">
            <TodoList></TodoList>
            <Buttons></Buttons>
        </div>
    );
}

export default App;
