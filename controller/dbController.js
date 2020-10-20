const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const categoryModel = require('../model/categoryModel')
const customerModel = require('../model/customerModel')
const orderDetailModel = require('../model/orderDetailModel')
const orderModel = require('../model/orderModel')
const productCategoryModel = require('../model/productCategoryModel')
const productImageModel = require('../model/productImageModel')
const productModel = require('../model/productModel')
const stockModel = require('../model/stockModel')
const storeListingModel = require('../model/storeListingModel')
const storeModel = require('../model/storeModel')


// === LowDB configurations ===
let db;
(async () => {
  try {
    const fs = require('fs')
    const util = require('util')
    const readdir = util.promisify(fs.readdir)
    const path = require('path').resolve()
    const dir = await readdir(path)
    if (!dir.includes('db.json'))
      fs.writeFile(path + 'db.json', '', () => 1)

    const adapter = new FileSync('db.json')
    db = low(adapter)
    db.defaults({
      categories: [],
      customers: [],
      orderDetails: [],
      orders: [],
      productCategories: [],
      productImages: [],
      products: [],
      stocks: [],
      storeListings: [],
      stores: []
    })
      .write()
  } catch (error) {
    console.log(error);
  }
})()

// === Modeling functions ===
function shapeObject(input, model) {
  const result = {}
  const modelCounter = model.length
  let counter = 0
  for (const namaKey in input) {
    if (model.includes(namaKey)) {
      result[namaKey] = input[namaKey]
      counter++
    }
  }
  if (counter < modelCounter) {
    return false
  }
  return result
}

// === CRUD functions ===
/**
 * Get data
 * @param {String} tableName table name
 * @returns {Object} data
 */
function get(tableName, query) {
  if (query && Object.keys(query).length) {
    return db
      .get(tableName)
      .find(query)
      .value()
  }
  return db
    .get(tableName)
    .value()

}

/**
 * Add data
 * @param {String} tableName table name
 * @param {Object} body inserted data
 */
function add(tableName, body) {
  let shapedBody

  if (tableName == 'categories') {
    shapedBody = shapeObject(body, categoryModel)
  }
  if (tableName == 'customers') {
    shapedBody = shapeObject(body, customerModel)
  }
  if (tableName == 'orderDetails') {
    shapedBody = shapeObject(body, orderDetailModel)
  }
  if (tableName == 'orders') {
    shapedBody = shapeObject(body, orderModel)
  }
  if (tableName == 'productCategories') {
    shapedBody = shapeObject(body, productCategoryModel)
  }
  if (tableName == 'productImages') {
    shapedBody = shapeObject(body, productImageModel)
  }
  if (tableName == 'products') {
    shapedBody = shapeObject(body, productModel)
  }
  if (tableName == 'stocks') {
    shapedBody = shapeObject(body, stockModel)
  }
  if (tableName == 'storeListings') {
    shapedBody = shapeObject(body, storeListingModel)
  }
  if (tableName == 'Stores') {
    shapedBody = shapeObject(body, storeModel)
  }
  if (!shapedBody) {
    return false
  }
  return db.get(tableName)
    .push(shapedBody)
    .write()
}

/**
 * Add a data
 * @param {String} tableName table name
 * @param {String|Number} id data id
 * @param {Object} body updated data
 */
function edit(tableName, id, body) {
  const parsedId = parseInt(id)
  db.get(tableName)
    .find({ id: parsedId })
    .assign(body)
    .write()
}

/**
 * Remove a data
 * @param {String} tableName table name
 * @param {String|Number} id data id
 */
function remove(tableName, id) {
  const parsedId = parseInt(id)
  db.get(tableName)
    .remove({ id: parsedId })
    .write()
}

/**
 * Remove all data
 * @param {String} tableName table name
 * @param {String|Number} id data id
 */
function removeAll(tableName) {
  db.get(tableName)
    .remove({})
    .write()
}


module.exports = {
  get,
  add,
  edit,
  remove,
  removeAll
}