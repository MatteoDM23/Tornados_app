class CreateHails < ActiveRecord::Migration[5.1]
  def change
    create_table :hails do |t|
      t.integer :om
      t.date :date
      t.string :st
      t.integer :mag
      t.decimal :closs

      t.timestamps
    end
  end
end
