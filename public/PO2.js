var PO_Module_Factory = function () {
  var PO = {
    name: 'PO',
    typeInfos: [{
        localName: 'Rows',
        typeName: null,
        propertyInfos: [{
            name: 'row',
            required: true,
            elementName: {
              localPart: 'row'
            },
            typeInfo: '.Row'
          }]
      }, {
        localName: 'Row',
        typeName: null,
        propertyInfos: [{
            name: 'cell',
            required: true,
            collection: true,
            elementName: {
              localPart: 'cell'
            }
          }, {
            name: 'row',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'row'
            },
            typeInfo: '.Row'
          }, {
            name: 'id',
            required: true,
            typeInfo: 'Double',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'open',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'open'
            },
            type: 'attribute'
          }]
      }],
    elementInfos: [{
        elementName: {
          localPart: 'rows'
        },
        typeInfo: '.Rows'
      }, {
        elementName: {
          localPart: 'row'
        },
        typeInfo: '.Row'
      }, {
        elementName: {
          localPart: 'cell'
        }
      }]
  };
  return {
    PO: PO
  };
};
if (typeof define === 'function' && define.amd) {
  define([], PO_Module_Factory);
}
else {
  var PO_Module = PO_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.PO = PO_Module.PO;
  }
  else {
    var PO = PO_Module.PO;
  }
}