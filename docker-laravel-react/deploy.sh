#!/usr/bin/env bash
cd ./client/
npm run build
cd ../
cd ./server/
./vessel start