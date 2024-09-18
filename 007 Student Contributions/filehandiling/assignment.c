#include <stdio.h>
//
//#define MAX_EMPLOYEES 100

// Define structure for employee
struct Employee {
    int employee_id;
    char first_name[50];
    char last_name[50];
    char designation[50];
    char department[50];
    char dob[20];
    char doj[20];
    float gross_salary;
    float net_salary;
};

int main() {
    struct Employee employees[MAX_EMPLOYEES];
    int num_employees;

    // Get the number of employees
    printf("Enter the number of employees: ");
    scanf("%d", &num_employees);

    // Input employee details
    for (int i = 0; i < num_employees; i++) {
        printf("\nEnter details for Employee %d:\n", i + 1);
        printf("Employee ID: ");
        scanf("%d", &employees[i].employee_id);
        printf("First Name: ");
        scanf("%s", employees[i].first_name);
        printf("Last Name: ");
        scanf("%s", employees[i].last_name);
        printf("Designation: ");
        scanf("%s", employees[i].designation);
        printf("Department: ");
        scanf("%s", employees[i].department);
        printf("Date of Birth (YYYY-MM-DD): ");
        scanf("%s", employees[i].dob);
        printf("Date of Joining (YYYY-MM-DD): ");
        scanf("%s", employees[i].doj);
        printf("Gross Salary: ");
        scanf("%f", &employees[i].gross_salary);
        printf("Net Salary: ");
        scanf("%f", &employees[i].net_salary);
    };

    // Display employee details
printf("\nEmployee Details:\n");
printf("-------------------------------------------------\n");
printf("ID\tFirst Name\tLast Name\tDesignation\tDepartment\tDOB\t\tDOJ\t\tGross Salary\tNet Salary\n");
printf("-------------------------------------------------\n");
    for (int i = 0; i < num_employees; i++) {
        printf("%d\t%s\t\t%s\t\t%s\t\t%s\t\t%s\t%s\t%.2f\t\t%.2f\n", employees[i].employee_id, employees[i].first_name,
   employees[i].last_name, employees[i].designation, employees[i].department, employees[i].dob, employees[i].doj,
    employees[i].gross_salary, employees[i].net_salary);
    }

    return 0;
}

