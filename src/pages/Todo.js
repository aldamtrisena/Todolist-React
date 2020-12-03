import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import TodoCard from "../components/TodoCard";
import { addTodo } from "../store/action";

function Todo() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const todos = useSelector((state) => state.todos);
  const [initId, setInitId] = useState();
  const [initTodos, setinitTodos] = useState({
    description: "",
    date: "",
  });

  useEffect(() => {
    setInitId(todos.length + 1);
  }, [todos]);
  function sumbitForm(e) {
    e.preventDefault();
    const value = {
      id: initId,
      description: initTodos.description,
      date: initTodos.date,
    };
    dispatch(addTodo(value));
    setShow(false);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setinitTodos({
      ...initTodos,
      [name]: value,
    });
  }
  return (
    <div className="head-bar">
      <h1>To Do's App</h1>
      <div className="container contain">
        <Button onClick={() => setShow(true)} className="btn-add">
          <i className="fa fa-plus" /> Add To Do
        </Button>
      </div>
      <div>
        <TodoCard />
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Add NewTodo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={sumbitForm}>
            <Form.Group controlId="formBasicText">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="description"
                type="text"
                placeholder="Enter Description"
              />
            </Form.Group>
            <Form.Group controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="date"
                min={Date.now}
                type="date"
                placeholder="Enter Description"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Todo;
