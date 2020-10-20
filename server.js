const express = require('express')
const bodyParser = require('body-parser')


// === import routes ===
const rootRoute = require('./routes/rootRoute')

const addCategories = require('./routes/categories/addCategories')
const getCategories = require('./routes/categories/getCategories')

const addCustomers = require('./routes/customers/addCustomers')
const getCustomers = require('./routes/customers/getCustomers')

const addOrderDetails = require('./routes/orderDetails/addOrderDetails')
const getOrderDetails = require('./routes/orderDetails/getOrderDetails')

const addOrders = require('./routes/orders/addOrders')
const getOrders = require('./routes/orders/getOrders')

const addProductCategories = require('./routes/productCategories/addProductCategories')
const getProductCategories = require('./routes/productCategories/getProductCategories')

const addProductImages = require('./routes/productImages/addProductImages')
const getProductImages = require('./routes/productImages/getProductImages')

const addProducts = require('./routes/products/addProducts')
const getProducts = require('./routes/products/getProducts')

const addStocks = require('./routes/stocks/addStocks')
const getStocks = require('./routes/stocks/getStocks')

const addStoreListings = require('./routes/storeListings/addStoreListings')
const getStoreListings = require('./routes/storeListings/getStoreListings')

const addStores = require('./routes/stores/addStores')
const getStores = require('./routes/stores/getStores')


// === app setup ===
const app = express()
app.use(bodyParser.json())


// === use imported routes ===
app.use(rootRoute)

app.use(addCategories)
app.use(getCategories)

app.use(addCustomers)
app.use(getCustomers)

app.use(addOrderDetails)
app.use(getOrderDetails)

app.use(addOrders)
app.use(getOrders)

app.use(addProductCategories)
app.use(getProductCategories)

app.use(addProductImages)
app.use(getProductImages)

app.use(addProducts)
app.use(getProducts)

app.use(addStocks)
app.use(getStocks)

app.use(addStoreListings)
app.use(getStoreListings)

app.use(addStores)
app.use(getStores)


// === Port setup ===
const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
