import React from "react";
import { Button, Card, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  GetExpensesStart,
  GetExpensesEnd,
  DeleteExpense
} from "../../redux/actions/expensesActions";
import { getExpenses, deleteExpense } from "../../api/expense";

class AllExpenses extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { GetExpensesStart, GetExpensesEnd } = this.props;

    GetExpensesStart();
    getExpenses()
      .then(result => {
        GetExpensesEnd(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleDelete(e) {
    const id = e.target.value;

    deleteExpense(id).then(result => {
      this.props.DeleteExpense(result._id);
    });
  }

  render() {
    return (
      <div className="row">
        <div className="container">
          <InputGroup>
            <Link to="/expenses/create">
              <Button>New expense</Button>
            </Link>

            <Link to="/categories/create">
              <Button>New category</Button>
            </Link>
          </InputGroup>
          <hr></hr>
          {this.props.expenses &&
            this.props.expenses.map(expense => (
              <Card key={expense._id}>
                <Card.Body>
                  <Card.Text>{expense.amount} гривень </Card.Text>
                  <Card.Text>{expense.description}</Card.Text>
                  <Button
                    variant="danger"
                    value={expense._id}
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
    expenses: store.expenses.data
  };
};

export default connect(mapStateToProps, {
  GetExpensesStart,
  GetExpensesEnd,
  DeleteExpense
})(AllExpenses);
