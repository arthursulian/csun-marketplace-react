class User {
  constructor(
    id, // ID of the user
    name, // Name of the user
    imageUrl, // user's profile image (going to have to convert this to something not URL-based eventually)
    bio, // user's profile description

    joinDate, // date the user joined
    lastOnline, // date the user last logged in (or opened the app, but who cares)
    rating, // 0-5 stars
    major, // user's major, just a string
    gender // also just a string
  ) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.bio = bio;
    this.joinDate = joinDate;
    this.lastOnline = lastOnline;
    this.rating = rating;
    this.major = major;
    this.gender = gender;
  }
}

export default User;
