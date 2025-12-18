import express from 'express'
import  ArticlesMiao  from '../controllers/articles.js'

const router = express.Router()

//index 
router.get("/", ArticlesMiao.index)
//show
router.get("/:id",ArticlesMiao.show)