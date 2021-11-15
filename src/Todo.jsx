import React from 'react'

function Todo() {
    return (
        <div className="flex items-center ml-32">
            <input className="ml-2" type="checkbox" />
            <p className="ml-3 mr-28 my-4 text-lg">Important</p>
            <svg xmlns="http://www.w3.org/2000/svg" class=" h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    )
}

export default Todo
