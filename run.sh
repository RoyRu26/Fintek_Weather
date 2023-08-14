
echo "Starting client..."
cd weather_client
npm start &
cd ..

echo "Starting server..."
cd weather_server
node index.js &
cd ..

wait