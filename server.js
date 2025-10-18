const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Header Parser Microservice');
});

app.get('/api/whoami', (req, res)=>{
    const ipaddress = req.ip
    const language = req.headers['accept-language']
    const software = req.headers['user-agent']

    console.log(req.headers);
    
    res.json({
        ipaddress,
        language,
        software
    })
})

app.get('/api/headers', (req, res) => {
  res.json(req.headers);
});


const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
