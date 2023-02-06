const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === 'filippo') {
    req.user = {
      name: 'filippo',
    };
    next();
  } else {
    console.log(user);
    res.status(401).send(`incorrect username, user ${user} does not exist`);
  }
};

module.exports = authorize;
