#!/bin/bash

powershell D:/SJ23-24/script/contentCreator.ps1


TEMPFILE=D:/SJ23-24/SEW/sj23-24-sew-2ahitn-nottj/counter.txt

# Loop goes here
  # Fetch the value and increase it
  COUNTER=$[$(cat $TEMPFILE) + 1]

  # Store the new value
   echo $COUNTER > $TEMPFILE

git add *

git commit -a  -m "$COUNTER"

git push github main && git push origin main

