module.exports = function(value, type) {
    this.value = value;
    this.message = value + " - The value has a type other than an " + type;
    this.toString = function() {
        return this.value + this.message
    };
}