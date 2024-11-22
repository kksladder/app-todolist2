import React from 'react';

const TodoItem = ({ task, isDone, createDate }) => {
    return (
        <li>
            <input type='checkbox' checked={isDone} />
            <strong>{task}</strong>
            <span>{createDate}</span>
            <button>삭제</button>
        </li>
    );
};

export default TodoItem;
