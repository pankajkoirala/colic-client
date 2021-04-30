import axiosInstance from "./axiosBase";

export const read = (endpoint) => {
  return axiosInstance.get(endpoint);
};

export const create = (endpoint, data) => {
  return axiosInstance.post(endpoint, data);
};

export const createWithFormData = (endpoint, data,file) => {
  const formData = new FormData();
  Object.keys(data).forEach((element) => {
    formData.append(element, data[element]);
  });
  file?.forEach((element) => {
    formData.append(element.fileName, element.file);
  });

  return axiosInstance.post(endpoint, formData);
};

export const updateWithFormdata  = (endpoint, data,file) => {
  const formData = new FormData();
  Object.keys(data).forEach((element) => {
    formData.append(element, data[element]);
  });
  file.forEach((element) => {
    formData.append(element.fileName, element.file);
  });
  return axiosInstance.put(endpoint, formData);
};

export const update  = (endpoint, data) => {
  return axiosInstance.put(endpoint, data);
};

export const deleteData = (endpoint, data) => {
  return axiosInstance.delete(endpoint, data);
};
