const calculateAverage = (grades: number[]): number => {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
};

export const GradeCalculator = () => {
    const grades: number[] = [85, 90, 78, 100];

    return (
        <div>
            <h3 className="text-2xl mb-4">Calculadora de Promedio</h3>
            <p>Calificaciones: {grades.join(", ")}</p>
            <p>Promedio: {calculateAverage(grades)}</p>
        </div>
    );
};
