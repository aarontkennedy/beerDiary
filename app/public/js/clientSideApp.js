
$(document).ready(function () {

    // Initialize ajax autocomplete:
    $('#beerAutocomplete').autocomplete({
        serviceUrl: '/autosuggest/beers/names',
        onSelect: function (suggestion) {
            console.log(suggestion);
            /*populateSelectedBurger(suggestion.data,
                suggestion.value,
                suggestion.description);*/
        }
    });

    const states = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
    $('#stateAutocomplete').autocomplete({
        lookup: states,
        onSelect: function (suggestion) {
            console.log(suggestion);
            /*populateSelectedBurger(suggestion.data,
                suggestion.value,
                suggestion.description);*/
        }
    });

    $('#styleAutocomplete').autocomplete({
        serviceUrl: '/autosuggest/beers/styles',
        onSelect: function (suggestion) {
            console.log(suggestion);
        }
    });

    $('#breweryAutocomplete').autocomplete({
        serviceUrl: '/autosuggest/beers/breweries',
        onSelect: function (suggestion) {
            console.log(suggestion);
            debugger
            $("#address").val(suggestion.data.address);
            $("#city").val(suggestion.data.city);
            $("#stateAutocomplete").val(suggestion.data.state);
            $("#country").val(suggestion.data.country);
            $("#zipCode").val(suggestion.data.zipCode);
            $("#phone").val(suggestion.data.phone);
            $("#website").val(suggestion.data.website);
        }
    });

    var countries = [
        "Andorra",
        "Andorra Test",
        "United Arab Emirates",
        "Afghanistan",
        "Antigua and Barbuda",
        "Anguilla",
        "Albania",
        "Armenia",
        "Netherlands Antilles",
        "Angola",
        "Antarctica",
        "Argentina",
        "American Samoa",
        "Austria",
        "Australia",
        "Aruba",
        "Azerbaijan",
        "Bosnia and Herzegovina",
        "Barbados",
        "Bangladesh",
        "Belgium",
        "Burkina Faso",
        "Bulgaria",
        "Bahrain",
        "Burundi",
        "Benin",
        "Saint Barth\u00e9lemy",
        "Bermuda",
        "Brunei",
        "Bolivia",
        "British Antarctic Territory",
        "Brazil",
        "Bahamas",
        "Bhutan",
        "Bouvet Island",
        "Botswana",
        "Belarus",
        "Belize",
        "Canada",
        "Cocos [Keeling] Islands",
        "Congo - Kinshasa",
        "Central African Republic",
        "Congo - Brazzaville",
        "Switzerland",
        "Cook Islands",
        "Chile",
        "Cameroon",
        "China",
        "Colombia",
        "Costa Rica",
        "Serbia and Montenegro",
        "Canton and Enderbury Islands",
        "Cuba",
        "Cape Verde",
        "Christmas Island",
        "Cyprus",
        "Czech Republic",
        "East Germany",
        "Germany",
        "Djibouti",
        "Denmark",
        "Dominica",
        "Dominican Republic",
        "Algeria",
        "Ecuador",
        "Estonia",
        "Egypt",
        "Western Sahara",
        "Eritrea",
        "Spain",
        "Ethiopia",
        "Finland",
        "Fiji",
        "Falkland Islands",
        "Micronesia",
        "Faroe Islands",
        "French Southern and Antarctic Territories",
        "France",
        "Metropolitan France",
        "Gabon",
        "United Kingdom",
        "Grenada",
        "Georgia",
        "French Guiana",
        "Guernsey",
        "Ghana",
        "Gibraltar",
        "Greenland",
        "Gambia",
        "Guinea",
        "Guadeloupe",
        "Equatorial Guinea",
        "Greece",
        "South Georgia and the South Sandwich Islands",
        "Guatemala",
        "Guam",
        "Guinea-Bissau",
        "Guyana",
        "Hong Kong SAR China",
        "Heard Island and McDonald Islands",
        "Honduras",
        "Croatia",
        "Haiti",
        "Hungary",
        "Indonesia",
        "Ireland",
        "Israel",
        "Isle of Man",
        "India",
        "British Indian Ocean Territory",
        "Iraq",
        "Iran",
        "Iceland",
        "Italy",
        "Jersey",
        "Jamaica",
        "Jordan",
        "Japan",
        "Johnston Island",
        "Kenya",
        "Kyrgyzstan",
        "Cambodia",
        "Kiribati",
        "Comoros",
        "Saint Kitts and Nevis",
        "North Korea",
        "South Korea",
        "Kuwait",
        "Cayman Islands",
        "Kazakhstan",
        "Laos",
        "Lebanon",
        "Saint Lucia",
        "Liechtenstein",
        "Sri Lanka",
        "Liberia",
        "Lesotho",
        "Lithuania",
        "Luxembourg",
        "Latvia",
        "Libya",
        "Morocco",
        "Monaco",
        "Moldova",
        "Montenegro",
        "Saint Martin",
        "Madagascar",
        "Marshall Islands",
        "Midway Islands",
        "Macedonia",
        "Mali",
        "Myanmar [Burma]",
        "Mongolia",
        "Macau SAR China",
        "Northern Mariana Islands",
        "Martinique",
        "Mauritania",
        "Montserrat",
        "Malta",
        "Mauritius",
        "Maldives",
        "Malawi",
        "Mexico",
        "Malaysia",
        "Mozambique",
        "Namibia",
        "New Caledonia",
        "Niger",
        "Norfolk Island",
        "Nigeria",
        "Nicaragua",
        "Netherlands",
        "Norway",
        "Nepal",
        "Dronning Maud Land",
        "Nauru",
        "Neutral Zone",
        "Niue",
        "New Zealand",
        "Oman",
        "Panama",
        "Pacific Islands Trust Territory",
        "Peru",
        "French Polynesia",
        "Papua New Guinea",
        "Philippines",
        "Pakistan",
        "Poland",
        "Saint Pierre and Miquelon",
        "Pitcairn Islands",
        "Puerto Rico",
        "Palestinian Territories",
        "Portugal",
        "U.S. Miscellaneous Pacific Islands",
        "Palau",
        "Paraguay",
        "Panama Canal Zone",
        "Qatar",
        "Romania",
        "Serbia",
        "Russia",
        "Rwanda",
        "Saudi Arabia",
        "Solomon Islands",
        "Seychelles",
        "Sudan",
        "Sweden",
        "Singapore",
        "Saint Helena",
        "Slovenia",
        "Svalbard and Jan Mayen",
        "Slovakia",
        "Sierra Leone",
        "San Marino",
        "Senegal",
        "Somalia",
        "Suriname",
        "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
        "Union of Soviet Socialist Republics",
        "El Salvador",
        "Syria",
        "Swaziland",
        "Turks and Caicos Islands",
        "Chad",
        "French Southern Territories",
        "Togo",
        "Thailand",
        "Tajikistan",
        "Tokelau",
        "Timor-Leste",
        "Turkmenistan",
        "Tunisia",
        "Tonga",
        "Turkey",
        "Trinidad and Tobago",
        "Tuvalu",
        "Taiwan",
        "Tanzania",
        "Ukraine",
        "Uganda",
        "U.S. Minor Outlying Islands",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Vatican City",
        "Saint Vincent and the Grenadines",
        "North Vietnam",
        "Venezuela",
        "British Virgin Islands",
        "U.S. Virgin Islands",
        "Vietnam",
        "Vanuatu",
        "Wallis and Futuna",
        "Wake Island",
        "Samoa",
        "People's Democratic Republic of Yemen",
        "Yemen",
        "Mayotte",
        "South Africa",
        "Zambia",
        "Zimbabwe"];
        $('#countryAutocomplete').autocomplete({
            lookup: countries,
            onSelect: function (suggestion) {
                console.log(suggestion);
                /*populateSelectedBurger(suggestion.data,
                    suggestion.value,
                    suggestion.description);*/
            }
        });

    $('#beerSubmit').on('click',function(e){
        e.preventDefault();
        console.log('hi');
        var beerName;
        var style;
        var abv;
        var ibu;
        var description;
        var breweryName;
        var address;
        var city;
        var state;
        var country;
        var zip;

        //check if beer name is filled to add beer
        if ($('#beerName').val()){
            beerName = $('#beerName').val();
            style = $('#styleAutocomplete').val();
            abv = $('#abv').val();
            ibu = $('#ibu').val();
            description = $('#description').val();
            breweryName = $('#breweryAutocomplete').val();
            address = $('#address').val();
            city = $('#city').val();
            state = $('#stateAutocomplete').val();
            country = $('#country').val();
            zip = $('#zipCode').val();
            phone = $('#phone').val();
            website = $('#website').val();

            newBeer = {
                name: beerName,
                style: style,
                abv: abv,
                ibu: ibu,
                description: description,
                brewery: breweryName,
                address: address,
                city: city,
                country: country,
                zip: zip,
                phone: phone,
                website: website
            }

            
            
            
            
            
            $.post("/api/beers", newBeer).then($("#beerField").html("Beer Name <font color='green'>Beer has been added to the database!</font>"));

        }
        else {
            $("#beerField").html("Beer Name <font color='red'>Beer name is required!</font>");

        }
    });        
/*
    // this toggles the display of the add burger form 
    // helps keep the display less cluttered
    toggleAddBurgerElem.click(function () {
        if (addBurgerElem.hasClass(diplayNoneClass)) {
            addBurgerElem.removeClass(diplayNoneClass);
        }
        else {
            addBurgerElem.addClass(diplayNoneClass);
        }
    });

    // handles the validation of the add burger form and
    // sends the post request to the server
    addBurgerElem.submit(function (event) {
        event.preventDefault();
        if (addBurgerElem[0].checkValidity() === false) {
            event.stopPropagation();
            addBurgerElem[0].classList.add('was-validated');
        }
        else {
            $.post("/api/burgers",
                {
                    name: $("input[name=burgerName]").val().trim(),
                    description: $("textarea[name=burgerDescription]").val().trim()
                })
                .done(function (data) {
                    populateSelectedBurger(data.id, data.name, data.description);
                });
        }
    });

    // when a user finds a burger or creates a new one, we
    // need to populate and display the selected burger pane
    // so a user can choose to rate it and indicate if they have eaten it
    function populateSelectedBurger(id, name, description) {
        burgerEatenForm.removeClass(diplayNoneClass);
        burgerHistory.hide();
        $("input[name=burgerID]").val(id);
        $("#burgerSelectionName").text(name);
        $("#burgerSelectionDescription").text(description);
        // clear the form of any inputs
        $("input[name=burgerName]").val("");
        $("textarea[name=burgerDescription]").val("");
        $("#burgerAutocomplete").val("");
    }

    // give them a way to get rid of the add burger eaten form 
    // and see the history
    $("#cancelAddBurgerEaten").click(function (e) {
        e.preventDefault();
        burgerEatenForm.addClass(diplayNoneClass);
        showBurgerHistory();
    });

    // give them a way to clear the add burger form
    $("#clearAddBurger").click(function (e) {
        e.preventDefault();
        $("input[name=burgerName]").val("");
        $("textarea[name=burgerDescription]").val("");
    });

    // this is the form that is submitted when a user has said
    // they have eaten a burger
    // we need to take that info and send it to the server
    burgerEatenForm.submit(function (event) {
        event.preventDefault();
        burgerEatenForm.addClass(diplayNoneClass);

        const bID = $("input[name=burgerID]").val().trim();
        const eID = $("input[name=eaterID]").val().trim();
        const rating = $("input[name=burgerRating]:checked").val().trim();

        $.post("/api/burgerseaten",
            {
                burger_id: bID,
                eater_id: eID,
                rating: rating
            })
            .done(function (data) {
                // success - show the burger history
                // the new burger eaten should be there
                showBurgerHistory();
            });
    });

    // grab an individual's burger eating history
    // i know I should cache the burger history, but
    // i am just going to clear and call for it again...
    function showBurgerHistory() {
        burgerEatenForm.addClass(diplayNoneClass);
        burgerHistory.show();

        if ($("input[name=eaterID]").val()) {
            $.get("/api/burgerseaten/" + $("input[name=eaterID]").val().trim())
                .done(function (data) {
                    //console.log(data);

                    // calculate from the history how many UNIQUE
                    // burgers were eaten
                    getNumDifferentBurgersEaten(data);

                    let burgerHistoryTable = $("#burgerHistoryTable");

                    // clear the history
                    burgerHistoryTable.children().remove();

                    // change the numerical burger rating to an icon
                    for (let i = 0; i < data.length; i++) {
                        let rating = null;
                        switch (data[i].burgerRating) {
                            case 0:
                                rating = `<i class="far fa-frown bad"></i>`;
                                break;
                            case 1:
                                rating = `<i class="far fa-meh okay"></i>`;
                                break;
                            case 2:
                                rating = `<i class="far fa-smile great"></i>`;
                                break;
                            default:
                                rating = `ERROR!`;
                                break;
                        }

                        let row = `<tr>
                        <td>${data[i].burgerDate}</td>
                        <td>${data[i].burgerName}</td>
                        <td>${rating}</td>
                        </tr>`;
                        burgerHistoryTable.append(row);
                    }

                    $("#numBurgersEaten").text(data.length);
                });
        }
    }
    showBurgerHistory();

    function getNumDifferentBurgersEaten(burgersEaten) {

        // this function here will take an array and using the classifier
        // in this case, i pass in the burger name, it makes a new object
        // with an entry with burgerName and how many times it occurs
        function count(array, classifier) {
            return array.reduce(function (counter, item) {
                var p = classifier(item); // get the burgerName
                // check if the burger name already exists
                // if it does, increment else create the entry and set = 1
                counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
                return counter;
            }, {})
        };

        countByName = count(burgersEaten, function (item) {
            return item.burgerName
        });

        // we need to find how many keys there are, that corresponds to the number
        // of different burgers consumed
        let numDifBurgers = 0;
        for (let key in countByName) {
            numDifBurgers++;
        }

        $("#numDifferentBurgers").text(numDifBurgers);
    }

    // get the total burger statistics for the front page
    function totalBurgerStatistics() {
        let statisticsElem = $("#totalBurgerStatistics");

        $.get("/api/count")
            .done(function (data) {
                if (data) {
                    statisticsElem.append(`<h3>
                <img src="burgerIconBullet.png"> ${data.burgers} Burgers Listed</h3>
                <h3><img src="burgerIconBullet.png"> ${data.burgersEaten} Burgers Eaten</h3>
                <h3><img src="burgerIconBullet.png"> ${data.eaters} Burger Trackers</h3>`);
                }
            });
    }
    totalBurgerStatistics();

*/

});