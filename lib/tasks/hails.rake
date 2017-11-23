require 'csv'

namespace :hails do
  desc "pull polar bear data into database"
  task parse_hails: :environment do

    #drop the old table data before importing the new stuff


    CSV.foreach("lib/assets/2016_hail.csv", :headers =>true) do |row |
      puts row.inspect #just so that we know the file's being read

      #create new model instances with the data
      Deployment.create!(
      om: row[0].to_i,
      date: row[4].to_date,
      st: row[7].to_s,
      mag: row[10].to_i,
      closs: row[14].to_d,
      )
    end
  end

end