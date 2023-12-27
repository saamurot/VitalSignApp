import { VideoFrameProcessedEvent } from "ts-vital-sign-camera"

export function updateHeartRate(heartRateElement: Element, event: VideoFrameProcessedEvent) {


  const startButton = document.querySelector('#startButton')!
  const scanConditions = document.querySelector('#scanConditions')!
  const video = document.querySelector('video')!

  const heartRate = event?.healthResult?.health?.vitalSigns.heartRate;
  const vitalSigns = event?.healthResult?.health?.vitalSigns;
  const holisticHealth = event?.healthResult?.health?.holisticHealth;
  const cardiovascularRisks = event?.healthResult?.health?.risks.cardiovascularRisks;
  const covidRisk = event?.healthResult?.health?.risks.covidRisk
  if (heartRate == undefined) {
    return
  }
  debugger
  if (heartRate) {
    // heartRateElement.innerHTML = `<p>Heart Rate: ${heartRate.toFixed(1)}</p>`
    heartRateElement.innerHTML = `<table style=\"width: 100%;\">\r\n<tr style=\"display: flex;\r\nflex-wrap: nowrap;\r\njustify-content: space-between;\"><td style=\"text-align: center;\"><label><b>Vital Signs</b></label><hr><table><tr><td><b>Heart Rate</b></td><td>${vitalSigns.heartRate.toFixed(2)}</td></tr><tr><td><b>SPO2</b></td><td>${vitalSigns.spo2.toFixed(2)}</td></tr><tr><td><b>IBI</b></td><td>${vitalSigns.ibi.toFixed(2)}</td></tr><tr><td><b>Respiratory Rate</b></td><td>${vitalSigns.respiratoryRate.toFixed(2)}</td></tr><tr><td><b>Stress</b></td><td>${vitalSigns.stress.toFixed(2)}</td></tr><tr><td><b>Stress Score</b></td><td>${vitalSigns.stressScore.toFixed(2)}</td></tr><tr><td><b>HRV SDNN</b></td><td>${vitalSigns.hrvSdnn.toFixed(2)}</td></tr><tr><td><b>HRV RMSSD</b></td><td>${vitalSigns.hrvRmssd.toFixed(2)}</td></tr><tr><td><b>Blood Pressure</b></td><td>${vitalSigns.bloodPressure}</td></tr><tr><td><b>Blood Pressure Systolic</b></td><td>${vitalSigns.bloodPressureSystolic.toFixed(2)}</td></tr><tr><td><b>Blood Pressure Diastolic</b></td><td>${vitalSigns.bloodPressureDiastolic.toFixed(2)}</td></tr></table></td><td style=\"text-align: center;\"><label><b>Holistic Health</b></label><hr><table><tr><td><b>General Wellness</b></td><td>${holisticHealth.generalWellness.toFixed(2)}</td></tr><tr><td><b>Cardiac Workload</b></td><td>${holisticHealth.cardiacWorkload.toFixed(2)}</td></tr><tr><td><b>Pulse Respiratory Quotient</b></td><td>${holisticHealth.pulseRespiratoryQuotient.toFixed(2)}</td></tr></table></td><td style=\"text-align: center;\"><label><b>Risks</b></label><hr><table><tr><td><b>General Risk</b></td><td>${cardiovascularRisks.generalRisk.toFixed(2)}</td></tr><tr><td><b>Coronary Heart Disease</b></td><td>${cardiovascularRisks.coronaryHeartDisease.toFixed(2)}</td></tr><tr><td><b>Congestive Heart Failure</b></td><td>${cardiovascularRisks.congestiveHeartFailure.toFixed(2)}</td></tr><tr><td><b>Intermittent Claudication</b></td><td>${cardiovascularRisks.intermittentClaudication.toFixed(2)}</td></tr><tr><td><b>Stroke</b></td><td>${cardiovascularRisks.stroke.toFixed(2)}</td></tr><tr><td><b>Covid Risk</b></td><td>${covidRisk.covidRisk.toFixed(2)}</td></tr></table></td>\r\n</tr>\r\n</table>`;


    // <br><label><b>Vital Signs</b></label><table><tr><td>health</td><td>${JSON.stringify(event.healthResult?.health)}</td></tr><tr><td>vitalSigns</td><td>${JSON.stringify(event.healthResult?.health.vitalSigns)}</td></tr><tr><td>holisticHealth</td><td>${JSON.stringify(event.healthResult?.health.holisticHealth)}</td></tr><tr><td>cardiovascularRisks</td><td>${JSON.stringify(event.healthResult?.health.risks.cardiovascularRisks)}</td></tr></tr><tr><td>covidRisk</td><td>${JSON.stringify(event.healthResult?.health.risks.covidRisk)}</td></tr></table>


  } else {
    clearHeartRate(heartRateElement)
  }
}

export function clearHeartRate(heartRateElement: Element) {
  heartRateElement.innerHTML = ''
}