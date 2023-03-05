export let state = false;

export function changeState() {
  if (state === true) state = false;
  else state = true;
}
