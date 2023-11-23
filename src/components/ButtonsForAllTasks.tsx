import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export const ButtonsForAllTasks = ({ toggleCheckAllTasks, handleDeleteAllTask }: {
    toggleCheckAllTasks: (checked: boolean) => void;
    handleDeleteAllTask: () => void
    }) => {
    return (
        <Container className={ "select-all-container" }>
            <Button
                className={ "btn btn-secondary btn-sm check-all-tasks-button" }
                onClick={ () => toggleCheckAllTasks(true) }
            >
                Check all
            </Button>
            <Button
                className={ "btn btn-secondary btn-sm uncheck-all-tasks-button" }
                onClick={ () => toggleCheckAllTasks(false) }
            >
                Uncheck all
            </Button>
            <Button className={ "btn btn-danger btn-sm" } onClick={ handleDeleteAllTask }>
                Delete all
            </Button>
        </Container>
    );
};