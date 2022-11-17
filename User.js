const User = class {
    constructor (name, surname,CF, dateOfBirth, address, email, cellNumber,jobs) {
        this.name=name;
        this.surname=surname;
        this.CF=CF;
        this.dateOfBirth= dateOfBirth;
        this.address= address;
        this.email=email;
        this.cellNumber= cellNumber;
        this.jobs=jobs;
    }

   getName() {
    return this.name;
   }

   getSurname() {
    return this.surname;
   }

   getCF() {
    return this.CF;
   }

   getDateOfBirth() {
    return this.dateOfBirth;
   }

   getAddress () {
    return this.address;
   }

   getEmail() {
    return this.email;
   }

   getCellNumber() {
    return this.cellNumber;
   }

   getJobs() {
    return this.jobs;
   }
}

export {User};