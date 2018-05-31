export default function touchEvents () {
  function startup () {
    window.addEventListener('touchstart', handleStart, false)
    window.addEventListener('touchend', handleEnd, false)
    window.addEventListener('touchcancel', handleCancel, false)
    window.addEventListener('touchmove', handleMove, false)
    console.log('initialized.')
  }
  startup()
  // var ongoingTouches = []

  function handleStart (event) {
    event.preventDefault()
    console.log('touchstart.')
  }

  function handleMove (event) {
    event.preventDefault()
    console.log('handlemove.')
  }

  function handleEnd (event) {
    event.preventDefault()
    console.log('handleEnd.')
  }

  function handleCancel (event) {
    event.preventDefault()
    console.log('handleCancel.')
  }
}
