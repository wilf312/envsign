import * as express from 'express'
import * as path from 'path'

const app: express.Application = express()

app.set('view engine', 'ejs')

app.all('*', (req: express.Request, res: express.Response) => {
  const {
    text = 'aaa',
    color = 'yellow'
  } = req.query
  res
    .header('content-type', 'text/javascript; charset=UTF-8')
    .render(path.resolve('app/response.ejs'), {
      text,
      color
  })
})

app.listen(process.env.PORT || 8000)
