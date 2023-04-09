
const request = require("supertest");
const app = require("../app"); 
const User = require("../models/user"); 
const Post = require("../models/post");
// User Test Cases
describe("User Endpoints", () => {
  let newUser;

  beforeEach(() => {
   
    newUser = new User({
      id: "1",
      name: " Adobe",
      email: "Adobe@gmail.com",
      bio: "I am a software developer.",
      created_at: new Date(),
      updated_at: new Date(),
    });
    newUser.save();
  });

  afterEach(() => {
    User.remove({});
  });

  test("should create a new user", async () => {
    const response = await request(app).post("/users").send({
      name: "adobe photoshop",
      email: "adobe@example.com",
      bio: "I am a web designer.",
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name", "adobe photoshop");
    expect(response.body).toHaveProperty("email", "adobe@example.com");
    expect(response.body).toHaveProperty("bio", "I am a web designer.");
    expect(response.body).toHaveProperty("created_at");
    expect(response.body).toHaveProperty("updated_at");
  });

  test("should retrieve a user by id", async () => {
    const response = await request(app).get(`/users/${newUser.id}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id", newUser.id);
    expect(response.body).toHaveProperty("name", newUser.name);
    expect(response.body).toHaveProperty("email", newUser.email);
    expect(response.body).toHaveProperty("bio", newUser.bio);
    expect(response.body).toHaveProperty(
      "created_at",
      newUser.created_at.toISOString()
    );
    expect(response.body).toHaveProperty(
      "updated_at",
      newUser.updated_at.toISOString()
    );
  });

  test("should update a user by id", async () => {
    const response = await request(app).put(`/users/${newUser.id}`).send({
      name: "Updated Name",
      bio: "Updated bio",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id", newUser.id);
    expect(response.body).toHaveProperty("name", "Updated Name");
    expect(response.body).toHaveProperty("email", newUser.email);
    expect(response.body).toHaveProperty("bio", "Updated bio");
    expect(response.body).toHaveProperty(
      "created_at",
      newUser.created_at.toISOString()
    );
    expect(response.body.updated_at).not.toEqual(
      newUser.updated_at.toISOString()
    );
  });

  test("should delete a user by id", async () => {
    const response = await request(app).delete(`/users/${newUser.id}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty(
      "message",
      "User deleted successfully"
    );
  });

  test("should retrieve the total number of users", async () => {
    const response = await request(app).get("/analytics/users");

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty;
  });
});


// Post Test Cases
describe("Post Endpoints", () => {
  let newPost;

  beforeEach(() => {
    // Create a new user for each test case
    newUser = new User({
      id: "1",
      name: "adobe assign",
      email: "adobeassign@example.com",
      bio: "I am a software developer.",
      created_at: new Date(),
      updated_at: new Date(),
    });
    newUser.save();

    
    newPost = new Post({
      id: "1",
      user_id: newUser.id,
      content: "This is a test post",
      created_at: new Date(),
      updated_at: new Date(),
      likes: 0,
    });
    newPost.save();
  });

  afterEach(() => {
  
    User.remove({});
    Post.remove({});
  });

  test("should create a new post", async () => {
    const response = await request(app).post("/posts").send({
      user_id: newUser.id,
      content: "This is a new post",
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("user_id", newUser.id);
    expect(response.body).toHaveProperty("content", "This is a new post");
    expect(response.body).toHaveProperty("created_at");
    expect(response.body).toHaveProperty("updated_at");
    expect(response.body).toHaveProperty("likes", 0);
  });

  test("should retrieve a post by id", async () => {
    const response = await request(app).get(`/posts/${newPost.id}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id", newPost.id);
    expect(response.body).toHaveProperty("user_id", newPost.user_id);
    expect(response.body).toHaveProperty("content", newPost.content);
    expect(response.body).toHaveProperty(
      "created_at",
      newPost.created_at.toISOString()
    );
    expect(response.body).toHaveProperty(
      "updated_at",
      newPost.updated_at.toISOString()
    );
    expect(response.body).toHaveProperty("likes", newPost.likes);
  });

  test("should update a post by id", async () => {
    const response = await request(app).put(`/posts/${newPost.id}`).send({
      content: "Updated post content",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id", newPost.id);
    expect(response.body).toHaveProperty("user_id", newPost.user_id);
    expect(response.body).toHaveProperty("content", "Updated post content");
    expect(response.body).toHaveProperty(
      "created_at",
      newPost.created_at.toISOString()
    );
    expect(response.body.updated_at).not.toEqual(
      newPost.updated_at.toISOString()
    );
    expect(response.body).toHaveProperty("likes", newPost.likes);
  });

  test("should delete a post by id", async () => {
    const response = await request(app).delete(`/posts/${newPost.id}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty();
  });
});
