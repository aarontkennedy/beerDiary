
$(document).ready(function () {

    function initializeDate() {
        var ageDateElement = $("#ageDate");

        if (ageDateElement) {
            var d = new Date();
            var date = d.getDate();
            var legalAge = d.getFullYear() - 21;
            var monthArr = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];
            var currentMonth = monthArr[d.getMonth()];
            console.log(currentMonth);

            ageDateElement.prepend(currentMonth + "  " + date + ",  " + legalAge);
        }
    }
    initializeDate();

    $("#beerSearchToggle").click(function () {
        $("#beerSearch").show();
        $("#newBeerForm").hide();
        $("#addBeerToggle").show();
    });
    // hide this one right away - default showing should be search
    $("#newBeerForm").hide();

    $("#addBeerToggle").click(function () {
        $("#beerSearch").hide();
        $("#newBeerForm").show();
        $("#addBeerToggle").hide();
        setBeerFormSubmitText(false);
    });

    $("#beerClear").click(function () {
        $("#beerSearch").show();
        $("#newBeerForm").hide();
        $("#addBeerToggle").show();
        putBeerInUpdateForm({
            id: null,
            name: null,
            style: null,
            abv: null,
            ibu: null,
            description: null,
            brewery: null,
            address: null,
            city: null,
            state: null,
            country: null,
            zipCode: null,
            phone: null,
            website: null
        });
    });


    // Initialize ajax autocomplete:
    $('#beerAutocomplete').autocomplete({
        serviceUrl: '/autosuggest/beers/names',
        onSelect: function (suggestion) {
            //console.log(suggestion);
            setBeerFormSubmitText(true);
            putBeerInUpdateForm(suggestion.data);
            $("#beerSearch").hide();
            $("#newBeerForm").show();
            $("#addBeerToggle").hide();
        }
    });

    let beerSubmitElement = $("#beerSubmit");
    function setBeerFormSubmitText(update = true) {
        if (update) {
            beerSubmitElement.text("Update");
        }
        else {
            beerSubmitElement.text("Add");
        }
    }
    function putBeerInUpdateForm(beer) {
        if (!beer) { throw new Error("beer input must not be null!") }
        $("#beerID").val(beer.id);
        $('#beerName').val(beer.name);
        $('#styleAutocomplete').val(beer.style);
        $('#abv').val(beer.abv);
        $('#ibu').val(beer.ibu);
        $('#description').val(beer.description);
        $('#breweryAutocomplete').val(beer.brewery);
        $('#address').val(beer.address);
        $('#city').val(beer.city);
        $('#stateAutocomplete').val(beer.state);
        $('#country').val(beer.country);
        $('#zipCode').val(beer.zipCode);
        $('#phone').val(beer.phone);
        $('#website').val(beer.website);
    }

    const states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];
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

    $('#beerSubmit').on('click', function (e) {
        e.preventDefault();
        console.log('hi');
        var beerName = '';
        var style = '';
        var abv = '';
        var ibu = '';
        var description = '';
        var breweryName = '';
        var address = '';
        var city = '';
        var state = '';
        var country = '';
        var zip = '';
        var phone = '';
        var website = '';

        //check if beer name is filled to add beer
        if ($('#beerName').val()) {
            beerName = $('#beerName').val();
            style = $('#styleAutocomplete').val();
            abv = parseFloat($('#abv').val());
            ibu = parseFloat($('#ibu').val())
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
    
    

});