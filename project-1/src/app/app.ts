import  express, { NextFunction, Request, Response }  from 'express';
const app = express()

//parsers
app.use(express.json())
app.use(express.text())

//Middleware
const logger = (req : Request , res : Response , next : NextFunction) => {
    console.log(req.url , req.method , req.cookies , req.body , req.hostname)
    next();
}

app.get('/' , logger, (req : Request, res : Response) => {
    // console.log(req.params.userId);
    // console.log(req.params.subId);
    console.log(req.query.email)
    console.log(req.query.name)
    res.send('Hello World Bros!')
})

app.post("/" ,logger, (req: Request , res : Response) => {
    console.log(req.body);
    res.json({message : "Successfully received data."})
})

export default app;