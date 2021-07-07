const fs = require('fs');


const loadStudents = ()=>{
    try{
        const students = fs.readFileSync('students.json').toString();
        return(JSON.parse(students));
    } catch(e){
        return [];
    }
    
}


const saveStudents = (students) =>{
    fs.writeFileSync('students.json',JSON.stringify(students));
}

const addStudent = (id,name,total_mark,comment)=>{
    const students = loadStudents();
    const duplicate = students.filter((student) => {
        return id === student.id;
    })

    if(duplicate.length == 0){
        students.push({
            id,
            name,
            total_mark,
            comment
        })
        saveStudents(students);
        console.log('Saved student');
    } else {
        console.log('Student already exist');
    }
    
}

const getStudent = (id) =>{
    const students = loadStudents();
    const student = students.filter((student) => {return student.id === id});
    if(student.length == 0)
         console.log("student doesnt exist");
    else
        console.log(student);
}


const removeStudent = (id) =>{
    const students = loadStudents();
    const new_students = students.filter((student)=>{
        return student.id !== id;
    })
    saveStudents(new_students);
}

const getStudents = ()=>{
    const students = loadStudents();
    students.forEach(student => {
        console.log(student.name + " " + student.total_mark + "\n");
    });
}


module.exports = {
    addStudent,
    getStudent,
    removeStudent,
    getStudents
}