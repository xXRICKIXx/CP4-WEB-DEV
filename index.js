export default function fakename() {
    const first = ['Ana', 'Bia', 'João', 'Julio'];
    const last = ['Rodrigues', 'Dias', 'Goulart', 'Silva'];
    let firstName = first[parseInt(Math.random() * 4)];
    let lastName = last[parseInt(Math.random() * 4)];
    return firstName + " " + lastName;
}
