export const BasicFunctions = () => {
    const addTwoNumbers = (a: number, b: number): number => {
        return (a + b);
    };



    return (
        <div>
            <h3>Funciones</h3>
            <span>La suma de 2 + 8 es: {addTwoNumbers(2, 8)}</span>
        </div>
    )
}