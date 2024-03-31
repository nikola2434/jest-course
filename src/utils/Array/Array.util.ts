export function move<T>(array: T[], oldIndex: number, newIndex: number) {
  const len = array.length;

  if (newIndex >= len || oldIndex >= len) return;

  if (oldIndex < 0) oldIndex += len;
  if (newIndex < 0) newIndex += len;

  if (oldIndex < newIndex) {
    var move = array[oldIndex];
    for (var i = oldIndex; i < newIndex; i++) array[i] = array[i + 1];
    array[i] = move;
  } else {
    var move = array[oldIndex];
    for (var i = oldIndex; i > newIndex; i--) array[i] = array[i - 1];
    array[i] = move;
  }
  return array;
}

export function remove<T>(array: T[], item: T) {
  const i = array.indexOf(item);
  if (i !== -1) {
    array.splice(i, 1);
    return true;
  }
  return false;
}
