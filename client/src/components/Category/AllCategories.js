import React from "react";
import { Button, Card, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  GetCategoriesStart,
  GetCategoriesEnd,
  DeleteCategory
} from "../../redux/actions/categoriesActions";
import { getCategories, deleteCategory } from "../../api/category";

class AllCategories extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { GetCategoriesStart, GetCategoriesEnd } = this.props;

    GetCategoriesStart();
    getCategories()
      .then(result => {
        GetCategoriesEnd(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleDelete(e) {
    const id = e.target.value;

    deleteCategory(id).then(result => {
      this.props.DeleteCategory(result._id);
    });
    window.location.reload();
  }

  render() {
    return (
      <div className="row">
        <div className="container">
          <InputGroup>
            <Link to="/categories/create">
              <Button>New category</Button>
            </Link>
            <Link to="/expenses">
              <Button>Return to expenses</Button>
            </Link>
          </InputGroup>
          <hr></hr>
          {this.props.categories &&
            this.props.categories.map(category => (
              <Card key={category._id}>
                <Card.Body>
                  <Card.Text>{category.name} </Card.Text>
                  <Button
                    variant="danger"
                    value={category._id}
                    onClick={this.handleDelete}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    categories: store.categories.data
  };
};

export default connect(mapStateToProps, {
  GetCategoriesStart,
  GetCategoriesEnd,
  DeleteCategory
})(AllCategories);
