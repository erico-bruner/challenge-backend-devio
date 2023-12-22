import app, { init } from './app';

const port = process.env.PORT || 4000;

init().then(() => {
  app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Server is running`);
    /* eslint-enable no-console */
  });
});
