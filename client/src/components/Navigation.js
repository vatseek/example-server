import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default ({ history }) => {

  const navigateToCategories = () => {
    history.push('/categories')
  }

  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link onClick={navigateToCategories}>Categories</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Expenses</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
