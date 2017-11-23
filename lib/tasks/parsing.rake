require 'csv'

namespace :tornadoes do
    desc "Parsing all tornadoes"
    task parse_eq: [:environment] do
        csv_eq = open('http://www.spc.noaa.gov/wcm/data/2016_torn.csv')
        csv = CSV.parse(csv_eq, :headers => true)
        csv.each do |row|
            Tornado.create!(row.to_hash.slice(*%w[om date st mag closs]))
        end
        puts "#{Time.now}-Success!"
    end
end