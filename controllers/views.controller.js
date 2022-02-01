exports.renderIndex = (req, res, next) => {
  res.status(200).render('welcome.pug')
}
