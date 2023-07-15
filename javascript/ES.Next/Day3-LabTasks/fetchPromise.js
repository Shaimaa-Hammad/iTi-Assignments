function consumeService(url) {
  return fetch(url).
  then(function (response) {
    console.log(response);
    if (!response.ok) {
      throw new Error("HTTP error! status: " + response.status);
    }
    return response.json();
  });
}

let serviceUrl = "https://jsonplaceholder.typicode.com/users";

consumeService(serviceUrl)
  .then(function (data) {
    let table = document.createElement("table");
    table.setAttribute("border", "1");
    let headerRow = table.insertRow(0);
    let headers = Object.keys(data[0]);

    for (let i = 0; i < headers.length - 4; i++) {
      let header = headers[i];
      let th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    }

    for (let i = 0; i < data.length; i++) {
      let row = table.insertRow(-1);

      for (let j = 0; j < headers.length - 4; j++) {
        let header = headers[j];
        let cell = row.insertCell(-1);
        cell.textContent = data[i][header];
      }
    }

    document.body.appendChild(table);
  })
  .catch(function (error) {
    console.log(error);
  });


// function consumeService(url) {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         resolve(JSON.parse(xhr.responseText));
//       } else {
//         reject(xhr.statusText);
//       }
//     };
//     xhr.onerror = () => reject(xhr.statusText);
//     xhr.send();
//   });
// }

// let serviceUrl = "https://jsonplaceholder.typicode.com/users";

// consumeService(serviceUrl)
//   .then((data) => {
//     //Scroll down web page to see the table as there is canvas 1000 x 1000 before it
//     let table = document.createElement("table");
//     table.setAttribute("border", "1");
//     let headerRow = table.insertRow(0);
//     let headers = Object.keys(data[0]);

//     for (let i = 0; i < headers.length - 4; i++) {
//       let header = headers[i];
//       let th = document.createElement("th");
//       th.textContent = header;
//       headerRow.appendChild(th);
//     }

//     for (let i = 0; i < data.length; i++) {
//       let row = table.insertRow(-1);

//       for (let j = 0; j < headers.length - 4; j++) {
//         let header = headers[j];
//         let cell = row.insertCell(-1);
//         cell.textContent = data[i][header];
//       }
//     }

//     document.body.appendChild(table);
//   })
//   .catch((error) => {
//     console.error(error);
//   });