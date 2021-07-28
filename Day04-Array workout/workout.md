1. Filter the list of inventors for those who were born in the 1500's with Array.filter
   INPUT: [
   {
   "first": "Albert",
   "last": "Einstein",
   "year": 1879,
   "passed": 1955
   },
   {
   "first": "Isaac",
   "last": "Newton",
   "year": 1643,
   "passed": 1727
   },
   {
   "first": "Galileo",
   "last": "Galilei",
   "year": 1564,
   "passed": 1642
   },
   {
   "first": "Marie",
   "last": "Curie",
   "year": 1867,
   "passed": 1934
   },
   {
   "first": "Johannes",
   "last": "Kepler",
   "year": 1571,
   "passed": 1630
   },
   {
   "first": "Nicolaus",
   "last": "Copernicus",
   "year": 1473,
   "passed": 1543
   },
   {
   "first": "Max",
   "last": "Planck",
   "year": 1858,
   "passed": 1947
   },
   {
   "first": "Katherine",
   "last": "Blodgett",
   "year": 1898,
   "passed": 1979
   },
   {
   "first": "Ada",
   "last": "Lovelace",
   "year": 1815,
   "passed": 1852
   },
   {
   "first": "Sarah E.",
   "last": "Goode",
   "year": 1855,
   "passed": 1905
   },
   {
   "first": "Lise",
   "last": "Meitner",
   "year": 1878,
   "passed": 1968
   },
   {
   "first": "Hanna",
   "last": "Hammarström",
   "year": 1829,
   "passed": 1909
   }
   ]
   OUTPUT: [
   {
   "first": "Galileo",
   "last": "Galilei",
   "year": 1564,
   "passed": 1642
   },
   {
   "first": "Johannes",
   "last": "Kepler",
   "year": 1571,
   "passed": 1630
   }
   ]
2. Give us an array of the inventors' first and last names using Array.prototype.map
   INPUT: "the same as above"
   OUTPUT: [
   "Albert Einstein",
   "Isaac Newton",
   "Galileo Galilei",
   "Marie Curie",
   "Johannes Kepler",
   "Nicolaus Copernicus",
   "Max Planck",
   "Katherine Blodgett",
   "Ada Lovelace",
   "Sarah E. Goode",
   "Lise Meitner",
   "Hanna Hammarström"
   ]
3. Sort the inventors by birthdate, oldest to youngest using Array.prototype.sort
   INPUT: "the same as above"
   OUTPUT: [
   "1473, Nicolaus Copernicus",
   "1564, Galileo Galilei",
   "1571, Johannes Kepler",
   "1643, Isaac Newton",
   "1815, Ada Lovelace",
   "1829, Hanna Hammarström",
   "1855, Sarah E. Goode",
   "1858, Max Planck",
   "1867, Marie Curie",
   "1878, Lise Meitner",
   "1879, Albert Einstein",
   "1898, Katherine Blodgett"
   ]
4. How many years did all the inventors live using Array.prototype.reduce
   INPUT: "the same as above"
   OUTPUT: 861
5. Sort the inventors by years lived
   INPUT: "the same as above"
   OUTPUT: [
   {
   "lifespan": 37,
   "fullName": "Ada Lovelace"
   },
   {
   "lifespan": 50,
   "fullName": "Sarah E. Goode"
   },
   {
   "lifespan": 59,
   "fullName": "Johannes Kepler"
   },
   {
   "lifespan": 67,
   "fullName": "Marie Curie"
   },
   {
   "lifespan": 70,
   "fullName": "Nicolaus Copernicus"
   },
   {
   "lifespan": 76,
   "fullName": "Albert Einstein"
   },
   {
   "lifespan": 78,
   "fullName": "Galileo Galilei"
   },
   {
   "lifespan": 80,
   "fullName": "Hanna Hammarström"
   },
   {
   "lifespan": 81,
   "fullName": "Katherine Blodgett"
   },
   {
   "lifespan": 84,
   "fullName": "Isaac Newton"
   },
   {
   "lifespan": 89,
   "fullName": "Max Planck"
   },
   {
   "lifespan": 90,
   "fullName": "Lise Meitner"
   }
   ]
6. Create a list of Boulevards in Paris from wikipedia that contain 'de' anywhere in the name
   INPUT: "Can't get page content using JS - it's forbidden by Wiki policy."
   OUTPUT: "Put some code in the source"
7. Sort the people alphabetically by last name
   INPUT: [
   "Beck, Glenn",
   "Becker, Carl",
   "Beckett, Samuel",
   "Beddoes, Mick",
   "Beecher, Henry",
   "Beethoven, Ludwig",
   "Begin, Menachem",
   "Belloc, Hilaire",
   "Bellow, Saul",
   "Benchley, Robert",
   "Benenson, Peter",
   "Ben-Gurion, David",
   "Benjamin, Walter",
   "Benn, Tony",
   "Bennington, Chester",
   "Benson, Leana",
   "Bent, Silas",
   "Bentsen, Lloyd",
   "Berger, Ric",
   "Bergman, Ingmar",
   "Berio, Luciano",
   "Berle, Milton",
   "Berlin, Irving",
   "Berne, Eric",
   "Bernhard, Sandra",
   "Berra, Yogi",
   "Berry, Halle",
   "Berry, Wendell",
   "Bethea, Erin",
   "Bevan, Aneurin",
   "Bevel, Ken",
   "Biden, Joseph",
   "Bierce, Ambrose",
   "Biko, Steve",
   "Billings, Josh",
   "Biondo, Frank",
   "Birrell, Augustine",
   "Black, Elk",
   "Blair, Robert",
   "Blair, Tony",
   "Blake, William"
   ]
   OUTPUT: [
   "Beck, Glenn",
   "Becker, Carl",
   "Beckett, Samuel",
   "Beddoes, Mick",
   "Beecher, Henry",
   "Beethoven, Ludwig",
   "Begin, Menachem",
   "Belloc, Hilaire",
   "Bellow, Saul",
   "Ben-Gurion, David",
   "Benchley, Robert",
   "Benenson, Peter",
   "Benjamin, Walter",
   "Benn, Tony",
   "Bennington, Chester",
   "Benson, Leana",
   "Bent, Silas",
   "Bentsen, Lloyd",
   "Berger, Ric",
   "Bergman, Ingmar",
   "Berio, Luciano",
   "Berle, Milton",
   "Berlin, Irving",
   "Berne, Eric",
   "Bernhard, Sandra",
   "Berra, Yogi",
   "Berry, Halle",
   "Berry, Wendell",
   "Bethea, Erin",
   "Bevan, Aneurin",
   "Bevel, Ken",
   "Biden, Joseph",
   "Bierce, Ambrose",
   "Biko, Steve",
   "Billings, Josh",
   "Biondo, Frank",
   "Birrell, Augustine",
   "Black, Elk",
   "Blair, Robert",
   "Blair, Tony",
   "Blake, William"
   ]
8. Reduce Exercise
   INPUT: [
   "car",
   "car",
   "truck",
   "truck",
   "bike",
   "walk",
   "car",
   "van",
   "bike",
   "walk",
   "car",
   "van",
   "car",
   "truck"
   ]
   OUTPUT: {
   "car": 5,
   "truck": 3,
   "bike": 2,
   "walk": 2,
   "van": 2
   }
