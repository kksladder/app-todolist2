'use client';

import classNames from 'classnames';
import React, { useRef, useState } from 'react';

const TodoEditor = ({ addTodo }) => {
    const [task, setTask] = useState('');
    const inputRef = useRef();
    // inputRef 변수가 useRef()를 통해 생성된 객체를 참조하도록 설정

    const onChangeTask = (e) => {
        setTask(e.target.value);
    };
    const onSubmit = () => {
        // 빈입력 방지
        if (!task) return;

        // 할일 추가
        addTodo(task);
        // 입력창 초기화 및 포커스
        setTask('');
        inputRef.current.focus();
    };
    const onKeyDown = (e) => {
        console.log(e);
        if (e.key === 'Enter') onSubmit();
        if (e.key === 'Escape') onSubmit();
    };

    return (
        <div>
            <h2>새로운 Todo 작성하기</h2>
            <div>
                {/* <form> */}
                <input
                    type='text'
                    value={task}
                    ref={inputRef}
                    onChange={onChangeTask}
                    onKeyDown={onKeyDown}
                    placeholder='할 일을 입력하세요.'
                    className='p-3 text-black'
                />
                <button
                    // type='submit'
                    onClick={onSubmit}
                    disabled={!task}
                    className={classNames('p-3', task ? 'bg-blue-300' : 'bg-gray-300')}
                >
                    할 일 추가
                </button>
                {/* </form> */}
            </div>
        </div>
    );
};

export default TodoEditor;
