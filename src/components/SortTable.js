
let SortTable = () => {
let sortBtn = document.getElementById("sort");
sortBtn.addEventListener("click", (e) => {
  sortTable();
});

function sortTable() {
  let table = document.getElementById("table");

  let switching = false,
    rows,
    prev,
    next,
    shouldSwitch = false,
    i;

  // while (switching) {
  switching = false;
  rows = table.rows;
  for (i = 1; i < rows.length - 1; i++) {
    shouldSwitch = false;
    prev = rows[i].getElementsByTagName("TD")[1];
    next = rows[i + 1].getElementsByTagName("TD")[1];

    if (prev.innerHTML.toLowerCase() > next.innerHTML.toLowerCase()) {
      console.log(prev);
      shouldSwitch = true;
      break;
    }
  }

  if (shouldSwitch) {
    // console.log(rows[i]);
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    switching = true;
  }
  // }
}


    return(
        <div id="app">
        <button id="sort">Sort</button>
        <table id="table">
          <tr>
            <th>Name</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>berglunds snabbkop</td>
            <td>Sweden</td>
          </tr>
          <tr>
            <td>North/South</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Koniglich Essen</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>magazzini Alimentari Riuniti</td>
            <td>Italy</td>
          </tr>
          <tr>
            <td>Paris specialites</td>
            <td>France</td>
          </tr>
        </table>
      </div>
    )
}
