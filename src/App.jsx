import './App.css';
import Todo from './Todo'

function App() {
  return (
        <div>
          <div className=" w-1/3 rounded-md shadow-lg text-center ml-120 mt-60 bg-white">
            <h1 className="font-bold text-xl my-4">Todo App</h1>
            <Todo/>
          </div>
        </div>
  );
}

export default App;
