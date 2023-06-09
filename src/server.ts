import express from 'express'
import { routes } from './routes';
import cors from 'cors'

const app = express();

// GET = BUSCAR INFORMAÇÕES
// POST = CADASTRAR INFORMAÇÃO
// PUT = ATUALIZAR INFORMAÇÕES DE UMA ENTIDADE
// PATCH = ATUALIZAR UMA INFORMAÇÃO ÚNICA DE UMA ENTIDADE
// DELETE = DELETAR INFORMAÇÃO

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3333, () => {
    console.log('HTTP SERVER RUNNING')
});