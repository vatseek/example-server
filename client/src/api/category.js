import request from "../lib/request";

export const addCategory = name => {
  return request({
    url: "/categories/create",
    method: "post",
    data: { name }
  });
};

export const getCategories = () => {
  return request({
    url: "/categories",
    method: "get"
  });
};

export const deleteCategory = _id => {
  return request({
    url: `/categories/delete/${_id}`,
    method: "get"
  });
};
