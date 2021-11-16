import React from 'react'
import Todo from './Todo'

function TodoList() {

    const [todos, setTodos] = React.useState([
        {id: 1, text: 'Learn React', isCompleted: false },
        {id: 2, text: 'Learn Inertia', isCompleted: true },
        {id: 3, text: 'Learn Laravel', isCompleted: false },
    ]);

    return (
        <div className="content-center">
            <input type="text" className="rounded-md p-2 w-60 shadow-md" placeholder="What do you need to do?" />
            {todos.map((todo, index)=>(
            <Todo id={todo.id} text={todo.text} isCompleted={todo.isCompleted}/>
            ))}
            <hr  className="mx-32 my-4"/>
            <div className=" justify-between flex ml-32 text-sm">
                <button className="ml-1 rounded-md border border-gray-200 p-1">Check All</button>
                <span className=" mr-36">3 items</span>
            </div>
            <hr className="mx-32 my-4" />
            <div className=" justify-between text-sm flex ml-32 items-center">
                <div className="flex">
                    <button className="m-1 rounded-md border border-gray-200 p-1">All</button>
                    <button className="m-1 rounded-md border border-gray-200 p-1">Active</button>
                    <button className="m-1 rounded-md border border-gray-200 p-1">Completed</button>
                </div>
                <button className="mr-36 rounded-md border border-gray-200 p-1">Clear</button>
            </div>
        </div>
    )
}

export default TodoList
