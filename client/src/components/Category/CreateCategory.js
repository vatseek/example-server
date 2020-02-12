import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import OwnInput from "../OwnInput";
import { required, minLength2 } from "../../utils/validators";

import { insertCategory } from "../../redux/actions/categoriesActions";
import { addCategory } from "../../api/category";

const CategoryForm = ({
  handleSubmit,
  pristine,
  submitting,
  insertCategory,
  history
}) => {
  const sendToServer = ({ name }) => {
    addCategory(name).then(({ category }) => {
      localStorage.setItem("category", category);
      insertCategory(category);
      history.push("/categories");
    });
  };

  return (
    <Form onSubmit={handleSubmit(sendToServer)}>
      <Form.Group controlId="categoryName">
        <Form.Label>Сategory name:</Form.Label>
        <Field
          name="name"
          component={OwnInput}
          type="text"
          placeholder="name of category..."
          validate={[required, minLength2]}
        ></Field>
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

const CreateCategoryForm = reduxForm({
  form: "category",
  initialValues: {
    name: ""
  }
})(CategoryForm);

const mapStateToProps = store => {
  return {
    categories: store.categories.data
  };
};

export default connect(mapStateToProps, {
  insertCategory
})(CreateCategoryForm);
