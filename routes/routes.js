
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.other = function(req, res){
    res.render(req.params.x);
};

exports.project = function(req, res) {
    res.render('projects/'+req.params.name);
};
