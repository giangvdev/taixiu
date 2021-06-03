import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../../components/form-control/inputField";



RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {


  const form = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      passWord: "",
    },
  });

  const handleSubmit = (values) => {
      console.log("dcm.....")
  };

  return (
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullname" label="full name" form={form} />
        <InputField name="email" label="email" form={form} />
      </form>
  );
}

export default RegisterForm;
