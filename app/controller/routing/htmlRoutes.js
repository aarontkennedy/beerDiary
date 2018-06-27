module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("index");
    });

    app.get("/diary/:user", function (req, res) {
        res.render("app");
    });
};
