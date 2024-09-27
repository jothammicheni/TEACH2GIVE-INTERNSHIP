
// optiona parameter function to concart two names


const concatNames=(fname?: string,lname?:string) => {

   if(!lname) {
     return `names :${fname}`
   }else{
     return `names :${fname} ${lname}`
   }

}    

console.log(concatNames('jotham','ian'))


//default function parameters
// a function will take its default parameter value if it was not redefined

const concatnames=(fname:string, lname:string='micheni') => {
  lname='murimi'
  return `names: ${fname} ${lname}`
}

console.log(concatnames('jotham'))



  //rest parameters i the typescript javascript//

const concart=(...names:string[]) => {
  return names.join('')
}
console.log(concart( 'jotham', 'murimi' , 'micheni' ))




//practice 4
//function types

type User = {
  id: string;
  name: string;
};

const modifyUser = (users: User[], id: string, makeChange: (user: User) => User) => {
  return users.map((u) => {
    if (u.id === id) {
      return makeChange(u);
    }
    return u;
  });
};

// Example users array
const users: User[] = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
  { id: '3', name: 'Charlie' }
];

// Function to change the user's name
const changeUserName = (user: User) => {
  return { ...user, name: 'Updated Name' };
};

// Running the function
const updatedUsers = modifyUser(users, '2', changeUserName);

console.log(updatedUsers);



//