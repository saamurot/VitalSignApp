import { createVitalSignCamera, Gender, ServerId } from 'ts-vital-sign-camera'
import { clearHeartRate, updateHeartRate } from './HeartRate';
import { updateScanConditions } from './ScanConditions';
import { updateStartButton } from './StartButton';
import { updateStatus } from './Status';
import { clearError, updateError } from './Error';

/* User Info */
const userInfo = {
  age: 30,
  gender: Gender.Male,
  userId: '47e08472-5cce-430f-aafe-86342b3a553b',
}

/* API Config */
const config = {
  serverId: ServerId.AwsProdEnterprise,
  apiKey: "vzmT5qoRocKUt3TVKe4203C4j2fb3BMpNsfgh200",
}

window.onload = () => {

  /* DOM elements */
  const startButton = document.querySelector('#startButton')!
  const scanConditions = document.querySelector('#scanConditions')!
  const status = document.querySelector('#status')!
  const heartRate = document.querySelector('#heartRate')!
  const video = document.querySelector('video')!
  const error = document.querySelector('#error') as HTMLElement

  /* Create and init Vital Sign Camera */
  const cam = createVitalSignCamera({ isActive: true, config, userInfo })
  cam.bind(video)

  /* Handles the Vital Sign Camera events */
  cam.onVideoFrameProcessed = (event) => {
    updateScanConditions(scanConditions, event)
    updateStartButton(startButton, event)
    updateStatus(status, event)
    updateHeartRate(heartRate, event)
    updateError(error, event)
  }

  /* Start scanning if start button is pressed */
  startButton.addEventListener('click', () => {
    clearHeartRate(heartRate)
    clearError(error)
    cam.startScanning()
  })
}