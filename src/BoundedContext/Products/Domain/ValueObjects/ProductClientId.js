"use strict"

const _private = new WeakMap();
const NullValueException = require('../Exceptions/NullValueException');
const UnexpectedTypeValueException = require('../Exceptions/UnexpectedTypeValueException');
const IsNotValidUuidException = require('../Exceptions/IsNotValidUuidException');

class ProductClientId {
    /**
     * @param  {Number} value
     */
    constructor(value) {
        this.ensureIsNotEmptyValue(value);
        this.ensureIsStringValue(value);
        this.ensureIsValidUuid(value);

        const properties = { value: value };
        _private.set(this, { properties });
    }


    ensureIsValidUuid(value) {
        if (value.match('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$') === null ? true : false) {
            throw new IsNotValidUuidException("ProductClientId");
        }
    }

    ensureIsStringValue(value) {
        if (typeof value !== 'string')
            throw new UnexpectedTypeValueException("ProductClientId", 'string')
    }

    ensureIsNotEmptyValue(value) {
        if (value === null)
            throw new NullValueException("ProductClientId");
    }

    get value() {
        return _private.get(this).properties['value'];
    }
}

module.exports = ProductClientId;