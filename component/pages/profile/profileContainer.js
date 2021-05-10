import React, { useEffect, useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./profile";
import {
  patientProfileUpdate,
  ProfileImageUpdate,
} from "../../service/profileService";

function ProfileContainer(props) {
  const dispatch = useDispatch();
  const { token, profileDetail, reload, crying_data } = useSelector(
    (state) => ({
      token: state.token.token,
      profileDetail: state.profileDetail.profileDetail,
      crying_data: state.crying_data.crying_data,
      reload: state.reload.reload,
    })
  );

  const [profileImage, setProfileImage] = useState({});
  const [editState, setEditState] = useState(false);
  const [loader, setLoader] = useState(false);

  //existing profile value set
  useEffect(() => {
    setValue("email", profileDetail.email);
    setValue("username", profileDetail.username);
    setValue("gender", profileDetail.gender);
    setValue("dateofbirth", profileDetail.dateofbirth);
    setValue("name", profileDetail.name);
  }, [profileDetail]);

  //reload get date service
  const reloadFetchData = () => {
    console.log("pankajsjajd");
    reload.setReload(!reload.reload);
    setLoader(false);
  };

  const ImageUploadFunction = () => {
    if (profileImage != null) {
      ProfileImageUpdate(
        profileDetail?.id,
        profileImage,
        token,
        reloadFetchData
      );
    } else {
      alert("Please Select Photo first");
    }
  };

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (editState === true) {
      setEditState(false);
      patientProfileUpdate(profileDetail?.id, data, token, reloadFetchData);
      setLoader(true);
    } else {
      setEditState(true);
    }
  };

  return (
    <Profile
      handleSubmit={handleSubmit}
      control={control}
      errors={errors}
      onSubmit={onSubmit}
      profileImage={profileImage}
      setProfileImage={setProfileImage}
      ImageUploadFunction={ImageUploadFunction}
      editState={editState}
      setEditState={setEditState}
      profileDetail={profileDetail}
      setValue={setValue}
      loader={loader}
      {...props}
    />
  );
}
export default ProfileContainer;
