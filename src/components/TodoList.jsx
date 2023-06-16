import Todo from "./Todo";

function TodoList({ isActive, todo, setTodo }) {
    return <div>
        <div>
            <h2>{isActive ? 'Working..' : 'Done..'}</h2>
        </div>
        <div className="todoContainer">
            {todo.filter(item => item.isDone === !isActive)
                .map((item) => {
                    return (

                        <Todo key={item.id} item={item} isActive={isActive} setTodo={setTodo}></Todo>
                    )
                }
                )}
        </div>

    </div>
}

export default TodoList;