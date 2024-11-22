'use client';

import React, { useState, useEffect } from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';

const Todo = () => {
    const [todos, setTodos] = useState([]);

    //마운트시
    useEffect(() => {
        // 로컬 스토리지에서 데이터를 가져와서
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        // todos 상태에 저장
        setTodos(savedTodos);
        console.log(savedTodos);
    }, []);

    //todos가 업데이트시
    // 객체나 배열을 저장할 때는 JSON.stringify()로 문자열로 변환
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // 할 일 추가하는 함수
    const addTodo = (task) => {
        const newTodo = {
            id: todos.length + 1,
            isDone: false,
            task: task,
            createDate: new Date().toLocaleDateString(),
        };
        setTodos([newTodo, ...todos]);
    };

    // 완료 표시 함수
    const onUpdate = (id) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
            })
        );
    };

    // 할 일 삭제 함수
    const onDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className='flex flex-col gap-4 p-8 pb-40'>
            <TodoHd />
            <TodoEditor addTodo={addTodo} />
            <TodoList mockTodoData={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
};

export default Todo;
