import React from "react";

export const InputFields = (props) => {
  const HandleChange = (event, key) => {
    props.setUserData({
      ...props.userData,
      [key]: event.currentTarget.value,
    });
   
    
  };
  return (
    <div style={{ padding: 1 }}>
      <label htmlFor="username" style={{ fontSize: 22, fontWeight: 700 }}>
        {props.id}:{" "}
      </label>
      <input
        className="lg:w-full md:w-full sm:size-auto p-3 m-2 rounded"
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={(e) => HandleChange(e, props.id)}
      />
    </div>
  );
};
