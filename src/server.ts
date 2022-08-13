import app from "./app.js";

const port = +process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
