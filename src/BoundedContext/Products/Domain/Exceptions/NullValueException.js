module.exports = function(value) {
    this.value = value;
    this.message = value + " - The assigned value is empty.";
    this.toString = function() {
        return this.value + this.message
    };
}