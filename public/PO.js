var PO_Module_Factory = function () {
  var PO = {
    name: 'PO',
    typeInfos: [{
        localName: 'PurchaseOrder',
        typeName: null,
        propertyInfos: [{
            name: 'shipTo',
            required: true,
            elementName: {
              localPart: 'shipTo'
            },
            typeInfo: '.ShipTo'
          }, {
            name: 'billTo',
            required: true,
            elementName: {
              localPart: 'billTo'
            },
            typeInfo: '.BillTo'
          }, {
            name: 'comment',
            required: true,
            elementName: {
              localPart: 'comment'
            }
          }, {
            name: 'items',
            required: true,
            elementName: {
              localPart: 'items'
            },
            typeInfo: '.Items'
          }, {
            name: 'orderDate',
            required: true,
            attributeName: {
              localPart: 'orderDate'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Item',
        typeName: null,
        propertyInfos: [{
            name: 'productName',
            required: true,
            elementName: {
              localPart: 'productName'
            }
          }, {
            name: 'quantity',
            required: true,
            elementName: {
              localPart: 'quantity'
            },
            typeInfo: 'Int'
          }, {
            name: 'usPrice',
            required: true,
            elementName: {
              localPart: 'USPrice'
            },
            typeInfo: 'Double'
          }, {
            name: 'shipDate',
            required: true,
            elementName: {
              localPart: 'shipDate'
            }
          }, {
            name: 'comment',
            required: true,
            elementName: {
              localPart: 'comment'
            }
          }, {
            name: 'partNum',
            required: true,
            attributeName: {
              localPart: 'partNum'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Items',
        typeName: null,
        propertyInfos: [{
            name: 'item',
            required: true,
            collection: true,
            elementName: {
              localPart: 'item'
            },
            typeInfo: '.Item'
          }]
      }, {
        localName: 'ShipTo',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'name'
            }
          }, {
            name: 'street',
            required: true,
            elementName: {
              localPart: 'street'
            }
          }, {
            name: 'city',
            required: true,
            elementName: {
              localPart: 'city'
            }
          }, {
            name: 'state',
            required: true,
            elementName: {
              localPart: 'state'
            }
          }, {
            name: 'zip',
            required: true,
            elementName: {
              localPart: 'zip'
            },
            typeInfo: 'Int'
          }, {
            name: 'country',
            required: true,
            attributeName: {
              localPart: 'country'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BillTo',
        typeName: null,
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'name'
            }
          }, {
            name: 'street',
            required: true,
            elementName: {
              localPart: 'street'
            }
          }, {
            name: 'city',
            required: true,
            elementName: {
              localPart: 'city'
            }
          }, {
            name: 'state',
            required: true,
            elementName: {
              localPart: 'state'
            }
          }, {
            name: 'zip',
            required: true,
            elementName: {
              localPart: 'zip'
            },
            typeInfo: 'Int'
          }, {
            name: 'country',
            required: true,
            attributeName: {
              localPart: 'country'
            },
            type: 'attribute'
          }]
      }],
    elementInfos: [{
        elementName: {
          localPart: 'productName'
        }
      }, {
        elementName: {
          localPart: 'USPrice'
        },
        typeInfo: 'Double'
      }, {
        elementName: {
          localPart: 'street'
        }
      }, {
        elementName: {
          localPart: 'item'
        },
        typeInfo: '.Item'
      }, {
        elementName: {
          localPart: 'items'
        },
        typeInfo: '.Items'
      }, {
        elementName: {
          localPart: 'name'
        }
      }, {
        elementName: {
          localPart: 'city'
        }
      }, {
        elementName: {
          localPart: 'purchaseOrder'
        },
        typeInfo: '.PurchaseOrder'
      }, {
        elementName: {
          localPart: 'quantity'
        },
        typeInfo: 'Int'
      }, {
        elementName: {
          localPart: 'shipDate'
        }
      }, {
        elementName: {
          localPart: 'billTo'
        },
        typeInfo: '.BillTo'
      }, {
        elementName: {
          localPart: 'state'
        }
      }, {
        elementName: {
          localPart: 'comment'
        }
      }, {
        elementName: {
          localPart: 'shipTo'
        },
        typeInfo: '.ShipTo'
      }, {
        elementName: {
          localPart: 'zip'
        },
        typeInfo: 'Int'
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