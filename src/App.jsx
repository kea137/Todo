import './App.css';
import TodoList from './TodoList'

function App() {
  return (
        <div>
          <div className=" w-1/3 rounded-md shadow-lg text-center ml-120 mt-60 pb-4 bg-white">
            <h1 className="font-bold text-xl my-4">Todo App</h1>
            <TodoList/>
          </div>
        </div>
  );
}

export default App;
