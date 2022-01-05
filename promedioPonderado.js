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

const notesWithcredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit
});