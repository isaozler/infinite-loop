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


var $4fd0bf7be9e8926c$var$noop = {
    value: ()=>{}
};
function $4fd0bf7be9e8926c$var$dispatch() {
    for(var i = 0, n = arguments.length, _ = {}, t; i < n; ++i){
        if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
    }
    return new $4fd0bf7be9e8926c$var$Dispatch(_);
}
function $4fd0bf7be9e8926c$var$Dispatch(_) {
    this._ = _;
}
function $4fd0bf7be9e8926c$var$parseTypenames(typenames, types) {
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
$4fd0bf7be9e8926c$var$Dispatch.prototype = $4fd0bf7be9e8926c$var$dispatch.prototype = {
    constructor: $4fd0bf7be9e8926c$var$Dispatch,
    on: function(typename, callback) {
        var _ = this._, T = $4fd0bf7be9e8926c$var$parseTypenames(typename + "", _), t, i = -1, n = T.length;
        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
            while(++i < n)if ((t = (typename = T[i]).type) && (t = $4fd0bf7be9e8926c$var$get(_[t], typename.name))) return t;
            return;
        }
        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while(++i < n){
            if (t = (typename = T[i]).type) _[t] = $4fd0bf7be9e8926c$var$set(_[t], typename.name, callback);
            else if (callback == null) for(t in _)_[t] = $4fd0bf7be9e8926c$var$set(_[t], typename.name, null);
        }
        return this;
    },
    copy: function() {
        var copy = {}, _ = this._;
        for(var t in _)copy[t] = _[t].slice();
        return new $4fd0bf7be9e8926c$var$Dispatch(copy);
    },
    call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for(var args = new Array(n), i = 0, n, t; i < n; ++i)args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(var t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    }
};
function $4fd0bf7be9e8926c$var$get(type, name) {
    for(var i = 0, n = type.length, c; i < n; ++i){
        if ((c = type[i]).name === name) return c.value;
    }
}
function $4fd0bf7be9e8926c$var$set(type, name, callback) {
    for(var i = 0, n = type.length; i < n; ++i)if (type[i].name === name) {
        type[i] = $4fd0bf7be9e8926c$var$noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
    }
    if (callback != null) type.push({
        name: name,
        value: callback
    });
    return type;
}
var $4fd0bf7be9e8926c$export$2e2bcd8739ae039 = $4fd0bf7be9e8926c$var$dispatch;



function $80c3a2c6f26b460d$export$2e2bcd8739ae039(selector) {
    return function() {
        return this.matches(selector);
    };
}
function $80c3a2c6f26b460d$export$90c2759c036528(selector) {
    return function(node) {
        return node.matches(selector);
    };
}

var $a2d8d6820ccadbae$export$201a3f7520ccc326 = "http://www.w3.org/1999/xhtml";
var $a2d8d6820ccadbae$export$2e2bcd8739ae039 = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: $a2d8d6820ccadbae$export$201a3f7520ccc326,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};


function $cf64040676c06022$export$2e2bcd8739ae039(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return $a2d8d6820ccadbae$export$2e2bcd8739ae039.hasOwnProperty(prefix) ? {
        space: $a2d8d6820ccadbae$export$2e2bcd8739ae039[prefix],
        local: name
    } : name; // eslint-disable-line no-prototype-builtins
}

function $b956dad2e1f515f0$export$2e2bcd8739ae039(event) {
    let sourceEvent;
    while(sourceEvent = event.sourceEvent)event = sourceEvent;
    return event;
}


function $2b9ddb34f6877c3b$export$2e2bcd8739ae039(event, node) {
    event = $b956dad2e1f515f0$export$2e2bcd8739ae039(event);
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


function $b3790a71806a5f54$var$none() {}
function $b3790a71806a5f54$export$2e2bcd8739ae039(selector) {
    return selector == null ? $b3790a71806a5f54$var$none : function() {
        return this.querySelector(selector);
    };
}


function $5270f51c34429deb$export$2e2bcd8739ae039(select) {
    if (typeof select !== "function") select = $b3790a71806a5f54$export$2e2bcd8739ae039(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
        }
    }
    return new $8fc4650f2b922ad5$export$52baac22726c72bf(subgroups, this._parents);
}



function $ad30b020872d30fa$export$2e2bcd8739ae039(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}


function $16b031a0b3faf5b0$var$empty() {
    return [];
}
function $16b031a0b3faf5b0$export$2e2bcd8739ae039(selector) {
    return selector == null ? $16b031a0b3faf5b0$var$empty : function() {
        return this.querySelectorAll(selector);
    };
}


function $661586171a58555b$var$arrayAll(select) {
    return function() {
        return $ad30b020872d30fa$export$2e2bcd8739ae039(select.apply(this, arguments));
    };
}
function $661586171a58555b$export$2e2bcd8739ae039(select) {
    if (typeof select === "function") select = $661586171a58555b$var$arrayAll(select);
    else select = $16b031a0b3faf5b0$export$2e2bcd8739ae039(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            subgroups.push(select.call(node, node.__data__, i, group));
            parents.push(node);
        }
    }
    return new $8fc4650f2b922ad5$export$52baac22726c72bf(subgroups, parents);
}



var $6ca6c8542dbbc191$var$find = Array.prototype.find;
function $6ca6c8542dbbc191$var$childFind(match) {
    return function() {
        return $6ca6c8542dbbc191$var$find.call(this.children, match);
    };
}
function $6ca6c8542dbbc191$var$childFirst() {
    return this.firstElementChild;
}
function $6ca6c8542dbbc191$export$2e2bcd8739ae039(match) {
    return this.select(match == null ? $6ca6c8542dbbc191$var$childFirst : $6ca6c8542dbbc191$var$childFind(typeof match === "function" ? match : $80c3a2c6f26b460d$export$90c2759c036528(match)));
}



var $7bb7a7ba1ad77bb2$var$filter = Array.prototype.filter;
function $7bb7a7ba1ad77bb2$var$children() {
    return Array.from(this.children);
}
function $7bb7a7ba1ad77bb2$var$childrenFilter(match) {
    return function() {
        return $7bb7a7ba1ad77bb2$var$filter.call(this.children, match);
    };
}
function $7bb7a7ba1ad77bb2$export$2e2bcd8739ae039(match) {
    return this.selectAll(match == null ? $7bb7a7ba1ad77bb2$var$children : $7bb7a7ba1ad77bb2$var$childrenFilter(typeof match === "function" ? match : $80c3a2c6f26b460d$export$90c2759c036528(match)));
}




function $7a78e1bb0beeb09a$export$2e2bcd8739ae039(match) {
    if (typeof match !== "function") match = $80c3a2c6f26b460d$export$2e2bcd8739ae039(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
    }
    return new $8fc4650f2b922ad5$export$52baac22726c72bf(subgroups, this._parents);
}



function $23aa954f0fcb0b78$export$2e2bcd8739ae039(update) {
    return new Array(update.length);
}



function $3242a6647174e387$export$2e2bcd8739ae039() {
    return new $8fc4650f2b922ad5$export$52baac22726c72bf(this._enter || this._groups.map($23aa954f0fcb0b78$export$2e2bcd8739ae039), this._parents);
}
function $3242a6647174e387$export$67b01759a14cf6a4(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
}
$3242a6647174e387$export$67b01759a14cf6a4.prototype = {
    constructor: $3242a6647174e387$export$67b01759a14cf6a4,
    appendChild: function(child) {
        return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
        return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
        return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
        return this._parent.querySelectorAll(selector);
    }
};


function $f30561943f94e7ad$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}


function $f75dbd40625152da$var$bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for(; i < dataLength; ++i)if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
    } else enter[i] = new $3242a6647174e387$export$67b01759a14cf6a4(parent, data[i]);
    // Put any non-null nodes that don’t fit into exit.
    for(; i < groupLength; ++i)if (node = group[i]) exit[i] = node;
}
function $f75dbd40625152da$var$bindKey(parent, group, enter, update, exit, data, key) {
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
        } else enter[i] = new $3242a6647174e387$export$67b01759a14cf6a4(parent, data[i]);
    }
    // Add any remaining nodes that were not bound to data to exit.
    for(i = 0; i < groupLength; ++i)if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) exit[i] = node;
}
function $f75dbd40625152da$var$datum(node) {
    return node.__data__;
}
function $f75dbd40625152da$export$2e2bcd8739ae039(value, key) {
    if (!arguments.length) return Array.from(this, $f75dbd40625152da$var$datum);
    var bind = key ? $f75dbd40625152da$var$bindKey : $f75dbd40625152da$var$bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function") value = $f30561943f94e7ad$export$2e2bcd8739ae039(value);
    for(var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j){
        var parent = parents[j], group = groups[j], groupLength = group.length, data = $f75dbd40625152da$var$arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
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
    update = new $8fc4650f2b922ad5$export$52baac22726c72bf(update, parents);
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
function $f75dbd40625152da$var$arraylike(data) {
    return typeof data === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
     : Array.from(data); // Map, Set, iterable, string, or anything else
}





function $f4490bc0eb7fa515$export$2e2bcd8739ae039() {
    return new $8fc4650f2b922ad5$export$52baac22726c72bf(this._exit || this._groups.map($23aa954f0fcb0b78$export$2e2bcd8739ae039), this._parents);
}


function $d551db2ce5fd5f5c$export$2e2bcd8739ae039(onenter, onupdate, onexit) {
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



function $1f2955df073b12bf$export$2e2bcd8739ae039(context) {
    var selection = context.selection ? context.selection() : context;
    for(var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
    }
    for(; j < m0; ++j)merges[j] = groups0[j];
    return new $8fc4650f2b922ad5$export$52baac22726c72bf(merges, this._parents);
}


function $bc101a8165675913$export$2e2bcd8739ae039() {
    for(var groups = this._groups, j = -1, m = groups.length; ++j < m;){
        for(var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;)if (node = group[i]) {
            if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
            next = node;
        }
    }
    return this;
}



function $ad52ba7a0fc24005$export$2e2bcd8739ae039(compare) {
    if (!compare) compare = $ad52ba7a0fc24005$var$ascending;
    function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for(var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group[i]) sortgroup[i] = node;
        sortgroup.sort(compareNode);
    }
    return new $8fc4650f2b922ad5$export$52baac22726c72bf(sortgroups, this._parents).order();
}
function $ad52ba7a0fc24005$var$ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


function $88076efe362a8012$export$2e2bcd8739ae039() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
}


function $eeb8045ed3b73677$export$2e2bcd8739ae039() {
    return Array.from(this);
}


function $d2ee601872cf7e11$export$2e2bcd8739ae039() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j)for(var group = groups[j], i = 0, n = group.length; i < n; ++i){
        var node = group[i];
        if (node) return node;
    }
    return null;
}


function $dfba75b901c5d24f$export$2e2bcd8739ae039() {
    let size = 0;
    for (const node of this)++size; // eslint-disable-line no-unused-vars
    return size;
}


function $9a595c27ab41b0c4$export$2e2bcd8739ae039() {
    return !this.node();
}


function $d2aeffd50c207ad7$export$2e2bcd8739ae039(callback) {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
    return this;
}



function $0debb8e8ac53bb04$var$attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function $0debb8e8ac53bb04$var$attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function $0debb8e8ac53bb04$var$attrConstant(name, value) {
    return function() {
        this.setAttribute(name, value);
    };
}
function $0debb8e8ac53bb04$var$attrConstantNS(fullname, value) {
    return function() {
        this.setAttributeNS(fullname.space, fullname.local, value);
    };
}
function $0debb8e8ac53bb04$var$attrFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);
        else this.setAttribute(name, v);
    };
}
function $0debb8e8ac53bb04$var$attrFunctionNS(fullname, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
        else this.setAttributeNS(fullname.space, fullname.local, v);
    };
}
function $0debb8e8ac53bb04$export$2e2bcd8739ae039(name, value) {
    var fullname = $cf64040676c06022$export$2e2bcd8739ae039(name);
    if (arguments.length < 2) {
        var node = this.node();
        return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? $0debb8e8ac53bb04$var$attrRemoveNS : $0debb8e8ac53bb04$var$attrRemove : typeof value === "function" ? fullname.local ? $0debb8e8ac53bb04$var$attrFunctionNS : $0debb8e8ac53bb04$var$attrFunction : fullname.local ? $0debb8e8ac53bb04$var$attrConstantNS : $0debb8e8ac53bb04$var$attrConstant)(fullname, value));
}


function $4b2dfa8171234862$export$2e2bcd8739ae039(node) {
    return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
     || node.document && node // node is a Window
     || node.defaultView; // node is a Document
}


function $b5a100eeb65e341f$var$styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function $b5a100eeb65e341f$var$styleConstant(name, value, priority) {
    return function() {
        this.style.setProperty(name, value, priority);
    };
}
function $b5a100eeb65e341f$var$styleFunction(name, value, priority) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);
        else this.style.setProperty(name, v, priority);
    };
}
function $b5a100eeb65e341f$export$2e2bcd8739ae039(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? $b5a100eeb65e341f$var$styleRemove : typeof value === "function" ? $b5a100eeb65e341f$var$styleFunction : $b5a100eeb65e341f$var$styleConstant)(name, value, priority == null ? "" : priority)) : $b5a100eeb65e341f$export$5e3cec964f0b5efd(this.node(), name);
}
function $b5a100eeb65e341f$export$5e3cec964f0b5efd(node, name) {
    return node.style.getPropertyValue(name) || $4b2dfa8171234862$export$2e2bcd8739ae039(node).getComputedStyle(node, null).getPropertyValue(name);
}


function $6e6eb0dcaddd00e2$var$propertyRemove(name) {
    return function() {
        delete this[name];
    };
}
function $6e6eb0dcaddd00e2$var$propertyConstant(name, value) {
    return function() {
        this[name] = value;
    };
}
function $6e6eb0dcaddd00e2$var$propertyFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];
        else this[name] = v;
    };
}
function $6e6eb0dcaddd00e2$export$2e2bcd8739ae039(name, value) {
    return arguments.length > 1 ? this.each((value == null ? $6e6eb0dcaddd00e2$var$propertyRemove : typeof value === "function" ? $6e6eb0dcaddd00e2$var$propertyFunction : $6e6eb0dcaddd00e2$var$propertyConstant)(name, value)) : this.node()[name];
}


function $ceaaf73506138969$var$classArray(string) {
    return string.trim().split(/^|\s+/);
}
function $ceaaf73506138969$var$classList(node) {
    return node.classList || new $ceaaf73506138969$var$ClassList(node);
}
function $ceaaf73506138969$var$ClassList(node) {
    this._node = node;
    this._names = $ceaaf73506138969$var$classArray(node.getAttribute("class") || "");
}
$ceaaf73506138969$var$ClassList.prototype = {
    add: function(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    remove: function(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    contains: function(name) {
        return this._names.indexOf(name) >= 0;
    }
};
function $ceaaf73506138969$var$classedAdd(node, names) {
    var list = $ceaaf73506138969$var$classList(node), i = -1, n = names.length;
    while(++i < n)list.add(names[i]);
}
function $ceaaf73506138969$var$classedRemove(node, names) {
    var list = $ceaaf73506138969$var$classList(node), i = -1, n = names.length;
    while(++i < n)list.remove(names[i]);
}
function $ceaaf73506138969$var$classedTrue(names) {
    return function() {
        $ceaaf73506138969$var$classedAdd(this, names);
    };
}
function $ceaaf73506138969$var$classedFalse(names) {
    return function() {
        $ceaaf73506138969$var$classedRemove(this, names);
    };
}
function $ceaaf73506138969$var$classedFunction(names, value) {
    return function() {
        (value.apply(this, arguments) ? $ceaaf73506138969$var$classedAdd : $ceaaf73506138969$var$classedRemove)(this, names);
    };
}
function $ceaaf73506138969$export$2e2bcd8739ae039(name, value) {
    var names = $ceaaf73506138969$var$classArray(name + "");
    if (arguments.length < 2) {
        var list = $ceaaf73506138969$var$classList(this.node()), i = -1, n = names.length;
        while(++i < n)if (!list.contains(names[i])) return false;
        return true;
    }
    return this.each((typeof value === "function" ? $ceaaf73506138969$var$classedFunction : value ? $ceaaf73506138969$var$classedTrue : $ceaaf73506138969$var$classedFalse)(names, value));
}


function $692e038a78d6d09b$var$textRemove() {
    this.textContent = "";
}
function $692e038a78d6d09b$var$textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function $692e038a78d6d09b$var$textFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
    };
}
function $692e038a78d6d09b$export$2e2bcd8739ae039(value) {
    return arguments.length ? this.each(value == null ? $692e038a78d6d09b$var$textRemove : (typeof value === "function" ? $692e038a78d6d09b$var$textFunction : $692e038a78d6d09b$var$textConstant)(value)) : this.node().textContent;
}


function $3c3e48cd0ffa9c3a$var$htmlRemove() {
    this.innerHTML = "";
}
function $3c3e48cd0ffa9c3a$var$htmlConstant(value) {
    return function() {
        this.innerHTML = value;
    };
}
function $3c3e48cd0ffa9c3a$var$htmlFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
    };
}
function $3c3e48cd0ffa9c3a$export$2e2bcd8739ae039(value) {
    return arguments.length ? this.each(value == null ? $3c3e48cd0ffa9c3a$var$htmlRemove : (typeof value === "function" ? $3c3e48cd0ffa9c3a$var$htmlFunction : $3c3e48cd0ffa9c3a$var$htmlConstant)(value)) : this.node().innerHTML;
}


function $5efb9e49ee363e24$var$raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
}
function $5efb9e49ee363e24$export$2e2bcd8739ae039() {
    return this.each($5efb9e49ee363e24$var$raise);
}


function $be1bc975f9b86caa$var$lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function $be1bc975f9b86caa$export$2e2bcd8739ae039() {
    return this.each($be1bc975f9b86caa$var$lower);
}




function $60a879b7a1edb5aa$var$creatorInherit(name) {
    return function() {
        var document = this.ownerDocument, uri = this.namespaceURI;
        return uri === $a2d8d6820ccadbae$export$201a3f7520ccc326 && document.documentElement.namespaceURI === $a2d8d6820ccadbae$export$201a3f7520ccc326 ? document.createElement(name) : document.createElementNS(uri, name);
    };
}
function $60a879b7a1edb5aa$var$creatorFixed(fullname) {
    return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
}
function $60a879b7a1edb5aa$export$2e2bcd8739ae039(name) {
    var fullname = $cf64040676c06022$export$2e2bcd8739ae039(name);
    return (fullname.local ? $60a879b7a1edb5aa$var$creatorFixed : $60a879b7a1edb5aa$var$creatorInherit)(fullname);
}


function $17b0feff0c34de23$export$2e2bcd8739ae039(name) {
    var create = typeof name === "function" ? name : $60a879b7a1edb5aa$export$2e2bcd8739ae039(name);
    return this.select(function() {
        return this.appendChild(create.apply(this, arguments));
    });
}




function $ab80550c3af06828$var$constantNull() {
    return null;
}
function $ab80550c3af06828$export$2e2bcd8739ae039(name, before) {
    var create = typeof name === "function" ? name : $60a879b7a1edb5aa$export$2e2bcd8739ae039(name), select = before == null ? $ab80550c3af06828$var$constantNull : typeof before === "function" ? before : $b3790a71806a5f54$export$2e2bcd8739ae039(before);
    return this.select(function() {
        return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
}


function $be09b5f62b80ada6$var$remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
}
function $be09b5f62b80ada6$export$2e2bcd8739ae039() {
    return this.each($be09b5f62b80ada6$var$remove);
}


function $3d81ad3b4d80938d$var$selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function $3d81ad3b4d80938d$var$selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function $3d81ad3b4d80938d$export$2e2bcd8739ae039(deep) {
    return this.select(deep ? $3d81ad3b4d80938d$var$selection_cloneDeep : $3d81ad3b4d80938d$var$selection_cloneShallow);
}


function $83ad48fdbe1b08de$export$2e2bcd8739ae039(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
}


function $d98739734a24ba6e$var$contextListener(listener) {
    return function(event) {
        listener.call(this, event, this.__data__);
    };
}
function $d98739734a24ba6e$var$parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {
            type: t,
            name: name
        };
    });
}
function $d98739734a24ba6e$var$onRemove(typename) {
    return function() {
        var on = this.__on;
        if (!on) return;
        for(var j = 0, i = -1, m = on.length, o; j < m; ++j)if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) this.removeEventListener(o.type, o.listener, o.options);
        else on[++i] = o;
        if (++i) on.length = i;
        else delete this.__on;
    };
}
function $d98739734a24ba6e$var$onAdd(typename, value, options) {
    return function() {
        var on = this.__on, o, listener = $d98739734a24ba6e$var$contextListener(value);
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
function $d98739734a24ba6e$export$2e2bcd8739ae039(typename, value, options) {
    var typenames = $d98739734a24ba6e$var$parseTypenames(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
        var on = this.node().__on;
        if (on) for(var j = 0, m = on.length, o; j < m; ++j)for(i = 0, o = on[j]; i < n; ++i){
            if ((t = typenames[i]).type === o.type && t.name === o.name) return o.value;
        }
        return;
    }
    on = value ? $d98739734a24ba6e$var$onAdd : $d98739734a24ba6e$var$onRemove;
    for(i = 0; i < n; ++i)this.each(on(typenames[i], value, options));
    return this;
}



function $f063e37b7292cb35$var$dispatchEvent(node, type, params) {
    var window = $4b2dfa8171234862$export$2e2bcd8739ae039(node), event = window.CustomEvent;
    if (typeof event === "function") event = new event(type, params);
    else {
        event = window.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
}
function $f063e37b7292cb35$var$dispatchConstant(type, params) {
    return function() {
        return $f063e37b7292cb35$var$dispatchEvent(this, type, params);
    };
}
function $f063e37b7292cb35$var$dispatchFunction(type, params) {
    return function() {
        return $f063e37b7292cb35$var$dispatchEvent(this, type, params.apply(this, arguments));
    };
}
function $f063e37b7292cb35$export$2e2bcd8739ae039(type, params) {
    return this.each((typeof params === "function" ? $f063e37b7292cb35$var$dispatchFunction : $f063e37b7292cb35$var$dispatchConstant)(type, params));
}


function* $9d5909673ab6297a$export$2e2bcd8739ae039() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) yield node;
    }
}


var $8fc4650f2b922ad5$export$e8e78c978b129247 = [
    null
];
function $8fc4650f2b922ad5$export$52baac22726c72bf(groups, parents) {
    this._groups = groups;
    this._parents = parents;
}
function $8fc4650f2b922ad5$var$selection() {
    return new $8fc4650f2b922ad5$export$52baac22726c72bf([
        [
            document.documentElement
        ]
    ], $8fc4650f2b922ad5$export$e8e78c978b129247);
}
function $8fc4650f2b922ad5$var$selection_selection() {
    return this;
}
$8fc4650f2b922ad5$export$52baac22726c72bf.prototype = $8fc4650f2b922ad5$var$selection.prototype = {
    constructor: $8fc4650f2b922ad5$export$52baac22726c72bf,
    select: $5270f51c34429deb$export$2e2bcd8739ae039,
    selectAll: $661586171a58555b$export$2e2bcd8739ae039,
    selectChild: $6ca6c8542dbbc191$export$2e2bcd8739ae039,
    selectChildren: $7bb7a7ba1ad77bb2$export$2e2bcd8739ae039,
    filter: $7a78e1bb0beeb09a$export$2e2bcd8739ae039,
    data: $f75dbd40625152da$export$2e2bcd8739ae039,
    enter: $3242a6647174e387$export$2e2bcd8739ae039,
    exit: $f4490bc0eb7fa515$export$2e2bcd8739ae039,
    join: $d551db2ce5fd5f5c$export$2e2bcd8739ae039,
    merge: $1f2955df073b12bf$export$2e2bcd8739ae039,
    selection: $8fc4650f2b922ad5$var$selection_selection,
    order: $bc101a8165675913$export$2e2bcd8739ae039,
    sort: $ad52ba7a0fc24005$export$2e2bcd8739ae039,
    call: $88076efe362a8012$export$2e2bcd8739ae039,
    nodes: $eeb8045ed3b73677$export$2e2bcd8739ae039,
    node: $d2ee601872cf7e11$export$2e2bcd8739ae039,
    size: $dfba75b901c5d24f$export$2e2bcd8739ae039,
    empty: $9a595c27ab41b0c4$export$2e2bcd8739ae039,
    each: $d2aeffd50c207ad7$export$2e2bcd8739ae039,
    attr: $0debb8e8ac53bb04$export$2e2bcd8739ae039,
    style: $b5a100eeb65e341f$export$2e2bcd8739ae039,
    property: $6e6eb0dcaddd00e2$export$2e2bcd8739ae039,
    classed: $ceaaf73506138969$export$2e2bcd8739ae039,
    text: $692e038a78d6d09b$export$2e2bcd8739ae039,
    html: $3c3e48cd0ffa9c3a$export$2e2bcd8739ae039,
    raise: $5efb9e49ee363e24$export$2e2bcd8739ae039,
    lower: $be1bc975f9b86caa$export$2e2bcd8739ae039,
    append: $17b0feff0c34de23$export$2e2bcd8739ae039,
    insert: $ab80550c3af06828$export$2e2bcd8739ae039,
    remove: $be09b5f62b80ada6$export$2e2bcd8739ae039,
    clone: $3d81ad3b4d80938d$export$2e2bcd8739ae039,
    datum: $83ad48fdbe1b08de$export$2e2bcd8739ae039,
    on: $d98739734a24ba6e$export$2e2bcd8739ae039,
    dispatch: $f063e37b7292cb35$export$2e2bcd8739ae039,
    [Symbol.iterator]: $9d5909673ab6297a$export$2e2bcd8739ae039
};
var $8fc4650f2b922ad5$export$2e2bcd8739ae039 = $8fc4650f2b922ad5$var$selection;


function $18bb9e31cc8bbb2e$export$2e2bcd8739ae039(selector) {
    return typeof selector === "string" ? new $8fc4650f2b922ad5$export$52baac22726c72bf([
        [
            document.querySelector(selector)
        ]
    ], [
        document.documentElement
    ]) : new $8fc4650f2b922ad5$export$52baac22726c72bf([
        [
            selector
        ]
    ], $8fc4650f2b922ad5$export$e8e78c978b129247);
}



const $e117bc8d3f9452fb$export$524615cd03e458cc = {
    passive: false
};
const $e117bc8d3f9452fb$export$35431a0e47022de1 = {
    capture: true,
    passive: false
};
function $e117bc8d3f9452fb$export$2e2561858db9bf47(event) {
    event.stopImmediatePropagation();
}
function $e117bc8d3f9452fb$export$2e2bcd8739ae039(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}


function $f214033b98236463$export$2e2bcd8739ae039(view) {
    var root = view.document.documentElement, selection = $18bb9e31cc8bbb2e$export$2e2bcd8739ae039(view).on("dragstart.drag", $e117bc8d3f9452fb$export$2e2bcd8739ae039, $e117bc8d3f9452fb$export$35431a0e47022de1);
    if ("onselectstart" in root) selection.on("selectstart.drag", $e117bc8d3f9452fb$export$2e2bcd8739ae039, $e117bc8d3f9452fb$export$35431a0e47022de1);
    else {
        root.__noselect = root.style.MozUserSelect;
        root.style.MozUserSelect = "none";
    }
}
function $f214033b98236463$export$833237748009e1e1(view, noclick) {
    var root = view.document.documentElement, selection = $18bb9e31cc8bbb2e$export$2e2bcd8739ae039(view).on("dragstart.drag", null);
    if (noclick) {
        selection.on("click.drag", $e117bc8d3f9452fb$export$2e2bcd8739ae039, $e117bc8d3f9452fb$export$35431a0e47022de1);
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



function $04faec9295485450$export$2e2bcd8739ae039(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
}
function $04faec9295485450$export$8b58be045bf06082(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for(var key in definition)prototype[key] = definition[key];
    return prototype;
}


function $4e7f97fb20ddae39$export$892596cec99bc70e() {}
var $4e7f97fb20ddae39$export$4adafc6ed0600c10 = 0.7;
var $4e7f97fb20ddae39$export$9eace2cc0d12c98d = 1 / $4e7f97fb20ddae39$export$4adafc6ed0600c10;
var $4e7f97fb20ddae39$var$reI = "\\s*([+-]?\\d+)\\s*", $4e7f97fb20ddae39$var$reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", $4e7f97fb20ddae39$var$reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", $4e7f97fb20ddae39$var$reHex = /^#([0-9a-f]{3,8})$/, $4e7f97fb20ddae39$var$reRgbInteger = new RegExp(`^rgb\\(${$4e7f97fb20ddae39$var$reI},${$4e7f97fb20ddae39$var$reI},${$4e7f97fb20ddae39$var$reI}\\)$`), $4e7f97fb20ddae39$var$reRgbPercent = new RegExp(`^rgb\\(${$4e7f97fb20ddae39$var$reP},${$4e7f97fb20ddae39$var$reP},${$4e7f97fb20ddae39$var$reP}\\)$`), $4e7f97fb20ddae39$var$reRgbaInteger = new RegExp(`^rgba\\(${$4e7f97fb20ddae39$var$reI},${$4e7f97fb20ddae39$var$reI},${$4e7f97fb20ddae39$var$reI},${$4e7f97fb20ddae39$var$reN}\\)$`), $4e7f97fb20ddae39$var$reRgbaPercent = new RegExp(`^rgba\\(${$4e7f97fb20ddae39$var$reP},${$4e7f97fb20ddae39$var$reP},${$4e7f97fb20ddae39$var$reP},${$4e7f97fb20ddae39$var$reN}\\)$`), $4e7f97fb20ddae39$var$reHslPercent = new RegExp(`^hsl\\(${$4e7f97fb20ddae39$var$reN},${$4e7f97fb20ddae39$var$reP},${$4e7f97fb20ddae39$var$reP}\\)$`), $4e7f97fb20ddae39$var$reHslaPercent = new RegExp(`^hsla\\(${$4e7f97fb20ddae39$var$reN},${$4e7f97fb20ddae39$var$reP},${$4e7f97fb20ddae39$var$reP},${$4e7f97fb20ddae39$var$reN}\\)$`);
var $4e7f97fb20ddae39$var$named = {
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
$04faec9295485450$export$2e2bcd8739ae039($4e7f97fb20ddae39$export$892596cec99bc70e, $4e7f97fb20ddae39$export$2e2bcd8739ae039, {
    copy (channels) {
        return Object.assign(new this.constructor, this, channels);
    },
    displayable () {
        return this.rgb().displayable();
    },
    hex: $4e7f97fb20ddae39$var$color_formatHex,
    formatHex: $4e7f97fb20ddae39$var$color_formatHex,
    formatHex8: $4e7f97fb20ddae39$var$color_formatHex8,
    formatHsl: $4e7f97fb20ddae39$var$color_formatHsl,
    formatRgb: $4e7f97fb20ddae39$var$color_formatRgb,
    toString: $4e7f97fb20ddae39$var$color_formatRgb
});
function $4e7f97fb20ddae39$var$color_formatHex() {
    return this.rgb().formatHex();
}
function $4e7f97fb20ddae39$var$color_formatHex8() {
    return this.rgb().formatHex8();
}
function $4e7f97fb20ddae39$var$color_formatHsl() {
    return $4e7f97fb20ddae39$export$8133dc3fa904d6d1(this).formatHsl();
}
function $4e7f97fb20ddae39$var$color_formatRgb() {
    return this.rgb().formatRgb();
}
function $4e7f97fb20ddae39$export$2e2bcd8739ae039(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = $4e7f97fb20ddae39$var$reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? $4e7f97fb20ddae39$var$rgbn(m) // #ff0000
     : l === 3 ? new $4e7f97fb20ddae39$export$5e05a94393ac29e3(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) // #f00
     : l === 8 ? $4e7f97fb20ddae39$var$rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) // #ff000000
     : l === 4 ? $4e7f97fb20ddae39$var$rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) // #f000
     : null // invalid hex
    ) : (m = $4e7f97fb20ddae39$var$reRgbInteger.exec(format)) ? new $4e7f97fb20ddae39$export$5e05a94393ac29e3(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
     : (m = $4e7f97fb20ddae39$var$reRgbPercent.exec(format)) ? new $4e7f97fb20ddae39$export$5e05a94393ac29e3(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
     : (m = $4e7f97fb20ddae39$var$reRgbaInteger.exec(format)) ? $4e7f97fb20ddae39$var$rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
     : (m = $4e7f97fb20ddae39$var$reRgbaPercent.exec(format)) ? $4e7f97fb20ddae39$var$rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
     : (m = $4e7f97fb20ddae39$var$reHslPercent.exec(format)) ? $4e7f97fb20ddae39$var$hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
     : (m = $4e7f97fb20ddae39$var$reHslaPercent.exec(format)) ? $4e7f97fb20ddae39$var$hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
     : $4e7f97fb20ddae39$var$named.hasOwnProperty(format) ? $4e7f97fb20ddae39$var$rgbn($4e7f97fb20ddae39$var$named[format]) // eslint-disable-line no-prototype-builtins
     : format === "transparent" ? new $4e7f97fb20ddae39$export$5e05a94393ac29e3(NaN, NaN, NaN, 0) : null;
}
function $4e7f97fb20ddae39$var$rgbn(n) {
    return new $4e7f97fb20ddae39$export$5e05a94393ac29e3(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function $4e7f97fb20ddae39$var$rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new $4e7f97fb20ddae39$export$5e05a94393ac29e3(r, g, b, a);
}
function $4e7f97fb20ddae39$export$42da0a331c2802f5(o) {
    if (!(o instanceof $4e7f97fb20ddae39$export$892596cec99bc70e)) o = $4e7f97fb20ddae39$export$2e2bcd8739ae039(o);
    if (!o) return new $4e7f97fb20ddae39$export$5e05a94393ac29e3;
    o = o.rgb();
    return new $4e7f97fb20ddae39$export$5e05a94393ac29e3(o.r, o.g, o.b, o.opacity);
}
function $4e7f97fb20ddae39$export$8972dc0e6ad9238f(r, g, b, opacity) {
    return arguments.length === 1 ? $4e7f97fb20ddae39$export$42da0a331c2802f5(r) : new $4e7f97fb20ddae39$export$5e05a94393ac29e3(r, g, b, opacity == null ? 1 : opacity);
}
function $4e7f97fb20ddae39$export$5e05a94393ac29e3(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
}
$04faec9295485450$export$2e2bcd8739ae039($4e7f97fb20ddae39$export$5e05a94393ac29e3, $4e7f97fb20ddae39$export$8972dc0e6ad9238f, $04faec9295485450$export$8b58be045bf06082($4e7f97fb20ddae39$export$892596cec99bc70e, {
    brighter (k) {
        k = k == null ? $4e7f97fb20ddae39$export$9eace2cc0d12c98d : Math.pow($4e7f97fb20ddae39$export$9eace2cc0d12c98d, k);
        return new $4e7f97fb20ddae39$export$5e05a94393ac29e3(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker (k) {
        k = k == null ? $4e7f97fb20ddae39$export$4adafc6ed0600c10 : Math.pow($4e7f97fb20ddae39$export$4adafc6ed0600c10, k);
        return new $4e7f97fb20ddae39$export$5e05a94393ac29e3(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb () {
        return this;
    },
    clamp () {
        return new $4e7f97fb20ddae39$export$5e05a94393ac29e3($4e7f97fb20ddae39$var$clampi(this.r), $4e7f97fb20ddae39$var$clampi(this.g), $4e7f97fb20ddae39$var$clampi(this.b), $4e7f97fb20ddae39$var$clampa(this.opacity));
    },
    displayable () {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: $4e7f97fb20ddae39$var$rgb_formatHex,
    formatHex: $4e7f97fb20ddae39$var$rgb_formatHex,
    formatHex8: $4e7f97fb20ddae39$var$rgb_formatHex8,
    formatRgb: $4e7f97fb20ddae39$var$rgb_formatRgb,
    toString: $4e7f97fb20ddae39$var$rgb_formatRgb
}));
function $4e7f97fb20ddae39$var$rgb_formatHex() {
    return `#${$4e7f97fb20ddae39$var$hex(this.r)}${$4e7f97fb20ddae39$var$hex(this.g)}${$4e7f97fb20ddae39$var$hex(this.b)}`;
}
function $4e7f97fb20ddae39$var$rgb_formatHex8() {
    return `#${$4e7f97fb20ddae39$var$hex(this.r)}${$4e7f97fb20ddae39$var$hex(this.g)}${$4e7f97fb20ddae39$var$hex(this.b)}${$4e7f97fb20ddae39$var$hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function $4e7f97fb20ddae39$var$rgb_formatRgb() {
    const a = $4e7f97fb20ddae39$var$clampa(this.opacity);
    return `${a === 1 ? "rgb(" : "rgba("}${$4e7f97fb20ddae39$var$clampi(this.r)}, ${$4e7f97fb20ddae39$var$clampi(this.g)}, ${$4e7f97fb20ddae39$var$clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function $4e7f97fb20ddae39$var$clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function $4e7f97fb20ddae39$var$clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function $4e7f97fb20ddae39$var$hex(value) {
    value = $4e7f97fb20ddae39$var$clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
}
function $4e7f97fb20ddae39$var$hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new $4e7f97fb20ddae39$var$Hsl(h, s, l, a);
}
function $4e7f97fb20ddae39$export$8133dc3fa904d6d1(o) {
    if (o instanceof $4e7f97fb20ddae39$var$Hsl) return new $4e7f97fb20ddae39$var$Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof $4e7f97fb20ddae39$export$892596cec99bc70e)) o = $4e7f97fb20ddae39$export$2e2bcd8739ae039(o);
    if (!o) return new $4e7f97fb20ddae39$var$Hsl;
    if (o instanceof $4e7f97fb20ddae39$var$Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
    } else s = l > 0 && l < 1 ? 0 : h;
    return new $4e7f97fb20ddae39$var$Hsl(h, s, l, o.opacity);
}
function $4e7f97fb20ddae39$export$8f4a7c0bb78e6ea8(h, s, l, opacity) {
    return arguments.length === 1 ? $4e7f97fb20ddae39$export$8133dc3fa904d6d1(h) : new $4e7f97fb20ddae39$var$Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function $4e7f97fb20ddae39$var$Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
$04faec9295485450$export$2e2bcd8739ae039($4e7f97fb20ddae39$var$Hsl, $4e7f97fb20ddae39$export$8f4a7c0bb78e6ea8, $04faec9295485450$export$8b58be045bf06082($4e7f97fb20ddae39$export$892596cec99bc70e, {
    brighter (k) {
        k = k == null ? $4e7f97fb20ddae39$export$9eace2cc0d12c98d : Math.pow($4e7f97fb20ddae39$export$9eace2cc0d12c98d, k);
        return new $4e7f97fb20ddae39$var$Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker (k) {
        k = k == null ? $4e7f97fb20ddae39$export$4adafc6ed0600c10 : Math.pow($4e7f97fb20ddae39$export$4adafc6ed0600c10, k);
        return new $4e7f97fb20ddae39$var$Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb () {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new $4e7f97fb20ddae39$export$5e05a94393ac29e3($4e7f97fb20ddae39$var$hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), $4e7f97fb20ddae39$var$hsl2rgb(h, m1, m2), $4e7f97fb20ddae39$var$hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    clamp () {
        return new $4e7f97fb20ddae39$var$Hsl($4e7f97fb20ddae39$var$clamph(this.h), $4e7f97fb20ddae39$var$clampt(this.s), $4e7f97fb20ddae39$var$clampt(this.l), $4e7f97fb20ddae39$var$clampa(this.opacity));
    },
    displayable () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl () {
        const a = $4e7f97fb20ddae39$var$clampa(this.opacity);
        return `${a === 1 ? "hsl(" : "hsla("}${$4e7f97fb20ddae39$var$clamph(this.h)}, ${$4e7f97fb20ddae39$var$clampt(this.s) * 100}%, ${$4e7f97fb20ddae39$var$clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
    }
}));
function $4e7f97fb20ddae39$var$clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
}
function $4e7f97fb20ddae39$var$clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
}
/* From FvD 13.37, CSS Color Module Level 3 */ function $4e7f97fb20ddae39$var$hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}




function $6f02169d7a5f142e$export$4e41033bfeec1a4c(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function $6f02169d7a5f142e$export$2e2bcd8739ae039(values) {
    var n = values.length - 1;
    return function(t) {
        var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
        return $6f02169d7a5f142e$export$4e41033bfeec1a4c((t - i / n) * n, v0, v1, v2, v3);
    };
}



function $d8f06d6acd08d66e$export$2e2bcd8739ae039(values) {
    var n = values.length;
    return function(t) {
        var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
        return $6f02169d7a5f142e$export$4e41033bfeec1a4c((t - i / n) * n, v0, v1, v2, v3);
    };
}


var $792281dffe6267a0$export$2e2bcd8739ae039 = (x)=>()=>x
;


function $51faf1a834d33ef7$var$linear(a, d) {
    return function(t) {
        return a + t * d;
    };
}
function $51faf1a834d33ef7$var$exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
    };
}
function $51faf1a834d33ef7$export$97d7b0c7ddb78dcf(a, b) {
    var d = b - a;
    return d ? $51faf1a834d33ef7$var$linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : $792281dffe6267a0$export$2e2bcd8739ae039(isNaN(a) ? b : a);
}
function $51faf1a834d33ef7$export$a7ebe8cc6aaf8d37(y) {
    return (y = +y) === 1 ? $51faf1a834d33ef7$export$2e2bcd8739ae039 : function(a, b) {
        return b - a ? $51faf1a834d33ef7$var$exponential(a, b, y) : $792281dffe6267a0$export$2e2bcd8739ae039(isNaN(a) ? b : a);
    };
}
function $51faf1a834d33ef7$export$2e2bcd8739ae039(a, b) {
    var d = b - a;
    return d ? $51faf1a834d33ef7$var$linear(a, d) : $792281dffe6267a0$export$2e2bcd8739ae039(isNaN(a) ? b : a);
}


var $f5da01e05fa47254$export$2e2bcd8739ae039 = function rgbGamma(y) {
    var color = $51faf1a834d33ef7$export$a7ebe8cc6aaf8d37(y);
    function rgb(start, end) {
        var r = color((start = $4e7f97fb20ddae39$export$8972dc0e6ad9238f(start)).r, (end = $4e7f97fb20ddae39$export$8972dc0e6ad9238f(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = $51faf1a834d33ef7$export$2e2bcd8739ae039(start.opacity, end.opacity);
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
function $f5da01e05fa47254$var$rgbSpline(spline) {
    return function(colors) {
        var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color;
        for(i = 0; i < n; ++i){
            color = $4e7f97fb20ddae39$export$8972dc0e6ad9238f(colors[i]);
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
var $f5da01e05fa47254$export$2c0e28f2e2852d3f = $f5da01e05fa47254$var$rgbSpline($6f02169d7a5f142e$export$2e2bcd8739ae039);
var $f5da01e05fa47254$export$53d5214f625ccd4c = $f5da01e05fa47254$var$rgbSpline($d8f06d6acd08d66e$export$2e2bcd8739ae039);



function $0fc2b9079f2eaa5f$export$2e2bcd8739ae039(a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
    return function(t) {
        for(i = 0; i < n; ++i)c[i] = a[i] * (1 - t) + b[i] * t;
        return c;
    };
}
function $0fc2b9079f2eaa5f$export$5cd576d1827d40c8(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
}


function $fd0aa7160330ab82$export$2e2bcd8739ae039(a, b) {
    return ($0fc2b9079f2eaa5f$export$5cd576d1827d40c8(b) ? $0fc2b9079f2eaa5f$export$2e2bcd8739ae039 : $fd0aa7160330ab82$export$15d09067c6a5ee49)(a, b);
}
function $fd0aa7160330ab82$export$15d09067c6a5ee49(a, b) {
    var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
    for(i = 0; i < na; ++i)x[i] = $c87a002ed4e624a4$export$2e2bcd8739ae039(a[i], b[i]);
    for(; i < nb; ++i)c[i] = b[i];
    return function(t) {
        for(i = 0; i < na; ++i)c[i] = x[i](t);
        return c;
    };
}


function $cf0a1bc72e2ad49f$export$2e2bcd8739ae039(a, b) {
    var d = new Date;
    return a = +a, b = +b, function(t) {
        return d.setTime(a * (1 - t) + b * t), d;
    };
}


function $d713407994b1ef44$export$2e2bcd8739ae039(a, b) {
    return a = +a, b = +b, function(t) {
        return a * (1 - t) + b * t;
    };
}



function $b872e28d641ad81a$export$2e2bcd8739ae039(a, b) {
    var i = {}, c = {}, k;
    if (a === null || typeof a !== "object") a = {};
    if (b === null || typeof b !== "object") b = {};
    for(k in b)if (k in a) i[k] = $c87a002ed4e624a4$export$2e2bcd8739ae039(a[k], b[k]);
    else c[k] = b[k];
    return function(t) {
        for(k in i)c[k] = i[k](t);
        return c;
    };
}



var $947a2ba701449f66$var$reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, $947a2ba701449f66$var$reB = new RegExp($947a2ba701449f66$var$reA.source, "g");
function $947a2ba701449f66$var$zero(b) {
    return function() {
        return b;
    };
}
function $947a2ba701449f66$var$one(b) {
    return function(t) {
        return b(t) + "";
    };
}
function $947a2ba701449f66$export$2e2bcd8739ae039(a, b) {
    var bi = $947a2ba701449f66$var$reA.lastIndex = $947a2ba701449f66$var$reB.lastIndex = 0, am, bm, bs, i1 = -1, s = [], q = []; // number interpolators
    // Coerce inputs to strings.
    a = a + "", b = b + "";
    // Interpolate pairs of numbers in a & b.
    while((am = $947a2ba701449f66$var$reA.exec(a)) && (bm = $947a2ba701449f66$var$reB.exec(b))){
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
                x: $d713407994b1ef44$export$2e2bcd8739ae039(am, bm)
            });
        }
        bi = $947a2ba701449f66$var$reB.lastIndex;
    }
    // Add remains of b.
    if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i1]) s[i1] += bs; // coalesce with previous string
        else s[++i1] = bs;
    }
    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? q[0] ? $947a2ba701449f66$var$one(q[0].x) : $947a2ba701449f66$var$zero(b) : (b = q.length, function(t) {
        for(var i = 0, o; i < b; ++i)s[(o = q[i]).i] = o.x(t);
        return s.join("");
    });
}




function $c87a002ed4e624a4$export$2e2bcd8739ae039(a, b) {
    var t = typeof b, c;
    return b == null || t === "boolean" ? $792281dffe6267a0$export$2e2bcd8739ae039(b) : (t === "number" ? $d713407994b1ef44$export$2e2bcd8739ae039 : t === "string" ? (c = $4e7f97fb20ddae39$export$2e2bcd8739ae039(b)) ? (b = c, $f5da01e05fa47254$export$2e2bcd8739ae039) : $947a2ba701449f66$export$2e2bcd8739ae039 : b instanceof $4e7f97fb20ddae39$export$2e2bcd8739ae039 ? $f5da01e05fa47254$export$2e2bcd8739ae039 : b instanceof Date ? $cf0a1bc72e2ad49f$export$2e2bcd8739ae039 : $0fc2b9079f2eaa5f$export$5cd576d1827d40c8(b) ? $0fc2b9079f2eaa5f$export$2e2bcd8739ae039 : Array.isArray(b) ? $fd0aa7160330ab82$export$15d09067c6a5ee49 : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? $b872e28d641ad81a$export$2e2bcd8739ae039 : $d713407994b1ef44$export$2e2bcd8739ae039)(a, b);
}


var $7fbdbff5ba9576b1$var$degrees = 180 / Math.PI;
var $7fbdbff5ba9576b1$export$f0954fd7d5368655 = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
function $7fbdbff5ba9576b1$export$2e2bcd8739ae039(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
        translateX: e,
        translateY: f,
        rotate: Math.atan2(b, a) * $7fbdbff5ba9576b1$var$degrees,
        skewX: Math.atan(skewX) * $7fbdbff5ba9576b1$var$degrees,
        scaleX: scaleX,
        scaleY: scaleY
    };
}


var $c378298a947c4696$var$svgNode;
function $c378298a947c4696$export$59ad369bf4938177(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? $7fbdbff5ba9576b1$export$f0954fd7d5368655 : $7fbdbff5ba9576b1$export$2e2bcd8739ae039(m.a, m.b, m.c, m.d, m.e, m.f);
}
function $c378298a947c4696$export$f9ef43f9a1d89a18(value) {
    if (value == null) return $7fbdbff5ba9576b1$export$f0954fd7d5368655;
    if (!$c378298a947c4696$var$svgNode) $c378298a947c4696$var$svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    $c378298a947c4696$var$svgNode.setAttribute("transform", value);
    if (!(value = $c378298a947c4696$var$svgNode.transform.baseVal.consolidate())) return $7fbdbff5ba9576b1$export$f0954fd7d5368655;
    value = value.matrix;
    return $7fbdbff5ba9576b1$export$2e2bcd8739ae039(value.a, value.b, value.c, value.d, value.e, value.f);
}


function $22588767f4d95a2e$var$interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
        return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push("translate(", null, pxComma, null, pxParen);
            q.push({
                i: i - 4,
                x: $d713407994b1ef44$export$2e2bcd8739ae039(xa, xb)
            }, {
                i: i - 2,
                x: $d713407994b1ef44$export$2e2bcd8739ae039(ya, yb)
            });
        } else if (xb || yb) s.push("translate(" + xb + pxComma + yb + pxParen);
    }
    function rotate(a, b, s, q) {
        if (a !== b) {
            if (a - b > 180) b += 360;
            else if (b - a > 180) a += 360; // shortest path
            q.push({
                i: s.push(pop(s) + "rotate(", null, degParen) - 2,
                x: $d713407994b1ef44$export$2e2bcd8739ae039(a, b)
            });
        } else if (b) s.push(pop(s) + "rotate(" + b + degParen);
    }
    function skewX(a, b, s, q) {
        if (a !== b) q.push({
            i: s.push(pop(s) + "skewX(", null, degParen) - 2,
            x: $d713407994b1ef44$export$2e2bcd8739ae039(a, b)
        });
        else if (b) s.push(pop(s) + "skewX(" + b + degParen);
    }
    function scale(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push(pop(s) + "scale(", null, ",", null, ")");
            q.push({
                i: i - 4,
                x: $d713407994b1ef44$export$2e2bcd8739ae039(xa, xb)
            }, {
                i: i - 2,
                x: $d713407994b1ef44$export$2e2bcd8739ae039(ya, yb)
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
var $22588767f4d95a2e$export$56bec7123bb3589a = $22588767f4d95a2e$var$interpolateTransform($c378298a947c4696$export$59ad369bf4938177, "px, ", "px)", "deg)");
var $22588767f4d95a2e$export$da8cba906d64c082 = $22588767f4d95a2e$var$interpolateTransform($c378298a947c4696$export$f9ef43f9a1d89a18, ", ", ")", ")");

var $098bcf577e495df4$var$epsilon2 = 0.000000000001;
function $098bcf577e495df4$var$cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
}
function $098bcf577e495df4$var$sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
}
function $098bcf577e495df4$var$tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
var $098bcf577e495df4$export$2e2bcd8739ae039 = function zoomRho(rho, rho2, rho4) {
    // p0 = [ux0, uy0, w0]
    // p1 = [ux1, uy1, w1]
    function zoom(p0, p1) {
        var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
        // Special case for u0 ≅ u1.
        if (d2 < $098bcf577e495df4$var$epsilon2) {
            S = Math.log(w1 / w0) / rho;
            i = function(t) {
                return [
                    ux0 + t * dx,
                    uy0 + t * dy,
                    w0 * Math.exp(rho * t * S)
                ];
            };
        } else {
            var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
            S = (r1 - r0) / rho;
            i = function(t) {
                var s = t * S, coshr0 = $098bcf577e495df4$var$cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * $098bcf577e495df4$var$tanh(rho * s + r0) - $098bcf577e495df4$var$sinh(r0));
                return [
                    ux0 + u * dx,
                    uy0 + u * dy,
                    w0 * coshr0 / $098bcf577e495df4$var$cosh(rho * s + r0)
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






var $582288dacf5d9bfb$var$frame = 0, $582288dacf5d9bfb$var$timeout = 0, $582288dacf5d9bfb$var$interval = 0, $582288dacf5d9bfb$var$pokeDelay = 1000, $582288dacf5d9bfb$var$taskHead, $582288dacf5d9bfb$var$taskTail, $582288dacf5d9bfb$var$clockLast = 0, $582288dacf5d9bfb$var$clockNow = 0, $582288dacf5d9bfb$var$clockSkew = 0, $582288dacf5d9bfb$var$clock = typeof performance === "object" && performance.now ? performance : Date, $582288dacf5d9bfb$var$setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
};
function $582288dacf5d9bfb$export$461939dd4422153() {
    return $582288dacf5d9bfb$var$clockNow || ($582288dacf5d9bfb$var$setFrame($582288dacf5d9bfb$var$clearNow), $582288dacf5d9bfb$var$clockNow = $582288dacf5d9bfb$var$clock.now() + $582288dacf5d9bfb$var$clockSkew);
}
function $582288dacf5d9bfb$var$clearNow() {
    $582288dacf5d9bfb$var$clockNow = 0;
}
function $582288dacf5d9bfb$export$c57e9b2d8b9e4de() {
    this._call = this._time = this._next = null;
}
$582288dacf5d9bfb$export$c57e9b2d8b9e4de.prototype = $582288dacf5d9bfb$export$9dc4ecf953986f04.prototype = {
    constructor: $582288dacf5d9bfb$export$c57e9b2d8b9e4de,
    restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? $582288dacf5d9bfb$export$461939dd4422153() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && $582288dacf5d9bfb$var$taskTail !== this) {
            if ($582288dacf5d9bfb$var$taskTail) $582288dacf5d9bfb$var$taskTail._next = this;
            else $582288dacf5d9bfb$var$taskHead = this;
            $582288dacf5d9bfb$var$taskTail = this;
        }
        this._call = callback;
        this._time = time;
        $582288dacf5d9bfb$var$sleep();
    },
    stop: function() {
        if (this._call) {
            this._call = null;
            this._time = Infinity;
            $582288dacf5d9bfb$var$sleep();
        }
    }
};
function $582288dacf5d9bfb$export$9dc4ecf953986f04(callback, delay, time) {
    var t = new $582288dacf5d9bfb$export$c57e9b2d8b9e4de;
    t.restart(callback, delay, time);
    return t;
}
function $582288dacf5d9bfb$export$d60154c1d7f3990e() {
    $582288dacf5d9bfb$export$461939dd4422153(); // Get the current time, if not already set.
    ++$582288dacf5d9bfb$var$frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = $582288dacf5d9bfb$var$taskHead, e;
    while(t){
        if ((e = $582288dacf5d9bfb$var$clockNow - t._time) >= 0) t._call.call(undefined, e);
        t = t._next;
    }
    --$582288dacf5d9bfb$var$frame;
}
function $582288dacf5d9bfb$var$wake() {
    $582288dacf5d9bfb$var$clockNow = ($582288dacf5d9bfb$var$clockLast = $582288dacf5d9bfb$var$clock.now()) + $582288dacf5d9bfb$var$clockSkew;
    $582288dacf5d9bfb$var$frame = $582288dacf5d9bfb$var$timeout = 0;
    try {
        $582288dacf5d9bfb$export$d60154c1d7f3990e();
    } finally{
        $582288dacf5d9bfb$var$frame = 0;
        $582288dacf5d9bfb$var$nap();
        $582288dacf5d9bfb$var$clockNow = 0;
    }
}
function $582288dacf5d9bfb$var$poke() {
    var $582288dacf5d9bfb$export$461939dd4422153 = $582288dacf5d9bfb$var$clock.now(), delay = $582288dacf5d9bfb$export$461939dd4422153 - $582288dacf5d9bfb$var$clockLast;
    if (delay > $582288dacf5d9bfb$var$pokeDelay) $582288dacf5d9bfb$var$clockSkew -= delay, $582288dacf5d9bfb$var$clockLast = $582288dacf5d9bfb$export$461939dd4422153;
}
function $582288dacf5d9bfb$var$nap() {
    var t0, t1 = $582288dacf5d9bfb$var$taskHead, t2, time = Infinity;
    while(t1)if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
    } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : $582288dacf5d9bfb$var$taskHead = t2;
    }
    $582288dacf5d9bfb$var$taskTail = t0;
    $582288dacf5d9bfb$var$sleep(time);
}
function $582288dacf5d9bfb$var$sleep(time) {
    if ($582288dacf5d9bfb$var$frame) return; // Soonest alarm already set, or will be.
    if ($582288dacf5d9bfb$var$timeout) $582288dacf5d9bfb$var$timeout = clearTimeout($582288dacf5d9bfb$var$timeout);
    var delay = time - $582288dacf5d9bfb$var$clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
        if (time < Infinity) $582288dacf5d9bfb$var$timeout = setTimeout($582288dacf5d9bfb$var$wake, time - $582288dacf5d9bfb$var$clock.now() - $582288dacf5d9bfb$var$clockSkew);
        if ($582288dacf5d9bfb$var$interval) $582288dacf5d9bfb$var$interval = clearInterval($582288dacf5d9bfb$var$interval);
    } else {
        if (!$582288dacf5d9bfb$var$interval) $582288dacf5d9bfb$var$clockLast = $582288dacf5d9bfb$var$clock.now(), $582288dacf5d9bfb$var$interval = setInterval($582288dacf5d9bfb$var$poke, $582288dacf5d9bfb$var$pokeDelay);
        $582288dacf5d9bfb$var$frame = 1, $582288dacf5d9bfb$var$setFrame($582288dacf5d9bfb$var$wake);
    }
}


function $05261e1b01cb40fe$export$2e2bcd8739ae039(callback, delay, time) {
    var t = new $582288dacf5d9bfb$export$c57e9b2d8b9e4de;
    delay = delay == null ? 0 : +delay;
    t.restart((elapsed)=>{
        t.stop();
        callback(elapsed + delay);
    }, delay, time);
    return t;
}



var $64d7eefb4b0fc11d$var$emptyOn = $4fd0bf7be9e8926c$export$2e2bcd8739ae039("start", "end", "cancel", "interrupt");
var $64d7eefb4b0fc11d$var$emptyTween = [];
var $64d7eefb4b0fc11d$export$ff39ebd4bb12b718 = 0;
var $64d7eefb4b0fc11d$export$584530fe98d14a84 = 1;
var $64d7eefb4b0fc11d$export$a5d151aee16efd42 = 2;
var $64d7eefb4b0fc11d$export$fb935ab5849a0db9 = 3;
var $64d7eefb4b0fc11d$export$1573e22b087389af = 4;
var $64d7eefb4b0fc11d$export$a2e792214ded83b2 = 5;
var $64d7eefb4b0fc11d$export$9d38167254403955 = 6;
function $64d7eefb4b0fc11d$export$2e2bcd8739ae039(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};
    else if (id in schedules) return;
    $64d7eefb4b0fc11d$var$create(node, id, {
        name: name,
        index: index,
        group: group,
        on: $64d7eefb4b0fc11d$var$emptyOn,
        tween: $64d7eefb4b0fc11d$var$emptyTween,
        time: timing.time,
        delay: timing.delay,
        duration: timing.duration,
        ease: timing.ease,
        timer: null,
        state: $64d7eefb4b0fc11d$export$ff39ebd4bb12b718
    });
}
function $64d7eefb4b0fc11d$export$2cd8252107eb640b(node, id) {
    var schedule = $64d7eefb4b0fc11d$export$3988ae62b71be9a3(node, id);
    if (schedule.state > $64d7eefb4b0fc11d$export$ff39ebd4bb12b718) throw new Error("too late; already scheduled");
    return schedule;
}
function $64d7eefb4b0fc11d$export$adaa4cf7ef1b65be(node, id) {
    var schedule = $64d7eefb4b0fc11d$export$3988ae62b71be9a3(node, id);
    if (schedule.state > $64d7eefb4b0fc11d$export$fb935ab5849a0db9) throw new Error("too late; already running");
    return schedule;
}
function $64d7eefb4b0fc11d$export$3988ae62b71be9a3(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
}
function $64d7eefb4b0fc11d$var$create(node, id, self) {
    var schedules = node.__transition, tween;
    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = $582288dacf5d9bfb$export$9dc4ecf953986f04(schedule, 0, self.time);
    function schedule(elapsed) {
        self.state = $64d7eefb4b0fc11d$export$584530fe98d14a84;
        self.timer.restart(start, self.delay, self.time);
        // If the elapsed delay is less than our first sleep, start immediately.
        if (self.delay <= elapsed) start(elapsed - self.delay);
    }
    function start(elapsed) {
        var i, j, n, o;
        // If the state is not SCHEDULED, then we previously errored on start.
        if (self.state !== $64d7eefb4b0fc11d$export$584530fe98d14a84) return stop();
        for(i in schedules){
            o = schedules[i];
            if (o.name !== self.name) continue;
            // While this element already has a starting transition during this frame,
            // defer starting an interrupting transition until that transition has a
            // chance to tick (and possibly end); see d3/d3-transition#54!
            if (o.state === $64d7eefb4b0fc11d$export$fb935ab5849a0db9) return $05261e1b01cb40fe$export$2e2bcd8739ae039(start);
            // Interrupt the active transition, if any.
            if (o.state === $64d7eefb4b0fc11d$export$1573e22b087389af) {
                o.state = $64d7eefb4b0fc11d$export$9d38167254403955;
                o.timer.stop();
                o.on.call("interrupt", node, node.__data__, o.index, o.group);
                delete schedules[i];
            } else if (+i < id) {
                o.state = $64d7eefb4b0fc11d$export$9d38167254403955;
                o.timer.stop();
                o.on.call("cancel", node, node.__data__, o.index, o.group);
                delete schedules[i];
            }
        }
        // Defer the first tick to end of the current frame; see d3/d3#1576.
        // Note the transition may be canceled after start and before the first tick!
        // Note this must be scheduled before the start event; see d3/d3-transition#16!
        // Assuming this is successful, subsequent callbacks go straight to tick.
        $05261e1b01cb40fe$export$2e2bcd8739ae039(function() {
            if (self.state === $64d7eefb4b0fc11d$export$fb935ab5849a0db9) {
                self.state = $64d7eefb4b0fc11d$export$1573e22b087389af;
                self.timer.restart(tick, self.delay, self.time);
                tick(elapsed);
            }
        });
        // Dispatch the start event.
        // Note this must be done before the tween are initialized.
        self.state = $64d7eefb4b0fc11d$export$a5d151aee16efd42;
        self.on.call("start", node, node.__data__, self.index, self.group);
        if (self.state !== $64d7eefb4b0fc11d$export$a5d151aee16efd42) return; // interrupted
        self.state = $64d7eefb4b0fc11d$export$fb935ab5849a0db9;
        // Initialize the tween, deleting null tween.
        tween = new Array(n = self.tween.length);
        for(i = 0, j = -1; i < n; ++i)if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) tween[++j] = o;
        tween.length = j + 1;
    }
    function tick(elapsed) {
        var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = $64d7eefb4b0fc11d$export$a2e792214ded83b2, 1), i = -1, n = tween.length;
        while(++i < n)tween[i].call(node, t);
        // Dispatch the end event.
        if (self.state === $64d7eefb4b0fc11d$export$a2e792214ded83b2) {
            self.on.call("end", node, node.__data__, self.index, self.group);
            stop();
        }
    }
    function stop() {
        self.state = $64d7eefb4b0fc11d$export$9d38167254403955;
        self.timer.stop();
        delete schedules[id];
        for(var i in schedules)return; // eslint-disable-line no-unused-vars
        delete node.__transition;
    }
}


function $0254d51c26bb1c84$export$2e2bcd8739ae039(node, name) {
    var schedules = node.__transition, schedule, active, empty = true, i;
    if (!schedules) return;
    name = name == null ? null : name + "";
    for(i in schedules){
        if ((schedule = schedules[i]).name !== name) {
            empty = false;
            continue;
        }
        active = schedule.state > $64d7eefb4b0fc11d$export$a5d151aee16efd42 && schedule.state < $64d7eefb4b0fc11d$export$a2e792214ded83b2;
        schedule.state = $64d7eefb4b0fc11d$export$9d38167254403955;
        schedule.timer.stop();
        schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
        delete schedules[i];
    }
    if (empty) delete node.__transition;
}


function $32476a078aef5f5b$export$2e2bcd8739ae039(name) {
    return this.each(function() {
        $0254d51c26bb1c84$export$2e2bcd8739ae039(this, name);
    });
}






function $bbfb68296ca0f8ba$var$tweenRemove(id, name) {
    var tween0, tween1;
    return function() {
        var schedule = $64d7eefb4b0fc11d$export$adaa4cf7ef1b65be(this, id), tween = schedule.tween;
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
function $bbfb68296ca0f8ba$var$tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error;
    return function() {
        var schedule = $64d7eefb4b0fc11d$export$adaa4cf7ef1b65be(this, id), tween = schedule.tween;
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
function $bbfb68296ca0f8ba$export$2e2bcd8739ae039(name, value) {
    var id = this._id;
    name += "";
    if (arguments.length < 2) {
        var tween = $64d7eefb4b0fc11d$export$3988ae62b71be9a3(this.node(), id).tween;
        for(var i = 0, n = tween.length, t; i < n; ++i){
            if ((t = tween[i]).name === name) return t.value;
        }
        return null;
    }
    return this.each((value == null ? $bbfb68296ca0f8ba$var$tweenRemove : $bbfb68296ca0f8ba$var$tweenFunction)(id, name, value));
}
function $bbfb68296ca0f8ba$export$f78ce6ab10405d82(transition, name, value) {
    var id = transition._id;
    transition.each(function() {
        var schedule = $64d7eefb4b0fc11d$export$adaa4cf7ef1b65be(this, id);
        (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function(node) {
        return $64d7eefb4b0fc11d$export$3988ae62b71be9a3(node, id).value[name];
    };
}




function $7cf8fad9149a2246$export$2e2bcd8739ae039(a, b) {
    var c;
    return (typeof b === "number" ? $d713407994b1ef44$export$2e2bcd8739ae039 : b instanceof $4e7f97fb20ddae39$export$2e2bcd8739ae039 ? $f5da01e05fa47254$export$2e2bcd8739ae039 : (c = $4e7f97fb20ddae39$export$2e2bcd8739ae039(b)) ? (b = c, $f5da01e05fa47254$export$2e2bcd8739ae039) : $947a2ba701449f66$export$2e2bcd8739ae039)(a, b);
}


function $d378d9fddef03811$var$attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function $d378d9fddef03811$var$attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function $d378d9fddef03811$var$attrConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttribute(name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function $d378d9fddef03811$var$attrConstantNS(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttributeNS(fullname.space, fullname.local);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function $d378d9fddef03811$var$attrFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttribute(name);
        string0 = this.getAttribute(name);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function $d378d9fddef03811$var$attrFunctionNS(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
        string0 = this.getAttributeNS(fullname.space, fullname.local);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function $d378d9fddef03811$export$2e2bcd8739ae039(name, value) {
    var fullname = $cf64040676c06022$export$2e2bcd8739ae039(name), i = fullname === "transform" ? $22588767f4d95a2e$export$da8cba906d64c082 : $7cf8fad9149a2246$export$2e2bcd8739ae039;
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? $d378d9fddef03811$var$attrFunctionNS : $d378d9fddef03811$var$attrFunction)(fullname, i, $bbfb68296ca0f8ba$export$f78ce6ab10405d82(this, "attr." + name, value)) : value == null ? (fullname.local ? $d378d9fddef03811$var$attrRemoveNS : $d378d9fddef03811$var$attrRemove)(fullname) : (fullname.local ? $d378d9fddef03811$var$attrConstantNS : $d378d9fddef03811$var$attrConstant)(fullname, i, value));
}



function $a97aabd4d8da2a8f$var$attrInterpolate(name, i) {
    return function(t) {
        this.setAttribute(name, i.call(this, t));
    };
}
function $a97aabd4d8da2a8f$var$attrInterpolateNS(fullname, i) {
    return function(t) {
        this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
}
function $a97aabd4d8da2a8f$var$attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && $a97aabd4d8da2a8f$var$attrInterpolateNS(fullname, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function $a97aabd4d8da2a8f$var$attrTween(name, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && $a97aabd4d8da2a8f$var$attrInterpolate(name, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function $a97aabd4d8da2a8f$export$2e2bcd8739ae039(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    var fullname = $cf64040676c06022$export$2e2bcd8739ae039(name);
    return this.tween(key, (fullname.local ? $a97aabd4d8da2a8f$var$attrTweenNS : $a97aabd4d8da2a8f$var$attrTween)(fullname, value));
}



function $c00fb91888fbdc23$var$delayFunction(id, value) {
    return function() {
        $64d7eefb4b0fc11d$export$2cd8252107eb640b(this, id).delay = +value.apply(this, arguments);
    };
}
function $c00fb91888fbdc23$var$delayConstant(id, value) {
    return value = +value, function() {
        $64d7eefb4b0fc11d$export$2cd8252107eb640b(this, id).delay = value;
    };
}
function $c00fb91888fbdc23$export$2e2bcd8739ae039(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? $c00fb91888fbdc23$var$delayFunction : $c00fb91888fbdc23$var$delayConstant)(id, value)) : $64d7eefb4b0fc11d$export$3988ae62b71be9a3(this.node(), id).delay;
}



function $7ed57cda60ad7c8e$var$durationFunction(id, value) {
    return function() {
        $64d7eefb4b0fc11d$export$adaa4cf7ef1b65be(this, id).duration = +value.apply(this, arguments);
    };
}
function $7ed57cda60ad7c8e$var$durationConstant(id, value) {
    return value = +value, function() {
        $64d7eefb4b0fc11d$export$adaa4cf7ef1b65be(this, id).duration = value;
    };
}
function $7ed57cda60ad7c8e$export$2e2bcd8739ae039(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? $7ed57cda60ad7c8e$var$durationFunction : $7ed57cda60ad7c8e$var$durationConstant)(id, value)) : $64d7eefb4b0fc11d$export$3988ae62b71be9a3(this.node(), id).duration;
}



function $24c4d86c34034e33$var$easeConstant(id, value) {
    if (typeof value !== "function") throw new Error;
    return function() {
        $64d7eefb4b0fc11d$export$adaa4cf7ef1b65be(this, id).ease = value;
    };
}
function $24c4d86c34034e33$export$2e2bcd8739ae039(value) {
    var id = this._id;
    return arguments.length ? this.each($24c4d86c34034e33$var$easeConstant(id, value)) : $64d7eefb4b0fc11d$export$3988ae62b71be9a3(this.node(), id).ease;
}



function $cf9cd52e22f8da0e$var$easeVarying(id, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (typeof v !== "function") throw new Error;
        $64d7eefb4b0fc11d$export$adaa4cf7ef1b65be(this, id).ease = v;
    };
}
function $cf9cd52e22f8da0e$export$2e2bcd8739ae039(value) {
    if (typeof value !== "function") throw new Error;
    return this.each($cf9cd52e22f8da0e$var$easeVarying(this._id, value));
}




function $10169d4c693ea507$export$2e2bcd8739ae039(match) {
    if (typeof match !== "function") match = $80c3a2c6f26b460d$export$2e2bcd8739ae039(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
    }
    return new $1bf4bd83859fd008$export$be58926105124dd4(subgroups, this._parents, this._name, this._id);
}



function $2826739ee9bd498e$export$2e2bcd8739ae039(transition) {
    if (transition._id !== this._id) throw new Error;
    for(var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
    }
    for(; j < m0; ++j)merges[j] = groups0[j];
    return new $1bf4bd83859fd008$export$be58926105124dd4(merges, this._parents, this._name, this._id);
}



function $8e9589a27b67cbcf$var$start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
        var i = t.indexOf(".");
        if (i >= 0) t = t.slice(0, i);
        return !t || t === "start";
    });
}
function $8e9589a27b67cbcf$var$onFunction(id, name, listener) {
    var on0, on1, sit = $8e9589a27b67cbcf$var$start(name) ? $64d7eefb4b0fc11d$export$2cd8252107eb640b : $64d7eefb4b0fc11d$export$adaa4cf7ef1b65be;
    return function() {
        var schedule = sit(this, id), on = schedule.on;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
        schedule.on = on1;
    };
}
function $8e9589a27b67cbcf$export$2e2bcd8739ae039(name, listener) {
    var id = this._id;
    return arguments.length < 2 ? $64d7eefb4b0fc11d$export$3988ae62b71be9a3(this.node(), id).on.on(name) : this.each($8e9589a27b67cbcf$var$onFunction(id, name, listener));
}


function $98a6f8397c635c6b$var$removeFunction(id) {
    return function() {
        var parent = this.parentNode;
        for(var i in this.__transition)if (+i !== id) return;
        if (parent) parent.removeChild(this);
    };
}
function $98a6f8397c635c6b$export$2e2bcd8739ae039() {
    return this.on("end.remove", $98a6f8397c635c6b$var$removeFunction(this._id));
}





function $05ec8488e66eae67$export$2e2bcd8739ae039(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = $b3790a71806a5f54$export$2e2bcd8739ae039(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
            $64d7eefb4b0fc11d$export$2e2bcd8739ae039(subgroup[i], name, id, i, subgroup, $64d7eefb4b0fc11d$export$3988ae62b71be9a3(node, id));
        }
    }
    return new $1bf4bd83859fd008$export$be58926105124dd4(subgroups, this._parents, name, id);
}





function $2c30f136f9094158$export$2e2bcd8739ae039(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = $16b031a0b3faf5b0$export$2e2bcd8739ae039(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            for(var children = select.call(node, node.__data__, i, group), child, inherit = $64d7eefb4b0fc11d$export$3988ae62b71be9a3(node, id), k = 0, l = children.length; k < l; ++k)if (child = children[k]) $64d7eefb4b0fc11d$export$2e2bcd8739ae039(child, name, id, k, children, inherit);
            subgroups.push(children);
            parents.push(node);
        }
    }
    return new $1bf4bd83859fd008$export$be58926105124dd4(subgroups, parents, name, id);
}



var $d504465b3a17b83b$var$Selection = $8fc4650f2b922ad5$export$2e2bcd8739ae039.prototype.constructor;
function $d504465b3a17b83b$export$2e2bcd8739ae039() {
    return new $d504465b3a17b83b$var$Selection(this._groups, this._parents);
}







function $3bef773fd81e19ad$var$styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = $b5a100eeb65e341f$export$5e3cec964f0b5efd(this, name), string1 = (this.style.removeProperty(name), $b5a100eeb65e341f$export$5e3cec964f0b5efd(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
}
function $3bef773fd81e19ad$var$styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function $3bef773fd81e19ad$var$styleConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = $b5a100eeb65e341f$export$5e3cec964f0b5efd(this, name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function $3bef773fd81e19ad$var$styleFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = $b5a100eeb65e341f$export$5e3cec964f0b5efd(this, name), value1 = value(this), string1 = value1 + "";
        if (value1 == null) string1 = value1 = (this.style.removeProperty(name), $b5a100eeb65e341f$export$5e3cec964f0b5efd(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function $3bef773fd81e19ad$var$styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function() {
        var schedule = $64d7eefb4b0fc11d$export$adaa4cf7ef1b65be(this, id), on = schedule.on, listener = schedule.value[key] == null ? remove || (remove = $3bef773fd81e19ad$var$styleRemove(name)) : undefined;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
        schedule.on = on1;
    };
}
function $3bef773fd81e19ad$export$2e2bcd8739ae039(name, value, priority) {
    var i = (name += "") === "transform" ? $22588767f4d95a2e$export$56bec7123bb3589a : $7cf8fad9149a2246$export$2e2bcd8739ae039;
    return value == null ? this.styleTween(name, $3bef773fd81e19ad$var$styleNull(name, i)).on("end.style." + name, $3bef773fd81e19ad$var$styleRemove(name)) : typeof value === "function" ? this.styleTween(name, $3bef773fd81e19ad$var$styleFunction(name, i, $bbfb68296ca0f8ba$export$f78ce6ab10405d82(this, "style." + name, value))).each($3bef773fd81e19ad$var$styleMaybeRemove(this._id, name)) : this.styleTween(name, $3bef773fd81e19ad$var$styleConstant(name, i, value), priority).on("end.style." + name, null);
}


function $1c5584ccc51b559f$var$styleInterpolate(name, i, priority) {
    return function(t) {
        this.style.setProperty(name, i.call(this, t), priority);
    };
}
function $1c5584ccc51b559f$var$styleTween(name, value, priority) {
    var t, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t = (i0 = i) && $1c5584ccc51b559f$var$styleInterpolate(name, i, priority);
        return t;
    }
    tween._value = value;
    return tween;
}
function $1c5584ccc51b559f$export$2e2bcd8739ae039(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, $1c5584ccc51b559f$var$styleTween(name, value, priority == null ? "" : priority));
}



function $1b4fe99822b2f0f4$var$textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function $1b4fe99822b2f0f4$var$textFunction(value) {
    return function() {
        var value1 = value(this);
        this.textContent = value1 == null ? "" : value1;
    };
}
function $1b4fe99822b2f0f4$export$2e2bcd8739ae039(value) {
    return this.tween("text", typeof value === "function" ? $1b4fe99822b2f0f4$var$textFunction($bbfb68296ca0f8ba$export$f78ce6ab10405d82(this, "text", value)) : $1b4fe99822b2f0f4$var$textConstant(value == null ? "" : value + ""));
}


function $5b139debd393f7e0$var$textInterpolate(i) {
    return function(t) {
        this.textContent = i.call(this, t);
    };
}
function $5b139debd393f7e0$var$textTween(value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && $5b139debd393f7e0$var$textInterpolate(i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function $5b139debd393f7e0$export$2e2bcd8739ae039(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, $5b139debd393f7e0$var$textTween(value));
}




function $19eed9d259d436c9$export$2e2bcd8739ae039() {
    var name = this._name, id0 = this._id, id1 = $1bf4bd83859fd008$export$9ffd10a3fbdc175b();
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            var inherit = $64d7eefb4b0fc11d$export$3988ae62b71be9a3(node, id0);
            $64d7eefb4b0fc11d$export$2e2bcd8739ae039(node, name, id1, i, group, {
                time: inherit.time + inherit.delay + inherit.duration,
                delay: 0,
                duration: inherit.duration,
                ease: inherit.ease
            });
        }
    }
    return new $1bf4bd83859fd008$export$be58926105124dd4(groups, this._parents, name, id1);
}




function $a510e023739bc1c3$export$2e2bcd8739ae039() {
    var on0, on1, that = this, id = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
        var cancel = {
            value: reject
        }, end = {
            value: function() {
                if (--size === 0) resolve();
            }
        };
        that.each(function() {
            var schedule = $64d7eefb4b0fc11d$export$adaa4cf7ef1b65be(this, id), on = schedule.on;
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


var $1bf4bd83859fd008$var$id = 0;
function $1bf4bd83859fd008$export$be58926105124dd4(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
}
function $1bf4bd83859fd008$export$2e2bcd8739ae039(name) {
    return $8fc4650f2b922ad5$export$2e2bcd8739ae039().transition(name);
}
function $1bf4bd83859fd008$export$9ffd10a3fbdc175b() {
    return ++$1bf4bd83859fd008$var$id;
}
var $1bf4bd83859fd008$var$selection_prototype = $8fc4650f2b922ad5$export$2e2bcd8739ae039.prototype;
$1bf4bd83859fd008$export$be58926105124dd4.prototype = $1bf4bd83859fd008$export$2e2bcd8739ae039.prototype = {
    constructor: $1bf4bd83859fd008$export$be58926105124dd4,
    select: $05ec8488e66eae67$export$2e2bcd8739ae039,
    selectAll: $2c30f136f9094158$export$2e2bcd8739ae039,
    selectChild: $1bf4bd83859fd008$var$selection_prototype.selectChild,
    selectChildren: $1bf4bd83859fd008$var$selection_prototype.selectChildren,
    filter: $10169d4c693ea507$export$2e2bcd8739ae039,
    merge: $2826739ee9bd498e$export$2e2bcd8739ae039,
    selection: $d504465b3a17b83b$export$2e2bcd8739ae039,
    transition: $19eed9d259d436c9$export$2e2bcd8739ae039,
    call: $1bf4bd83859fd008$var$selection_prototype.call,
    nodes: $1bf4bd83859fd008$var$selection_prototype.nodes,
    node: $1bf4bd83859fd008$var$selection_prototype.node,
    size: $1bf4bd83859fd008$var$selection_prototype.size,
    empty: $1bf4bd83859fd008$var$selection_prototype.empty,
    each: $1bf4bd83859fd008$var$selection_prototype.each,
    on: $8e9589a27b67cbcf$export$2e2bcd8739ae039,
    attr: $d378d9fddef03811$export$2e2bcd8739ae039,
    attrTween: $a97aabd4d8da2a8f$export$2e2bcd8739ae039,
    style: $3bef773fd81e19ad$export$2e2bcd8739ae039,
    styleTween: $1c5584ccc51b559f$export$2e2bcd8739ae039,
    text: $1b4fe99822b2f0f4$export$2e2bcd8739ae039,
    textTween: $5b139debd393f7e0$export$2e2bcd8739ae039,
    remove: $98a6f8397c635c6b$export$2e2bcd8739ae039,
    tween: $bbfb68296ca0f8ba$export$2e2bcd8739ae039,
    delay: $c00fb91888fbdc23$export$2e2bcd8739ae039,
    duration: $7ed57cda60ad7c8e$export$2e2bcd8739ae039,
    ease: $24c4d86c34034e33$export$2e2bcd8739ae039,
    easeVarying: $cf9cd52e22f8da0e$export$2e2bcd8739ae039,
    end: $a510e023739bc1c3$export$2e2bcd8739ae039,
    [Symbol.iterator]: $1bf4bd83859fd008$var$selection_prototype[Symbol.iterator]
};



function $271a3b417fd211ca$export$b1a09cb1b71f86aa(t) {
    return t * t * t;
}
function $271a3b417fd211ca$export$68d528839c701b6(t) {
    return --t * t * t + 1;
}
function $271a3b417fd211ca$export$89238d3bc79d3ada(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

function $ad89d68634ea3f9d$export$be3f0f7224794b88(x) {
    return (Math.pow(2, -10 * x) - 0.0009765625) * 1.0009775171065494;
}


var $237bf0d19747a4d0$var$tau = 2 * Math.PI, $237bf0d19747a4d0$var$amplitude = 1, $237bf0d19747a4d0$var$period = 0.3;
var $237bf0d19747a4d0$export$41f42134872a5fa0 = function custom(a1, p1) {
    var s = Math.asin(1 / (a1 = Math.max(1, a1))) * (p1 /= $237bf0d19747a4d0$var$tau);
    function $237bf0d19747a4d0$export$41f42134872a5fa0(t) {
        return a1 * $ad89d68634ea3f9d$export$be3f0f7224794b88(- --t) * Math.sin((s - t) / p1);
    }
    $237bf0d19747a4d0$export$41f42134872a5fa0.amplitude = function(a) {
        return custom(a, p1 * $237bf0d19747a4d0$var$tau);
    };
    $237bf0d19747a4d0$export$41f42134872a5fa0.period = function(p) {
        return custom(a1, p);
    };
    return $237bf0d19747a4d0$export$41f42134872a5fa0;
}($237bf0d19747a4d0$var$amplitude, $237bf0d19747a4d0$var$period);
var $237bf0d19747a4d0$export$ed1782b99e69bbc8 = function custom(a2, p2) {
    var s = Math.asin(1 / (a2 = Math.max(1, a2))) * (p2 /= $237bf0d19747a4d0$var$tau);
    function $237bf0d19747a4d0$export$ed1782b99e69bbc8(t) {
        return 1 - a2 * $ad89d68634ea3f9d$export$be3f0f7224794b88(t = +t) * Math.sin((t + s) / p2);
    }
    $237bf0d19747a4d0$export$ed1782b99e69bbc8.amplitude = function(a) {
        return custom(a, p2 * $237bf0d19747a4d0$var$tau);
    };
    $237bf0d19747a4d0$export$ed1782b99e69bbc8.period = function(p) {
        return custom(a2, p);
    };
    return $237bf0d19747a4d0$export$ed1782b99e69bbc8;
}($237bf0d19747a4d0$var$amplitude, $237bf0d19747a4d0$var$period);
var $237bf0d19747a4d0$export$309de4f35f218bfd = function custom(a3, p3) {
    var s = Math.asin(1 / (a3 = Math.max(1, a3))) * (p3 /= $237bf0d19747a4d0$var$tau);
    function $237bf0d19747a4d0$export$309de4f35f218bfd(t) {
        return ((t = t * 2 - 1) < 0 ? a3 * $ad89d68634ea3f9d$export$be3f0f7224794b88(-t) * Math.sin((s - t) / p3) : 2 - a3 * $ad89d68634ea3f9d$export$be3f0f7224794b88(t) * Math.sin((s + t) / p3)) / 2;
    }
    $237bf0d19747a4d0$export$309de4f35f218bfd.amplitude = function(a) {
        return custom(a, p3 * $237bf0d19747a4d0$var$tau);
    };
    $237bf0d19747a4d0$export$309de4f35f218bfd.period = function(p) {
        return custom(a3, p);
    };
    return $237bf0d19747a4d0$export$309de4f35f218bfd;
}($237bf0d19747a4d0$var$amplitude, $237bf0d19747a4d0$var$period);




var $b744d5353f365cc3$var$defaultTiming = {
    time: null,
    delay: 0,
    duration: 250,
    ease: $271a3b417fd211ca$export$89238d3bc79d3ada
};
function $b744d5353f365cc3$var$inherit(node, id) {
    var timing;
    while(!(timing = node.__transition) || !(timing = timing[id])){
        if (!(node = node.parentNode)) throw new Error(`transition ${id} not found`);
    }
    return timing;
}
function $b744d5353f365cc3$export$2e2bcd8739ae039(name) {
    var id, timing;
    if (name instanceof $1bf4bd83859fd008$export$be58926105124dd4) id = name._id, name = name._name;
    else id = $1bf4bd83859fd008$export$9ffd10a3fbdc175b(), (timing = $b744d5353f365cc3$var$defaultTiming).time = $582288dacf5d9bfb$export$461939dd4422153(), name = name == null ? null : name + "";
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) $64d7eefb4b0fc11d$export$2e2bcd8739ae039(node, name, id, i, group, timing || $b744d5353f365cc3$var$inherit(node, id));
    }
    return new $1bf4bd83859fd008$export$be58926105124dd4(groups, this._parents, name, id);
}


$8fc4650f2b922ad5$export$2e2bcd8739ae039.prototype.interrupt = $32476a078aef5f5b$export$2e2bcd8739ae039;
$8fc4650f2b922ad5$export$2e2bcd8739ae039.prototype.transition = $b744d5353f365cc3$export$2e2bcd8739ae039;







var $0a55aed554f141fa$export$2e2bcd8739ae039 = (x)=>()=>x
;


function $5b8ff99c64b81491$export$2e2bcd8739ae039(type, { sourceEvent: sourceEvent , target: target , selection: selection , mode: mode , dispatch: dispatch  }) {
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


function $782cf1d0005fc024$export$2e2561858db9bf47(event) {
    event.stopImmediatePropagation();
}
function $782cf1d0005fc024$export$2e2bcd8739ae039(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}


var $676c9eeefc9dc32b$var$MODE_DRAG = {
    name: "drag"
}, $676c9eeefc9dc32b$var$MODE_SPACE = {
    name: "space"
}, $676c9eeefc9dc32b$var$MODE_HANDLE = {
    name: "handle"
}, $676c9eeefc9dc32b$var$MODE_CENTER = {
    name: "center"
};
const { abs: $676c9eeefc9dc32b$var$abs , max: $676c9eeefc9dc32b$var$max , min: $676c9eeefc9dc32b$var$min  } = Math;
function $676c9eeefc9dc32b$var$number1(e) {
    return [
        +e[0],
        +e[1]
    ];
}
function $676c9eeefc9dc32b$var$number2(e) {
    return [
        $676c9eeefc9dc32b$var$number1(e[0]),
        $676c9eeefc9dc32b$var$number1(e[1])
    ];
}
var $676c9eeefc9dc32b$var$X = {
    name: "x",
    handles: [
        "w",
        "e"
    ].map($676c9eeefc9dc32b$var$type),
    input: function(x, e) {
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
    output: function(xy) {
        return xy && [
            xy[0][0],
            xy[1][0]
        ];
    }
};
var $676c9eeefc9dc32b$var$Y = {
    name: "y",
    handles: [
        "n",
        "s"
    ].map($676c9eeefc9dc32b$var$type),
    input: function(y, e) {
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
    output: function(xy) {
        return xy && [
            xy[0][1],
            xy[1][1]
        ];
    }
};
var $676c9eeefc9dc32b$var$XY = {
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
    ].map($676c9eeefc9dc32b$var$type),
    input: function(xy) {
        return xy == null ? null : $676c9eeefc9dc32b$var$number2(xy);
    },
    output: function(xy) {
        return xy;
    }
};
var $676c9eeefc9dc32b$var$cursors = {
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
var $676c9eeefc9dc32b$var$flipX = {
    e: "w",
    w: "e",
    nw: "ne",
    ne: "nw",
    se: "sw",
    sw: "se"
};
var $676c9eeefc9dc32b$var$flipY = {
    n: "s",
    s: "n",
    nw: "sw",
    ne: "se",
    se: "ne",
    sw: "nw"
};
var $676c9eeefc9dc32b$var$signsX = {
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
var $676c9eeefc9dc32b$var$signsY = {
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
function $676c9eeefc9dc32b$var$type(t) {
    return {
        type: t
    };
}
// Ignore right-click, since that should open the context menu.
function $676c9eeefc9dc32b$var$defaultFilter(event) {
    return !event.ctrlKey && !event.button;
}
function $676c9eeefc9dc32b$var$defaultExtent() {
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
function $676c9eeefc9dc32b$var$defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
// Like d3.local, but with the name “__brush” rather than auto-generated.
function $676c9eeefc9dc32b$var$local(node) {
    while(!node.__brush)if (!(node = node.parentNode)) return;
    return node.__brush;
}
function $676c9eeefc9dc32b$var$empty(extent) {
    return extent[0][0] === extent[1][0] || extent[0][1] === extent[1][1];
}
function $676c9eeefc9dc32b$export$69760394fc76f689(node) {
    var state = node.__brush;
    return state ? state.dim.output(state.selection) : null;
}
function $676c9eeefc9dc32b$export$979ace6c88860aa8() {
    return $676c9eeefc9dc32b$var$brush($676c9eeefc9dc32b$var$X);
}
function $676c9eeefc9dc32b$export$468748b530991c54() {
    return $676c9eeefc9dc32b$var$brush($676c9eeefc9dc32b$var$Y);
}
function $676c9eeefc9dc32b$export$2e2bcd8739ae039() {
    return $676c9eeefc9dc32b$var$brush($676c9eeefc9dc32b$var$XY);
}
function $676c9eeefc9dc32b$var$brush(dim) {
    var extent1 = $676c9eeefc9dc32b$var$defaultExtent, filter = $676c9eeefc9dc32b$var$defaultFilter, touchable = $676c9eeefc9dc32b$var$defaultTouchable, keys = true, listeners = $4fd0bf7be9e8926c$export$2e2bcd8739ae039("start", "brush", "end"), handleSize = 6, touchending;
    function brush(group) {
        var overlay = group.property("__brush", initialize).selectAll(".overlay").data([
            $676c9eeefc9dc32b$var$type("overlay")
        ]);
        overlay.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", $676c9eeefc9dc32b$var$cursors.overlay).merge(overlay).each(function() {
            var extent = $676c9eeefc9dc32b$var$local(this).extent;
            $18bb9e31cc8bbb2e$export$2e2bcd8739ae039(this).attr("x", extent[0][0]).attr("y", extent[0][1]).attr("width", extent[1][0] - extent[0][0]).attr("height", extent[1][1] - extent[0][1]);
        });
        group.selectAll(".selection").data([
            $676c9eeefc9dc32b$var$type("selection")
        ]).enter().append("rect").attr("class", "selection").attr("cursor", $676c9eeefc9dc32b$var$cursors.selection).attr("fill", "#777").attr("fill-opacity", 0.3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
        var handle = group.selectAll(".handle").data(dim.handles, function(d) {
            return d.type;
        });
        handle.exit().remove();
        handle.enter().append("rect").attr("class", function(d) {
            return "handle handle--" + d.type;
        }).attr("cursor", function(d) {
            return $676c9eeefc9dc32b$var$cursors[d.type];
        });
        group.each(redraw).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", started).filter(touchable).on("touchstart.brush", started).on("touchmove.brush", touchmoved).on("touchend.brush touchcancel.brush", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    brush.move = function(group, selection, event1) {
        if (group.tween) group.on("start.brush", function(event) {
            emitter(this, arguments).beforestart().start(event);
        }).on("interrupt.brush end.brush", function(event) {
            emitter(this, arguments).end(event);
        }).tween("brush", function() {
            var that = this, state = that.__brush, emit = emitter(that, arguments), selection0 = state.selection, selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent), i = $c87a002ed4e624a4$export$2e2bcd8739ae039(selection0, selection1);
            function tween(t) {
                state.selection = t === 1 && selection1 === null ? null : i(t);
                redraw.call(that);
                emit.brush();
            }
            return selection0 !== null && selection1 !== null ? tween : tween(1);
        });
        else group.each(function() {
            var that = this, args = arguments, state = that.__brush, selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent), emit = emitter(that, args).beforestart();
            $0254d51c26bb1c84$export$2e2bcd8739ae039(that);
            state.selection = selection1 === null ? null : selection1;
            redraw.call(that);
            emit.start(event1).brush(event1).end(event1);
        });
    };
    brush.clear = function(group, event) {
        brush.move(group, null, event);
    };
    function redraw() {
        var group = $18bb9e31cc8bbb2e$export$2e2bcd8739ae039(this), selection = $676c9eeefc9dc32b$var$local(this).selection;
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
        beforestart: function() {
            if (++this.active === 1) this.state.emitter = this, this.starting = true;
            return this;
        },
        start: function(event, mode) {
            if (this.starting) this.starting = false, this.emit("start", event, mode);
            else this.emit("brush", event);
            return this;
        },
        brush: function(event, mode) {
            this.emit("brush", event, mode);
            return this;
        },
        end: function(event, mode) {
            if (--this.active === 0) delete this.state.emitter, this.emit("end", event, mode);
            return this;
        },
        emit: function(type, event, mode) {
            var d = $18bb9e31cc8bbb2e$export$2e2bcd8739ae039(this.that).datum();
            listeners.call(type, this.that, new $5b8ff99c64b81491$export$2e2bcd8739ae039(type, {
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
        var that = this, type = event2.target.__data__.type, mode = (keys && event2.metaKey ? type = "overlay" : type) === "selection" ? $676c9eeefc9dc32b$var$MODE_DRAG : keys && event2.altKey ? $676c9eeefc9dc32b$var$MODE_CENTER : $676c9eeefc9dc32b$var$MODE_HANDLE, signX = dim === $676c9eeefc9dc32b$var$Y ? null : $676c9eeefc9dc32b$var$signsX[type], signY = dim === $676c9eeefc9dc32b$var$X ? null : $676c9eeefc9dc32b$var$signsY[type], state = $676c9eeefc9dc32b$var$local(that), extent = state.extent, selection = state.selection, W = extent[0][0], w0, w1, N = extent[0][1], n0, n1, E = extent[1][0], e0, e1, S = extent[1][1], s0, s1, dx = 0, dy = 0, moving, shifting = signX && signY && keys && event2.shiftKey, lockX, lockY, points = Array.from(event2.touches || [
            event2
        ], (t)=>{
            const i = t.identifier;
            t = $2b9ddb34f6877c3b$export$2e2bcd8739ae039(t, that);
            t.point0 = t.slice();
            t.identifier = i;
            return t;
        });
        $0254d51c26bb1c84$export$2e2bcd8739ae039(that);
        var emit = emitter(that, arguments, true).beforestart();
        if (type === "overlay") {
            if (selection) moving = true;
            const pts = [
                points[0],
                points[1] || points[0]
            ];
            state.selection = selection = [
                [
                    w0 = dim === $676c9eeefc9dc32b$var$Y ? W : $676c9eeefc9dc32b$var$min(pts[0][0], pts[1][0]),
                    n0 = dim === $676c9eeefc9dc32b$var$X ? N : $676c9eeefc9dc32b$var$min(pts[0][1], pts[1][1])
                ],
                [
                    e0 = dim === $676c9eeefc9dc32b$var$Y ? E : $676c9eeefc9dc32b$var$max(pts[0][0], pts[1][0]),
                    s0 = dim === $676c9eeefc9dc32b$var$X ? S : $676c9eeefc9dc32b$var$max(pts[0][1], pts[1][1])
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
        var group = $18bb9e31cc8bbb2e$export$2e2bcd8739ae039(that).attr("pointer-events", "none");
        var overlay = group.selectAll(".overlay").attr("cursor", $676c9eeefc9dc32b$var$cursors[type]);
        if (event2.touches) {
            emit.moved = moved;
            emit.ended = ended;
        } else {
            var view = $18bb9e31cc8bbb2e$export$2e2bcd8739ae039(event2.view).on("mousemove.brush", moved, true).on("mouseup.brush", ended, true);
            if (keys) view.on("keydown.brush", keydowned, true).on("keyup.brush", keyupped, true);
            $f214033b98236463$export$2e2bcd8739ae039(event2.view);
        }
        redraw.call(that);
        emit.start(event2, mode.name);
        function moved(event) {
            for (const p of event.changedTouches || [
                event
            ]){
                for (const d of points)if (d.identifier === p.identifier) d.cur = $2b9ddb34f6877c3b$export$2e2bcd8739ae039(p, that);
            }
            if (shifting && !lockX && !lockY && points.length === 1) {
                const point = points[0];
                if ($676c9eeefc9dc32b$var$abs(point.cur[0] - point[0]) > $676c9eeefc9dc32b$var$abs(point.cur[1] - point[1])) lockY = true;
                else lockX = true;
            }
            for (const point of points)if (point.cur) point[0] = point.cur[0], point[1] = point.cur[1];
            moving = true;
            $782cf1d0005fc024$export$2e2bcd8739ae039(event);
            move(event);
        }
        function move(event) {
            const point = points[0], point0 = point.point0;
            var t;
            dx = point[0] - point0[0];
            dy = point[1] - point0[1];
            switch(mode){
                case $676c9eeefc9dc32b$var$MODE_SPACE:
                case $676c9eeefc9dc32b$var$MODE_DRAG:
                    if (signX) dx = $676c9eeefc9dc32b$var$max(W - w0, $676c9eeefc9dc32b$var$min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
                    if (signY) dy = $676c9eeefc9dc32b$var$max(N - n0, $676c9eeefc9dc32b$var$min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
                    break;
                case $676c9eeefc9dc32b$var$MODE_HANDLE:
                    if (points[1]) {
                        if (signX) w1 = $676c9eeefc9dc32b$var$max(W, $676c9eeefc9dc32b$var$min(E, points[0][0])), e1 = $676c9eeefc9dc32b$var$max(W, $676c9eeefc9dc32b$var$min(E, points[1][0])), signX = 1;
                        if (signY) n1 = $676c9eeefc9dc32b$var$max(N, $676c9eeefc9dc32b$var$min(S, points[0][1])), s1 = $676c9eeefc9dc32b$var$max(N, $676c9eeefc9dc32b$var$min(S, points[1][1])), signY = 1;
                    } else {
                        if (signX < 0) dx = $676c9eeefc9dc32b$var$max(W - w0, $676c9eeefc9dc32b$var$min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
                        else if (signX > 0) dx = $676c9eeefc9dc32b$var$max(W - e0, $676c9eeefc9dc32b$var$min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
                        if (signY < 0) dy = $676c9eeefc9dc32b$var$max(N - n0, $676c9eeefc9dc32b$var$min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
                        else if (signY > 0) dy = $676c9eeefc9dc32b$var$max(N - s0, $676c9eeefc9dc32b$var$min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
                    }
                    break;
                case $676c9eeefc9dc32b$var$MODE_CENTER:
                    if (signX) w1 = $676c9eeefc9dc32b$var$max(W, $676c9eeefc9dc32b$var$min(E, w0 - dx * signX)), e1 = $676c9eeefc9dc32b$var$max(W, $676c9eeefc9dc32b$var$min(E, e0 + dx * signX));
                    if (signY) n1 = $676c9eeefc9dc32b$var$max(N, $676c9eeefc9dc32b$var$min(S, n0 - dy * signY)), s1 = $676c9eeefc9dc32b$var$max(N, $676c9eeefc9dc32b$var$min(S, s0 + dy * signY));
                    break;
            }
            if (e1 < w1) {
                signX *= -1;
                t = w0, w0 = e0, e0 = t;
                t = w1, w1 = e1, e1 = t;
                if (type in $676c9eeefc9dc32b$var$flipX) overlay.attr("cursor", $676c9eeefc9dc32b$var$cursors[type = $676c9eeefc9dc32b$var$flipX[type]]);
            }
            if (s1 < n1) {
                signY *= -1;
                t = n0, n0 = s0, s0 = t;
                t = n1, n1 = s1, s1 = t;
                if (type in $676c9eeefc9dc32b$var$flipY) overlay.attr("cursor", $676c9eeefc9dc32b$var$cursors[type = $676c9eeefc9dc32b$var$flipY[type]]);
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
            $782cf1d0005fc024$export$2e2561858db9bf47(event);
            if (event.touches) {
                if (event.touches.length) return;
                if (touchending) clearTimeout(touchending);
                touchending = setTimeout(function() {
                    touchending = null;
                }, 500); // Ghost clicks are delayed!
            } else {
                $f214033b98236463$export$833237748009e1e1(event.view, moving);
                view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
            }
            group.attr("pointer-events", "all");
            overlay.attr("cursor", $676c9eeefc9dc32b$var$cursors.overlay);
            if (state.selection) selection = state.selection; // May be set by brush.move (on start)!
            if ($676c9eeefc9dc32b$var$empty(selection)) state.selection = null, redraw.call(that);
            emit.end(event, mode.name);
        }
        function keydowned(event) {
            switch(event.keyCode){
                case 16:
                    shifting = signX && signY;
                    break;
                case 18:
                    if (mode === $676c9eeefc9dc32b$var$MODE_HANDLE) {
                        if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
                        if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
                        mode = $676c9eeefc9dc32b$var$MODE_CENTER;
                        move(event);
                    }
                    break;
                case 32:
                    if (mode === $676c9eeefc9dc32b$var$MODE_HANDLE || mode === $676c9eeefc9dc32b$var$MODE_CENTER) {
                        if (signX < 0) e0 = e1 - dx;
                        else if (signX > 0) w0 = w1 - dx;
                        if (signY < 0) s0 = s1 - dy;
                        else if (signY > 0) n0 = n1 - dy;
                        mode = $676c9eeefc9dc32b$var$MODE_SPACE;
                        overlay.attr("cursor", $676c9eeefc9dc32b$var$cursors.selection);
                        move(event);
                    }
                    break;
                default:
                    return;
            }
            $782cf1d0005fc024$export$2e2bcd8739ae039(event);
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
                    if (mode === $676c9eeefc9dc32b$var$MODE_CENTER) {
                        if (signX < 0) e0 = e1;
                        else if (signX > 0) w0 = w1;
                        if (signY < 0) s0 = s1;
                        else if (signY > 0) n0 = n1;
                        mode = $676c9eeefc9dc32b$var$MODE_HANDLE;
                        move(event);
                    }
                    break;
                case 32:
                    if (mode === $676c9eeefc9dc32b$var$MODE_SPACE) {
                        if (event.altKey) {
                            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
                            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
                            mode = $676c9eeefc9dc32b$var$MODE_CENTER;
                        } else {
                            if (signX < 0) e0 = e1;
                            else if (signX > 0) w0 = w1;
                            if (signY < 0) s0 = s1;
                            else if (signY > 0) n0 = n1;
                            mode = $676c9eeefc9dc32b$var$MODE_HANDLE;
                        }
                        overlay.attr("cursor", $676c9eeefc9dc32b$var$cursors[type]);
                        move(event);
                    }
                    break;
                default:
                    return;
            }
            $782cf1d0005fc024$export$2e2bcd8739ae039(event);
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
        state.extent = $676c9eeefc9dc32b$var$number2(extent1.apply(this, arguments));
        state.dim = dim;
        return state;
    }
    brush.extent = function(_) {
        return arguments.length ? (extent1 = typeof _ === "function" ? _ : $0a55aed554f141fa$export$2e2bcd8739ae039($676c9eeefc9dc32b$var$number2(_)), brush) : extent1;
    };
    brush.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : $0a55aed554f141fa$export$2e2bcd8739ae039(!!_), brush) : filter;
    };
    brush.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : $0a55aed554f141fa$export$2e2bcd8739ae039(!!_), brush) : touchable;
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

























const $cb3274b616c62d87$var$pi = Math.PI, $cb3274b616c62d87$var$tau = 2 * $cb3274b616c62d87$var$pi, $cb3274b616c62d87$var$epsilon = 0.000001, $cb3274b616c62d87$var$tauEpsilon = $cb3274b616c62d87$var$tau - $cb3274b616c62d87$var$epsilon;
function $cb3274b616c62d87$var$Path() {
    this._x0 = this._y0 = this._x1 = this._y1 = null; // end of current subpath
    this._ = "";
}
function $cb3274b616c62d87$var$path() {
    return new $cb3274b616c62d87$var$Path;
}
$cb3274b616c62d87$var$Path.prototype = $cb3274b616c62d87$var$path.prototype = {
    constructor: $cb3274b616c62d87$var$Path,
    moveTo: function(x, y) {
        this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
    },
    closePath: function() {
        if (this._x1 !== null) {
            this._x1 = this._x0, this._y1 = this._y0;
            this._ += "Z";
        }
    },
    lineTo: function(x, y) {
        this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    quadraticCurveTo: function(x1, y1, x, y) {
        this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    bezierCurveTo: function(x1, y1, x2, y2, x, y) {
        this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    arcTo: function(x1, y1, x2, y2, r) {
        x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
        var x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
        // Is the radius negative? Error.
        if (r < 0) throw new Error("negative radius: " + r);
        // Is this path empty? Move to (x1,y1).
        if (this._x1 === null) this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
        else if (!(l01_2 > $cb3274b616c62d87$var$epsilon)) ;
        else if (!(Math.abs(y01 * x21 - y21 * x01) > $cb3274b616c62d87$var$epsilon) || !r) this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
        else {
            var x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan(($cb3274b616c62d87$var$pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
            // If the start tangent is not coincident with (x0,y0), line to.
            if (Math.abs(t01 - 1) > $cb3274b616c62d87$var$epsilon) this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
            this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
        }
    },
    arc: function(x, y, r, a0, a1, ccw) {
        x = +x, y = +y, r = +r, ccw = !!ccw;
        var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x + dx, y0 = y + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
        // Is the radius negative? Error.
        if (r < 0) throw new Error("negative radius: " + r);
        // Is this path empty? Move to (x0,y0).
        if (this._x1 === null) this._ += "M" + x0 + "," + y0;
        else if (Math.abs(this._x1 - x0) > $cb3274b616c62d87$var$epsilon || Math.abs(this._y1 - y0) > $cb3274b616c62d87$var$epsilon) this._ += "L" + x0 + "," + y0;
        // Is this arc empty? We’re done.
        if (!r) return;
        // Does the angle go the wrong way? Flip the direction.
        if (da < 0) da = da % $cb3274b616c62d87$var$tau + $cb3274b616c62d87$var$tau;
        // Is this a complete circle? Draw two arcs to complete the circle.
        if (da > $cb3274b616c62d87$var$tauEpsilon) this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
        else if (da > $cb3274b616c62d87$var$epsilon) this._ += "A" + r + "," + r + ",0," + +(da >= $cb3274b616c62d87$var$pi) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    },
    rect: function(x, y, w, h) {
        this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + +w + "v" + +h + "h" + -w + "Z";
    },
    toString: function() {
        return this._;
    }
};
var $cb3274b616c62d87$export$2e2bcd8739ae039 = $cb3274b616c62d87$var$path;



function $734790f900fd554a$export$2e2bcd8739ae039(x) {
    return function constant() {
        return x;
    };
}


const $af145e970178438f$export$2335f513bbd82c6d = Math.abs;
const $af145e970178438f$export$b8b770ee6a0d9760 = Math.atan2;
const $af145e970178438f$export$50d414a77b60d802 = Math.cos;
const $af145e970178438f$export$8960430cfd85939f = Math.max;
const $af145e970178438f$export$96ec731ed4dcb222 = Math.min;
const $af145e970178438f$export$5de3937cb4b592ed = Math.sin;
const $af145e970178438f$export$eba8049fb5020b81 = Math.sqrt;
const $af145e970178438f$export$6c421550c66a327d = 0.000000000001;
const $af145e970178438f$export$18c7bea995a110f = Math.PI;
const $af145e970178438f$export$e51408a300e8929a = $af145e970178438f$export$18c7bea995a110f / 2;
const $af145e970178438f$export$a4b4b4d4d776fe92 = 2 * $af145e970178438f$export$18c7bea995a110f;
function $af145e970178438f$export$fd6306be3fde5b04(x) {
    return x > 1 ? 0 : x < -1 ? $af145e970178438f$export$18c7bea995a110f : Math.acos(x);
}
function $af145e970178438f$export$41726bdb1fc63f(x) {
    return x >= 1 ? $af145e970178438f$export$e51408a300e8929a : x <= -1 ? -$af145e970178438f$export$e51408a300e8929a : Math.asin(x);
}


function $e6384621fd8bb5cf$var$arcInnerRadius(d) {
    return d.innerRadius;
}
function $e6384621fd8bb5cf$var$arcOuterRadius(d) {
    return d.outerRadius;
}
function $e6384621fd8bb5cf$var$arcStartAngle(d) {
    return d.startAngle;
}
function $e6384621fd8bb5cf$var$arcEndAngle(d) {
    return d.endAngle;
}
function $e6384621fd8bb5cf$var$arcPadAngle(d) {
    return d && d.padAngle; // Note: optional!
}
function $e6384621fd8bb5cf$var$intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
    var x10 = x1 - x0, y10 = y1 - y0, x32 = x3 - x2, y32 = y3 - y2, t = y32 * x10 - x32 * y10;
    if (t * t < $af145e970178438f$export$6c421550c66a327d) return;
    t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
    return [
        x0 + t * x10,
        y0 + t * y10
    ];
}
// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function $e6384621fd8bb5cf$var$cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
    var x01 = x0 - x1, y01 = y0 - y1, lo = (cw ? rc : -rc) / $af145e970178438f$export$eba8049fb5020b81(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x0 + ox, y11 = y0 + oy, x10 = x1 + ox, y10 = y1 + oy, x00 = (x11 + x10) / 2, y00 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * $af145e970178438f$export$eba8049fb5020b81($af145e970178438f$export$8960430cfd85939f(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x00, dy0 = cy0 - y00, dx1 = cx1 - x00, dy1 = cy1 - y00;
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
function $e6384621fd8bb5cf$export$2e2bcd8739ae039() {
    var innerRadius = $e6384621fd8bb5cf$var$arcInnerRadius, outerRadius = $e6384621fd8bb5cf$var$arcOuterRadius, cornerRadius = $734790f900fd554a$export$2e2bcd8739ae039(0), padRadius = null, startAngle = $e6384621fd8bb5cf$var$arcStartAngle, endAngle = $e6384621fd8bb5cf$var$arcEndAngle, padAngle = $e6384621fd8bb5cf$var$arcPadAngle, context = null;
    function arc() {
        var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - $af145e970178438f$export$e51408a300e8929a, a1 = endAngle.apply(this, arguments) - $af145e970178438f$export$e51408a300e8929a, da = $af145e970178438f$export$2335f513bbd82c6d(a1 - a0), cw = a1 > a0;
        if (!context) context = buffer = $cb3274b616c62d87$export$2e2bcd8739ae039();
        // Ensure that the outer radius is always larger than the inner radius.
        if (r1 < r0) r = r1, r1 = r0, r0 = r;
        // Is it a point?
        if (!(r1 > $af145e970178438f$export$6c421550c66a327d)) context.moveTo(0, 0);
        else if (da > $af145e970178438f$export$a4b4b4d4d776fe92 - $af145e970178438f$export$6c421550c66a327d) {
            context.moveTo(r1 * $af145e970178438f$export$50d414a77b60d802(a0), r1 * $af145e970178438f$export$5de3937cb4b592ed(a0));
            context.arc(0, 0, r1, a0, a1, !cw);
            if (r0 > $af145e970178438f$export$6c421550c66a327d) {
                context.moveTo(r0 * $af145e970178438f$export$50d414a77b60d802(a1), r0 * $af145e970178438f$export$5de3937cb4b592ed(a1));
                context.arc(0, 0, r0, a1, a0, cw);
            }
        } else {
            var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > $af145e970178438f$export$6c421550c66a327d && (padRadius ? +padRadius.apply(this, arguments) : $af145e970178438f$export$eba8049fb5020b81(r0 * r0 + r1 * r1)), rc = $af145e970178438f$export$96ec731ed4dcb222($af145e970178438f$export$2335f513bbd82c6d(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t0, t1;
            // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
            if (rp > $af145e970178438f$export$6c421550c66a327d) {
                var p0 = $af145e970178438f$export$41726bdb1fc63f(rp / r0 * $af145e970178438f$export$5de3937cb4b592ed(ap)), p1 = $af145e970178438f$export$41726bdb1fc63f(rp / r1 * $af145e970178438f$export$5de3937cb4b592ed(ap));
                if ((da0 -= p0 * 2) > $af145e970178438f$export$6c421550c66a327d) p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;
                else da0 = 0, a00 = a10 = (a0 + a1) / 2;
                if ((da1 -= p1 * 2) > $af145e970178438f$export$6c421550c66a327d) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
                else da1 = 0, a01 = a11 = (a0 + a1) / 2;
            }
            var x01 = r1 * $af145e970178438f$export$50d414a77b60d802(a01), y01 = r1 * $af145e970178438f$export$5de3937cb4b592ed(a01), x10 = r0 * $af145e970178438f$export$50d414a77b60d802(a10), y10 = r0 * $af145e970178438f$export$5de3937cb4b592ed(a10);
            // Apply rounded corners?
            if (rc > $af145e970178438f$export$6c421550c66a327d) {
                var x11 = r1 * $af145e970178438f$export$50d414a77b60d802(a11), y11 = r1 * $af145e970178438f$export$5de3937cb4b592ed(a11), x00 = r0 * $af145e970178438f$export$50d414a77b60d802(a00), y00 = r0 * $af145e970178438f$export$5de3937cb4b592ed(a00), oc;
                // Restrict the corner radius according to the sector angle.
                if (da < $af145e970178438f$export$18c7bea995a110f && (oc = $e6384621fd8bb5cf$var$intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
                    var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / $af145e970178438f$export$5de3937cb4b592ed($af145e970178438f$export$fd6306be3fde5b04((ax * bx + ay * by) / ($af145e970178438f$export$eba8049fb5020b81(ax * ax + ay * ay) * $af145e970178438f$export$eba8049fb5020b81(bx * bx + by * by))) / 2), lc = $af145e970178438f$export$eba8049fb5020b81(oc[0] * oc[0] + oc[1] * oc[1]);
                    rc0 = $af145e970178438f$export$96ec731ed4dcb222(rc, (r0 - lc) / (kc - 1));
                    rc1 = $af145e970178438f$export$96ec731ed4dcb222(rc, (r1 - lc) / (kc + 1));
                }
            }
            // Is the sector collapsed to a line?
            if (!(da1 > $af145e970178438f$export$6c421550c66a327d)) context.moveTo(x01, y01);
            else if (rc1 > $af145e970178438f$export$6c421550c66a327d) {
                t0 = $e6384621fd8bb5cf$var$cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
                t1 = $e6384621fd8bb5cf$var$cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
                context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);
                // Have the corners merged?
                if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, $af145e970178438f$export$b8b770ee6a0d9760(t0.y01, t0.x01), $af145e970178438f$export$b8b770ee6a0d9760(t1.y01, t1.x01), !cw);
                else {
                    context.arc(t0.cx, t0.cy, rc1, $af145e970178438f$export$b8b770ee6a0d9760(t0.y01, t0.x01), $af145e970178438f$export$b8b770ee6a0d9760(t0.y11, t0.x11), !cw);
                    context.arc(0, 0, r1, $af145e970178438f$export$b8b770ee6a0d9760(t0.cy + t0.y11, t0.cx + t0.x11), $af145e970178438f$export$b8b770ee6a0d9760(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
                    context.arc(t1.cx, t1.cy, rc1, $af145e970178438f$export$b8b770ee6a0d9760(t1.y11, t1.x11), $af145e970178438f$export$b8b770ee6a0d9760(t1.y01, t1.x01), !cw);
                }
            } else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
            // Is there no inner ring, and it’s a circular sector?
            // Or perhaps it’s an annular sector collapsed due to padding?
            if (!(r0 > $af145e970178438f$export$6c421550c66a327d) || !(da0 > $af145e970178438f$export$6c421550c66a327d)) context.lineTo(x10, y10);
            else if (rc0 > $af145e970178438f$export$6c421550c66a327d) {
                t0 = $e6384621fd8bb5cf$var$cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
                t1 = $e6384621fd8bb5cf$var$cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
                context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);
                // Have the corners merged?
                if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, $af145e970178438f$export$b8b770ee6a0d9760(t0.y01, t0.x01), $af145e970178438f$export$b8b770ee6a0d9760(t1.y01, t1.x01), !cw);
                else {
                    context.arc(t0.cx, t0.cy, rc0, $af145e970178438f$export$b8b770ee6a0d9760(t0.y01, t0.x01), $af145e970178438f$export$b8b770ee6a0d9760(t0.y11, t0.x11), !cw);
                    context.arc(0, 0, r0, $af145e970178438f$export$b8b770ee6a0d9760(t0.cy + t0.y11, t0.cx + t0.x11), $af145e970178438f$export$b8b770ee6a0d9760(t1.cy + t1.y11, t1.cx + t1.x11), cw);
                    context.arc(t1.cx, t1.cy, rc0, $af145e970178438f$export$b8b770ee6a0d9760(t1.y11, t1.x11), $af145e970178438f$export$b8b770ee6a0d9760(t1.y01, t1.x01), !cw);
                }
            } else context.arc(0, 0, r0, a10, a00, cw);
        }
        context.closePath();
        if (buffer) return context = null, buffer + "" || null;
    }
    arc.centroid = function() {
        var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - $af145e970178438f$export$18c7bea995a110f / 2;
        return [
            $af145e970178438f$export$50d414a77b60d802(a) * r,
            $af145e970178438f$export$5de3937cb4b592ed(a) * r
        ];
    };
    arc.innerRadius = function(_) {
        return arguments.length ? (innerRadius = typeof _ === "function" ? _ : $734790f900fd554a$export$2e2bcd8739ae039(+_), arc) : innerRadius;
    };
    arc.outerRadius = function(_) {
        return arguments.length ? (outerRadius = typeof _ === "function" ? _ : $734790f900fd554a$export$2e2bcd8739ae039(+_), arc) : outerRadius;
    };
    arc.cornerRadius = function(_) {
        return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : $734790f900fd554a$export$2e2bcd8739ae039(+_), arc) : cornerRadius;
    };
    arc.padRadius = function(_) {
        return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : $734790f900fd554a$export$2e2bcd8739ae039(+_), arc) : padRadius;
    };
    arc.startAngle = function(_) {
        return arguments.length ? (startAngle = typeof _ === "function" ? _ : $734790f900fd554a$export$2e2bcd8739ae039(+_), arc) : startAngle;
    };
    arc.endAngle = function(_) {
        return arguments.length ? (endAngle = typeof _ === "function" ? _ : $734790f900fd554a$export$2e2bcd8739ae039(+_), arc) : endAngle;
    };
    arc.padAngle = function(_) {
        return arguments.length ? (padAngle = typeof _ === "function" ? _ : $734790f900fd554a$export$2e2bcd8739ae039(+_), arc) : padAngle;
    };
    arc.context = function(_) {
        return arguments.length ? (context = _ == null ? null : _, arc) : context;
    };
    return arc;
}












var $44fc8bafa20524d2$export$2e2bcd8739ae039 = (x)=>()=>x
;


function $6d397e41bb30a3d5$export$2e2bcd8739ae039(type, { sourceEvent: sourceEvent , target: target , transform: transform , dispatch: dispatch  }) {
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


function $1900536d9e0be36d$export$563a914cafbdc389(k, x, y) {
    this.k = k;
    this.x = x;
    this.y = y;
}
$1900536d9e0be36d$export$563a914cafbdc389.prototype = {
    constructor: $1900536d9e0be36d$export$563a914cafbdc389,
    scale: function(k) {
        return k === 1 ? this : new $1900536d9e0be36d$export$563a914cafbdc389(this.k * k, this.x, this.y);
    },
    translate: function(x, y) {
        return x === 0 & y === 0 ? this : new $1900536d9e0be36d$export$563a914cafbdc389(this.k, this.x + this.k * x, this.y + this.k * y);
    },
    apply: function(point) {
        return [
            point[0] * this.k + this.x,
            point[1] * this.k + this.y
        ];
    },
    applyX: function(x) {
        return x * this.k + this.x;
    },
    applyY: function(y) {
        return y * this.k + this.y;
    },
    invert: function(location) {
        return [
            (location[0] - this.x) / this.k,
            (location[1] - this.y) / this.k
        ];
    },
    invertX: function(x) {
        return (x - this.x) / this.k;
    },
    invertY: function(y) {
        return (y - this.y) / this.k;
    },
    rescaleX: function(x) {
        return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
    },
    rescaleY: function(y) {
        return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
    },
    toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
};
var $1900536d9e0be36d$export$f0954fd7d5368655 = new $1900536d9e0be36d$export$563a914cafbdc389(1, 0, 0);
$1900536d9e0be36d$export$2e2bcd8739ae039.prototype = $1900536d9e0be36d$export$563a914cafbdc389.prototype;
function $1900536d9e0be36d$export$2e2bcd8739ae039(node) {
    while(!node.__zoom)if (!(node = node.parentNode)) return $1900536d9e0be36d$export$f0954fd7d5368655;
    return node.__zoom;
}


function $5780c17aaf76bc32$export$2e2561858db9bf47(event) {
    event.stopImmediatePropagation();
}
function $5780c17aaf76bc32$export$2e2bcd8739ae039(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
}


// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function $c099cde2ce7989e8$var$defaultFilter(event) {
    return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}
function $c099cde2ce7989e8$var$defaultExtent() {
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
function $c099cde2ce7989e8$var$defaultTransform() {
    return this.__zoom || $1900536d9e0be36d$export$f0954fd7d5368655;
}
function $c099cde2ce7989e8$var$defaultWheelDelta(event) {
    return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}
function $c099cde2ce7989e8$var$defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
function $c099cde2ce7989e8$var$defaultConstrain(transform, extent, translateExtent) {
    var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
    return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}
function $c099cde2ce7989e8$export$2e2bcd8739ae039() {
    var filter = $c099cde2ce7989e8$var$defaultFilter, extent1 = $c099cde2ce7989e8$var$defaultExtent, constrain = $c099cde2ce7989e8$var$defaultConstrain, wheelDelta = $c099cde2ce7989e8$var$defaultWheelDelta, touchable = $c099cde2ce7989e8$var$defaultTouchable, scaleExtent = [
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
    ], duration = 250, interpolate = $098bcf577e495df4$export$2e2bcd8739ae039, listeners = $4fd0bf7be9e8926c$export$2e2bcd8739ae039("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
    function zoom(selection) {
        selection.property("__zoom", $c099cde2ce7989e8$var$defaultTransform).on("wheel.zoom", wheeled, {
            passive: false
        }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    zoom.transform = function(collection, transform, point, event) {
        var selection = collection.selection ? collection.selection() : collection;
        selection.property("__zoom", $c099cde2ce7989e8$var$defaultTransform);
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
            return constrain($1900536d9e0be36d$export$f0954fd7d5368655.translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
        }, p, event);
    };
    function scale(transform, k) {
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
        return k === transform.k ? transform : new $1900536d9e0be36d$export$563a914cafbdc389(k, transform.x, transform.y);
    }
    function translate(transform, p0, p1) {
        var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
        return x === transform.x && y === transform.y ? transform : new $1900536d9e0be36d$export$563a914cafbdc389(transform.k, x, y);
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
                    t = new $1900536d9e0be36d$export$563a914cafbdc389(k, p[0] - l[0] * k, p[1] - l[1] * k);
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
        event: function(event) {
            if (event) this.sourceEvent = event;
            return this;
        },
        start: function() {
            if (++this.active === 1) {
                this.that.__zooming = this;
                this.emit("start");
            }
            return this;
        },
        zoom: function(key, transform) {
            if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
            if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
            if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
            this.that.__zoom = transform;
            this.emit("zoom");
            return this;
        },
        end: function() {
            if (--this.active === 0) {
                delete this.that.__zooming;
                this.emit("end");
            }
            return this;
        },
        emit: function(type) {
            var d = $18bb9e31cc8bbb2e$export$2e2bcd8739ae039(this.that).datum();
            listeners.call(type, this.that, new $6d397e41bb30a3d5$export$2e2bcd8739ae039(type, {
                sourceEvent: this.sourceEvent,
                target: zoom,
                type: type,
                transform: this.that.__zoom,
                dispatch: listeners
            }), d);
        }
    };
    function wheeled(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = $2b9ddb34f6877c3b$export$2e2bcd8739ae039(event);
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
            $0254d51c26bb1c84$export$2e2bcd8739ae039(this);
            g.start();
        }
        $5780c17aaf76bc32$export$2e2bcd8739ae039(event);
        g.wheel = setTimeout(wheelidled, wheelDelay);
        g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
        function wheelidled() {
            g.wheel = null;
            g.end();
        }
    }
    function mousedowned(event1, ...args) {
        if (touchending || !filter.apply(this, arguments)) return;
        var currentTarget = event1.currentTarget, g = gesture(this, args, true).event(event1), v = $18bb9e31cc8bbb2e$export$2e2bcd8739ae039(event1.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = $2b9ddb34f6877c3b$export$2e2bcd8739ae039(event1, currentTarget), x0 = event1.clientX, y0 = event1.clientY;
        $f214033b98236463$export$2e2bcd8739ae039(event1.view);
        $5780c17aaf76bc32$export$2e2561858db9bf47(event1);
        g.mouse = [
            p,
            this.__zoom.invert(p)
        ];
        $0254d51c26bb1c84$export$2e2bcd8739ae039(this);
        g.start();
        function mousemoved(event) {
            $5780c17aaf76bc32$export$2e2bcd8739ae039(event);
            if (!g.moved) {
                var dx = event.clientX - x0, dy = event.clientY - y0;
                g.moved = dx * dx + dy * dy > clickDistance2;
            }
            g.event(event).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = $2b9ddb34f6877c3b$export$2e2bcd8739ae039(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
        }
        function mouseupped(event) {
            v.on("mousemove.zoom mouseup.zoom", null);
            $f214033b98236463$export$833237748009e1e1(event.view, g.moved);
            $5780c17aaf76bc32$export$2e2bcd8739ae039(event);
            g.event(event).end();
        }
    }
    function dblclicked(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var t0 = this.__zoom, p0 = $2b9ddb34f6877c3b$export$2e2bcd8739ae039(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent1.apply(this, args), translateExtent);
        $5780c17aaf76bc32$export$2e2bcd8739ae039(event);
        if (duration > 0) $18bb9e31cc8bbb2e$export$2e2bcd8739ae039(this).transition().duration(duration).call(schedule, t1, p0, event);
        else $18bb9e31cc8bbb2e$export$2e2bcd8739ae039(this).call(zoom.transform, t1, p0, event);
    }
    function touchstarted(event, ...args) {
        if (!filter.apply(this, arguments)) return;
        var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
        $5780c17aaf76bc32$export$2e2561858db9bf47(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = $2b9ddb34f6877c3b$export$2e2bcd8739ae039(t, this);
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
            $0254d51c26bb1c84$export$2e2bcd8739ae039(this);
            g.start();
        }
    }
    function touchmoved(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
        $5780c17aaf76bc32$export$2e2bcd8739ae039(event);
        for(i = 0; i < n; ++i){
            t = touches[i], p = $2b9ddb34f6877c3b$export$2e2bcd8739ae039(t, this);
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
    function touchended(event, ...args) {
        if (!this.__zooming) return;
        var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
        $5780c17aaf76bc32$export$2e2561858db9bf47(event);
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
                t = $2b9ddb34f6877c3b$export$2e2bcd8739ae039(t, this);
                if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
                    var p = $18bb9e31cc8bbb2e$export$2e2bcd8739ae039(this).on("dblclick.zoom");
                    if (p) p.apply(this, arguments);
                }
            }
        }
    }
    zoom.wheelDelta = function(_) {
        return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : $44fc8bafa20524d2$export$2e2bcd8739ae039(+_), zoom) : wheelDelta;
    };
    zoom.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : $44fc8bafa20524d2$export$2e2bcd8739ae039(!!_), zoom) : filter;
    };
    zoom.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : $44fc8bafa20524d2$export$2e2bcd8739ae039(!!_), zoom) : touchable;
    };
    zoom.extent = function(_) {
        return arguments.length ? (extent1 = typeof _ === "function" ? _ : $44fc8bafa20524d2$export$2e2bcd8739ae039([
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







var $532a8d62eaebee64$exports = {};
$532a8d62eaebee64$exports = JSON.parse("[{\"title\":\"Click to see a cat!\",\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.W4pl1wabhniHjlCrQHDn3gHaMJ%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a cat!\",\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.W4pl1wabhniHjlCrQHDn3gHaMJ%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a cat!\",\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.W4pl1wabhniHjlCrQHDn3gHaMJ%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a cat!\",\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.W4pl1wabhniHjlCrQHDn3gHaMJ%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"},{\"title\":\"Click to see a dog!\",\"src\":\"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DBB5qYtSyaqgwTFXpqBWrwHaE8%26pid%3DApi&f=1\"}]");


var $770e8e62e1aede75$exports = {};
$770e8e62e1aede75$exports = JSON.parse("{\"1\":[\"rgb(42, 117, 112)\",\"rgb(0, 133, 122)\",\"rgb(55, 171, 161)\",\"rgb(42, 117, 112)\",\"rgb(0, 133, 122)\",\"rgb(55, 171, 161)\",\"rgb(42, 117, 112)\",\"rgb(0, 133, 122)\",\"rgb(55, 171, 161)\"],\"2\":[\"rgb(90, 184, 242)\",\"rgb(137, 211, 245)\",\"rgb(185, 230, 250)\",\"rgb(90, 184, 242)\",\"rgb(137, 211, 245)\",\"rgb(185, 230, 250)\",\"rgb(90, 184, 242)\",\"rgb(137, 211, 245)\",\"rgb(185, 230, 250)\"],\"3\":[\"rgb(134, 209, 205)\",\"rgb(173, 224, 223)\",\"rgb(216, 240, 239)\",\"rgb(134, 209, 205)\",\"rgb(173, 224, 223)\",\"rgb(216, 240, 239)\",\"rgb(134, 209, 205)\",\"rgb(173, 224, 223)\",\"rgb(216, 240, 239)\"],\"4\":[\"rgb(137, 211, 245)\",\"rgb(90, 184, 242)\",\"rgb(45, 151, 237)\",\"rgb(137, 211, 245)\",\"rgb(90, 184, 242)\",\"rgb(45, 151, 237)\",\"rgb(137, 211, 245)\",\"rgb(90, 184, 242)\",\"rgb(45, 151, 237)\"]}");


let $f50818871ed9d009$var$svg;
let $f50818871ed9d009$var$t = 0;
let $f50818871ed9d009$var$imageLeft;
let $f50818871ed9d009$var$imageRight;
let $f50818871ed9d009$var$group1;
let $f50818871ed9d009$var$group2;
let $f50818871ed9d009$var$group3;
let $f50818871ed9d009$var$group4;
const $f50818871ed9d009$var$arcEase = (t)=>$237bf0d19747a4d0$export$ed1782b99e69bbc8.amplitude(2).period(0.3)(t)
;
const $f50818871ed9d009$var$urlSearchParams = new URLSearchParams(window.location.search);
const $f50818871ed9d009$var$params = Object.fromEntries($f50818871ed9d009$var$urlSearchParams.entries());
const $f50818871ed9d009$var$config = {
    canvas: {
        width: 800,
        height: 600
    },
    size: +$f50818871ed9d009$var$params.size || 6,
    outerRadius: +$f50818871ed9d009$var$params.radius || 150,
    arcWidth: +$f50818871ed9d009$var$params.width || 20,
    arcTransitionDelay: 100,
    arcTweenTransitionDuration: 2000,
    colors: (/*@__PURE__*/$parcel$interopDefault($770e8e62e1aede75$exports))
};
function $f50818871ed9d009$var$main() {
    $f50818871ed9d009$var$svg = $18bb9e31cc8bbb2e$export$2e2bcd8739ae039('svg');
    $f50818871ed9d009$var$appendImagePlaceholders();
    $f50818871ed9d009$var$initMainGroup();
    const arr = Array.from({
        length: $f50818871ed9d009$var$config.size / 2
    });
    arr.fill({
        half: 1,
        element: $f50818871ed9d009$var$group1
    }).forEach($f50818871ed9d009$var$appendArc);
    arr.fill({
        half: 2,
        element: $f50818871ed9d009$var$group2
    }).forEach($f50818871ed9d009$var$appendArc);
    arr.fill({
        half: 3,
        element: $f50818871ed9d009$var$group3
    }).forEach($f50818871ed9d009$var$appendArc);
    arr.fill({
        half: 4,
        element: $f50818871ed9d009$var$group4
    }).forEach($f50818871ed9d009$var$appendArc);
    $f50818871ed9d009$var$animateGroups();
}
function $f50818871ed9d009$var$appendImagePlaceholders() {
    const imageSize = $f50818871ed9d009$var$config.outerRadius - $f50818871ed9d009$var$config.arcWidth;
    const wrapper = $f50818871ed9d009$var$svg === null || $f50818871ed9d009$var$svg === void 0 ? void 0 : $f50818871ed9d009$var$svg.append('g').classed('images', true).attr('width', $f50818871ed9d009$var$config.canvas.width).attr('height', $f50818871ed9d009$var$config.canvas.height).attr('transform', `translate(${$f50818871ed9d009$var$config.canvas.width / 2}, ${$f50818871ed9d009$var$config.canvas.height / 2})`);
    $f50818871ed9d009$var$imageLeft = wrapper === null || wrapper === void 0 ? void 0 : wrapper.append('image').classed('image-left', true).attr('width', imageSize).attr('height', imageSize).attr('transform', `translate(${-($f50818871ed9d009$var$config.outerRadius + imageSize / 2) + $f50818871ed9d009$var$config.arcWidth / 2}, ${-imageSize / 2})`);
    $f50818871ed9d009$var$imageRight = wrapper === null || wrapper === void 0 ? void 0 : wrapper.append('image').classed('image-right', true).attr('width', imageSize).attr('height', imageSize).attr('transform', `translate(${imageSize / 2 + $f50818871ed9d009$var$config.arcWidth / 2}, ${-imageSize / 2})`);
}
function $f50818871ed9d009$var$initMainGroup() {
    const wrapper = $f50818871ed9d009$var$svg === null || $f50818871ed9d009$var$svg === void 0 ? void 0 : $f50818871ed9d009$var$svg.append('g').classed('wrapper', true).attr('width', $f50818871ed9d009$var$config.canvas.width).attr('height', $f50818871ed9d009$var$config.canvas.height).attr('transform', `translate(${$f50818871ed9d009$var$config.canvas.width / 2}, ${$f50818871ed9d009$var$config.canvas.height / 2})`);
    const translateX = $f50818871ed9d009$var$config.outerRadius - $f50818871ed9d009$var$config.arcWidth / 2;
    $f50818871ed9d009$var$group1 = wrapper === null || wrapper === void 0 ? void 0 : wrapper.append('g').classed('group1', true).attr('transform', `translate(${translateX}, 0)`);
    $f50818871ed9d009$var$group2 = wrapper === null || wrapper === void 0 ? void 0 : wrapper.append('g').classed('group2', true).attr('transform', `translate(-${translateX}, 0)`);
    $f50818871ed9d009$var$group4 = wrapper === null || wrapper === void 0 ? void 0 : wrapper.append('g').classed('group4', true).attr('transform', `translate(-${translateX}, 0)`);
    $f50818871ed9d009$var$group3 = wrapper === null || wrapper === void 0 ? void 0 : wrapper.append('g').classed('group3', true).attr('transform', `translate(${translateX}, 0)`);
}
function $f50818871ed9d009$var$appendArc(values, index) {
    var ref;
    const { half: half , element: element  } = values;
    const div = Math.PI * 2 / $f50818871ed9d009$var$config.size;
    const startAngle = index === 0 ? 0 : index * div;
    const endAngle = (index + 1) * div;
    const angleOffset = half < 3 ? -($f50818871ed9d009$var$config.size / 2) * (div / 2) : $f50818871ed9d009$var$config.size / 2 * (div / 2);
    const innerRadius = $f50818871ed9d009$var$config.outerRadius - $f50818871ed9d009$var$config.arcWidth;
    const arcShape = $e6384621fd8bb5cf$export$2e2bcd8739ae039().innerRadius(innerRadius).outerRadius($f50818871ed9d009$var$config.outerRadius).startAngle(startAngle + angleOffset).endAngle(endAngle + angleOffset);
    const path = element === null || element === void 0 ? void 0 : element.append('path').classed('arc', true).attr('d', arcShape).attr('data-json', `${JSON.stringify((/*@__PURE__*/$parcel$interopDefault($532a8d62eaebee64$exports))[$f50818871ed9d009$var$t] || {})}`).attr('data-sa', `${startAngle + angleOffset}`).attr('data-ea', `${endAngle + angleOffset}`).attr('fill', $f50818871ed9d009$var$config.colors[half][index]).style('opacity', 0).style('transform', 'scale(1.2)').on('click', function() {
        const isActive = $18bb9e31cc8bbb2e$export$2e2bcd8739ae039(this).classed('active');
        const _innerRadius = (isActive ? 0 : 20) + innerRadius;
        const _outerRadius = (isActive ? 0 : 20) + $f50818871ed9d009$var$config.outerRadius;
        const _startAngle = startAngle + (!isActive ? angleOffset + 0.05 : angleOffset);
        const _endAngle = endAngle + (!isActive ? angleOffset - 0.05 : angleOffset);
        const data = JSON.parse($18bb9e31cc8bbb2e$export$2e2bcd8739ae039(this).attr('data-json') || "");
        $f50818871ed9d009$var$resetArcs();
        $18bb9e31cc8bbb2e$export$2e2bcd8739ae039(this).classed('active', !isActive).transition().ease($f50818871ed9d009$var$arcEase).duration($f50818871ed9d009$var$config.arcTweenTransitionDuration).attr('d', $e6384621fd8bb5cf$export$2e2bcd8739ae039().innerRadius(_innerRadius).outerRadius(_outerRadius).startAngle(_startAngle).endAngle(_endAngle));
        $f50818871ed9d009$var$imageLeft === null || $f50818871ed9d009$var$imageLeft === void 0 ? void 0 : $f50818871ed9d009$var$imageLeft.attr('href', null);
        $f50818871ed9d009$var$imageRight === null || $f50818871ed9d009$var$imageRight === void 0 ? void 0 : $f50818871ed9d009$var$imageRight.attr('href', null);
        if (data === null || data === void 0 ? void 0 : data.src) {
            if (half === 3 || half === 1) $f50818871ed9d009$var$imageRight === null || $f50818871ed9d009$var$imageRight === void 0 ? void 0 : $f50818871ed9d009$var$imageRight.attr('href', data.src);
            else $f50818871ed9d009$var$imageLeft === null || $f50818871ed9d009$var$imageLeft === void 0 ? void 0 : $f50818871ed9d009$var$imageLeft.attr('href', data.src);
        }
    });
    path === null || path === void 0 ? void 0 : path.append('title').text(((ref = (/*@__PURE__*/$parcel$interopDefault($532a8d62eaebee64$exports))[$f50818871ed9d009$var$t++]) === null || ref === void 0 ? void 0 : ref.title) || '');
}
function $f50818871ed9d009$var$resetArcs() {
    $f50818871ed9d009$var$svg === null || $f50818871ed9d009$var$svg === void 0 ? void 0 : $f50818871ed9d009$var$svg.selectAll('.arc').classed('active', false).each(function() {
        const _startAngle = +$18bb9e31cc8bbb2e$export$2e2bcd8739ae039(this).attr('data-sa');
        const _endAngle = +$18bb9e31cc8bbb2e$export$2e2bcd8739ae039(this).attr('data-ea');
        $18bb9e31cc8bbb2e$export$2e2bcd8739ae039(this).classed('active', false).transition().ease($f50818871ed9d009$var$arcEase).duration($f50818871ed9d009$var$config.arcTweenTransitionDuration).attr('d', $e6384621fd8bb5cf$export$2e2bcd8739ae039().innerRadius($f50818871ed9d009$var$config.outerRadius - $f50818871ed9d009$var$config.arcWidth).outerRadius($f50818871ed9d009$var$config.outerRadius).startAngle(_startAngle).endAngle(_endAngle));
    });
}
function $f50818871ed9d009$var$animateGroups() {
    [
        4,
        2,
        3,
        1
    ].forEach((half, index)=>{
        $f50818871ed9d009$var$svg === null || $f50818871ed9d009$var$svg === void 0 ? void 0 : $f50818871ed9d009$var$svg.selectAll('.group' + half).each(function() {
            const arcs = $18bb9e31cc8bbb2e$export$2e2bcd8739ae039(this).selectAll('.arc').each(function(_, i, all) {
                $18bb9e31cc8bbb2e$export$2e2bcd8739ae039(this).transition().duration($f50818871ed9d009$var$config.arcTransitionDelay * 2).delay(index * (all.length * $f50818871ed9d009$var$config.arcTransitionDelay) + (half === 3 || half == 1 ? i = all.length - 1 - i : i) * $f50818871ed9d009$var$config.arcTransitionDelay).style('opacity', 1).style('transform', 'scale(1)');
            });
        });
    });
}
$f50818871ed9d009$var$main();


//# sourceMappingURL=index.7e1d403b.js.map
