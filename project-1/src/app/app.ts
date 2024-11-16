import  express, { NextFunction, Request, Response }  from 'express';
const app = express()

//parsers
app.use(express.json())
app.use(express.text())

//Routers 
const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users" , userRouter)
app.use("/api/v1/course" , courseRouter)

userRouter.post("/create-user" , (req : Request , res : Response) => {
    const user = req.body;
    console.log(user);
    res.json({
        success : true,
        message : "User created successfully",
        data : user,
    })
})


courseRouter.post("/create-course" , (req : Request , res : Response)=> {
    const courseData = req.body;
    console.log(courseData)
    res.json({
        success : true,
        message : "User created successfully",
        data : courseData,
    })
})

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