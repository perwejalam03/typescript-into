class User{
    protected _courseCount = 1;
    // private _courseCount = 1;
    public email:string;
    public name:string;
    readonly city:string = "Katihar";
    constructor(email:string, name:string){ 
        this.email = email;
        this.name = name;
    }
    private delteToken(){
        console.log("Token deleted");
    }
    get userEmail() : string{
        return `email is ${this.email}`;
    }
    get courseCount():number {
        return this._courseCount;
    }
    set courseCount(courseCount){
        if(courseCount <= 1){
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseCount;
    }
}


class SubUser extends User{
    isFamily:boolean = true;
    changeCourseCount(){
        this._courseCount = 4;
    }

}
const  user = new User('alam@gmail.com', 'alam');