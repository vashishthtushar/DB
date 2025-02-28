const mongoose = require("mongoose");

main()
    .then(()=>{
    console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

// const user1 = new User ({
//     name: "adam",
//     email: "adam@yahoo.in",
//     age: 48
// });

// user1.save();

// const user2 = new User ({
//     name: "eve",
//     email: "eve@yahoo.in",
//     age: 54
// });

// user2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// user.insertMany([
//     {name:"tony", email: "tony@yahoo.in", age: 45},
//     {name:"peter", email: "peter@yahoo.in", age: 30},
//     {name:"bruce", email:"bruce@gmail.com", age:50}
// ]).then((res)=>{
//     console.log(res);
// });

// User.find({age:{$gt:50}})
// .then((res)=>{
//     console.log(res[0].name);
// }).catch((err)=>{
//     console.log(err);
// });


// User.findById("67bda82d4ca4e13a96ff373d")
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.updateMany({name: "bruce"}, {age: 55})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// }):

// User.findOneAndUpdate({name: "bruce"}, {age: 42}, {new: true})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.findOneAndUpdate({name:"tony"}, {age: 48}, {new: true})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


User.findByIdAndDelete('67bda82d4ca4e13a96ff373e').then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

