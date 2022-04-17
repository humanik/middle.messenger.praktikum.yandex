// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6IXwR":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _chat = require("pages/chat");
var _chatDefault = parcelHelpers.interopDefault(_chat);
var _home = require("pages/home");
var _homeDefault = parcelHelpers.interopDefault(_home);
var _login = require("pages/login");
var _loginDefault = parcelHelpers.interopDefault(_login);
var _notFound = require("pages/not-found");
var _notFoundDefault = parcelHelpers.interopDefault(_notFound);
var _profile = require("pages/profile");
var _profileDefault = parcelHelpers.interopDefault(_profile);
var _registration = require("pages/registration");
var _registrationDefault = parcelHelpers.interopDefault(_registration);
var _serverError = require("pages/server-error");
var _serverErrorDefault = parcelHelpers.interopDefault(_serverError);
const historyOverride = function(type) {
    const origFunction = history[type];
    return function(...args) {
        const result = origFunction.call(this, ...args);
        const event = new Event(type);
        event.arguments = args;
        window.dispatchEvent(event);
        return result;
    };
};
history.pushState = historyOverride('pushState');
history.replaceState = historyOverride('replaceState');
function loadRouteCountent() {
    let page = _notFoundDefault.default;
    const root = document.querySelector('#root');
    switch(location.pathname){
        case '/':
            page = _homeDefault.default;
            break;
        case '/chat':
            page = _chatDefault.default;
            break;
        case '/profile':
            page = _profileDefault.default;
            break;
        case '/login':
            page = _loginDefault.default;
            break;
        case '/registration':
            page = _registrationDefault.default;
            break;
        case '/404':
            page = _notFoundDefault.default;
            break;
        case '/500':
            page = _serverErrorDefault.default;
            break;
    }
    if (root) root.innerHTML = page();
}
document.addEventListener('DOMContentLoaded', loadRouteCountent);
window.addEventListener('popstate', loadRouteCountent);
window.addEventListener('pushState', loadRouteCountent);
window.addEventListener('replaceState', loadRouteCountent);

},{"pages/chat":"8lCTh","pages/home":"c9xh7","pages/login":"c2fcE","pages/not-found":"vgq7U","pages/profile":"4IIKc","pages/registration":"gRGz0","pages/server-error":"edigD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8lCTh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _chat = require("components/Chat/Chat");
var _chatDefault = parcelHelpers.interopDefault(_chat);
function ChatPage() {
    return _chatDefault.default();
}
exports.default = ChatPage;

},{"components/Chat/Chat":"2JYQB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2JYQB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _template = require("template");
var _chatScss = require("./Chat.scss");
var _chatContent = require("./ChatContent");
var _chatContentDefault = parcelHelpers.interopDefault(_chatContent);
var _chatFooter = require("./ChatFooter");
var _chatFooterDefault = parcelHelpers.interopDefault(_chatFooter);
var _chatHeader = require("./ChatHeader");
var _chatHeaderDefault = parcelHelpers.interopDefault(_chatHeader);
var _sidebar = require("./Sidebar/Sidebar");
var _sidebarDefault = parcelHelpers.interopDefault(_sidebar);
function Chat(props = {}) {
    return _template.html`
<div class="chat">
  <main class="chat-window">
    ${_chatHeaderDefault.default({
        name: 'Ivan'
    })}
    ${_chatContentDefault.default}
    ${_chatFooterDefault.default}
  </main>
  ${_sidebarDefault.default}
</div>`;
}
exports.default = Chat;

},{"template":"iBEJI","./Chat.scss":"9GBG2","./ChatContent":"2z0Tu","./ChatFooter":"1HbMA","./ChatHeader":"jDhqw","./Sidebar/Sidebar":"gKcfx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iBEJI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "html", ()=>html
);
parcelHelpers.export(exports, "attributes", ()=>attributes
);
parcelHelpers.export(exports, "classes", ()=>classes
);
parcelHelpers.export(exports, "uniqID", ()=>uniqID
);
parcelHelpers.export(exports, "escape", ()=>escape
);
parcelHelpers.export(exports, "createNode", ()=>createNode
);
const domParser = new DOMParser();
const callbacks = new Map();
const callbackNames = new Map();
Object.defineProperty(window, 'callFunction', {
    value (name, ...args) {
        const fn = callbackNames.get(name);
        fn(...args);
    }
});
function html(strings, ...values) {
    return strings.reduce((result, value, i)=>{
        let replacement = values[i] || '';
        if (Array.isArray(replacement)) replacement = replacement.join('\n');
        else if (typeof replacement === 'function') replacement = replacement();
        else if (typeof replacement === 'object') replacement = attributes(replacement);
        result += value;
        result += replacement;
        return result;
    }, '');
}
const attributes = (attributes1)=>{
    const parts = [];
    if ('class' in attributes1) delete attributes1.class // Use className instead.
    ;
    for (const [key, value] of Object.entries(attributes1)){
        if (key === 'className') {
            if (Array.isArray(value)) parts.push(`class="${classes(...value)}"`);
            else parts.push(`class="${classes(value)}"`);
        } else if (typeof value === 'string') parts.push(`${escape(key)}="${escape(value)}"`);
        else if (typeof value === 'function') parts.push(`${escape(key)}="callFunction('${getCallbackID(value)}', event)"`);
        else if (typeof value === 'number') parts.push(`${escape(key)}="${value}"`);
    }
    return parts.join(' ');
};
const classes = (...names)=>{
    const classNames = new Set();
    for (const name1 of names){
        if (typeof name1 === 'string' || name1 instanceof String) classNames.add(name1);
        else if (Array.isArray(name1)) name1.forEach((name)=>classNames.add(name)
        );
        else if (typeof name1 === 'object') {
            for (const [key, value] of Object.entries(name1))if (value) classNames.add(key);
        }
    }
    return Array.from(classNames).filter(Boolean).map(escape).join(' ');
};
const uniqID = (length = 8)=>{
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for(let i = 0; i < length; i += 1){
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }
    return result;
};
const getCallbackID = (fn)=>{
    if (callbacks.has(fn)) return callbacks.get(fn);
    const name = uniqID();
    callbacks.set(fn, name);
    callbackNames.set(name, fn);
    return name;
};
const escape = (string)=>{
    const htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    };
    const reUnescapedHtml = /[&<>"']/g;
    const reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, (chr)=>htmlEscapes[chr]
    ) : string || '';
};
function createNode(html1) {
    return domParser.parseFromString(html1, 'text/html').body.firstChild;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9GBG2":[function() {},{}],"2z0Tu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _template = require("template");
var _chatContentScss = require("./ChatContent.scss");
var _chatMessage = require("./ChatMessage");
var _chatMessageDefault = parcelHelpers.interopDefault(_chatMessage);
const messages = [
    {
        text: 'Спасибо!',
        time: '12:10'
    },
    {
        text: 'Круто!',
        time: '12:07',
        type: 'text',
        send: 'out'
    },
    {
        text: 'Добрый день!',
        time: '10:50'
    },
    {
        text: _template.html`<img src="https://m.media-amazon.com/images/I/61HRnUdvv6L._AC_SY355_.jpg" />`,
        type: 'image',
        time: '10:50'
    },
    {
        text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n\nХассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали',
        time: '10:49'
    },
    {
        text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n\nХассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
        time: '10:49'
    },
    {
        text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n\nХассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
        time: '10:49'
    }
];
function ChatFooter(props = {}) {
    return _template.html`
<div class="chat-content">
  ${messages.map(_chatMessageDefault.default)}
</div>`;
}
exports.default = ChatFooter;

},{"template":"iBEJI","./ChatContent.scss":"1cB00","./ChatMessage":"lWm1O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1cB00":[function() {},{}],"lWm1O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _template = require("template");
var _chatMessageScss = require("./ChatMessage.scss");
function ChatMessage({ className , send , type , ...props } = {}) {
    const attr = {
        className: [
            'chat-message',
            className,
            {
                'chat-message--in': send !== 'out',
                'chat-message--out': send === 'out',
                'chat-message--img': type === 'image'
            }
        ],
        ...props
    };
    return _template.html`
<div ${attr}>
  <div class="chat-message__content">${props.text.trim()}</div>
  <div class="chat-message__time">${props.time}</div>
</div>`;
}
exports.default = ChatMessage;

},{"template":"iBEJI","./ChatMessage.scss":"bgob8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bgob8":[function() {},{}],"1HbMA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _template = require("template");
var _chatFooterScss = require("./ChatFooter.scss");
var _chatForm = require("./ChatForm");
var _chatFormDefault = parcelHelpers.interopDefault(_chatForm);
function ChatFooter(props = {}) {
    return _template.html`
<footer class="chat-footer">
  ${_chatFormDefault.default}
</footer>`;
}
exports.default = ChatFooter;

},{"template":"iBEJI","./ChatFooter.scss":"39Rmu","./ChatForm":"hss39","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"39Rmu":[function() {},{}],"hss39":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _button = require("components/Button/Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _buttonGroup = require("components/Button/ButtonGroup");
var _buttonGroupDefault = parcelHelpers.interopDefault(_buttonGroup);
var _iconButton = require("components/Button/IconButton");
var _iconButtonDefault = parcelHelpers.interopDefault(_iconButton);
var _icon = require("components/Icon");
var _popover = require("components/Popover/Popover");
var _popoverDefault = parcelHelpers.interopDefault(_popover);
var _template = require("template");
var _chatFooterScss = require("./ChatFooter.scss");
var _chatFormScss = require("./ChatForm.scss");
var _chatInput = require("./ChatInput");
var _chatInputDefault = parcelHelpers.interopDefault(_chatInput);
var _chatMessage = require("./ChatMessage");
var _chatMessageDefault = parcelHelpers.interopDefault(_chatMessage);
const submitHandler = (e)=>{
    e.preventDefault();
    const now = new Date();
    const input = document.querySelector('#chat-input');
    const chatContent = document.querySelector('.chat-content');
    const text = input.value.trim();
    if (text.length > 0) {
        const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        const message = _chatMessageDefault.default({
            send: 'out',
            text,
            time
        });
        chatContent.prepend(_template.createNode(message));
    }
    input.value = '';
};
function ChatForm(props = {}) {
    return _template.html`
<form ${{
        className: 'chat-form',
        onsubmit: submitHandler
    }}>
  ${_popoverDefault.default({
        position: 'top-left',
        trigger: _iconButtonDefault.default({
            icon: _icon.AttachmentIcon,
            className: 'p-1',
            size: 'big',
            onclick: _popover.togglePopover
        }),
        content: AttachmentMenu
    })}
  ${_chatInputDefault.default({
        id: 'chat-input',
        placeholder: 'Сообщение'
    })}
  ${SubmitButton}
</form>`;
}
exports.default = ChatForm;
const SubmitButton = function(props = {}) {
    return _buttonDefault.default({
        label: _icon.ArrowIcon,
        className: 'chat-form__submit',
        type: 'submit'
    });
};
const AttachmentMenu = (second)=>{
    const items = [
        {
            icon: _icon.MediaIcon,
            text: 'Фото и видео'
        },
        {
            icon: _icon.FileIcon,
            text: 'Файл'
        },
        {
            icon: _icon.LocationIcon,
            text: 'Локация'
        }
    ];
    return _buttonGroupDefault.default({
        items
    });
};

},{"components/Button/Button":"bxC6O","components/Button/ButtonGroup":"eaLDL","components/Button/IconButton":"13Huo","components/Icon":"JmJkt","components/Popover/Popover":"eqAHK","template":"iBEJI","./ChatFooter.scss":"39Rmu","./ChatForm.scss":"jIh5C","./ChatInput":"ksd9j","./ChatMessage":"lWm1O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bxC6O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _template = require("template");
var _buttonScss = require("./Button.scss");
function Button({ variant ='primary' , label , size , className , ...props } = {}) {
    const attr = {
        className: [
            'btn',
            className,
            {
                'btn-primary': variant === 'primary',
                'btn-xs': size === 'small'
            }
        ],
        ...props
    };
    return _template.html`<button ${attr}>${label}</button>`;
}
exports.default = Button;

},{"template":"iBEJI","./Button.scss":"e28vm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e28vm":[function() {},{}],"eaLDL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _template = require("template");
var _buttonGroupScss = require("./ButtonGroup.scss");
function ButtonGroup({ children , className , items =[]  } = {}) {
    children = children || items.map(GroupItem);
    return _template.html`<div ${{
        className: [
            'btn-group',
            className
        ]
    }}>${children}</div>`;
}
exports.default = ButtonGroup;
const GroupItem = ({ icon , text , ...props })=>{
    const attr = {
        className: 'btn-group-item',
        ...props
    };
    return _template.html`
<button ${attr}>
  ${icon && icon({
        className: 'btn-group-item__icon'
    })}
  <span>${text}</span>
</button>`;
};

},{"template":"iBEJI","./ButtonGroup.scss":"hIyVg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hIyVg":[function() {},{}],"13Huo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _template = require("template");
var _buttonScss = require("./Button.scss");
function IconButton({ icon , size , type , className , ...props } = {}) {
    const attr = {
        className: [
            'btn btn-icon',
            className,
            {
                'btn-icon-xl': size === 'big'
            }
        ],
        ...props
    };
    return _template.html`<button ${attr}>${icon}</button>`;
}
exports.default = IconButton;

},{"template":"iBEJI","./Button.scss":"e28vm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e28vm":[function() {},{}],"JmJkt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttachmentIcon", ()=>AttachmentIcon
);
parcelHelpers.export(exports, "ArrowIcon", ()=>ArrowIcon
);
parcelHelpers.export(exports, "PlusIcon", ()=>PlusIcon
);
parcelHelpers.export(exports, "DeleteIcon", ()=>DeleteIcon
);
parcelHelpers.export(exports, "LocationIcon", ()=>LocationIcon
);
parcelHelpers.export(exports, "FileIcon", ()=>FileIcon
);
parcelHelpers.export(exports, "MediaIcon", ()=>MediaIcon
);
parcelHelpers.export(exports, "MenuIcon", ()=>MenuIcon
);
var _template = require("template");
const AttachmentIcon = ({ width =32 , ...props } = {})=>_template.html`
<svg ${{
        width,
        ...props
    }} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.18662 13.5L14.7628 5.92389L15.7056 6.8667L8.12943 14.4428L7.18662 13.5Z" fill="#999999" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70067 16.0141L17.2768 8.43793L18.2196 9.38074L10.6435 16.9569L9.70067 16.0141Z" fill="#999999" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0433 21.3567L22.6195 13.7806L23.5623 14.7234L15.9861 22.2995L15.0433 21.3567Z" fill="#999999" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8708L25.1335 16.2946L26.0763 17.2374L18.5002 24.8136L17.5574 23.8708Z" fill="#999999" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8709C14.9423 26.486 10.7118 26.4954 8.10831 23.8919C5.50482 21.2884 5.51424 17.0579 8.12936 14.4428L7.18655 13.5C4.0484 16.6381 4.0371 21.7148 7.16129 24.839C10.2855 27.9632 15.3621 27.9518 18.5003 24.8137L17.5574 23.8709Z" fill="#999999" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6195 13.7806L23.5623 14.7234C26.003 12.2826 26.0118 8.3341 23.5819 5.90417C21.152 3.47424 17.2035 3.48303 14.7627 5.92381L15.7055 6.86662C17.6233 4.94887 20.7257 4.94196 22.6349 6.85119C24.5441 8.76042 24.5372 11.8628 22.6195 13.7806Z" fill="#999999" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70092 16.0144C7.95751 17.7578 7.95123 20.5782 9.68689 22.3138C11.4226 24.0495 14.2429 24.0432 15.9863 22.2998L15.0435 21.357C13.8231 22.5774 11.8489 22.5818 10.6339 21.3668C9.41894 20.1518 9.42334 18.1776 10.6437 16.9572L9.70092 16.0144Z" fill="#999999" />
</svg>`
;
const ArrowIcon = ({ width =16 , ...props } = {})=>_template.html`
<svg ${{
        width,
        ...props
    }} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect y="5.19995" width="11" height="1.6" fill="white"/>
  <path d="M7 1L11 6L7 11" stroke="white" stroke-width="1.6"/>
</svg>`
;
const PlusIcon = (props = {})=>_template.html`
<svg ${props} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="11" cy="11" r="10.25" stroke="#3369F3" stroke-width="1.5"/>
  <line x1="10.9999" y1="5.5" x2="10.9999" y2="16.5" stroke="#3369F3" stroke-width="1.5"/>
  <line x1="5.49988" y1="11" x2="16.4999" y2="11" stroke="#3369F3" stroke-width="1.5"/>
</svg>`
;
const DeleteIcon = (props = {})=>_template.html`
<svg ${props} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="11" cy="11" r="10.25" stroke="#3369F3" stroke-width="1.5"/>
  <line x1="7.11077" y1="7.11103" x2="14.8889" y2="14.8892" stroke="#3369F3" stroke-width="1.5"/>
  <line x1="7.11078" y1="14.8891" x2="14.889" y2="7.11093" stroke="#3369F3" stroke-width="1.5"/>
</svg>`
;
const LocationIcon = (props = {})=>_template.html`
<svg ${props} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 11C20.5 16.2467 16.2467 20.5 11 20.5C5.75329 20.5 1.5 16.2467 1.5 11C1.5 5.75329 5.75329 1.5 11 1.5C16.2467 1.5 20.5 5.75329 20.5 11ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z" fill="#3369F3"/>
</svg>`
;
const FileIcon = (props = {})=>_template.html`
<svg ${props} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.5H18C19.3807 1.5 20.5 2.61929 20.5 4V12H16C13.7909 12 12 13.7909 12 16V20.5H4C2.61929 20.5 1.5 19.3807 1.5 18V4C1.5 2.61929 2.61929 1.5 4 1.5ZM12 22H4C1.79086 22 0 20.2091 0 18V4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V12V18C22 20.2091 20.2091 22 18 22H12Z" fill="#3369F3"/>
</svg>`
;
const MediaIcon = (props = {})=>_template.html`
<svg ${props} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.5H18C19.3807 1.5 20.5 2.61929 20.5 4V14L14.5194 12.4052C13.5108 12.1362 12.4714 12 11.4275 12H10.5725C9.52864 12 8.48921 12.1362 7.48057 12.4052L1.5 14V4C1.5 2.61929 2.61929 1.5 4 1.5ZM0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V18C22 20.2091 20.2091 22 18 22H4C1.79086 22 0 20.2091 0 18V4ZM8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z" fill="#3369F3"/>
</svg>`
;
const MenuIcon = (props = {})=>_template.html`
<svg ${props} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8" cy="2" r="1.5" fill="#1E1E1E"/>
  <circle cx="8" cy="8" r="1.5" fill="#1E1E1E"/>
  <circle cx="8" cy="14" r="1.5" fill="#1E1E1E"/>
</svg>`
;

},{"template":"iBEJI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eqAHK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "togglePopover", ()=>togglePopover
);
var _template = require("template");
var _popoverScss = require("./Popover.scss");
document.addEventListener('keyup', function(e) {
    if (e.key === 'Escape') document.querySelectorAll('.popover').forEach((popover)=>{
        if (popover.hasAttribute('open')) popover.removeAttribute('open');
    });
});
function Popover({ position ='bottom-right' , className , content , trigger , ...props }) {
    const attr = {
        className: [
            'popover',
            className
        ],
        ...props,
        'data-position': position
    };
    return _template.html`
<div ${attr}>
  ${trigger}
  <div class="popover__content">${content}</div>
</div>`;
}
exports.default = Popover;
const togglePopover = (e)=>{
    const popover = e.target.closest('.popover');
    if (popover.hasAttribute('open')) popover.removeAttribute('open');
    else {
        popover.setAttribute('open', '');
        setTimeout(()=>{
            document.addEventListener('click', function() {
                popover.removeAttribute('open');
            }, {
                once: true
            });
        }, 0);
    }
};

},{"template":"iBEJI","./Popover.scss":"6wckK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6wckK":[function() {},{}],"39Rmu":[function() {},{}],"jIh5C":[function() {},{}],"ksd9j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _template = require("template");
const keydownHandler = (e)=>{
    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        e.target.form.dispatchEvent(new Event('submit', {
            cancelable: true
        }));
    }
};
function ChatInput({ children , ...props }) {
    const attributes = {
        rows: 1,
        className: 'chat-form__control',
        onkeydown: keydownHandler,
        ...props
    };
    return _template.html`<textarea ${attributes}>${children}</textarea>`;
}
exports.default = ChatInput;

},{"template":"iBEJI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jDhqw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _avatar = require("components/Avatar/Avatar");
var _avatarDefault = parcelHelpers.interopDefault(_avatar);
var _button = require("components/Button/Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _buttonGroup = require("components/Button/ButtonGroup");
var _buttonGroupDefault = parcelHelpers.interopDefault(_buttonGroup);
var _iconButton = require("components/Button/IconButton");
var _iconButtonDefault = parcelHelpers.interopDefault(_iconButton);
var _textField = require("components/Form/TextField");
var _textFieldDefault = parcelHelpers.interopDefault(_textField);
var _icon = require("components/Icon");
var _modal = require("components/Modal/Modal");
var _modalDefault = parcelHelpers.interopDefault(_modal);
var _popover = require("components/Popover/Popover");
var _popoverDefault = parcelHelpers.interopDefault(_popover);
var _template = require("template");
var _chatHeaderScss = require("./ChatHeader.scss");
function ChatHeader({ name  } = {}) {
    return _template.html`
<header class="chat-header">
  <div class="chat-header__info">
    ${_avatarDefault.default({
        size: 'small'
    })}
    <div class="chat-header__name">${name}</div>
    ${_popoverDefault.default({
        className: 'ml-auto',
        content: Menu,
        trigger: _iconButtonDefault.default({
            icon: _icon.MenuIcon,
            className: 'popover__trigger',
            onclick: _popover.togglePopover
        })
    })}
    ${AddUserModal}
    ${RemoveUserModal}
  </div>
</header>`;
}
exports.default = ChatHeader;
const AddUserModal = ()=>{
    const children = _template.html`
<div class="modal__title">Добавить пользователя</div>
<div class="modal__body">
  ${_textFieldDefault.default({
        label: 'Логин'
    })}
  ${_buttonDefault.default({
        label: 'Добавить',
        className: 'w-100 mt-8'
    })}
</div>`;
    return _modalDefault.default(children, {
        id: 'modal-add-user'
    });
};
const RemoveUserModal = ()=>{
    const children = _template.html`
<div class="modal__title">Удалить пользователя</div>
<div class="modal__body">
  ${_textFieldDefault.default({
        label: 'Логин'
    })}
  ${_buttonDefault.default({
        label: 'Удалить',
        className: 'w-100 mt-8'
    })}
</div>`;
    return _modalDefault.default(children, {
        id: 'modal-remove-user'
    });
};
const Menu = ()=>{
    const items = [
        {
            icon: _icon.PlusIcon,
            text: 'Добавить пользователя',
            onclick: openAddUserModal
        },
        {
            icon: _icon.DeleteIcon,
            text: 'Удалить пользователя',
            onclick: openRemoveUserModal
        }
    ];
    return _buttonGroupDefault.default({
        items
    });
};
const openAddUserModal = ()=>{
    const dialog = document.getElementById('modal-add-user');
    dialog.showModal();
};
const openRemoveUserModal = ()=>{
    const dialog = document.getElementById('modal-remove-user');
    dialog.showModal();
};

},{"components/Avatar/Avatar":"dki4o","components/Button/Button":"bxC6O","components/Button/ButtonGroup":"eaLDL","components/Button/IconButton":"13Huo","components/Form/TextField":"3RubV","components/Icon":"JmJkt","components/Modal/Modal":"biIyr","components/Popover/Popover":"eqAHK","template":"iBEJI","./ChatHeader.scss":"fqho1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dki4o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _template = require("template");
var _emptyAvatarSvg = require("images/empty-avatar.svg");
var _emptyAvatarSvgDefault = parcelHelpers.interopDefault(_emptyAvatarSvg);
var _avatarScss = require("./Avatar.scss");
function Avatar({ size , className , ...props } = {}) {
    const attr = {
        className: [
            'avatar',
            className,
            {
                'avatar-xl': size === 'big',
                'avatar-sm': size === 'small'
            }
        ],
        ...props
    };
    return _template.html`<div ${attr}><img ${{
        src: _emptyAvatarSvgDefault.default,
        className: 'avatar__img'
    }}/></div>`;
}
exports.default = Avatar;

},{"template":"iBEJI","images/empty-avatar.svg":"hsmPE","./Avatar.scss":"1BeCr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hsmPE":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('lPpKD') + "empty-avatar.25393f2d.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"1BeCr":[function() {},{}],"3RubV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _template = require("template");
var _textFieldScss = require("./TextField.scss");
function TextField({ id =_template.uniqID() , type ='text' , valid , invalid , label , className , feedback , ...props } = {}) {
    const mainClasses = [
        'form-field',
        className,
        {
            'form-field--valid': valid,
            'form-field--invalid': invalid
        }
    ];
    const attr = {
        id,
        type,
        className: 'form-field__control',
        placeholder: ' ',
        ...props
    };
    return _template.html`
<div ${{
        className: mainClasses
    }}>
  <input ${attr}/>
  ${Feedback({
        text: feedback
    })}
  <label for="${attr.id}" class="form-field__label">${label}</label>
</div>`;
}
exports.default = TextField;
function Feedback({ text  }) {
    if (!text) return;
    return _template.html`<span class="form-field__feedback">${text}</span>`;
}

},{"template":"iBEJI","./TextField.scss":"dArJZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dArJZ":[function() {},{}],"biIyr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showModal", ()=>showModal
);
parcelHelpers.export(exports, "closeModal", ()=>closeModal
);
var _template = require("template");
var _modalScss = require("./Modal.scss");
function Modal(children, { id =_template.uniqID() , oncancel =cancelHandler , className , ...props } = {}) {
    const attr = {
        id,
        className: [
            'modal',
            className
        ],
        oncancel,
        ...props
    };
    return _template.html`
<dialog ${attr}>
  <div class="modal__content">${children}</div>
</dialog>`;
}
exports.default = Modal;
function showModal(id) {
    return function() {
        const dialog = document.getElementById(id);
        if (dialog) dialog.showModal();
    };
}
const closeModal = (id)=>{
    const dialog = document.getElementById(id);
    if (dialog) closeDialog(dialog);
};
const closeDialog = (dialog)=>{
    dialog.setAttribute('closing', '');
    dialog.addEventListener('animationend', function(e) {
        dialog.close();
        dialog.removeAttribute('closing');
    }, {
        once: true
    });
};
document.addEventListener('click', function(e) {
    if (e.target instanceof HTMLDialogElement) closeDialog(e.target);
});
function cancelHandler(e) {
    e.preventDefault();
    if ([
        'BUTTON',
        'INPUT',
        'TEXTAREA'
    ].includes(document.activeElement.nodeName)) document.activeElement.blur();
    else closeDialog(e.target);
}

},{"template":"iBEJI","./Modal.scss":"dTqR9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dTqR9":[function() {},{}],"fqho1":[function() {},{}],"gKcfx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _template = require("template");
var _channel = require("./Channel");
var _channelDefault = parcelHelpers.interopDefault(_channel);
var _sidebarScss = require("./Sidebar.scss");
var _sidebarHeader = require("./SidebarHeader");
var _sidebarHeaderDefault = parcelHelpers.interopDefault(_sidebarHeader);
const channels = [
    {
        username: 'John',
        text: 'Hello world!',
        date: '10:49',
        unread: 4
    },
    {
        username: 'Maria',
        text: 'Hello world!',
        date: '12:55',
        unread: 2
    },
    {
        username: 'Gena',
        text: 'Hello world!',
        date: '09:47',
        unread: 0
    }
];
function Sidebar() {
    return _template.html`
<aside class="chat-sidebar">
  ${_sidebarHeaderDefault.default()}
  ${channels.map(_channelDefault.default)}
</aside>`;
}
exports.default = Sidebar;

},{"template":"iBEJI","./Channel":"jCFzW","./Sidebar.scss":"3JeHK","./SidebarHeader":"2G89b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jCFzW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _avatar = require("components/Avatar/Avatar");
var _avatarDefault = parcelHelpers.interopDefault(_avatar);
var _badge = require("components/Badge/Badge");
var _badgeDefault = parcelHelpers.interopDefault(_badge);
var _template = require("template");
var _channelScss = require("./Channel.scss");
function ChatChannel(props = {}) {
    let NotificationBadge = '';
    if (props.unread) NotificationBadge = _badgeDefault.default(props.unread, {
        className: 'chat-channel__new',
        variant: 'primary'
    });
    return _template.html`
<div class="chat-channel">
  ${_avatarDefault.default}
  <div class="chat-channel__content">
    <span class="chat-channel__username">${props.username}</span>
    <p class="chat-channel__text">${props.text}</p>
  </div>
  <div class="chat-channel__meta">
    <span class="chat-channel__date">${props.date}</span>
    ${NotificationBadge}
  </div>
</div>`;
}
exports.default = ChatChannel;

},{"components/Avatar/Avatar":"dki4o","components/Badge/Badge":"76RQC","template":"iBEJI","./Channel.scss":"7hTcc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"76RQC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _template = require("template");
var _badgeScss = require("./Badge.scss");
function Badge(children, { className , variant ='primary' , ...props } = {}) {
    const attr = {
        className: [
            'badge',
            className,
            {
                'badge-primary': variant === 'primary'
            }
        ]
    };
    return _template.html`<span ${attr}>${children}</span>`;
}
exports.default = Badge;

},{"template":"iBEJI","./Badge.scss":"99ADL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"99ADL":[function() {},{}],"7hTcc":[function() {},{}],"3JeHK":[function() {},{}],"2G89b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _template = require("template");
var _headerScss = require("./Header.scss");
var _search = require("./Search");
var _searchDefault = parcelHelpers.interopDefault(_search);
function SidebarHeader() {
    return _template.html`
<div class="sidebar-header">
  <a class="sidebar-header__profile" href="/profile">Профиль</a>
  ${_searchDefault.default}
</div>`;
}
exports.default = SidebarHeader;

},{"template":"iBEJI","./Header.scss":"2nBOS","./Search":"dcwnS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2nBOS":[function() {},{}],"dcwnS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _template = require("template");
var _searchScss = require("./Search.scss");
var _searchIcon = require("./SearchIcon");
var _searchIconDefault = parcelHelpers.interopDefault(_searchIcon);
function Search() {
    return _template.html`
<div class="chat-search">
  <input class="chat-search__control" placeholder="Поиск"/>
  ${_searchIconDefault.default({
        className: 'chat-search__icon'
    })}
</div>`;
}
exports.default = Search;

},{"template":"iBEJI","./Search.scss":"l3P9x","./SearchIcon":"bAC0F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l3P9x":[function() {},{}],"bAC0F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _template = require("template");
function SearchIcon(props = {}) {
    return _template.html`
<svg ${props} viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.59239 8.41379C6.16047 9.84571 3.83886 9.84571 2.40694 8.41379C0.975017 6.98187 0.975017 4.66027 2.40694 3.22834C3.83886 1.79642 6.16047 1.79642 7.59239 3.22834C9.02431 4.66027 9.02431 6.98187 7.59239 8.41379ZM8.03277 9.79675C6.07255 11.2961 3.25696 11.1494 1.46413 9.3566C-0.488491 7.40398 -0.488491 4.23816 1.46413 2.28553C3.41675 0.332912 6.58258 0.332912 8.5352 2.28553C10.3279 4.07828 10.4747 6.8937 8.97555 8.85391L12.5423 12.4206L11.5994 13.3634L8.03277 9.79675Z" fill="#999999"/>
</svg>`;
}
exports.default = SearchIcon;

},{"template":"iBEJI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c9xh7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _link = require("components/Link/Link");
var _linkDefault = parcelHelpers.interopDefault(_link);
var _list = require("components/List/List");
var _listDefault = parcelHelpers.interopDefault(_list);
var _template = require("template");
function HomePage() {
    const links = [
        _linkDefault.default({
            label: 'Чат',
            href: '/chat'
        }),
        _linkDefault.default({
            label: 'Профиль',
            href: '/profile'
        }),
        _linkDefault.default({
            label: 'Вход',
            href: '/login'
        }),
        _linkDefault.default({
            label: 'Регистрация',
            href: '/registration'
        }),
        _linkDefault.default({
            label: '404',
            href: '/404'
        }),
        _linkDefault.default({
            label: '500',
            href: '/500'
        })
    ];
    return _template.html`
<div class="centered-container">
  ${_listDefault.default({
        items: links
    })}
</div>`;
}
exports.default = HomePage;

},{"components/Link/Link":"54DrZ","components/List/List":"2f7BW","template":"iBEJI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"54DrZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _template = require("template");
var _linkScss = require("./Link.scss");
document.addEventListener('click', (e)=>{
    if (e.target instanceof HTMLAnchorElement) {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        history.pushState({
            page: href
        }, '', href);
    }
});
function Link({ label , tag ='a' , variant ='primary' , size , className , ...props } = {}) {
    const attr = {
        className: [
            'link',
            className,
            {
                'link-primary': variant === 'primary',
                'link-danger': variant === 'danger',
                'link-xs': size === 'small'
            }
        ],
        ...props
    };
    return _template.html`<${tag} ${attr}>${label}</${tag}>`;
}
exports.default = Link;

},{"template":"iBEJI","./Link.scss":"kPOAJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kPOAJ":[function() {},{}],"2f7BW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _template = require("template");
var _listScss = require("./List.scss");
function List({ items =[] , ...props } = {}) {
    return _template.html`
<ul class="list-group">
  ${items.map(ListItem)}
</ul>`;
}
exports.default = List;
function ListItem(children) {
    return _template.html`<li class="list-group__item">${children}</li>`;
}

},{"template":"iBEJI","./List.scss":"l8pVa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l8pVa":[function() {},{}],"c2fcE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _loginForm = require("components/Form/LoginForm");
var _loginFormDefault = parcelHelpers.interopDefault(_loginForm);
var _template = require("template");
function LoginPage() {
    return _template.html`<div class="centered-container">${_loginFormDefault.default()}</div>`;
}
exports.default = LoginPage;

},{"components/Form/LoginForm":"4mcEt","template":"iBEJI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4mcEt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _button = require("components/Button/Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _textField = require("components/Form/TextField");
var _textFieldDefault = parcelHelpers.interopDefault(_textField);
var _link = require("components/Link/Link");
var _linkDefault = parcelHelpers.interopDefault(_link);
var _template = require("template");
var _authFormScss = require("./AuthForm.scss");
const submitHandler = (e)=>{
    e.preventDefault();
};
function LoginForm() {
    return _template.html`
<form class="auth-form" autocomplete="off" ${{
        onsubmit: submitHandler
    }}>
  <h2 class="auth-form__title">Вход</h2>
  ${_textFieldDefault.default({
        label: 'Логин',
        name: 'login',
        invalid: true,
        feedback: 'Неверный логин'
    })}
  ${_textFieldDefault.default({
        label: 'Пароль',
        name: 'password',
        type: 'password'
    })}

  <div class="auth-form__actions">
    ${_buttonDefault.default({
        label: 'Авторизоваться',
        type: 'submit',
        className: 'auth-form__submit'
    })}
    ${_linkDefault.default({
        label: 'Нет аккаунта?',
        href: '/registration'
    })}
  </div>
</form>`;
}
exports.default = LoginForm;

},{"components/Button/Button":"bxC6O","components/Form/TextField":"3RubV","components/Link/Link":"54DrZ","template":"iBEJI","./AuthForm.scss":"6doqn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6doqn":[function() {},{}],"vgq7U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _link = require("components/Link/Link");
var _linkDefault = parcelHelpers.interopDefault(_link);
var _template = require("template");
function NotFoundPage() {
    return _template.html`
<div class="centered-container">
  <div class="error-page">
    <h1 class="error-page__title">404</h1>
    <p class="error-page__text">Не туда попали</p>
    ${_linkDefault.default({
        label: 'Назад к чатам',
        href: '/chat'
    })}
  </div>
</div>`;
}
exports.default = NotFoundPage;

},{"components/Link/Link":"54DrZ","template":"iBEJI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4IIKc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _profile = require("components/Profile/Profile");
var _profileDefault = parcelHelpers.interopDefault(_profile);
var _profileBack = require("components/Profile/ProfileBack");
var _profileBackDefault = parcelHelpers.interopDefault(_profileBack);
var _template = require("template");
function ProfilePage() {
    return _template.html`
<div class="d-flex">
  ${_profileBackDefault.default}
  ${_profileDefault.default}
</div>`;
}
exports.default = ProfilePage;

},{"components/Profile/Profile":"hHroY","components/Profile/ProfileBack":"1P9mY","template":"iBEJI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hHroY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _button = require("components/Button/Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _textField = require("components/Form/TextField");
var _textFieldDefault = parcelHelpers.interopDefault(_textField);
var _link = require("components/Link/Link");
var _linkDefault = parcelHelpers.interopDefault(_link);
var _modal = require("components/Modal/Modal");
var _modalDefault = parcelHelpers.interopDefault(_modal);
var _template = require("template");
var _avatarModal = require("./AvatarModal");
var _avatarModalDefault = parcelHelpers.interopDefault(_avatarModal);
var _dataList = require("./DataList");
var _dataListDefault = parcelHelpers.interopDefault(_dataList);
var _profileScss = require("./Profile.scss");
var _profileAvatar = require("./ProfileAvatar");
var _profileAvatarDefault = parcelHelpers.interopDefault(_profileAvatar);
const avatarModalID = 'modal-avatar';
const changeDataModalID = 'modal-change-data';
const changePasswordModalID = 'modal-change-password';
const data = [
    {
        label: 'Почта',
        name: 'email',
        value: 'pochta@yandex.ru'
    },
    {
        label: 'Логин',
        name: 'login',
        value: 'ivanivanov'
    },
    {
        label: 'Имя',
        name: 'first_name',
        value: 'Иван'
    },
    {
        label: 'Фамилия',
        name: 'second_name',
        value: 'Иванов'
    },
    {
        label: 'Имя в чате',
        name: 'display_name',
        value: 'Иван'
    },
    {
        label: 'Телефон',
        name: 'phone',
        value: '+7 (909) 967 30 30'
    }
];
const actions = [
    {
        label: _linkDefault.default({
            label: 'Change data',
            tag: 'button',
            onclick: _modal.showModal(changeDataModalID)
        })
    },
    {
        label: _linkDefault.default({
            label: 'Change password',
            tag: 'button',
            onclick: _modal.showModal(changePasswordModalID)
        })
    },
    {
        label: _linkDefault.default({
            label: 'Logout',
            variant: 'danger',
            tag: 'button'
        })
    }
];
function Profile() {
    return _template.html`
<div class="profile">
  ${_profileAvatarDefault.default({
        onclick: _modal.showModal(avatarModalID),
        onopen: (e)=>{
            console.log(e);
        }
    })}
  <span class="profile__username">Ivan</span>
  ${_dataListDefault.default({
        items: data,
        className: 'profile__data'
    })}
  ${_dataListDefault.default({
        items: actions,
        className: 'profile__actions'
    })}
  ${_avatarModalDefault.default({
        id: avatarModalID
    })}
  ${ChangeDataModal}
  ${ChangePasswordModal}
</div>`;
}
exports.default = Profile;
function ChangeDataModal() {
    const children = _template.html`
<div class="modal__title">Узменить данные</div>
<form class="modal__body" ${{
        onsubmit: (e)=>{
            e.preventDefault();
        }
    }}>
  ${data.map(_textFieldDefault.default)}
  ${_buttonDefault.default({
        label: 'Узменить',
        className: 'w-100 mt-8'
    })}
</form>`;
    return _modalDefault.default(children, {
        id: changeDataModalID
    });
}
function ChangePasswordModal() {
    const children = _template.html`
<div class="modal__title">Узменить пароль</div>
<form class="modal__body" ${{
        onsubmit: (e)=>{
            e.preventDefault();
        }
    }}>
  ${_textFieldDefault.default({
        label: 'Старый пароль',
        name: 'oldPassword',
        type: 'password'
    })}
  ${_textFieldDefault.default({
        label: 'Новый пароль',
        name: 'newPassword',
        type: 'password'
    })}
  ${_textFieldDefault.default({
        label: 'Повторите новый пароль',
        name: 'newPasswordConfirm',
        type: 'password'
    })}
  ${_buttonDefault.default({
        label: 'Узменить',
        className: 'w-100 mt-8'
    })}
</form>`;
    return _modalDefault.default(children, {
        id: changePasswordModalID
    });
}

},{"components/Button/Button":"bxC6O","components/Form/TextField":"3RubV","components/Link/Link":"54DrZ","components/Modal/Modal":"biIyr","template":"iBEJI","./AvatarModal":"97DxJ","./DataList":"13Yek","./Profile.scss":"9kkC6","./ProfileAvatar":"2Iy1X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"97DxJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _avatar = require("components/Avatar/Avatar");
var _avatarDefault = parcelHelpers.interopDefault(_avatar);
var _button = require("components/Button/Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _link = require("components/Link/Link");
var _linkDefault = parcelHelpers.interopDefault(_link);
var _modal = require("components/Modal/Modal");
var _modalDefault = parcelHelpers.interopDefault(_modal);
var _template = require("template");
var _avatarModalScss = require("./AvatarModal.scss");
const avatarInputID = 'avatar-input';
function uploadHandler(e) {
    const preview = document.querySelector('.avatar-modal__preview');
    if (e.target.files.length > 0) {
        const file = e.target.files[0];
        const img = preview.querySelector('.avatar__img');
        img.src = URL.createObjectURL(file);
        preview.setAttribute('show', '');
    } else preview.removeAttribute('show');
}
function submitHandler(e) {
    e.preventDefault();
    const input = document.getElementById(avatarInputID);
    input.value = '';
    input.dispatchEvent(new Event('change'));
}
function AvatarModal(props = {}) {
    const id = avatarInputID;
    props.className = [
        'avatar-modal',
        props.className
    ];
    const children = _template.html`
<div class="modal__title">Загрузите файл</div>
<form class="modal__body" ${{
        onsubmit: submitHandler
    }}>
  ${_linkDefault.default({
        for: id,
        label: 'Выбрать файл на компьютере',
        tag: 'label',
        className: 'w-50 text-center'
    })}
  <input ${{
        id,
        name: 'avatar',
        onchange: uploadHandler,
        type: 'file',
        className: 'visually-hidden'
    }} accept="image/png, image/jpeg">
  <div class="avatar-modal__preview">
    ${_avatarDefault.default({
        size: 'big'
    })}
  </div>
  ${_buttonDefault.default({
        label: 'Поменять',
        type: 'submit',
        className: 'w-100 mt-8'
    })}
</form>`;
    return _modalDefault.default(children, props);
}
exports.default = AvatarModal;

},{"components/Avatar/Avatar":"dki4o","components/Button/Button":"bxC6O","components/Link/Link":"54DrZ","components/Modal/Modal":"biIyr","template":"iBEJI","./AvatarModal.scss":"7ppZm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ppZm":[function() {},{}],"13Yek":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _template = require("template");
var _dataListScss = require("./DataList.scss");
function DataList({ className , items =[]  } = {}) {
    return _template.html`
<div ${{
        className: [
            'data-list',
            className
        ]
    }}>
  ${items.map(DataItem)}
</div>`;
}
exports.default = DataList;
function DataItem({ label , value  } = {}) {
    return _template.html`
<div class="data-list-item">
  <div class="data-list-item__label">${label}</div>
  ${value && _template.html`<div class="data-list-item__value">${value}</div>`}
</div>`;
}

},{"template":"iBEJI","./DataList.scss":"4PuPc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4PuPc":[function() {},{}],"9kkC6":[function() {},{}],"2Iy1X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _avatar = require("components/Avatar/Avatar");
var _avatarDefault = parcelHelpers.interopDefault(_avatar);
var _template = require("template");
var _profileAvatarScss = require("./ProfileAvatar.scss");
function ProfileAvatar(props = {}) {
    return _template.html`
<div class="profile-avatar">
  ${_avatarDefault.default({
        id: 'profile-avatar',
        size: 'big'
    })}
  <button class="profile-avatar__change" type="button" ${{
        onclick: props.onclick
    }}>Поменять аватар</button>
</div>`;
}
exports.default = ProfileAvatar;

},{"components/Avatar/Avatar":"dki4o","template":"iBEJI","./ProfileAvatar.scss":"jKJmZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jKJmZ":[function() {},{}],"1P9mY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _icon = require("components/Icon");
var _template = require("template");
var _profileBackScss = require("./ProfileBack.scss");
const clickHandler = (e)=>{
    e.preventDefault();
    history.back();
};
function BackButon() {
    return _template.html`
<button ${{
        className: 'profile-back',
        onclick: clickHandler
    }}>
  <span class="profile-back__circle">${_icon.ArrowIcon}</span>
</button>`;
}
exports.default = BackButon;

},{"components/Icon":"JmJkt","template":"iBEJI","./ProfileBack.scss":"bwDKx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bwDKx":[function() {},{}],"gRGz0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _registrationForm = require("components/Form/RegistrationForm");
var _registrationFormDefault = parcelHelpers.interopDefault(_registrationForm);
var _template = require("template");
function RegistrationPage() {
    return _template.html`<div class="centered-container">${_registrationFormDefault.default()}</div>`;
}
exports.default = RegistrationPage;

},{"components/Form/RegistrationForm":"c4BEY","template":"iBEJI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c4BEY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _button = require("components/Button/Button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _textField = require("components/Form/TextField");
var _textFieldDefault = parcelHelpers.interopDefault(_textField);
var _link = require("components/Link/Link");
var _linkDefault = parcelHelpers.interopDefault(_link);
var _template = require("template");
var _authFormScss = require("./AuthForm.scss");
const submitHandler = (e)=>{
    e.preventDefault();
};
function RegistrationForm() {
    return _template.html`
<form class="auth-form" autocomplete="off" ${{
        onsubmit: submitHandler
    }}>
  <h2 class="auth-form__title">Регистрация</h2>
  ${_textFieldDefault.default({
        label: 'Почта',
        name: 'email',
        type: 'email'
    })}
  ${_textFieldDefault.default({
        label: 'Логин',
        name: 'login'
    })}
  ${_textFieldDefault.default({
        label: 'Имя',
        name: 'first_name'
    })}
  ${_textFieldDefault.default({
        label: 'Фамилия',
        name: 'second_name'
    })}
  ${_textFieldDefault.default({
        label: 'Телефон',
        name: 'phone'
    })}
  ${_textFieldDefault.default({
        label: 'Пароль',
        name: 'password',
        type: 'password'
    })}
  ${_textFieldDefault.default({
        label: 'Пароль (еще раз)',
        name: 'password_confirm',
        type: 'password'
    })}

  <div class="auth-form__actions">
    ${_buttonDefault.default({
        label: 'Зарегистрироваться',
        type: 'submit',
        className: 'auth-form__submit'
    })}
    ${_linkDefault.default({
        label: 'Войти',
        href: '/login'
    })}
  </div>
</form>`;
}
exports.default = RegistrationForm;

},{"components/Button/Button":"bxC6O","components/Form/TextField":"3RubV","components/Link/Link":"54DrZ","template":"iBEJI","./AuthForm.scss":"6doqn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6doqn":[function() {},{}],"edigD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _link = require("components/Link/Link");
var _linkDefault = parcelHelpers.interopDefault(_link);
var _template = require("template");
function ServerErrorPage() {
    return _template.html`
<div class="centered-container">
  <div class="error-page">
    <h1 class="error-page__title">500</h1>
    <p class="error-page__text">Мы уже фиксим</p>
    ${_linkDefault.default({
        label: 'Назад к чатам',
        href: '/chat'
    })}
  </div>
</div>`;
}
exports.default = ServerErrorPage;

},{"components/Link/Link":"54DrZ","template":"iBEJI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6IXwR","bNKaB"], "bNKaB", "parcelRequire94c2")

//# sourceMappingURL=index.0641b553.js.map
