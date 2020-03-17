const mongoose = require("mongoose");

const mongodbHost = process.env.MONGODB_HOST || "localhost:27017";
const database = process.env.MONGODB_DATABASE || "nodeapi";

mongoose.connect(`mongodb://${mongodbHost}/${database}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
require("./src/models/Product");

const Product = mongoose.model('Product');

const products = [
  {
    title: "ReactJS",
    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    url: "https://github.com/facebook/react"
  },
  {
    title: "React Native",
    description: "A framework for building native apps with React.",
    url: "https://github.com/facebook/react-native"
  },
  {
    title: "GraphQL",
    description: "GraphQL is a query language and execution engine tied to any backend service.",
    url: "https://github.com/facebook/graphql"
  },
  {
    title: "Docosauros",
    description: "Easy to maintain open source documentation websites.",
    url: "https://github.com/facebook/docosauros"
  },
  {
    title: "Nuclide",
    description: "An open IDE for web and native mobile development, built on top of Atom",
    url: "https://github.com/facebook/nuclide"
  },
  {
    title: "create-react-app",
    description: "Create React apps with no build configuration.",
    url: "https://github.com/facebook/create-react-app"
  },
  {
    title: "Metro",
    description: "The JavaScript bundler for React Native.",
    url: "https://github.com/facebook/metro"
  },
  {
    title: "Relay",
    description: "Relay is a JavaScript framework for building data-driven React applications.",
    url: "https://github.com/facebook/relay"
  },
  {
    title: "Flow",
    description: "Adds static typing to JavaScript to improve developer productivity and code quality.",
    url: "https://github.com/facebook/flow"
  },
  {
    title: "Flipper",
    description: "A desktop debugging platform for mobile developers.",
    url: "https://github.com/facebook/flipper"
  },
  {
    title: "Jest",
    description: "Delightful JavaScript Testing.",
    url: "https://github.com/facebook/jest"
  },
  {
    title: "Watchman",
    description: "Watches files and records, or triggers actions, when they change.",
    url: "https://github.com/facebook/watchman"
  },
]

products.forEach(async (item, index, array) => {
  let product = new Product(item);
  await product.save();
  if ((index + 1) === array.length){
    mongoose.disconnect();
  }
});

