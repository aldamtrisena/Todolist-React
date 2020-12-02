import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, ListGroup } from "react-bootstrap";
import { deleteTodo } from "../store/action";

function TodoCard() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function deleteTodos(id) {
    dispatch(deleteTodo(id));
  }
  return (
    <div>
      <Container>
        <h3 className="title-list">List Todo</h3>
        {todos.length === 0 && <h4 className="message-title">Empty Todos</h4>}
        <ListGroup className="list-todo">
          {todos.map((el) => {
            return (
              <ListGroup.Item variant="primary">
                <div className="delete-todo">
                  <i
                    onClick={() => deleteTodos(el.id)}
                    className="fa fa-times"
                  />
                </div>
                No {el.id}
                <p> {el.description}</p>
                <p>Due Date</p>
                {el.date}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Container>
    </div>
  );
}

export default TodoCard;
