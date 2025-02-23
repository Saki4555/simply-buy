const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const port = process.env.PORT || 3000;

// middlewares

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

// verifyJWT
const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) return res.status(404).send({ message: "NO TOKEN" });
  const token = authorization.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_KEY_TOKEN, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({ error: true, message: "Unauthorized access" });
    }
    req.decoded = decoded;
    next();
  });
};

// verify seller
const verifySeller = async (req, res, next) => {
  const email = req.decoded.email;
  const user = await userCollection.findOne({ email: email });
  if (user?.role !== "seller") {
    return res.status(403).send({ error: true, message: "FORBIDDEN ACCESS" });
  }
  next();
};

// mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.phgiqsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// user collections
const userCollection = client.db("gadgetShop").collection("users");
const productCollection = client.db("gadgetShop").collection("products");

const dbConnect = async () => {
  try {
    // users api------
    app.put("/user/:email", async (req, res) => {
      const email = req.params.email;
      const user = req.body;
      const query = { email: email };
      const updatedDoc = { $set: user };
      const options = { upsert: true };
      const result = await userCollection.updateOne(query, updatedDoc, options);

      res.send(result);
    });

    // jwt ----------
    app.post("/authentication", (req, res) => {
      const userEmail = req.body;
      const token = jwt.sign(userEmail, process.env.ACCESS_KEY_TOKEN, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });
      res.send({ token });
    });

    // get user
    app.get("/user/:email", async (req, res) => {
      const email = req.params.email;
      const result = await userCollection.findOne({ email: email });
      res.send(result);
    });

    // add products
    app.post("/add-products", verifyJWT, verifySeller, async (req, res) => {
      const product = req.body;
      const result = await productCollection.insertOne(product);
      res.send(result);
    });

    // get products
    app.get("/all-products", async (req, res) => {
      const { title, category, page = 1, limit = 9 } = req.query;
      const query = {};
      if (title) query.name = { $regex: title, $options: "i" };
      if (category) query.category = { $regex: category, $options: "i" };

      // const sortOption = sort === "asc" ? 1 : -1;
      const products = await productCollection
        .find(query)
        .skip((Number(page) - 1) * limit)
        .limit(Number(limit))
        .toArray();
      const totalProducts = await productCollection.countDocuments(query);
      console.log(totalProducts);

      res.send({ products, totalProducts });
    });

    //add to wishlist
    app.patch("/wishlist/add", async (req, res) => {
      const { userEmail, productId } = req.body;
      const result = await userCollection.updateOne(
        { email: userEmail },
        { $addToSet: { wishlist: new ObjectId(String(productId)) } }
        // {upsert: true}
      );
      res.send(result);
    });
    // remove from wishlist
    app.patch("/wishlist/remove", async (req, res) => {
      const { userEmail, productId } = req.body;
      const result = await userCollection.updateOne(
        { email: userEmail },
        { $pull: { wishlist: new ObjectId(String(productId)) } }
      );
      res.send(result);
    });

    // extract wishlist's product
    app.get("/wishlist/:email", async (req, res) => {
      const email = req.params.email;
      console.log(email);

      const user = await userCollection.findOne({ email: email });
      if (!user) {
        return res.send({ message: "User not found" });
      }

      const wishlistProducts = await productCollection
        .find({ _id: { $in: user.wishlist || [] } })
        .toArray();

      res.send(wishlistProducts);
    });

    await client.connect();
    console.log("Database connected successfully");
  } catch (err) {
    console.log(err.name, err.message);
  }
};

dbConnect();

// api

app.get("/", (req, res) => {
  res.send("hello new world");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// kSwGu0w1SUsko3xT
