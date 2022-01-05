const notes = [
    {
        course = "Fisica",
        note = 10,
        credit = 3,
    },
    {
        course = "Ciencias naturales",
        note = 8,
        credit = 2,
    },
    {
        course = "Quimica",
        note = 6,
        credit = 1,
    },
];

const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit
});

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const credits = notes.map(function (noteObject) {
        return noteObject.credit;
    }
);

const sumOfCredits = credits.reduce(
    function(sum = 0, newVal) {
        return sum + newVal;
    }
);

const ponderadoNotasConCredito = sumOfNotesWithCredit / sumOfCredits;