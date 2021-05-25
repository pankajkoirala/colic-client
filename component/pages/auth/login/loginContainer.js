import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_TOKEN } from "../../../redux/action/action";
import Login from "./login";
import { useForm } from "react-hook-form";
import { AuthLogin } from "../../../service/authService";
import Loader from "./../../../../common/loader";

export default LoginContainer = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loaderIsOpen, setLoaderIsOpen] = useState(false);

  const { reload, token } = useSelector((state) => ({
    reload: state.reload.reload,
    token: state.token.token,
  }));

  if (token) {
    setLoaderIsOpen(false);
    console.log(loaderIsOpen);
    console.log(token);
  }
  //data dispatcher function
  const dispatch = useDispatch();

  const dispatchData = (data) => {
    dispatch({ type: AUTH_TOKEN, payload: data });
  };

  const setLoaderOff = () => {
    setLoaderIsOpen(false);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoaderIsOpen(true);
    const loginData = {
      email: data?.email?.toLowerCase().split(" ")[0],
      password: data?.password,
    };

    AuthLogin(loginData, dispatchData, setLoaderOff);
  };

  return (
    <>
      <Loader loaderIsOpen={loaderIsOpen} />
      <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        dispatchData={dispatchData}
        control={control}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
        setLoaderOff={setLoaderOff}
        {...props}
      />
    </>
  );
};
