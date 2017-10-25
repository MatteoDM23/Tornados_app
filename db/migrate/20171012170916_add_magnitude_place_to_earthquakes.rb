class AddMagnitudePlaceToEarthquakes < ActiveRecord::Migration[5.1]
  def change
    add_column :earthquakes, :mag, :decimal
    add_column :earthquakes, :place, :string
  end
end
