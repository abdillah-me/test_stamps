const axios = require('axios');
const apiKey = '77f65b6b102676d25898b20cbf2dcb57';
const city = 'Jakarta'
const dataShow = 5
const dataGet = 7 * dataShow
const getWeatherForecast = async () => {
   try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city},id&units=metric&cnt=${dataGet}&appid=${apiKey}`);
      const data = response.data;

      console.log('Weather Forecast:');
      let currentDate = '';
      let forecastCount = 0;
      data.list.forEach(forecast => {
         const date = new Date(forecast.dt * 1000);
         const day = date.toLocaleDateString('en-US', { weekday: 'short' });
         const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
         const formatFinal = formattedDate.replace(',', '');
         const temperature = forecast.main.temp;

         if (formatFinal !== currentDate) {
            console.log(`${day}, ${formatFinal}: ${temperature}℃`);
            currentDate = formatFinal;
            forecastCount++;
         }

         if (forecastCount === dataShow) {
            return;
         }
      });
   } catch (error) {
      console.log('Terjadi kesalahan dalam mengambil data cuaca:', error);
   }
};

getWeatherForecast();
