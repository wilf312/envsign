import * as express from 'express'
import * as path from 'path'

const app: express.Application = express()

app.set('view engine', 'ejs')

app.all('*', (req: express.Request, res: express.Response) => {
  res
    .header('content-type', 'text/javascript; charset=UTF-8')
    .render(path.resolve('app/response.ejs'), {
      text: 'aaaa',
      color: '#00d'
  })
})

app.listen(process.env.PORT || 8000)
