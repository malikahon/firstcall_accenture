export function getFallbackPlan({ answers, selectedDisaster }) {
  const flags = {
    homeType: answers[0], // "House", "Low-rise", "High-rise", "Mobile home"
    householdSize: answers[1], // "1", "2", "3–4", "5+"
    hasChildren: answers[2] !== "No",
    childrenCount: answers[2],
    hasElderly: answers[3] === "Elderly" || answers[3] === "Both",
    hasMobilityIssues: answers[3] === "Mobility-impaired" || answers[3] === "Both",
    needsMedicalEquipment: answers[4] !== "No",
    hasDisabilities: answers[5] !== "None",
    disabilityType: answers[5],
    hasPets: answers[6] !== "None",
    petType: answers[6],
    usesMedication: answers[7] !== "No",
    medType: answers[7],
    needsTransport:
      answers[8] === "Ride from others" ||
      answers[8] === "Public transport" ||
      answers[8] === "No transport",
    transportType: answers[8],
    lowAwareness:
      answers[9] === "A little" || answers[9] === "Not at all",
    noGoBag: answers[10] === "None" || answers[10] === "Plan to prepare",
  };

  const content = [];

  // Disaster title
  switch (selectedDisaster) {
    case "Wildfire":
      content.push("🔥 WILDFIRE SAFETY\nWildfires can move faster than you think. Don’t wait for officials to knock — evacuate early if in doubt.");
      break;
    case "Flood":
      content.push("🌊\nFLOOD SAFETY\nFloodwaters rise fast and can cut off roads. Take action early to avoid being trapped.");
      break;
    case "Storm":
      content.push("⛈️ STORM SAFETY\nStorms can knock out power, throw debris, and cause flash floods. Prepare to stay indoors and self-sufficient.");
      break;
    case "Earthquake":
      content.push("🌍 EARTHQUAKE SAFETY\nEarthquakes strike without warning. Your reactions in the first seconds matter most.");
      break;
    case "Preparation":
      content.push("🧠 EMERGENCY PREP\nA solid emergency plan gives you and your household the best chance to stay safe.");
      break;
  }

  // Q1 – Home type
  if (flags.homeType === "Mobile home") {
    content.push("You live in a mobile home, which is vulnerable in storms and floods. Identify the nearest solid shelter and plan to evacuate early.");
  } else if (flags.homeType === "High-rise apartment") {
    content.push("In a high-rise, power outages may disable elevators. Keep water stored and know your stairwells in case of evacuation.");
  } else if (flags.homeType === "Low-rise apartment") {
    content.push("In low-rise apartments, exits can get crowded in a disaster. Know multiple escape routes and keep keys and essentials near the door.");
  }

  // Q2 – Household size
  if (flags.householdSize === "5+") {
    content.push("Large households need extra coordination. Assign responsibilities for pets, children, or elderly to specific people ahead of time.");
  }

  // Q3 – Children
  if (flags.hasChildren) {
    content.push("You have young children. Include child-sized masks, comfort items, and snacks in your emergency kit. Talk to them about your plan in age-appropriate ways.");
  }

  // Q4 – Elderly / mobility-impaired
  if (flags.hasElderly) {
    content.push("You live with an elderly person. Make sure you have their medications, mobility aids, and medical info ready in your go-bag.");
  }
  if (flags.hasMobilityIssues) {
    content.push("Someone in your home has limited mobility. Assign someone to assist during evacuation, and practice navigating exits ahead of time.");
  }

  // Q5 – Medical equipment
  if (flags.needsMedicalEquipment) {
    content.push("Medical equipment may fail during outages. Keep devices charged, know how long batteries last, and identify facilities with backup power.");
  }

  // Q6 – Disabilities
  if (flags.hasDisabilities) {
    switch (flags.disabilityType) {
      case "Hearing":
        content.push("If you or someone has hearing loss, set up visual emergency alerts on your phone and know how to communicate without sound.");
        break;
      case "Vision":
        content.push("If someone has vision impairments, pack large-print labels or braille instructions in your kit and create tactile markers for evacuation routes.");
        break;
      case "Cognitive":
        content.push("Cognitive disabilities may make emergencies more stressful. Use routines, visual guides, or checklists to help stay focused.");
        break;
    }
  }

  // Q7 – Pets or service animals
  if (flags.hasPets) {
    const petNote = flags.petType === "Service animal" ? 
      "Have documentation for your service animal and include their needs in your kit." : 
      "Pack carriers, pet food, and water. Not all shelters accept animals — research your options now.";
    content.push(petNote);
  }

  // Q8 – Medication
  if (flags.usesMedication) {
    const medNote = flags.medType === "Yes, refrigerated" ?
      "You need refrigerated medication. Keep an insulated case and ice packs in your go-bag, and identify shelters that support medical needs." :
      "Daily medication users should keep a 3-day supply in their go-bag, along with copies of prescriptions.";
    content.push(medNote);
  }

  // Q9 – Transport
  if (flags.needsTransport) {
    content.push("You may not be able to evacuate independently. Arrange a contact now — neighbor, family, or city service. Practice how you’ll get picked up or where to meet.");
  }

  // Q10 – Awareness
  if (flags.lowAwareness) {
    content.push("Boost your emergency readiness: sign up for local alerts, print a map with shelters, and go over your plan with your household.");
  }

  // Q11 – Go-bag
  if (flags.noGoBag) {
    content.push("You don’t have a complete go-bag yet. Pack essentials: water, food, flashlight, phone charger, meds, documents, and clothing. Keep it near your exit.");
  }

  // Disaster-specific final guidance
  switch (selectedDisaster) {
    case "Earthquake":
      content.push("During a quake, DROP to the ground, COVER your head and neck, and HOLD ON. Stay indoors unless there’s visible structural damage.");
      break;
    case "Wildfire":
      content.push("If evacuation is likely: close windows, wear N95 masks if available, and load your car early. Don’t wait for visible flames.");
      break;
    case "Flood":
      content.push("Avoid walking or driving through floodwater. If advised to evacuate, do so immediately. Keep electronics and essentials above ground level.");
      break;
    case "Storm":
      content.push("Before the storm: secure outdoor items, charge all devices, and stock up on water. Stay away from windows and avoid travel during high winds.");
      break;
    case "Preparation":
      content.push("Practice your plan regularly. Run drills with your household and check your go-bag every 3–6 months to update supplies.");
      break;
  }

  return content.join("\n\n");
}
