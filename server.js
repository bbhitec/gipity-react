/**
 *
 * @author vnikolin
 *
 */

// define the server access port
const PORT = 8000

// include all needed packages
import express from 'express'
import cors from 'cors'

// initialize the express server
const app = express()

// imbue with functionality
app.use(express.json())
app.use(cors())






// define backend access point
app.post('/completions', async (req, res) => {

    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${OPENAI_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: req.body.message}],
            max_tokens: 27,
        })
    }

    try {
        const response = await fetch ('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})


// run the server
app.listen(PORT, () => console.log('Gipity server is running on port: ' + PORT))