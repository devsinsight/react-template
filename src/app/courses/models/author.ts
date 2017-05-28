export class Author{
    id:string;
    firstName: string;
    lastName: string;

    get fullName(){
        return this.firstName + ' ' + this.lastName;
    }
}