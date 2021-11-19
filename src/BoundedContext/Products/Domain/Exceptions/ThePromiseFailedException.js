module.exports = function(value) {
    this.value = value;
    this.message = `Error from server - ${value}`;
    this.toString = function() {
        return this.value + this.message
    };
}