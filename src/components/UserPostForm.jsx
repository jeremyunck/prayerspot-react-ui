import React from "react";
import { useForm } from "react-hook-form";

function UserPostForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
