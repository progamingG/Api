import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import User from "./User";

export default class Pegawai extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public userId: number;

  @column()
  public nama: string;

  @column()
  public jabatan: string;

  @column()
  public nip: string;

  @column()
  public fakultas: string;

  @column()
  public bidangKeahlian: string;

  @column()
  public gelarAkademik: string;

  @column()
  public kontak: string;

  @column()
  public tanggalMasuk: Date;

  @column()
  public statusKerja: string;

  @column()
  public alamat: string;

  @column()
  public riwayatPendidikan: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;
}
