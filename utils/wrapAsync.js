// utils/wrapAsync.js
module.exports = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(err => {
      // ✅ CRITICAL FIX
      if (res.headersSent) return;
      next(err);
    });
  };
};