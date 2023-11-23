import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Form } from "react-bootstrap";

interface Task {
    id: number;
    text: string;
    isChecked: boolean;
}

export const TaskItem = ({ task, handleCheckOneTask, handleDeleteOneTask }: {
    task: Task;
    handleCheckOneTask: (id: number) => void;
    handleDeleteOneTask: (id: number) => void;
    }) => {
    return (
        <form className="mb-3 task-container" key={task.id}>
            <input
                type="checkbox"
                className="form-check-input form-check"
                checked={task.isChecked}
                onClick={() => handleCheckOneTask(task.id)}
            />
            <div className="task-description-container">
                <Form.Text className="task-description" style={{ textDecoration: task.isChecked ? "line-through" : "none" }}>
                    {task.text}
                </Form.Text>
            </div>
            <FontAwesomeIcon
                type="button"
                className="delete-icon"
                icon={faTrash}
                onClick={() => handleDeleteOneTask(task.id)}
            />
        </form>
    );
};