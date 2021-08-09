export function useTimer(fn, duration = 2000) {
  let timer;
  function startTimer() {
    if (duration > 0) {
      timer = setTimeout(fn, duration);
    }
  }
  function clearTimer() {
    clearTimer(timer);
  }
  return {
    startTimer,
    clearTimer
  };
}