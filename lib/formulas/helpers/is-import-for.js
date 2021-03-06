var types = require('recast').types.namedTypes;

module.exports = function isImportFor(module, node) {
  return types.ModuleSpecifier.check(node.source) &&
    node.source.value === module;
};
