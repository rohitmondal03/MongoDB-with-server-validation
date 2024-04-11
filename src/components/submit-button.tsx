"use client"

import { useFormStatus } from "react-dom"


export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="py-2 px-3 rounded-md bg-blue-500 text-white disabled:bg-blue-300"
    >
      {pending ? "Adding..." : "Submit"}
    </button>
  )
}
