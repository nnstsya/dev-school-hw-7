import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/App.css';

import { InputForTask } from '../components/InputForTask';
import { ButtonsForAllTasks } from '../components/ButtonsForAllTasks';
import { TaskItem } from '../components/Task';

import { Container } from "react-bootstrap";
import React, { useState } from "react";

interface Task {
    id: number;
    text: string;
    isChecked: boolean;
}

const App = () => {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskText, setTaskText] = useState<string>("")

    const handleKeyUp = (event: React.KeyboardEvent): void => {
        if(event.key === 'Enter' && taskText.trim() !== ''){
            setTasks([...tasks, {id: new Date().getTime(), text: taskText, isChecked: false}]);
            setTaskText('');
        }
    }

    const handleSubmit = (): void => {
        if(taskText.trim() !== ''){
            setTasks([...tasks, {id: new Date().getTime(), text: taskText, isChecked: false}]);
            setTaskText('');
        }
    }

    const handleCheckOneTask = (id: number): void => {
        const updatedTasks = tasks.map((task: Task): Task => {
            if (task.id === id) {
                return {...task, isChecked: !task.isChecked};
            }
            return task;
        })
        setTasks(updatedTasks);
    }

    const toggleCheckAllTasks = (check: boolean): void => {
        const updatedTasks = tasks.map((task: Task): Task => {
            return {...task, isChecked: check};
        })
        setTasks(updatedTasks);
    }

    const handleDeleteOneTask = (id: number): void => {
        const updatedTasks = tasks.filter((task) => task.id !== id)
        setTasks(updatedTasks);
    }

    const handleDeleteAllTask = (): void => {
        setTasks([]);
    }

    const tasksTemplate = tasks.map((task: Task) => {
        return <TaskItem task={ task } handleCheckOneTask={ handleCheckOneTask } handleDeleteOneTask={ handleDeleteOneTask }/>
    });

    return (
        <Container className={ 'todo-list-container' }>
            <h1 className={ "todo-list-heading" }>ToDo List</h1>
            <InputForTask taskText={ taskText } handleKeyUp={ handleKeyUp } handleSubmit={ handleSubmit } setTasktext={ setTaskText }></InputForTask>
            <ButtonsForAllTasks toggleCheckAllTasks={toggleCheckAllTasks} handleDeleteAllTask={handleDeleteAllTask}></ButtonsForAllTasks>
            { tasksTemplate }
        </Container>
    );
}

export default App;