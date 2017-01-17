<img src="public/img/gomocha-logo-lg.png" />

# GoMocha
GoMocha is a full-stack, monolithic geolocation food and drink ordering system. The app is split into two front ends: one for the customer to order their drink(s) and/or food (GoMocha Consumer), and one for the coffee shop to receive and manage orders as they come in (GoMocha Business Admin, or GoMocha-BA).<br />

GoMocha Consumer allows a customer to select a coffee shop within a given radius of their current location, customize their order, and place their order. GoMocha Consumer will calculate how long it will take the customer to arrive at the coffee shop using the customer's location, the selected coffee shop location, and their selected method of transportation. This sends an order to GoMocha-BA, which displays a list of incoming orders. Each order has a timer component that tells the coffee shop approximately when the customer is going to arrive given the information collected mentioned above. If a customer selects a desired pickup time, the timer will adjust and calculate the difference in the current time and the customer's selected pickup time. Orders can then be marked as complete on GoMocha-BA once the coffee shop has handed them off to their customer.

To see GoMocha live in action, open a browser tab for <a href="http://gomocha.herokuapp.com/">GoMocha Consumer</a> and a tab for <a href="https://gomocha.herokuapp.com/admin">GoMocha-BA</a>. All you have to do is place an order on GoMocha Consumer, and then watch GoMocha-BA receive the order.
<br />
Front end source code for GoMocha Consumer can be found in the `/customer` directory, and `/business-admin` for GoMocha-BA. Back end source code can be found in `/routers`.
<br /><br />
GoMocha Consumer
<img src="public/img/select-shop-custom-order.png" style="width: 400px" />
<br /><br />
GoMocha Business Admin
<img src="public/img/gomocha-ba.png" style="width: 400px" />
<br /><br />

## Technical
• The front end of the app is built in React and Redux, using SASS as a CSS extension language, and webpack as a module bundler.<br />
• The back end is built in Node.js with Express, and uses MongoDB with Mongoose as a database.<br />
• The app uses the Google Places API Web Service, Google Maps Distance Matrix API, and HTML Geolocation API in order as follows:<br />
   1. Once the user opens the app, navigator.geolocation.getCurrentPosition() is called to retrieve the users latitude and longitude coordinates.<br />
   2. As soon as the user's location is retrieved, a call is made to the Google Places API Web Service, while passing in the user's latitude and longitude coordinates as an argument, to retrieve a list of restaurants with the tag "cafe" that are within 4,000 meters of the user's location. A list of coffee shops is then generated for the user to choose from.<br />
   3. A call is then made to the Google Maps Distance Matrix API to retrieve the distance from the user's location to each of the coffee shops that were retrieved in the previous call.
   4. As soon as a user clicks on their desired coffee shop, another API call is made to the Google Places API Web Service while passing in the coffee shop's unique Google ID, to retrieve more information about the coffee shop (specifically the shop's coordinates).<br />
   5. A final call to the Google Maps Distance Matrix API is called upon the user selecting their method of transportation. This call passes in the user's coordinates, the shop's coordinates, and the selected method of transportation to estimate the time it will take for the customer to arrive at the coffee shop.<br />

• Submitted orders are sent to the database along with the user's username, to allow the display of previous and favorited orders and for GoMocha-BA to fetch the orders.<br />
• GoMocha-BA uses polling to fetch orders from the database every 5 seconds. <br />
• Travis CI is used for distributed continuous integration.<br />
<br /><br />

<img src="public/img/additional-info-order-confirm.png" style="width: 400px" />
<br /><br />
## Development Roadmap
Future developments of the app will include:<br />
• ~~Calculate customer arrival time based on customer location, coffee shop location, and selected method of transportation~~  <br />
• ~~Business admin (BA) interface to receive all orders submitted by customers, to be handled by the coffee shop~~  <br />
• ~~Timer component to tell the coffee shop exactly when the customer will arrive~~  <br />
• Text or Email notification options for customer<br />
• Customer management and sales statistic tools on GoMocha-BA<br />
• Social login<br />
• Ability to search for shops<br />
• Ability to start new order from previous and favorited orders<br />
• Ability to share submitted order on Facebook<br />
• Credit card authorization<br />
• Websockets instead of polling<br />
<br /><br />

<img src="public/img/landing-page.png" style="width: 400px" />
