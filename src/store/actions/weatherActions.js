export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";

export const requestData = payload => ({ type: REQUEST_DATA, payload });
export const receiveData = receiveData => ({ type: RECEIVE_DATA, receiveData });
