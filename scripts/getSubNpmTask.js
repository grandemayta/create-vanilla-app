module.exports = process => {
  if (process.env && process.env.npm_lifecycle_event) {
    const cmdLaunched = process.env.npm_lifecycle_event;
    if (cmdLaunched.split(':').length >= 1 && cmdLaunched.split(':')[1] === 'legacy') {
      return true;
    }
  }
  return false;
};
