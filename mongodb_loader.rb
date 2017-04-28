require 'pry'
require 'mongo'

Dir.glob('/path/to/dir/*.geo.json') do |file|

  client = Mongo::Client.new('mongodb://batteries76:chewugin789@ds119020.mlab.com:19020/language-tree')
  db = client.database

end
