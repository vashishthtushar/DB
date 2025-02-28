const mongoose = require("mongoose");

main()
    .then(()=>{
    console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true  // Mandatory to fulfiil
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: 1,
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
});

const book = mongoose.model("book", bookSchema);

// let book1 = new book ({
//     title: "Marvel Comics",
//     price: "500",
//     category: "fiction",
// });
// book1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// book.findByIdAndUpdate("67be10b306e6c69e4660ff17",{price: -500}, {runValidators: true})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


 //for handling the errors...
book.findByIdAndUpdate("67be10b306e6c69e4660ff17",{price: -500}, {runValidators: true})
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
});