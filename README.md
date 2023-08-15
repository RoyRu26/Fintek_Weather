Weather app

To launch the app follow these steps:

1. Clone the repository
2. create a .env file under the "weather_server" directory and insert the   following lines into it:
  API_KEY = *your API key*
  PORT = 8000
3. run the command `npm i` in the terminal both for the client and server   side to add node_modules
4. run weather_server with the command `node index.js`
5. ron weather_client with the command `npm start`

The app will show the temperature and additinal weather information sccording to the city searched by the user.
Simply type in the city of interest in the search box and click the search button.

The information will be seen on the result box. In case of invalid or missing input,
a relevant error message will be displayed.
