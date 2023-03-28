const mongoose = require('mongoose');
mongoose.set('strictQuery',true);

mongoose.connect("mongodb://127.0.0.1:27017/movieApp")
    .then(()=> {
        console.log('connection open')
    })
    .catch(err=> {
        console.log("OH NO ERROR")
        console.log(err)
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie =  mongoose.model('Movie', movieSchema);

// const amadeus = new Movie({ title: 'Django', year: 2010, score: 8.0, rating: 'R' });

Movie.insertMany([
  {title: 'Amelie', year: 2001, score: 8.3, raing: 'R'},
  {title: 'Alien', year: 1979, score: 8.1, rating: 'R'}
])
.then(data=>{
  console.log('IT WORKED!')
  console.log(data);
})