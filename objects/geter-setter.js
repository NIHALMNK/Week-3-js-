let a = {
    name: 'nihal',
    set setAge(age) {
        this.age = age
    },
    get sName() {
        console.log('Name is ', this.name ,'age',this.age)
    },
}

a.sName

a.setAge = 20

