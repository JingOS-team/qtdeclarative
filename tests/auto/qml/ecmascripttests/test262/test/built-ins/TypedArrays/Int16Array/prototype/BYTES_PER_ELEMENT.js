// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 22.2.6.1
esid: sec-typedarray.prototype.bytes_per_element
description: >
  The initial value of Int16Array.prototype.BYTES_PER_ELEMENT is 2.
info: |
  The value of TypedArray.prototype.BYTES_PER_ELEMENT is the Number value
  of the Element Size value specified in Table 49 for TypedArray.

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [TypedArray]
---*/

assert.sameValue(Int16Array.prototype.BYTES_PER_ELEMENT, 2);

verifyNotEnumerable(Int16Array.prototype, "BYTES_PER_ELEMENT");
verifyNotWritable(Int16Array.prototype, "BYTES_PER_ELEMENT");
verifyNotConfigurable(Int16Array.prototype, "BYTES_PER_ELEMENT");
