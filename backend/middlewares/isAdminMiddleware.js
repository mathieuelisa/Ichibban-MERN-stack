const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json("Sorry you'are not admin, not authorized");
  }
};

export { isAdmin };
