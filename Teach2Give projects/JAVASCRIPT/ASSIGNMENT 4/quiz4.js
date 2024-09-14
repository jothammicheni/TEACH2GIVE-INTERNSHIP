var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
];
function displayReadingStatus(library) {
    library.forEach(function(book) {
        console.log(`Title: "${book.title}", Author: ${book.author}, Reading Status: ${book.readingStatus ? 'Read' : 'Not Read'}`);
    });
}
displayReadingStatus(library);
