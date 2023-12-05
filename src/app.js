
import express from 'express';
import config from "./config.js";
import indexRouter from "./routes/index.routes.js";
import clienteRouter from "./routes/cliente.routes.js";
import empleadoRouter from "./routes/empleado.routes.js";
import insumoRouter from "./routes/insumo.routes.js";
import productoRouter from "./routes/producto.routes.js";
import tipoEmpleadoRouter from "./routes/tipoEmpleado.routes.js";
import tipoInsumoRouter from "./routes/tipoInsumo.routes.js";
import tipoProductoRouter from "./routes/tipoProducto.routes.js";
import VentaInsumoRouter from "./routes/ventaIns.routes.js";
import VentaProductoRouter from "./routes/ventaPro.routes.js"
import loginRouter from "./routes/login.routes.js"
import imagenRouter from "./routes/imagen.routes.js"
import Stripe from 'stripe';
import path from 'path';
const __dirname = path.resolve();

const app =  express();
import cors from 'cors';
app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000'
}));


//metodo de pago stripe
//stripe
const stripe = new Stripe("sk_test_51NIkg2EE8ZogoiscXXmlua7DNc4aInJrIMd4HFaniBI9t849GSX25QpBB1tjiAiXEAfrjz1RX1CsT8EbRq2XDAE700ufhVy6mO")
app.use(express.json())

app.post('/api/v1/stripe', async (req, res) => {
    try {
        const { id, amount, products } = req.body
        console.log(req.body);
        const amountInCents = Math.round(amount * 100);
        const payment = await stripe.paymentIntents.create({
            amount: amountInCents,
            currency: "PEN",
            payment_method: id,
            confirm: true
        });

        console.log(payment)
       
        res.send({ message: 'successfully pay' })
    } catch (error) {
        console.log(error)
        res.json({ message: error.raw.message })
    }
});
//metodo de pago stripe
//midellewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set("port" , config.APP_PORT);
app.set("host", config.APP_HOST);

//routes
app.use("/", indexRouter);
app.use(`/api/${config.API_VERSION}/cliente`, clienteRouter);
app.use(`/api/${config.API_VERSION}/empleado`, empleadoRouter);
app.use(`/api/${config.API_VERSION}/insumo`, insumoRouter);
app.use(`/api/${config.API_VERSION}/producto`, productoRouter);
app.use(`/api/${config.API_VERSION}/tipoEmpleado`, tipoEmpleadoRouter);
app.use(`/api/${config.API_VERSION}/tipoInsumo`, tipoInsumoRouter);
app.use(`/api/${config.API_VERSION}/tipoProducto`, tipoProductoRouter);
app.use(`/api/${config.API_VERSION}/ventaInsumo`, VentaInsumoRouter);
app.use(`/api/${config.API_VERSION}/ventaProducto`, VentaProductoRouter);
app.use(`/api/${config.API_VERSION}/login`, loginRouter);
app.use(`/api/${config.API_VERSION}/imagen`, imagenRouter);

//export

import routerEmpleado from './routes/empleado.routes.js'
app.use('/api/v1/empleado', routerEmpleado)
import routerCliente from './routes/cliente.routes.js'
app.use('/api/v1/cliente', routerCliente)
import routerInsumo from './routes/insumo.routes.js'
app.use('/api/v1/insumo', routerInsumo)
import routerProducto from './routes/producto.routes.js'
app.use('/api/v1/producto', routerProducto)
import routerTipoEmpleado from './routes/tipoEmpleado.routes.js'
app.use('/api/v1/tipoEmpleado', routerTipoEmpleado)
import routerTipoInsumo from './routes/tipoInsumo.routes.js'
app.use('/api/v1/tipoInsumo', routerTipoInsumo)
import routerTipoProducto from './routes/tipoProducto.routes.js'
app.use('/api/v1/tipoProducto', routerTipoProducto)
import routerVentaInsumo from './routes/ventaIns.routes.js'
app.use('/api/v1/ventaInsumo', routerVentaInsumo)
import routerVentaProducto from './routes/ventaPro.routes.js'
app.use('/api/v1/ventaProducto', routerVentaProducto)
import routerAuthLogin from './routes/login.routes.js'
app.use('/api/v1/login', routerAuthLogin)
import routerImagen from './routes/imagen.routes.js'
app.use('/api/v1/imagen', routerImagen)

// swagger
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Express ProstgreSQL",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:4000"
            }
        ]
    },
    apis: [`${path.join(__dirname, "/src/routes/*.js")}`]
}
//middleware
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

// swagger

export default app;