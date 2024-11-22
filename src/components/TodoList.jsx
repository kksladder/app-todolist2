import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { set } from 'date-fns';

const TodoList = ({ mockTodoData, onUpdate, onDelete }) => {
    const [search, setSearch] = useState('');

    const filteredTodos = () => {
        return mockTodoData.filter((item) => item.task.toLowerCase().includes(search.toLowerCase()));
    };

    return (
        <div>
            <h2>할 일 목록</h2>
            <input
                type='search'
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                placeholder='검색어를 입력하세요.'
                className='p-3 text-black w-full'
            />
            <ul className='mt-5 flex flex-col gap-2 divide-y'>
                {filteredTodos().map(
                    (item) => (
                        console.log(item),
                        (<TodoItem key={item.id} {...item} onUpdate={onUpdate} onDelete={onDelete} />)
                    )
                )}
            </ul>
        </div>
    );
};

export default TodoList;
