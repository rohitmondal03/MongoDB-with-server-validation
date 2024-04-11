"use server"

import { revalidatePath } from "next/cache";

import { formValidators } from "@/validators/form-validator";
import { detailModel } from "@/models/demo-schema"


export async function addDetail(data: unknown) {
  const result = formValidators.safeParse(data);

  if (!result.success) {
    let errorMessage = "";

    result.error.issues.forEach((msg) =>
      errorMessage += msg.message + ". "
    )

    return {
      error: errorMessage,
    }
  }

  await detailModel.create(data);

  revalidatePath("/")
}