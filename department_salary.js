const company = {
    departments: [
      {
        departmentName: "Engineering",
        employees: [
          {
            name: "Alice",
            salary: 100000,
            subordinates: [
              {
                name: "Bob",
                salary: 80000,
                subordinates: []
              },
              {
                name: "Charlie",
                salary: 85000,
                subordinates: []
              }
            ]
          },
          {
            name: "David",
            salary: 90000,
            subordinates: []
          }
        ]
      },
      {
        departmentName: "Sales",
        employees: [
          {
            name: "Eve",
            salary: 85000,
            subordinates: [
              {
                name: "Frank",
                salary: 70000,
                subordinates: []
              }
            ]
          }
        ]
      }
    ]
  };
  
// 2. Create a Recursive Function to Calculate Total Salary for a Department
function calculateDepartmentSalary(department) {
    let totalSalary = 0;
  
    function calculateEmployeeSalary(employee) {
      totalSalary += employee.salary;
      for (const subordinate of employee.subordinates) {
        calculateEmployeeSalary(subordinate);
      }
    }
  
    for (const employee of department.employees) {
      calculateEmployeeSalary(employee);
    }
  
    return totalSalary;
  }