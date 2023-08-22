(() => {
  const fetchJSON = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      throw new Error(`Error fetching JSON: ${error}`);
    }
  };

  const populateTable = (data) => {
    const staffTable = document.getElementById("staffTable");

    data.forEach((item) => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const emailCell = document.createElement("td");

      nameCell.textContent = `${item.first_name} ${item.last_name}`;
      emailCell.textContent = item.email;

      row.appendChild(nameCell);
      row.appendChild(emailCell);
      staffTable.appendChild(row);
    });
  };

  const init = async () => {
    try {
      const data = await fetchJSON("data/staff.json");
      populateTable(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  init();
})();
