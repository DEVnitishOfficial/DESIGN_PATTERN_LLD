class Employee {
    public id: number;

    constructor(id: number) {
        this.id = id;
    }

    public getId(): number {
        return this.id;
    }
}

class BioDataService {
    public fetchBioData(employee: Employee): string {
        return "some bio data for employee with id " + employee.getId();
    }
}

class SalaryCalculator {
    public calculateSalary(employee: Employee): number {
        return 0; // logic for calculating salary
    }
}

class PerformancePrinter {
    public printPerformance(employee: Employee): void {
        console.log("some performance related data " + employee.getId());
    }
}

const employee: Employee = new Employee(1);
const bioData: BioDataService = new BioDataService();
const salary: SalaryCalculator = new SalaryCalculator();
const performance: PerformancePrinter = new PerformancePrinter();

console.log(bioData.fetchBioData(employee));
console.log(salary.calculateSalary(employee));
performance.printPerformance(employee);
