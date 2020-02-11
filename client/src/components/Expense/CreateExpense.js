import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "react-bootstrap";
import { required, date } from "redux-form-validators";

import { connect } from "react-redux";
import { AddExpense } from "../../redux/actions/expensesActions";

import { newExpense } from "../../api/expense";
import { getCategories } from "../../api/category";
import OwnInput from "../OwnInput";
import OwnComboBox from "../OwnComboBox";
import DatePicker, { formatDates, normalizeDates } from "../OwnDatePicker";

const CreateExpense = ({
  handleSubmit,
  pristine,
  submitting,
  AddExpense,
  expensesData,
  history
}) => {
  const [categoriesList, setCategoriesList] = useState([]);

  const sendToServer = ({ amount, category, date, description }) => {
    const { _id } = localStorage.getItem("user");
    newExpense({ amount, category, description, date, owner: _id })
      .then(result => {
        AddExpense(result);
        history.push("/expenses");
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getCategories().then(res => {
      setCategoriesList(res);
    });
  }, []);

  return (
    <Form onSubmit={handleSubmit(sendToServer)}>
      <Form.Group controlId="formBasicAmount">
        <Form.Label>Amount</Form.Label>
        <Field
          name="amount"
          component={OwnInput}
          type="text"
          placeholder="Amount..."
          validate={[required()]}
        />
      </Form.Group>

      <Form.Group controlId="formBasicCategory">
        <Form.Label>Category</Form.Label>
        <Field
          name="category"
          component={OwnComboBox}
          validate={[required()]}
          categories={categoriesList}
        />
      </Form.Group>

      <Form.Group controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Field
          name="description"
          component={OwnInput}
          type="text"
          placeholder="Description..."
          validate={[required()]}
        />
      </Form.Group>

      <Form.Group controlId="formBasicDate">
        <Form.Label>Date</Form.Label>
        <Field
          name={"date"}
          component={DatePicker}
          placeholder="Date..."
          parse={normalizeDates}
          format={formatDates}
          validate={[required(), date()]}
        />
      </Form.Group>

      <div>
        <Button
          variant={pristine ? "danger" : "success"}
          type="submit"
          disabled={submitting}
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};

const CreateExpenseForm = reduxForm({
  form: "expense"
})(CreateExpense);

const mapStateToProps = store => {
  return {
    expensesData: store.expenses.data
  };
};

export default connect(mapStateToProps, {
  AddExpense
})(CreateExpenseForm);
