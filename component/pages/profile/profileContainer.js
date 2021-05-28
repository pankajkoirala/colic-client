import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./../../../common/loader";
import Profile from "./profile";
import {
  patientProfileUpdate,
  ProfileImageUpdate,
} from "../../service/profileService";
import { errorAlert } from "../../../common/alert";

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

  const [loaderIsOpen, setLoaderIsOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [editState, setEditState] = useState(false);

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
    reload.setReload(!reload.reload);
    setLoaderIsOpen(false);
  };
  const setLoaderOff = () => {
    setLoaderIsOpen(false);
  };

  const ImageUploadFunction = () => {
    if (profileImage != null) {
      let rn = profileImage.name;
      let bn = rn?.split(".");
      bn = bn[bn?.length - 1];
      if (bn === "jpg" || bn === "jpeg" || bn === "png") {
        if (result.size > 1048576) {
          errorAlert("File Size Shouldn't exceed 1.5 MB");
        } else {
          setLoaderIsOpen(true);
          ProfileImageUpdate(
            profileDetail?.id,
            profileImage,
            token,
            reloadFetchData,
            setLoaderOff
          );
        }
      } else {
        errorAlert("Please Select JPG, JPEG or PNG Format Only");
      }
    } else {
      errorAlert("Please Select Photo first");
    }
  };
  //---------------------------------------------------------------------------------

  // alert(result.type);
  // console.log(result);
  //----------------------------------------------------------------------------------

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (editState === true) {
      setEditState(false);
      patientProfileUpdate(
        profileDetail?.id,
        data,
        token,
        reloadFetchData,
        setLoaderOff
      );
      setLoaderIsOpen(true);
    } else {
      setEditState(true);
    }
  };

  return (
    <>
      <Loader loaderIsOpen={loaderIsOpen} />
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
        {...props}
      />
    </>
  );
}
export default ProfileContainer;
