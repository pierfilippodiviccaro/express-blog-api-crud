import { Articles } from '../data.js'

// index
function index(req,res){
    const risposta={
        lunghezza: Articles.length,
        totale: Articles
    }
    res.json(risposta)
}
//show
function show(req,res){
    const id = req.params.id
    const articolo = Articles.find(article=> article.id === id )
    if(articolo === undefined){
        res.status(404);
        return res.json({
            message:"articolo non trovato"
        })
    }
}
//store
//update
//modify
//delete