import React from 'react'
import { Nav } from 'react-bootstrap'

export default ({ history }) => {
  const navigateToCategories = () => {
    history.push('/categories')
  }

  const navigateToExpenses = () => {
    history.push('/expenses')
  }

  const navigateToLogin = () => {
    history.push('/login')
  }

  return (
    <Nav defaultActiveKey='/home' as='ul'>
      <Nav.Item as='li'>
        <Nav.Link onClick={navigateToCategories}>Categories</Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link onClick={navigateToExpenses}>Expenses</Nav.Link>
      </Nav.Item>
      <Nav.Item as='li'>
        <Nav.Link onClick={navigateToLogin}>Login</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
