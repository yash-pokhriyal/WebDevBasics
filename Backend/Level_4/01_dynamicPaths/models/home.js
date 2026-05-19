// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const homeDataPath = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
   
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    this.id = Math.random().toString();
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Writing Concluded", error);
      });
    });
  }

  static fetchAll(callback) {
  
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(homeId,callback){
    // filhal saare ghr nikal lenge phir usme de dhundlenge ki meri id wal aghar konsa 
    // chotte level pe thik hai
    this.fetchAll(homes=>{
      const homeFound = homes.find(home => home.id === homeId);
      callback(homeFound);
    })

  }
};

// aesa method jo callback lega aur jab mai file pdunga to direct ya immediately reply ni krunga 

