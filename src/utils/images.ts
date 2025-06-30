const GREEN_HUE = 120;

export const generateTestImage = (size: number) => {
  const images = [];
  const oddSize = size % 2 === 0 ? size + 1 : size;
  const imgCount = Math.ceil(oddSize / 2);
  let currentIndex = Math.floor(oddSize / 2);
  let currentSize = 1;

  for (let i = 0; i < imgCount; i++) {
    const rows = [];

    for (let y = 0; y < oddSize; y++) {
      const lights = [];

      for (let x = 0; x < oddSize; x++) {
        const horizontal =
          (y === currentIndex || y === currentIndex + currentSize - 1) &&
          x >= currentIndex &&
          x < currentIndex + currentSize;
        const vertical =
          (x === currentIndex || x === currentIndex + currentSize - 1) &&
          y >= currentIndex &&
          y < currentIndex + currentSize;

        lights.push(horizontal || vertical ? GREEN_HUE : null);
      }
      rows.push(lights);
    }

    currentIndex--;
    currentSize += 2;
    images.push(rows);
  }

  return images;
};
