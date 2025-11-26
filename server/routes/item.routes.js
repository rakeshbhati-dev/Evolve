import express from 'express'
const router=express.Router()

import { getAllItem,addItem,updateItem,deleteItem } from '../controllers/items.controller.js'

router.get('/',getAllItem)
router.post('/',addItem)
router.put('/:id',updateItem)
router.delete('/:id',deleteItem)

export default router