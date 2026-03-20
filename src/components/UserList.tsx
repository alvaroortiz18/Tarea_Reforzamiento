interface User {
    id: number;
    name: string;
    isActive: boolean;
    role?: string;
}

export const UserList = () => {
    const users: User[] = [
        { id: 1, name: "Ana", isActive: true, role: "Admin" },
        { id: 2, name: "Luis", isActive: false },
        { id: 3, name: "María", isActive: true, role: "Editor" },
        { id: 4, name: "Carlos", isActive: false, role: "Viewer" },
    ];

    return (
        <div>
            <h3 className="text-2xl mb-4">Lista de Usuarios</h3>
            {users.map((user) => (
                <div key={user.id} className="border p-4 mb-2 rounded">
                    <p>Id: {user.id}</p>
                    <p>Nombre: {user.name}</p>
                    <p>Estado: {user.isActive ? "Activo" : "Inactivo"}</p>
                    <p>Rol: {user.role ?? "Sin rol"}</p>
                </div>
            ))}
        </div>
    );
};
