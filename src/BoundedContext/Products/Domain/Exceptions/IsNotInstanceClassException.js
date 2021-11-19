module.exports = function(value, type) {
    this.value = value;
    this.message = `${value} - The value is not an instance of ${type} class`;
    this.toString = function() {
        return this.value + this.message
    };
}