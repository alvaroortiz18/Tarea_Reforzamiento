export const BasicTypes = () => {
    const name: string = "Jhosell";
    const age: number = 30;
    const isActive: boolean = false;

    const powers: string[] = ["React", "ReactNative", "Astro"];

    return (
        <>
            <h3>Tipos básicos</h3>
            {name} - {age} - {isActive ? "Activo" : "Inactivo"}
            <p>{powers.join(", ")}</p>
        </>
    );
};