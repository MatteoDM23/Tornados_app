require 'csv'

namespace :earthquakes do
    desc "Parsing all eathquakes"
    task parse_eq: [:environment] do
        csv_eq = open('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv')
        csv = CSV.parse(csv_eq, :headers => true)
        csv.each do |row|
            Earthquake.create!(row.to_hash.slice(*%w[time latitude longitude depth mag place]))
        end
        puts "#{Time.now}-Success!"
    end
end