import * as z from "zod";

export const userSchema = z.object({
  firstName: z.string(),
  lastName: z.string()
})
.superRefine((data, ctx) => {
  if (data.firstName === null) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Debes escribir tu nombre",
      path: data.firstName,
    });
  }
});
