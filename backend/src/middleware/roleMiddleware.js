module.exports = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Not authenticated' });
    }
    const { userType } = req.user;
    if (allowedRoles.includes(userType) || userType === 'admin') {
      return next();
    }
    return res.status(403).json({ message: 'Forbidden: insufficient permissions' });
  };
}; 