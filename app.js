const express = require("express");
const app = express();
const cors = require("cors");
const user = require("./routes/user");
const book = require("./routes/book");
const cart = require("./routes/cart");
const fav = require("./routes/favourite");
const order = require("./routes/order");
require("dotenv").config();

const PORT = process.env.PORT || 1000;
app.use(cors({
  origin: ["https://book-shelf-client-six.vercel.app/api/v1/"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}
));
app.use('../uploads', express.static('uploads'));
app.use(express.json());

//Connection
require("./conn/conn");

//Calling Routes
app.use("/api/v1", user);
app.use("/api/v1", book);
app.use("/api/v1", cart);
app.use("/api/v1", fav);
app.use("/api/v1", order);

app.get("/", (req, res) => {
  res.json({message: "Hello World"});
})

//SERVER
app.listen(PORT, () => {
  console.log(`Server Started at PORT : ${PORT} `);
});
