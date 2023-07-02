export type Data = {
    id: number,
    name:  string,
    price: number,
  }
  
  export type Error = {
      message: string,
  }
  
  export const falseDB: Record<string | number, Data > = {
     1: { id: 1,
      name: 'Iphone 📱',
      price: 900
     }
  }

  