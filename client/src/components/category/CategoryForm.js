import React from 'react'

import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { required, minLength2 } from '../../utils/validators'

import { insertCategory } from '../../redux/actions/categoriesActions'
import { saveCategory } from '../../api/category'

import OwnInput from '../OwnInput'

const CategoryForm = ({ handleSubmit, pristine, submitting, insertCategory, history }) => {
  const sendToServer = ({ name }) => {
    saveCategory(name).then(({ name }) => {
      insertCategory(name)
    })
  }

  return (
    <Form onSubmit={handleSubmit(sendToServer)}>
      <Form.Group controlId='categoryName'>
        <Form.Label>Сategory name:</Form.Label>
        <Field
          name='name'
          component={OwnInput}
          type='text'
          placeholder='Category name'
          validate={[required, minLength2]}
        ></Field>
      </Form.Group>

      <div>
        <Button variant={pristine ? 'danger' : 'success'} type='submit' disabled={submitting}>
          Submit
        </Button>
      </div>
    </Form>
  )
}

const UpdatedCategoryForm = reduxForm({
  form: 'simple',
})(CategoryForm)

export default connect(null, {
  insertCategory,
})(UpdatedCategoryForm)
