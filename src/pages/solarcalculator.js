// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";

// Senthil Solar React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Senthil Solar React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// React hooks
import { useState } from "react";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import contactBanner from "assets/images/canva_banner.png";

function SolarCalculator() {
  // State variables
  const [consumerType, setConsumerType] = useState('commercial');
  const [monthlyConsumption, setMonthlyConsumption] = useState(500);
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  // Updated Tamil Nadu electricity rates based on the provided images
  const electricityRates = {
    domestic: [
      { min: 0, max: 400, rate: 4.80 },
      { min: 401, max: 500, rate: 6.45 },
      { min: 501, max: 600, rate: 8.55 },
      { min: 601, max: 800, rate: 9.65 },
      { min: 801, max: 1000, rate: 10.70 },
      { min: 1001, max: Infinity, rate: 11.80 }
    ],
    commercial: [
      { min: 0, max: 100, rate: 6.05 },
      { min: 101, max: 500, rate: 6.70 },
      { min: 501, max: Infinity, rate: 7.10 }
    ]
  };

  // Fixed charges based on consumption
  const fixedCharges = {
    domestic: [
      { max: 500, charge: 10 },
      { max: Infinity, charge: 20 }
    ],
    commercial: [
      { max: Infinity, charge: 130 } // Base commercial fixed charge
    ]
  };

  // Solar constants
  const constants = {
    kwhPerKwPerDay: 4.0,
    systemCostPerKw: 55000,
    panelSizeInSqFt: 100,
    panelSizeInSqM: 9.3,
    treesPerKw: 42,
    systemLifespan: 25,
  };

  // Updated subsidy calculation function
  const calculateSubsidy = (systemSizeKw) => {
    if (systemSizeKw <= 1) {
      return 30000;
    } else if (systemSizeKw <= 2) {
      return 60000;
    } else if (systemSizeKw <= 3) {
      return 78000;
    } else {
      return 78000; // Maximum subsidy capped at 3kW
    }
  };

  // Calculate electricity bill using slab-wise billing
  const calculateElectricityBill = (consumption, type) => {
    const rates = electricityRates[type];
    let energyCharges = 0;
    
    // Calculate energy charges based on slabs
    for (const slab of rates) {
      if (consumption <= slab.min) continue;
      
      const unitsInSlab = Math.min(
        consumption > slab.max ? slab.max - slab.min : consumption - slab.min,
        slab.max - slab.min
      );
      
      if (unitsInSlab > 0) {
        energyCharges += unitsInSlab * slab.rate;
      }
    }
    
    // Calculate fixed charges
    const fixedChargeRates = fixedCharges[type];
    let fixedCharge = 0;
    
    for (const rate of fixedChargeRates) {
      if (consumption <= rate.max) {
        fixedCharge = rate.charge;
        break;
      }
    }
    
    // Calculate electricity duty (0.06 paise per unit)
    const electricityDuty = consumption * 0.06;
    
    // Customer charges
    let customerCharge = 0;
    if (type === 'domestic' && consumption > 400) {
      customerCharge = 160;
    } else if (type === 'commercial') {
      customerCharge = 140;
    }
    
    // Total bill
    return energyCharges + fixedCharge + electricityDuty + customerCharge;
  };

  const calculateSolarSystem = () => {
    const dailyConsumption = monthlyConsumption / 30;
    const requiredSystemSize = dailyConsumption / constants.kwhPerKwPerDay;
    const annualGeneration = requiredSystemSize * constants.kwhPerKwPerDay * 365;
    const systemCost = requiredSystemSize * constants.systemCostPerKw;
    
    // Calculate subsidy based on system size
    const subsidyAmount = calculateSubsidy(requiredSystemSize);
    const systemCostAfterSubsidy = systemCost - subsidyAmount;
    
    const areaRequiredSqFt = requiredSystemSize * constants.panelSizeInSqFt;
    const areaRequiredSqM = requiredSystemSize * constants.panelSizeInSqM;
    const treesAdded = requiredSystemSize * constants.treesPerKw;
    const monthlyBill = calculateElectricityBill(monthlyConsumption, consumerType);
    const yearlyBill = monthlyBill * 12;
    const breakEvenYears = systemCostAfterSubsidy / yearlyBill;
    
    return {
      monthlyBill,
      yearlyBill,
      systemSizeKw: requiredSystemSize,
      annualGeneration,
      systemCost,
      subsidyAmount,
      systemCostAfterSubsidy,
      areaRequiredSqFt,
      areaRequiredSqM,
      treesAdded,
      breakEvenYears
    };
  };

  const handleCalculate = () => {
    const results = calculateSolarSystem();
    setResults(results);
    setShowResults(true);
  };

  const handleTypeChange = (event) => {
    setConsumerType(event.target.value);
  };

  const handleConsumptionChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    setMonthlyConsumption(value);
  };

  return (
    <>
       <DefaultNavbar
              routes={routes}
              transparent
              light
            />
      
      {/* Hero Section */}
      <MKBox
        minHeight="60vh"
        width="100%"
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${contactBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={8} textAlign="center">
            <MKTypography
              variant="h1"
              color="white"
              mb={2}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Solar Calculator
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} px={6}>
              Calculate your solar potential and savings with updated Tamil Nadu rates
            </MKTypography>
          </Grid>
        </Grid>
      </MKBox>

      <MKBox component="section" py={12}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={10} lg={8}>
            <Card sx={{ overflow: "hidden", borderRadius: "xl" }}>
              <MKBox p={4}>
                <MKTypography variant="h3" mb={3} textAlign="center">
                  Calculate Your Solar Needs
                </MKTypography>
                
                <Grid container spacing={4}>
                  {/* Input Form */}
                  <Grid item xs={12} md={6}>
                    <MKBox>
                      <MKTypography variant="h5" mb={2}>
                        Input Details
                      </MKTypography>
                      
                      <FormControl fullWidth sx={{ mb: 3 }}>
                        <InputLabel id="consumer-type-label">Consumer Type</InputLabel>
                        <Select
                          labelId="consumer-type-label"
                          value={consumerType}
                          label="Consumer Type"
                          onChange={handleTypeChange}
                          sx={{ height: "56px" }}
                        >
                          <MenuItem value="domestic">Residential</MenuItem>
                          <MenuItem value="commercial">Commercial</MenuItem>
                        </Select>
                      </FormControl>

                      <MKBox mb={4}>
                        <TextField
                          fullWidth
                          label="Monthly Consumption"
                          type="number"
                          value={monthlyConsumption}
                          onChange={handleConsumptionChange}
                          InputProps={{
                            endAdornment: <InputAdornment position="end">kWh</InputAdornment>,
                          }}
                          sx={{ mb: 2 }}
                        />
                        <MKTypography variant="body2" color="text" fontStyle="italic">
                          Enter your average monthly electricity consumption
                        </MKTypography>
                      </MKBox>

                      <MKBox textAlign="center">
                        <MKButton
                          variant="gradient"
                          color="info"
                          onClick={handleCalculate}
                          size="large"
                          fullWidth
                          sx={{ height: "56px" }}
                        >
                          Calculate Solar Potential
                        </MKButton>
                      </MKBox>
                    </MKBox>
                  </Grid>

                  {/* Results Section */}
                  <Grid item xs={12} md={6}>
                    <MKBox>
                      <MKTypography variant="h5" mb={2}>
                        Your Solar Results
                      </MKTypography>
                      
                      {showResults && results ? (
                        <Box>
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <MKBox bgColor="#f8f9fa" p={2} borderRadius="lg" height="100%">
                                <MKTypography variant="overline" color="text" fontWeight="bold">
                                  Current Monthly Bill
                                </MKTypography>
                                <MKTypography variant="h4" color="info">
                                  ₹{Math.round(results.monthlyBill).toLocaleString()}
                                </MKTypography>
                              </MKBox>
                            </Grid>
                            <Grid item xs={6}>
                              <MKBox bgColor="#f8f9fa" p={2} borderRadius="lg" height="100%">
                                <MKTypography variant="overline" color="text" fontWeight="bold">
                                  System Size
                                </MKTypography>
                                <MKTypography variant="h4" color="info">
                                  {results.systemSizeKw.toFixed(1)} kW
                                </MKTypography>
                              </MKBox>
                            </Grid>

                            <Grid item xs={12}>
                              <Divider />
                              <MKTypography variant="subtitle2" mt={2} mb={1}>
                                Financial Details
                              </MKTypography>
                            </Grid>

                            <Grid item xs={6}>
                              <MKTypography variant="body2" color="text">
                                System Cost:
                              </MKTypography>
                              <MKTypography variant="body1" fontWeight="bold">
                                ₹{Math.round(results.systemCost).toLocaleString()}
                              </MKTypography>
                            </Grid>
                            <Grid item xs={6}>
                              <MKTypography variant="body2" color="text">
                                Subsidy Amount:
                              </MKTypography>
                              <MKTypography variant="body1" fontWeight="bold" color="success">
                                ₹{Math.round(results.subsidyAmount).toLocaleString()}
                              </MKTypography>
                            </Grid>
                            <Grid item xs={12}>
                              <MKTypography variant="body2" color="text">
                                Final Cost After Subsidy:
                              </MKTypography>
                              <MKTypography variant="h6" fontWeight="bold" color="success">
                                ₹{Math.round(results.systemCostAfterSubsidy).toLocaleString()}
                              </MKTypography>
                            </Grid>
                            <Grid item xs={6}>
                              <MKTypography variant="body2" color="text">
                                Yearly Savings:
                              </MKTypography>
                              <MKTypography variant="body1" fontWeight="bold" color="success">
                                ₹{Math.round(results.yearlyBill).toLocaleString()}
                              </MKTypography>
                            </Grid>
                            <Grid item xs={6}>
                              <MKTypography variant="body2" color="text">
                                Break Even:
                              </MKTypography>
                              <MKTypography variant="body1" fontWeight="bold">
                                {results.breakEvenYears.toFixed(1)} years
                              </MKTypography>
                            </Grid>

                            <Grid item xs={12}>
                              <Divider />
                              <MKTypography variant="subtitle2" mt={2} mb={1}>
                                System Details
                              </MKTypography>
                            </Grid>

                            <Grid item xs={6}>
                              <MKTypography variant="body2" color="text">
                                Annual Generation:
                              </MKTypography>
                              <MKTypography variant="body1">
                                {Math.round(results.annualGeneration).toLocaleString()} kWh
                              </MKTypography>
                            </Grid>
                            <Grid item xs={6}>
                              <MKTypography variant="body2" color="text">
                                Area Required:
                              </MKTypography>
                              <MKTypography variant="body1">
                                {Math.round(results.areaRequiredSqFt)} sq ft
                              </MKTypography>
                            </Grid>
                            <Grid item xs={12}>
                              <MKBox 
                                bgColor="#e8f5e9" 
                                p={2} 
                                borderRadius="lg" 
                                mt={1} 
                                textAlign="center"
                              >
                                <MKTypography variant="body2" color="success" fontWeight="bold">
                                  Environmental Impact
                                </MKTypography>
                                <MKTypography variant="h5" color="success">
                                  {Math.round(results.treesAdded)} Trees Saved Over System Life
                                </MKTypography>
                              </MKBox>
                            </Grid>
                          </Grid>
                        </Box>
                      ) : (
                        <MKBox 
                          display="flex" 
                          alignItems="center" 
                          justifyContent="center" 
                          height="100%" 
                          minHeight="260px"
                          sx={{ opacity: 0.6 }}
                        >
                          <MKTypography variant="body1" color="text" textAlign="center">
                            Fill in your details and click calculate<br/>to see your solar potential
                          </MKTypography>
                        </MKBox>
                      )}
                    </MKBox>
                  </Grid>
                </Grid>
              </MKBox>
            </Card>

            <MKBox textAlign="center" mt={4}>
              <MKTypography variant="body2" color="text">
                * Calculations are estimates based on updated Tamil Nadu electricity rates and average solar conditions.
              </MKTypography>
              <MKTypography variant="body2" color="text">
                * Subsidy rates: 1kW (₹30,000), 2kW (₹60,000), 3kW (₹78,000).
              </MKTypography>
              <MKTypography variant="body2" color="text">
                * Bill includes energy charges, fixed charges, electricity duty (0.06₹/unit), and customer charges.
              </MKTypography>
              <MKTypography variant="body2" color="text">
                * Contact us for a detailed assessment and customized solutions.
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </MKBox>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default SolarCalculator;