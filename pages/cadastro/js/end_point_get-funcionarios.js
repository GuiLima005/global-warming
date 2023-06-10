'use strict'

export const getFuncionarios = async () => {
    const url = 'http://localhost:8080/v1/dream-chock/api/all-employee/rh';

    const response = await fetch(url);
    const data = await response.json();
  
    return data.message;
};
