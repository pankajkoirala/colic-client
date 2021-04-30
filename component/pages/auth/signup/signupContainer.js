import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signup } from "../../../service/authService";
import Signup from "./signup";

export default SignupContainer = (props) => {
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const signupData = {
      email: data?.email?.toLowerCase().split(" ")[0],
      username: data?.username?.toLowerCase().split(" ")[0],
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      is_subscribe: data.is_subscribe,
    };
    signup(signupData, props);
  };

  return (
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
  );
};
