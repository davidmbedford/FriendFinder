let friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    let bestMatch = {
      name: "",
      picture: "",
      friendDif: Infinity
    };

    let userInfo = req.body;
    let userScores = userInfo.scores;
    console.log(userInfo);
    console.log(userScores);

    let totalDif;

    for (let i = 0; i < friends.length; i++) {
      let currentFriend = friends[i];
      console.log(currentFriend);
      console.log(currentFriend.firstName + " " + currentFriend.lastName);
      totalDif = 0;

      let cFScores = currentFriend.scores;
      console.log(cFScores);

      for (let a = 0; a < cFScores.length; a++) {
        let currentFriendScores = cFScores[a];
        let currentUserScores = userScores[a];

        totalDif += Math.abs(parseInt(currentUserScores) - parseInt(currentFriendScores));
      }

      if (totalDif <= bestMatch.friendDif) {
        bestMatch.name = currentFriend.name;
        bestMatch.picture = currentFriend.picture;
        bestMatch.friendDif = totalDif;
      }
    }

    friends.push(userInfo);

    res.json(bestMatch);

  });

  app.post("/api/clear", function(req, res) {
    friends.length = 0;
    res.json({ ok: true });
  });
};
