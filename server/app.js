const express = require("express");
const cors = require("cors");
const router = require("./routes");
const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`app listen to port ${PORT}`);
});

// npx sequelize db:migrate, db:migrate:status, db:migrate:undo
