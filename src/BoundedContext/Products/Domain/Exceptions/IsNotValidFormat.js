module.exports = function(value, type) {
    this.value = value;
    this.message = `${value} - The value does not conform to the format!`;
    this.toString = function() {
        return this.value + this.message
    };
}