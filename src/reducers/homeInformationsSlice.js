import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "infoList": [
    {
      title: "Rainforest as a Carbon Dioxide Absorber",
      description: "The Amazon rainforest is responsible for absorbing vast amounts of CO2 and is crucial for climate balance.",
      url: "https://www.nationalgeographic.com/environment/article/140808-rainforest-carbon-sink-deforestation-climate-change",
    },
    {
      title: "Consequences of Increasing CO2 Emissions on Ocean Acidification",
      description: "Rising CO2 emissions lead to ocean acidification, posing a threat to various marine life forms.",
      url: "https://www.nature.com/articles/nature08056",
    },
    {
      title: "Role of Agriculture in CO2 Emissions",
      description: "Agriculture is one of the main sources of CO2 emissions through deforestation and meat production.",
      url: "https://www.ucsusa.org/resources/hidden-costs-industrial-agriculture",
    },
    {
      title: "Greenhouse Effect and Temperature Rise",
      description: "Increasing CO2 emissions are the primary cause of global warming, which has a significant impact on Earth's climate.",
      url: "https://climate.nasa.gov/causes/",
    },
    {
      title: "Transportation and CO2 Emissions",
      description: "Cars and other means of transportation are responsible for a significant portion of CO2 emissions worldwide.",
      url: "https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle",
    },
    {
      title: "Renewable Energy as an Alternative to Fossil Fuels",
      description: "Renewable energy, such as solar and wind power, helps reduce CO2 emissions associated with electricity production.",
      url: "https://www.energy.gov/eere/renewables/renewable-energy",
    },
    {
      title: "Reforestation and CO2 Emission Reduction",
      description: "Reforestation and forest conservation programs help reduce CO2 emissions by capturing this gas from the atmosphere.",
      url: "https://www.wri.org/climate-forests",
    },
    {
      title: "Side Effects of CO2 Emissions on Human Health",
      description: "Increasing CO2 emissions have a negative impact on human health, contributing to respiratory diseases and other health issues.",
      url: "https://www.who.int/airpollution/en/",
    },
    {
      title: "CO2 Emissions and Climate Changes in the Arctic",
      description: "High CO2 emissions contribute to faster Arctic ice melting and climate changes in the northern polar region.",
      url: "https://climate.nasa.gov/effects/",
    },
    {
      title: "Air Purification Technologies",
      description: "Innovative air purification technologies can help reduce CO2 emissions and improve air quality.",
      url: "https://www.scientificamerican.com/article/carbon-engineering",
    },
  ],
};

export const homeInformationsSlice = createSlice({
  name: "homeInformations",
  initialState: initialState,
  reducers: {},
});

// export const {} = homeInformationsSlice.actions;

export default homeInformationsSlice.reducer;
