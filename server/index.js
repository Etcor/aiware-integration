require('dotenv/config');
const express = require('express');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');
const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);
app.use(express.json());

app.get('/api/auth', (req, res, next) => {
    res.status(200).json({
        id: "12345",
        name: "Ethan"
    })
  });

  app.use('/api', (req, res, next) => {
    next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
  });

  app.use((err, req, res, next) => {
    if (err instanceof ClientError) {
      res.status(err.status).json({ error: err.message });
    } else {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    }
  });

  app.listen(process.env.PORT || 8080, () => {
    // eslint-disable-next-line no-console
    console.log('Listening on port', process.env.PORT || 8080);
  });
