import Product from "../models/product";
import User from "../models/user";
let IMGS = [];
let PRODUCTS = [
  new Product(
    "p1",
    "u1",
    "Red Shirt",
    "https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg",
    "A red t-shirt, perfect for days with non-red weather.",
    29.99
  ),
  new Product(
    "p2",
    "u1",
    "Blue Carpet",
    "https://images.pexels.com/photos/6292/blue-pattern-texture-macro.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "Fits your red shirt perfectly. To stand on. Not to wear it.",
    99.99
  ),
  new Product(
    "p3",
    "u2",
    "Coffee Mug",
    "https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg",
    "Can also be used for tea!",
    8.99
  ),
  new Product(
    "p4",
    "u3",
    "The Book - Limited Edition",
    "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?cs=srgb&dl=blur-blurred-book-pages-46274.jpg&fm=jpg",
    "What the content is? Why would that matter? It's a limited edition!",
    15.99
  ),
  new Product(
    "p5",
    "u3",
    "PowerBook",
    "https://get.pxhere.com/photo/laptop-computer-macbook-mac-screen-water-board-keyboard-technology-air-mouse-photo-airport-aircraft-tablet-aviation-office-black-monitor-keys-graphic-hardware-image-pc-exhibition-multimedia-calculator-vector-water-cooling-floppy-disk-phased-out-desktop-computer-netbook-personal-computer-computer-monitor-electronic-device-computer-hardware-display-device-448748.jpg",
    "Awesome hardware, crappy keyboard and a hefty price. Buy now before a new one is released!",
    2299.99
  ),
  new Product(
    "p6",
    "u1",
    "Pen & Paper",
    "https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg",
    "Can be used for drawing or taking notes!",
    5.49
  ),
];

let USERS = [
  new User(
    "u1",
    "nick.johnsmith@my.csun.edu",
    "password",
    "Nick Johnsmith",
    "https://images.unsplash.com/photo-1534125956906-1941fd729155?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    "Lorem ipsum dolor sit amet, consecteteur adipiscing elit.",
    "11/30/2021",
    4,
    "Computer Science",
    "Male"
  ),
  new User(
    "u2",
    "angelo.leonardi@my.csun.edu",
    "password",
    "Angelo Leonardi",
    "https://cdn.discordapp.com/attachments/531813317694586892/915497287726284830/kittyhugs.png",
    "We are, like Nebuchadnezzar, dethroned, bereft of reason, and eating grass like an ox.",
    "11/30/2021",
    5,
    "Computer Science",
    "Yes"
  ),
  new User(
    "u3",
    "a",
    "a",
    "Chris Owen",
    "https://cdn.discordapp.com/attachments/754862860105941102/814286387149799454/183b142f384f0798eac8c4b8c0c23925.png",
    "To be fair, you have to have a very high IQ to understand Rick and Morty.",
    "11/30/2021",
    5,
    "Computer Science",
    "Girl Who Codes"
  ),
];
let FILTEREDPRODUCTS = PRODUCTS.slice();

export default PRODUCTS;
export { USERS, IMGS, FILTEREDPRODUCTS };
