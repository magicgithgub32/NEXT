type Product = {
    title: string;
    entities: {
        id: number;
        title: string;

    }[]
}

export const mockProducts: Record<string, Product> = {
    phones: {
        title: "teléfonos", 
        entities: [
            {
            id: 1,
            title: "Iphone 100"
        },
        {
            id: 2,
            title: "Iphone 200"
        }
    ]
    },
    food: {
        title: "comida",
        entities: [
            {
                id: 1,
                title: "Sushi"
            },
            {
                id: 2,
                title: "pizza"
            }
        ]
    },
    computers: {
        title: "ordenadores",
        entities: [
            {
                id: 1,
                title: "Macbook Pro"
            },
            {
                id: 2,
                title: "ASUS Pro"
            }
        ]
    }
}