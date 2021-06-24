import React from "react";
import PropTypes from "prop-types";

import { Input } from "antd";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { register, name, required, maxLength, setError, errors, label} = props;

  return (
<>

<input
label={label}
placeholder={label}
onChange={(e) => {
  setError(name, {
    type: "maxLength",
    message: "Dont Forget Your Username Should Be Cool!"
  });
  // onChange(e);
}}
 {...register(name, { required: required, maxLength: maxLength })} />
{errors ? <span>{errors[name]?.message}</span> : ''}

</>
  );
}

export default InputField;
