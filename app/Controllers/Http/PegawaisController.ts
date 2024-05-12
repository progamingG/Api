import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Pegawai from "App/Models/Pegawai";
import PegawaiValidator from "App/Validators/PegawaiValidator";

export default class PegawaisController {
  public async store({ auth, request, response }: HttpContextContract) {
    const data = await request.validate(PegawaiValidator);
    try {
      const pegawai = await auth.user?.related("pegawai").create(data);
      await pegawai?.load("user");
      response.status(200).json({
        data: pegawai,
      });
    } catch (error) {
      response.status(400).json({
        message: error.messages,
      });
    }
  }
  public async update({
    request,
    response,
    params,
    auth,
  }: HttpContextContract) {
    const dataValidate = await request.validate(PegawaiValidator);

    try {
      const user = await auth.user;
      const pegawai = await Pegawai.findOrFail(params.id);
      if (user?.id !== pegawai.userId) {
        return response.status(401).json({
          message: "Unauthorized",
        });
      }
      const update = await pegawai.merge(dataValidate).save();
      response.status(200).json({
        data: update,
      });
    } catch (error) {
      response.status(400).json({
        message: error.messages,
      });
    }
  }
  public async destroy({ response, params }: HttpContextContract) {
    try {
      const dataPegawai = await Pegawai.findOrFail(params.id);
      await dataPegawai.delete();

      response.status(200).json({
        data: "successfull",
      });
    } catch (error) {
      response.status(400).json({
        message: error.messages,
      });
    }
  }
  public async index({ response, request }: HttpContextContract) {
    try {
      const dataPegawai = await Pegawai.query().preload("user");

      response.status(200).json({
        data: dataPegawai,
      });
    } catch (error) {
      response.status(400).json({
        message: error.messages,
      });
    }
  }
  public async show({ response, params }: HttpContextContract) {
    try {
      const dataPegawai = await Pegawai.query()
        .where("id", params.id)
        .preload("user")
        .firstOrFail();

      response.status(200).json({
        data: dataPegawai,
      });
    } catch (error) {
      response.status(400).json({
        message: error.messages,
      });
    }
  }
}
