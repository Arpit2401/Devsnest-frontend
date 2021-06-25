var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

// Solution 1
for (let key in student){
    console.log(key);
}

// Solution2
console.log("Befor deletion: ", student);
delete student.rollno;
console.log("After deletion: ", student);

// Solution3
var count=0;
for(var key in student){
    count++;
}
console.log("Length of Object: ", count);

// Solution4
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
   		   { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
   		   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

for(const key in library){
    console.log("Book Name:", library[key].title, "Author:", library[key].author, "Status:", library[key].readingStatus);
}

// Solution5
var Cylinder = {
    radius: "r",
    height: "h",

    volume:  function () {

        return 3.14*r*r*this.height;
    }
}

console.log(Cylinder.volume);

// Solution6
var library = [ 
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
   	{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
   	{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }
];

library.sort((a,b)=>{
    return      b.libraryID - a.libraryID;
});

library.forEach((i)=>{
    console.log(`${i.title} ${i.libraryID} ${i.author}`);
});
