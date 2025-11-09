// Base class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display basic info
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Subclass: Student (inherits from Person)
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // Call parent constructor
    this.course = course;
  }

  // Overriding method to include course info
  displayInfo() {
    console.log(
      `Student Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`
    );
  }
}

// Subclass: Teacher (inherits from Person)
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age); // Call parent constructor
    this.subject = subject;
  }

  // Overriding method to include subject info
  displayInfo() {
    console.log(
      `Teacher Name: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`
    );
  }
}

// Create instances
const student1 = new Student("Alice", 21, "Computer Science");
const teacher1 = new Teacher("Mr. Sharma", 40, "Mathematics");

// Display their info
student1.displayInfo(); // Output: Student Name: Alice, Age: 21, Course: Computer Science
teacher1.displayInfo(); // Output: Teacher Name: Mr. Sharma, Age: 40, Subject: Mathematics
