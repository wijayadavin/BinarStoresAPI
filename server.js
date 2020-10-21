const express = require('express')
const bodyParser = require('body-parser')


// === import routes ===
const rootRoute = require('./routes/rootRoute')

const addCategories = require('./routes/categories/addCategories')
const getCategories = require('./routes/categories/getCategories')

const addOrderDetailsRoutes = require('./routes/orderDetails/addOrderDetails')
const getOrderDetailsRoutes = require('./routes/orderDetails/getOrderDetails')

const addOrdersRoutes = require('./routes/orders/addOrders')
const getOrdersRoutes = require('./routes/orders/getOrders')

const addProductCategoriesRoutes = require('./routes/productCategories/addProductCategories')
const getProductCategoriesRoutes = require('./routes/productCategories/getProductCategories')

const addProductImagesRoutes = require('./routes/productImages/addProductImages')
const getProductImagesRoutes = require('./routes/productImages/getProductImages')

const addProductsRoutes = require('./routes/products/addProducts')
const getProductsRoutes = require('./routes/products/getProducts')

const addStocksRoutes = require('./routes/stocks/addStocks')
const getStocksRoutes = require('./routes/stocks/getStocks')

const addStoreListingsRoutes = require('./routes/storeListings/addStoreListings')
const getStoreListingsRoutes = require('./routes/storeListings/getStoreListings')

const addStoresRoutes = require('./routes/stores/addStores')
const getStoresRoutes = require('./routes/stores/getStores')

const signupRoutes = require('./routes/loginRoute')
const loginRoutes = require('./routes/loginRoute')


// === app setup ===
const app = express()
app.use(bodyParser.json())


// === use imported routes ===
app.use(rootRoute)

app.use(addCategories)
app.use(getCategories)

app.use(addCustomers)
app.use(getCustomers)

app.use(addOrderDetailsRoutes)
app.use(getOrderDetailsRoutes)

app.use(addOrdersRoutes)
app.use(getOrdersRoutes)

app.use(addProductCategoriesRoutes)
app.use(getProductCategoriesRoutes)

app.use(addProductImagesRoutes)
app.use(getProductImagesRoutes)

app.use(addProductsRoutes)
app.use(getProductsRoutes)

app.use(addStocksRoutes)
app.use(getStocksRoutes)

app.use(addStoreListingsRoutes)
app.use(getStoreListingsRoutes)

app.use(addStoresRoutes)
app.use(getStoresRoutes)

app.use(loginRoutes)
app.use(signupRoutes)


// === Port setup ===
const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
