import { Form } from 'react-bootstrap'
import React from 'react'

const ownInput = (props) => {
  const { input, meta, ...rest } = props
  const { valid, error, touched } = meta

  return (
    <>
      <Form.Control {...input} {...rest} isInvalid={touched && !valid} />
      {touched && error && <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>}
    </>
  )
}

export default ownInput
