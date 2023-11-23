import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

export const InputForTask = ({ taskText, handleKeyUp, handleSubmit, setTasktext }: {
    taskText: string;
    handleKeyUp: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
    handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
    setTasktext: (taskText: string) => void;
    }) => {
    return (
        <InputGroup className={ "mb-3 task-input" } onKeyUp={ handleKeyUp }>
            <Form.Control
                placeholder={ "Enter new task..." }
                value={ taskText }
                onChange={ (event) => setTasktext(event.target.value) }
            />
            <Button className={ "btn btn-primary" } onClick={ handleSubmit }>
                Done
            </Button>
        </InputGroup>
    );
};