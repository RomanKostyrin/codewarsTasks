function dequeueCount(queues) {
  return queues.reduce((acc, queue, i) => {
    if (!queue.length) return acc;
    while (!queue.every((el) => el === i)) {
      queue.pop();
      acc++;
    }
    return acc;
  }, 0);
}
