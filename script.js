function createTable() {
    //Write your code here
	
  const table = document.getElementById("myTable");

  const rn = prompt("Input number of rows");
  const cn = prompt("Input number of columns");

  const rows = Number(rn);
  const cols = Number(cn);

  // Validate numeric input
  if (isNaN(rows) || isNaN(cols)) {
    return; // Ignore non-numeric input
  }

  // Validate positive values
  if (rows <= 0 || cols <= 0) {
    alert("Rows and columns must be positive numbers");
    return;
  }

  // Clear existing table
  table.innerHTML = "";

  // Create table dynamically
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < cols; j++) {
      const td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
}
