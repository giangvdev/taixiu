import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { Input } from "antd";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;

  console.log("form...", form);

  return (
    <Controller name={name} control={form.control} label={label} as={} />
  );
}

export default InputField;
