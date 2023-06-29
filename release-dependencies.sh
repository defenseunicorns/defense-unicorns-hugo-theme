# This script is used to force release-please to create a new package for the /dependencies package even if there are no
# changes to that directory.

filename="./dependencies/assets/bootstrap/README.txt"

ver=`awk '/Version/ {print $2}' $filename`

dummy='v.0.0.0'

sed "s/$ver/$dummy/" $filename > "$filename.tmp"

awk '/Version/ {print $2}' $filename.tmp

mv $filename.tmp $filename

git add $filename
