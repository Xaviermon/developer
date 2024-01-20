import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
  console.log('ruta funciona');
})

export default router