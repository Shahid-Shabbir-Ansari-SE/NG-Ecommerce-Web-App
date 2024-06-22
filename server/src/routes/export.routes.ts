import { Router } from 'express'
import { getProduct } from './get/getProduct.routes'
import { createCategory } from './create/createCategory.routes'
import { getCategory } from './get/getCategory.routes'
import { getProductByTerm } from './get/getProductByTerm.routes'
import { createProduct } from './create/createProduct.routes'
import { createUser } from './create/createUser.routes'
import { createBrand } from './create/createBrand.routes'
import {
  verifyUserByCredentials,
  verifyUserFromToken
} from './auth/verifyUser.routes'
import { getCartItems } from './get/getCart.routes'
import { updateOrAddCartItem } from './add/addCart.routes'
// import { removeCartItem } from './del/delCart.routes'

const router = Router()

const product_route = '/product'
const category_route = '/category'
const user_route = '/user'
const cart_route = '/cart'

/* --------------- productRoutes --------------- */
// get product by id
router.get(`${product_route}/getProduct/:categoryId/:productId`, getProduct)
// get product by search term
router.get(`${product_route}/getProductByTerm`, getProductByTerm)
// create product
router.post(`${product_route}/createProduct`, createProduct)

/* --------------- categoryRoutes --------------- */
// get category by id
router.get(`${category_route}/getCategory/:id`, getCategory)
// create category
router.post(`${category_route}/createCategory`, createCategory)

/* --------------- userRoutes --------------- */
// create user
router.post(`${user_route}/createUser`, createUser)
// verify user by credentials
router.get(`${user_route}/verify_by_credentials`, verifyUserByCredentials)
// verify user by token
router.get(`${user_route}/verify_by_token`, verifyUserFromToken)

/* --------------- cartRoutes --------------- */
// get cart items
router.get(`${cart_route}/getCartItems`, getCartItems)
// add item to cart
router.post(`${cart_route}/updateOrAddCartItem`, updateOrAddCartItem)
// remove item from cart
// router.delete(`${cart_route}/removeCartItem`, removeCartItem)

/* --------------- brandRoutes --------------- */
// create brand
router.post('/brand/createBrand', createBrand)

export default router
