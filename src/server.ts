import app from './app';

const port = process.env.PORT || 4000;

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server is running`);
  /* eslint-enable no-console */
});
