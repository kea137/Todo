import React from 'react'

function Todo() {
    return (
        <div>
            <input type="text" className="rounded-md p-2 shadow-md" placeholder="What do you need to do?" />
            <div className="flex items-center ml-40">
                <input type="checkbox" />
                <p className="ml-3 mr-18 my-4 text-lg">Important</p>
                <svg xmlns="http://www.w3.org/2000/svg" class=" h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
    )
}

export default Todo
