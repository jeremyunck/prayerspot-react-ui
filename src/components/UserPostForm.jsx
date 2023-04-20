import React from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";

function UserPostForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const postData = { caption: data.caption };
    console.log(postData);

    Axios.post("http://localhost:8080/api/v1/user-post/create", postData)
      .then((res) => {
        console.log("Successfully created post");
        const file = data.image[0];
        const formData = new FormData();
        formData.append("file", file);

        Axios.post(
          `http://localhost:8080/api/v1/user-post/${res.data}/image/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
          .then(() => {
            console.log("Image uploaded successfully");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p>Caption</p>
        <input {...register("caption")} />
      </div>
      <div>
        <input {...register("image")} type="file" accept="image/*" />
      </div>
      <input type="submit" />
    </form>
  );
}

export default UserPostForm;
