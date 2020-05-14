import express from 'express'
import routes from "./router/routes"
import QR from '../src/controllers/QrController'
const app = express()
const port = 3333

app.use(routes)

QR.QrShow()

app.listen(port, () => {
    console.log(`Listening route ${port}`)
})