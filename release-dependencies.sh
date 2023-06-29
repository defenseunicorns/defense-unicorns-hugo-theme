# This script is used to force release-please to create a new package for the /dependencies package even if there are no
# changes to that directory.

filename="./dependencies/assets/bootstrap/README.md"

commit=`git rev-parse --short HEAD`

content=`head -5 $filename`

echo "$content\n\n$commit\n" > $filename

git add $filename
