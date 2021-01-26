const { User } = require("../models")
const displayDate = require("../helpers/displayDate")


class UserController{
  static showUsers(req, res){
    User.findAll()
      .then((data)=>{
        res.render("home", {data})
      })
      .catch((err)=>{
        res.send(err)
      })
  }

  static showRegister(req, res){
    res.render("register")
  }

  static register(req, res){
    const {name, birthdate, username, password} = req.body
    User.create({name, birthdate, username, password})
      .then((data)=>{
        // console.log(data);
        res.render("profilePage", {data, displayDate})
      })
      .catch((err)=>{
        res.send(err)
      })
  }
}

module.exports = UserController
