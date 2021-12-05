import Product from "../models/product";
import User from "../models/user";
let IMGS = [];
let PRODUCTS = [
  new Product(
    "p1",
    "u1",
    "COMP 490 Software Engineering Textbook",
    "https://people.eecs.ku.edu/~saiedian/Images/Classes/2016-IS.jpg",
    "Software Engineering 10th Edition by Ian Sommerville. Lightly used for a semester.",
    49.99
  ),
  new Product(
    "p2",
    "u4",
    "Backpack",
    "https://images.fun.co.uk/products/63117/1-1/nasa-astronaut-space-print-backpack.jpg",
    "A backpack I bought but never used, hoping it'll go to someone who needs it!",
    19.99
  ),
  new Product(
    "p3",
    "u5",
    "Phone Charger",
    "https://kiesub.com/wp-content/uploads/2015/06/CEL-CHG30B.jpg",
    "An extra phone charger for an iPhone 4, if those even exist anymore.",
    5.99
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
    "u2",
    "Apple Macbook Laptop",
    "https://get.pxhere.com/photo/laptop-computer-macbook-mac-screen-water-board-keyboard-technology-air-mouse-photo-airport-aircraft-tablet-aviation-office-black-monitor-keys-graphic-hardware-image-pc-exhibition-multimedia-calculator-vector-water-cooling-floppy-disk-phased-out-desktop-computer-netbook-personal-computer-computer-monitor-electronic-device-computer-hardware-display-device-448748.jpg",
    "Awesome hardware, crappy keyboard and a hefty price. Buy now before a new one is released!",
    999.99
  ),
  new Product(
    "p6",
    "u4",
    "COMP 490 Software Engineering Textbook",
    "https://daks2k3a4ib2z.cloudfront.net/57262deac37897e55d02701f/572650732f3e6fea5d01be36_www.safaribooksonline.jpg",
    "Essentials of Software Engineering 4th Edition, by Frank Tsui, Orlando Karam, and Barbara Bernal. Love you Stein! 😘",
    69.99
  ),
  new Product(
    "p7",
    "u5",
    "COMP 410 Prolog Textbook",
    "https://mitpress.mit.edu/sites/default/files/styles/large_book_cover/http/mitp-content-server.mit.edu:18180/books/covers/cover/%3Fcollid%3Dbooks_covers_0%26isbn%3D9780262193016%26type%3D.jpg?itok=SRngtpBk",
    "The Practice of Prolog (Logic Programming) by Leon S. Sterling (Author)",
    33.99
  ),
  new Product(
    "p8",
    "u1",
    "COMP 410 Prolog Textbook",
    "https://th.bing.com/th/id/OIP.BUp2wbLGLwuXOC4ksAPLwAAAAA?pid=ImgDet&rs=1",
    "The Craft of Prolog (Logic Programming) Illustrated Edition by Richard O'Keefe (Author)",
    41.99
  ),
  new Product(
    "p9",
    "u2",
    "COMP 490 Software Engineering Textbook",
    "https://pictures.abebooks.com/isbn/9780124079144-es.jpg",
    "Designing with the Mind in Mind: Simple Guide to Understanding User Interface Design Guidelines 2nd Edition by Jeff Johnson",
    49.99
  ),
  new Product(
    "p10",
    "u1",
    '15" AMD Laptop',
    "https://i5.walmartimages.com/asr/d92205a4-e4b6-48d3-bb0d-cfad3da0fbae_1.b7ef8b2d326f1071327502251db90d70.jpeg",
    "A decent laptop for anyone looking for a new laptop for school!",
    499.99
  ),
  new Product(
    "p11",
    "u2",
    "Apple iPhone",
    "https://th.bing.com/th/id/OIP.XQiDTv1Pjo7DAmliIbc6TgHaJe?pid=ImgDet&rs=1",
    "My old iPhone, don't need it anymore!",
    199.99
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
    "Male"
  ),
  new User(
    "u3",
    "christopher.owen@my.csun.edu",
    "password",
    "Chris Owen",
    "https://cdn.discordapp.com/attachments/911058579073675284/916936751375872050/111-1110771_thumbs-up-emoji-meme-hd-png-download.png",
    "To be fair, you have to have a very high IQ to understand Rick and Morty.",
    "11/30/2021",
    5,
    "Computer Science",
    "Male"
  ),
  new User(
    "u4",
    "orr.marrom@my.csun.edu",
    "password",
    "Orr Marrom",
    "https://i.pinimg.com/600x315/1f/ae/3b/1fae3bb3e6712e62538b0c6bb1077921.jpg",
    "Hmmmm, RGB just really doesn't work for me.",
    "11/30/2021",
    5,
    "Computer Science",
    "Male"
  ),
  new User(
    "u5",
    "anthony.omens@my.csun.edu",
    "password",
    "Anthony Omens",
    "https://cdn.discordapp.com/attachments/751297356926025739/916934623903244298/unknown.png",
    "I don't care about the sour spice or poison of a pufferfish. Yeah, it's a puffer I bought it cause I'm rich.",
    "11/30/2021",
    5,
    "Computer Science",
    "Male"
  ),
  new User(
    "u6",
    "a",
    "a",
    "Test User",
    //require("../app/assets/SWOLYEP.png"),
    "https://i.imgur.com/Bzj2xod.png",
    "If you ended up here, you must REALLY understand Rick and Morty.",
    "11/30/2021",
    5,
    "Memes",
    "Literally a PNG"
  ),
];
let FILTEREDPRODUCTS = PRODUCTS.slice();

export default PRODUCTS;
export { USERS, IMGS, FILTEREDPRODUCTS };
