const axios = require("axios");

(async () => {
  try {
    const response = await axios.get("http://localhost:3000/health");
    if (response.status === 200) {
      console.log("Integration test passed");
    } else {
      console.error("Integration test failed");
      process.exit(1);
    }
  } catch (error) {
    console.error("Integration test error:", error.message);
    process.exit(1);
  }
})();
