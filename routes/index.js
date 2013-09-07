exports.index = function(req, res){
  res.render('index', { title: 'PiHack' });
};


exports.riddle1 = function(req, res){
  if (req.method == "POST") {
    var username = req.body.username;
    var password = req.body.password;

    if (username == "admin" && password == "9876") {
      // add banner
      res.render('riddle2', { title: 'Riddle 2', icon: "icon-thumbs-up", status: 'Correct! That was easy enough...' });
    } else {
      // add banner
      res.render('riddle1', { title: 'Riddle 1', icon: 'icon-thumbs-down', status: 'Incorrect!' });
    };
  };

  res.render('riddle1', { title: 'Riddle 1', icon: 'icon-bullhorn', status: 'Welcome!' });
};

exports.riddle2 = function(req, res){
  if (req.method == "POST") {
    var username = req.body.username;
    var password = req.body.password;

    if (username == "admin" && password == "9876") {
      // add banner
      res.render('riddle3', { title: 'Riddle 3', icon: 'icon-thumbs-up', status: 'Correct! Again... Your luck wont continue.' });
    } else {
      // add banner
      res.render('riddle2', { title: 'Riddle 2', icon: 'icon-thumbs-down', status: 'Incorrect!' });
    };
  };
  // var status = 'Correct!';

  res.render('riddle2', { title: 'Riddle 2', icon: "icon-thumbs-up", status: 'Correct! That was easy enough...' });
};

exports.riddle3 = function(req, res){
  res.end('riddle3');
};

exports.riddle4 = function(req, res){

  res.render('riddle4', { title: 'Riddle 4' });
};

exports.theanswer = function(req, res){
  res.redirect('http://www.youtube.com/watch?v=dQw4w9WgXcQ');
  // rickroll
};

exports.hid = function(req, res){
  res.render('riddle5', { title: 'Riddle 5' });
}

exports.riddle6 = function(req, res){

  if (req.method == 'POST') {
    var first = req.body.first;
    var second = req.body.second;

    if (first == 'spider' || first == 'Spider' && second == 'man' || second == 'Man') {
      res.render('riddle6'), { title: 'Riddle 6', first: 'Spider', second: 'Man', icon: 'icon-thumbs-up', status: 'Success! Yeah yeah... I know it\'s actually one word...' };
    } else {
      res.render('riddle5', { title: 'Riddle 5', icon: 'icon-thumbs-down', status: 'Incorrect!' });
    }
  } else {
    res.render('riddle6'), { title: 'Riddle 6', first: 'Spider', second: 'Man', icon: 'icon-thumbs-up', status: 'Success! Yeah yeah... I know it\'s actually one word...' };
    // res.render('riddle5', { title: 'Riddle 5', icon: 'icon-thumbs-down', status: 'Incorrect!' });
  }
}

exports.riddle7 = function(req, res){
  res.render('riddle7', { title: 'Riddle 7' });
}

exports.riddle8 = function(req, res){
  res.render('riddle8', { title: 'Riddle 8', icon: 'icon-smile', status: 'Success! That\s really kind of you, how nice...' })
}

exports.riddle9 = function(req, res){
  res.render('riddle9');
}

exports.riddle10 = function(req, res){


  res.render('riddle10');
}

exports.end = function(req, res){
  if (req.method == "POST") {
    var username = req.body.username;
    var password = req.body.password;


    if (password == 'security') {
      res.render('ultimate', { name: username, title: 'END', icon: 'icon-smile', status: 'Success! Good job!' });
    };

  };
  res.render('riddle10', { title: 'Riddle 10', icon: 'icon-thumbs-down', status: 'Incorrect! Try again.' });
}