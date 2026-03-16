export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  address: {
    street: string;
    city: string;
  };
}
