import React, { useState } from 'react';
import { Container } from './Styles';
import { AiOutlineClose } from 'react-icons/ai';


interface TodoProps{
  text: string;
  id: number
}

function MainPage() {
  const [input, setInput] = useState<string>('');
  const [list, setList] = useState<TodoProps[]>([]);

  function addTask(): void{
    if(input !== "" && !input.match(/^[ \t]+$/)){
      const newItem: TodoProps = {
        text: input,
        id: Date.now()
      };
      setList([...list, newItem]);
      setInput('');
    }
  }

  function deleteTask(id: number){
    const taskListFiltered = list.filter((item) => item.id !== id);
    setList(taskListFiltered);
  }

  return (
    <Container>
        <h1>To Do List</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addTask}>Add</button>
      </form>
      {list.length > 0 &&
      <div className='content-box'>
      {list.map((task) => (<div className='task' key={task.id}>
        <p>{task.text}</p>
        <button onClick={() => deleteTask(task.id)}><AiOutlineClose /></button>
      </div>))}
    </div>}
    </Container>
  )
}

export default MainPage;