module.exports = function(value) {
    this.value = value;
    this.message = value + " - The assigned value is not valid with the format UUID.";
    this.toString = function() {
        return this.value + this.message
    };
}