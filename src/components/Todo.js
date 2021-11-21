import React, { useState } from 'react'
import TodoForm from './TodoForm'
// import TodoList from './TodoList';
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    });

    const submitUpdate = function (value) {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ""
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map(function (todo, index) {
        return (
            <div
                className={todo.isComplete ? "todo-row complete" : "todo-row"}
                key={index}
            >

                <div key={todo.id} onClick={function () {
                    completeTodo(todo.id);
                }} >

                    {todo.text}
                </div>
                <div className="icons">
                    <RiCloseCircleLine
                        onClick={function () { removeTodo(todo.id) }}
                        className="delete-icon"
                    />
                    <TiEdit
                        onClick={function () { setEdit({ id: todo.id, value: todo.text }) }}
                        className="edit-icon"
                    />
                </div>

            </div>
        )
    });
};

export default Todo
