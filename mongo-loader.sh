#!/bin/bash

for file in /Users/mattmckenzie/Work/countries/data/*.geo.json;
do echo $file;
mongoimport -h ds119020.mlab.com:19020 -d language-tree -c country-geo -u batteries76 -p chewugin2 --file $file
done
