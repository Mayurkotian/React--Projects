import React from 'react';

const Form = ({inputText, setInputText, todos,setTodos, setStatus}) => {

    const inputTexthandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,{text: inputText, completed: false, id: Math.random() * 1000},
        ]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }


    return(  
        <form action="" >
            <input 
                value ={inputText}
                type="text" 
                className = "todo-input" 
                onChange ={inputTexthandler}/>
            <button  onClick ={submitTodoHandler} className = "todo-button" type="submit">
                <i className = "fas fa-plus-square"></i>
            </button>
            <div className = "select">
                <select onChange= {statusHandler} name="todos" className= "filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Complete</option>
                    <option value="incomplete">Incomplete</option> 
                </select>
            </div>
        </form>
    );
};

export default Form