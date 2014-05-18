/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};


/**
 * GET /profile
 * Profile.
 */

exports.profile = function(req, res) {
  res.render('profile', {
    title: 'Profile'
  });
};
