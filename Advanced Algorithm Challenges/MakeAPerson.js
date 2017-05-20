
var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    this.fullName = firstAndLast;
    this.name = this.fullName.split(' ');
    this.firstName = this.name[0];
    this.lastName = this.name[1];
  
    this.getFullName = function() {
      return firstAndLast;
    };
  
    this.getLastName = function() {
      return lastName;
    };
  
    this.getFirstName = function() {
      return firstName; 
    };
  
    this.setFirstName = function(first) {
      this.firstName = first;
    };
  
    this.setLastName = function(last) {
      this.lastName = last;
    };
  
    this.setFullName = function(firstAndLast) {
      this.fullName = firstAndLast;
    };
    
};

var bob = new Person('Bob Ross');
console.log(bob.getFirstName());

bob.setFirstName("Haskell");
console.log(bob.getFirstName());