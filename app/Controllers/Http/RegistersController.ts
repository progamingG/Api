import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import RegisterValidator from "App/Validators/RegisterValidator";

export default class RegistersController {
  public async register({ auth, request, response }: HttpContextContract) {
    try {
      const dataValidate = await request.validate(RegisterValidator);
      const user = await User.create(dataValidate);
      const token = await auth.login(user);

      response.status(201).json({
        user,
        token,
      });
    } catch (error) {
      response.status(400).json({
        message: error.messages,
      });
    }
  }
  public async login({ auth, request, response }: HttpContextContract) {
    try {
      const { email, password } = request.all();
      const token = await auth.attempt(email, password);
      response.status(200).json({
        user: token.user,
        token: token.token,
      });
    } catch (error) {
      response.status(400).json({
        message: "gagal login",
      });
    }
  }
}
