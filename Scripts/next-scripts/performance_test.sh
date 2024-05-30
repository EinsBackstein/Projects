#!/bin/bash

TEMPFILE="D:\SJ23-24\Medientechnik\gobaniu\performance\counter.txt"

# Loop goes here
  # Fetch the value and increase it
  COUNTER=$[$(cat $TEMPFILE) + 1]

  # Store the new value
   echo $COUNTER > $TEMPFILE
  
Command="lighthouse http://localhost:3000/ --view --output=html --output-path=./performance/test$COUNTER.html";

$Command