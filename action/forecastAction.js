/*TODO*/
export const updateForecast = (forecast) => ({
    type: 'UPDATE_FORECAST',
    forecast: forecast
  });
  
  export const toggleLoader = (status) => ({
   type: 'TOGGLE_LOADER',
   status: status
  });

  export const updateInput = (input) => ({
    type: 'UPDATE_INPUT',
    input: input
})

export const clearInput = () => ({
  type: 'CLEAR_INPUT',
  input: ''
});
  
// export const fetchForecast = city => {
//   return async dispatch => {
//     // console.log(city);
//      var response;
//      var forecast;
//      dispatch(toggleLoader(true));
//      try {
//     response = await fetch('http://api.weatherstack.com/current?access_key=19fe4172a3a35ee24f4480d403cfad24&query=roanne');
//      forecast = await response.json();
     
       
//      } catch (error) {
       
//      }
//      dispatch(updateForecast(forecast));
     
// }
// }



export const fetchForecast = (city) => {
  console.log(city);
  return async dispatch => {
      dispatch(toggleLoader(true));
      try{
      const response = await fetch ('http://api.weatherstack.com/current?access_key=86e8853f6dca7859be0045fab943096b&query=' + city);
      const forecast = await response.json();
      dispatch(updateForecast(forecast));
      
      } catch(e) {
          dispatch(toggleLoader(false));
      }
      dispatch(clearInput());
  }
};