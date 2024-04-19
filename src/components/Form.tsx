"use client";

import { FormData } from "@/types/blog";
import { ChangeEvent, FormEvent, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

const inputClass =
  "w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300";

const Form = () => {
  const [formData, SetFormData] = useState<FormData>({
    title: "",
    content: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    SetFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitting...");
  };

  return (
    <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          className={inputClass}
          placeholder="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <ReactTextareaAutosize
          minRows={5}
          className={inputClass}
          name="content"
          placeholder="content"
          value={formData.content}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-800 hover:bg-blue-500 rounded p-2 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
