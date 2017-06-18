import { Injectable,ElementRef } from '@angular/core';

@Injectable()
export class CommonHandler {

  constructor() {
  }

  hasOwnProperty = Object.prototype.hasOwnProperty;
  getPrototypeOf = Object.getPrototypeOf;
  isArray = Array.isArray;

  addClass(ele:any, className:string) {
    ele.className = ele.className + " " + className;
  }

  removeClass(ele:any, className:string) {
    ele.className = ele.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }

  isBlankObject(value) {
    return value !== null && typeof value === 'object' && !this.getPrototypeOf(value);
  }

  isDefined(value) {
    return typeof value !== 'undefined';
  }

  isUndefined(value) {
    return typeof value === 'undefined';
  }

  isObject(value) {
    // http://jsperf.com/isobject4
    return value !== null && typeof value === 'object';
  }

  isString(value) {
    return typeof value === 'string';
  }

  isNumber(value) {
    return typeof value === 'number';
  }

  isDate(value) {
    return toString.call(value) === '[object Date]';
  }

  isFunction(value) {
    return typeof value === 'function';
  }

  isWindow(obj) {
    return obj && obj.window === obj;
  }

  isArrayLike(obj) {

    if (obj == null || this.isWindow(obj)) return false;

    // arrays, strings and jQuery/jqLite objects are array like
    // * jqLite is either the jQuery or jqLite constructor function
    // * we have to check the existence of jqLite first as this method is called
    //   via the forEach method when constructing the jqLite object in the first place
    if (this.isArray(obj) || this.isString(obj)) return true;

    // Support: iOS 8.2 (not reproducible in simulator)
    // "length" in obj used to prevent JIT error (gh-11508)
    var length = 'length' in Object(obj) && obj.length;

    // NodeList objects (with `item` method) and
    // other objects with suitable length characteristics are array-like
    return this.isNumber(length) &&
      (length >= 0 && ((length - 1) in obj || obj instanceof Array) || typeof obj.item === 'function');

  }

  forEach(obj, iterator, context) {
    var key, length;
    if (obj) {
      if (this.isFunction(obj)) {
        for (key in obj) {
          if (key !== 'prototype' && key !== 'length' && key !== 'name' && obj.hasOwnProperty(key)) {
            iterator.call(context, obj[key], key, obj);
          }
        }
      } else if (this.isArray(obj) || this.isArrayLike(obj)) {
        var isPrimitive = typeof obj !== 'object';
        for (key = 0, length = obj.length; key < length; key++) {
          if (isPrimitive || key in obj) {
            iterator.call(context, obj[key], key, obj);
          }
        }
      } else if (obj.forEach && obj.forEach !== this.forEach) {
        obj.forEach(iterator, context, obj);
      } else if (this.isBlankObject(obj)) {
        // createMap() fast path --- Safe to avoid hasOwnProperty check because prototype chain is empty
        for (key in obj) {
          iterator.call(context, obj[key], key, obj);
        }
      } else if (typeof obj.hasOwnProperty === 'function') {
        // Slow path for objects inheriting Object.prototype, hasOwnProperty check needed
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            iterator.call(context, obj[key], key, obj);
          }
        }
      } else {
        // Slow path for objects which do not have a method `hasOwnProperty`
        for (key in obj) {
          if (this.hasOwnProperty.call(obj, key)) {
            iterator.call(context, obj[key], key, obj);
          }
        }
      }
    }
    return obj;
  }

  TYPED_ARRAY_REGEXP = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/;

  isTypedArray(value) {
    return value && this.isNumber(value.length) && this.TYPED_ARRAY_REGEXP.test(toString.call(value));
  }

  isArrayBuffer(obj) {
    return toString.call(obj) === '[object ArrayBuffer]';
  }

  isValidObjectMaxDepth(maxDepth) {
    return this.isNumber(maxDepth) && maxDepth > 0;
  }

  findIndexInList(item:any, list:any):number {
    let index:number = -1;

    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] == item) {
          index = i;
          break;
        }
      }
    }

    return index;
  }

  copy(source, destination, maxDepth) {
    var stackSource = [];
    var stackDest = [];
    maxDepth = this.isValidObjectMaxDepth(maxDepth) ? maxDepth : NaN;

    if (destination) {
      if (this.isTypedArray(destination) || this.isArrayBuffer(destination)) {
        console.error('cpta', 'Can\'t copy! TypedArray destination cannot be mutated.');
        return;
      }
      if (source === destination) {
        console.error('Can\'t copy! Source and destination are identical.');
        return;
      }

      // Empty the destination object
      if (this.isArray(destination)) {
        destination.length = 0;
      } else {
        this.forEach(destination, function (value, key) {
          if (key !== '$$hashKey') {
            delete destination[key];
          }
        }, this);
      }

      stackSource.push(source);
      stackDest.push(destination);
      return this.copyRecurse(source, destination, maxDepth, stackSource, stackDest);
    }

    return this.copyElement(source, maxDepth, stackSource, stackDest);


  }


  copyRecurse(source, destination, maxDepth, stackSource, stackDest) {
    maxDepth--;
    if (maxDepth < 0) {
      return '...';
    }
    var h = destination.$$hashKey;
    var key;
    if (this.isArray(source)) {
      for (var i = 0, ii = source.length; i < ii; i++) {
        destination.push(this.copyElement(source[i], maxDepth, stackSource, stackDest));
      }
    } else if (this.isBlankObject(source)) {
      // createMap() fast path --- Safe to avoid hasOwnProperty check because prototype chain is empty
      for (key in source) {
        destination[key] = this.copyElement(source[key], maxDepth, stackSource, stackDest);
      }
    } else if (source && typeof source.hasOwnProperty === 'function') {
      // Slow path, which must rely on hasOwnProperty
      for (key in source) {
        if (source.hasOwnProperty(key)) {
          destination[key] = this.copyElement(source[key], maxDepth, stackSource, stackDest);
        }
      }
    } else {
      // Slowest path --- hasOwnProperty can't be called as a method
      for (key in source) {
        if (this.hasOwnProperty.call(source, key)) {
          destination[key] = this.copyElement(source[key], maxDepth, stackSource, stackDest);
        }
      }
    }
    this.setHashKey(destination, h);
    return destination;
  }

  setHashKey(obj, h) {
    if (h) {
      obj.$$hashKey = h;
    } else {
      delete obj.$$hashKey;
    }
  }

  copyElement(source, maxDepth, stackSource, stackDest) {
    // Simple values
    if (!this.isObject(source)) {
      return source;
    }

    // Already copied values
    var index = stackSource.indexOf(source);
    if (index !== -1) {
      return stackDest[index];
    }

    if (this.isWindow(source)) {
      console.error("cannot copy window object")
    }

    var needsRecurse = false;
    var destination = this.copyType(source, stackSource, stackDest);

    if (destination === undefined) {
      destination = this.isArray(source) ? [] : Object.create(this.getPrototypeOf(source));
      needsRecurse = true;
    }

    stackSource.push(source);
    stackDest.push(destination);

    return needsRecurse
      ? this.copyRecurse(source, destination, maxDepth, stackSource, stackDest)
      : destination;
  }

  copyType(source, stackSource, stackDest) {
    switch (toString.call(source)) {
      case '[object Int8Array]':
      case '[object Int16Array]':
      case '[object Int32Array]':
      case '[object Float32Array]':
      case '[object Float64Array]':
      case '[object Uint8Array]':
      case '[object Uint8ClampedArray]':
      case '[object Uint16Array]':
      case '[object Uint32Array]':
        return new source.constructor(this.copyElement(source.buffer, undefined, stackSource, stackDest), source.byteOffset, source.length);

      case '[object ArrayBuffer]':
        // Support: IE10
        if (!source.slice) {
          // If we're in this case we know the environment supports ArrayBuffer
          /* eslint-disable no-undef */
          var copied = new ArrayBuffer(source.byteLength);
          new Uint8Array(copied).set(new Uint8Array(source));
          /* eslint-enable */
          return copied;
        }
        return source.slice(0);

      case '[object Boolean]':
      case '[object Number]':
      case '[object String]':
      case '[object Date]':
        return new source.constructor(source.valueOf());

      case '[object RegExp]':
        var re = new RegExp(source.source, source.toString().match(/[^/]*$/)[0]);
        re.lastIndex = source.lastIndex;
        return re;

      case '[object Blob]':
        return new source.constructor([source], {type: source.type});
    }

    if (this.isFunction(source.cloneNode)) {
      return source.cloneNode(true);
    }
  }
}
