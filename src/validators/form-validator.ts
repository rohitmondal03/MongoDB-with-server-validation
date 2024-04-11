import { z } from "zod";


export const formValidators = z.object({
  name: z.string()
    .min(5, {
      message: "Name should be atleast 5 chars",
    }),
  password: z.string()
    .min(6, {
      message: "Password should be atleast 6 chars"
    })
})