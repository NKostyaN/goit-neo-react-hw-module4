import { Field, Form, Formik } from "formik";

const SearchBar = ({ search }) => {
  const handleSubmit = (values, actions) => {
    search(values.query);
    actions.resetForm();
  };

  return (
    <header>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
