const GREEN_HUE = 120;

export const generateTestImage = (size: number, color = GREEN_HUE) => {
  const images = [];
  const oddSize = size % 2 === 0 ? size + 1 : size;
  const imgCount = Math.ceil(oddSize / 2);
  const center = Math.floor(oddSize / 2);
  let squareSize = 1;

  for (let i = 0; i < imgCount; i++) {
    const rows = [];
    const startIndex = center - i;

    for (let y = 0; y < oddSize; y++) {
      const lights = [];

      for (let x = 0; x < oddSize; x++) {
        const horizontal =
          (y === startIndex || y === startIndex + squareSize - 1) &&
          x >= startIndex &&
          x < startIndex + squareSize;
        const vertical =
          (x === startIndex || x === startIndex + squareSize - 1) &&
          y >= startIndex &&
          y < startIndex + squareSize;

        lights.push(horizontal || vertical ? color : null);
      }
      rows.push(lights);
    }

    squareSize += 2;
    images.push(rows);
  }

  return images;
};
