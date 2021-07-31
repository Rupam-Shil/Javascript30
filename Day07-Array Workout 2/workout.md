Some and Every Checks on arrays - is at least one person 19 or older?
INPUT: [
    {
        "name": "Wes",
        "year": 1988
    },
    {
        "name": "Kait",
        "year": 1986
    },
    {
        "name": "Irv",
        "year": 1970
    },
    {
        "name": "Lux",
        "year": 2015
    }
]
OUTPUT: true
Add age to person's records
INPUT: "the same as before"
OUTPUT: [
    {
        "name": "Wes",
        "year": 1988,
        "age": 33
    },
    {
        "name": "Kait",
        "year": 1986,
        "age": 35
    },
    {
        "name": "Irv",
        "year": 1970,
        "age": 51
    },
    {
        "name": "Lux",
        "year": 2015,
        "age": 6
    }
]
Is everyone 19 or older?
INPUT: "the same as before"
OUTPUT: false
Find the comment with the ID of 823423
INPUT: [
    {
        "text": "Love this!",
        "id": 523423
    },
    {
        "text": "Super good",
        "id": 823423
    },
    {
        "text": "You are the best",
        "id": 2039842
    },
    {
        "text": "Ramen is my fav food ever",
        "id": 123523
    },
    {
        "text": "Nice Nice Nice!",
        "id": 542328
    }
]
OUTPUT: {
    "text": "Super good",
    "id": 823423
}
Find the comment with the ID of 823423
INPUT: "the same as before"
OUTPUT: {
    "0": {
        "text": "Love this!",
        "id": 523423
    },
    "2": {
        "text": "You are the best",
        "id": 2039842
    },
    "3": {
        "text": "Ramen is my fav food ever",
        "id": 123523
    },
    "4": {
        "text": "Nice Nice Nice!",
        "id": 542328
    }
}