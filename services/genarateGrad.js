

const randColor = () => {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgba(${r},${g},${b},0.7)`;
    
    return rgb;
}

export const generateGrad = () => {
    let color1 = randColor();
    let color2 = randColor();
    let color3 = randColor();

    let bg = `linear-gradient(45deg, ${color1}, ${color2} ,${color3})`;
    return bg;

}