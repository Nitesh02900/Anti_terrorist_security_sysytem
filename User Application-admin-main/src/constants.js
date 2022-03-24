const isDev = process.env.NODE_ENV !== "production";
module.exports = {
  BACKEND_URL: isDev
    ? `http://localhost:8080/`
    : "https://Anti-terrorist.Security.com/",
};
