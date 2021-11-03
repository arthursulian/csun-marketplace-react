class Product {
  constructor(
    id, // Unique ID of the Product
    ownerId, // ID of the User who created the Product Listing
    title, // Title of the Product
    imageUrl, // URL for image of the Product
    description, // Description of the Product
    price // Price of the Product
  ) {
    this.id = id;
    this.ownerId = ownerId;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

export default Product;
