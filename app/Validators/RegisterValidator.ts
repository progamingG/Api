import { schema, CustomMessages, rules } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    username: schema.string({ trim: true }, [rules.maxLength(125)]),
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({ table: "users", column: "email" }),
    ]),
    password: schema.string({ trim: true }, [rules.confirmed()]),
    role:schema.enum(["user","admin" as const])
  });

  public messages: CustomMessages = {};
}
