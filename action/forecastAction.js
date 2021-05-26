/*TODO*/
export const updateForecast = (forecast) => ({
    type: 'UPDATE_FORECAST',
    forecast: forecast
  });
  
  export const toggleLoader = (status) => ({
   type: 'TOGGLE_LOADEER',
   status: status
  });

  export const updateInput = (inputValue) => ({
    type: 'UPDATE_INPUT',
    inputValue: inputValue
})
  
  export const fetchForecast = city => {
      return async dispatch => {
        // console.log(city);
         var response;
         var forecast;
         dispatch(toggleLoader(true));
         try {
        response = await fetch('http://api.weatherstack.com/current?access_key=19fe4172a3a35ee24f4480d403cfad24&query=' + city);
         forecast = await response.json();
         
           
         } catch (error) {
           
         }
         dispatch(updateForecast(forecast));
         
  }
};