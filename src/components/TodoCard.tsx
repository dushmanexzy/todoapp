import React, {KeyboardEvent, useState} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './TodoCard.css';

interface ITodoItem {
    id: string;
    name: string;
    text: string;
    completed: boolean;
}

export const TodoCard = () => {
    const [todos, setTodos] = useState<ITodoItem[]>([]);
    const [text, setText] = useState<string>('');

    const toggleTodoItems = () => {
        console.log('show|hide')
    }

    const enterTodo = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    text: text,
                    name: text,
                    completed: false
                }
            ])
        }
    }

    return (
        <div className='todos-container'>
            <label className={'todos-label'}>
                <button onClick={toggleTodoItems} className={'btn toggle-todos-btn'}>
                    <ArrowForwardIosIcon />
                </button>
                <input
                    className={'todos-input'}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder={'What needs to be done?'}
                    onKeyDown={enterTodo}
                />
            </label>

            <ul className={'todos-list'}>
                {todos.map(todo => (
                    <li className={'todo-item'} key={todo.id}>
                        <input type={"checkbox"} name={todo.name} id={todo.id}/>
                        <span>{todo.text}</span>
                    </li>
                ))}
            </ul>

            {/*<Controls />*/}
        </div>
    );
};
