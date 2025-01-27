import express, { Router } from 'express'
import productController from '../../controllers/product.controller'

const router: Router = express.Router()

router.get('/', productController.getAllProducts)
router.post('/create', productController.addProduct)
router.get('/:id', productController.getSpecificProduct)
router.delete('/:id', productController.deleteProduct)
router.put('/:id', productController.updateProduct)

export default router
