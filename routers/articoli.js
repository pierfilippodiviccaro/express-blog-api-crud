import express from 'express'
import  Articles  from '../controllers/articles.js'

const router = express.Router()

//index 
router.get("/", Articles.index)
//show
router.get("/:id",Articles.show)
//store 
router.post("/",Articles.store)
//update
router.put("/:id",Articles.update)
//modify
router.patch("/:id",Articles.modify)
//delete
router.delete(":/id",Articles.destroy)

export default router 