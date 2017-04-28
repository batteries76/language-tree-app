require 'pry'
require 'mongo'
require 'json'

client = Mongo::Client.new('mongodb://batteries76:chewugin2@ds119020.mlab.com:19020/language-tree')
$db = client.database
#collection = client.collection('country-info')

file = File.read('updated-languages.json')
language_data_hash = JSON.parse(file)

$country_array = []

find_start = { language_data_hash['iso6393'] => language_data_hash['name'] }
find_hash = { "languages" => find_start }

def add_countries(language_data_hash, find_hash)

  if language_data_hash['iso6393']

    results = $db['country-info'].find(find_hash).to_a

    # if results.length!=0
    #   binding.pry
    # end

    puts "language_data_hash.iso6393 is #{language_data_hash['iso6393']}"
    puts "language_data_hash.name is #{language_data_hash['name']}"
    puts "find_hash is #{find_hash}"
    puts "results are #{results}"

    lang_country_hash = {}
    lang_country_hash['name'] = language_data_hash['name']
    lang_country_hash['country_array'] = []
    lang_country_hash['cca2_code_array'] = []
    lang_country_hash['cca3_code_array'] = []

    language_data_hash['country_array'] = []
    language_data_hash['cca2_code_array'] = []
    language_data_hash['cca3_code_array'] = []

    results.each do |result|
      lang_country_hash['country_array'].push(result['name']['common'])
      language_data_hash['country_array'].push(result['name']['common'])
      lang_country_hash['cca2_code_array'].push(result['cca2'])
      language_data_hash['cca2_code_array'].push(result['cca2'])
      lang_country_hash['cca3_code_array'].push(result['cca3'])
      language_data_hash['cca3_code_array'].push(result['cca3'])
    end
    $country_array.push(lang_country_hash)

    # if (language_data_hash['children'].length == 0)
    #   return
    # else
    language_data_hash['children'].each do |child|
  #    puts child
      find_start = { child['iso6393'] => child['name'] }
      find_hash = { "languages" => find_start }
      add_countries(child, find_hash)
    end

  end

end

add_countries(language_data_hash, find_hash)

language_tree_json = language_data_hash.to_json

File.open("final_language_tree.json","w") do |f|
  f.write(language_tree_json)
end

binding.pry
