## Installation
- run ```npm install```
- duplicate the ```.env.example``` file and rename the duplicate as ```.env```. This helps in managing the application configuration such as the database name, the server port and jwtSecret key.
- Set up the necessary environment variables to get the app up and running.
## API Endpoints
- Student Sinup - `POST: https://localhost:5050/api/v1/signup`
- Student Sinin - `POST: https://localhost:5050/api/v1/signin`
- Get Trainers based on Course - `GET: https://localhost:5050/api/v1/Fullstack/trainers`
- Get Location based on City - `GET: http://localhost:5050/api/v1/Linton/locations`, 
- Create Booking - `POST: http://localhost:5050/api/v1/booking/create`
- Fetch Student Bookings - `GET: http://localhost:5050/api/v1/user/bookings`