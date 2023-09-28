## Names

- ANDERSON IWAMIZU : 2040482223037
- FERNANDO CARNEIRO DA SILVA : 2040482212018
- GUILHERME NUNZIO NICOLACI : 2040482212019
- GUSTAVO GREGORIO NICOLACI : 2040482212012


## Project Description

This repository contains a project designed to retrieve and display the longitude, latitude, and thermal sensation of a selected city using an external API.

The primary goal of this project is to create an application that efficiently utilizes the OpenWeatherMap API to provide geographical and thermal information for a specified city.

## How to Use

1. **API Key Setup:**
   - Rename the `.env.example` file to `.env`.
   - Obtain your API key from the [OpenWeatherMap website](http://api.openweathermap.org).
   - Open the `.env` file and replace `YOUR_API_KEY` with your actual API key in the `APPID` field.

2. **Select City:**
   - In your application code, you can specify the city you want to retrieve data for by using the `q` parameter.
   - Replace `"YOUR_CITY_NAME"` with the desired city name in your API requests.

3. **Units Configuration:**
   - By default, the API uses metric units for temperature and other measurements.
   - You can specify the units you prefer by using the `units` parameter in your API requests.