import { schema, CustomMessages, rules } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class PegawaiValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nama: schema.string({ trim: true }),
    jabatan: schema.string({ trim: true }),
    nip: schema.string({ trim: true }),
    fakultas: schema.string({ trim: true }),
    bidangKeahlian: schema.string({ trim: true }),
    gelarAkademik: schema.string({ trim: true }),
    kontak: schema.string({ trim: true }),
    tanggalMasuk: schema.string({trim:true}), //2020-11-29T16:02:24.000Z
    statusKerja: schema.string({ trim: true }),
    riwayatPendidikan: schema.string({ trim: true }),
  });

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {};
}
