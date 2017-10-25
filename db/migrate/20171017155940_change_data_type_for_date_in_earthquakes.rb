class ChangeDataTypeForDateInEarthquakes < ActiveRecord::Migration[5.1]
    def change
      change_column :earthquakes, :time, :datetime
    end
end