
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.other = function(req, res){
    res.render(req.params.x);
};

exports.demos = function(req, res) {
    res.render('demos/'+req.params.name);
};
