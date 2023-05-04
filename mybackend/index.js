const express = require('express');
const routes = require('./routes/candidate.js');
const app = express();
const PORT = 3001;
app.use(express.json());
app.use("/candidate", routes);
app.listen(PORT,()=>console.log("Server is running at port "+PORT));
