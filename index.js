// const note = {
//     id: 1,
//     title: 'My first note',
//     date: '01/01/1970',
// }

// const {id: noteId, title, date}=note
// console.log(noteId)
// console.log(title)
// console.log(date)

// const note = {
//     id: 1,
//     title: 'My first note',
//     date: '01/01/1970',
//     author: {
//         firstName: 'Sherlock',
//         lastName: 'Holmes',
//     },
// }

// const { id,
//     title,
//     date,
//     author: { firstName, lastName },
// } = note

// console.log(`${firstName} ${lastName} `)

// const {
//     author,
//     author: { firstName, lastName }, }
//     = note
// console.log(author)

// const {length} = 'A string'
// console.log(length)

// const date = ['1970', '12', '01']

// const [year, , day] = date

// console.log(year)
// // console.log(month)
// console.log(day)

// const nestedArray = [1, 2, [3, 4], 5]

// const [one, two, [three, four], five] = nestedArray

// console.log(one, two, three, four, five)

// const note = {
//     id: 1,
//     title: 'My first note',
//     date: '01/01/1970',
// }

// Object.entries(note).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`)
// })

// const note = {
//     title: 'My first note',
//     author: {
//       firstName: 'Sherlock',
//       lastName: 'Holmes',
//     },
//     tags: ['personal', 'writing', 'investigations'],
//   }

//   const {
//     title,
//     date = new Date(),
//     author: { firstName },
//     tags: [personalTag, writingTag],
//   } = note
  
//   console.log(date)

// const tools = ['hammer', 'screwdriver']
// const otherTools = ['wrench', 'saw']
// // const allTools = tools.concat(otherTools)

// const allTools = [...tools, ...otherTools]
// console.log(allTools)

// // Array of users
// const users = [
//     { id: 1, name: 'Ben' },
//     { id: 2, name: 'Leslie' },
//   ]

//   // A new user to be added
// const newUser = { id: 3, name: 'Ron' }
// const updatedUsers = [...users, newUser]


// users.push(newUser)

// console.log(users)
// console.log(updatedUsers)


// Create an Array
// const originalArray = ['one', 'two', 'three']

// // Assign Array to another variable
// const secondArray = originalArray

// // Remove the last item of the second Array
// secondArray.pop()

// console.log(originalArray)


// // Create an Array
// const originalArray = ['one', 'two', 'three']

// // Use spread to make a shallow copy
// const secondArray = [...originalArray]

// // Remove the last item of the second Array
// secondArray.pop()

// console.log(originalArray)


// // Create a set
// const set = new Set()

// set.add('octopus')
// set.add('starfish')
// set.add('whale')

// const seaCreatures = [...set]

// console.log(seaCreatures)

// const string = 'hello'

// const stringArray = [...string]

// console.log(stringArray)

// // Create an Object and a copied Object with Object.assign()
// const originalObject = { enabled: true, darkMode: false }
// const secondObject = Object.assign({}, originalObject)
// console.log(secondObject)


// // te an object and a copied object with spread
// const originalObject = { enabled: true, darkMode: false }
// const secondObject = { ...originalObject }

// console.log(secondObject)


// const user = {
//     id: 3,
//     name: 'Ron',
//   }
  
//   const updatedUser = { ...user, isLoggedIn: true }
  
//   console.log(updatedUser)

const user = {
    id: 3,
    name: 'Ron',
    organization: {
      name: 'Parks & Recreation',
      city: 'Pawnee',
    },
  }

  const updatedUser = { ...user, organization: { position: 'Director' } }

  console.log(updatedUser)  