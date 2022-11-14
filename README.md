# pocTypeScript

Rotas: 
get("/movies")

post("/movies") - body :
{
name: "Thor",
platform: "netflix",
genre: "herois",
status: false,
sinopse: ''
}
obs: o status funciona pra verificar se vc ja assistiu ao filme ou nao, status false significa que nao assistiu,
status true quer dizer q ja assistiu, a sinopse na hora de adicionar um novo filme a sua lista é opcional

put("/movies/:id")
{
sinopse: 'muito bom'
}
obs: no metodo de update, vc passa o id do filme que vc assistiu e ele ja é contabilizado com status true,
alem disso vc pode adicionar uma sinopse pra ele, sendo ela um resumo do filme ou so uma observaçao sua

delete("/movies/:id")
get("/movies/:platform")
obs: aqui a platform vc passa exatamente a plataforma em que registrou o filme, como por exemplo netflix
