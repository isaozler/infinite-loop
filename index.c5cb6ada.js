(function () {
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequireb895"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequireb895"] = parcelRequire;
}
function $ccd72981aafedafd$export$2e2bcd8739ae039(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

function $26a452f010249323$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) return arr;
}


function $34fdf35afa6ca9f4$export$2e2bcd8739ae039(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}


function $e9516c5bbed03753$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


function $9e6242c45846f7fa$export$2e2bcd8739ae039(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}


function $98d3046eabbf7324$export$2e2bcd8739ae039(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $9e6242c45846f7fa$export$2e2bcd8739ae039(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $9e6242c45846f7fa$export$2e2bcd8739ae039(o, minLen);
}


function $1156f94a82362102$export$2e2bcd8739ae039(arr, i) {
    return $26a452f010249323$export$2e2bcd8739ae039(arr) || $34fdf35afa6ca9f4$export$2e2bcd8739ae039(arr, i) || $98d3046eabbf7324$export$2e2bcd8739ae039(arr, i) || $e9516c5bbed03753$export$2e2bcd8739ae039();
}

function $b6114e387d8b13b2$export$2e2bcd8739ae039(obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}





var $15d51cc84868dd78$var$noop = {
    value: function() {}
};
function $15d51cc84868dd78$var$dispatch() {
    for(var i = 0, n = arguments.length, _ = {}, t; i < n; ++i){
        if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
    }
    return new $15d51cc84868dd78$var$Dispatch(_);
}
function $15d51cc84868dd78$var$Dispatch(_) {
    this._ = _;
}
function $15d51cc84868dd78$var$parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {
            type: t,
            name: name
        };
    });
}
$15d51cc84868dd78$var$Dispatch.prototype = $15d51cc84868dd78$var$dispatch.prototype = {
    constructor: $15d51cc84868dd78$var$Dispatch,
    on: function on(typename, callback) {
        var _ = this._, T = $15d51cc84868dd78$var$parseTypenames(typename + "", _), t, i = -1, n = T.length;
        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
            while(++i < n)if ((t = (typename = T[i]).type) && (t = $15d51cc84868dd78$var$get(_[t], typename.name))) return t;
            return;
        }
        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while(++i < n){
            if (t = (typename = T[i]).type) _[t] = $15d51cc84868dd78$var$set(_[t], typename.name, callback);
            else if (callback == null) for(t in _)_[t] = $15d51cc84868dd78$var$set(_[t], typename.name, null);
        }
        return this;
    },
    copy: function copy() {
        var copy1 = {}, _ = this._;
        for(var t in _)copy1[t] = _[t].slice();
        return new $15d51cc84868dd78$var$Dispatch(copy1);
    },
    call: function call(type, that) {
        if ((n = arguments.length - 2) > 0) for(var args = new Array(n), i = 0, n, t; i < n; ++i)args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    },
    apply: function apply(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(var t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    }
};
function $15d51cc84868dd78$var$get(type, name) {
    for(var i = 0, n = type.length, c; i < n; ++i){
        if ((c = type[i]).name === name) return c.value;
    }
}
function $15d51cc84868dd78$var$set(type, name, callback) {
    for(var i = 0, n = type.length; i < n; ++i)if (type[i].name === name) {
        type[i] = $15d51cc84868dd78$var$noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
    }
    if (callback != null) type.push({
        name: name,
        value: callback
    });
    return type;
}
var $15d51cc84868dd78$export$2e2bcd8739ae039 = $15d51cc84868dd78$var$dispatch;



function $3ab50afcb901af8e$export$2e2bcd8739ae039(selector) {
    return function() {
        return this.matches(selector);
    };
}
function $3ab50afcb901af8e$export$90c2759c036528(selector) {
    return function(node) {
        return node.matches(selector);
    };
}

var $6be5be0c295398cf$export$201a3f7520ccc326 = "http://www.w3.org/1999/xhtml";
var $6be5be0c295398cf$export$2e2bcd8739ae039 = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: $6be5be0c295398cf$export$201a3f7520ccc326,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};


function $fb09cdb0904e852b$export$2e2bcd8739ae039(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return $6be5be0c295398cf$export$2e2bcd8739ae039.hasOwnProperty(prefix) ? {
        space: $6be5be0c295398cf$export$2e2bcd8739ae039[prefix],
        local: name
    } : name; // eslint-disable-line no-prototype-builtins
}

function $09ad29a22f7e00fe$export$2e2bcd8739ae039(event) {
    var sourceEvent;
    while(sourceEvent = event.sourceEvent)event = sourceEvent;
    return event;
}


function $1fcd41a1a5acb211$export$2e2bcd8739ae039(event, node) {
    event = $09ad29a22f7e00fe$export$2e2bcd8739ae039(event);
    if (node === undefined) node = event.currentTarget;
    if (node) {
        var svg = node.ownerSVGElement || node;
        if (svg.createSVGPoint) {
            var point = svg.createSVGPoint();
            point.x = event.clientX, point.y = event.clientY;
            point = point.matrixTransform(node.getScreenCTM().inverse());
            return [
                point.x,
                point.y
            ];
        }
        if (node.getBoundingClientRect) {
            var rect = node.getBoundingClientRect();
            return [
                event.clientX - rect.left - node.clientLeft,
                event.clientY - rect.top - node.clientTop
            ];
        }
    }
    return [
        event.pageX,
        event.pageY
    ];
}



function $90c858259166403e$var$none() {}
function $90c858259166403e$export$2e2bcd8739ae039(selector) {
    return selector == null ? $90c858259166403e$var$none : function() {
        return this.querySelector(selector);
    };
}


function $7bfb9c950331ff8c$export$2e2bcd8739ae039(select) {
    if (typeof select !== "function") select = $90c858259166403e$export$2e2bcd8739ae039(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
        }
    }
    return new $3654faccbe748cfb$export$52baac22726c72bf(subgroups, this._parents);
}



function $705e4124d4c15b87$export$2e2bcd8739ae039(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}


function $89f7903ebb33309f$var$empty() {
    return [];
}
function $89f7903ebb33309f$export$2e2bcd8739ae039(selector) {
    return selector == null ? $89f7903ebb33309f$var$empty : function() {
        return this.querySelectorAll(selector);
    };
}


function $e9a9fffb91620747$var$arrayAll(select) {
    return function() {
        return $705e4124d4c15b87$export$2e2bcd8739ae039(select.apply(this, arguments));
    };
}
function $e9a9fffb91620747$export$2e2bcd8739ae039(select) {
    if (typeof select === "function") select = $e9a9fffb91620747$var$arrayAll(select);
    else select = $89f7903ebb33309f$export$2e2bcd8739ae039(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            subgroups.push(select.call(node, node.__data__, i, group));
            parents.push(node);
        }
    }
    return new $3654faccbe748cfb$export$52baac22726c72bf(subgroups, parents);
}



var $c2d7fc6d1c3f8c09$var$find = Array.prototype.find;
function $c2d7fc6d1c3f8c09$var$childFind(match) {
    return function() {
        return $c2d7fc6d1c3f8c09$var$find.call(this.children, match);
    };
}
function $c2d7fc6d1c3f8c09$var$childFirst() {
    return this.firstElementChild;
}
function $c2d7fc6d1c3f8c09$export$2e2bcd8739ae039(match) {
    return this.select(match == null ? $c2d7fc6d1c3f8c09$var$childFirst : $c2d7fc6d1c3f8c09$var$childFind(typeof match === "function" ? match : $3ab50afcb901af8e$export$90c2759c036528(match)));
}



var $ccd7d4113fb83107$var$filter = Array.prototype.filter;
function $ccd7d4113fb83107$var$children() {
    return Array.from(this.children);
}
function $ccd7d4113fb83107$var$childrenFilter(match) {
    return function() {
        return $ccd7d4113fb83107$var$filter.call(this.children, match);
    };
}
function $ccd7d4113fb83107$export$2e2bcd8739ae039(match) {
    return this.selectAll(match == null ? $ccd7d4113fb83107$var$children : $ccd7d4113fb83107$var$childrenFilter(typeof match === "function" ? match : $3ab50afcb901af8e$export$90c2759c036528(match)));
}




function $e3452beb1009bac9$export$2e2bcd8739ae039(match) {
    if (typeof match !== "function") match = $3ab50afcb901af8e$export$2e2bcd8739ae039(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
    }
    return new $3654faccbe748cfb$export$52baac22726c72bf(subgroups, this._parents);
}



function $4c83736ffebaad69$export$2e2bcd8739ae039(update) {
    return new Array(update.length);
}



function $651745f0ed8de877$export$2e2bcd8739ae039() {
    return new $3654faccbe748cfb$export$52baac22726c72bf(this._enter || this._groups.map($4c83736ffebaad69$export$2e2bcd8739ae039), this._parents);
}
function $651745f0ed8de877$export$67b01759a14cf6a4(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
}
$651745f0ed8de877$export$67b01759a14cf6a4.prototype = {
    constructor: $651745f0ed8de877$export$67b01759a14cf6a4,
    appendChild: function appendChild(child) {
        return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function insertBefore(child, next) {
        return this._parent.insertBefore(child, next);
    },
    querySelector: function querySelector(selector) {
        return this._parent.querySelector(selector);
    },
    querySelectorAll: function querySelectorAll(selector) {
        return this._parent.querySelectorAll(selector);
    }
};


function $94045a795b90367b$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}


function $043313436514c770$var$bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for(; i < dataLength; ++i)if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
    } else enter[i] = new $651745f0ed8de877$export$67b01759a14cf6a4(parent, data[i]);
    // Put any non-null nodes that don’t fit into exit.
    for(; i < groupLength; ++i)if (node = group[i]) exit[i] = node;
}
function $043313436514c770$var$bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = new Map, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for(i = 0; i < groupLength; ++i)if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) exit[i] = node;
        else nodeByKeyValue.set(keyValue, node);
    }
    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for(i = 0; i < dataLength; ++i){
        keyValue = key.call(parent, data[i], i, data) + "";
        if (node = nodeByKeyValue.get(keyValue)) {
            update[i] = node;
            node.__data__ = data[i];
            nodeByKeyValue.delete(keyValue);
        } else enter[i] = new $651745f0ed8de877$export$67b01759a14cf6a4(parent, data[i]);
    }
    // Add any remaining nodes that were not bound to data to exit.
    for(i = 0; i < groupLength; ++i)if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) exit[i] = node;
}
function $043313436514c770$var$datum(node) {
    return node.__data__;
}
function $043313436514c770$export$2e2bcd8739ae039(value, key) {
    if (!arguments.length) return Array.from(this, $043313436514c770$var$datum);
    var bind = key ? $043313436514c770$var$bindKey : $043313436514c770$var$bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function") value = $94045a795b90367b$export$2e2bcd8739ae039(value);
    for(var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j){
        var parent = parents[j], group = groups[j], groupLength = group.length, data = $043313436514c770$var$arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
        bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
        // Now connect the enter nodes to their following update node, such that
        // appendChild can insert the materialized enter node before this node,
        // rather than at the end of the parent node.
        for(var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0)if (previous = enterGroup[i0]) {
            if (i0 >= i1) i1 = i0 + 1;
            while(!(next = updateGroup[i1]) && ++i1 < dataLength);
            previous._next = next || null;
        }
    }
    update = new $3654faccbe748cfb$export$52baac22726c72bf(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
}
// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function $043313436514c770$var$arraylike(data) {
    return typeof data === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
     : Array.from(data); // Map, Set, iterable, string, or anything else
}





function $448b051667cf1048$export$2e2bcd8739ae039() {
    return new $3654faccbe748cfb$export$52baac22726c72bf(this._exit || this._groups.map($4c83736ffebaad69$export$2e2bcd8739ae039), this._parents);
}


function $6f3ac7931a28849e$export$2e2bcd8739ae039(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    if (typeof onenter === "function") {
        enter = onenter(enter);
        if (enter) enter = enter.selection();
    } else enter = enter.append(onenter + "");
    if (onupdate != null) {
        update = onupdate(update);
        if (update) update = update.selection();
    }
    if (onexit == null) exit.remove();
    else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
}



function $99fb14869c9ab5ff$export$2e2bcd8739ae039(context) {
    var selection = context.selection ? context.selection() : context;
    for(var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
    }
    for(; j < m0; ++j)merges[j] = groups0[j];
    return new $3654faccbe748cfb$export$52baac22726c72bf(merges, this._parents);
}


function $24e3762b221e7a60$export$2e2bcd8739ae039() {
    for(var groups = this._groups, j = -1, m = groups.length; ++j < m;){
        for(var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;)if (node = group[i]) {
            if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
            next = node;
        }
    }
    return this;
}



function $8aef0d4f5916a182$export$2e2bcd8739ae039(compare) {
    if (!compare) compare = $8aef0d4f5916a182$var$ascending;
    function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for(var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group[i]) sortgroup[i] = node;
        sortgroup.sort(compareNode);
    }
    return new $3654faccbe748cfb$export$52baac22726c72bf(sortgroups, this._parents).order();
}
function $8aef0d4f5916a182$var$ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


function $874dbd0071bc9680$export$2e2bcd8739ae039() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
}


function $db308ea7860c7178$export$2e2bcd8739ae039() {
    return Array.from(this);
}


function $cd5d121b55f6ca24$export$2e2bcd8739ae039() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j)for(var group = groups[j], i = 0, n = group.length; i < n; ++i){
        var node = group[i];
        if (node) return node;
    }
    return null;
}


function $3cd7dc2b8ed57e04$export$2e2bcd8739ae039() {
    var size = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var node = _step.value;
            ++size; // eslint-disable-line no-unused-vars
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return size;
}


function $84c90fdd415976db$export$2e2bcd8739ae039() {
    return !this.node();
}


function $5f1071a5a84818c9$export$2e2bcd8739ae039(callback) {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
    return this;
}



function $0bb179c8d618d9c8$var$attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function $0bb179c8d618d9c8$var$attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function $0bb179c8d618d9c8$var$attrConstant(name, value) {
    return function() {
        this.setAttribute(name, value);
    };
}
function $0bb179c8d618d9c8$var$attrConstantNS(fullname, value) {
    return function() {
        this.setAttributeNS(fullname.space, fullname.local, value);
    };
}
function $0bb179c8d618d9c8$var$attrFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);
        else this.setAttribute(name, v);
    };
}
function $0bb179c8d618d9c8$var$attrFunctionNS(fullname, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
        else this.setAttributeNS(fullname.space, fullname.local, v);
    };
}
function $0bb179c8d618d9c8$export$2e2bcd8739ae039(name, value) {
    var fullname = $fb09cdb0904e852b$export$2e2bcd8739ae039(name);
    if (arguments.length < 2) {
        var node = this.node();
        return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? $0bb179c8d618d9c8$var$attrRemoveNS : $0bb179c8d618d9c8$var$attrRemove : typeof value === "function" ? fullname.local ? $0bb179c8d618d9c8$var$attrFunctionNS : $0bb179c8d618d9c8$var$attrFunction : fullname.local ? $0bb179c8d618d9c8$var$attrConstantNS : $0bb179c8d618d9c8$var$attrConstant)(fullname, value));
}


function $8e05b95f26f7cdea$export$2e2bcd8739ae039(node) {
    return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
     || node.document && node // node is a Window
     || node.defaultView; // node is a Document
}


function $916c95547a91b04b$var$styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function $916c95547a91b04b$var$styleConstant(name, value, priority) {
    return function() {
        this.style.setProperty(name, value, priority);
    };
}
function $916c95547a91b04b$var$styleFunction(name, value, priority) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);
        else this.style.setProperty(name, v, priority);
    };
}
function $916c95547a91b04b$export$2e2bcd8739ae039(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? $916c95547a91b04b$var$styleRemove : typeof value === "function" ? $916c95547a91b04b$var$styleFunction : $916c95547a91b04b$var$styleConstant)(name, value, priority == null ? "" : priority)) : $916c95547a91b04b$export$5e3cec964f0b5efd(this.node(), name);
}
function $916c95547a91b04b$export$5e3cec964f0b5efd(node, name) {
    return node.style.getPropertyValue(name) || $8e05b95f26f7cdea$export$2e2bcd8739ae039(node).getComputedStyle(node, null).getPropertyValue(name);
}


function $a0add80a03a448b3$var$propertyRemove(name) {
    return function() {
        delete this[name];
    };
}
function $a0add80a03a448b3$var$propertyConstant(name, value) {
    return function() {
        this[name] = value;
    };
}
function $a0add80a03a448b3$var$propertyFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];
        else this[name] = v;
    };
}
function $a0add80a03a448b3$export$2e2bcd8739ae039(name, value) {
    return arguments.length > 1 ? this.each((value == null ? $a0add80a03a448b3$var$propertyRemove : typeof value === "function" ? $a0add80a03a448b3$var$propertyFunction : $a0add80a03a448b3$var$propertyConstant)(name, value)) : this.node()[name];
}


function $03874f98e64efe56$var$classArray(string) {
    return string.trim().split(/^|\s+/);
}
function $03874f98e64efe56$var$classList(node) {
    return node.classList || new $03874f98e64efe56$var$ClassList(node);
}
function $03874f98e64efe56$var$ClassList(node) {
    this._node = node;
    this._names = $03874f98e64efe56$var$classArray(node.getAttribute("class") || "");
}
$03874f98e64efe56$var$ClassList.prototype = {
    add: function add(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    remove: function remove(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    contains: function contains(name) {
        return this._names.indexOf(name) >= 0;
    }
};
function $03874f98e64efe56$var$classedAdd(node, names) {
    var list = $03874f98e64efe56$var$classList(node), i = -1, n = names.length;
    while(++i < n)list.add(names[i]);
}
function $03874f98e64efe56$var$classedRemove(node, names) {
    var list = $03874f98e64efe56$var$classList(node), i = -1, n = names.length;
    while(++i < n)list.remove(names[i]);
}
function $03874f98e64efe56$var$classedTrue(names) {
    return function() {
        $03874f98e64efe56$var$classedAdd(this, names);
    };
}
function $03874f98e64efe56$var$classedFalse(names) {
    return function() {
        $03874f98e64efe56$var$classedRemove(this, names);
    };
}
function $03874f98e64efe56$var$classedFunction(names, value) {
    return function() {
        (value.apply(this, arguments) ? $03874f98e64efe56$var$classedAdd : $03874f98e64efe56$var$classedRemove)(this, names);
    };
}
function $03874f98e64efe56$export$2e2bcd8739ae039(name, value) {
    var names = $03874f98e64efe56$var$classArray(name + "");
    if (arguments.length < 2) {
        var list = $03874f98e64efe56$var$classList(this.node()), i = -1, n = names.length;
        while(++i < n)if (!list.contains(names[i])) return false;
        return true;
    }
    return this.each((typeof value === "function" ? $03874f98e64efe56$var$classedFunction : value ? $03874f98e64efe56$var$classedTrue : $03874f98e64efe56$var$classedFalse)(names, value));
}


function $b71ca509fbd42cf4$var$textRemove() {
    this.textContent = "";
}
function $b71ca509fbd42cf4$var$textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function $b71ca509fbd42cf4$var$textFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
    };
}
function $b71ca509fbd42cf4$export$2e2bcd8739ae039(value) {
    return arguments.length ? this.each(value == null ? $b71ca509fbd42cf4$var$textRemove : (typeof value === "function" ? $b71ca509fbd42cf4$var$textFunction : $b71ca509fbd42cf4$var$textConstant)(value)) : this.node().textContent;
}


function $bc3699fd3f7b5fe5$var$htmlRemove() {
    this.innerHTML = "";
}
function $bc3699fd3f7b5fe5$var$htmlConstant(value) {
    return function() {
        this.innerHTML = value;
    };
}
function $bc3699fd3f7b5fe5$var$htmlFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
    };
}
function $bc3699fd3f7b5fe5$export$2e2bcd8739ae039(value) {
    return arguments.length ? this.each(value == null ? $bc3699fd3f7b5fe5$var$htmlRemove : (typeof value === "function" ? $bc3699fd3f7b5fe5$var$htmlFunction : $bc3699fd3f7b5fe5$var$htmlConstant)(value)) : this.node().innerHTML;
}


function $e674ec343c747b04$var$raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
}
function $e674ec343c747b04$export$2e2bcd8739ae039() {
    return this.each($e674ec343c747b04$var$raise);
}


function $d662e3aa574bc242$var$lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function $d662e3aa574bc242$export$2e2bcd8739ae039() {
    return this.each($d662e3aa574bc242$var$lower);
}




function $3484bdf903999add$var$creatorInherit(name) {
    return function() {
        var document = this.ownerDocument, uri = this.namespaceURI;
        return uri === $6be5be0c295398cf$export$201a3f7520ccc326 && document.documentElement.namespaceURI === $6be5be0c295398cf$export$201a3f7520ccc326 ? document.createElement(name) : document.createElementNS(uri, name);
    };
}
function $3484bdf903999add$var$creatorFixed(fullname) {
    return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
}
function $3484bdf903999add$export$2e2bcd8739ae039(name) {
    var fullname = $fb09cdb0904e852b$export$2e2bcd8739ae039(name);
    return (fullname.local ? $3484bdf903999add$var$creatorFixed : $3484bdf903999add$var$creatorInherit)(fullname);
}


function $1893087b3b81f71f$export$2e2bcd8739ae039(name) {
    var create = typeof name === "function" ? name : $3484bdf903999add$export$2e2bcd8739ae039(name);
    return this.select(function() {
        return this.appendChild(create.apply(this, arguments));
    });
}




function $38bfdcad68f3d741$var$constantNull() {
    return null;
}
function $38bfdcad68f3d741$export$2e2bcd8739ae039(name, before) {
    var create = typeof name === "function" ? name : $3484bdf903999add$export$2e2bcd8739ae039(name), select = before == null ? $38bfdcad68f3d741$var$constantNull : typeof before === "function" ? before : $90c858259166403e$export$2e2bcd8739ae039(before);
    return this.select(function() {
        return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
}


function $bfa7126a0bfc67f8$var$remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
}
function $bfa7126a0bfc67f8$export$2e2bcd8739ae039() {
    return this.each($bfa7126a0bfc67f8$var$remove);
}


function $caa6627d10bb2c70$var$selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function $caa6627d10bb2c70$var$selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function $caa6627d10bb2c70$export$2e2bcd8739ae039(deep) {
    return this.select(deep ? $caa6627d10bb2c70$var$selection_cloneDeep : $caa6627d10bb2c70$var$selection_cloneShallow);
}


function $cf150deb43d786e5$export$2e2bcd8739ae039(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
}


function $7605d91c68159c2f$var$contextListener(listener) {
    return function(event) {
        listener.call(this, event, this.__data__);
    };
}
function $7605d91c68159c2f$var$parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {
            type: t,
            name: name
        };
    });
}
function $7605d91c68159c2f$var$onRemove(typename) {
    return function() {
        var on = this.__on;
        if (!on) return;
        for(var j = 0, i = -1, m = on.length, o; j < m; ++j)if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) this.removeEventListener(o.type, o.listener, o.options);
        else on[++i] = o;
        if (++i) on.length = i;
        else delete this.__on;
    };
}
function $7605d91c68159c2f$var$onAdd(typename, value, options) {
    return function() {
        var on = this.__on, o, listener = $7605d91c68159c2f$var$contextListener(value);
        if (on) {
            for(var j = 0, m = on.length; j < m; ++j)if ((o = on[j]).type === typename.type && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.options);
                this.addEventListener(o.type, o.listener = listener, o.options = options);
                o.value = value;
                return;
            }
        }
        this.addEventListener(typename.type, listener, options);
        o = {
            type: typename.type,
            name: typename.name,
            value: value,
            listener: listener,
            options: options
        };
        if (!on) this.__on = [
            o
        ];
        else on.push(o);
    };
}
function $7605d91c68159c2f$export$2e2bcd8739ae039(typename, value, options) {
    var typenames = $7605d91c68159c2f$var$parseTypenames(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
        var on = this.node().__on;
        if (on) for(var j = 0, m = on.length, o; j < m; ++j)for(i = 0, o = on[j]; i < n; ++i){
            if ((t = typenames[i]).type === o.type && t.name === o.name) return o.value;
        }
        return;
    }
    on = value ? $7605d91c68159c2f$var$onAdd : $7605d91c68159c2f$var$onRemove;
    for(i = 0; i < n; ++i)this.each(on(typenames[i], value, options));
    return this;
}



function $7fdc16f329df28aa$var$dispatchEvent(node, type, params) {
    var window = $8e05b95f26f7cdea$export$2e2bcd8739ae039(node), event = window.CustomEvent;
    if (typeof event === "function") event = new event(type, params);
    else {
        event = window.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
}
function $7fdc16f329df28aa$var$dispatchConstant(type, params) {
    return function() {
        return $7fdc16f329df28aa$var$dispatchEvent(this, type, params);
    };
}
function $7fdc16f329df28aa$var$dispatchFunction(type, params) {
    return function() {
        return $7fdc16f329df28aa$var$dispatchEvent(this, type, params.apply(this, arguments));
    };
}
function $7fdc16f329df28aa$export$2e2bcd8739ae039(type, params) {
    return this.each((typeof params === "function" ? $7fdc16f329df28aa$var$dispatchFunction : $7fdc16f329df28aa$var$dispatchConstant)(type, params));
}


var $86a79651cc295bac$exports = {};
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $86a79651cc295bac$var$runtime = function(exports) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err1) {
        define = function define(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value1 = result.value;
                if (value1 && typeof value1 === "object" && hasOwn.call(value1, "__await")) return PromiseImpl.resolve(value1.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value1).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(object) {
        var keys = [];
        for(var key1 in object)keys.push(key1);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next1 = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next1.next = next1;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function stop() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function abrupt(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}($86a79651cc295bac$exports);
try {
    regeneratorRuntime = $86a79651cc295bac$var$runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = $86a79651cc295bac$var$runtime;
    else Function("r", "regeneratorRuntime = r")($86a79651cc295bac$var$runtime);
}


function $8528ab26f1d0a3b0$export$2e2bcd8739ae039() {
    var groups, j, m, group, i, n, node;
    return (/*@__PURE__*/$parcel$interopDefault($86a79651cc295bac$exports)).wrap(function _callee$(_ctx) {
        while(1)switch(_ctx.prev = _ctx.next){
            case 0:
                groups = this._groups, j = 0, m = groups.length;
            case 1:
                if (!(j < m)) {
                    _ctx.next = 13;
                    break;
                }
                group = groups[j], i = 0, n = group.length;
            case 3:
                if (!(i < n)) {
                    _ctx.next = 10;
                    break;
                }
                if (!(node = group[i])) {
                    _ctx.next = 7;
                    break;
                }
                _ctx.next = 7;
                return node;
            case 7:
                ++i;
                _ctx.next = 3;
                break;
            case 10:
                ++j;
                _ctx.next = 1;
                break;
            case 13:
            case "end":
                return _ctx.stop();
        }
    }, $8528ab26f1d0a3b0$export$2e2bcd8739ae039, this);
}


var $3654faccbe748cfb$export$e8e78c978b129247 = [
    null
];
function $3654faccbe748cfb$export$52baac22726c72bf(groups, parents) {
    this._groups = groups;
    this._parents = parents;
}
function $3654faccbe748cfb$var$selection() {
    return new $3654faccbe748cfb$export$52baac22726c72bf([
        [
            document.documentElement
        ]
    ], $3654faccbe748cfb$export$e8e78c978b129247);
}
function $3654faccbe748cfb$var$selection_selection() {
    return this;
}
$3654faccbe748cfb$export$52baac22726c72bf.prototype = $3654faccbe748cfb$var$selection.prototype = $ccd72981aafedafd$export$2e2bcd8739ae039({
    constructor: $3654faccbe748cfb$export$52baac22726c72bf,
    select: $7bfb9c950331ff8c$export$2e2bcd8739ae039,
    selectAll: $e9a9fffb91620747$export$2e2bcd8739ae039,
    selectChild: $c2d7fc6d1c3f8c09$export$2e2bcd8739ae039,
    selectChildren: $ccd7d4113fb83107$export$2e2bcd8739ae039,
    filter: $e3452beb1009bac9$export$2e2bcd8739ae039,
    data: $043313436514c770$export$2e2bcd8739ae039,
    enter: $651745f0ed8de877$export$2e2bcd8739ae039,
    exit: $448b051667cf1048$export$2e2bcd8739ae039,
    join: $6f3ac7931a28849e$export$2e2bcd8739ae039,
    merge: $99fb14869c9ab5ff$export$2e2bcd8739ae039,
    selection: $3654faccbe748cfb$var$selection_selection,
    order: $24e3762b221e7a60$export$2e2bcd8739ae039,
    sort: $8aef0d4f5916a182$export$2e2bcd8739ae039,
    call: $874dbd0071bc9680$export$2e2bcd8739ae039,
    nodes: $db308ea7860c7178$export$2e2bcd8739ae039,
    node: $cd5d121b55f6ca24$export$2e2bcd8739ae039,
    size: $3cd7dc2b8ed57e04$export$2e2bcd8739ae039,
    empty: $84c90fdd415976db$export$2e2bcd8739ae039,
    each: $5f1071a5a84818c9$export$2e2bcd8739ae039,
    attr: $0bb179c8d618d9c8$export$2e2bcd8739ae039,
    style: $916c95547a91b04b$export$2e2bcd8739ae039,
    property: $a0add80a03a448b3$export$2e2bcd8739ae039,
    classed: $03874f98e64efe56$export$2e2bcd8739ae039,
    text: $b71ca509fbd42cf4$export$2e2bcd8739ae039,
    html: $bc3699fd3f7b5fe5$export$2e2bcd8739ae039,
    raise: $e674ec343c747b04$export$2e2bcd8739ae039,
    lower: $d662e3aa574bc242$export$2e2bcd8739ae039,
    append: $1893087b3b81f71f$export$2e2bcd8739ae039,
    insert: $38bfdcad68f3d741$export$2e2bcd8739ae039,
    remove: $bfa7126a0bfc67f8$export$2e2bcd8739ae039,
    clone: $caa6627d10bb2c70$export$2e2bcd8739ae039,
    datum: $cf150deb43d786e5$export$2e2bcd8739ae039,
    on: $7605d91c68159c2f$export$2e2bcd8739ae039,
    dispatch: $7fdc16f329df28aa$export$2e2bcd8739ae039
}, Symbol.iterator, $8528ab26f1d0a3b0$export$2e2bcd8739ae039);
var $3654faccbe748cfb$export$2e2bcd8739ae039 = $3654faccbe748cfb$var$selection;


function $c6a650051c356b4d$export$2e2bcd8739ae039(selector) {
    return typeof selector === "string" ? new $3654faccbe748cfb$export$52baac22726c72bf([
        [
            document.querySelector(selector)
        ]
    ], [
        document.documentElement
    ]) : new $3654faccbe748cfb$export$52baac22726c72bf([
        [
            selector
        ]
    ], $3654faccbe748cfb$export$e8e78c978b129247);
}



var $84868ec1e22f25de$export$524615cd03e458cc = {
    passive: false
};
var $84868ec1e22f25de$export$35431a0e47022de1 = {
    capture: true,
    passive: false
};
function $84868ec1e22f25de$export$2e2561858db9bf47(event) {
    event.stopImmediatePropagation();
}
function $84868ec1e22f25de$export$2e2bcd8739ae039(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}


function $c09590197bae6a4f$export$2e2bcd8739ae039(view) {
    var root = view.document.documentElement, selection = $c6a650051c356b4d$export$2e2bcd8739ae039(view).on("dragstart.drag", $84868ec1e22f25de$export$2e2bcd8739ae039, $84868ec1e22f25de$export$35431a0e47022de1);
    if ("onselectstart" in root) selection.on("selectstart.drag", $84868ec1e22f25de$export$2e2bcd8739ae039, $84868ec1e22f25de$export$35431a0e47022de1);
    else {
        root.__noselect = root.style.MozUserSelect;
        root.style.MozUserSelect = "none";
    }
}
function $c09590197bae6a4f$export$833237748009e1e1(view, noclick) {
    var root = view.document.documentElement, selection = $c6a650051c356b4d$export$2e2bcd8739ae039(view).on("dragstart.drag", null);
    if (noclick) {
        selection.on("click.drag", $84868ec1e22f25de$export$2e2bcd8739ae039, $84868ec1e22f25de$export$35431a0e47022de1);
        setTimeout(function() {
            selection.on("click.drag", null);
        }, 0);
    }
    if ("onselectstart" in root) selection.on("selectstart.drag", null);
    else {
        root.style.MozUserSelect = root.__noselect;
        delete root.__noselect;
    }
}




function $a43c403a52eca97a$export$2e2bcd8739ae039(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
}
function $a43c403a52eca97a$export$8b58be045bf06082(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for(var key in definition)prototype[key] = definition[key];
    return prototype;
}


function $3b13fb556c98fb72$export$892596cec99bc70e() {}
var $3b13fb556c98fb72$export$4adafc6ed0600c10 = 0.7;
var $3b13fb556c98fb72$export$9eace2cc0d12c98d = 1 / $3b13fb556c98fb72$export$4adafc6ed0600c10;
var $3b13fb556c98fb72$var$reI = "\\s*([+-]?\\d+)\\s*", $3b13fb556c98fb72$var$reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", $3b13fb556c98fb72$var$reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", $3b13fb556c98fb72$var$reHex = /^#([0-9a-f]{3,8})$/, $3b13fb556c98fb72$var$reRgbInteger = new RegExp("^rgb\\(".concat($3b13fb556c98fb72$var$reI, ",").concat($3b13fb556c98fb72$var$reI, ",").concat($3b13fb556c98fb72$var$reI, "\\)$")), $3b13fb556c98fb72$var$reRgbPercent = new RegExp("^rgb\\(".concat($3b13fb556c98fb72$var$reP, ",").concat($3b13fb556c98fb72$var$reP, ",").concat($3b13fb556c98fb72$var$reP, "\\)$")), $3b13fb556c98fb72$var$reRgbaInteger = new RegExp("^rgba\\(".concat($3b13fb556c98fb72$var$reI, ",").concat($3b13fb556c98fb72$var$reI, ",").concat($3b13fb556c98fb72$var$reI, ",").concat($3b13fb556c98fb72$var$reN, "\\)$")), $3b13fb556c98fb72$var$reRgbaPercent = new RegExp("^rgba\\(".concat($3b13fb556c98fb72$var$reP, ",").concat($3b13fb556c98fb72$var$reP, ",").concat($3b13fb556c98fb72$var$reP, ",").concat($3b13fb556c98fb72$var$reN, "\\)$")), $3b13fb556c98fb72$var$reHslPercent = new RegExp("^hsl\\(".concat($3b13fb556c98fb72$var$reN, ",").concat($3b13fb556c98fb72$var$reP, ",").concat($3b13fb556c98fb72$var$reP, "\\)$")), $3b13fb556c98fb72$var$reHslaPercent = new RegExp("^hsla\\(".concat($3b13fb556c98fb72$var$reN, ",").concat($3b13fb556c98fb72$var$reP, ",").concat($3b13fb556c98fb72$var$reP, ",").concat($3b13fb556c98fb72$var$reN, "\\)$"));
var $3b13fb556c98fb72$var$named = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
};
$a43c403a52eca97a$export$2e2bcd8739ae039($3b13fb556c98fb72$export$892596cec99bc70e, $3b13fb556c98fb72$export$2e2bcd8739ae039, {
    copy: function(channels) {
        return Object.assign(new this.constructor, this, channels);
    },
    displayable: function() {
        return this.rgb().displayable();
    },
    hex: $3b13fb556c98fb72$var$color_formatHex,
    formatHex: $3b13fb556c98fb72$var$color_formatHex,
    formatHex8: $3b13fb556c98fb72$var$color_formatHex8,
    formatHsl: $3b13fb556c98fb72$var$color_formatHsl,
    formatRgb: $3b13fb556c98fb72$var$color_formatRgb,
    toString: $3b13fb556c98fb72$var$color_formatRgb
});
function $3b13fb556c98fb72$var$color_formatHex() {
    return this.rgb().formatHex();
}
function $3b13fb556c98fb72$var$color_formatHex8() {
    return this.rgb().formatHex8();
}
function $3b13fb556c98fb72$var$color_formatHsl() {
    return $3b13fb556c98fb72$export$8133dc3fa904d6d1(this).formatHsl();
}
function $3b13fb556c98fb72$var$color_formatRgb() {
    return this.rgb().formatRgb();
}
function $3b13fb556c98fb72$export$2e2bcd8739ae039(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = $3b13fb556c98fb72$var$reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? $3b13fb556c98fb72$var$rgbn(m) // #ff0000
     : l === 3 ? new $3b13fb556c98fb72$export$5e05a94393ac29e3(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) // #f00
     : l === 8 ? $3b13fb556c98fb72$var$rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) // #ff000000
     : l === 4 ? $3b13fb556c98fb72$var$rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) // #f000
     : null // invalid hex
    ) : (m = $3b13fb556c98fb72$var$reRgbInteger.exec(format)) ? new $3b13fb556c98fb72$export$5e05a94393ac29e3(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
     : (m = $3b13fb556c98fb72$var$reRgbPercent.exec(format)) ? new $3b13fb556c98fb72$export$5e05a94393ac29e3(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
     : (m = $3b13fb556c98fb72$var$reRgbaInteger.exec(format)) ? $3b13fb556c98fb72$var$rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
     : (m = $3b13fb556c98fb72$var$reRgbaPercent.exec(format)) ? $3b13fb556c98fb72$var$rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
     : (m = $3b13fb556c98fb72$var$reHslPercent.exec(format)) ? $3b13fb556c98fb72$var$hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
     : (m = $3b13fb556c98fb72$var$reHslaPercent.exec(format)) ? $3b13fb556c98fb72$var$hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
     : $3b13fb556c98fb72$var$named.hasOwnProperty(format) ? $3b13fb556c98fb72$var$rgbn($3b13fb556c98fb72$var$named[format]) // eslint-disable-line no-prototype-builtins
     : format === "transparent" ? new $3b13fb556c98fb72$export$5e05a94393ac29e3(NaN, NaN, NaN, 0) : null;
}
function $3b13fb556c98fb72$var$rgbn(n) {
    return new $3b13fb556c98fb72$export$5e05a94393ac29e3(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function $3b13fb556c98fb72$var$rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new $3b13fb556c98fb72$export$5e05a94393ac29e3(r, g, b, a);
}
function $3b13fb556c98fb72$export$42da0a331c2802f5(o) {
    if (!(o instanceof $3b13fb556c98fb72$export$892596cec99bc70e)) o = $3b13fb556c98fb72$export$2e2bcd8739ae039(o);
    if (!o) return new $3b13fb556c98fb72$export$5e05a94393ac29e3;
    o = o.rgb();
    return new $3b13fb556c98fb72$export$5e05a94393ac29e3(o.r, o.g, o.b, o.opacity);
}
function $3b13fb556c98fb72$export$8972dc0e6ad9238f(r, g, b, opacity) {
    return arguments.length === 1 ? $3b13fb556c98fb72$export$42da0a331c2802f5(r) : new $3b13fb556c98fb72$export$5e05a94393ac29e3(r, g, b, opacity == null ? 1 : opacity);
}
function $3b13fb556c98fb72$export$5e05a94393ac29e3(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
}
$a43c403a52eca97a$export$2e2bcd8739ae039($3b13fb556c98fb72$export$5e05a94393ac29e3, $3b13fb556c98fb72$export$8972dc0e6ad9238f, $a43c403a52eca97a$export$8b58be045bf06082($3b13fb556c98fb72$export$892596cec99bc70e, {
    brighter: function(k) {
        k = k == null ? $3b13fb556c98fb72$export$9eace2cc0d12c98d : Math.pow($3b13fb556c98fb72$export$9eace2cc0d12c98d, k);
        return new $3b13fb556c98fb72$export$5e05a94393ac29e3(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? $3b13fb556c98fb72$export$4adafc6ed0600c10 : Math.pow($3b13fb556c98fb72$export$4adafc6ed0600c10, k);
        return new $3b13fb556c98fb72$export$5e05a94393ac29e3(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function() {
        return this;
    },
    clamp: function() {
        return new $3b13fb556c98fb72$export$5e05a94393ac29e3($3b13fb556c98fb72$var$clampi(this.r), $3b13fb556c98fb72$var$clampi(this.g), $3b13fb556c98fb72$var$clampi(this.b), $3b13fb556c98fb72$var$clampa(this.opacity));
    },
    displayable: function() {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: $3b13fb556c98fb72$var$rgb_formatHex,
    formatHex: $3b13fb556c98fb72$var$rgb_formatHex,
    formatHex8: $3b13fb556c98fb72$var$rgb_formatHex8,
    formatRgb: $3b13fb556c98fb72$var$rgb_formatRgb,
    toString: $3b13fb556c98fb72$var$rgb_formatRgb
}));
function $3b13fb556c98fb72$var$rgb_formatHex() {
    return "#".concat($3b13fb556c98fb72$var$hex(this.r)).concat($3b13fb556c98fb72$var$hex(this.g)).concat($3b13fb556c98fb72$var$hex(this.b));
}
function $3b13fb556c98fb72$var$rgb_formatHex8() {
    return "#".concat($3b13fb556c98fb72$var$hex(this.r)).concat($3b13fb556c98fb72$var$hex(this.g)).concat($3b13fb556c98fb72$var$hex(this.b)).concat($3b13fb556c98fb72$var$hex((isNaN(this.opacity) ? 1 : this.opacity) * 255));
}
function $3b13fb556c98fb72$var$rgb_formatRgb() {
    var a = $3b13fb556c98fb72$var$clampa(this.opacity);
    return "".concat(a === 1 ? "rgb(" : "rgba(").concat($3b13fb556c98fb72$var$clampi(this.r), ", ").concat($3b13fb556c98fb72$var$clampi(this.g), ", ").concat($3b13fb556c98fb72$var$clampi(this.b)).concat(a === 1 ? ")" : ", ".concat(a, ")"));
}
function $3b13fb556c98fb72$var$clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function $3b13fb556c98fb72$var$clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function $3b13fb556c98fb72$var$hex(value) {
    value = $3b13fb556c98fb72$var$clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
}
function $3b13fb556c98fb72$var$hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new $3b13fb556c98fb72$var$Hsl(h, s, l, a);
}
function $3b13fb556c98fb72$export$8133dc3fa904d6d1(o) {
    if (o instanceof $3b13fb556c98fb72$var$Hsl) return new $3b13fb556c98fb72$var$Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof $3b13fb556c98fb72$export$892596cec99bc70e)) o = $3b13fb556c98fb72$export$2e2bcd8739ae039(o);
    if (!o) return new $3b13fb556c98fb72$var$Hsl;
    if (o instanceof $3b13fb556c98fb72$var$Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
    } else s = l > 0 && l < 1 ? 0 : h;
    return new $3b13fb556c98fb72$var$Hsl(h, s, l, o.opacity);
}
function $3b13fb556c98fb72$export$8f4a7c0bb78e6ea8(h, s, l, opacity) {
    return arguments.length === 1 ? $3b13fb556c98fb72$export$8133dc3fa904d6d1(h) : new $3b13fb556c98fb72$var$Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function $3b13fb556c98fb72$var$Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
$a43c403a52eca97a$export$2e2bcd8739ae039($3b13fb556c98fb72$var$Hsl, $3b13fb556c98fb72$export$8f4a7c0bb78e6ea8, $a43c403a52eca97a$export$8b58be045bf06082($3b13fb556c98fb72$export$892596cec99bc70e, {
    brighter: function(k) {
        k = k == null ? $3b13fb556c98fb72$export$9eace2cc0d12c98d : Math.pow($3b13fb556c98fb72$export$9eace2cc0d12c98d, k);
        return new $3b13fb556c98fb72$var$Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? $3b13fb556c98fb72$export$4adafc6ed0600c10 : Math.pow($3b13fb556c98fb72$export$4adafc6ed0600c10, k);
        return new $3b13fb556c98fb72$var$Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new $3b13fb556c98fb72$export$5e05a94393ac29e3($3b13fb556c98fb72$var$hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), $3b13fb556c98fb72$var$hsl2rgb(h, m1, m2), $3b13fb556c98fb72$var$hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    clamp: function() {
        return new $3b13fb556c98fb72$var$Hsl($3b13fb556c98fb72$var$clamph(this.h), $3b13fb556c98fb72$var$clampt(this.s), $3b13fb556c98fb72$var$clampt(this.l), $3b13fb556c98fb72$var$clampa(this.opacity));
    },
    displayable: function() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl: function() {
        var a = $3b13fb556c98fb72$var$clampa(this.opacity);
        return "".concat(a === 1 ? "hsl(" : "hsla(").concat($3b13fb556c98fb72$var$clamph(this.h), ", ").concat($3b13fb556c98fb72$var$clampt(this.s) * 100, "%, ").concat($3b13fb556c98fb72$var$clampt(this.l) * 100, "%").concat(a === 1 ? ")" : ", ".concat(a, ")"));
    }
}));
function $3b13fb556c98fb72$var$clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
}
function $3b13fb556c98fb72$var$clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
}
/* From FvD 13.37, CSS Color Module Level 3 */ function $3b13fb556c98fb72$var$hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}




function $ae9fc919b11a97db$export$4e41033bfeec1a4c(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function $ae9fc919b11a97db$export$2e2bcd8739ae039(values) {
    var n = values.length - 1;
    return function(t) {
        var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
        return $ae9fc919b11a97db$export$4e41033bfeec1a4c((t - i / n) * n, v0, v1, v2, v3);
    };
}



function $ba98f6eb164e3e9f$export$2e2bcd8739ae039(values) {
    var n = values.length;
    return function(t) {
        var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
        return $ae9fc919b11a97db$export$4e41033bfeec1a4c((t - i / n) * n, v0, v1, v2, v3);
    };
}


var $dca6a1eefdfccc6e$export$2e2bcd8739ae039 = function(x) {
    return function() {
        return x;
    };
};


function $7a49300a14b2b680$var$linear(a, d) {
    return function(t) {
        return a + t * d;
    };
}
function $7a49300a14b2b680$var$exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
    };
}
function $7a49300a14b2b680$export$97d7b0c7ddb78dcf(a, b) {
    var d = b - a;
    return d ? $7a49300a14b2b680$var$linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : $dca6a1eefdfccc6e$export$2e2bcd8739ae039(isNaN(a) ? b : a);
}
function $7a49300a14b2b680$export$a7ebe8cc6aaf8d37(y) {
    return (y = +y) === 1 ? $7a49300a14b2b680$export$2e2bcd8739ae039 : function(a, b) {
        return b - a ? $7a49300a14b2b680$var$exponential(a, b, y) : $dca6a1eefdfccc6e$export$2e2bcd8739ae039(isNaN(a) ? b : a);
    };
}
function $7a49300a14b2b680$export$2e2bcd8739ae039(a, b) {
    var d = b - a;
    return d ? $7a49300a14b2b680$var$linear(a, d) : $dca6a1eefdfccc6e$export$2e2bcd8739ae039(isNaN(a) ? b : a);
}


var $50aeaf90f82ee275$export$2e2bcd8739ae039 = function rgbGamma(y) {
    var color = $7a49300a14b2b680$export$a7ebe8cc6aaf8d37(y);
    function rgb(start, end) {
        var r = color((start = $3b13fb556c98fb72$export$8972dc0e6ad9238f(start)).r, (end = $3b13fb556c98fb72$export$8972dc0e6ad9238f(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = $7a49300a14b2b680$export$2e2bcd8739ae039(start.opacity, end.opacity);
        return function(t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
        };
    }
    rgb.gamma = rgbGamma;
    return rgb;
}(1);
function $50aeaf90f82ee275$var$rgbSpline(spline) {
    return function(colors) {
        var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color;
        for(i = 0; i < n; ++i){
            color = $3b13fb556c98fb72$export$8972dc0e6ad9238f(colors[i]);
            r[i] = color.r || 0;
            g[i] = color.g || 0;
            b[i] = color.b || 0;
        }
        r = spline(r);
        g = spline(g);
        b = spline(b);
        color.opacity = 1;
        return function(t) {
            color.r = r(t);
            color.g = g(t);
            color.b = b(t);
            return color + "";
        };
    };
}
var $50aeaf90f82ee275$export$2c0e28f2e2852d3f = $50aeaf90f82ee275$var$rgbSpline($ae9fc919b11a97db$export$2e2bcd8739ae039);
var $50aeaf90f82ee275$export$53d5214f625ccd4c = $50aeaf90f82ee275$var$rgbSpline($ba98f6eb164e3e9f$export$2e2bcd8739ae039);



function $dcced8d8917db2ac$export$2e2bcd8739ae039(a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
    return function(t) {
        for(i = 0; i < n; ++i)c[i] = a[i] * (1 - t) + b[i] * t;
        return c;
    };
}
function $dcced8d8917db2ac$export$5cd576d1827d40c8(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
}


function $7baa122eb843253b$export$2e2bcd8739ae039(a, b) {
    return ($dcced8d8917db2ac$export$5cd576d1827d40c8(b) ? $dcced8d8917db2ac$export$2e2bcd8739ae039 : $7baa122eb843253b$export$15d09067c6a5ee49)(a, b);
}
function $7baa122eb843253b$export$15d09067c6a5ee49(a, b) {
    var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
    for(i = 0; i < na; ++i)x[i] = $30766f4163c419ab$export$2e2bcd8739ae039(a[i], b[i]);
    for(; i < nb; ++i)c[i] = b[i];
    return function(t) {
        for(i = 0; i < na; ++i)c[i] = x[i](t);
        return c;
    };
}


function $d1f8fde2a15b3b61$export$2e2bcd8739ae039(a, b) {
    var d = new Date;
    return a = +a, b = +b, function(t) {
        return d.setTime(a * (1 - t) + b * t), d;
    };
}


function $f1b766452abee737$export$2e2bcd8739ae039(a, b) {
    return a = +a, b = +b, function(t) {
        return a * (1 - t) + b * t;
    };
}



function $a874279e708e089d$export$2e2bcd8739ae039(a, b) {
    var i = {}, c = {}, k;
    if (a === null || typeof a !== "object") a = {};
    if (b === null || typeof b !== "object") b = {};
    for(k in b)if (k in a) i[k] = $30766f4163c419ab$export$2e2bcd8739ae039(a[k], b[k]);
    else c[k] = b[k];
    return function(t) {
        for(k in i)c[k] = i[k](t);
        return c;
    };
}



var $c8e937673ace4ed3$var$reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, $c8e937673ace4ed3$var$reB = new RegExp($c8e937673ace4ed3$var$reA.source, "g");
function $c8e937673ace4ed3$var$zero(b) {
    return function() {
        return b;
    };
}
function $c8e937673ace4ed3$var$one(b) {
    return function(t) {
        return b(t) + "";
    };
}
function $c8e937673ace4ed3$export$2e2bcd8739ae039(a, b) {
    var bi = $c8e937673ace4ed3$var$reA.lastIndex = $c8e937673ace4ed3$var$reB.lastIndex = 0, am, bm, bs, i1 = -1, s = [], q = []; // number interpolators
    // Coerce inputs to strings.
    a = a + "", b = b + "";
    // Interpolate pairs of numbers in a & b.
    while((am = $c8e937673ace4ed3$var$reA.exec(a)) && (bm = $c8e937673ace4ed3$var$reB.exec(b))){
        if ((bs = bm.index) > bi) {
            bs = b.slice(bi, bs);
            if (s[i1]) s[i1] += bs; // coalesce with previous string
            else s[++i1] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) {
            if (s[i1]) s[i1] += bm; // coalesce with previous string
            else s[++i1] = bm;
        } else {
            s[++i1] = null;
            q.push({
                i: i1,
                x: $f1b766452abee737$export$2e2bcd8739ae039(am, bm)
            });
        }
        bi = $c8e937673ace4ed3$var$reB.lastIndex;
    }
    // Add remains of b.
    if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i1]) s[i1] += bs; // coalesce with previous string
        else s[++i1] = bs;
    }
    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? q[0] ? $c8e937673ace4ed3$var$one(q[0].x) : $c8e937673ace4ed3$var$zero(b) : (b = q.length, function(t) {
        for(var i = 0, o; i < b; ++i)s[(o = q[i]).i] = o.x(t);
        return s.join("");
    });
}




function $30766f4163c419ab$export$2e2bcd8739ae039(a, b) {
    var t = typeof b === "undefined" ? "undefined" : $b6114e387d8b13b2$export$2e2bcd8739ae039(b), c;
    return b == null || t === "boolean" ? $dca6a1eefdfccc6e$export$2e2bcd8739ae039(b) : (t === "number" ? $f1b766452abee737$export$2e2bcd8739ae039 : t === "string" ? (c = $3b13fb556c98fb72$export$2e2bcd8739ae039(b)) ? (b = c, $50aeaf90f82ee275$export$2e2bcd8739ae039) : $c8e937673ace4ed3$export$2e2bcd8739ae039 : b instanceof $3b13fb556c98fb72$export$2e2bcd8739ae039 ? $50aeaf90f82ee275$export$2e2bcd8739ae039 : b instanceof Date ? $d1f8fde2a15b3b61$export$2e2bcd8739ae039 : $dcced8d8917db2ac$export$5cd576d1827d40c8(b) ? $dcced8d8917db2ac$export$2e2bcd8739ae039 : Array.isArray(b) ? $7baa122eb843253b$export$15d09067c6a5ee49 : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? $a874279e708e089d$export$2e2bcd8739ae039 : $f1b766452abee737$export$2e2bcd8739ae039)(a, b);
}


var $b3735032df0610b0$var$degrees = 180 / Math.PI;
var $b3735032df0610b0$export$f0954fd7d5368655 = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
function $b3735032df0610b0$export$2e2bcd8739ae039(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
        translateX: e,
        translateY: f,
        rotate: Math.atan2(b, a) * $b3735032df0610b0$var$degrees,
        skewX: Math.atan(skewX) * $b3735032df0610b0$var$degrees,
        scaleX: scaleX,
        scaleY: scaleY
    };
}


var $75a6313cd4e4a46b$var$svgNode;
function $75a6313cd4e4a46b$export$59ad369bf4938177(value) {
    var m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? $b3735032df0610b0$export$f0954fd7d5368655 : $b3735032df0610b0$export$2e2bcd8739ae039(m.a, m.b, m.c, m.d, m.e, m.f);
}
function $75a6313cd4e4a46b$export$f9ef43f9a1d89a18(value) {
    if (value == null) return $b3735032df0610b0$export$f0954fd7d5368655;
    if (!$75a6313cd4e4a46b$var$svgNode) $75a6313cd4e4a46b$var$svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    $75a6313cd4e4a46b$var$svgNode.setAttribute("transform", value);
    if (!(value = $75a6313cd4e4a46b$var$svgNode.transform.baseVal.consolidate())) return $b3735032df0610b0$export$f0954fd7d5368655;
    value = value.matrix;
    return $b3735032df0610b0$export$2e2bcd8739ae039(value.a, value.b, value.c, value.d, value.e, value.f);
}


function $78435134bc201852$var$interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
        return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push("translate(", null, pxComma, null, pxParen);
            q.push({
                i: i - 4,
                x: $f1b766452abee737$export$2e2bcd8739ae039(xa, xb)
            }, {
                i: i - 2,
                x: $f1b766452abee737$export$2e2bcd8739ae039(ya, yb)
            });
        } else if (xb || yb) s.push("translate(" + xb + pxComma + yb + pxParen);
    }
    function rotate(a, b, s, q) {
        if (a !== b) {
            if (a - b > 180) b += 360;
            else if (b - a > 180) a += 360; // shortest path
            q.push({
                i: s.push(pop(s) + "rotate(", null, degParen) - 2,
                x: $f1b766452abee737$export$2e2bcd8739ae039(a, b)
            });
        } else if (b) s.push(pop(s) + "rotate(" + b + degParen);
    }
    function skewX(a, b, s, q) {
        if (a !== b) q.push({
            i: s.push(pop(s) + "skewX(", null, degParen) - 2,
            x: $f1b766452abee737$export$2e2bcd8739ae039(a, b)
        });
        else if (b) s.push(pop(s) + "skewX(" + b + degParen);
    }
    function scale(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push(pop(s) + "scale(", null, ",", null, ")");
            q.push({
                i: i - 4,
                x: $f1b766452abee737$export$2e2bcd8739ae039(xa, xb)
            }, {
                i: i - 2,
                x: $f1b766452abee737$export$2e2bcd8739ae039(ya, yb)
            });
        } else if (xb !== 1 || yb !== 1) s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
    return function(a, b) {
        var s = [], q = []; // number interpolators
        a = parse(a), b = parse(b);
        translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
        rotate(a.rotate, b.rotate, s, q);
        skewX(a.skewX, b.skewX, s, q);
        scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
        a = b = null; // gc
        return function(t) {
            var i = -1, n = q.length, o;
            while(++i < n)s[(o = q[i]).i] = o.x(t);
            return s.join("");
        };
    };
}
var $78435134bc201852$export$56bec7123bb3589a = $78435134bc201852$var$interpolateTransform($75a6313cd4e4a46b$export$59ad369bf4938177, "px, ", "px)", "deg)");
var $78435134bc201852$export$da8cba906d64c082 = $78435134bc201852$var$interpolateTransform($75a6313cd4e4a46b$export$f9ef43f9a1d89a18, ", ", ")", ")");

var $a25b30c37bc6f789$var$epsilon2 = 0.000000000001;
function $a25b30c37bc6f789$var$cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
}
function $a25b30c37bc6f789$var$sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
}
function $a25b30c37bc6f789$var$tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
var $a25b30c37bc6f789$export$2e2bcd8739ae039 = function zoomRho(rho, rho2, rho4) {
    // p0 = [ux0, uy0, w0]
    // p1 = [ux1, uy1, w1]
    function zoom(p0, p1) {
        var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
        // Special case for u0 ≅ u1.
        if (d2 < $a25b30c37bc6f789$var$epsilon2) {
            S = Math.log(w1 / w0) / rho;
            i = function i(t) {
                return [
                    ux0 + t * dx,
                    uy0 + t * dy,
                    w0 * Math.exp(rho * t * S)
                ];
            };
        } else {
            var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
            S = (r1 - r0) / rho;
            i = function i(t) {
                var s = t * S, coshr0 = $a25b30c37bc6f789$var$cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * $a25b30c37bc6f789$var$tanh(rho * s + r0) - $a25b30c37bc6f789$var$sinh(r0));
                return [
                    ux0 + u * dx,
                    uy0 + u * dy,
                    w0 * coshr0 / $a25b30c37bc6f789$var$cosh(rho * s + r0)
                ];
            };
        }
        i.duration = S * 1000 * rho / Math.SQRT2;
        return i;
    }
    zoom.rho = function(_) {
        var _1 = Math.max(0.001, +_), _2 = _1 * _1, _4 = _2 * _2;
        return zoomRho(_1, _2, _4);
    };
    return zoom;
}(Math.SQRT2, 2, 4);






var $daa04aa430ef1068$var$frame = 0, $daa04aa430ef1068$var$timeout = 0, $daa04aa430ef1068$var$interval = 0, $daa04aa430ef1068$var$pokeDelay = 1000, $daa04aa430ef1068$var$taskHead, $daa04aa430ef1068$var$taskTail, $daa04aa430ef1068$var$clockLast = 0, $daa04aa430ef1068$var$clockNow = 0, $daa04aa430ef1068$var$clockSkew = 0, $daa04aa430ef1068$var$clock = typeof performance === "object" && performance.now ? performance : Date, $daa04aa430ef1068$var$setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function $daa04aa430ef1068$var$setFrame(f) {
    setTimeout(f, 17);
};
function $daa04aa430ef1068$export$461939dd4422153() {
    return $daa04aa430ef1068$var$clockNow || ($daa04aa430ef1068$var$setFrame($daa04aa430ef1068$var$clearNow), $daa04aa430ef1068$var$clockNow = $daa04aa430ef1068$var$clock.now() + $daa04aa430ef1068$var$clockSkew);
}
function $daa04aa430ef1068$var$clearNow() {
    $daa04aa430ef1068$var$clockNow = 0;
}
function $daa04aa430ef1068$export$c57e9b2d8b9e4de() {
    this._call = this._time = this._next = null;
}
$daa04aa430ef1068$export$c57e9b2d8b9e4de.prototype = $daa04aa430ef1068$export$9dc4ecf953986f04.prototype = {
    constructor: $daa04aa430ef1068$export$c57e9b2d8b9e4de,
    restart: function restart(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? $daa04aa430ef1068$export$461939dd4422153() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && $daa04aa430ef1068$var$taskTail !== this) {
            if ($daa04aa430ef1068$var$taskTail) $daa04aa430ef1068$var$taskTail._next = this;
            else $daa04aa430ef1068$var$taskHead = this;
            $daa04aa430ef1068$var$taskTail = this;
        }
        this._call = callback;
        this._time = time;
        $daa04aa430ef1068$var$sleep();
    },
    stop: function stop() {
        if (this._call) {
            this._call = null;
            this._time = Infinity;
            $daa04aa430ef1068$var$sleep();
        }
    }
};
function $daa04aa430ef1068$export$9dc4ecf953986f04(callback, delay, time) {
    var t = new $daa04aa430ef1068$export$c57e9b2d8b9e4de;
    t.restart(callback, delay, time);
    return t;
}
function $daa04aa430ef1068$export$d60154c1d7f3990e() {
    $daa04aa430ef1068$export$461939dd4422153(); // Get the current time, if not already set.
    ++$daa04aa430ef1068$var$frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = $daa04aa430ef1068$var$taskHead, e;
    while(t){
        if ((e = $daa04aa430ef1068$var$clockNow - t._time) >= 0) t._call.call(undefined, e);
        t = t._next;
    }
    --$daa04aa430ef1068$var$frame;
}
function $daa04aa430ef1068$var$wake() {
    $daa04aa430ef1068$var$clockNow = ($daa04aa430ef1068$var$clockLast = $daa04aa430ef1068$var$clock.now()) + $daa04aa430ef1068$var$clockSkew;
    $daa04aa430ef1068$var$frame = $daa04aa430ef1068$var$timeout = 0;
    try {
        $daa04aa430ef1068$export$d60154c1d7f3990e();
    } finally{
        $daa04aa430ef1068$var$frame = 0;
        $daa04aa430ef1068$var$nap();
        $daa04aa430ef1068$var$clockNow = 0;
    }
}
function $daa04aa430ef1068$var$poke() {
    var $daa04aa430ef1068$export$461939dd4422153 = $daa04aa430ef1068$var$clock.now(), delay = $daa04aa430ef1068$export$461939dd4422153 - $daa04aa430ef1068$var$clockLast;
    if (delay > $daa04aa430ef1068$var$pokeDelay) $daa04aa430ef1068$var$clockSkew -= delay, $daa04aa430ef1068$var$clockLast = $daa04aa430ef1068$export$461939dd4422153;
}
function $daa04aa430ef1068$var$nap() {
    var t0, t1 = $daa04aa430ef1068$var$taskHead, t2, time = Infinity;
    while(t1)if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
    } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : $daa04aa430ef1068$var$taskHead = t2;
    }
    $daa04aa430ef1068$var$taskTail = t0;
    $daa04aa430ef1068$var$sleep(time);
}
function $daa04aa430ef1068$var$sleep(time) {
    if ($daa04aa430ef1068$var$frame) return; // Soonest alarm already set, or will be.
    if ($daa04aa430ef1068$var$timeout) $daa04aa430ef1068$var$timeout = clearTimeout($daa04aa430ef1068$var$timeout);
    var delay = time - $daa04aa430ef1068$var$clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
        if (time < Infinity) $daa04aa430ef1068$var$timeout = setTimeout($daa04aa430ef1068$var$wake, time - $daa04aa430ef1068$var$clock.now() - $daa04aa430ef1068$var$clockSkew);
        if ($daa04aa430ef1068$var$interval) $daa04aa430ef1068$var$interval = clearInterval($daa04aa430ef1068$var$interval);
    } else {
        if (!$daa04aa430ef1068$var$interval) $daa04aa430ef1068$var$clockLast = $daa04aa430ef1068$var$clock.now(), $daa04aa430ef1068$var$interval = setInterval($daa04aa430ef1068$var$poke, $daa04aa430ef1068$var$pokeDelay);
        $daa04aa430ef1068$var$frame = 1, $daa04aa430ef1068$var$setFrame($daa04aa430ef1068$var$wake);
    }
}


function $d89d8f692b1795ec$export$2e2bcd8739ae039(callback, delay, time) {
    var t = new $daa04aa430ef1068$export$c57e9b2d8b9e4de;
    delay = delay == null ? 0 : +delay;
    t.restart(function(elapsed) {
        t.stop();
        callback(elapsed + delay);
    }, delay, time);
    return t;
}



var $94df50465c1e45bc$var$emptyOn = $15d51cc84868dd78$export$2e2bcd8739ae039("start", "end", "cancel", "interrupt");
var $94df50465c1e45bc$var$emptyTween = [];
var $94df50465c1e45bc$export$ff39ebd4bb12b718 = 0;
var $94df50465c1e45bc$export$584530fe98d14a84 = 1;
var $94df50465c1e45bc$export$a5d151aee16efd42 = 2;
var $94df50465c1e45bc$export$fb935ab5849a0db9 = 3;
var $94df50465c1e45bc$export$1573e22b087389af = 4;
var $94df50465c1e45bc$export$a2e792214ded83b2 = 5;
var $94df50465c1e45bc$export$9d38167254403955 = 6;
function $94df50465c1e45bc$export$2e2bcd8739ae039(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};
    else if (id in schedules) return;
    $94df50465c1e45bc$var$create(node, id, {
        name: name,
        index: index,
        group: group,
        on: $94df50465c1e45bc$var$emptyOn,
        tween: $94df50465c1e45bc$var$emptyTween,
        time: timing.time,
        delay: timing.delay,
        duration: timing.duration,
        ease: timing.ease,
        timer: null,
        state: $94df50465c1e45bc$export$ff39ebd4bb12b718
    });
}
function $94df50465c1e45bc$export$2cd8252107eb640b(node, id) {
    var schedule = $94df50465c1e45bc$export$3988ae62b71be9a3(node, id);
    if (schedule.state > $94df50465c1e45bc$export$ff39ebd4bb12b718) throw new Error("too late; already scheduled");
    return schedule;
}
function $94df50465c1e45bc$export$adaa4cf7ef1b65be(node, id) {
    var schedule = $94df50465c1e45bc$export$3988ae62b71be9a3(node, id);
    if (schedule.state > $94df50465c1e45bc$export$fb935ab5849a0db9) throw new Error("too late; already running");
    return schedule;
}
function $94df50465c1e45bc$export$3988ae62b71be9a3(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
}
function $94df50465c1e45bc$var$create(node, id, self) {
    var schedules = node.__transition, tween;
    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = $daa04aa430ef1068$export$9dc4ecf953986f04(schedule, 0, self.time);
    function schedule(elapsed) {
        self.state = $94df50465c1e45bc$export$584530fe98d14a84;
        self.timer.restart(start, self.delay, self.time);
        // If the elapsed delay is less than our first sleep, start immediately.
        if (self.delay <= elapsed) start(elapsed - self.delay);
    }
    function start(elapsed) {
        var i, j, n, o;
        // If the state is not SCHEDULED, then we previously errored on start.
        if (self.state !== $94df50465c1e45bc$export$584530fe98d14a84) return stop();
        for(i in schedules){
            o = schedules[i];
            if (o.name !== self.name) continue;
            // While this element already has a starting transition during this frame,
            // defer starting an interrupting transition until that transition has a
            // chance to tick (and possibly end); see d3/d3-transition#54!
            if (o.state === $94df50465c1e45bc$export$fb935ab5849a0db9) return $d89d8f692b1795ec$export$2e2bcd8739ae039(start);
            // Interrupt the active transition, if any.
            if (o.state === $94df50465c1e45bc$export$1573e22b087389af) {
                o.state = $94df50465c1e45bc$export$9d38167254403955;
                o.timer.stop();
                o.on.call("interrupt", node, node.__data__, o.index, o.group);
                delete schedules[i];
            } else if (+i < id) {
                o.state = $94df50465c1e45bc$export$9d38167254403955;
                o.timer.stop();
                o.on.call("cancel", node, node.__data__, o.index, o.group);
                delete schedules[i];
            }
        }
        // Defer the first tick to end of the current frame; see d3/d3#1576.
        // Note the transition may be canceled after start and before the first tick!
        // Note this must be scheduled before the start event; see d3/d3-transition#16!
        // Assuming this is successful, subsequent callbacks go straight to tick.
        $d89d8f692b1795ec$export$2e2bcd8739ae039(function() {
            if (self.state === $94df50465c1e45bc$export$fb935ab5849a0db9) {
                self.state = $94df50465c1e45bc$export$1573e22b087389af;
                self.timer.restart(tick, self.delay, self.time);
                tick(elapsed);
            }
        });
        // Dispatch the start event.
        // Note this must be done before the tween are initialized.
        self.state = $94df50465c1e45bc$export$a5d151aee16efd42;
        self.on.call("start", node, node.__data__, self.index, self.group);
        if (self.state !== $94df50465c1e45bc$export$a5d151aee16efd42) return; // interrupted
        self.state = $94df50465c1e45bc$export$fb935ab5849a0db9;
        // Initialize the tween, deleting null tween.
        tween = new Array(n = self.tween.length);
        for(i = 0, j = -1; i < n; ++i)if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) tween[++j] = o;
        tween.length = j + 1;
    }
    function tick(elapsed) {
        var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = $94df50465c1e45bc$export$a2e792214ded83b2, 1), i = -1, n = tween.length;
        while(++i < n)tween[i].call(node, t);
        // Dispatch the end event.
        if (self.state === $94df50465c1e45bc$export$a2e792214ded83b2) {
            self.on.call("end", node, node.__data__, self.index, self.group);
            stop();
        }
    }
    function stop() {
        self.state = $94df50465c1e45bc$export$9d38167254403955;
        self.timer.stop();
        delete schedules[id];
        for(var i in schedules)return; // eslint-disable-line no-unused-vars
        delete node.__transition;
    }
}


function $144433e16464ae98$export$2e2bcd8739ae039(node, name) {
    var schedules = node.__transition, schedule, active, empty = true, i;
    if (!schedules) return;
    name = name == null ? null : name + "";
    for(i in schedules){
        if ((schedule = schedules[i]).name !== name) {
            empty = false;
            continue;
        }
        active = schedule.state > $94df50465c1e45bc$export$a5d151aee16efd42 && schedule.state < $94df50465c1e45bc$export$a2e792214ded83b2;
        schedule.state = $94df50465c1e45bc$export$9d38167254403955;
        schedule.timer.stop();
        schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
        delete schedules[i];
    }
    if (empty) delete node.__transition;
}


function $005d2c1cb8523db8$export$2e2bcd8739ae039(name) {
    return this.each(function() {
        $144433e16464ae98$export$2e2bcd8739ae039(this, name);
    });
}







function $49df43726de8a125$var$tweenRemove(id, name) {
    var tween0, tween1;
    return function() {
        var schedule = $94df50465c1e45bc$export$adaa4cf7ef1b65be(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = tween0 = tween;
            for(var i = 0, n = tween1.length; i < n; ++i)if (tween1[i].name === name) {
                tween1 = tween1.slice();
                tween1.splice(i, 1);
                break;
            }
        }
        schedule.tween = tween1;
    };
}
function $49df43726de8a125$var$tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error;
    return function() {
        var schedule = $94df50465c1e45bc$export$adaa4cf7ef1b65be(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = (tween0 = tween).slice();
            for(var t = {
                name: name,
                value: value
            }, i = 0, n = tween1.length; i < n; ++i)if (tween1[i].name === name) {
                tween1[i] = t;
                break;
            }
            if (i === n) tween1.push(t);
        }
        schedule.tween = tween1;
    };
}
function $49df43726de8a125$export$2e2bcd8739ae039(name, value) {
    var id = this._id;
    name += "";
    if (arguments.length < 2) {
        var tween = $94df50465c1e45bc$export$3988ae62b71be9a3(this.node(), id).tween;
        for(var i = 0, n = tween.length, t; i < n; ++i){
            if ((t = tween[i]).name === name) return t.value;
        }
        return null;
    }
    return this.each((value == null ? $49df43726de8a125$var$tweenRemove : $49df43726de8a125$var$tweenFunction)(id, name, value));
}
function $49df43726de8a125$export$f78ce6ab10405d82(transition, name, value) {
    var id = transition._id;
    transition.each(function() {
        var schedule = $94df50465c1e45bc$export$adaa4cf7ef1b65be(this, id);
        (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function(node) {
        return $94df50465c1e45bc$export$3988ae62b71be9a3(node, id).value[name];
    };
}




function $e239df03be7f8c70$export$2e2bcd8739ae039(a, b) {
    var c;
    return (typeof b === "number" ? $f1b766452abee737$export$2e2bcd8739ae039 : b instanceof $3b13fb556c98fb72$export$2e2bcd8739ae039 ? $50aeaf90f82ee275$export$2e2bcd8739ae039 : (c = $3b13fb556c98fb72$export$2e2bcd8739ae039(b)) ? (b = c, $50aeaf90f82ee275$export$2e2bcd8739ae039) : $c8e937673ace4ed3$export$2e2bcd8739ae039)(a, b);
}


function $1489ab7c1108b2b4$var$attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function $1489ab7c1108b2b4$var$attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function $1489ab7c1108b2b4$var$attrConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttribute(name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function $1489ab7c1108b2b4$var$attrConstantNS(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttributeNS(fullname.space, fullname.local);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function $1489ab7c1108b2b4$var$attrFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttribute(name);
        string0 = this.getAttribute(name);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function $1489ab7c1108b2b4$var$attrFunctionNS(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
        string0 = this.getAttributeNS(fullname.space, fullname.local);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function $1489ab7c1108b2b4$export$2e2bcd8739ae039(name, value) {
    var fullname = $fb09cdb0904e852b$export$2e2bcd8739ae039(name), i = fullname === "transform" ? $78435134bc201852$export$da8cba906d64c082 : $e239df03be7f8c70$export$2e2bcd8739ae039;
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? $1489ab7c1108b2b4$var$attrFunctionNS : $1489ab7c1108b2b4$var$attrFunction)(fullname, i, $49df43726de8a125$export$f78ce6ab10405d82(this, "attr." + name, value)) : value == null ? (fullname.local ? $1489ab7c1108b2b4$var$attrRemoveNS : $1489ab7c1108b2b4$var$attrRemove)(fullname) : (fullname.local ? $1489ab7c1108b2b4$var$attrConstantNS : $1489ab7c1108b2b4$var$attrConstant)(fullname, i, value));
}



function $fe18deda61b5a75d$var$attrInterpolate(name, i) {
    return function(t) {
        this.setAttribute(name, i.call(this, t));
    };
}
function $fe18deda61b5a75d$var$attrInterpolateNS(fullname, i) {
    return function(t) {
        this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
}
function $fe18deda61b5a75d$var$attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && $fe18deda61b5a75d$var$attrInterpolateNS(fullname, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function $fe18deda61b5a75d$var$attrTween(name, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && $fe18deda61b5a75d$var$attrInterpolate(name, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function $fe18deda61b5a75d$export$2e2bcd8739ae039(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    var fullname = $fb09cdb0904e852b$export$2e2bcd8739ae039(name);
    return this.tween(key, (fullname.local ? $fe18deda61b5a75d$var$attrTweenNS : $fe18deda61b5a75d$var$attrTween)(fullname, value));
}



function $ecb9da39eae24d5b$var$delayFunction(id, value) {
    return function() {
        $94df50465c1e45bc$export$2cd8252107eb640b(this, id).delay = +value.apply(this, arguments);
    };
}
function $ecb9da39eae24d5b$var$delayConstant(id, value) {
    return value = +value, function() {
        $94df50465c1e45bc$export$2cd8252107eb640b(this, id).delay = value;
    };
}
function $ecb9da39eae24d5b$export$2e2bcd8739ae039(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? $ecb9da39eae24d5b$var$delayFunction : $ecb9da39eae24d5b$var$delayConstant)(id, value)) : $94df50465c1e45bc$export$3988ae62b71be9a3(this.node(), id).delay;
}



function $2d94f4ca656734a9$var$durationFunction(id, value) {
    return function() {
        $94df50465c1e45bc$export$adaa4cf7ef1b65be(this, id).duration = +value.apply(this, arguments);
    };
}
function $2d94f4ca656734a9$var$durationConstant(id, value) {
    return value = +value, function() {
        $94df50465c1e45bc$export$adaa4cf7ef1b65be(this, id).duration = value;
    };
}
function $2d94f4ca656734a9$export$2e2bcd8739ae039(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? $2d94f4ca656734a9$var$durationFunction : $2d94f4ca656734a9$var$durationConstant)(id, value)) : $94df50465c1e45bc$export$3988ae62b71be9a3(this.node(), id).duration;
}



function $abc2bc67c3bcc30c$var$easeConstant(id, value) {
    if (typeof value !== "function") throw new Error;
    return function() {
        $94df50465c1e45bc$export$adaa4cf7ef1b65be(this, id).ease = value;
    };
}
function $abc2bc67c3bcc30c$export$2e2bcd8739ae039(value) {
    var id = this._id;
    return arguments.length ? this.each($abc2bc67c3bcc30c$var$easeConstant(id, value)) : $94df50465c1e45bc$export$3988ae62b71be9a3(this.node(), id).ease;
}



function $20f601106077e9c0$var$easeVarying(id, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (typeof v !== "function") throw new Error;
        $94df50465c1e45bc$export$adaa4cf7ef1b65be(this, id).ease = v;
    };
}
function $20f601106077e9c0$export$2e2bcd8739ae039(value) {
    if (typeof value !== "function") throw new Error;
    return this.each($20f601106077e9c0$var$easeVarying(this._id, value));
}




function $24e30295dd791487$export$2e2bcd8739ae039(match) {
    if (typeof match !== "function") match = $3ab50afcb901af8e$export$2e2bcd8739ae039(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
    }
    return new $e9f3fe6d31e2d502$export$be58926105124dd4(subgroups, this._parents, this._name, this._id);
}



function $1968e210f2a94fef$export$2e2bcd8739ae039(transition) {
    if (transition._id !== this._id) throw new Error;
    for(var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
    }
    for(; j < m0; ++j)merges[j] = groups0[j];
    return new $e9f3fe6d31e2d502$export$be58926105124dd4(merges, this._parents, this._name, this._id);
}



function $01204e6c2d674881$var$start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
        var i = t.indexOf(".");
        if (i >= 0) t = t.slice(0, i);
        return !t || t === "start";
    });
}
function $01204e6c2d674881$var$onFunction(id, name, listener) {
    var on0, on1, sit = $01204e6c2d674881$var$start(name) ? $94df50465c1e45bc$export$2cd8252107eb640b : $94df50465c1e45bc$export$adaa4cf7ef1b65be;
    return function() {
        var schedule = sit(this, id), on = schedule.on;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
        schedule.on = on1;
    };
}
function $01204e6c2d674881$export$2e2bcd8739ae039(name, listener) {
    var id = this._id;
    return arguments.length < 2 ? $94df50465c1e45bc$export$3988ae62b71be9a3(this.node(), id).on.on(name) : this.each($01204e6c2d674881$var$onFunction(id, name, listener));
}


function $7acb40c913d35abd$var$removeFunction(id) {
    return function() {
        var parent = this.parentNode;
        for(var i in this.__transition)if (+i !== id) return;
        if (parent) parent.removeChild(this);
    };
}
function $7acb40c913d35abd$export$2e2bcd8739ae039() {
    return this.on("end.remove", $7acb40c913d35abd$var$removeFunction(this._id));
}





function $ee1d5d3e7f86a2ef$export$2e2bcd8739ae039(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = $90c858259166403e$export$2e2bcd8739ae039(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
            $94df50465c1e45bc$export$2e2bcd8739ae039(subgroup[i], name, id, i, subgroup, $94df50465c1e45bc$export$3988ae62b71be9a3(node, id));
        }
    }
    return new $e9f3fe6d31e2d502$export$be58926105124dd4(subgroups, this._parents, name, id);
}





function $012641239ac32206$export$2e2bcd8739ae039(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = $89f7903ebb33309f$export$2e2bcd8739ae039(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            for(var children = select.call(node, node.__data__, i, group), child, inherit = $94df50465c1e45bc$export$3988ae62b71be9a3(node, id), k = 0, l = children.length; k < l; ++k)if (child = children[k]) $94df50465c1e45bc$export$2e2bcd8739ae039(child, name, id, k, children, inherit);
            subgroups.push(children);
            parents.push(node);
        }
    }
    return new $e9f3fe6d31e2d502$export$be58926105124dd4(subgroups, parents, name, id);
}



var $08648632830ea670$var$Selection = $3654faccbe748cfb$export$2e2bcd8739ae039.prototype.constructor;
function $08648632830ea670$export$2e2bcd8739ae039() {
    return new $08648632830ea670$var$Selection(this._groups, this._parents);
}







function $3703249a6595e730$var$styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = $916c95547a91b04b$export$5e3cec964f0b5efd(this, name), string1 = (this.style.removeProperty(name), $916c95547a91b04b$export$5e3cec964f0b5efd(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
}
function $3703249a6595e730$var$styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function $3703249a6595e730$var$styleConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = $916c95547a91b04b$export$5e3cec964f0b5efd(this, name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function $3703249a6595e730$var$styleFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = $916c95547a91b04b$export$5e3cec964f0b5efd(this, name), value1 = value(this), string1 = value1 + "";
        if (value1 == null) string1 = value1 = (this.style.removeProperty(name), $916c95547a91b04b$export$5e3cec964f0b5efd(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function $3703249a6595e730$var$styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function() {
        var schedule = $94df50465c1e45bc$export$adaa4cf7ef1b65be(this, id), on = schedule.on, listener = schedule.value[key] == null ? remove || (remove = $3703249a6595e730$var$styleRemove(name)) : undefined;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
        schedule.on = on1;
    };
}
function $3703249a6595e730$export$2e2bcd8739ae039(name, value, priority) {
    var i = (name += "") === "transform" ? $78435134bc201852$export$56bec7123bb3589a : $e239df03be7f8c70$export$2e2bcd8739ae039;
    return value == null ? this.styleTween(name, $3703249a6595e730$var$styleNull(name, i)).on("end.style." + name, $3703249a6595e730$var$styleRemove(name)) : typeof value === "function" ? this.styleTween(name, $3703249a6595e730$var$styleFunction(name, i, $49df43726de8a125$export$f78ce6ab10405d82(this, "style." + name, value))).each($3703249a6595e730$var$styleMaybeRemove(this._id, name)) : this.styleTween(name, $3703249a6595e730$var$styleConstant(name, i, value), priority).on("end.style." + name, null);
}


function $ae7f936f36d0df11$var$styleInterpolate(name, i, priority) {
    return function(t) {
        this.style.setProperty(name, i.call(this, t), priority);
    };
}
function $ae7f936f36d0df11$var$styleTween(name, value, priority) {
    var t, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t = (i0 = i) && $ae7f936f36d0df11$var$styleInterpolate(name, i, priority);
        return t;
    }
    tween._value = value;
    return tween;
}
function $ae7f936f36d0df11$export$2e2bcd8739ae039(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, $ae7f936f36d0df11$var$styleTween(name, value, priority == null ? "" : priority));
}



function $a29f0eeb5cf4b72d$var$textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function $a29f0eeb5cf4b72d$var$textFunction(value) {
    return function() {
        var value1 = value(this);
        this.textContent = value1 == null ? "" : value1;
    };
}
function $a29f0eeb5cf4b72d$export$2e2bcd8739ae039(value) {
    return this.tween("text", typeof value === "function" ? $a29f0eeb5cf4b72d$var$textFunction($49df43726de8a125$export$f78ce6ab10405d82(this, "text", value)) : $a29f0eeb5cf4b72d$var$textConstant(value == null ? "" : value + ""));
}


function $52f98853361befae$var$textInterpolate(i) {
    return function(t) {
        this.textContent = i.call(this, t);
    };
}
function $52f98853361befae$var$textTween(value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && $52f98853361befae$var$textInterpolate(i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function $52f98853361befae$export$2e2bcd8739ae039(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, $52f98853361befae$var$textTween(value));
}




function $b66919e1284f7401$export$2e2bcd8739ae039() {
    var name = this._name, id0 = this._id, id1 = $e9f3fe6d31e2d502$export$9ffd10a3fbdc175b();
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            var inherit = $94df50465c1e45bc$export$3988ae62b71be9a3(node, id0);
            $94df50465c1e45bc$export$2e2bcd8739ae039(node, name, id1, i, group, {
                time: inherit.time + inherit.delay + inherit.duration,
                delay: 0,
                duration: inherit.duration,
                ease: inherit.ease
            });
        }
    }
    return new $e9f3fe6d31e2d502$export$be58926105124dd4(groups, this._parents, name, id1);
}




function $3190be91c28bad08$export$2e2bcd8739ae039() {
    var on0, on1, that = this, id = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
        var cancel = {
            value: reject
        }, end = {
            value: function value() {
                if (--size === 0) resolve();
            }
        };
        that.each(function() {
            var schedule = $94df50465c1e45bc$export$adaa4cf7ef1b65be(this, id), on = schedule.on;
            // If this node shared a dispatch with the previous node,
            // just assign the updated shared dispatch and we’re done!
            // Otherwise, copy-on-write.
            if (on !== on0) {
                on1 = (on0 = on).copy();
                on1._.cancel.push(cancel);
                on1._.interrupt.push(cancel);
                on1._.end.push(end);
            }
            schedule.on = on1;
        });
        // The selection was empty, resolve end immediately
        if (size === 0) resolve();
    });
}


var $e9f3fe6d31e2d502$var$id = 0;
function $e9f3fe6d31e2d502$export$be58926105124dd4(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
}
function $e9f3fe6d31e2d502$export$2e2bcd8739ae039(name) {
    return $3654faccbe748cfb$export$2e2bcd8739ae039().transition(name);
}
function $e9f3fe6d31e2d502$export$9ffd10a3fbdc175b() {
    return ++$e9f3fe6d31e2d502$var$id;
}
var $e9f3fe6d31e2d502$var$selection_prototype = $3654faccbe748cfb$export$2e2bcd8739ae039.prototype;
$e9f3fe6d31e2d502$export$be58926105124dd4.prototype = $e9f3fe6d31e2d502$export$2e2bcd8739ae039.prototype = $ccd72981aafedafd$export$2e2bcd8739ae039({
    constructor: $e9f3fe6d31e2d502$export$be58926105124dd4,
    select: $ee1d5d3e7f86a2ef$export$2e2bcd8739ae039,
    selectAll: $012641239ac32206$export$2e2bcd8739ae039,
    selectChild: $e9f3fe6d31e2d502$var$selection_prototype.selectChild,
    selectChildren: $e9f3fe6d31e2d502$var$selection_prototype.selectChildren,
    filter: $24e30295dd791487$export$2e2bcd8739ae039,
    merge: $1968e210f2a94fef$export$2e2bcd8739ae039,
    selection: $08648632830ea670$export$2e2bcd8739ae039,
    transition: $b66919e1284f7401$export$2e2bcd8739ae039,
    call: $e9f3fe6d31e2d502$var$selection_prototype.call,
    nodes: $e9f3fe6d31e2d502$var$selection_prototype.nodes,
    node: $e9f3fe6d31e2d502$var$selection_prototype.node,
    size: $e9f3fe6d31e2d502$var$selection_prototype.size,
    empty: $e9f3fe6d31e2d502$var$selection_prototype.empty,
    each: $e9f3fe6d31e2d502$var$selection_prototype.each,
    on: $01204e6c2d674881$export$2e2bcd8739ae039,
    attr: $1489ab7c1108b2b4$export$2e2bcd8739ae039,
    attrTween: $fe18deda61b5a75d$export$2e2bcd8739ae039,
    style: $3703249a6595e730$export$2e2bcd8739ae039,
    styleTween: $ae7f936f36d0df11$export$2e2bcd8739ae039,
    text: $a29f0eeb5cf4b72d$export$2e2bcd8739ae039,
    textTween: $52f98853361befae$export$2e2bcd8739ae039,
    remove: $7acb40c913d35abd$export$2e2bcd8739ae039,
    tween: $49df43726de8a125$export$2e2bcd8739ae039,
    delay: $ecb9da39eae24d5b$export$2e2bcd8739ae039,
    duration: $2d94f4ca656734a9$export$2e2bcd8739ae039,
    ease: $abc2bc67c3bcc30c$export$2e2bcd8739ae039,
    easeVarying: $20f601106077e9c0$export$2e2bcd8739ae039,
    end: $3190be91c28bad08$export$2e2bcd8739ae039
}, Symbol.iterator, $e9f3fe6d31e2d502$var$selection_prototype[Symbol.iterator]);



function $8b7ea8c740f408f7$export$b1a09cb1b71f86aa(t) {
    return t * t * t;
}
function $8b7ea8c740f408f7$export$68d528839c701b6(t) {
    return --t * t * t + 1;
}
function $8b7ea8c740f408f7$export$89238d3bc79d3ada(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

function $8aa9eb0798655b49$export$be3f0f7224794b88(x) {
    return (Math.pow(2, -10 * x) - 0.0009765625) * 1.0009775171065494;
}


var $3c5c77fc90302eb6$var$tau = 2 * Math.PI, $3c5c77fc90302eb6$var$amplitude = 1, $3c5c77fc90302eb6$var$period = 0.3;
var $3c5c77fc90302eb6$export$41f42134872a5fa0 = function custom(a1, p1) {
    var s = Math.asin(1 / (a1 = Math.max(1, a1))) * (p1 /= $3c5c77fc90302eb6$var$tau);
    function $3c5c77fc90302eb6$export$41f42134872a5fa0(t) {
        return a1 * $8aa9eb0798655b49$export$be3f0f7224794b88(- --t) * Math.sin((s - t) / p1);
    }
    $3c5c77fc90302eb6$export$41f42134872a5fa0.amplitude = function(a) {
        return custom(a, p1 * $3c5c77fc90302eb6$var$tau);
    };
    $3c5c77fc90302eb6$export$41f42134872a5fa0.period = function(p) {
        return custom(a1, p);
    };
    return $3c5c77fc90302eb6$export$41f42134872a5fa0;
}($3c5c77fc90302eb6$var$amplitude, $3c5c77fc90302eb6$var$period);
var $3c5c77fc90302eb6$export$ed1782b99e69bbc8 = function custom(a2, p2) {
    var s = Math.asin(1 / (a2 = Math.max(1, a2))) * (p2 /= $3c5c77fc90302eb6$var$tau);
    function $3c5c77fc90302eb6$export$ed1782b99e69bbc8(t) {
        return 1 - a2 * $8aa9eb0798655b49$export$be3f0f7224794b88(t = +t) * Math.sin((t + s) / p2);
    }
    $3c5c77fc90302eb6$export$ed1782b99e69bbc8.amplitude = function(a) {
        return custom(a, p2 * $3c5c77fc90302eb6$var$tau);
    };
    $3c5c77fc90302eb6$export$ed1782b99e69bbc8.period = function(p) {
        return custom(a2, p);
    };
    return $3c5c77fc90302eb6$export$ed1782b99e69bbc8;
}($3c5c77fc90302eb6$var$amplitude, $3c5c77fc90302eb6$var$period);
var $3c5c77fc90302eb6$export$309de4f35f218bfd = function custom(a3, p3) {
    var s = Math.asin(1 / (a3 = Math.max(1, a3))) * (p3 /= $3c5c77fc90302eb6$var$tau);
    function $3c5c77fc90302eb6$export$309de4f35f218bfd(t) {
        return ((t = t * 2 - 1) < 0 ? a3 * $8aa9eb0798655b49$export$be3f0f7224794b88(-t) * Math.sin((s - t) / p3) : 2 - a3 * $8aa9eb0798655b49$export$be3f0f7224794b88(t) * Math.sin((s + t) / p3)) / 2;
    }
    $3c5c77fc90302eb6$export$309de4f35f218bfd.amplitude = function(a) {
        return custom(a, p3 * $3c5c77fc90302eb6$var$tau);
    };
    $3c5c77fc90302eb6$export$309de4f35f218bfd.period = function(p) {
        return custom(a3, p);
    };
    return $3c5c77fc90302eb6$export$309de4f35f218bfd;
}($3c5c77fc90302eb6$var$amplitude, $3c5c77fc90302eb6$var$period);




var $88e6ba6f5cdf8bf3$var$defaultTiming = {
    time: null,
    delay: 0,
    duration: 250,
    ease: $8b7ea8c740f408f7$export$89238d3bc79d3ada
};
function $88e6ba6f5cdf8bf3$var$inherit(node, id) {
    var timing;
    while(!(timing = node.__transition) || !(timing = timing[id])){
        if (!(node = node.parentNode)) throw new Error("transition ".concat(id, " not found"));
    }
    return timing;
}
function $88e6ba6f5cdf8bf3$export$2e2bcd8739ae039(name) {
    var id, timing;
    if (name instanceof $e9f3fe6d31e2d502$export$be58926105124dd4) id = name._id, name = name._name;
    else id = $e9f3fe6d31e2d502$export$9ffd10a3fbdc175b(), (timing = $88e6ba6f5cdf8bf3$var$defaultTiming).time = $daa04aa430ef1068$export$461939dd4422153(), name = name == null ? null : name + "";
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) $94df50465c1e45bc$export$2e2bcd8739ae039(node, name, id, i, group, timing || $88e6ba6f5cdf8bf3$var$inherit(node, id));
    }
    return new $e9f3fe6d31e2d502$export$be58926105124dd4(groups, this._parents, name, id);
}


$3654faccbe748cfb$export$2e2bcd8739ae039.prototype.interrupt = $005d2c1cb8523db8$export$2e2bcd8739ae039;
$3654faccbe748cfb$export$2e2bcd8739ae039.prototype.transition = $88e6ba6f5cdf8bf3$export$2e2bcd8739ae039;







var $d024ce51fa71d3df$export$2e2bcd8739ae039 = function(x) {
    return function() {
        return x;
    };
};


function $881b750ee2254d22$export$2e2bcd8739ae039(type, param) {
    var sourceEvent = param.sourceEvent, target = param.target, selection = param.selection, mode = param.mode, dispatch = param.dispatch;
    Object.defineProperties(this, {
        type: {
            value: type,
            enumerable: true,
            configurable: true
        },
        sourceEvent: {
            value: sourceEvent,
            enumerable: true,
            configurable: true
        },
        target: {
            value: target,
            enumerable: true,
            configurable: true
        },
        selection: {
            value: selection,
            enumerable: true,
            configurable: true
        },
        mode: {
            value: mode,
            enumerable: true,
            configurable: true
        },
        _: {
            value: dispatch
        }
    });
}


function $ab93ad0b9a1d3c04$export$2e2561858db9bf47(event) {
    event.stopImmediatePropagation();
}
function $ab93ad0b9a1d3c04$export$2e2bcd8739ae039(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}


var $21c54ccc393b986b$var$MODE_DRAG = {
    name: "drag"
}, $21c54ccc393b986b$var$MODE_SPACE = {
    name: "space"
}, $21c54ccc393b986b$var$MODE_HANDLE = {
    name: "handle"
}, $21c54ccc393b986b$var$MODE_CENTER = {
    name: "center"
};
var $21c54ccc393b986b$var$abs = Math.abs, $21c54ccc393b986b$var$max = Math.max, $21c54ccc393b986b$var$min = Math.min;
function $21c54ccc393b986b$var$number1(e) {
    return [
        +e[0],
        +e[1]
    ];
}
function $21c54ccc393b986b$var$number2(e) {
    return [
        $21c54ccc393b986b$var$number1(e[0]),
        $21c54ccc393b986b$var$number1(e[1])
    ];
}
var $21c54ccc393b986b$var$X = {
    name: "x",
    handles: [
        "w",
        "e"
    ].map($21c54ccc393b986b$var$type),
    input: function input(x, e) {
        return x == null ? null : [
            [
                +x[0],
                e[0][1]
            ],
            [
                +x[1],
                e[1][1]
            ]
        ];
    },
    output: function output(xy) {
        return xy && [
            xy[0][0],
            xy[1][0]
        ];
    }
};
var $21c54ccc393b986b$var$Y = {
    name: "y",
    handles: [
        "n",
        "s"
    ].map($21c54ccc393b986b$var$type),
    input: function input(y, e) {
        return y == null ? null : [
            [
                e[0][0],
                +y[0]
            ],
            [
                e[1][0],
                +y[1]
            ]
        ];
    },
    output: function output(xy) {
        return xy && [
            xy[0][1],
            xy[1][1]
        ];
    }
};
var $21c54ccc393b986b$var$XY = {
    name: "xy",
    handles: [
        "n",
        "w",
        "e",
        "s",
        "nw",
        "ne",
        "sw",
        "se"
    ].map($21c54ccc393b986b$var$type),
    input: function input(xy) {
        return xy == null ? null : $21c54ccc393b986b$var$number2(xy);
    },
    output: function output(xy) {
        return xy;
    }
};
var $21c54ccc393b986b$var$cursors = {
    overlay: "crosshair",
    selection: "move",
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
};
var $21c54ccc393b986b$var$flipX = {
    e: "w",
    w: "e",
    nw: "ne",
    ne: "nw",
    se: "sw",
    sw: "se"
};
var $21c54ccc393b986b$var$flipY = {
    n: "s",
    s: "n",
    nw: "sw",
    ne: "se",
    se: "ne",
    sw: "nw"
};
var $21c54ccc393b986b$var$signsX = {
    overlay: 1,
    selection: 1,
    n: null,
    e: 1,
    s: null,
    w: -1,
    nw: -1,
    ne: 1,
    se: 1,
    sw: -1
};
var $21c54ccc393b986b$var$signsY = {
    overlay: 1,
    selection: 1,
    n: -1,
    e: null,
    s: 1,
    w: null,
    nw: -1,
    ne: -1,
    se: 1,
    sw: 1
};
function $21c54ccc393b986b$var$type(t) {
    return {
        type: t
    };
}
// Ignore right-click, since that should open the context menu.
function $21c54ccc393b986b$var$defaultFilter(event) {
    return !event.ctrlKey && !event.button;
}
function $21c54ccc393b986b$var$defaultExtent() {
    var svg = this.ownerSVGElement || this;
    if (svg.hasAttribute("viewBox")) {
        svg = svg.viewBox.baseVal;
        return [
            [
                svg.x,
                svg.y
            ],
            [
                svg.x + svg.width,
                svg.y + svg.height
            ]
        ];
    }
    return [
        [
            0,
            0
        ],
        [
            svg.width.baseVal.value,
            svg.height.baseVal.value
        ]
    ];
}
function $21c54ccc393b986b$var$defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
// Like d3.local, but with the name “__brush” rather than auto-generated.
function $21c54ccc393b986b$var$local(node) {
    while(!node.__brush)if (!(node = node.parentNode)) return;
    return node.__brush;
}
function $21c54ccc393b986b$var$empty(extent) {
    return extent[0][0] === extent[1][0] || extent[0][1] === extent[1][1];
}
function $21c54ccc393b986b$export$69760394fc76f689(node) {
    var state = node.__brush;
    return state ? state.dim.output(state.selection) : null;
}
function $21c54ccc393b986b$export$979ace6c88860aa8() {
    return $21c54ccc393b986b$var$brush($21c54ccc393b986b$var$X);
}
function $21c54ccc393b986b$export$468748b530991c54() {
    return $21c54ccc393b986b$var$brush($21c54ccc393b986b$var$Y);
}
function $21c54ccc393b986b$export$2e2bcd8739ae039() {
    return $21c54ccc393b986b$var$brush($21c54ccc393b986b$var$XY);
}
function $21c54ccc393b986b$var$brush(dim) {
    var extent1 = $21c54ccc393b986b$var$defaultExtent, filter = $21c54ccc393b986b$var$defaultFilter, touchable = $21c54ccc393b986b$var$defaultTouchable, keys = true, listeners = $15d51cc84868dd78$export$2e2bcd8739ae039("start", "brush", "end"), handleSize = 6, touchending;
    function brush(group) {
        var overlay = group.property("__brush", initialize).selectAll(".overlay").data([
            $21c54ccc393b986b$var$type("overlay")
        ]);
        overlay.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", $21c54ccc393b986b$var$cursors.overlay).merge(overlay).each(function() {
            var extent = $21c54ccc393b986b$var$local(this).extent;
            $c6a650051c356b4d$export$2e2bcd8739ae039(this).attr("x", extent[0][0]).attr("y", extent[0][1]).attr("width", extent[1][0] - extent[0][0]).attr("height", extent[1][1] - extent[0][1]);
        });
        group.selectAll(".selection").data([
            $21c54ccc393b986b$var$type("selection")
        ]).enter().append("rect").attr("class", "selection").attr("cursor", $21c54ccc393b986b$var$cursors.selection).attr("fill", "#777").attr("fill-opacity", 0.3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
        var handle = group.selectAll(".handle").data(dim.handles, function(d) {
            return d.type;
        });
        handle.exit().remove();
        handle.enter().append("rect").attr("class", function(d) {
            return "handle handle--" + d.type;
        }).attr("cursor", function(d) {
            return $21c54ccc393b986b$var$cursors[d.type];
        });
        group.each(redraw).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", started).filter(touchable).on("touchstart.brush", started).on("touchmove.brush", touchmoved).on("touchend.brush touchcancel.brush", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    brush.move = function(group, selection, event1) {
        if (group.tween) group.on("start.brush", function(event) {
            emitter(this, arguments).beforestart().start(event);
        }).on("interrupt.brush end.brush", function(event) {
            emitter(this, arguments).end(event);
        }).tween("brush", function() {
            var that = this, state = that.__brush, emit = emitter(that, arguments), selection0 = state.selection, selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent), i = $30766f4163c419ab$export$2e2bcd8739ae039(selection0, selection1);
            function tween(t) {
                state.selection = t === 1 && selection1 === null ? null : i(t);
                redraw.call(that);
                emit.brush();
            }
            return selection0 !== null && selection1 !== null ? tween : tween(1);
        });
        else group.each(function() {
            var that = this, args = arguments, state = that.__brush, selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent), emit = emitter(that, args).beforestart();
            $144433e16464ae98$export$2e2bcd8739ae039(that);
            state.selection = selection1 === null ? null : selection1;
            redraw.call(that);
            emit.start(event1).brush(event1).end(event1);
        });
    };
    brush.clear = function(group, event) {
        brush.move(group, null, event);
    };
    function redraw() {
        var group = $c6a650051c356b4d$export$2e2bcd8739ae039(this), selection = $21c54ccc393b986b$var$local(this).selection;
        if (selection) {
            group.selectAll(".selection").style("display", null).attr("x", selection[0][0]).attr("y", selection[0][1]).attr("width", selection[1][0] - selection[0][0]).attr("height", selection[1][1] - selection[0][1]);
            group.selectAll(".handle").style("display", null).attr("x", function(d) {
                return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2;
            }).attr("y", function(d) {
                return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2;
            }).attr("width", function(d) {
                return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize;
            }).attr("height", function(d) {
                return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize;
            });
        } else group.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
    }
    function emitter(that, args, clean) {
        var emit = that.__brush.emitter;
        return emit && (!clean || !emit.clean) ? emit : new Emitter(that, args, clean);
    }
    function Emitter(that, args, clean) {
        this.that = that;
        this.args = args;
        this.state = that.__brush;
        this.active = 0;
        this.clean = clean;
    }
    Emitter.prototype = {
        beforestart: function beforestart() {
            if (++this.active === 1) this.state.emitter = this, this.starting = true;
            return this;
        },
        start: function start(event, mode) {
            if (this.starting) this.starting = false, this.emit("start", event, mode);
            else this.emit("brush", event);
            return this;
        },
        brush: function brush(event, mode) {
            this.emit("brush", event, mode);
            return this;
        },
        end: function end(event, mode) {
            if (--this.active === 0) delete this.state.emitter, this.emit("end", event, mode);
            return this;
        },
        emit: function emit(type, event, mode) {
            var d = $c6a650051c356b4d$export$2e2bcd8739ae039(this.that).datum();
            listeners.call(type, this.that, new $881b750ee2254d22$export$2e2bcd8739ae039(type, {
                sourceEvent: event,
                target: brush,
                selection: dim.output(this.state.selection),
                mode: mode,
                dispatch: listeners
            }), d);
        }
    };
    function started(event2) {
        if (touchending && !event2.touches) return;
        if (!filter.apply(this, arguments)) return;
        var that = this, _$type = event2.target.__data__.type, mode = (keys && event2.metaKey ? _$type = "overlay" : _$type) === "selection" ? $21c54ccc393b986b$var$MODE_DRAG : keys && event2.altKey ? $21c54ccc393b986b$var$MODE_CENTER : $21c54ccc393b986b$var$MODE_HANDLE, signX = dim === $21c54ccc393b986b$var$Y ? null : $21c54ccc393b986b$var$signsX[_$type], signY = dim === $21c54ccc393b986b$var$X ? null : $21c54ccc393b986b$var$signsY[_$type], state = $21c54ccc393b986b$var$local(that), extent = state.extent, selection = state.selection, W = extent[0][0], w0, w1, N = extent[0][1], n0, n1, E = extent[1][0], e0, e1, S = extent[1][1], s0, s1, dx = 0, dy = 0, moving, shifting = signX && signY && keys && event2.shiftKey, lockX, lockY, points = Array.from(event2.touches || [
            event2
        ], function(t) {
            var i = t.identifier;
            t = $1fcd41a1a5acb211$export$2e2bcd8739ae039(t, that);
            t.point0 = t.slice();
            t.identifier = i;
            return t;
        });
        $144433e16464ae98$export$2e2bcd8739ae039(that);
        var emit = emitter(that, arguments, true).beforestart();
        if (_$type === "overlay") {
            if (selection) moving = true;
            var pts = [
                points[0],
                points[1] || points[0]
            ];
            state.selection = selection = [
                [
                    w0 = dim === $21c54ccc393b986b$var$Y ? W : $21c54ccc393b986b$var$min(pts[0][0], pts[1][0]),
                    n0 = dim === $21c54ccc393b986b$var$X ? N : $21c54ccc393b986b$var$min(pts[0][1], pts[1][1])
                ],
                [
                    e0 = dim === $21c54ccc393b986b$var$Y ? E : $21c54ccc393b986b$var$max(pts[0][0], pts[1][0]),
                    s0 = dim === $21c54ccc393b986b$var$X ? S : $21c54ccc393b986b$var$max(pts[0][1], pts[1][1])
                ]
            ];
            if (points.length > 1) move(event2);
        } else {
            w0 = selection[0][0];
            n0 = selection[0][1];
            e0 = selection[1][0];
            s0 = selection[1][1];
        }
        w1 = w0;
        n1 = n0;
        e1 = e0;
        s1 = s0;
        var group = $c6a650051c356b4d$export$2e2bcd8739ae039(that).attr("pointer-events", "none");
        var overlay = group.selectAll(".overlay").attr("cursor", $21c54ccc393b986b$var$cursors[_$type]);
        if (event2.touches) {
            emit.moved = moved;
            emit.ended = ended;
        } else {
            var view = $c6a650051c356b4d$export$2e2bcd8739ae039(event2.view).on("mousemove.brush", moved, true).on("mouseup.brush", ended, true);
            if (keys) view.on("keydown.brush", keydowned, true).on("keyup.brush", keyupped, true);
            $c09590197bae6a4f$export$2e2bcd8739ae039(event2.view);
        }
        redraw.call(that);
        emit.start(event2, mode.name);
        function moved(event) {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = (event.changedTouches || [
                    event
                ])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var p = _step.value;
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = points[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var d = _step1.value;
                            if (d.identifier === p.identifier) d.cur = $1fcd41a1a5acb211$export$2e2bcd8739ae039(p, that);
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            if (shifting && !lockX && !lockY && points.length === 1) {
                var point = points[0];
                if ($21c54ccc393b986b$var$abs(point.cur[0] - point[0]) > $21c54ccc393b986b$var$abs(point.cur[1] - point[1])) lockY = true;
                else lockX = true;
            }
            var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
            try {
                for(var _iterator2 = points[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                    var point1 = _step2.value;
                    if (point1.cur) point1[0] = point1.cur[0], point1[1] = point1.cur[1];
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                        _iterator2.return();
                    }
                } finally{
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
            moving = true;
            $ab93ad0b9a1d3c04$export$2e2bcd8739ae039(event);
            move(event);
        }
        function move(event) {
            var point = points[0], point0 = point.point0;
            var t;
            dx = point[0] - point0[0];
            dy = point[1] - point0[1];
            switch(mode){
                case $21c54ccc393b986b$var$MODE_SPACE:
                case $21c54ccc393b986b$var$MODE_DRAG:
                    if (signX) dx = $21c54ccc393b986b$var$max(W - w0, $21c54ccc393b986b$var$min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
                    if (signY) dy = $21c54ccc393b986b$var$max(N - n0, $21c54ccc393b986b$var$min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
                    break;
                case $21c54ccc393b986b$var$MODE_HANDLE:
                    if (points[1]) {
                        if (signX) w1 = $21c54ccc393b986b$var$max(W, $21c54ccc393b986b$var$min(E, points[0][0])), e1 = $21c54ccc393b986b$var$max(W, $21c54ccc393b986b$var$min(E, points[1][0])), signX = 1;
                        if (signY) n1 = $21c54ccc393b986b$var$max(N, $21c54ccc393b986b$var$min(S, points[0][1])), s1 = $21c54ccc393b986b$var$max(N, $21c54ccc393b986b$var$min(S, points[1][1])), signY = 1;
                    } else {
                        if (signX < 0) dx = $21c54ccc393b986b$var$max(W - w0, $21c54ccc393b986b$var$min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
                        else if (signX > 0) dx = $21c54ccc393b986b$var$max(W - e0, $21c54ccc393b986b$var$min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
                        if (signY < 0) dy = $21c54ccc393b986b$var$max(N - n0, $21c54ccc393b986b$var$min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
                        else if (signY > 0) dy = $21c54ccc393b986b$var$max(N - s0, $21c54ccc393b986b$var$min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
                    }
                    break;
                case $21c54ccc393b986b$var$MODE_CENTER:
                    if (signX) w1 = $21c54ccc393b986b$var$max(W, $21c54ccc393b986b$var$min(E, w0 - dx * signX)), e1 = $21c54ccc393b986b$var$max(W, $21c54ccc393b986b$var$min(E, e0 + dx * signX));
                    if (signY) n1 = $21c54ccc393b986b$var$max(N, $21c54ccc393b986b$var$min(S, n0 - dy * signY)), s1 = $21c54ccc393b986b$var$max(N, $21c54ccc393b986b$var$min(S, s0 + dy * signY));
                    break;
            }
            if (e1 < w1) {
                signX *= -1;
                t = w0, w0 = e0, e0 = t;
                t = w1, w1 = e1, e1 = t;
                if (_$type in $21c54ccc393b986b$var$flipX) overlay.attr("cursor", $21c54ccc393b986b$var$cursors[_$type = $21c54ccc393b986b$var$flipX[_$type]]);
            }
            if (s1 < n1) {
                signY *= -1;
                t = n0, n0 = s0, s0 = t;
                t = n1, n1 = s1, s1 = t;
                if (_$type in $21c54ccc393b986b$var$flipY) overlay.attr("cursor", $21c54ccc393b986b$var$cursors[_$type = $21c54ccc393b986b$var$flipY[_$type]]);
            }
            if (state.selection) selection = state.selection; // May be set by brush.move!
            if (lockX) w1 = selection[0][0], e1 = selection[1][0];
            if (lockY) n1 = selection[0][1], s1 = selection[1][1];
            if (selection[0][0] !== w1 || selection[0][1] !== n1 || selection[1][0] !== e1 || selection[1][1] !== s1) {
                state.selection = [
                    [
                        w1,
                        n1
                    ],
                    [
                        e1,
                        s1
                    ]
                ];
                redraw.call(that);
                emit.brush(event, mode.name);
            }
        }
        function ended(event) {
            $ab93ad0b9a1d3c04$export$2e2561858db9bf47(event);
            if (event.touches) {
                if (event.touches.length) return;
                if (touchending) clearTimeout(touchending);
                touchending = setTimeout(function() {
                    touchending = null;
                }, 500); // Ghost clicks are delayed!
            } else {
                $c09590197bae6a4f$export$833237748009e1e1(event.view, moving);
                view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
            }
            group.attr("pointer-events", "all");
            overlay.attr("cursor", $21c54ccc393b986b$var$cursors.overlay);
            if (state.selection) selection = state.selection; // May be set by brush.move (on start)!
            if ($21c54ccc393b986b$var$empty(selection)) state.selection = null, redraw.call(that);
            emit.end(event, mode.name);
        }
        function keydowned(event) {
            switch(event.keyCode){
                case 16:
                    shifting = signX && signY;
                    break;
                case 18:
                    if (mode === $21c54ccc393b986b$var$MODE_HANDLE) {
                        if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
                        if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
                        mode = $21c54ccc393b986b$var$MODE_CENTER;
                        move(event);
                    }
                    break;
                case 32:
                    if (mode === $21c54ccc393b986b$var$MODE_HANDLE || mode === $21c54ccc393b986b$var$MODE_CENTER) {
                        if (signX < 0) e0 = e1 - dx;
                        else if (signX > 0) w0 = w1 - dx;
                        if (signY < 0) s0 = s1 - dy;
                        else if (signY > 0) n0 = n1 - dy;
                        mode = $21c54ccc393b986b$var$MODE_SPACE;
                        overlay.attr("cursor", $21c54ccc393b986b$var$cursors.selection);
                        move(event);
                    }
                    break;
                default:
                    return;
            }
            $ab93ad0b9a1d3c04$export$2e2bcd8739ae039(event);
        }
        function keyupped(event) {
            switch(event.keyCode){
                case 16:
                    if (shifting) {
                        lockX = lockY = shifting = false;
                        move(event);
                    }
                    break;
                case 18:
                    if (mode === $21c54ccc393b986b$var$MODE_CENTER) {
                        if (signX < 0) e0 = e1;
                        else if (signX > 0) w0 = w1;
                        if (signY < 0) s0 = s1;
                        else if (signY > 0) n0 = n1;
                        mode = $21c54ccc393b986b$var$MODE_HANDLE;
                        move(event);
                    }
                    break;
                case 32:
                    if (mode === $21c54ccc393b986b$var$MODE_SPACE) {
                        if (event.altKey) {
                            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
                            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
                            mode = $21c54ccc393b986b$var$MODE_CENTER;
                        } else {
                            if (signX < 0) e0 = e1;
                            else if (signX > 0) w0 = w1;
                            if (signY < 0) s0 = s1;
                            else if (signY > 0) n0 = n1;
                            mode = $21c54ccc393b986b$var$MODE_HANDLE;
                        }
                        overlay.attr("cursor", $21c54ccc393b986b$var$cursors[_$type]);
                        move(event);
                    }
                    break;
                default:
                    return;
            }
            $ab93ad0b9a1d3c04$export$2e2bcd8739ae039(event);
        }
    }
    function touchmoved(event) {
        emitter(this, arguments).moved(event);
    }
    function touchended(event) {
        emitter(this, arguments).ended(event);
    }
    function initialize() {
        var state = this.__brush || {
            selection: null
        };
        state.extent = $21c54ccc393b986b$var$number2(extent1.apply(this, arguments));
        state.dim = dim;
        return state;
    }
    brush.extent = function(_) {
        return arguments.length ? (extent1 = typeof _ === "function" ? _ : $d024ce51fa71d3df$export$2e2bcd8739ae039($21c54ccc393b986b$var$number2(_)), brush) : extent1;
    };
    brush.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : $d024ce51fa71d3df$export$2e2bcd8739ae039(!!_), brush) : filter;
    };
    brush.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : $d024ce51fa71d3df$export$2e2bcd8739ae039(!!_), brush) : touchable;
    };
    brush.handleSize = function(_) {
        return arguments.length ? (handleSize = +_, brush) : handleSize;
    };
    brush.keyModifiers = function(_) {
        return arguments.length ? (keys = !!_, brush) : keys;
    };
    brush.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? brush : value;
    };
    return brush;
}

























var $2fe745a492299749$var$pi = Math.PI, $2fe745a492299749$var$tau = 2 * $2fe745a492299749$var$pi, $2fe745a492299749$var$epsilon = 0.000001, $2fe745a492299749$var$tauEpsilon = $2fe745a492299749$var$tau - $2fe745a492299749$var$epsilon;
function $2fe745a492299749$var$Path() {
    this._x0 = this._y0 = this._x1 = this._y1 = null; // end of current subpath
    this._ = "";
}
function $2fe745a492299749$var$path() {
    return new $2fe745a492299749$var$Path;
}
$2fe745a492299749$var$Path.prototype = $2fe745a492299749$var$path.prototype = {
    constructor: $2fe745a492299749$var$Path,
    moveTo: function moveTo(x, y) {
        this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
    },
    closePath: function closePath() {
        if (this._x1 !== null) {
            this._x1 = this._x0, this._y1 = this._y0;
            this._ += "Z";
        }
    },
    lineTo: function lineTo(x, y) {
        this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    quadraticCurveTo: function quadraticCurveTo(x1, y1, x, y) {
        this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    bezierCurveTo: function bezierCurveTo(x1, y1, x2, y2, x, y) {
        this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    arcTo: function arcTo(x1, y1, x2, y2, r) {
        x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
        var x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
        // Is the radius negative? Error.
        if (r < 0) throw new Error("negative radius: " + r);
        // Is this path empty? Move to (x1,y1).
        if (this._x1 === null) this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
        else if (!(l01_2 > $2fe745a492299749$var$epsilon)) ;
        else if (!(Math.abs(y01 * x21 - y21 * x01) > $2fe745a492299749$var$epsilon) || !r) this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
        else {
            var x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan(($2fe745a492299749$var$pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
            // If the start tangent is not coincident with (x0,y0), line to.
            if (Math.abs(t01 - 1) > $2fe745a492299749$var$epsilon) this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
            this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
        }
    },
    arc: function arc(x, y, r, a0, a1, ccw) {
        x = +x, y = +y, r = +r, ccw = !!ccw;
        var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x + dx, y0 = y + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
        // Is the radius negative? Error.
        if (r < 0) throw new Error("negative radius: " + r);
        // Is this path empty? Move to (x0,y0).
        if (this._x1 === null) this._ += "M" + x0 + "," + y0;
        else if (Math.abs(this._x1 - x0) > $2fe745a492299749$var$epsilon || Math.abs(this._y1 - y0) > $2fe745a492299749$var$epsilon) this._ += "L" + x0 + "," + y0;
        // Is this arc empty? We’re done.
        if (!r) return;
        // Does the angle go the wrong way? Flip the direction.
        if (da < 0) da = da % $2fe745a492299749$var$tau + $2fe745a492299749$var$tau;
        // Is this a complete circle? Draw two arcs to complete the circle.
        if (da > $2fe745a492299749$var$tauEpsilon) this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
        else if (da > $2fe745a492299749$var$epsilon) this._ += "A" + r + "," + r + ",0," + +(da >= $2fe745a492299749$var$pi) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    },
    rect: function rect(x, y, w, h) {
        this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + +w + "v" + +h + "h" + -w + "Z";
    },
    toString: function toString() {
        return this._;
    }
};
var $2fe745a492299749$export$2e2bcd8739ae039 = $2fe745a492299749$var$path;



function $a527dcd310fd680f$export$2e2bcd8739ae039(x) {
    return function constant() {
        return x;
    };
}


var $2dfd0aee17f68303$export$2335f513bbd82c6d = Math.abs;
var $2dfd0aee17f68303$export$b8b770ee6a0d9760 = Math.atan2;
var $2dfd0aee17f68303$export$50d414a77b60d802 = Math.cos;
var $2dfd0aee17f68303$export$8960430cfd85939f = Math.max;
var $2dfd0aee17f68303$export$96ec731ed4dcb222 = Math.min;
var $2dfd0aee17f68303$export$5de3937cb4b592ed = Math.sin;
var $2dfd0aee17f68303$export$eba8049fb5020b81 = Math.sqrt;
var $2dfd0aee17f68303$export$6c421550c66a327d = 0.000000000001;
var $2dfd0aee17f68303$export$18c7bea995a110f = Math.PI;
var $2dfd0aee17f68303$export$e51408a300e8929a = $2dfd0aee17f68303$export$18c7bea995a110f / 2;
var $2dfd0aee17f68303$export$a4b4b4d4d776fe92 = 2 * $2dfd0aee17f68303$export$18c7bea995a110f;
function $2dfd0aee17f68303$export$fd6306be3fde5b04(x) {
    return x > 1 ? 0 : x < -1 ? $2dfd0aee17f68303$export$18c7bea995a110f : Math.acos(x);
}
function $2dfd0aee17f68303$export$41726bdb1fc63f(x) {
    return x >= 1 ? $2dfd0aee17f68303$export$e51408a300e8929a : x <= -1 ? -$2dfd0aee17f68303$export$e51408a300e8929a : Math.asin(x);
}


function $8b805176339f2cf3$var$arcInnerRadius(d) {
    return d.innerRadius;
}
function $8b805176339f2cf3$var$arcOuterRadius(d) {
    return d.outerRadius;
}
function $8b805176339f2cf3$var$arcStartAngle(d) {
    return d.startAngle;
}
function $8b805176339f2cf3$var$arcEndAngle(d) {
    return d.endAngle;
}
function $8b805176339f2cf3$var$arcPadAngle(d) {
    return d && d.padAngle; // Note: optional!
}
function $8b805176339f2cf3$var$intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
    var x10 = x1 - x0, y10 = y1 - y0, x32 = x3 - x2, y32 = y3 - y2, t = y32 * x10 - x32 * y10;
    if (t * t < $2dfd0aee17f68303$export$6c421550c66a327d) return;
    t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
    return [
        x0 + t * x10,
        y0 + t * y10
    ];
}
// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function $8b805176339f2cf3$var$cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
    var x01 = x0 - x1, y01 = y0 - y1, lo = (cw ? rc : -rc) / $2dfd0aee17f68303$export$eba8049fb5020b81(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x0 + ox, y11 = y0 + oy, x10 = x1 + ox, y10 = y1 + oy, x00 = (x11 + x10) / 2, y00 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * $2dfd0aee17f68303$export$eba8049fb5020b81($2dfd0aee17f68303$export$8960430cfd85939f(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x00, dy0 = cy0 - y00, dx1 = cx1 - x00, dy1 = cy1 - y00;
    // Pick the closer of the two intersection points.
    // TODO Is there a faster way to determine which intersection to use?
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
    return {
        cx: cx0,
        cy: cy0,
        x01: -ox,
        y01: -oy,
        x11: cx0 * (r1 / r - 1),
        y11: cy0 * (r1 / r - 1)
    };
}
function $8b805176339f2cf3$export$2e2bcd8739ae039() {
    var innerRadius = $8b805176339f2cf3$var$arcInnerRadius, outerRadius = $8b805176339f2cf3$var$arcOuterRadius, cornerRadius = $a527dcd310fd680f$export$2e2bcd8739ae039(0), padRadius = null, startAngle = $8b805176339f2cf3$var$arcStartAngle, endAngle = $8b805176339f2cf3$var$arcEndAngle, padAngle = $8b805176339f2cf3$var$arcPadAngle, context = null;
    function arc() {
        var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - $2dfd0aee17f68303$export$e51408a300e8929a, a1 = endAngle.apply(this, arguments) - $2dfd0aee17f68303$export$e51408a300e8929a, da = $2dfd0aee17f68303$export$2335f513bbd82c6d(a1 - a0), cw = a1 > a0;
        if (!context) context = buffer = $2fe745a492299749$export$2e2bcd8739ae039();
        // Ensure that the outer radius is always larger than the inner radius.
        if (r1 < r0) r = r1, r1 = r0, r0 = r;
        // Is it a point?
        if (!(r1 > $2dfd0aee17f68303$export$6c421550c66a327d)) context.moveTo(0, 0);
        else if (da > $2dfd0aee17f68303$export$a4b4b4d4d776fe92 - $2dfd0aee17f68303$export$6c421550c66a327d) {
            context.moveTo(r1 * $2dfd0aee17f68303$export$50d414a77b60d802(a0), r1 * $2dfd0aee17f68303$export$5de3937cb4b592ed(a0));
            context.arc(0, 0, r1, a0, a1, !cw);
            if (r0 > $2dfd0aee17f68303$export$6c421550c66a327d) {
                context.moveTo(r0 * $2dfd0aee17f68303$export$50d414a77b60d802(a1), r0 * $2dfd0aee17f68303$export$5de3937cb4b592ed(a1));
                context.arc(0, 0, r0, a1, a0, cw);
            }
        } else {
            var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > $2dfd0aee17f68303$export$6c421550c66a327d && (padRadius ? +padRadius.apply(this, arguments) : $2dfd0aee17f68303$export$eba8049fb5020b81(r0 * r0 + r1 * r1)), rc = $2dfd0aee17f68303$export$96ec731ed4dcb222($2dfd0aee17f68303$export$2335f513bbd82c6d(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t0, t1;
            // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
            if (rp > $2dfd0aee17f68303$export$6c421550c66a327d) {
                var p0 = $2dfd0aee17f68303$export$41726bdb1fc63f(rp / r0 * $2dfd0aee17f68303$export$5de3937cb4b592ed(ap)), p1 = $2dfd0aee17f68303$export$41726bdb1fc63f(rp / r1 * $2dfd0aee17f68303$export$5de3937cb4b592ed(ap));
                if ((da0 -= p0 * 2) > $2dfd0aee17f68303$export$6c421550c66a327d) p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;
                else da0 = 0, a00 = a10 = (a0 + a1) / 2;
                if ((da1 -= p1 * 2) > $2dfd0aee17f68303$export$6c421550c66a327d) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
                else da1 = 0, a01 = a11 = (a0 + a1) / 2;
            }
            var x01 = r1 * $2dfd0aee17f68303$export$50d414a77b60d802(a01), y01 = r1 * $2dfd0aee17f68303$export$5de3937cb4b592ed(a01), x10 = r0 * $2dfd0aee17f68303$export$50d414a77b60d802(a10), y10 = r0 * $2dfd0aee17f68303$export$5de3937cb4b592ed(a10);
            // Apply rounded corners?
            if (rc > $2dfd0aee17f68303$export$6c421550c66a327d) {
                var x11 = r1 * $2dfd0aee17f68303$export$50d414a77b60d802(a11), y11 = r1 * $2dfd0aee17f68303$export$5de3937cb4b592ed(a11), x00 = r0 * $2dfd0aee17f68303$export$50d414a77b60d802(a00), y00 = r0 * $2dfd0aee17f68303$export$5de3937cb4b592ed(a00), oc;
                // Restrict the corner radius according to the sector angle.
                if (da < $2dfd0aee17f68303$export$18c7bea995a110f && (oc = $8b805176339f2cf3$var$intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
                    var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / $2dfd0aee17f68303$export$5de3937cb4b592ed($2dfd0aee17f68303$export$fd6306be3fde5b04((ax * bx + ay * by) / ($2dfd0aee17f68303$export$eba8049fb5020b81(ax * ax + ay * ay) * $2dfd0aee17f68303$export$eba8049fb5020b81(bx * bx + by * by))) / 2), lc = $2dfd0aee17f68303$export$eba8049fb5020b81(oc[0] * oc[0] + oc[1] * oc[1]);
                    rc0 = $2dfd0aee17f68303$export$96ec731ed4dcb222(rc, (r0 - lc) / (kc - 1));
                    rc1 = $2dfd0aee17f68303$export$96ec731ed4dcb222(rc, (r1 - lc) / (kc + 1));
                }
            }
            // Is the sector collapsed to a line?
            if (!(da1 > $2dfd0aee17f68303$export$6c421550c66a327d)) context.moveTo(x01, y01);
            else if (rc1 > $2dfd0aee17f68303$export$6c421550c66a327d) {
                t0 = $8b805176339f2cf3$var$cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
                t1 = $8b805176339f2cf3$var$cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
                context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);
                // Have the corners merged?
                if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, $2dfd0aee17f68303$export$b8b770ee6a0d9760(t0.y01, t0.x01), $2dfd0aee17f68303$export$b8b770ee6a0d9760(t1.y01, t1.x01), !cw);
                else {
                    context.arc(t0.cx, t0.cy, rc1, $2dfd0aee17f68303$export$b8b770ee6a0d9760(t0.y01, t0.x01), $2dfd0aee17f68303$export$b8b770ee6a0d9760(t0.y11, t0.x11), !cw);
                    context.arc(0, 0, r1, $2dfd0aee17f68303$export$b8b770ee6a0d9760(t0.cy + t0.y11, t0.cx + t0.x11), $2dfd0aee17f68303$export$b8b770ee6a0d9760(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
                    context.arc(t1.cx, t1.cy, rc1, $2dfd0aee17f68303$export$b8b770ee6a0d9760(t1.y11, t1.x11), $2dfd0aee17f68303$export$b8b770ee6a0d9760(t1.y01, t1.x01), !cw);
                }
            } else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
            // Is there no inner ring, and it’s a circular sector?
            // Or perhaps it’s an annular sector collapsed due to padding?
            if (!(r0 > $2dfd0aee17f68303$export$6c421550c66a327d) || !(da0 > $2dfd0aee17f68303$export$6c421550c66a327d)) context.lineTo(x10, y10);
            else if (rc0 > $2dfd0aee17f68303$export$6c421550c66a327d) {
                t0 = $8b805176339f2cf3$var$cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
                t1 = $8b805176339f2cf3$var$cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
                context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);
                // Have the corners merged?
                if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, $2dfd0aee17f68303$export$b8b770ee6a0d9760(t0.y01, t0.x01), $2dfd0aee17f68303$export$b8b770ee6a0d9760(t1.y01, t1.x01), !cw);
                else {
                    context.arc(t0.cx, t0.cy, rc0, $2dfd0aee17f68303$export$b8b770ee6a0d9760(t0.y01, t0.x01), $2dfd0aee17f68303$export$b8b770ee6a0d9760(t0.y11, t0.x11), !cw);
                    context.arc(0, 0, r0, $2dfd0aee17f68303$export$b8b770ee6a0d9760(t0.cy + t0.y11, t0.cx + t0.x11), $2dfd0aee17f68303$export$b8b770ee6a0d9760(t1.cy + t1.y11, t1.cx + t1.x11), cw);
                    context.arc(t1.cx, t1.cy, rc0, $2dfd0aee17f68303$export$b8b770ee6a0d9760(t1.y11, t1.x11), $2dfd0aee17f68303$export$b8b770ee6a0d9760(t1.y01, t1.x01), !cw);
                }
            } else context.arc(0, 0, r0, a10, a00, cw);
        }
        context.closePath();
        if (buffer) return context = null, buffer + "" || null;
    }
    arc.centroid = function() {
        var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - $2dfd0aee17f68303$export$18c7bea995a110f / 2;
        return [
            $2dfd0aee17f68303$export$50d414a77b60d802(a) * r,
            $2dfd0aee17f68303$export$5de3937cb4b592ed(a) * r
        ];
    };
    arc.innerRadius = function(_) {
        return arguments.length ? (innerRadius = typeof _ === "function" ? _ : $a527dcd310fd680f$export$2e2bcd8739ae039(+_), arc) : innerRadius;
    };
    arc.outerRadius = function(_) {
        return arguments.length ? (outerRadius = typeof _ === "function" ? _ : $a527dcd310fd680f$export$2e2bcd8739ae039(+_), arc) : outerRadius;
    };
    arc.cornerRadius = function(_) {
        return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : $a527dcd310fd680f$export$2e2bcd8739ae039(+_), arc) : cornerRadius;
    };
    arc.padRadius = function(_) {
        return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : $a527dcd310fd680f$export$2e2bcd8739ae039(+_), arc) : padRadius;
    };
    arc.startAngle = function(_) {
        return arguments.length ? (startAngle = typeof _ === "function" ? _ : $a527dcd310fd680f$export$2e2bcd8739ae039(+_), arc) : startAngle;
    };
    arc.endAngle = function(_) {
        return arguments.length ? (endAngle = typeof _ === "function" ? _ : $a527dcd310fd680f$export$2e2bcd8739ae039(+_), arc) : endAngle;
    };
    arc.padAngle = function(_) {
        return arguments.length ? (padAngle = typeof _ === "function" ? _ : $a527dcd310fd680f$export$2e2bcd8739ae039(+_), arc) : padAngle;
    };
    arc.context = function(_) {
        return arguments.length ? (context = _ == null ? null : _, arc) : context;
    };
    return arc;
}




var $ae9228a7c2b7be23$var$sqrt3 = $2dfd0aee17f68303$export$eba8049fb5020b81(3);
var $ae9228a7c2b7be23$export$2e2bcd8739ae039 = {
    draw: function(context, size) {
        var r = $2dfd0aee17f68303$export$eba8049fb5020b81(size + $2dfd0aee17f68303$export$96ec731ed4dcb222(size / 28, 0.75)) * 0.59436;
        var t = r / 2;
        var u = t * $ae9228a7c2b7be23$var$sqrt3;
        context.moveTo(0, r);
        context.lineTo(0, -r);
        context.moveTo(-u, -t);
        context.lineTo(u, t);
        context.moveTo(-u, t);
        context.lineTo(u, -t);
    }
};



var $abb15659b2aa3ec8$export$2e2bcd8739ae039 = {
    draw: function(context, size) {
        var r = $2dfd0aee17f68303$export$eba8049fb5020b81(size / $2dfd0aee17f68303$export$18c7bea995a110f);
        context.moveTo(r, 0);
        context.arc(0, 0, r, 0, $2dfd0aee17f68303$export$a4b4b4d4d776fe92);
    }
};



var $c1a4a17f2848ebb1$export$2e2bcd8739ae039 = {
    draw: function(context, size) {
        var r = $2dfd0aee17f68303$export$eba8049fb5020b81(size / 5) / 2;
        context.moveTo(-3 * r, -r);
        context.lineTo(-r, -r);
        context.lineTo(-r, -3 * r);
        context.lineTo(r, -3 * r);
        context.lineTo(r, -r);
        context.lineTo(3 * r, -r);
        context.lineTo(3 * r, r);
        context.lineTo(r, r);
        context.lineTo(r, 3 * r);
        context.lineTo(-r, 3 * r);
        context.lineTo(-r, r);
        context.lineTo(-3 * r, r);
        context.closePath();
    }
};



var $cf7a9c02b67ae0d9$var$tan30 = $2dfd0aee17f68303$export$eba8049fb5020b81(1 / 3);
var $cf7a9c02b67ae0d9$var$tan30_2 = $cf7a9c02b67ae0d9$var$tan30 * 2;
var $cf7a9c02b67ae0d9$export$2e2bcd8739ae039 = {
    draw: function(context, size) {
        var y = $2dfd0aee17f68303$export$eba8049fb5020b81(size / $cf7a9c02b67ae0d9$var$tan30_2);
        var x = y * $cf7a9c02b67ae0d9$var$tan30;
        context.moveTo(0, -y);
        context.lineTo(x, 0);
        context.lineTo(0, y);
        context.lineTo(-x, 0);
        context.closePath();
    }
};



var $9f7fe4428b215424$export$2e2bcd8739ae039 = {
    draw: function(context, size) {
        var r = $2dfd0aee17f68303$export$eba8049fb5020b81(size) * 0.62625;
        context.moveTo(0, -r);
        context.lineTo(r, 0);
        context.lineTo(0, r);
        context.lineTo(-r, 0);
        context.closePath();
    }
};



var $ae02556a3eb37102$export$2e2bcd8739ae039 = {
    draw: function(context, size) {
        var r = $2dfd0aee17f68303$export$eba8049fb5020b81(size - $2dfd0aee17f68303$export$96ec731ed4dcb222(size / 7, 2)) * 0.87559;
        context.moveTo(-r, 0);
        context.lineTo(r, 0);
        context.moveTo(0, r);
        context.lineTo(0, -r);
    }
};



var $ef1dfb0cac469cb4$export$2e2bcd8739ae039 = {
    draw: function(context, size) {
        var w = $2dfd0aee17f68303$export$eba8049fb5020b81(size);
        var x = -w / 2;
        context.rect(x, x, w, w);
    }
};



var $ee17b0f912e0b0e9$export$2e2bcd8739ae039 = {
    draw: function(context, size) {
        var r = $2dfd0aee17f68303$export$eba8049fb5020b81(size) * 0.4431;
        context.moveTo(r, r);
        context.lineTo(r, -r);
        context.lineTo(-r, -r);
        context.lineTo(-r, r);
        context.closePath();
    }
};



var $aca12b4b0279846e$var$ka = 0.8908130915292852;
var $aca12b4b0279846e$var$kr = $2dfd0aee17f68303$export$5de3937cb4b592ed($2dfd0aee17f68303$export$18c7bea995a110f / 10) / $2dfd0aee17f68303$export$5de3937cb4b592ed(7 * $2dfd0aee17f68303$export$18c7bea995a110f / 10);
var $aca12b4b0279846e$var$kx = $2dfd0aee17f68303$export$5de3937cb4b592ed($2dfd0aee17f68303$export$a4b4b4d4d776fe92 / 10) * $aca12b4b0279846e$var$kr;
var $aca12b4b0279846e$var$ky = -$2dfd0aee17f68303$export$50d414a77b60d802($2dfd0aee17f68303$export$a4b4b4d4d776fe92 / 10) * $aca12b4b0279846e$var$kr;
var $aca12b4b0279846e$export$2e2bcd8739ae039 = {
    draw: function(context, size) {
        var r = $2dfd0aee17f68303$export$eba8049fb5020b81(size * $aca12b4b0279846e$var$ka);
        var x = $aca12b4b0279846e$var$kx * r;
        var y = $aca12b4b0279846e$var$ky * r;
        context.moveTo(0, -r);
        context.lineTo(x, y);
        for(var i = 1; i < 5; ++i){
            var a = $2dfd0aee17f68303$export$a4b4b4d4d776fe92 * i / 5;
            var c = $2dfd0aee17f68303$export$50d414a77b60d802(a);
            var s = $2dfd0aee17f68303$export$5de3937cb4b592ed(a);
            context.lineTo(s * r, -c * r);
            context.lineTo(c * x - s * y, s * x + c * y);
        }
        context.closePath();
    }
};



var $498c686245f3f870$var$sqrt3 = $2dfd0aee17f68303$export$eba8049fb5020b81(3);
var $498c686245f3f870$export$2e2bcd8739ae039 = {
    draw: function(context, size) {
        var y = -$2dfd0aee17f68303$export$eba8049fb5020b81(size / ($498c686245f3f870$var$sqrt3 * 3));
        context.moveTo(0, y * 2);
        context.lineTo(-$498c686245f3f870$var$sqrt3 * y, -y);
        context.lineTo($498c686245f3f870$var$sqrt3 * y, -y);
        context.closePath();
    }
};



var $4398ca4ab367e48a$var$sqrt3 = $2dfd0aee17f68303$export$eba8049fb5020b81(3);
var $4398ca4ab367e48a$export$2e2bcd8739ae039 = {
    draw: function(context, size) {
        var s = $2dfd0aee17f68303$export$eba8049fb5020b81(size) * 0.6824;
        var t = s / 2;
        var u = s * $4398ca4ab367e48a$var$sqrt3 / 2; // cos(Math.PI / 6)
        context.moveTo(0, -s);
        context.lineTo(u, t);
        context.lineTo(-u, t);
        context.closePath();
    }
};



var $4f2fb606530d626f$var$c = -0.5;
var $4f2fb606530d626f$var$s = $2dfd0aee17f68303$export$eba8049fb5020b81(3) / 2;
var $4f2fb606530d626f$var$k = 1 / $2dfd0aee17f68303$export$eba8049fb5020b81(12);
var $4f2fb606530d626f$var$a = ($4f2fb606530d626f$var$k / 2 + 1) * 3;
var $4f2fb606530d626f$export$2e2bcd8739ae039 = {
    draw: function(context, size) {
        var r = $2dfd0aee17f68303$export$eba8049fb5020b81(size / $4f2fb606530d626f$var$a);
        var x0 = r / 2, y0 = r * $4f2fb606530d626f$var$k;
        var x1 = x0, y1 = r * $4f2fb606530d626f$var$k + r;
        var x2 = -x1, y2 = y1;
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo($4f2fb606530d626f$var$c * x0 - $4f2fb606530d626f$var$s * y0, $4f2fb606530d626f$var$s * x0 + $4f2fb606530d626f$var$c * y0);
        context.lineTo($4f2fb606530d626f$var$c * x1 - $4f2fb606530d626f$var$s * y1, $4f2fb606530d626f$var$s * x1 + $4f2fb606530d626f$var$c * y1);
        context.lineTo($4f2fb606530d626f$var$c * x2 - $4f2fb606530d626f$var$s * y2, $4f2fb606530d626f$var$s * x2 + $4f2fb606530d626f$var$c * y2);
        context.lineTo($4f2fb606530d626f$var$c * x0 + $4f2fb606530d626f$var$s * y0, $4f2fb606530d626f$var$c * y0 - $4f2fb606530d626f$var$s * x0);
        context.lineTo($4f2fb606530d626f$var$c * x1 + $4f2fb606530d626f$var$s * y1, $4f2fb606530d626f$var$c * y1 - $4f2fb606530d626f$var$s * x1);
        context.lineTo($4f2fb606530d626f$var$c * x2 + $4f2fb606530d626f$var$s * y2, $4f2fb606530d626f$var$c * y2 - $4f2fb606530d626f$var$s * x2);
        context.closePath();
    }
};



var $5eeddcf4c3c8d7a7$export$2e2bcd8739ae039 = {
    draw: function(context, size) {
        var r = $2dfd0aee17f68303$export$eba8049fb5020b81(size - $2dfd0aee17f68303$export$96ec731ed4dcb222(size / 6, 1.7)) * 0.6189;
        context.moveTo(-r, -r);
        context.lineTo(r, r);
        context.moveTo(-r, r);
        context.lineTo(r, -r);
    }
};


var $4c2ebaa9e45eb11f$export$19158c96a6700c15 = [
    $abb15659b2aa3ec8$export$2e2bcd8739ae039,
    $c1a4a17f2848ebb1$export$2e2bcd8739ae039,
    $cf7a9c02b67ae0d9$export$2e2bcd8739ae039,
    $ef1dfb0cac469cb4$export$2e2bcd8739ae039,
    $aca12b4b0279846e$export$2e2bcd8739ae039,
    $498c686245f3f870$export$2e2bcd8739ae039,
    $4f2fb606530d626f$export$2e2bcd8739ae039
];
var $4c2ebaa9e45eb11f$export$915e06de6acf8fe = [
    $abb15659b2aa3ec8$export$2e2bcd8739ae039,
    $ae02556a3eb37102$export$2e2bcd8739ae039,
    $5eeddcf4c3c8d7a7$export$2e2bcd8739ae039,
    $4398ca4ab367e48a$export$2e2bcd8739ae039,
    $ae9228a7c2b7be23$export$2e2bcd8739ae039,
    $ee17b0f912e0b0e9$export$2e2bcd8739ae039,
    $9f7fe4428b215424$export$2e2bcd8739ae039
];
function $4c2ebaa9e45eb11f$export$2e2bcd8739ae039(type, size) {
    var context = null;
    type = typeof type === "function" ? type : $a527dcd310fd680f$export$2e2bcd8739ae039(type || $abb15659b2aa3ec8$export$2e2bcd8739ae039);
    size = typeof size === "function" ? size : $a527dcd310fd680f$export$2e2bcd8739ae039(size === undefined ? 64 : +size);
    function symbol() {
        var buffer;
        if (!context) context = buffer = $2fe745a492299749$export$2e2bcd8739ae039();
        type.apply(this, arguments).draw(context, +size.apply(this, arguments));
        if (buffer) return context = null, buffer + "" || null;
    }
    symbol.type = function(_) {
        return arguments.length ? (type = typeof _ === "function" ? _ : $a527dcd310fd680f$export$2e2bcd8739ae039(_), symbol) : type;
    };
    symbol.size = function(_) {
        return arguments.length ? (size = typeof _ === "function" ? _ : $a527dcd310fd680f$export$2e2bcd8739ae039(+_), symbol) : size;
    };
    symbol.context = function(_) {
        return arguments.length ? (context = _ == null ? null : _, symbol) : context;
    };
    return symbol;
}












var $a28991f30bc65acf$export$2e2bcd8739ae039 = function(x) {
    return function() {
        return x;
    };
};


function $08f680738ab654fd$export$2e2bcd8739ae039(type, param) {
    var sourceEvent = param.sourceEvent, target = param.target, transform = param.transform, dispatch = param.dispatch;
    Object.defineProperties(this, {
        type: {
            value: type,
            enumerable: true,
            configurable: true
        },
        sourceEvent: {
            value: sourceEvent,
            enumerable: true,
            configurable: true
        },
        target: {
            value: target,
            enumerable: true,
            configurable: true
        },
        transform: {
            value: transform,
            enumerable: true,
            configurable: true
        },
        _: {
            value: dispatch
        }
    });
}


function $cef28161300134a3$export$563a914cafbdc389(k, x, y) {
    this.k = k;
    this.x = x;
    this.y = y;
}
$cef28161300134a3$export$563a914cafbdc389.prototype = {
    constructor: $cef28161300134a3$export$563a914cafbdc389,
    scale: function scale(k) {
        return k === 1 ? this : new $cef28161300134a3$export$563a914cafbdc389(this.k * k, this.x, this.y);
    },
    translate: function translate(x, y) {
        return x === 0 & y === 0 ? this : new $cef28161300134a3$export$563a914cafbdc389(this.k, this.x + this.k * x, this.y + this.k * y);
    },
    apply: function apply(point) {
        return [
            point[0] * this.k + this.x,
            point[1] * this.k + this.y
        ];
    },
    applyX: function applyX(x) {
        return x * this.k + this.x;
    },
    applyY: function applyY(y) {
        return y * this.k + this.y;
    },
    invert: function invert(location) {
        return [
            (location[0] - this.x) / this.k,
            (location[1] - this.y) / this.k
        ];
    },
    invertX: function invertX(x) {
        return (x - this.x) / this.k;
    },
    invertY: function invertY(y) {
        return (y - this.y) / this.k;
    },
    rescaleX: function rescaleX(x) {
        return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
    },
    rescaleY: function rescaleY(y) {
        return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
    },
    toString: function toString() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
};
var $cef28161300134a3$export$f0954fd7d5368655 = new $cef28161300134a3$export$563a914cafbdc389(1, 0, 0);
$cef28161300134a3$export$2e2bcd8739ae039.prototype = $cef28161300134a3$export$563a914cafbdc389.prototype;
function $cef28161300134a3$export$2e2bcd8739ae039(node) {
    while(!node.__zoom)if (!(node = node.parentNode)) return $cef28161300134a3$export$f0954fd7d5368655;
    return node.__zoom;
}


function $e1bdd62bbce55f62$export$2e2561858db9bf47(event) {
    event.stopImmediatePropagation();
}
function $e1bdd62bbce55f62$export$2e2bcd8739ae039(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}


// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function $cb9d7e6994f49832$var$defaultFilter(event) {
    return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}
function $cb9d7e6994f49832$var$defaultExtent() {
    var e = this;
    if (e instanceof SVGElement) {
        e = e.ownerSVGElement || e;
        if (e.hasAttribute("viewBox")) {
            e = e.viewBox.baseVal;
            return [
                [
                    e.x,
                    e.y
                ],
                [
                    e.x + e.width,
                    e.y + e.height
                ]
            ];
        }
        return [
            [
                0,
                0
            ],
            [
                e.width.baseVal.value,
                e.height.baseVal.value
            ]
        ];
    }
    return [
        [
            0,
            0
        ],
        [
            e.clientWidth,
            e.clientHeight
        ]
    ];
}
function $cb9d7e6994f49832$var$defaultTransform() {
    return this.__zoom || $cef28161300134a3$export$f0954fd7d5368655;
}
function $cb9d7e6994f49832$var$defaultWheelDelta(event) {
    return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}
function $cb9d7e6994f49832$var$defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
function $cb9d7e6994f49832$var$defaultConstrain(transform, extent, translateExtent) {
    var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
    return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}
function $cb9d7e6994f49832$export$2e2bcd8739ae039() {
    var filter = $cb9d7e6994f49832$var$defaultFilter, extent1 = $cb9d7e6994f49832$var$defaultExtent, constrain = $cb9d7e6994f49832$var$defaultConstrain, wheelDelta = $cb9d7e6994f49832$var$defaultWheelDelta, touchable = $cb9d7e6994f49832$var$defaultTouchable, scaleExtent = [
        0,
        Infinity
    ], translateExtent = [
        [
            -Infinity,
            -Infinity
        ],
        [
            Infinity,
            Infinity
        ]
    ], duration = 250, interpolate = $a25b30c37bc6f789$export$2e2bcd8739ae039, listeners = $15d51cc84868dd78$export$2e2bcd8739ae039("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
    function zoom(selection) {
        selection.property("__zoom", $cb9d7e6994f49832$var$defaultTransform).on("wheel.zoom", wheeled, {
            passive: false
        }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    zoom.transform = function(collection, transform, point, event) {
        var selection = collection.selection ? collection.selection() : collection;
        selection.property("__zoom", $cb9d7e6994f49832$var$defaultTransform);
        if (collection !== selection) schedule(collection, transform, point, event);
        else selection.interrupt().each(function() {
            gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
        });
    };
    zoom.scaleBy = function(selection, k, p, event) {
        zoom.scaleTo(selection, function() {
            var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return k0 * k1;
        }, p, event);
    };
    zoom.scaleTo = function(selection, k, p, event) {
        zoom.transform(selection, function() {
            var e = extent1.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
        }, p, event);
    };
    zoom.translateBy = function(selection, x, y, event) {
        zoom.transform(selection, function() {
            return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent1.apply(this, arguments), translateExtent);
        }, null, event);
    };
    zoom.translateTo = function(selection, x, y, p, event) {
        zoom.transform(selection, function() {
            var e = extent1.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
            return constrain($cef28161300134a3$export$f0954fd7d5368655.translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
        }, p, event);
    };
    function scale(transform, k) {
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
        return k === transform.k ? transform : new $cef28161300134a3$export$563a914cafbdc389(k, transform.x, transform.y);
    }
    function translate(transform, p0, p1) {
        var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
        return x === transform.x && y === transform.y ? transform : new $cef28161300134a3$export$563a914cafbdc389(transform.k, x, y);
    }
    function centroid(extent) {
        return [
            (+extent[0][0] + +extent[1][0]) / 2,
            (+extent[0][1] + +extent[1][1]) / 2
        ];
    }
    function schedule(transition, transform, point, event) {
        transition.on("start.zoom", function() {
            gesture(this, arguments).event(event).start();
        }).on("interrupt.zoom end.zoom", function() {
            gesture(this, arguments).event(event).end();
        }).tween("zoom", function() {
            var that = this, args = arguments, g = gesture(that, args).event(event), e = extent1.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
            return function(t) {
                if (t === 1) t = b; // Avoid rounding error on end.
                else {
                    var l = i(t), k = w / l[2];
                    t = new $cef28161300134a3$export$563a914cafbdc389(k, p[0] - l[0] * k, p[1] - l[1] * k);
                }
                g.zoom(null, t);
            };
        });
    }
    function gesture(that, args, clean) {
        return !clean && that.__zooming || new Gesture(that, args);
    }
    function Gesture(that, args) {
        this.that = that;
        this.args = args;
        this.active = 0;
        this.sourceEvent = null;
        this.extent = extent1.apply(that, args);
        this.taps = 0;
    }
    Gesture.prototype = {
        event: function event1(event) {
            if (event) this.sourceEvent = event;
            return this;
        },
        start: function start() {
            if (++this.active === 1) {
                this.that.__zooming = this;
                this.emit("start");
            }
            return this;
        },
        zoom: function zoom(key, transform) {
            if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
            if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
            if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
            this.that.__zoom = transform;
            this.emit("zoom");
            return this;
        },
        end: function end() {
            if (--this.active === 0) {
                delete this.that.__zooming;
                this.emit("end");
            }
            return this;
        },
        emit: function emit(type) {
            var d = $c6a650051c356b4d$export$2e2bcd8739ae039(this.that).datum();
            listeners.call(type, this.that, new $08f680738ab654fd$export$2e2bcd8739ae039(type, {
                sourceEvent: this.sourceEvent,
                target: zoom,
                type: type,
                transform: this.that.__zoom,
                dispatch: listeners
            }), d);
        }
    };
    function wheeled(event) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        if (!filter.apply(this, arguments)) return;
        var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = $1fcd41a1a5acb211$export$2e2bcd8739ae039(event);
        // If the mouse is in the same location as before, reuse it.
        // If there were recent wheel events, reset the wheel idle timeout.
        if (g.wheel) {
            if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) g.mouse[1] = t.invert(g.mouse[0] = p);
            clearTimeout(g.wheel);
        } else if (t.k === k) return;
        else {
            g.mouse = [
                p,
                t.invert(p)
            ];
            $144433e16464ae98$export$2e2bcd8739ae039(this);
            g.start();
        }
        $e1bdd62bbce55f62$export$2e2bcd8739ae039(event);
        g.wheel = setTimeout(wheelidled, wheelDelay);
        g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
        function wheelidled() {
            g.wheel = null;
            g.end();
        }
    }
    function mousedowned(event2) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        if (touchending || !filter.apply(this, arguments)) return;
        var currentTarget = event2.currentTarget, g = gesture(this, args, true).event(event2), v = $c6a650051c356b4d$export$2e2bcd8739ae039(event2.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = $1fcd41a1a5acb211$export$2e2bcd8739ae039(event2, currentTarget), x0 = event2.clientX, y0 = event2.clientY;
        $c09590197bae6a4f$export$2e2bcd8739ae039(event2.view);
        $e1bdd62bbce55f62$export$2e2561858db9bf47(event2);
        g.mouse = [
            p,
            this.__zoom.invert(p)
        ];
        $144433e16464ae98$export$2e2bcd8739ae039(this);
        g.start();
        function mousemoved(event) {
            $e1bdd62bbce55f62$export$2e2bcd8739ae039(event);
            if (!g.moved) {
                var dx = event.clientX - x0, dy = event.clientY - y0;
                g.moved = dx * dx + dy * dy > clickDistance2;
            }
            g.event(event).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = $1fcd41a1a5acb211$export$2e2bcd8739ae039(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
        }
        function mouseupped(event) {
            v.on("mousemove.zoom mouseup.zoom", null);
            $c09590197bae6a4f$export$833237748009e1e1(event.view, g.moved);
            $e1bdd62bbce55f62$export$2e2bcd8739ae039(event);
            g.event(event).end();
        }
    }
    function dblclicked(event) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        if (!filter.apply(this, arguments)) return;
        var t0 = this.__zoom, p0 = $1fcd41a1a5acb211$export$2e2bcd8739ae039(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent1.apply(this, args), translateExtent);
        $e1bdd62bbce55f62$export$2e2bcd8739ae039(event);
        if (duration > 0) $c6a650051c356b4d$export$2e2bcd8739ae039(this).transition().duration(duration).call(schedule, t1, p0, event);
        else $c6a650051c356b4d$export$2e2bcd8739ae039(this).call(zoom.transform, t1, p0, event);
    }
    function touchstarted(event) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        if (!filter.apply(this, arguments)) return;
        var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
        $e1bdd62bbce55f62$export$2e2561858db9bf47(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = $1fcd41a1a5acb211$export$2e2bcd8739ae039(t, this);
            p = [
                p,
                this.__zoom.invert(p),
                t.identifier
            ];
            if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
            else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
        }
        if (touchstarting) touchstarting = clearTimeout(touchstarting);
        if (started) {
            if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
                touchstarting = null;
            }, touchDelay);
            $144433e16464ae98$export$2e2bcd8739ae039(this);
            g.start();
        }
    }
    function touchmoved(event) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
        $e1bdd62bbce55f62$export$2e2bcd8739ae039(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = $1fcd41a1a5acb211$export$2e2bcd8739ae039(t, this);
            if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
            else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
        }
        t = g.that.__zoom;
        if (g.touch1) {
            var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
            t = scale(t, Math.sqrt(dp / dl));
            p = [
                (p0[0] + p1[0]) / 2,
                (p0[1] + p1[1]) / 2
            ];
            l = [
                (l0[0] + l1[0]) / 2,
                (l0[1] + l1[1]) / 2
            ];
        } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
        else return;
        g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
    }
    function touchended(event) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
        $e1bdd62bbce55f62$export$2e2561858db9bf47(event);
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() {
            touchending = null;
        }, touchDelay);
        for(i = 0; i < n; ++i){
            t = touches[i];
            if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
            else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
        }
        if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
        if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
        else {
            g.end();
            // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
            if (g.taps === 2) {
                t = $1fcd41a1a5acb211$export$2e2bcd8739ae039(t, this);
                if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
                    var p = $c6a650051c356b4d$export$2e2bcd8739ae039(this).on("dblclick.zoom");
                    if (p) p.apply(this, arguments);
                }
            }
        }
    }
    zoom.wheelDelta = function(_) {
        return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : $a28991f30bc65acf$export$2e2bcd8739ae039(+_), zoom) : wheelDelta;
    };
    zoom.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : $a28991f30bc65acf$export$2e2bcd8739ae039(!!_), zoom) : filter;
    };
    zoom.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : $a28991f30bc65acf$export$2e2bcd8739ae039(!!_), zoom) : touchable;
    };
    zoom.extent = function(_) {
        return arguments.length ? (extent1 = typeof _ === "function" ? _ : $a28991f30bc65acf$export$2e2bcd8739ae039([
            [
                +_[0][0],
                +_[0][1]
            ],
            [
                +_[1][0],
                +_[1][1]
            ]
        ]), zoom) : extent1;
    };
    zoom.scaleExtent = function(_) {
        return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [
            scaleExtent[0],
            scaleExtent[1]
        ];
    };
    zoom.translateExtent = function(_) {
        return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [
            [
                translateExtent[0][0],
                translateExtent[0][1]
            ],
            [
                translateExtent[1][0],
                translateExtent[1][1]
            ]
        ];
    };
    zoom.constrain = function(_) {
        return arguments.length ? (constrain = _, zoom) : constrain;
    };
    zoom.duration = function(_) {
        return arguments.length ? (duration = +_, zoom) : duration;
    };
    zoom.interpolate = function(_) {
        return arguments.length ? (interpolate = _, zoom) : interpolate;
    };
    zoom.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? zoom : value;
    };
    zoom.clickDistance = function(_) {
        return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
    };
    zoom.tapDistance = function(_) {
        return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
    };
    return zoom;
}







var $660cdcc6ccbb40c0$exports = {};
$660cdcc6ccbb40c0$exports = JSON.parse("[{\"title\":\"Click to see a cat!\",\"icon\":\"la-desktop\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.W4pl1wabhniHjlCrQHDn3gHaMJ%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"icon\":\"la-headphones\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"icon\":\"la-paint-roller\",\"hasAlert\":true,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a cat!\",\"icon\":\"la-language\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.W4pl1wabhniHjlCrQHDn3gHaMJ%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"icon\":\"la-ruler-horizontal\",\"hasAlert\":true,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"icon\":\"la-server\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a cat!\",\"icon\":\"la-wrench\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.W4pl1wabhniHjlCrQHDn3gHaMJ%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"icon\":\"la-brush\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"icon\":\"la-ethernet\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a cat!\",\"icon\":\"la-keyboard\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.W4pl1wabhniHjlCrQHDn3gHaMJ%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"icon\":\"la-stream\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"icon\":\"la-toolbox\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a cat!\",\"icon\":\"la-desktop\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.W4pl1wabhniHjlCrQHDn3gHaMJ%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"icon\":\"la-headphones\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"icon\":\"la-paint-roller\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a cat!\",\"icon\":\"la-language\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.W4pl1wabhniHjlCrQHDn3gHaMJ%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"icon\":\"la-ruler-horizontal\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"icon\":\"la-server\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a cat!\",\"icon\":\"la-wrench\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.W4pl1wabhniHjlCrQHDn3gHaMJ%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"icon\":\"la-brush\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"icon\":\"la-ethernet\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a cat!\",\"icon\":\"la-keyboard\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.W4pl1wabhniHjlCrQHDn3gHaMJ%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"icon\":\"la-stream\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"icon\":\"la-toolbox\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"icon\":\"la-ethernet\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a cat!\",\"icon\":\"la-keyboard\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.W4pl1wabhniHjlCrQHDn3gHaMJ%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"icon\":\"la-stream\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"icon\":\"la-toolbox\",\"hasAlert\":false,\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"}]");


var $0828a365f8ab690a$exports = {};
$0828a365f8ab690a$exports = JSON.parse("{\"1\":[\"rgb(42, 117, 112)\",\"rgb(0, 133, 122)\",\"rgb(55, 171, 161)\",\"rgb(42, 117, 112)\",\"rgb(0, 133, 122)\",\"rgb(55, 171, 161)\",\"rgb(42, 117, 112)\",\"rgb(0, 133, 122)\",\"rgb(55, 171, 161)\"],\"2\":[\"rgb(90, 184, 242)\",\"rgb(137, 211, 245)\",\"rgb(185, 230, 250)\",\"rgb(90, 184, 242)\",\"rgb(137, 211, 245)\",\"rgb(185, 230, 250)\",\"rgb(90, 184, 242)\",\"rgb(137, 211, 245)\",\"rgb(185, 230, 250)\"],\"3\":[\"rgb(134, 209, 205)\",\"rgb(173, 224, 223)\",\"rgb(216, 240, 239)\",\"rgb(134, 209, 205)\",\"rgb(173, 224, 223)\",\"rgb(216, 240, 239)\",\"rgb(134, 209, 205)\",\"rgb(173, 224, 223)\",\"rgb(216, 240, 239)\"],\"4\":[\"rgb(137, 211, 245)\",\"rgb(90, 184, 242)\",\"rgb(45, 151, 237)\",\"rgb(137, 211, 245)\",\"rgb(90, 184, 242)\",\"rgb(45, 151, 237)\",\"rgb(137, 211, 245)\",\"rgb(90, 184, 242)\",\"rgb(45, 151, 237)\"]}");


var $31c3583b17e8d606$var$svg;
var $31c3583b17e8d606$var$t = 0;
var $31c3583b17e8d606$var$imageLeft;
var $31c3583b17e8d606$var$imageRight;
var $31c3583b17e8d606$var$group1;
var $31c3583b17e8d606$var$group2;
var $31c3583b17e8d606$var$group3;
var $31c3583b17e8d606$var$group4;
var $31c3583b17e8d606$var$arcEase = function(t) {
    return $3c5c77fc90302eb6$export$ed1782b99e69bbc8.amplitude(2).period(0.3)(t);
};
var $31c3583b17e8d606$var$urlSearchParams = new URLSearchParams(window.location.search);
var $31c3583b17e8d606$var$params = Object.fromEntries($31c3583b17e8d606$var$urlSearchParams.entries());
var $31c3583b17e8d606$var$config = {
    canvas: {
        width: 800,
        height: 600
    },
    size: +$31c3583b17e8d606$var$params.size || 6,
    outerRadius: +$31c3583b17e8d606$var$params.radius || 150,
    arcWidth: +$31c3583b17e8d606$var$params.width || 20,
    arcGrowSize: +$31c3583b17e8d606$var$params.grow || 14,
    arcTransitionDelay: +$31c3583b17e8d606$var$params.duration || 100,
    arcTweenTransitionDuration: 2000,
    colors: (/*@__PURE__*/$parcel$interopDefault($0828a365f8ab690a$exports))
};
function $31c3583b17e8d606$var$main() {
    $31c3583b17e8d606$var$svg = $c6a650051c356b4d$export$2e2bcd8739ae039('svg');
    $31c3583b17e8d606$var$appendImagePlaceholders();
    $31c3583b17e8d606$var$initMainGroup();
    var arr = Array.from({
        length: $31c3583b17e8d606$var$config.size / 2
    });
    arr.fill({
        half: 1,
        element: $31c3583b17e8d606$var$group1
    }).forEach($31c3583b17e8d606$var$appendArc);
    arr.fill({
        half: 2,
        element: $31c3583b17e8d606$var$group2
    }).forEach($31c3583b17e8d606$var$appendArc);
    arr.fill({
        half: 3,
        element: $31c3583b17e8d606$var$group3
    }).forEach($31c3583b17e8d606$var$appendArc);
    arr.fill({
        half: 4,
        element: $31c3583b17e8d606$var$group4
    }).forEach($31c3583b17e8d606$var$appendArc);
    $31c3583b17e8d606$var$animateGroups();
}
function $31c3583b17e8d606$var$appendImagePlaceholders() {
    var imageSize = $31c3583b17e8d606$var$config.outerRadius - $31c3583b17e8d606$var$config.arcWidth;
    var wrapper = $31c3583b17e8d606$var$svg === null || $31c3583b17e8d606$var$svg === void 0 ? void 0 : $31c3583b17e8d606$var$svg.append('g').classed('images', true).attr('width', $31c3583b17e8d606$var$config.canvas.width).attr('height', $31c3583b17e8d606$var$config.canvas.height).attr('transform', "translate(".concat($31c3583b17e8d606$var$config.canvas.width / 2, ", ").concat($31c3583b17e8d606$var$config.canvas.height / 2, ")"));
    $31c3583b17e8d606$var$imageLeft = wrapper === null || wrapper === void 0 ? void 0 : wrapper.append('image').classed('image-left', true).attr('width', imageSize).attr('height', imageSize).attr('transform', "translate(".concat(-($31c3583b17e8d606$var$config.outerRadius + imageSize / 2) + $31c3583b17e8d606$var$config.arcWidth / 2, ", ").concat(-imageSize / 2, ")"));
    $31c3583b17e8d606$var$imageRight = wrapper === null || wrapper === void 0 ? void 0 : wrapper.append('image').classed('image-right', true).attr('width', imageSize).attr('height', imageSize).attr('transform', "translate(".concat(imageSize / 2 + $31c3583b17e8d606$var$config.arcWidth / 2, ", ").concat(-imageSize / 2, ")"));
}
function $31c3583b17e8d606$var$initMainGroup() {
    var wrapper = $31c3583b17e8d606$var$svg === null || $31c3583b17e8d606$var$svg === void 0 ? void 0 : $31c3583b17e8d606$var$svg.append('g').classed('wrapper', true).attr('width', $31c3583b17e8d606$var$config.canvas.width).attr('height', $31c3583b17e8d606$var$config.canvas.height).attr('transform', "translate(".concat($31c3583b17e8d606$var$config.canvas.width / 2, ", ").concat($31c3583b17e8d606$var$config.canvas.height / 2, ")"));
    var translateX = $31c3583b17e8d606$var$config.outerRadius - $31c3583b17e8d606$var$config.arcWidth / 2;
    $31c3583b17e8d606$var$group1 = wrapper === null || wrapper === void 0 ? void 0 : wrapper.append('g').classed('group1', true).attr('transform', "translate(".concat(translateX, ", 0)"));
    $31c3583b17e8d606$var$group2 = wrapper === null || wrapper === void 0 ? void 0 : wrapper.append('g').classed('group2', true).attr('transform', "translate(-".concat(translateX, ", 0)"));
    $31c3583b17e8d606$var$group4 = wrapper === null || wrapper === void 0 ? void 0 : wrapper.append('g').classed('group4', true).attr('transform', "translate(-".concat(translateX, ", 0)"));
    $31c3583b17e8d606$var$group3 = wrapper === null || wrapper === void 0 ? void 0 : wrapper.append('g').classed('group3', true).attr('transform', "translate(".concat(translateX, ", 0)"));
}
function $31c3583b17e8d606$var$appendArc(values, index) {
    var ref3, ref1, ref2;
    var half = values.half, element = values.element;
    var div = Math.PI * 2 / $31c3583b17e8d606$var$config.size;
    var isTransitionSlice = half === 3 && index === $31c3583b17e8d606$var$config.size / 2 - 1;
    var startAngle = index === 0 ? 0 : index * div;
    var endAngle = (index + 1) * div;
    var angleOffset = half < 3 ? -($31c3583b17e8d606$var$config.size / 2) * (div / 2) : $31c3583b17e8d606$var$config.size / 2 * (div / 2);
    var innerRadius = $31c3583b17e8d606$var$config.outerRadius - $31c3583b17e8d606$var$config.arcWidth;
    var arcShape = $8b805176339f2cf3$export$2e2bcd8739ae039().innerRadius(innerRadius).outerRadius($31c3583b17e8d606$var$config.outerRadius).startAngle(startAngle + angleOffset).endAngle(endAngle + angleOffset);
    var slice = element === null || element === void 0 ? void 0 : element.append('g').classed('slice', true);
    slice === null || slice === void 0 ? void 0 : slice.attr('data-is-transition-slice', isTransitionSlice).on('click', function(e) {
        $31c3583b17e8d606$var$arcSelectHandler.apply(this, [
            e,
            {
                innerRadius: innerRadius,
                startAngle: startAngle,
                angleOffset: angleOffset,
                endAngle: endAngle,
                half: half
            }
        ]);
    });
    slice === null || slice === void 0 ? void 0 : slice.append('path').classed('arc', true).attr('d', arcShape).attr('data-json', "".concat(JSON.stringify((/*@__PURE__*/$parcel$interopDefault($660cdcc6ccbb40c0$exports))[$31c3583b17e8d606$var$t] || {}))).attr('data-is-reversed', half === 3 || half === 1).attr('data-sa', "".concat(startAngle + angleOffset)).attr('data-ea', "".concat(endAngle + angleOffset)).attr('fill', $31c3583b17e8d606$var$config.colors[half][index]).style('opacity', 0);
    if (isTransitionSlice) slice === null || slice === void 0 ? void 0 : slice.append('path').classed('triangle', true).attr("transform", "translate(-".concat($31c3583b17e8d606$var$config.outerRadius - $31c3583b17e8d606$var$config.arcWidth / 2, ", ").concat($31c3583b17e8d606$var$config.arcWidth / -10 + 2, ")")).attr("d", $4c2ebaa9e45eb11f$export$2e2bcd8739ae039().type($498c686245f3f870$export$2e2bcd8739ae039).size($31c3583b17e8d606$var$config.arcWidth * 4)).attr('fill', $31c3583b17e8d606$var$config.colors[half][index]).style('opacity', 0);
    slice === null || slice === void 0 ? void 0 : slice.append('title').text(((ref3 = (/*@__PURE__*/$parcel$interopDefault($660cdcc6ccbb40c0$exports))[$31c3583b17e8d606$var$t]) === null || ref3 === void 0 ? void 0 : ref3.title) || '');
    var iconContainer = $31c3583b17e8d606$var$config.arcWidth / 5 * 4;
    slice === null || slice === void 0 ? void 0 : slice.append('svg:foreignObject').classed('div-icon', true).attr('width', "".concat(iconContainer, "px")).attr('height', "".concat(iconContainer, "px")).style('opacity', 0).attr('transform', function(d) {
        var ref = $1156f94a82362102$export$2e2bcd8739ae039(arcShape.centroid(d), 2), x = ref[0], y = ref[1];
        return "translate(".concat(x - iconContainer / 2, ", ").concat(y - iconContainer / 2, ")");
    }).append('xhtml:body').html('<i class="las '.concat((ref1 = (/*@__PURE__*/$parcel$interopDefault($660cdcc6ccbb40c0$exports))[$31c3583b17e8d606$var$t]) === null || ref1 === void 0 ? void 0 : ref1.icon, '"></i>'));
    if ((ref2 = (/*@__PURE__*/$parcel$interopDefault($660cdcc6ccbb40c0$exports))[$31c3583b17e8d606$var$t]) === null || ref2 === void 0 ? void 0 : ref2.hasAlert) slice === null || slice === void 0 ? void 0 : slice.append('circle').classed('div-notification', true).attr('r', 10).attr('cx', 5).attr('cy', 5).style('opacity', 0).attr('transform', function(d) {
        var ref = $1156f94a82362102$export$2e2bcd8739ae039($8b805176339f2cf3$export$2e2bcd8739ae039().innerRadius(innerRadius).outerRadius(2 * $31c3583b17e8d606$var$config.arcWidth + ($31c3583b17e8d606$var$config.outerRadius - 20)).startAngle(startAngle + angleOffset).endAngle(endAngle + angleOffset).centroid(d), 2), x = ref[0], y = ref[1];
        return "translate(".concat(x - 5, ", ").concat(y - 5, ")");
    });
    $31c3583b17e8d606$var$t++;
}
function $31c3583b17e8d606$var$arcSelectHandler(_, options) {
    var innerRadius = options.innerRadius, startAngle = options.startAngle, angleOffset = options.angleOffset, endAngle = options.endAngle, half = options.half;
    var slice = $c6a650051c356b4d$export$2e2bcd8739ae039(this);
    var path = slice.select('path');
    var isActive = slice.classed('active');
    var data = JSON.parse(path.attr('data-json') || '');
    var isReversedOrder = half === 3 || half == 1;
    $31c3583b17e8d606$var$resetArcs();
    slice === null || slice === void 0 ? void 0 : slice.classed('active', !isActive);
    if (!isActive) path.transition().ease($31c3583b17e8d606$var$arcEase).duration($31c3583b17e8d606$var$config.arcTweenTransitionDuration).attr('d', function(d) {
        var _startAngle = isReversedOrder ? endAngle : startAngle;
        var _endAngle = isReversedOrder ? startAngle : endAngle;
        return $8b805176339f2cf3$export$2e2bcd8739ae039().innerRadius(innerRadius).outerRadius($31c3583b17e8d606$var$config.outerRadius + $31c3583b17e8d606$var$config.arcGrowSize).startAngle(_startAngle + angleOffset).endAngle(_endAngle + angleOffset)(d);
    });
    $31c3583b17e8d606$var$imageLeft === null || $31c3583b17e8d606$var$imageLeft === void 0 ? void 0 : $31c3583b17e8d606$var$imageLeft.attr('href', null);
    $31c3583b17e8d606$var$imageRight === null || $31c3583b17e8d606$var$imageRight === void 0 ? void 0 : $31c3583b17e8d606$var$imageRight.attr('href', null);
    if (data === null || data === void 0 ? void 0 : data.src) {
        if (half === 3 || half === 1) $31c3583b17e8d606$var$imageRight === null || $31c3583b17e8d606$var$imageRight === void 0 ? void 0 : $31c3583b17e8d606$var$imageRight.attr('href', data.src);
        else $31c3583b17e8d606$var$imageLeft === null || $31c3583b17e8d606$var$imageLeft === void 0 ? void 0 : $31c3583b17e8d606$var$imageLeft.attr('href', data.src);
    }
}
function $31c3583b17e8d606$var$resetArcs() {
    $31c3583b17e8d606$var$svg === null || $31c3583b17e8d606$var$svg === void 0 ? void 0 : $31c3583b17e8d606$var$svg.selectAll('.slice').classed('active', false).each(function() {
        var arcElement = $c6a650051c356b4d$export$2e2bcd8739ae039(this).select('.arc');
        var _startAngle = +arcElement.attr('data-sa');
        var _endAngle = +arcElement.attr('data-ea');
        var isReversedOrder = arcElement.attr('data-is-reversed') === "true";
        $c6a650051c356b4d$export$2e2bcd8739ae039(this).classed('active', false);
        arcElement.transition().ease($31c3583b17e8d606$var$arcEase).duration($31c3583b17e8d606$var$config.arcTweenTransitionDuration).attr('d', function(d) {
            var __startAngle = isReversedOrder ? _endAngle : _startAngle;
            var __endAngle = isReversedOrder ? _startAngle : _endAngle;
            return $8b805176339f2cf3$export$2e2bcd8739ae039().innerRadius($31c3583b17e8d606$var$config.outerRadius - $31c3583b17e8d606$var$config.arcWidth).outerRadius($31c3583b17e8d606$var$config.outerRadius).startAngle(__startAngle).endAngle(__endAngle)(d);
        });
    });
}
function $31c3583b17e8d606$var$animateGroups() {
    [
        4,
        2,
        3,
        1
    ].forEach(function(half, index) {
        $31c3583b17e8d606$var$svg === null || $31c3583b17e8d606$var$svg === void 0 ? void 0 : $31c3583b17e8d606$var$svg.selectAll('.group' + half).each(function() {
            $c6a650051c356b4d$export$2e2bcd8739ae039(this).selectAll('.slice').each(function(_, i, all) {
                var arcElement = $c6a650051c356b4d$export$2e2bcd8739ae039(this).select('.arc');
                var iconElement = $c6a650051c356b4d$export$2e2bcd8739ae039(this).select('.div-icon');
                var circleElement = $c6a650051c356b4d$export$2e2bcd8739ae039(this).select('.div-notification');
                $31c3583b17e8d606$var$animateIn(arcElement, {
                    index: index,
                    all: all,
                    half: half,
                    i: i,
                    hasScaling: true
                });
                $31c3583b17e8d606$var$animateIn(iconElement, {
                    index: index,
                    all: all,
                    half: half,
                    i: i,
                    delay: $31c3583b17e8d606$var$config.arcTransitionDelay * 10
                });
                $31c3583b17e8d606$var$animateIn(circleElement, {
                    index: index,
                    all: all,
                    half: half,
                    i: i,
                    delay: $31c3583b17e8d606$var$config.arcTransitionDelay * 10
                });
                $c6a650051c356b4d$export$2e2bcd8739ae039(this).select('.triangle').transition().duration($31c3583b17e8d606$var$config.arcTransitionDelay * 2).delay(index * (all.length * $31c3583b17e8d606$var$config.arcTransitionDelay) + (i - $31c3583b17e8d606$var$config.size / 2) * $31c3583b17e8d606$var$config.arcTransitionDelay + $31c3583b17e8d606$var$config.arcTransitionDelay).style('opacity', 1);
            });
        });
    });
}
function $31c3583b17e8d606$var$animateIn(element, options) {
    if (!element) return;
    var index = options.index, all = options.all, half = options.half, delay = options.delay, hasScaling = options.hasScaling;
    var i = options.i;
    var isReversedOrder = half === 3 || half == 1;
    var delayValue = index * (all.length * $31c3583b17e8d606$var$config.arcTransitionDelay) + (isReversedOrder ? i = all.length - 1 - i : i) * $31c3583b17e8d606$var$config.arcTransitionDelay;
    if (hasScaling) {
        var startAngle = +element.attr('data-sa');
        var endAngle = +element.attr('data-ea');
        var _startAngle = startAngle;
        var _endAngle = endAngle;
        element.transition().duration(delay || $31c3583b17e8d606$var$config.arcTransitionDelay * 2).delay(delayValue).attrTween('d', function(d) {
            return function(t) {
                var diffAngle = endAngle - startAngle;
                _startAngle = isReversedOrder ? endAngle : startAngle;
                _endAngle = isReversedOrder ? endAngle - t * diffAngle : startAngle + t * diffAngle;
                return $8b805176339f2cf3$export$2e2bcd8739ae039().innerRadius($31c3583b17e8d606$var$config.outerRadius - $31c3583b17e8d606$var$config.arcWidth).outerRadius($31c3583b17e8d606$var$config.outerRadius).startAngle(_startAngle).endAngle(_endAngle)(d);
            };
        }).attr('data-sa', _startAngle).attr('data-ea', _endAngle).style('opacity', 1);
    } else element.transition().duration(delay || $31c3583b17e8d606$var$config.arcTransitionDelay * 2).delay(delayValue).style('opacity', 1);
}
$31c3583b17e8d606$var$main();

})();
//# sourceMappingURL=index.c5cb6ada.js.map
