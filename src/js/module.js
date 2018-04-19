export default function() {
    const testString = 'JS transpiling works';
    const paragraph = document.querySelector('.paragraph');

    const ourFunction = () => {
        if (paragraph) {
            paragraph.textContent = testString;
        }
    };

    ourFunction();
}
