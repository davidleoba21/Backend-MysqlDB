import express from 'express'
import { getAllCitas, getCita, setCita, updateCita, deleteCita } from '../controllers/CitasController.js'

const router = express.Router()

router.get('/', getAllCitas)
router.get('/:id', getCita)
router.post('/', setCita)
router.put('/:id', updateCita)
router.delete('/:id', deleteCita)


export default router