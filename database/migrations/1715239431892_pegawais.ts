import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'pegawais'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer("user_id").unsigned().references("id").inTable("users").onDelete("CASCADE")
      table.string("nama").notNullable()
      table.string("jabatan").notNullable()
      table.string("nip").notNullable()
      table.string("fakultas").notNullable()
      table.string("bidang_keahlian").notNullable()
      table.string("gelar_akademik").notNullable()
      table.string("kontak").notNullable()
      table.date("tanggal_masuk").notNullable()
      table.string("status_kerja").notNullable()
      table.string("riwayat_pendidikan").notNullable()
     
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
