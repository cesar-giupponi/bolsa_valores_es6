"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bind = function Bind(modelo, view) {
    _classCallCheck(this, Bind);

    for (var _len = arguments.length, propriedades = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        propriedades[_key - 2] = arguments[_key];
    }

    var proxy = ProxyFactory.create(modelo, propriedades, function (modelo) {
        view.update(modelo);
    });
    view.update(modelo);
    return proxy;
};
//# sourceMappingURL=Bind.js.map