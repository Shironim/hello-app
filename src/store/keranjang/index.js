import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  keranjang: [],
};

const keranjangReducer = createSlice({
  name: 'keranjang',
  initialState,
  reducers: {
    tambahKeranjang: (state, actions) => {
      state.keranjang = [
        ...state.keranjang,
        actions.payload,
      ];
      // console.log('ini addStudent', actions.payload);

    },
    deleteStudent(state, actions) {

      state.students = state.students.filter((student, studentIdx) => {
        if (studentIdx !== actions.payload) {
          // return selain student yang dipilih
          return {
            student
          };
        }
        return false;
      })
    }
  }
});

export const { addStudent, deleteStudent } = keranjangReducer.actions

export default keranjangReducer.reducer