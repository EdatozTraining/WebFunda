let student = {
    id: 12,
    name: "Isaac",
    marks: 81
    setmarks: function(newMarks){
		if(isNaN(newMarks)){
			throw(`${newMarks} is not a number`)
		}
		marks = newMarks
	}
}
student.marks = "Eighty Five"
console.log(student)