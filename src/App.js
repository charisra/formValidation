import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  Col
} from "reactstrap";
import "./styles.scss";
import useInput from "./components/useInput";
import { validator } from "./components/validators";
import CustomInput from "./components/CustomInput";

function App() {
  // Initialize hooks for each form field & validations

  const {
    onChange: onNameChange,
    value: nameValue,
    isValid: nameIsValid
  } = useInput(validator);

  const {
    onChange: onEmailChange,
    value: emailValue,
    isValid: emailIsValid
  } = useInput(validator);

  const {
    onChange: onNotesChange,
    value: notesValue,
    isValid: notesIsValid
  } = useInput(validator);

  const {
    onSubmit: handleSubmit,
    showForm: showForm,
    showErrors: showErrors
  } = useInput(validator);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs="2" sm="4"></Col>
          <Col xs="8" sm="4" className="margin-auto">
            {showForm ? (
              <Form>
                <FormGroup>
                  <Label for="name">Full Name</Label>
                  <CustomInput
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={onNameChange}
                    value={nameValue}
                    isValid={nameIsValid}
                    showErrors={showErrors}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <CustomInput
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    onChange={onEmailChange}
                    value={emailValue}
                    isValid={emailIsValid}
                    showErrors={showErrors}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Notes</Label>
                  <CustomInput
                    type="textarea"
                    name="notes"
                    placeholder="Your Notes"
                    onChange={onNotesChange}
                    value={notesValue}
                    isValid={notesIsValid}
                    showErrors={showErrors}
                  />
                </FormGroup>
                <Button
                  color="primary"
                  onClick={e =>
                    handleSubmit(e, notesIsValid, nameIsValid, emailIsValid)
                  }
                >
                  Submit
                </Button>
              </Form>
            ) : (
              <div style={{ textAlign: "center" }}>
                <h3>Thank you !</h3>
              </div>
            )}
          </Col>
          <Col xs="2" sm="4"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
