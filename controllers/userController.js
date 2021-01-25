const { User } = require("../models")
const displayDate = require("../helpers/displayDate")


class UserController{
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
  }
}

module.exports = UserController
