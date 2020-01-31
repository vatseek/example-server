import { Form } from 'react-bootstrap'
import React from 'react'

const ownInput = (props) => {
  const { input, meta, ...rest } = props
  const { valid, error } = meta
  return (
    <>
      <Form.Control {...input} {...rest} isInvalid={!valid} />
      {error && <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>}
    </>
  )
}

export default ownInput
