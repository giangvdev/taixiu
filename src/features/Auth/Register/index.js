import React, { useState } from "react";
import "./register.css";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import RegisterForm from "./registerForm";
import { Button } from "antd";
import Modal from "antd/lib/modal/Modal";
import { useUpdateProfile } from "../hook";

const Register = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [handleRegister] = useUpdateProfile()

  const handleFormSubmit = (values) => {
    console.log("values.......", values);
  };

  return (
    <div className="register text-center">
      <div className="form__register">
        <img
          className="logo__register"
          src="https://conggame88.com/wp-content/uploads/2021/04/logo-yowin-app.png"
          alt=""
        />
        <div className="account">
          <i className="icon__account">
            {" "}
            <PersonIcon />{" "}
          </i>{" "}
          <input type="text" placeholder="Tên đăng nhập....." />
        </div>
        <div className="password">
          <i className="icon__password">
            {" "}
            <LockIcon />{" "}
          </i>{" "}
          <input type="password" placeholder="Mật Khẩu" />
        </div>
        <div className="btn__form-register d-flex">
          <button className="btn-account">Đăng Nhập</button>
          <button className="btn-password" onClick={showModal}>
            Đăng Ký
          </button>
          <i className="icon__password-btn">
            {" "}
            <LockIcon fontSize="larger" />{" "}
          </i>
        </div>
      </div>

      <>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <RegisterForm onSubmit={handleFormSubmit} handleRegister={handleRegister} />
        </Modal>
      </>
    </div>
  );
};

export default Register;
