const Course = require("./Course");
const Professor = require("./Professor");
const Student = require("./Student");

// table pivote name: studentProfessor
Student.belongsToMany(Professor,{through: "studentProfessor"})
Professor.belongsToMany(Student,{through: "studentProfessor"})


// table pivote name: studentCourse
Student.belongsToMany(Course,{through: "studentCourse"})
Course.belongsToMany(Student,{through: "studentCourse"})