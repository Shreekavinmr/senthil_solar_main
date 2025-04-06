/*
=========================================================
* Senthil Solar React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import residential_1 from "assets/images/res_1.jpg";
import residential_2 from "assets/images/res_3.jpg";
import residential_3 from "assets/images/res_4.jpeg";
import residential_4 from "assets/images/res_5.jpeg";
import residential_6 from "assets/images/res_7.jpeg";
import residential_7 from "assets/images/res_8.jpg";
import residential_8 from "assets/images/res_9.jpg";
import residential_10 from "assets/images/res_11.jpg";
import residential_11 from "assets/images/res_12.jpg";

import commercial_1 from "assets/images/1_comm.jpg";
import commercial_2 from "assets/images/2_comm.jpg";
import commercial_3 from "assets/images/3_comm.jpg";
import commercial_4 from "assets/images/4_comm.jpg";
import commercial_5 from "assets/images/5_comm.jpg";
import commercial_6 from "assets/images/6_comm.jpg";

import off_grid_1 from "assets/images/off_grid.jpg";

import solar_light_1 from "assets/images/solar_lights_1.jpeg";
import solar_light_2 from "assets/images/solar_lights_2.jpeg";

import solar_pump_1 from "assets/images/solarpump_1.jpg";
import solar_pump_2 from "assets/images/solarpump_2.jpg";
import solar_pump_3 from "assets/images/solarpump_3.jpg";


// Data for different solar solution categories
export default [
  {
    category: 'Residential',
    items: [
      { image: residential_1 },
      { image: residential_2 },
      { image: residential_3 },
      { image: residential_4 },
      { image: residential_6 },
      { image: residential_7 },
      { image: residential_8 },
      { image: residential_10 },
      { image: residential_11},
    ],
  },
  {
    category: 'Commercial',
    items: [
      { image: commercial_1 },
      { image: commercial_2 },
      { image: commercial_3 },
      { image: commercial_4 },
      { image: commercial_5 },
      { image: commercial_6 },
    ],
  },
  {
    category: 'Off-Grid',
    items: [
      { image: off_grid_1 },
    ],
  },
  {
    category: 'Solar Lights',
    items: [
      { image: solar_light_1 },
      { image: solar_light_2 },
    ],
  },
  {
    category: 'Solar Pump',
    items: [
      { image: solar_pump_1 },
      { image: solar_pump_2 },
      { image: solar_pump_3 },
    ],
  },
];
