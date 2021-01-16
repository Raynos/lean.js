function strlen(ptr) {
  ptr = ptr|0;
  var curr = 0;
  curr = ptr;
  while ((MEM8[curr>>0]|0) != 0) {
    curr = (curr + 1)|0;
  }
  return (curr - ptr)|0;
}
