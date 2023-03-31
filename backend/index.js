const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        'https://api.chatengine.io/users/',
    {username: username, secret: username, first_name: username},
    {headers: {"private-key": 
   "a8ffcbca-68dc-47b1-9271-f34e4f6b8f6b"}}
    
        )
        return res.status (r.status).json(r.data)
  } catch (e)  {
    return res.status(e.response.status).json(e.r.data)
  }
  

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);