let animals = ["ramesh", "ashwin", "himanshu", "vanashree", "waikar"];

animals.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});

document.write(animals);
