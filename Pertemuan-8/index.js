//Javascript loop
//1.for-loop

//Array object
let students = [
            {
                        id:1,
                        firstName :"john"
                        grade : 80,
            },
            {
                        id :2,
                        firstName:"jane"
                        grade : 80,
            },
            {
                        id:3,
                        firstName:"jona"
                        grade :90,
            }
]

console.log(students);
for (let i = 0; i< students,length;i++){
            console.log(students[i]);
}


//Loop - while

let i=0;
while(i<students.length);{
            console.log(students[i]);
            i++;
}

//3.do - while
let i=0
do{
            console.log(students[i]);
            i++;
            
} while (i<students.length);

//Array built-in method
//1.forEach()

students.forEach(function(item,index){
            console.log(index);
            console.log(item);
});

//2.map()
let output = students.map(function(item){
            return item;
});

//3.filter
students.filter(function(item){
            return item.grade >=90;
});
console.log(output);

//4.find
let OutputFind = 

//5.find index
let index = students.findIndex(function(index){
            return item.firstName ==="jane"
});
console.log(index);

