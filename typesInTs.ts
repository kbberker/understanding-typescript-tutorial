const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
}= {
    name: 'Bob',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
}

person.role[0] = 10;

console.log(person.hobbies);
