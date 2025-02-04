let idCounter = 0;

export type UserData = {
  id?: number;
  name: string;
  lname: string;
  email: string;
  addres: string;
  phone: string;
  password: string;
};

export type Action =
  | { type: 'ADD_USER'; data: Omit<UserData, 'id'> }
  | { type: 'DELETE_USER'; id: number }
  | { type: 'UPDATE_USER'; data: Partial<UserData> & { id: number } };


const userReducer = (state: UserData[], action: Action): UserData[] => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, { ...action.data, id: idCounter++ }];
    case 'DELETE_USER':
      return state.filter(user => user.id !== action.id);
    case 'UPDATE_USER':
      return state.map(user => 
        user.id === action.data.id ? { ...user, ...action.data } : user
      );
    default:
      return state;
  }
};

export default userReducer;
