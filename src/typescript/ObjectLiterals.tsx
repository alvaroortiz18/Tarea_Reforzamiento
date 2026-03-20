export const BasicTypes = () => {
    return <div>ObjectLiterals</div>;
};

interface Person {
    age: number;
    firstName: string;
    lastName: string;
    address: Address;
}

interface Address {
    street: string;
    city: string;
    country: string;
    postalCode?: number;
}

export const ObjectLiterals = () => {
    const person: Person = {
        age: 30,
        firstName: "Jhosell",
        lastName: "García",
        address: {
            street: "Zona 8",
            city: "Nueva Guinea",
            country: "Nicaragua",
        },
    };

    return (
        <>
            <div>Objetos Literales</div>

            <pre>{JSON.stringify(person, null, 2)}</pre>
        </>
    );
};