class User {
  constructor(
    id, // ID of the user
    email,
    password,
    name, // Name of the user
    imageUrl, // user's profile image (going to have to convert this to something not URL-based eventually)
    bio, // user's profile description

    joinDate, // date the user joined
    rating, // 0-5 stars
    major, // user's major, just a string
    gender // also just a string
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
    this.imageUrl = imageUrl;
    this.bio = bio;
    this.joinDate = joinDate;
    this.rating = rating;
    this.major = major;
    this.gender = gender;
  }
}

export default User;
