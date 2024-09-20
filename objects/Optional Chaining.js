//Optional chaining allows you to safely access deeply nested properties without throwing an error if a property is null or undefined.
let user = {
    profile: {
        name: "Alice",
        age: {
            jan:25
    },
}
}

console.log(user.profile?.jan);

