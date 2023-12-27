import { GetHealthStage, VideoFrameProcessedEvent } from "ts-vital-sign-camera";

export function updateStatus(statusElement: Element, event: VideoFrameProcessedEvent) {
  let innerHTML = ''
  switch (event.healthResult?.stage) {
    case GetHealthStage.Idle:
      innerHTML = ''
      break
    case GetHealthStage.WaitingData:
      innerHTML = 'Loading...'
      break
    case GetHealthStage.CollectingData:
      const countDown = event.healthResult?.remainingTime || 0.0
      innerHTML = `<h3><b>Scanning...${countDown.toFixed(0)}</b></h3>`
      break
    case GetHealthStage.AnalyzingData:
      innerHTML = `<h3><b>Analyzing...</b></h3>`
      break
  }
  statusElement.innerHTML = innerHTML
}