function parse(string) {
  const dummy = new Node();
  string.split(" -> ").reduce((acc, el) => {
    if (el === "null") return acc;
    acc.next = new Node(+el);
    return acc.next;
  }, dummy);
  return dummy.next;
}
