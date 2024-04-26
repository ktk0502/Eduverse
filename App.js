require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");
const User = require("./model/user");
const auth = require("./middleware/auth");
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.post("/register", async (req, res) => {
  try {
    const { Username, email, password } = req.body;

    if (!(email && password && Username)) {
      res.status(400).send("All fields are required");
    }

    const existingUser = await User.findOne({ email }); 

    if (existingUser) {
      res.status(401).send("User already exists");
    }

    const myEncPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      Username,
      email: email.toLowerCase(),
      password: myEncPassword,
    });

  
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.SECRET_KEY,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;
    user.password = undefined;

    setTimeout(() => {
      res.status(201).redirect(`/login`);
    }, 2000);
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body.email);
    console.log(req.body.password);
    if (!(email && password)) {
      return res.status(400).send("Email and password are required");
    }

    const user = await User.findOne({ email });
 

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.SECRET_KEY,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
      user.password = undefined;
      
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      return res
        .status(200)
        .cookie("token", token, options)
        .redirect("/index.ejs");

    }

    return res.status(400).redirect("/login");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/index.ejs", auth, (req, res) => {
   
    res.render("index");
  
});


app.get("/", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/about.ejs",(req,res)=>{
res.render("about")
})


// app.get("/shop.ejs",(req,res)=>{
//   res.render("shop")
//   })

  app.get("/blog.ejs",(req,res)=>{
    res.render("blog")
    })

    
  app.get("/cart.ejs",(req,res)=>{
    res.render("cart")
    })

    
  app.get("/contact.ejs",(req,res)=>{
    res.render("contact")
    })

    
  app.get("/sproduct.ejs",(req,res)=>{
    res.render("sproduct")
    })

    app.get("/solidstate.ejs",(req,res)=>{
      res.render("solidstate")
      })

    app.get("/atomschemistry.ejs",(req,res)=>{
      res.render("atomschemistry")
      })
    app.get("/hydrocarbons.ejs",(req,res)=>{
      res.render("hydrocarbons")
      })

    app.get("/organicchemistry.ejs",(req,res)=>{
      res.render("organicchemistry")
      })

      app.get("/Humananatomy.ejs",(req,res)=>{
        res.render("Humananatomy")
        })

      app.get("/Animals.ejs",(req,res)=>{
        res.render("Animals")
        })
      app.get("/Plants.ejs",(req,res)=>{
        res.render("Plants")
        })
      app.get("/Microorgans.ejs",(req,res)=>{
        res.render("Microorgans")
        })
      app.get("/Atomsphysics.ejs",(req,res)=>{
        res.render("Atomsphysics")
      })
      app.get("/Sloarsystem.ejs",(req,res)=>{
        res.render("Solarsystem")
        })
    

module.exports = app;
