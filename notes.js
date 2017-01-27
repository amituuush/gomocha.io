// make database first, model
// create controller,
// create route

const CoffeeSchema = new Schema({ name: , employee: [{ type: Schema.Types.ObjectId, ref: 'Employee' }] });

const AuthSchema = new Schema({
  name: String,
  role: { type: String, enum: ['Customer', 'CoffeeShop'],
  default: 'Customer' },
  coffeShop: { type: Sceham}
}); 

if (user.role === 'CoffeeShop')

componentWillMount() { this.props.fetchCoffeeApi(this.props.user.id); }


// create order history view on admin side
// create sample coffee shops in the database that the client will fetch every time
  // shop will display name, address, distance from user, and open/closed status
  // think about coffee shop schema. I will input coffee shop and menu details into db => how to give admin roles access to coffee shop
// server and client side auth with roles


// add tipping option
// create test for geolocation