const Home = require('../models/home');

exports.getHomes = (req,res,next)=>{
    const registeredHomes = Home.fetchAll();
    console.log(registeredHomes);
    res.render('home',{registeredHomes:registeredHomes ,pageTitle:'airbnb Home',currentPage:'Home'});
}

exports.getAddHomes = (req,res,next)=>{
    res.render('addHome',{pageTitle:'Add home to airbnb',currentPage:'addHome'});
}

exports.postHomes = (req,res,next)=>{
    console.log('Home registered successfully',req.body);

    const {houseName,rice,location,rating,photoUrl} = req.body;
    const home = new Home(houseName,rice,location,rating,photoUrl);
    home.save()

    res.render('homeAdded',{pageTitle:'Home added Successfully',currentPage:'homeAdded'});
}