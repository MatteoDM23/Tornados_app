class CreateEarthquakes < ActiveRecord::Migration[5.1]
  def change
      create_table :earthquakes do |t|
      t.date :time
      t.integer :latitude
      t.integer :longitude
      t.integer :depth
      t.timestamps
    end
  end
end
