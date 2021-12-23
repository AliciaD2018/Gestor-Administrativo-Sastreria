import express from 'express';

const PORT = 5000;
const app = express();

app.listen(PORT,()=>{
    console.log('Backend started up on port ', PORT);
});