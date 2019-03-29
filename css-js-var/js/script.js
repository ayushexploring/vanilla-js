// querySelecterAll returns a NodeList, not Array
const inputs = document.querySelectorAll('.controls input');

function handleInputs() {
    // dataset extracts the 'data-' attributes(if specified) from our element. We're doing this to extract the'px' string.
    // Here we are extracting the 'sizing' dataset from 'this' pointer which contains our element;
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleInputs));
inputs.forEach(input => input.addEventListener('mousemove', handleInputs));