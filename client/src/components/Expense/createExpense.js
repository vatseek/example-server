import React, { useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "react-bootstrap";
import { required, date } from "redux-form-validators";

import { connect } from "react-redux";
import { AddExpense } from "../../redux/actions/expensesActions";

import { newExpense } from "../../api/expense";
import { getCategory } from "../../api/category";
import OwnInput from "../OwnInput";
import OwnComboBox from "../OwnComboBox";
import DatePicker, { formatDates, normalizeDates } from "../OwnDatePicker";

const ExpenseForm = (
  props,                                                              
  AddExpense,
  expenseData
) => {
  const sendToServer = (amount, category, date) => {
    newExpense({ amount, category, date }).then(({ expense }) => {
      // localStorage.setItem("token", token);
      localStorage.setItem("expense", expense);

      AddExpense(expense);
    });
  };

  useEffect(() => {
    getCategory().then(res => {
      console.log(res);
    });
  }, []);

  const { handleSubmit, pristine, submitting } = props

  return (
    <Form onSubmit={handleSubmit(sendToServer)}>
      <Form.Group controlId="formBasicAmount">
        <Form.Label>Amount</Form.Label>
        <Field
          name="amount"
          component={OwnInput}
          type="text"
          placeholder="Amount"
          validate={[required()]}
        />
      </Form.Group>

      <Form.Group controlId="formBasicCategory">
        <Form.Label>Category</Form.Label>
        <Field
          name="category"
          component={OwnComboBox}
          validate={[required()]}
        />
      </Form.Group>

      <Form.Group controlId="formBasicDate">
        <Form.Label>Date</Form.Label>
        <Field
          name={"date"}
          component={DatePicker}
          placeholder="Date"
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

const CreateExpense = reduxForm({
  form: "expense" // a unique identifier for this form
})(ExpenseForm);

export default connect(
	({ expense: { data } }) => ({ expenseData: data }),
	{
	  AddExpense,
	}
  )(CreateExpense)
