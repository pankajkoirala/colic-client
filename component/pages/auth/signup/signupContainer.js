import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signup } from "../../../service/authService";
import Signup from "./signup";
import Loader from "./../../../../common/loader";

export default SignupContainer = (props) => {
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [loaderIsOpen, setLoaderIsOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const setLoaderOff = () => {
    setLoaderIsOpen(false);
  };
  const onSubmit = (data) => {
    setLoaderIsOpen(true);
    const signupData = {
      email: data?.email?.toLowerCase().split(" ")[0],
      username: data?.username?.toLowerCase().split(" ")[0],
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      is_subscribe: data.is_subscribe,
    };
    signup(signupData, props, setLoaderOff);
  };

  return (
    <>
      <Loader loaderIsOpen={loaderIsOpen} />

      <Signup
        checkedOne={checkedOne}
        setCheckedOne={setCheckedOne}
        checkedTwo={checkedTwo}
        setCheckedTwo={setCheckedTwo}
        control={control}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
        {...props}
      />
    </>
  );
};
