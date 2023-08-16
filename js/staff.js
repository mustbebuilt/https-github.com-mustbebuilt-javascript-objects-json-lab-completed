(() => {
  // Start
  let staff = JSON.parse(localStorage.getItem("staffList")) || [];

  const rebuildList = () => {
    const staffTable = document.getElementById("staffTable");
    staffTable.innerHTML = "";

    staff.forEach((element) => {
      const newStaffRow = document.createElement("tr");

      const newStaffName = document.createElement("td");
      newStaffName.innerHTML = element.name;

      const newStaffEmail = document.createElement("td");
      newStaffEmail.innerHTML = element.email;

      newStaffRow.appendChild(newStaffName);
      newStaffRow.appendChild(newStaffEmail);
      staffTable.appendChild(newStaffRow);
    });

    localStorage.setItem("staffList", JSON.stringify(staff));
  };

  if (!localStorage.getItem("count")) {
    localStorage.setItem("count", 1);
  } else {
    localStorage.setItem("count", parseInt(localStorage.getItem("count")) + 1);
  }

  document.getElementById("addStaffForm").addEventListener("submit", (ev) => {
    ev.preventDefault();

    const newStaffName = document.getElementById("staffName").value;
    const newStaffEmail = document.getElementById("staffEmail").value;

    staff.push({ name: newStaffName, email: newStaffEmail });
    console.dir(staff);

    rebuildList();
  });

  rebuildList();

  // End
})();
