module.exports = function(app){
    
    app.get('/lancamento', function(req , res){
        res.render("welcome/launch");
    })
}