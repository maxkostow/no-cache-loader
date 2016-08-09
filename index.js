module.exports = function(source) {
    this.cacheable && this.cacheable();
    return source + "\n\n;delete require.cache[module.id];";
}
