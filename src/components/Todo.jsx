function Todo({ item, isActive, setTodo }) {

    const deleteBtnHandler = () => {
        setTodo(prev => prev.filter((i) => i.id !== item.id));
    }

    const toggleBtnHandler = () => {
        setTodo(prev => prev.map((i) => {
            if (i.id === item.id) {
                return { ...i, isDone: !i.isDone }
            } else {
                return i;
            }
        }
        ))
    }

    return (
            <div key={item.id} className="divContainer">
                <div className="todoDiv">
                    <div>
                        <h3>{item.title}</h3>
                        <div>{item.contents}</div>
                    </div>
                    <div className="btnDiv">
                        <button className="deleteBtn" onClick={deleteBtnHandler}>삭제</button>
                        <button className="toggleBtn" onClick={toggleBtnHandler}>{isActive ? '완료' : '취소'}</button>
                    </div>
                </div>
            </div>

    );
}

export default Todo;