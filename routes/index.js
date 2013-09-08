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
  res.end('riddle3', { title: 'Riddle 3' });
};

exports.riddle4 = function(req, res){

  res.render('riddle4', { title: 'Riddle 4' , icon: 'icon-thumbs-up', status: 'Correct! Ok, now things get real.' });
};

exports.theanswer = function(req, res){
  // rickroll

  res.redirect('http://www.youtube.com/watch?v=dQw4w9WgXcQ');
};

exports.riddle5 = function(req, res){
  // spiderman charade

  if (req.method == 'POST') {
    var first = req.body.first.toLowerCase();
    var second = req.body.second.toLowerCase();

    if (first == 'spider' && second == 'man') {
      res.render('riddle6', { title: 'Riddle 6', icon: 'icon-thumbs-up', status: 'Success! Yeah yeah... I know it\'s actually hyphenated...' });
    } else {
      res.render('riddle5', { title: 'Riddle 5', icon: 'icon-thumbs-down', status: 'Incorrect!' });
    }
  } else {
    res.render('riddle5', { title: 'Riddle 5', icon: 'icon-thumbs-up', status: 'Correct! Hmm, you won\'t get much further...' });
  }

}

exports.riddle6 = function(req, res){
  // clicker

  res.render('riddle6', { title: 'Riddle 6', icon: 'icon-thumbs-up', status: 'Success! Yeah yeah... I know it\'s actually hyphenated...' });
}

exports.riddle7 = function(req, res){
  // 1984
  // Fav lecturer

  if(req.method == 'POST') {
    var fav = req.body.fav.toLowerCase();

    if (fav != 'darren') {
      res.render('riddle7', { title: 'Riddle 7', icon: 'icon-thumbs-down',  status: 'Think carefully...' });
    } else {
      // if correct! ;)
      res.render('riddle8', { title: 'Riddle 8', icon: 'icon-smile', status: 'Success! That\s really kind of you, how nice...' });
    };
  };

  res.render('riddle7', { title: 'Riddle 7', icon: 'icon-thumbs-up',  status: 'Correct! This should be an easy one?' });
}

exports.riddle8 = function(req, res){
  // eight
  // charade / big apple

  if (req.method == "POST") {

    var first = req.body.first.toLowerCase();
    var second = req.body.second.toLowerCase();

    if (first == 'big' && second == 'apple') {
      res.render('riddle9', { title: 'Riddle 9', icon: 'icon-thumbs-up', status: 'Correct! I suppose Big Mac would have worked too.' });
    } else {
      res.render('riddle8', { title: 'Riddle 8', icon: 'icon-thumbs-down', status: 'Incorrect! Please try harder...' });
    }
  };
  res.render('riddle8', { title: 'Riddle 8', icon: 'icon-smile', status: 'Success! That\s really kind of you, how nice...' });
}

exports.riddle9 = function(req, res){

  if (req.method == "POST") {
    var lat = req.body.lat;
    var lon = req.body.lon;

    if (lat == 'test' && lon == 'test') {
    // if (lat >= 10 || lat <= 10 && lon >= 15 || lon <= 15 ) {
      res.render('riddle10', { title: 'Riddle 10', icon: 'icon-thumbs-up', status: 'Correct! So... Close...' });
      // res.render('riddle9');
    } else {
      res.render('riddle9', { title: 'Riddle 9', icon: 'icon-thumbs-down', status: 'Incorrect! Maybe google it?' });
    }

  } else {
    res.render('riddle9', { title: 'Riddle 9', icon: 'icon-thumbs-up', status: 'Correct! I suppose Big Mac would have worked too.' });
  }
}

exports.riddle10 = function(req, res){
  // /l4s7

  if (req.method == "POST") {
    var username = req.body.username;
    var password = req.body.password.toLowerCase();

    if (password == 'security') {
      res.render('ultimate', { name: username, title: 'END', icon: 'icon-smile', status: 'Success! Good job!' });
    } else {
      res.render('riddle10', { title: 'Riddle 10', icon: 'icon-thumbs-down', status: 'Incorrect! So... Close...' });
    }
  } else {
    res.render('riddle10', { title: 'Riddle 10', icon: 'icon-thumbs-up', status: 'Almost there!' });
  };

}

exports.end = function(req, res){
  if (req.method == "POST") {
    res.render('riddle10', { title: 'Riddle 10', icon: 'icon-thumbs-down', status: 'Incorrect! Try again.' });
  } else {
    res.render('riddle10', { title: 'Riddle 10', icon: 'icon-thumbs-down', status: 'Incorrect! CHEAT... But nice try!' });
  }
}