import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'

import React, { useState } from 'react'
import { addRecord } from '../../store/actions'
import './styles.css'

function AddForm({ 'addRecord': addNewRecord }) {
  const [name, setName] = useState('')
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget

    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      addNewRecord({ name, 'status': 'Not completed' })
      setName('')
      setValidated(false)
    }
  }

  const handleNameChange = (event) => {
    const inputName = event.target.value
    if (inputName.length <= 25) {
      setName(inputName)
    }
  }

  return (
        <div className="form-wrapper">
            <h1 className="form-title">Add new Record</h1>
            <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="form"
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="form-label">Name:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a name (maximum 10 characters).
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
  )
}

export default connect(undefined, { addRecord })(AddForm)
