class ProxyFactory {

    static create(objeto, propriedades, acao) {
        return new Proxy(objeto, {
            get(target, property, receiver) {
                if (propriedades.includes(property) && ProxyFactory._ehFuncao(target[property]) ) {
                    return function () {
                        Reflect.apply(target[property], target, arguments);
                        return acao(target);
                    }
                }
                return Reflect.get(target, property, receiver);
            },

            set(target, property, value, receiver){
                if(propriedades.includes(property)){
                    target[property] = value;
                    acao(target);
                }
                return Reflect.set(target, property, value, receiver);
            }
        });
    }

    static _ehFuncao(funcao){
        return typeof (funcao) == typeof (Function)
    }
}