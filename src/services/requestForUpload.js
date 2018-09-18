import request from "@/utils/request";

export default option => {
  const action = option.action;
  const formData = new FormData();

  if (option.data) {
    Object.keys(option.data).forEach(key => {
      formData.append(key, option.data[key]);
    });
  }

  formData.append(option.filename, option.file, option.file.name);
  return request({
    url: action,
    method: "post",
    headers: option.headers,
    data: formData,
    withCredentials: option.withCredentials,
    onUploadProgress(e) {
      if (e.total > 0) {
        e.percent = (e.loaded / e.total) * 100;
      }
      option.onProgress(e);
    }
  }).catch(e => {
    option.onError(e);
  });
};
