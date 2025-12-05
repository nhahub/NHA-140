const app = require("./app");
require("dotenv").config();
const dbConnection = require("./utils/db");

const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
  console.log(`Server running on ${process.env.FRONTEND_HOST}:${PORT}`);
  dbConnection(); 
});