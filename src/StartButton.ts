import { GetHealthStage, VideoFrameProcessedEvent } from "ts-vital-sign-camera";
import { allOK } from "./ScanConditions";

export function updateStartButton(startButton: Element, event: VideoFrameProcessedEvent) {

  let enabled = false
  let hidden = false

  switch (event.healthResult?.stage) {
    case GetHealthStage.Idle:
      enabled = allOK(event.scanConditions)
      hidden = false
      break;
    default:
      hidden = true
      enabled = false
      break;
  }

  enabled ?
    startButton.removeAttribute('disabled') :
    startButton.setAttribute('disabled', '')

  hidden ?
    startButton.setAttribute('hidden', '') :
    startButton.removeAttribute('hidden')

}