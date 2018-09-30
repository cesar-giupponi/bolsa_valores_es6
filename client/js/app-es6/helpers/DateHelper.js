class DateHelper {

    constructor() {
        throw new Error('This class cannot be instantiated')
    }

    static dateToText(date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    static textToDate(texto) {
        if(/\d{4}-\d{2}-\d{2}/.test(texto)) 
            return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
        throw new Error('Format incorrect, must be in aaaa-mm-dd');
    }
}