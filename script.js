// // // ASSIGNMENT
// // // Fetch Data from this endpoint https://jsonplaceholder.typicode.com/users  using javascript promise or async and await method
// // // Display the information in a table with S/N, name,email, Address and phone number.
// // // Ensure your table is properly styled.


// // // Method of Submission

// // // Submit a codepen link to your task

// // // Resources
// // // Mdn documentation


// // const fetchPromise = fetch("https://jsonplaceholder.typicode.com/users");
// // const main = document.getElementById("main");

// // fetchPromise.then(response=>{
// //     return response.json();
// // }).then(data=>{
// //     const names = data.map(data=> data.name).join("\n");
// //     // console.log(names)
// //     main.innerHTML = names;
// // }).catch(err=>{
// //     console.log(err)
// // })


async function loadTables( table) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
      const newTable = document.createElement("table");
      newTable.innerHTML = "<thead><th>Id</th><th>Name</th><th>Username</th><th>Email</th><th>Address</th></thead>";
      for(const {id, name,username,email, address,phone} of data){
        console.log(phone)
          const newRow = document.createElement("tr");
          const idData = document.createElement("td");
          const nameData = document.createElement("td");
          const userData = document.createElement("td");
          const emailData = document.createElement("td");
          const addressData = document.createElement("td");
          idData.textContent = id;
          nameData.textContent = name;    
          userData.textContent = username;    
          emailData.textContent = email;    
          addressData.textContent = address.street;    
          newRow.appendChild(idData);
          newRow.appendChild(nameData);
          newRow.appendChild(userData);
          newRow.appendChild(emailData);
          newRow.appendChild(addressData);
          newTable.appendChild(newRow);
      }
      
      const target = document.getElementById('target');
      target.appendChild(newTable);

}


try {
    loadTables()
} catch (error) {
    console.log(error)
}finally{
    console.log('success')
}






















// const main = document.querySelector('main')

// const apiCollector =fetch ("https://jsonplaceholder.typicode.com/users");
// apiCollector.then(response=>{
//     return response.json()
// }).then(data=>{
//     let namess= main.innerHTML = listOfName(data);
//     return namess
// })
// const listOfName=(data)=>{
//     const names = data.map(item=>`<li> ${item.name}</li>`).join("\n");
//     return `<ul>${names}</ul>`
// }

// const listOfEmail = (data)=>{
//     const names = data.map(ele=>{
//         return main.innerHTML = `<li>${ele.email}</li>`
//     }).join("\n");
//     return `<ul>${names}</ul>`
// }