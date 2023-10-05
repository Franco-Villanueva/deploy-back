const server = require("./server");
const { conn } = require('./db.js');
const PORT = process.env.PORT || 3001;
const { createCategories } = require("./hardcoded/categories")
const { createProducts } = require("./hardcoded/products")
const { createAdmin } = require("./hardcoded/user")
const { createCarts } = require("./hardcoded/createCarts");
const { createOrders } = require("./hardcoded/createOrders");
conn
   .sync({ force: true })
   .then(() => {
      server.listen(PORT, () => {
         console.log(`Server listening on port ${PORT}`);
      })
      createCategories()
      createProducts()
      createAdmin()
      // createCarts()
      // createOrders()
   })
