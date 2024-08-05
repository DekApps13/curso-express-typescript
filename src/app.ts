import express from 'express';
import diariesRouter from './routes/diaries';

const app = express();
app.use(express.json()); // Middleware que transforma la req.body a json

const PORT = 3000;

app.get('/', (_req, res) => {
  console.log('Home page');
  res.status(200).json({
    message: 'Hola Derek, Bienvenido al Landing Page'
  });
})

app.get('/ping', (_req, res) => {
  console.log('Someone pinged here!!!');
  res.status(200).send('pong');
})

app.use('/api/diaries', diariesRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
