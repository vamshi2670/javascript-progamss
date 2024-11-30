// optional chaining is indicates ? symbol and inspite given object name is
//wrong skip that axcute after lines.
let details = {
    name: 'name',
    age: 20,
    address: {
        village: 'teldarpalli',
        district: 'khammam',
        state: 'telengana'
    },
    eduacation: {
        class: 16,
        group: 'bcom'
    }
}
console.log(details.address?.district)
console.log('hello')