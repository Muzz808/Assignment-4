// // Q1:
// var studentName = [""];
// document.write(studentName)

// // Q2:
// studentName=["Muzammil ali khan"]
// document.write(`Student Name ${studentName}`)

// // Q3
// var studentNames = ["Muzammil", "Ali", "Zain"]
// document.write(`Student Name ${studentNames}`)


// // Q4:
// var num = [4,5,10]
// document.write(`Numbers ${num}`)


// // Q5:
// var boln = [true]
// document.write(`Boolean ${boln}`)


// // Q6:
// var arr = ["Muzammil", 26 , true]
// document.write(`Student Name ${arr}`)


// // Q7:
// var subject = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
//     document.write(
//     `<h1> Qualification </h1> </br></br>
//     1) ${subject[0]} </br>
//     2) ${subject[1]} </br>
//     3) ${subject[2]} </br>
//     4) ${subject[3]} </br>
//     5) ${subject[4]} </br>
//     6) ${subject[5]} </br>
//     7) ${subject[6]} </br>
//     8) ${subject[7]} </br>`
//     )


// // Q8:
// var studentNames = ["Muzammil", "Arsalan", "Farhan"]
// var score = [320, 230, 480]
// document.write(
//     `${`Score of ${studentNames[0]} is ${score[0]}. Percentage: ` + score[0] / 500 * 100}%</br>Score of ${studentNames[1]} is ${score[1]}. Percentage: ${score[1] / 500 * 100}%</br>Score of ${studentNames[2]} is ${score[2]}. Percentage: ${score[2] / 500 * 100}%`
// )


// // Q9:
// var color1 = prompt("Please enter your 1st favorite color")
// var color2 = prompt("Please enter your 2nd favorite color")
// var color3 = prompt("Please enter your 3rd favorite color")
// var color4 = prompt("Please enter your 4th favorite color")
// var colors = [color1,color2, color3, color4]
// document.write("Your Favourite Colors is "+colors)
// Q9 (b):
// var addColorEnd = prompt("Which color you want to add")
// colors.push(addColorEnd)
// document.write("Your Favourite Colors is "+ colors +"</br>"+"You add "+"<b>"+addColorEnd +"</b>"+" color in array")
// // Q9 (c)
// var addColorStart1 = prompt("add tow more colors in start")
// var addColorStart2 = prompt("add 2nd color in start")
// var addColorStart = (addColorStart1+","+addColorStart2)
// colors.unshift(addColorStart)
// document.write("Your Favourite Colors is "+ colors +"</br>"+"You add "+"<b>"+addColorStart +"</b>"+" this colors in start of array")
// Q9 (d)
// colors.pop(0)
// document.write("Your Favourite Colors is "+ colors)
// Q9 (f)
// var inputColor = prompt("Add your favorite color in any index")
// var inputPosition = +prompt("add the color to desired position/index.")
// colors.splice(inputPosition,0,inputColor)
// document.write(`Your Favourite Colors is ${colors}  </br> You add <b> ${inputColor} </b> colors in index num ${inputPosition}`)
// Q9 (g)
// var inputDlt = +prompt("which index you wants to delete colors")
// var inputDltRang = +prompt("How many colors you wants to delete.")
// colors.splice(inputDlt,inputDltRang)
// document.write(`Your Favourite Colors is ${colors}  </br> You Remove ${inputDltRang} colors in index`)


// // Q10
// var scoreStudent = [320,230,480,120]
// document.write(`Score of Student : ${scoreStudent} </br>
//             Order Scores of Students : ${scoreStudent.sort()}`)


// // Q11
// var cities = ["Karachi","Lahore","Islamabad","Queeta","Peshawar"]
// document.write(`<u><b>Selected Cities List:</b></u> </br> ${cities} </br>${cities.slice(2,4)}`)


// // Q12
// var arr = ["This", "is","my", "cat"]
// document.write(`Array: </br> ${arr} </br> </br> String: </br> ${arr.join(" ")}`)


// // Q13
// var arr = ["keybord","mouse", "Printer","monitor"]
// document.write(`Devices: </br> ${arr} </br> </br> ${arr.join("</br>")}`)


// Q14