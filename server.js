const express = require('express')

const server =  express()

server.get('/', (_req, res) => {
    res.send('<h1>Home<h1>')
    
})

server.post('/contato', (_req, res) => {
    res.send('<h1>Precisamo aprender a pegar o valor que o usuário digitou<h1>')
    
})

server.get('/contato', (_req, res) => {
    res.send(`
    <h1>Contato</h1>
    <form action="/contato" method="POST">
      <label for="email">Email:</label>
      <input type="email" name="email" id="email">
      <label for="mensagem">Mensagem:</label>
      <textarea name="mensagem" id="mensagem"></textarea>
      <input type="submit" value="Enviar">
    </form>
  `)
})

server.listen(3001, () => {
    console.log('Servidor de pé em:http:localhost:3001')

})