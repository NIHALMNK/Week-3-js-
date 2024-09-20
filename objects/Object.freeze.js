// How would you freeze an object settings = { theme: 'dark', language: 'en' } so its properties cannot be modified?

let settings = { theme: 'dark', language: 'en' }

Object.freeze(settings)

settings.theme='light';

console.log(settings);//=>{ theme: 'dark', language: 'en' }

delete settings.theme;

console.log(settings);//=>{ theme: 'dark', language: 'en' }

//=================================================
console.log(Object.isFrozen(settings));//=>true
console.log(Object.isSealed(settings));//=>true
