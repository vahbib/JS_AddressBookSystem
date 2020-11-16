console.log("Welcome To Address Book System Java Script Program");
class Contact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNo;
    email;

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }
}

let contact1 = new Contact("Bibhav", "Singh", "Maharuva", "Ayodhya", "Uttar Pradesh", 224231,525256352,  "bibsi@gmail.com")
console.log(contact1);