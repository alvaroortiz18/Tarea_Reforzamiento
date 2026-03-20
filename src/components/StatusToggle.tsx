import { useToggle } from "../hooks/useToggle";

export const StatusToggle = () => {
    const { value: isOnline, toggleValue } = useToggle(false);

    return (
        <div>
            <h3 className="text-2xl mb-4">Estado de Conexión</h3>
            <button
                onClick={toggleValue}
                className={`px-4 py-2 rounded text-white ${isOnline ? "bg-green-500" : "bg-red-500"
                    }`}
            >
                {isOnline ? "En Línea" : "Desconectado"}
            </button>
        </div>
    );
};
