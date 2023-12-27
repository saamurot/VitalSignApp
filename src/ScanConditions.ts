import { GetHealthStage, ScanConditions, VideoFrameProcessedEvent } from "ts-vital-sign-camera"

function text(status: boolean | undefined) {
  if (status === undefined) {
    return undefined
  } else {
    return status ? 'OK' : 'Failed'
  }
}

export function allOK(conditions: ScanConditions | undefined) {
  if (conditions === undefined) return false
  if (!conditions.lighting) return false
  if (!conditions.centered) return false
  if (!conditions.movement) return false
  if (!conditions.distance) return false
  if (!conditions.frameRate) return false
  if (!conditions.serverReady) return false
  return true
}

export function updateScanConditions(scanConditionsElement: Element, event: VideoFrameProcessedEvent) {

  if (event.healthResult?.stage === GetHealthStage.Idle) {
    scanConditionsElement.innerHTML = `
            <ul>
                <li>Lighting: <span id="lighting">${text(event.scanConditions?.lighting)}</span></li>
                <li>Centered: <span id="centered">${text(event.scanConditions?.centered)}</span></li>
                <li>Movement: <span id="movement">${text(event.scanConditions?.movement)}</span></li>
                <li>Distance: <span id="distance">${text(event.scanConditions?.distance)}</span></li>
                <li>Frame Rate: <span id="frameRate">${text(event.scanConditions?.frameRate)}</span></li>
                <li>Server Ready: <span id="serverReady">${text(event.scanConditions?.serverReady)}</span></li>
            </ul>
        `
  } else {
    scanConditionsElement.innerHTML = ''
  }
}