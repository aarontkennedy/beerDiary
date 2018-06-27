module.exports = function (app) {

    // store the google information/user info here
    const db = require("../../../models/index.js");
    const autosuggestMaxReturn = 5;

    app.get("/autosuggest/beers", function (req, res) {

        db.Beers.findall({
            attributes: ['name'],
            where: {
                name: {
                    [Op.like]: "%" + req.query.query + "%"
                }
            },
            limit: autosuggestMaxReturn
        }).success(function (beers) {
            return res.json({ suggestions: beers });
        });
    });