import config from "./utils/config";
import app from "./app2";

app.listen(config.ORDER_CONSUMER_PORT, () => {
  console.log(`Server running on port ${config.ORDER_CONSUMER_PORT}`);
});
