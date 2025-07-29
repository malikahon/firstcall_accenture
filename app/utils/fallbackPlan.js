export function getFallbackPlan({ answers, selectedDisaster }) {
  const flags = {
    homeType: answers[0],
    householdSize: answers[1],
    hasChildren: answers[2] !== "No",
    hasElderly: answers[3] === "Elderly" || answers[3] === "Both",
    hasMobilityIssues: answers[3] === "Mobility-impaired" || answers[3] === "Both",
    needsMedicalEquipment: answers[4] !== "No",
    hasDisabilities: answers[5] !== "None",
    hasPets: answers[6] !== "None",
    usesMedication: answers[7] !== "No",
    needsTransport:
      answers[8] === "Ride from others" ||
      answers[8] === "Public transport" ||
      answers[8] === "No transport",
    lowAwareness:
      answers[9] === "A little" || answers[9] === "Not at all",
    noGoBag: answers[10] === "None" || answers[10] === "Plan to prepare",
  };

  switch (selectedDisaster) {
    case "Wildfire":
      if (flags.needsTransport) {
        return "🚨 WILDFIRE ALERT: Fires spread fast. If evacuation is happening now and you don’t have transport, contact local services or neighbors. Keep go-bag and pets ready near the door.";
      }
      if (flags.hasPets && flags.hasElderly) {
        return "🔥 WILDFIRE: Prioritize elderly and pet evacuation. Keep meds, ID, water, and pet carriers ready. Know at least two ways out of your area.";
      }
      return "🔥 WILDFIRE: Close windows, pack your bag, and be ready to leave instantly. Watch local alerts and don’t wait for a knock at your door.";

    case "Flood":
      if (flags.homeType === "Basement" || flags.homeType === "Mobile home") {
        return "🌊 FLOOD RISK: Your home type is high-risk. Move valuables and essentials to higher ground. Evacuate early if advised."
      }
      if (flags.needsTransport || flags.hasMobilityIssues) {
        return "🚨 FLOOD: Arrange transport NOW if you haven’t already. Rising water cuts off roads fast. Grab go-bag and head to high ground.";
      }
      return "🌊 FLOOD: Disconnect electronics. Move essentials upstairs. Stay alert for evacuation alerts and avoid driving in water.";

    case "Storm":
      if (flags.needsMedicalEquipment) {
        return "⛈️ STORM: Charge all devices and medical equipment now. Have flashlights, water, and backup meds in a safe interior room.";
      }
      if (flags.lowAwareness || flags.noGoBag) {
        return "⚡ STORM WARNING: Pack your emergency kit now. Include water, food, flashlight, first aid, and copies of important docs. Stay indoors and away from windows.";
      }
      return "🌩️ STORM: Secure outdoor items. Stay inside. Avoid flooded roads and watch for alerts.";

    case "Earthquake":
      if (flags.hasMobilityIssues) {
        return "🌎 EARTHQUAKE: Stay away from windows. If you can’t drop, cover, and hold, brace yourself and protect your head. Have emergency contacts pre-dialed.";
      }
      return "🌍 EARTHQUAKE: DROP under a sturdy table, COVER your head, HOLD ON until shaking stops. After, check for injuries and leave building if damaged.";

    case "Preparation":
      if (flags.noGoBag) {
        return "🧳 PREPARE NOW: Pack a go-bag with water, food, meds, documents, flashlight, and cash. Don’t wait until it’s too late.";
      }
      if (flags.lowAwareness) {
        return "🧠 EMERGENCY READINESS: Sign up for local alerts. Learn evacuation routes and shelter locations. Practice your plan with family members.";
      }
      return "✅ YOU’RE ON TRACK: Keep your go-bag updated, talk to your household about your emergency plan, and check supplies monthly.";

    default:
      return "⚠️ GENERAL SAFETY: Have a bag ready, keep contacts updated, and know your nearest shelter or safe area. Stay calm and take action early.";
  }
}
