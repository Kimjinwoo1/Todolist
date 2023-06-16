import { useState } from "react";



function Input({ setTodo , todo}) {
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')

    const plusBtnHandler= (event) =>{
        event.preventDefault();
        const newTodo = {
            title,
            contents,
            isDone: false,
            id: todo.length+1,
        };
        setTodo([...todo, newTodo])
       
    }

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const contentsHandler = (event) => {
        setContents(event.target.value);
    }
    return <form className="inputForm" onSubmit={plusBtnHandler}>
        <div className="inputDiv">
            제목  <input className="titleInput" value={title} onChange={titleChangeHandler} ></input>
            내용  <input className="contentsInput" value={contents} onChange={contentsHandler} ></input>
        </div>
        <button onClick={plusBtnHandler} className="plusBtn">추가</button>
    </form>
}

export default Input;