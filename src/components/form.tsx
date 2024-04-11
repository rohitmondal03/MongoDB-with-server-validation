"use client"

import toast from "react-hot-toast";

import { addDetail } from "@/actions/add-detail-action";
import SubmitButton from "@/components/submit-button";


export default function Form() {
  const submitNewData = async (formdata: FormData) => {
    const dataToBeAdded= {
      name: formdata.get("name"),
      password: formdata.get("password"),
    }

    const message= await addDetail(dataToBeAdded);
    
    if(message?.error) {
      toast.error(message.error);
      return;
    }
    toast.success("Added new detail !!")

    formdata.set("name", "");
    formdata.set("password", "");
  }

  return (
    <form
      action={submitNewData}
      className="flex flex-col gap-5 text-black"
    >
      <input
        type="text"
        placeholder="Enter your name"
        name="name"
        className="py-2 px-3 rounded-md"
      />
      <input
        type="password"
        placeholder="Enter any password"
        name="password"
        className="py-2 px-3 rounded-md"
      />
      <SubmitButton />
    </form>
  )
}
