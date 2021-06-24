import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../../components/form-control/inputField";



RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {

  const {handleRegister} = props

  const { register ,handleSubmit, defaultValues , setError, formState: { errors }} = useForm({
    defaultValues: {
      fullname: '',
      username: '' ,
      email: '',
      password: '',
      retypepassWord: '',
    }
  })

  const onSubmit = (data) => {
      handleRegister(data)
      console.log('data....',data)
  }

  // console.log('err...', errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-taikhoan">
      <InputField
        register={register}
        name='fullname'
        required={true}
        setError={setError}
        errors={errors}
        label="ten"
      />
        <InputField
        register={register}
        name='email'
        required={true}
        setError={setError}
        errors={errors}
        label="email"
      />
        <InputField
        register={register}
        name='username'
        required={true}
        setError={setError}
        errors={errors}
        label="username"
      />
        <InputField
        register={register}
        name='password'
        required={true}
        setError={setError}
        errors={errors}
        label="password"
      />
        <InputField
        register={register}
        name='retypepassWord'
        required={true}
        setError={setError}
        errors={errors}
        label="retypepassWord"
      />
    
      <button type="submit">Submit</button>
    </form>
  );
}


export default RegisterForm;
