import React from 'react'
import { Button, Card, InputGroup, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getCategories, deleteCategory } from '../../services/categories'

class Categories extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(e) {
    const { deleteCategory } = this.props
    const id = e.target.value

    deleteCategory(id)
  }

  render() {
    return (
      <div className='row' style={{ marginTop: '50px' }}>
        <div className='container'>
          <InputGroup className='mb-3'>
            <FormControl placeholder='Description' aria-label='Description' aria-describedby='basic-addon2' />
            <InputGroup.Append>
              <Button variant='outline-secondary'>Search</Button>
            </InputGroup.Append>
            <Link to='/categories/create'>
              <Button variant='outline-primary'>Create category</Button>
            </Link>
          </InputGroup>
          <hr />
          {this.props.categories &&
            this.props.categories.map((category) => (
              <Card key={category._id}>
                <Card.Body>
                  <Card.Text>{category.name} </Card.Text>
                  <Button variant='danger' value={category._id} onClick={this.handleDelete}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    categories: store.categories.data,
  }
}

export default connect(mapStateToProps, {
  getCategories,
  deleteCategory,
})(Categories)
