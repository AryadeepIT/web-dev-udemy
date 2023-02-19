const mongoose = require("mongoose");
 
main().catch((err) => console.log(err));
 
async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://127.0.0.1/fruitsDB", {useNewUrlParser: true,});
  console.log("Connected");
 
  const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String,
  });
 
  const Fruit = mongoose.model("Fruit", fruitSchema);
 
  const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit.",
  });
 
  fruit.save();
 
  const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
  });
 
  const Person = mongoose.model("Person", personSchema);
 
  const person = new Person({
    name: "Aryadeep",
    age: 21,
  });
 
  person. Save();
}
mongoose.connection.close();