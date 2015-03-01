exports.isAsync = function () {
    return this.tag === 'async' ||
           this.customTags &&
           this.customTags.filter(function (item) {
               return item.tag === 'async'
           }).length > 0;
};
