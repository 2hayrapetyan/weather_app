
export function getCurrentLocation() {
    if (!("geolocation" in navigator)) {
      return Promise.reject(new Error("Geolocation is not supported by this browser."));
    }
  
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
          const data = await response.json();
          const city = data.address?.town || data.address?.city;
          resolve(city);
        } catch (error) {
          reject(error);
        }
      });
    });
  }
  
  export async function getWeatherThisCity(city) {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9deedf47613864fa3a495199a5dbb7a5`);
      return await res.json();
    } catch (err) {
      throw new Error(err);
    }
  }
  
  export function getWeatherIconUrl(weatherMain) {
    const iconUrls = {
      Thunderstorm: "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/256/external-thunderstorm-weather-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-3.png",
      Drizzle: "https://img.icons8.com/external-filled-line-andi-nur-abdillah/1x/external-Drizzle-weather-(filled-line)-filled-line-andi-nur-abdillah.png",
      Rain: "https://img.icons8.com/external-tulpahn-outline-color-tulpahn/256/external-rain-autumn-tulpahn-outline-color-tulpahn.png",
      Snow: "https://img.icons8.com/color/256/snow.png",
      Mist: "https://img.icons8.com/parakeet/1x/fog-day.png",
      Smoke: "https://img.icons8.com/parakeet/1x/fog-day.png",
      Haze: "https://img.icons8.com/parakeet/1x/fog-day.png",
      Dust: "https://img.icons8.com/parakeet/1x/fog-day.png",
      Fog: "https://img.icons8.com/parakeet/1x/fog-day.png",
      Sand: "https://img.icons8.com/parakeet/1x/fog-day.png",
      Ash: "https://img.icons8.com/parakeet/1x/fog-day.png",
      Squall: "https://img.icons8.com/arcade/1x/tornado.png",
      Tornado: "https://img.icons8.com/arcade/1x/tornado.png",
      Clear: "https://img.icons8.com/emoji/256/sun-emoji.png",
      Clouds: "https://img.icons8.com/external-justicon-flat-justicon/256/external-cloud-weather-justicon-flat-justicon-2.png",
      default: "https://img.icons8.com/color/48/000000/unknown-status.png",
    };
  
    return iconUrls[weatherMain] || iconUrls.default;
  }
  