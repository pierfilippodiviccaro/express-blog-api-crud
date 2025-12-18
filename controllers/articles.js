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
    res.json(articolo)
}
//store
function store(req,res){
    res.send("creo nuovo articolo")
}
//update
function update (req,res){
    const id = req.params.id
    res.send("aggiorno l'articolo numero"+id)
}
//modify
function modify(req,res){
    const id= req.params.id
    res.send("modifico articolo numero" + id)
}
//delete
function destroy (req,res){
const id = req.params.id
 const articolo = Articles.findIndex(article=> article.id === id )
    if(articolo === -1){
        res.status(404);
        return res.json({
            message:"articolo non disponibile"
        })
    }
    Articles.splice(articolo, 1)
    res.status(204);
}