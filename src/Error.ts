import { VideoFrameProcessedEvent } from "ts-vital-sign-camera";
var error:any;

export function updateError(errorElement: HTMLElement, event: VideoFrameProcessedEvent) {

    if (event.healthResult?.error !== undefined) {
        error = event.healthResult?.error
    }

    if (error) {
        errorElement.innerHTML = `${error}`
        errorElement.style.display = 'inline-block'
    } else {
        errorElement.style.display = 'none'
    }
}

export function clearError(errorElement: Element) {
    error = undefined
    errorElement.innerHTML = ``
}