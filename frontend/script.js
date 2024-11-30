// Calculate footprint
document.getElementById('footprintForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  // Collect user input
  const transportDistance = parseFloat(document.getElementById('transport').value);
  const energyConsumption = parseFloat(document.getElementById('energy').value);
  const wasteAmount = parseFloat(document.getElementById('waste').value);

  // Emission factors (example values)
  const emissionFactors = {
    transport: 0.21, // kg CO2 per km (for a car)
    energy: 0.52, // kg CO2 per kWh (electricity)
    waste: 0.25 // kg CO2 per kg of waste
  };

  // Calculate emissions
  const transportEmissions = transportDistance * emissionFactors.transport;
  const energyEmissions = energyConsumption * emissionFactors.energy;
  const wasteEmissions = wasteAmount * emissionFactors.waste;

  // Calculate total footprint
  const totalFootprint = transportEmissions + energyEmissions + wasteEmissions;

  // Display result
  document.getElementById('footprintResult').textContent = `Your total carbon footprint is: ${totalFootprint.toFixed(2)} kg CO2e`;
});
