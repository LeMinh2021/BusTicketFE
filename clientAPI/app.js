const express = require("express")
const app = express()

const port = process.env.PORT || 3001

app.use('/', (req,res,) => {res.json({message: "  anh em toi "}); });

app.listen(port, () => {
    console.log(`API is ready on http://localhost:${port}`)
})