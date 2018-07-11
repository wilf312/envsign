import * as express from 'express'
import * as path from 'path'
const app: express.Application = express()

app.all('*', (req: express.Request, res: express.Response) => {
  res
    .header('content-type', 'text/javascript; charset=UTF-8')
    .sendFile(path.resolve('app/response.ts'))
})

app.listen(process.env.PORT || 8000)
