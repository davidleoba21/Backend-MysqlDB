import express from 'express'
import cors from 'cors'
//importamos conexion a la base de datos
import conectarBD from './configBD/db.js'
import citasRouters from './routes/CitasRutas.js'


const app = express()
app.use(cors())
app.use(express.json())
app.use('/citas', citasRouters)

try {
    await conectarBD.authenticate()
    console.log('conexion establecida exitosamente')
} catch (error) {
    console.log('Error con:', error)
}

app.get('/', (req, res) => {
  res.send('Estamos Conectados a la web')
})

app.listen(3000, () => {
    console.log('el Servidor esta conectado http://127.0.0.1:3000')
})