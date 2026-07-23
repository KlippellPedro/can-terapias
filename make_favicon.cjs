const fs = require('fs');
const path = require('path');

const imgPath = path.join(__dirname, 'public', 'img', 'fotos', 'logo-oficial.jpg');
const svgPath = path.join(__dirname, 'public', 'favicon.svg');

// Lendo a imagem
const imageBuf = fs.readFileSync(imgPath);
const base64Image = imageBuf.toString('base64');

// x e y negativos e width/height maiores criam um efeito de zoom-in para o centro
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
  <defs>
    <clipPath id="circleView">
      <circle cx="250" cy="250" r="250" />
    </clipPath>
  </defs>
  <image x="-450" y="-450" width="1400" height="1400" href="data:image/jpeg;base64,${base64Image}" clip-path="url(#circleView)" preserveAspectRatio="xMidYMid slice" />
</svg>`;

fs.writeFileSync(svgPath, svgContent);
console.log('Favicon SVG circular com ZOOM gerado com sucesso!');
