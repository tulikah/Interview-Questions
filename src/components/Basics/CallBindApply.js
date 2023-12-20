

const CallBindApply = () => {
    const fullName1 = {
        firstname: 'Tulika',
        lastname: 'Hars',
    }

    const fullName2 = {
        firstname: 'Jennifer',
        lastname: 'Aniston',

    }
    // call, apply, bind do not work on arrow functions becoz they don't have thier own this context. 
    // the arrow function point to the outside parent function.

    function printFullName (hometown) {
        console.log(this.firstname + this.lastname + ' ' + hometown);
        return this.firstname + this.lastname + ' ' + hometown
    }

    //Call
    const name2 = printFullName.call(fullName1, 'Thane');
    const name1 = printFullName.call(fullName2, 'New York');

    //apply
    const name3 = printFullName.apply(fullName1, ['Thane', 'NJIT', 'New Jersey']);
    const name4 = printFullName.apply(fullName2, ['New York', 'XYZ', 'LA']);
    console.log(name3 + '' + name4);

    //bind
    const bindFunc = printFullName.bind(fullName2, ['New York', 'XYZ', 'LA'] )
    console.log(bindFunc) // you can see the function returned
    bindFunc();

    return (
        <div>
            <h1>{ name1 }</h1>
            <h1>{ name2 }</h1>
            <h1>{ name3 }</h1>
            <h1>{ name4 }</h1>
        </div>

    )
}

export default CallBindApply;