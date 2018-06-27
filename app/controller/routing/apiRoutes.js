module.exports = function (app) {

    // store the google information/user info here
    const db = require("../../../models/index.js");

    app.post("/api/burgers", function (req, res) {
        //console.log(req);
        if (!req.body.name || !req.body.description) {
            return res.sendStatus(400);
        }
        orm.addBurger(req.body.name,
            req.body.description,
            function (error, result) {
                if (error) {
                    console.log(error);
                    return res.sendStatus(500);
                }
                //console.log(result);
                return res.json({
                    id: result.insertId,
                    name: req.body.name,
                    description: req.body.description
                });
            });
    });

    app.get("/api/count", function (req, res) {
        //console.log(req);

        orm.getRowCountAllTables(function (error, result) {
            if (error) {
                console.log(error);
                return res.sendStatus(500);
            }
            //console.log(result);
            /** 
             *   results come back like this - not helpful
             *  [ RowDataPacket { TABLE_NAME: 'burgers', TABLE_ROWS: 4 },
             *    RowDataPacket { TABLE_NAME: 'burgersEaten', TABLE_ROWS: 6 },
             *    RowDataPacket { TABLE_NAME: 'eaters', TABLE_ROWS: 1 } ]
             * 
             *      I change the array to an object like this:
             *    {burgers: 4,
             *     burgersEaten: 6,
             *     eater: 1
             *    }
             */
            function mapDataObject(arr) {
                let rv = {};
                for (let i = 0; i < arr.length; ++i)
                    // go through each element of the array and 
                    // give the object a key with table_name and its value
                    // table_rows.
                    rv[arr[i].TABLE_NAME] = arr[i].TABLE_ROWS;
                return rv;
            }
            // pretty flukey case - when the app is run for the first time with
            // no data - I return null...  It is checked for on the client side.
            let prettierMappedData = (result.length ? mapDataObject(result) : null);
            return res.json(prettierMappedData);
        });
    });

    // creates a record of a particular burger eaten by a particular person
    app.post("/api/burgerseaten", function (req, res) {
        //console.log(req.body);
        if (!req.body.burger_id || !req.body.eater_id) {
            return res.sendStatus(400);
        }

        orm.addBurgerEaten(req.body.eater_id,
            req.body.burger_id,
            req.body.rating,
            function (error, result) {
                if (error) {
                    //console.log(error);
                    return res.sendStatus(500);
                }
                //console.log(result);
                return res.json({
                    id: result.insertID,
                    eater_id: req.body.eater_id,
                    burger_id: req.body.burger_id,
                    rating: req.body.rating
                });
            });
    });

    app.get("/api/burgerseaten/:eater_id", function (req, res) {
        if (!req.params.eater_id) {
            return res.sendStatus(400);
        }

        orm.getBurgersEaten(req.params.eater_id,
            function (error, result) {
                if (error) {
                    console.log(error);
                    return res.sendStatus(500);
                }
                //console.log(result);
                return res.json(result);
            });
    });

};