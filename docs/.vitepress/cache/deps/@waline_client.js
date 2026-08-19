import {
  Fragment,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  customRef,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  h,
  inject,
  isRef,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  onScopeDispose,
  onUnmounted,
  openBlock,
  provide,
  reactive,
  readonly,
  ref,
  renderList,
  resolveComponent,
  shallowReadonly,
  shallowRef,
  toDisplayString,
  toRef,
  toValue,
  unref,
  useTemplateRef,
  vModelDynamic,
  vModelText,
  vShow,
  watch,
  watchEffect,
  withDirectives
} from "./chunk-IGPK6NSI.js";
import {
  __commonJS,
  __publicField,
  __toESM
} from "./chunk-EQCVQC35.js";

// node_modules/recaptcha-v3/dist/ReCaptchaInstance.js
var require_ReCaptchaInstance = __commonJS({
  "node_modules/recaptcha-v3/dist/ReCaptchaInstance.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P2, generator) {
      function adopt(value) {
        return value instanceof P2 ? value : new P2(function(resolve) {
          resolve(value);
        });
      }
      return new (P2 || (P2 = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e3) {
            reject(e3);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e3) {
            reject(e3);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _2 = { label: 0, sent: function() {
        if (t3[0] & 1) throw t3[1];
        return t3[1];
      }, trys: [], ops: [] }, f3, y2, t3, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n3) {
        return function(v2) {
          return step([n3, v2]);
        };
      }
      function step(op) {
        if (f3) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_2 = 0)), _2) try {
          if (f3 = 1, y2 && (t3 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t3 = y2["return"]) && t3.call(y2), 0) : y2.next) && !(t3 = t3.call(y2, op[1])).done) return t3;
          if (y2 = 0, t3) op = [op[0] & 2, t3.value];
          switch (op[0]) {
            case 0:
            case 1:
              t3 = op;
              break;
            case 4:
              _2.label++;
              return { value: op[1], done: false };
            case 5:
              _2.label++;
              y2 = op[1];
              op = [0];
              continue;
            case 7:
              op = _2.ops.pop();
              _2.trys.pop();
              continue;
            default:
              if (!(t3 = _2.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _2 = 0;
                continue;
              }
              if (op[0] === 3 && (!t3 || op[1] > t3[0] && op[1] < t3[3])) {
                _2.label = op[1];
                break;
              }
              if (op[0] === 6 && _2.label < t3[1]) {
                _2.label = t3[1];
                t3 = op;
                break;
              }
              if (t3 && _2.label < t3[2]) {
                _2.label = t3[2];
                _2.ops.push(op);
                break;
              }
              if (t3[2]) _2.ops.pop();
              _2.trys.pop();
              continue;
          }
          op = body.call(thisArg, _2);
        } catch (e3) {
          op = [6, e3];
          y2 = 0;
        } finally {
          f3 = t3 = 0;
        }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReCaptchaInstance = void 0;
    var ReCaptchaInstance = function() {
      function ReCaptchaInstance2(siteKey, recaptchaID, recaptcha) {
        this.siteKey = siteKey;
        this.recaptchaID = recaptchaID;
        this.recaptcha = recaptcha;
        this.styleContainer = null;
      }
      ReCaptchaInstance2.prototype.execute = function(action) {
        return __awaiter(this, void 0, void 0, function() {
          var _a2;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                if (!this.recaptcha.enterprise) return [3, 2];
                return [4, this.recaptcha.enterprise.execute(this.recaptchaID, { action })];
              case 1:
                _a2 = _b.sent();
                return [3, 4];
              case 2:
                return [4, this.recaptcha.execute(this.recaptchaID, { action })];
              case 3:
                _a2 = _b.sent();
                _b.label = 4;
              case 4:
                return [2, _a2];
            }
          });
        });
      };
      ReCaptchaInstance2.prototype.getSiteKey = function() {
        return this.siteKey;
      };
      ReCaptchaInstance2.prototype.hideBadge = function() {
        if (this.styleContainer !== null) {
          return;
        }
        this.styleContainer = document.createElement("style");
        this.styleContainer.innerHTML = ".grecaptcha-badge{visibility:hidden !important;}";
        document.head.appendChild(this.styleContainer);
      };
      ReCaptchaInstance2.prototype.showBadge = function() {
        if (this.styleContainer === null) {
          return;
        }
        document.head.removeChild(this.styleContainer);
        this.styleContainer = null;
      };
      return ReCaptchaInstance2;
    }();
    exports.ReCaptchaInstance = ReCaptchaInstance;
  }
});

// node_modules/recaptcha-v3/dist/ReCaptchaLoader.js
var require_ReCaptchaLoader = __commonJS({
  "node_modules/recaptcha-v3/dist/ReCaptchaLoader.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t3) {
        for (var s2, i2 = 1, n3 = arguments.length; i2 < n3; i2++) {
          s2 = arguments[i2];
          for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2))
            t3[p2] = s2[p2];
        }
        return t3;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getInstance = exports.load = void 0;
    var ReCaptchaInstance_1 = require_ReCaptchaInstance();
    var ELoadingState;
    (function(ELoadingState2) {
      ELoadingState2[ELoadingState2["NOT_LOADED"] = 0] = "NOT_LOADED";
      ELoadingState2[ELoadingState2["LOADING"] = 1] = "LOADING";
      ELoadingState2[ELoadingState2["LOADED"] = 2] = "LOADED";
    })(ELoadingState || (ELoadingState = {}));
    var ReCaptchaLoader = function() {
      function ReCaptchaLoader2() {
      }
      ReCaptchaLoader2.load = function(siteKey, options) {
        if (options === void 0) {
          options = {};
        }
        if (typeof document === "undefined") {
          return Promise.reject(new Error("This is a library for the browser!"));
        }
        if (ReCaptchaLoader2.getLoadingState() === ELoadingState.LOADED) {
          if (ReCaptchaLoader2.instance.getSiteKey() === siteKey) {
            return Promise.resolve(ReCaptchaLoader2.instance);
          } else {
            return Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));
          }
        }
        if (ReCaptchaLoader2.getLoadingState() === ELoadingState.LOADING) {
          if (siteKey !== ReCaptchaLoader2.instanceSiteKey) {
            return Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));
          }
          return new Promise(function(resolve, reject) {
            ReCaptchaLoader2.successfulLoadingConsumers.push(function(instance) {
              return resolve(instance);
            });
            ReCaptchaLoader2.errorLoadingRunnable.push(function(reason) {
              return reject(reason);
            });
          });
        }
        ReCaptchaLoader2.instanceSiteKey = siteKey;
        ReCaptchaLoader2.setLoadingState(ELoadingState.LOADING);
        var loader = new ReCaptchaLoader2();
        return new Promise(function(resolve, reject) {
          loader.loadScript(siteKey, options.useRecaptchaNet || false, options.useEnterprise || false, options.renderParameters ? options.renderParameters : {}, options.customUrl).then(function() {
            ReCaptchaLoader2.setLoadingState(ELoadingState.LOADED);
            var widgetID = loader.doExplicitRender(grecaptcha, siteKey, options.explicitRenderParameters ? options.explicitRenderParameters : {}, options.useEnterprise || false);
            var instance = new ReCaptchaInstance_1.ReCaptchaInstance(siteKey, widgetID, grecaptcha);
            ReCaptchaLoader2.successfulLoadingConsumers.forEach(function(v2) {
              return v2(instance);
            });
            ReCaptchaLoader2.successfulLoadingConsumers = [];
            if (options.autoHideBadge) {
              instance.hideBadge();
            }
            ReCaptchaLoader2.instance = instance;
            resolve(instance);
          }).catch(function(error) {
            ReCaptchaLoader2.errorLoadingRunnable.forEach(function(v2) {
              return v2(error);
            });
            ReCaptchaLoader2.errorLoadingRunnable = [];
            reject(error);
          });
        });
      };
      ReCaptchaLoader2.getInstance = function() {
        return ReCaptchaLoader2.instance;
      };
      ReCaptchaLoader2.setLoadingState = function(state) {
        ReCaptchaLoader2.loadingState = state;
      };
      ReCaptchaLoader2.getLoadingState = function() {
        if (ReCaptchaLoader2.loadingState === null) {
          return ELoadingState.NOT_LOADED;
        } else {
          return ReCaptchaLoader2.loadingState;
        }
      };
      ReCaptchaLoader2.prototype.loadScript = function(siteKey, useRecaptchaNet, useEnterprise, renderParameters, customUrl) {
        var _this = this;
        if (useRecaptchaNet === void 0) {
          useRecaptchaNet = false;
        }
        if (useEnterprise === void 0) {
          useEnterprise = false;
        }
        if (renderParameters === void 0) {
          renderParameters = {};
        }
        if (customUrl === void 0) {
          customUrl = "";
        }
        var scriptElement = document.createElement("script");
        scriptElement.setAttribute("recaptcha-v3-script", "");
        scriptElement.setAttribute("async", "");
        scriptElement.setAttribute("defer", "");
        var scriptBase = "https://www.google.com/recaptcha/api.js";
        if (useRecaptchaNet) {
          if (useEnterprise) {
            scriptBase = "https://recaptcha.net/recaptcha/enterprise.js";
          } else {
            scriptBase = "https://recaptcha.net/recaptcha/api.js";
          }
        } else if (useEnterprise) {
          scriptBase = "https://www.google.com/recaptcha/enterprise.js";
        }
        if (customUrl) {
          scriptBase = customUrl;
        }
        if (renderParameters.render) {
          renderParameters.render = void 0;
        }
        var parametersQuery = this.buildQueryString(renderParameters);
        scriptElement.src = scriptBase + "?render=explicit" + parametersQuery;
        return new Promise(function(resolve, reject) {
          scriptElement.addEventListener("load", _this.waitForScriptToLoad(function() {
            resolve(scriptElement);
          }, useEnterprise), false);
          scriptElement.onerror = function(error) {
            ReCaptchaLoader2.setLoadingState(ELoadingState.NOT_LOADED);
            reject(error);
          };
          document.head.appendChild(scriptElement);
        });
      };
      ReCaptchaLoader2.prototype.buildQueryString = function(parameters) {
        var parameterKeys = Object.keys(parameters);
        if (parameterKeys.length < 1) {
          return "";
        }
        return "&" + Object.keys(parameters).filter(function(parameterKey) {
          return !!parameters[parameterKey];
        }).map(function(parameterKey) {
          return parameterKey + "=" + parameters[parameterKey];
        }).join("&");
      };
      ReCaptchaLoader2.prototype.waitForScriptToLoad = function(callback, useEnterprise) {
        var _this = this;
        return function() {
          if (window.grecaptcha === void 0) {
            setTimeout(function() {
              _this.waitForScriptToLoad(callback, useEnterprise);
            }, ReCaptchaLoader2.SCRIPT_LOAD_DELAY);
          } else {
            if (useEnterprise) {
              window.grecaptcha.enterprise.ready(function() {
                callback();
              });
            } else {
              window.grecaptcha.ready(function() {
                callback();
              });
            }
          }
        };
      };
      ReCaptchaLoader2.prototype.doExplicitRender = function(grecaptcha2, siteKey, parameters, isEnterprise) {
        var augmentedParameters = __assign({ sitekey: siteKey }, parameters);
        if (parameters.container) {
          if (isEnterprise) {
            return grecaptcha2.enterprise.render(parameters.container, augmentedParameters);
          } else {
            return grecaptcha2.render(parameters.container, augmentedParameters);
          }
        } else {
          if (isEnterprise) {
            return grecaptcha2.enterprise.render(augmentedParameters);
          } else {
            return grecaptcha2.render(augmentedParameters);
          }
        }
      };
      ReCaptchaLoader2.loadingState = null;
      ReCaptchaLoader2.instance = null;
      ReCaptchaLoader2.instanceSiteKey = null;
      ReCaptchaLoader2.successfulLoadingConsumers = [];
      ReCaptchaLoader2.errorLoadingRunnable = [];
      ReCaptchaLoader2.SCRIPT_LOAD_DELAY = 25;
      return ReCaptchaLoader2;
    }();
    exports.load = ReCaptchaLoader.load;
    exports.getInstance = ReCaptchaLoader.getInstance;
  }
});

// node_modules/recaptcha-v3/dist/ReCaptcha.js
var require_ReCaptcha = __commonJS({
  "node_modules/recaptcha-v3/dist/ReCaptcha.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReCaptchaInstance = exports.getInstance = exports.load = void 0;
    var ReCaptchaLoader_1 = require_ReCaptchaLoader();
    Object.defineProperty(exports, "load", { enumerable: true, get: function() {
      return ReCaptchaLoader_1.load;
    } });
    Object.defineProperty(exports, "getInstance", { enumerable: true, get: function() {
      return ReCaptchaLoader_1.getInstance;
    } });
    var ReCaptchaInstance_1 = require_ReCaptchaInstance();
    Object.defineProperty(exports, "ReCaptchaInstance", { enumerable: true, get: function() {
      return ReCaptchaInstance_1.ReCaptchaInstance;
    } });
  }
});

// node_modules/@waline/api/dist/index.js
var e = { "Content-Type": `application/json` };
var t = (e3) => `${e3.replace(/\/?$/u, `/`)}api/`;
var n = (e3, t3 = ``) => {
  if (typeof e3 == `object` && e3.errno) throw TypeError(`${t3} failed with ${e3.errno}: ${e3.errmsg}`);
  return e3;
};
var r = ({ serverURL: e3, lang: r3, paths: i2, type: a2, signal: o3 }) => fetch(`${t(e3)}article?path=${encodeURIComponent(i2.join(`,`))}&type=${encodeURIComponent(a2.join(`,`))}&lang=${r3}`, { signal: o3 }).then((e4) => e4.json()).then((e4) => n(e4, `Get counter`).data);
var i = ({ serverURL: r3, lang: i2, path: a2, type: o3, action: s2 }) => fetch(`${t(r3)}article?lang=${i2}`, { method: `POST`, headers: e, body: JSON.stringify({ path: a2, type: o3, action: s2 }) }).then((e3) => e3.json()).then((e3) => n(e3, `Update counter`).data);
var a = ({ serverURL: e3, lang: r3, path: i2, page: a2, pageSize: o3, sortBy: s2, signal: c2, token: l4 }) => {
  let u2 = {};
  return l4 && (u2.Authorization = `Bearer ${l4}`), fetch(`${t(e3)}comment?path=${encodeURIComponent(i2)}&pageSize=${o3}&page=${a2}&lang=${r3}&sortBy=${s2}`, { signal: c2, headers: u2 }).then((e4) => e4.json()).then((e4) => n(e4, `Get comment data`).data);
};
var o = ({ serverURL: e3, lang: n3, token: r3, comment: i2 }) => {
  let a2 = { "Content-Type": `application/json` };
  return r3 && (a2.Authorization = `Bearer ${r3}`), fetch(`${t(e3)}comment?lang=${n3}`, { method: `POST`, headers: a2, body: JSON.stringify(i2) }).then((e4) => e4.json());
};
var s = ({ serverURL: e3, lang: r3, token: i2, objectId: a2 }) => fetch(`${t(e3)}comment/${a2}?lang=${r3}`, { method: `DELETE`, headers: { Authorization: `Bearer ${i2}` } }).then((e4) => e4.json()).then((e4) => n(e4, `Delete comment`));
var c = ({ serverURL: r3, lang: i2, token: a2, objectId: o3, comment: s2 }) => fetch(`${t(r3)}comment/${o3}?lang=${i2}`, { method: `PUT`, headers: { ...e, Authorization: `Bearer ${a2}` }, body: JSON.stringify(s2) }).then((e3) => e3.json()).then((e3) => n(e3, `Update comment`));
var l = ({ serverURL: e3, lang: r3, paths: i2, signal: a2 }) => fetch(`${t(e3)}comment?type=count&url=${encodeURIComponent(i2.join(`,`))}&lang=${r3}`, { signal: a2 }).then((e4) => e4.json()).then((e4) => n(e4, `Get comment count`).data);
var u = () => {
  let e3 = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/iu.test(e3);
};
var d = ({ lang: e3, serverURL: t3 }) => {
  let n3 = 1024, r3 = (window.innerWidth - n3) / 2, i2 = (window.innerHeight - 600) / 2;
  if (u()) return location.href = `${t3.replace(/\/$/u, ``)}/ui/login?lng=${encodeURIComponent(e3)}&redirect=${encodeURIComponent(location.href)}`, new Promise(() => {
  });
  let a2 = window.open(`${t3.replace(/\/$/u, ``)}/ui/login?lng=${encodeURIComponent(e3)}`, `_blank`, `width=${n3},height=600,left=${r3},top=${i2},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);
  return a2 == null ? void 0 : a2.postMessage({ type: `TOKEN`, data: null }, `*`), new Promise((e4) => {
    let t4 = ({ data: n4 }) => {
      !n4 || typeof n4 != `object` || n4.type !== `userInfo` || n4.data.token && (a2 == null ? void 0 : a2.close(), window.removeEventListener(`message`, t4), e4(n4.data));
    };
    window.addEventListener(`message`, t4);
  });
};
var f = ({ serverURL: e3, lang: t3, paths: n3, signal: i2 }) => r({ serverURL: e3, lang: t3, paths: n3, type: [`time`], signal: i2 });
var p = (e3) => i({ ...e3, type: `time`, action: `inc` });
var m = ({ serverURL: e3, lang: n3, count: r3, signal: i2, token: a2 }) => {
  let o3 = {};
  return a2 && (o3.Authorization = `Bearer ${a2}`), fetch(`${t(e3)}comment?type=recent&count=${r3}&lang=${n3}`, { signal: i2, headers: o3 }).then((e4) => e4.json());
};
var h2 = ({ serverURL: e3, signal: r3, pageSize: i2, lang: a2 }) => fetch(`${t(e3)}user?pageSize=${i2}&lang=${a2}`, { signal: r3 }).then((e4) => e4.json()).then((e4) => n(e4, `user list`)).then((e4) => e4.data);

// node_modules/@waline/client/node_modules/@vueuse/shared/dist/index.js
function tryOnScopeDispose(fn2, failSilently) {
  if (getCurrentScope()) {
    onScopeDispose(fn2, failSilently);
    return true;
  }
  return false;
}
var isClient = typeof window !== "undefined" && typeof document !== "undefined";
var isWorker = typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var toString = Object.prototype.toString;
var isObject = (val) => toString.call(val) === "[object Object]";
var noop = () => {
};
var isIOS = getIsIOS();
function getIsIOS() {
  var _window, _window2, _window3;
  return isClient && !!((_window = window) === null || _window === void 0 || (_window = _window.navigator) === null || _window === void 0 ? void 0 : _window.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.navigator) === null || _window2 === void 0 ? void 0 : _window2.maxTouchPoints) > 2 && /iPad|Macintosh/.test((_window3 = window) === null || _window3 === void 0 ? void 0 : _window3.navigator.userAgent));
}
function toRef2(...args) {
  if (args.length !== 1) return toRef(...args);
  const r3 = args[0];
  return typeof r3 === "function" ? readonly(customRef(() => ({
    get: r3,
    set: noop
  }))) : ref(r3);
}
function createFilterWrapper(filter, fn2) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn2.apply(this, args), {
        fn: fn2,
        thisArg: this,
        args
      })).then(resolve).catch(reject);
    });
  }
  if ("cancel" in filter) Object.assign(wrapper, {
    cancel: filter.cancel,
    flush: filter.flush,
    isPending: filter.isPending
  });
  return wrapper;
}
var bypassFilter = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  let lastResolve = noop;
  const _pending = shallowRef(false);
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  let lastInvoker;
  const handler = (invoke) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer) _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = void 0;
      }
      _pending.value = false;
      return Promise.resolve(invoke());
    }
    _pending.value = true;
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      lastResolve = resolve;
      lastInvoker = invoke;
      if (maxDuration && !maxTimer) maxTimer = setTimeout(() => {
        if (timer) _clearTimeout(timer);
        maxTimer = void 0;
        _pending.value = false;
        resolve(lastInvoker());
      }, maxDuration);
      timer = setTimeout(() => {
        if (maxTimer) _clearTimeout(maxTimer);
        maxTimer = void 0;
        _pending.value = false;
        resolve(invoke());
      }, duration);
    });
  };
  return Object.assign(handler, {
    cancel: () => {
      if (timer) {
        _clearTimeout(timer);
        timer = void 0;
      }
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = void 0;
      }
      _pending.value = false;
      lastResolve = noop;
    },
    flush: () => {
      if (_pending.value) {
        if (timer) {
          clearTimeout(timer);
          timer = void 0;
        }
        if (maxTimer) {
          clearTimeout(maxTimer);
          maxTimer = void 0;
        }
        _pending.value = false;
        const resolve = lastResolve;
        lastRejector = noop;
        lastResolve = noop;
        resolve(lastInvoker());
      }
    },
    isPending: shallowReadonly(_pending)
  });
}
function pausableFilter(extendFilter = bypassFilter, options = {}) {
  const { initialState = "active" } = options;
  const isActive = toRef2(initialState === "active");
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value) extendFilter(...args);
  };
  return {
    isActive: shallowReadonly(isActive),
    pause,
    resume,
    eventFilter
  };
}
function identity(arg) {
  return arg;
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function cacheStringFunction(fn2) {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    return cache[str] || (cache[str] = fn2(str));
  };
}
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_2, c2) => c2 ? c2.toUpperCase() : "");
});
function getLifeCycleTarget(target) {
  return target || getCurrentInstance();
}
function useDebounceFn(fn2, ms = 200, options = {}) {
  return createFilterWrapper(debounceFilter(ms, options), fn2);
}
function watchWithFilter(source, cb, options = {}) {
  const { eventFilter = bypassFilter, ...watchOptions } = options;
  return watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}
function watchPausable(source, cb, options = {}) {
  const { eventFilter: filter, initialState = "active", ...watchOptions } = options;
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter, { initialState });
  return {
    stop: watchWithFilter(source, cb, {
      ...watchOptions,
      eventFilter
    }),
    pause,
    resume,
    isActive
  };
}
function tryOnMounted(fn2, sync = true, target) {
  if (getLifeCycleTarget(target)) onMounted(fn2, target);
  else if (sync) fn2();
  else nextTick(fn2);
}
function tryOnUnmounted(fn2, target) {
  if (getLifeCycleTarget(target)) onUnmounted(fn2, target);
}
function useIntervalFn(cb, interval = 1e3, options = {}) {
  const { immediate = true, immediateCallback = false } = options;
  let timer = null;
  const isActive = shallowRef(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    const intervalValue = toValue(interval);
    if (intervalValue <= 0) return;
    isActive.value = true;
    if (immediateCallback) cb();
    clean();
    if (isActive.value) timer = setInterval(cb, intervalValue);
  }
  if (immediate && isClient) resume();
  if (isRef(interval) || typeof interval === "function") tryOnScopeDispose(watch(interval, () => {
    if (isActive.value && isClient) resume();
  }));
  tryOnScopeDispose(pause);
  return {
    isActive: shallowReadonly(isActive),
    pause,
    resume
  };
}
function watchImmediate(source, cb, options) {
  return watch(source, cb, {
    ...options,
    immediate: true
  });
}

// node_modules/@waline/client/node_modules/@vueuse/core/dist/index.js
var defaultWindow = isClient ? window : void 0;
var defaultDocument = isClient ? window.document : void 0;
var defaultNavigator = isClient ? window.navigator : void 0;
var defaultLocation = isClient ? window.location : void 0;
function unrefElement(elRef) {
  var _$el;
  const plain = toValue(elRef);
  return (_$el = plain === null || plain === void 0 ? void 0 : plain.$el) !== null && _$el !== void 0 ? _$el : plain;
}
function useEventListener(...args) {
  const register = (el, event, listener, options) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test = toArray(toValue(args[0])).filter((e3) => e3 != null);
    return test.every((e3) => typeof e3 !== "string") ? test : void 0;
  });
  return watchImmediate(() => {
    var _firstParamTargets$va, _firstParamTargets$va2;
    return [
      (_firstParamTargets$va = (_firstParamTargets$va2 = firstParamTargets.value) === null || _firstParamTargets$va2 === void 0 ? void 0 : _firstParamTargets$va2.map((e3) => unrefElement(e3))) !== null && _firstParamTargets$va !== void 0 ? _firstParamTargets$va : [defaultWindow].filter((e3) => e3 != null),
      toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
      toArray(unref(firstParamTargets.value ? args[2] : args[1])),
      toValue(firstParamTargets.value ? args[3] : args[2])
    ];
  }, ([raw_targets, raw_events, raw_listeners, raw_options], _2, onCleanup) => {
    if (!(raw_targets === null || raw_targets === void 0 ? void 0 : raw_targets.length) || !(raw_events === null || raw_events === void 0 ? void 0 : raw_events.length) || !(raw_listeners === null || raw_listeners === void 0 ? void 0 : raw_listeners.length)) return;
    const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
    const cleanups = raw_targets.flatMap((el) => raw_events.flatMap((event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))));
    onCleanup(() => {
      cleanups.forEach((fn2) => fn2());
    });
  }, { flush: "post" });
}
function useRafFn(fn2, options = {}) {
  const { immediate = true, fpsLimit = null, window: window2 = defaultWindow, once = false } = options;
  const isActive = shallowRef(false);
  const intervalLimit = computed(() => {
    const limit = toValue(fpsLimit);
    return limit ? 1e3 / limit : null;
  });
  let previousFrameTimestamp = 0;
  let rafId = null;
  function loop(timestamp2) {
    if (!isActive.value || !window2) return;
    if (!previousFrameTimestamp) previousFrameTimestamp = timestamp2;
    const delta = timestamp2 - previousFrameTimestamp;
    if (intervalLimit.value && delta < intervalLimit.value) {
      rafId = window2.requestAnimationFrame(loop);
      return;
    }
    previousFrameTimestamp = timestamp2;
    fn2({
      delta,
      timestamp: timestamp2
    });
    if (once) {
      isActive.value = false;
      rafId = null;
      return;
    }
    rafId = window2.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value && window2) {
      isActive.value = true;
      previousFrameTimestamp = 0;
      rafId = window2.requestAnimationFrame(loop);
    }
  }
  function pause() {
    isActive.value = false;
    if (rafId != null && window2) {
      window2.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }
  if (immediate) resume();
  tryOnScopeDispose(pause);
  return {
    isActive: shallowReadonly(isActive),
    pause,
    resume
  };
}
var ssrWidthSymbol = Symbol("vueuse-ssr-width");
var _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey = "__vueuse_ssr_handlers__";
var handlers = getHandlers();
function getHandlers() {
  if (!(globalKey in _global)) _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
var StorageSerializers = {
  boolean: {
    read: (v2) => v2 === "true",
    write: (v2) => String(v2)
  },
  object: {
    read: (v2) => JSON.parse(v2),
    write: (v2) => JSON.stringify(v2)
  },
  number: {
    read: (v2) => Number.parseFloat(v2),
    write: (v2) => String(v2)
  },
  any: {
    read: (v2) => v2,
    write: (v2) => String(v2)
  },
  string: {
    read: (v2) => v2,
    write: (v2) => String(v2)
  },
  map: {
    read: (v2) => new Map(JSON.parse(v2)),
    write: (v2) => JSON.stringify(Array.from(v2.entries()))
  },
  set: {
    read: (v2) => new Set(JSON.parse(v2)),
    write: (v2) => JSON.stringify(Array.from(v2))
  },
  date: {
    read: (v2) => new Date(v2),
    write: (v2) => v2.toISOString()
  }
};
var customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
  var _options$serializer;
  const { flush = "pre", deep = true, listenToStorageChanges = true, writeDefaults = true, mergeDefaults = false, shallow, window: window2 = defaultWindow, eventFilter, onError = (e3) => {
    console.error(e3);
  }, initOnMounted } = options;
  const data = (shallow ? shallowRef : ref)(typeof defaults === "function" ? defaults() : defaults);
  const keyComputed = computed(() => toValue(key));
  if (!storage) try {
    storage = getSSRHandler("getDefaultStorage", () => defaultWindow === null || defaultWindow === void 0 ? void 0 : defaultWindow.localStorage)();
  } catch (e3) {
    onError(e3);
  }
  if (!storage) return data;
  const rawInit = toValue(defaults);
  const type = guessSerializerType(rawInit);
  const serializer = (_options$serializer = options.serializer) !== null && _options$serializer !== void 0 ? _options$serializer : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(data, (newValue) => write(newValue), {
    flush,
    deep,
    eventFilter
  });
  watch(keyComputed, () => update(), { flush });
  let firstMounted = false;
  const onStorageEvent = (ev) => {
    if (initOnMounted && !firstMounted) return;
    update(ev);
  };
  const onStorageCustomEvent = (ev) => {
    if (initOnMounted && !firstMounted) return;
    updateFromCustomEvent(ev);
  };
  if (window2 && listenToStorageChanges) if (storage instanceof Storage) useEventListener(window2, "storage", onStorageEvent, { passive: true });
  else useEventListener(window2, customStorageEventName, onStorageCustomEvent);
  if (initOnMounted) tryOnMounted(() => {
    firstMounted = true;
    update();
  });
  else update();
  function dispatchWriteEvent(oldValue, newValue) {
    if (window2) {
      const payload = {
        key: keyComputed.value,
        oldValue,
        newValue,
        storageArea: storage
      };
      window2.dispatchEvent(storage instanceof Storage ? new StorageEvent("storage", payload) : new CustomEvent(customStorageEventName, { detail: payload }));
    }
  }
  function write(v2) {
    try {
      const oldValue = storage.getItem(keyComputed.value);
      if (v2 == null) {
        dispatchWriteEvent(oldValue, null);
        storage.removeItem(keyComputed.value);
      } else {
        const serialized = serializer.write(v2);
        if (oldValue !== serialized) {
          storage.setItem(keyComputed.value, serialized);
          dispatchWriteEvent(oldValue, serialized);
        }
      }
    } catch (e3) {
      onError(e3);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(keyComputed.value);
    if (rawValue == null) {
      if (writeDefaults && rawInit != null) storage.setItem(keyComputed.value, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function") return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value)) return {
        ...rawInit,
        ...value
      };
      return value;
    } else if (typeof rawValue !== "string") return rawValue;
    else return serializer.read(rawValue);
  }
  function update(event) {
    if (event && event.storageArea !== storage) return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== keyComputed.value) return;
    pauseWatch();
    try {
      const serializedData = serializer.write(data.value);
      if (event === void 0 || (event === null || event === void 0 ? void 0 : event.newValue) !== serializedData) data.value = read(event);
    } catch (e3) {
      onError(e3);
    } finally {
      if (event) nextTick(resumeWatch);
      else resumeWatch();
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  return data;
}
function getDefaultScheduler$5(options) {
  if ("interval" in options || "immediate" in options) {
    const { interval = "requestAnimationFrame", immediate = true } = options;
    return interval === "requestAnimationFrame" ? (fn2) => useRafFn(fn2, { immediate }) : (fn2) => useIntervalFn(fn2, interval, options);
  }
  return useRafFn;
}
function useNow(options = {}) {
  const { controls: exposeControls = false, scheduler = getDefaultScheduler$5(options) } = options;
  const now = shallowRef(/* @__PURE__ */ new Date());
  const update = () => now.value = /* @__PURE__ */ new Date();
  const controls = scheduler(update);
  if (exposeControls) return {
    now,
    ...controls
  };
  else return now;
}
var defaultState = {
  x: 0,
  y: 0,
  pointerId: 0,
  pressure: 0,
  tiltX: 0,
  tiltY: 0,
  width: 0,
  height: 0,
  twist: 0,
  pointerType: null
};
var keys = Object.keys(defaultState);
function useScriptTag(src, onLoaded = noop, options = {}) {
  const { immediate = true, manual = false, type = "text/javascript", async = true, crossOrigin, referrerPolicy, noModule, defer, document: document2 = defaultDocument, attrs = {}, nonce = void 0 } = options;
  const scriptTag = shallowRef(null);
  let _promise = null;
  const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
    const resolveWithElement = (el2) => {
      scriptTag.value = el2;
      resolve(el2);
      return el2;
    };
    if (!document2) {
      resolve(false);
      return;
    }
    let shouldAppend = false;
    let el = document2.querySelector(`script[src="${toValue(src)}"]`);
    if (!el) {
      el = document2.createElement("script");
      el.type = type;
      el.async = async;
      el.src = toValue(src);
      if (defer) el.defer = defer;
      if (crossOrigin) el.crossOrigin = crossOrigin;
      if (noModule) el.noModule = noModule;
      if (referrerPolicy) el.referrerPolicy = referrerPolicy;
      if (nonce) el.nonce = nonce;
      Object.entries(attrs).forEach(([name, value]) => el === null || el === void 0 ? void 0 : el.setAttribute(name, value));
      shouldAppend = true;
    } else if (el.hasAttribute("data-loaded")) resolveWithElement(el);
    const listenerOptions = { passive: true };
    useEventListener(el, "error", (event) => reject(event), listenerOptions);
    useEventListener(el, "abort", (event) => reject(event), listenerOptions);
    useEventListener(el, "load", () => {
      el.setAttribute("data-loaded", "true");
      onLoaded(el);
      resolveWithElement(el);
    }, listenerOptions);
    if (shouldAppend) el = document2.head.appendChild(el);
    if (!waitForScriptLoad) resolveWithElement(el);
  });
  const load = (waitForScriptLoad = true) => {
    if (!_promise) _promise = loadScript(waitForScriptLoad);
    return _promise;
  };
  const unload = () => {
    if (!document2) return;
    _promise = null;
    if (scriptTag.value) scriptTag.value = null;
    const el = document2.querySelector(`script[src="${toValue(src)}"]`);
    if (el) document2.head.removeChild(el);
  };
  if (immediate && !manual) tryOnMounted(load);
  if (!manual) tryOnUnmounted(unload);
  return {
    scriptTag,
    load,
    unload
  };
}
var _id = 0;
var _refCount = /* @__PURE__ */ new WeakMap();
function useStyleTag(css, options = {}) {
  const isLoaded = shallowRef(false);
  const { document: document2 = defaultDocument, immediate = true, manual = false, id = `vueuse_styletag_${++_id}` } = options;
  const cssRef = shallowRef(css);
  let stop2 = () => {
  };
  const load = () => {
    var _refCount$get;
    if (!document2) return;
    const el = document2.getElementById(id) || document2.createElement("style");
    if (!el.isConnected) {
      el.id = id;
      if (options.nonce) el.nonce = options.nonce;
      if (options.media) el.media = options.media;
      document2.head.appendChild(el);
    }
    if (isLoaded.value) return;
    _refCount.set(el, ((_refCount$get = _refCount.get(el)) !== null && _refCount$get !== void 0 ? _refCount$get : 0) + 1);
    stop2 = watch(cssRef, (value) => {
      el.textContent = value;
    }, { immediate: true });
    isLoaded.value = true;
  };
  const unload = () => {
    if (!document2 || !isLoaded.value) return;
    stop2();
    const el = document2.getElementById(id);
    if (el) {
      var _refCount$get2;
      const count = ((_refCount$get2 = _refCount.get(el)) !== null && _refCount$get2 !== void 0 ? _refCount$get2 : 1) - 1;
      if (count <= 0) {
        _refCount.delete(el);
        document2.head.removeChild(el);
      } else _refCount.set(el, count);
    }
    isLoaded.value = false;
  };
  if (immediate && !manual) tryOnMounted(load);
  if (!manual) tryOnScopeDispose(unload);
  return {
    id,
    css: cssRef,
    unload,
    load,
    isLoaded: shallowReadonly(isLoaded)
  };
}
var DEFAULT_UNITS = [
  {
    max: 6e4,
    value: 1e3,
    name: "second"
  },
  {
    max: 276e4,
    value: 6e4,
    name: "minute"
  },
  {
    max: 72e6,
    value: 36e5,
    name: "hour"
  },
  {
    max: 5184e5,
    value: 864e5,
    name: "day"
  },
  {
    max: 24192e5,
    value: 6048e5,
    name: "week"
  },
  {
    max: 28512e6,
    value: 2592e6,
    name: "month"
  },
  {
    max: Number.POSITIVE_INFINITY,
    value: 31536e6,
    name: "year"
  }
];
var TransitionPresets = Object.assign({}, { linear: identity }, {
  easeInSine: [
    0.12,
    0,
    0.39,
    0
  ],
  easeOutSine: [
    0.61,
    1,
    0.88,
    1
  ],
  easeInOutSine: [
    0.37,
    0,
    0.63,
    1
  ],
  easeInQuad: [
    0.11,
    0,
    0.5,
    0
  ],
  easeOutQuad: [
    0.5,
    1,
    0.89,
    1
  ],
  easeInOutQuad: [
    0.45,
    0,
    0.55,
    1
  ],
  easeInCubic: [
    0.32,
    0,
    0.67,
    0
  ],
  easeOutCubic: [
    0.33,
    1,
    0.68,
    1
  ],
  easeInOutCubic: [
    0.65,
    0,
    0.35,
    1
  ],
  easeInQuart: [
    0.5,
    0,
    0.75,
    0
  ],
  easeOutQuart: [
    0.25,
    1,
    0.5,
    1
  ],
  easeInOutQuart: [
    0.76,
    0,
    0.24,
    1
  ],
  easeInQuint: [
    0.64,
    0,
    0.78,
    0
  ],
  easeOutQuint: [
    0.22,
    1,
    0.36,
    1
  ],
  easeInOutQuint: [
    0.83,
    0,
    0.17,
    1
  ],
  easeInExpo: [
    0.7,
    0,
    0.84,
    0
  ],
  easeOutExpo: [
    0.16,
    1,
    0.3,
    1
  ],
  easeInOutExpo: [
    0.87,
    0,
    0.13,
    1
  ],
  easeInCirc: [
    0.55,
    0,
    1,
    0.45
  ],
  easeOutCirc: [
    0,
    0.55,
    0.45,
    1
  ],
  easeInOutCirc: [
    0.85,
    0,
    0.15,
    1
  ],
  easeInBack: [
    0.36,
    0,
    0.66,
    -0.56
  ],
  easeOutBack: [
    0.34,
    1.56,
    0.64,
    1
  ],
  easeInOutBack: [
    0.68,
    -0.6,
    0.32,
    1.6
  ]
});

// node_modules/marked/lib/marked.esm.js
function C() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var R = C();
function j(l4) {
  R = l4;
}
var z = { exec: () => null };
function A(l4) {
  let e3 = [];
  return (t3) => {
    let n3 = Math.max(0, Math.min(3, t3 - 1)), s2 = e3[n3];
    return s2 || (s2 = l4(n3), e3[n3] = s2), s2;
  };
}
function d2(l4, e3 = "") {
  let t3 = typeof l4 == "string" ? l4 : l4.source, n3 = { replace: (s2, r3) => {
    let i2 = typeof r3 == "string" ? r3 : r3.source;
    return i2 = i2.replace(m2.caret, "$1"), t3 = t3.replace(s2, i2), n3;
  }, getRegex: () => new RegExp(t3, e3) };
  return n3;
}
var Te = ((l4 = "") => {
  try {
    return !!new RegExp("(?<=1)(?<!1)" + l4);
  } catch {
    return false;
  }
})();
var m2 = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (l4) => new RegExp(`^( {0,3}${l4})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: A((l4) => new RegExp(`^ {0,${l4}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)), hrRegex: A((l4) => new RegExp(`^ {0,${l4}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)), fencesBeginRegex: A((l4) => new RegExp(`^ {0,${l4}}(?:\`\`\`|~~~)`)), headingBeginRegex: A((l4) => new RegExp(`^ {0,${l4}}#`)), htmlBeginRegex: A((l4) => new RegExp(`^ {0,${l4}}<(?:[a-z].*>|!--)`, "i")), blockquoteBeginRegex: A((l4) => new RegExp(`^ {0,${l4}}>`)) };
var Oe = /^(?:[ \t]*(?:\n|$))+/;
var we = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var ye = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var q = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var Pe = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var U = / {0,3}(?:[*+-]|\d{1,9}[.)])/;
var oe = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var ae = d2(oe).replace(/bull/g, U).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var Se = d2(oe).replace(/bull/g, U).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var K = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/;
var _e = /^[^\n]+/;
var W = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/;
var $e = d2(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", W).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var Le = d2(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g, U).getRegex();
var Q = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var X = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var Me = d2("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", X).replace("tag", Q).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var le = (l4) => d2(K).replace("hr", q).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", l4).replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Q).getRegex();
var ze = le(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/);
var Ee = le(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/);
var Ce = d2(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Ee).getRegex();
var J = { blockquote: Ce, code: we, def: $e, fences: ye, heading: Pe, hr: q, html: Me, lheading: ae, list: Le, newline: Oe, paragraph: ze, table: z, text: _e };
var se = d2("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", q).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Q).getRegex();
var Ae = { ...J, lheading: Se, table: se, paragraph: d2(K).replace("hr", q).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", se).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Q).getRegex() };
var Ie = { ...J, html: d2(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", X).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: z, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: d2(K).replace("hr", q).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ae).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() };
var Be = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var De = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var pe = /^( {2,}|\\)\n(?!\s*$)/;
var qe = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var _ = /[\p{P}\p{S}]/u;
var I = /[\s\p{P}\p{S}]/u;
var v = /[^\s\p{P}\p{S}]/u;
var ve = d2(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, I).getRegex();
var He = /[\p{Pi}\p{Ps}"']/u;
var ue = /(?!~)[\p{P}\p{S}]/u;
var Ze = /(?!~)[\s\p{P}\p{S}]/u;
var Ge = /(?:[^\s\p{P}\p{S}]|~)/u;
var Qe = d2(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Te ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex();
var ce = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/;
var Ne = d2(ce, "u").replace(/punct/g, _).getRegex();
var je = d2(ce, "u").replace(/punct/g, ue).getRegex();
var Fe = /^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/;
var Ue = d2(Fe, "u").replace(/openQuote/g, He).replace(/punct/g, _).getRegex();
var he = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var Ke = d2(he, "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, I).replace(/punct/g, _).getRegex();
var We = d2(he, "gu").replace(/notPunctSpace/g, Ge).replace(/punctSpace/g, Ze).replace(/punct/g, ue).getRegex();
var Xe = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)";
var Je = d2(Xe, "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, I).replace(/punct/g, _).getRegex();
var Ve = d2("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, I).replace(/punct/g, _).getRegex();
var Ye = "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)";
var et = d2(Ye, "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, I).replace(/punct/g, _).getRegex();
var tt = d2(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, _).getRegex();
var nt = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)";
var rt = d2(nt, "gu").replace(/notPunctSpace/g, v).replace(/punctSpace/g, I).replace(/punct/g, _).getRegex();
var st = d2(/\\(punct)/, "gu").replace(/punct/g, _).getRegex();
var it = d2(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var ot = d2(X).replace("(?:-->|$)", "-->").getRegex();
var at = d2("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", ot).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var G = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/;
var lt = d2(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", G).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var de = d2(/^!?\[(label)\]\[(ref)\]/).replace("label", G).replace("ref", W).getRegex();
var ke = d2(/^!?\[(ref)\](?:\[\])?/).replace("ref", W).getRegex();
var pt = d2("reflink|nolink(?!\\()", "g").replace("reflink", de).replace("nolink", ke).getRegex();
var ie = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/;
var V = { _backpedal: z, anyPunctuation: st, autolink: it, blockSkip: Qe, br: pe, code: De, del: z, delLDelim: z, delRDelim: z, emStrongLDelim: Ne, emStrongRDelimAst: Ke, emStrongRDelimUnd: Ve, escape: Be, link: lt, nolink: ke, punctuation: ve, reflink: de, reflinkSearch: pt, tag: at, text: qe, url: z };
var ut = { ...V, emStrongLDelim: Ue, emStrongRDelimAst: Je, emStrongRDelimUnd: et, link: d2(/^!?\[(label)\]\((.*?)\)/).replace("label", G).getRegex(), reflink: d2(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", G).getRegex() };
var F = { ...V, emStrongRDelimAst: We, emStrongLDelim: je, delLDelim: tt, delRDelim: rt, url: d2(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", ie).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: d2(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", ie).getRegex() };
var ct = { ...F, br: d2(pe).replace("{2,}", "*").getRegex(), text: d2(F.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() };
var H = { normal: J, gfm: Ae, pedantic: Ie };
var B = { normal: V, gfm: F, breaks: ct, pedantic: ut };
var ht = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var ge = (l4) => ht[l4];
function O(l4, e3) {
  if (e3) {
    if (m2.escapeTest.test(l4)) return l4.replace(m2.escapeReplace, ge);
  } else if (m2.escapeTestNoEncode.test(l4)) return l4.replace(m2.escapeReplaceNoEncode, ge);
  return l4;
}
function Y(l4) {
  try {
    l4 = encodeURI(l4).replace(m2.percentDecode, "%");
  } catch {
    return null;
  }
  return l4;
}
function ee(l4, e3) {
  var _a2;
  let t3 = l4.replace(m2.findPipe, (r3, i2, o3) => {
    let p2 = false, a2 = i2;
    for (; --a2 >= 0 && o3[a2] === "\\"; ) p2 = !p2;
    return p2 ? "|" : " |";
  }), n3 = t3.split(m2.splitPipe), s2 = 0;
  if (n3[0].trim() || n3.shift(), n3.length > 0 && !((_a2 = n3.at(-1)) == null ? void 0 : _a2.trim()) && n3.pop(), e3) if (n3.length > e3) n3.splice(e3);
  else for (; n3.length < e3; ) n3.push("");
  for (; s2 < n3.length; s2++) n3[s2] = n3[s2].trim().replace(m2.slashPipe, "|");
  return n3;
}
function $(l4, e3, t3) {
  let n3 = l4.length;
  if (n3 === 0) return "";
  let s2 = 0;
  for (; s2 < n3; ) {
    let r3 = l4.charAt(n3 - s2 - 1);
    if (r3 === e3 && !t3) s2++;
    else if (r3 !== e3 && t3) s2++;
    else break;
  }
  return l4.slice(0, n3 - s2);
}
function te(l4) {
  let e3 = l4.split(`
`), t3 = e3.length - 1;
  for (; t3 >= 0 && m2.blankLine.test(e3[t3]); ) t3--;
  return e3.length - t3 <= 2 ? l4 : e3.slice(0, t3 + 1).join(`
`);
}
function fe(l4, e3) {
  if (l4.indexOf(e3[1]) === -1) return -1;
  let t3 = 0;
  for (let n3 = 0; n3 < l4.length; n3++) if (l4[n3] === "\\") n3++;
  else if (l4[n3] === e3[0]) t3++;
  else if (l4[n3] === e3[1] && (t3--, t3 < 0)) return n3;
  return t3 > 0 ? -2 : -1;
}
function me(l4, e3 = 0) {
  let t3 = e3, n3 = "";
  for (let s2 of l4) if (s2 === "	") {
    let r3 = 4 - t3 % 4;
    n3 += " ".repeat(r3), t3 += r3;
  } else n3 += s2, t3++;
  return n3;
}
function xe(l4, e3, t3, n3, s2) {
  let r3 = e3.href, i2 = e3.title || null, o3 = l4[1].replace(s2.other.outputLinkReplace, "$1");
  n3.state.inLink = true;
  let p2 = { type: l4[0].charAt(0) === "!" ? "image" : "link", raw: t3, href: r3, title: i2, text: o3, tokens: n3.inlineTokens(o3) };
  return n3.state.inLink = false, p2;
}
function dt(l4, e3, t3) {
  let n3 = l4.match(t3.other.indentCodeCompensation);
  if (n3 === null) return e3;
  let s2 = n3[1];
  return e3.split(`
`).map((r3) => {
    let i2 = r3.match(t3.other.beginningSpace);
    if (i2 === null) return r3;
    let [o3] = i2;
    return o3.length >= s2.length ? r3.slice(s2.length) : r3;
  }).join(`
`);
}
var y = class {
  constructor(e3) {
    __publicField(this, "options");
    __publicField(this, "rules");
    __publicField(this, "lexer");
    this.options = e3 || R;
  }
  space(e3) {
    let t3 = this.rules.block.newline.exec(e3);
    if (t3 && t3[0].length > 0) return { type: "space", raw: t3[0] };
  }
  code(e3) {
    let t3 = this.rules.block.code.exec(e3);
    if (t3) {
      let n3 = this.options.pedantic ? t3[0] : te(t3[0]), s2 = n3.replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: n3, codeBlockStyle: "indented", text: s2 };
    }
  }
  fences(e3) {
    let t3 = this.rules.block.fences.exec(e3);
    if (t3) {
      let n3 = t3[0], s2 = dt(n3, t3[3] || "", this.rules);
      return { type: "code", raw: n3, lang: t3[2] ? t3[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t3[2], text: s2 };
    }
  }
  heading(e3) {
    let t3 = this.rules.block.heading.exec(e3);
    if (t3) {
      let n3 = t3[2].trim();
      if (this.rules.other.endingHash.test(n3)) {
        let s2 = $(n3, "#");
        (this.options.pedantic || !s2 || this.rules.other.endingSpaceChar.test(s2)) && (n3 = s2.trim());
      }
      return { type: "heading", raw: $(t3[0], `
`), depth: t3[1].length, text: n3, tokens: this.lexer.inline(n3) };
    }
  }
  hr(e3) {
    let t3 = this.rules.block.hr.exec(e3);
    if (t3) return { type: "hr", raw: $(t3[0], `
`) };
  }
  blockquote(e3) {
    let t3 = this.rules.block.blockquote.exec(e3);
    if (t3) {
      let n3 = $(t3[0], `
`).split(`
`), s2 = "", r3 = "", i2 = [];
      for (; n3.length > 0; ) {
        let o3 = false, p2 = [], a2;
        for (a2 = 0; a2 < n3.length; a2++) if (this.rules.other.blockquoteStart.test(n3[a2])) p2.push(n3[a2]), o3 = true;
        else if (!o3) p2.push(n3[a2]);
        else break;
        n3 = n3.slice(a2);
        let u2 = p2.join(`
`), c2 = u2.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        s2 = s2 ? `${s2}
${u2}` : u2, r3 = r3 ? `${r3}
${c2}` : c2;
        let h3 = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(c2, i2, true), this.lexer.state.top = h3, n3.length === 0) break;
        let k = i2.at(-1);
        if ((k == null ? void 0 : k.type) === "code") break;
        if ((k == null ? void 0 : k.type) === "blockquote") {
          let T = k, g = n3.join(`
`), w = T.raw + `
` + g.replace(this.rules.other.blockquoteSetextReplace2, ""), M = this.blockquote(w);
          i2[i2.length - 1] = M, s2 = `${s2}
${g}`, r3 = r3.substring(0, r3.length - T.text.length) + M.text;
          break;
        } else if ((k == null ? void 0 : k.type) === "list") {
          let T = k, g = T.raw + `
` + n3.join(`
`), w = this.list(g);
          i2[i2.length - 1] = w, s2 = s2.substring(0, s2.length - k.raw.length) + w.raw, r3 = r3.substring(0, r3.length - T.raw.length) + w.raw, n3 = g.substring(i2.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: s2, tokens: i2, text: r3 };
    }
  }
  list(e3) {
    let t3 = this.rules.block.list.exec(e3);
    if (t3) {
      let n3 = t3[1].trim(), s2 = n3.length > 1, r3 = { type: "list", raw: "", ordered: s2, start: s2 ? +n3.slice(0, -1) : "", loose: false, items: [] };
      n3 = s2 ? `\\d{1,9}\\${n3.slice(-1)}` : `\\${n3}`, this.options.pedantic && (n3 = s2 ? n3 : "[*+-]");
      let i2 = this.rules.other.listItemRegex(n3), o3 = false;
      for (; e3; ) {
        let a2 = false, u2 = "", c2 = "";
        if (!(t3 = i2.exec(e3)) || this.rules.block.hr.test(e3)) break;
        u2 = t3[0], e3 = e3.substring(u2.length);
        let h3 = me(t3[2].split(`
`, 1)[0], t3[1].length), k = e3.split(`
`, 1)[0], T = !h3.trim(), g = 0;
        if (this.options.pedantic ? (g = 2, c2 = h3.trimStart()) : T ? g = t3[1].length + 1 : (g = h3.search(this.rules.other.nonSpaceChar), g = g > 4 ? 1 : g, c2 = h3.slice(g), g += t3[1].length), T && this.rules.other.blankLine.test(k) && (u2 += k + `
`, e3 = e3.substring(k.length + 1), a2 = true), !a2) {
          let w = this.rules.other.nextBulletRegex(g), M = this.rules.other.hrRegex(g), ne = this.rules.other.fencesBeginRegex(g), re = this.rules.other.headingBeginRegex(g), be2 = this.rules.other.htmlBeginRegex(g), Re2 = this.rules.other.blockquoteBeginRegex(g);
          for (; e3; ) {
            let N = e3.split(`
`, 1)[0], D;
            if (k = N, this.options.pedantic ? (k = k.replace(this.rules.other.listReplaceNesting, "  "), D = k) : D = k.replace(this.rules.other.tabCharGlobal, "    "), ne.test(k) || re.test(k) || be2.test(k) || Re2.test(k) || w.test(k) || M.test(k)) break;
            if (D.search(this.rules.other.nonSpaceChar) >= g || !k.trim()) c2 += `
` + D.slice(g);
            else {
              if (T || h3.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || ne.test(h3) || re.test(h3) || M.test(h3)) break;
              c2 += `
` + k;
            }
            T = !k.trim(), u2 += N + `
`, e3 = e3.substring(N.length + 1), h3 = D.slice(g);
          }
        }
        r3.loose || (o3 ? r3.loose = true : this.rules.other.doubleBlankLine.test(u2) && (o3 = true)), r3.items.push({ type: "list_item", raw: u2, task: !!this.options.gfm && this.rules.other.listIsTask.test(c2), loose: false, text: c2, tokens: [] }), r3.raw += u2;
      }
      let p2 = r3.items.at(-1);
      if (p2) p2.raw = p2.raw.trimEnd(), p2.text = p2.text.trimEnd();
      else return;
      r3.raw = r3.raw.trimEnd();
      for (let a2 of r3.items) if (this.lexer.state.top = false, a2.tokens = this.lexer.blockTokens(a2.text, []), !r3.loose) {
        let u2 = a2.tokens.filter((h3) => h3.type === "space"), c2 = u2.length > 0 && u2.some((h3) => this.rules.other.anyLine.test(h3.raw));
        r3.loose = c2;
      }
      for (let a2 of r3.items) {
        let u2 = a2.tokens[0];
        if (a2.task && ((u2 == null ? void 0 : u2.type) === "text" || (u2 == null ? void 0 : u2.type) === "paragraph")) {
          a2.text = a2.text.replace(this.rules.other.listReplaceTask, ""), u2.raw = u2.raw.replace(this.rules.other.listReplaceTask, ""), u2.text = u2.text.replace(this.rules.other.listReplaceTask, "");
          for (let h3 = this.lexer.inlineQueue.length - 1; h3 >= 0; h3--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[h3].src)) {
            this.lexer.inlineQueue[h3].src = this.lexer.inlineQueue[h3].src.replace(this.rules.other.listReplaceTask, "");
            break;
          }
          let c2 = this.rules.other.listTaskCheckbox.exec(a2.raw);
          if (c2) {
            let h3 = { type: "checkbox", raw: c2[0] + " ", checked: c2[0] !== "[ ]" };
            a2.checked = h3.checked, r3.loose ? a2.tokens[0] && ["paragraph", "text"].includes(a2.tokens[0].type) && "tokens" in a2.tokens[0] && a2.tokens[0].tokens ? (a2.tokens[0].raw = h3.raw + a2.tokens[0].raw, a2.tokens[0].text = h3.raw + a2.tokens[0].text, a2.tokens[0].tokens.unshift(h3)) : a2.tokens.unshift({ type: "paragraph", raw: h3.raw, text: h3.raw, tokens: [h3] }) : a2.tokens.unshift(h3);
          }
        } else a2.task && (a2.task = false);
      }
      if (r3.loose) for (let a2 of r3.items) {
        a2.loose = true;
        for (let u2 of a2.tokens) u2.type === "text" && (u2.type = "paragraph");
      }
      return r3;
    }
  }
  html(e3) {
    let t3 = this.rules.block.html.exec(e3);
    if (t3) {
      let n3 = te(t3[0]);
      return { type: "html", block: true, raw: n3, pre: t3[1] === "pre" || t3[1] === "script" || t3[1] === "style", text: n3 };
    }
  }
  def(e3) {
    let t3 = this.rules.block.def.exec(e3);
    if (t3) {
      let n3 = t3[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s2 = t3[2] ? t3[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r3 = t3[3] ? t3[3].substring(1, t3[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t3[3];
      return { type: "def", tag: n3, raw: $(t3[0], `
`), href: s2, title: r3 };
    }
  }
  table(e3) {
    var _a2;
    let t3 = this.rules.block.table.exec(e3);
    if (!t3 || !this.rules.other.tableDelimiter.test(t3[2])) return;
    let n3 = ee(t3[1]), s2 = t3[2].replace(this.rules.other.tableAlignChars, "").split("|"), r3 = ((_a2 = t3[3]) == null ? void 0 : _a2.trim()) ? t3[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], i2 = { type: "table", raw: $(t3[0], `
`), header: [], align: [], rows: [] };
    if (n3.length === s2.length) {
      for (let o3 of s2) this.rules.other.tableAlignRight.test(o3) ? i2.align.push("right") : this.rules.other.tableAlignCenter.test(o3) ? i2.align.push("center") : this.rules.other.tableAlignLeft.test(o3) ? i2.align.push("left") : i2.align.push(null);
      for (let o3 = 0; o3 < n3.length; o3++) i2.header.push({ text: n3[o3], tokens: this.lexer.inline(n3[o3]), header: true, align: i2.align[o3] });
      for (let o3 of r3) i2.rows.push(ee(o3, i2.header.length).map((p2, a2) => ({ text: p2, tokens: this.lexer.inline(p2), header: false, align: i2.align[a2] })));
      return i2;
    }
  }
  lheading(e3) {
    let t3 = this.rules.block.lheading.exec(e3);
    if (t3) {
      let n3 = t3[1].trim();
      return { type: "heading", raw: $(t3[0], `
`), depth: t3[2].charAt(0) === "=" ? 1 : 2, text: n3, tokens: this.lexer.inline(n3) };
    }
  }
  paragraph(e3) {
    let t3 = this.rules.block.paragraph.exec(e3);
    if (t3) {
      let n3 = t3[1].charAt(t3[1].length - 1) === `
` ? t3[1].slice(0, -1) : t3[1];
      return { type: "paragraph", raw: t3[0], text: n3, tokens: this.lexer.inline(n3) };
    }
  }
  text(e3) {
    let t3 = this.rules.block.text.exec(e3);
    if (t3) return { type: "text", raw: t3[0], text: t3[0], tokens: this.lexer.inline(t3[0]) };
  }
  escape(e3) {
    let t3 = this.rules.inline.escape.exec(e3);
    if (t3) return { type: "escape", raw: t3[0], text: t3[1] };
  }
  tag(e3) {
    let t3 = this.rules.inline.tag.exec(e3);
    if (t3) return !this.lexer.state.inLink && this.rules.other.startATag.test(t3[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t3[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t3[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t3[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t3[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t3[0] };
  }
  link(e3) {
    let t3 = this.rules.inline.link.exec(e3);
    if (t3) {
      let n3 = t3[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n3)) {
        if (!this.rules.other.endAngleBracket.test(n3)) return;
        let i2 = $(n3.slice(0, -1), "\\");
        if ((n3.length - i2.length) % 2 === 0) return;
      } else {
        let i2 = fe(t3[2], "()");
        if (i2 === -2) return;
        if (i2 > -1) {
          let p2 = (t3[0].indexOf("!") === 0 ? 5 : 4) + t3[1].length + i2;
          t3[2] = t3[2].substring(0, i2), t3[0] = t3[0].substring(0, p2).trim(), t3[3] = "";
        }
      }
      let s2 = t3[2], r3 = "";
      if (this.options.pedantic) {
        let i2 = this.rules.other.pedanticHrefTitle.exec(s2);
        i2 && (s2 = i2[1], r3 = i2[3]);
      } else r3 = t3[3] ? t3[3].slice(1, -1) : "";
      return s2 = s2.trim(), this.rules.other.startAngleBracket.test(s2) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n3) ? s2 = s2.slice(1) : s2 = s2.slice(1, -1)), xe(t3, { href: s2 && s2.replace(this.rules.inline.anyPunctuation, "$1"), title: r3 && r3.replace(this.rules.inline.anyPunctuation, "$1") }, t3[0], this.lexer, this.rules);
    }
  }
  reflink(e3, t3) {
    let n3;
    if ((n3 = this.rules.inline.reflink.exec(e3)) || (n3 = this.rules.inline.nolink.exec(e3))) {
      let s2 = (n3[2] || n3[1]).replace(this.rules.other.multipleSpaceGlobal, " "), r3 = t3[s2.toLowerCase()];
      if (!r3) {
        let i2 = n3[0].charAt(0);
        return { type: "text", raw: i2, text: i2 };
      }
      return xe(n3, r3, n3[0], this.lexer, this.rules);
    }
  }
  emStrong(e3, t3, n3 = "") {
    let s2 = this.rules.inline.emStrongLDelim.exec(e3);
    if (!s2 || !s2[1] && !s2[2] && !s2[3] && !s2[4] || s2[4] && n3.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(s2[1] || s2[3] || "") || !n3 || this.rules.inline.punctuation.exec(n3)) {
      let i2 = [...s2[0]].length - 1, o3, p2, a2 = i2, u2 = 0, c2 = s2[0][0], h3 = n3 === c2, k = c2 === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (k.lastIndex = 0, t3 = t3.slice(-1 * e3.length + i2); (s2 = k.exec(t3)) !== null; ) {
        if (o3 = s2[1] || s2[2] || s2[3] || s2[4] || s2[5] || s2[6], !o3) continue;
        if (p2 = [...o3].length, s2[3] || s2[4]) {
          a2 += p2;
          continue;
        } else if (s2[5] || s2[6]) {
          if (i2 % 3 && !((i2 + p2) % 3)) {
            u2 += p2;
            continue;
          }
          if (h3) break;
        }
        if (a2 -= p2, a2 > 0) continue;
        p2 = Math.min(p2, p2 + a2 + u2);
        let T = [...s2[0]][0].length, g = e3.slice(0, i2 + s2.index + T + p2);
        if (Math.min(i2, p2) % 2) {
          let M = g.slice(1, -1);
          return { type: "em", raw: g, text: M, tokens: this.lexer.inlineTokens(M) };
        }
        let w = g.slice(2, -2);
        return { type: "strong", raw: g, text: w, tokens: this.lexer.inlineTokens(w) };
      }
    }
  }
  codespan(e3) {
    let t3 = this.rules.inline.code.exec(e3);
    if (t3) {
      let n3 = t3[2].replace(this.rules.other.newLineCharGlobal, " "), s2 = this.rules.other.nonSpaceChar.test(n3), r3 = this.rules.other.startingSpaceChar.test(n3) && this.rules.other.endingSpaceChar.test(n3);
      return s2 && r3 && (n3 = n3.substring(1, n3.length - 1)), { type: "codespan", raw: t3[0], text: n3 };
    }
  }
  br(e3) {
    let t3 = this.rules.inline.br.exec(e3);
    if (t3) return { type: "br", raw: t3[0] };
  }
  del(e3, t3, n3 = "") {
    let s2 = this.rules.inline.delLDelim.exec(e3);
    if (!s2) return;
    if (!(s2[1] || "") || !n3 || this.rules.inline.punctuation.exec(n3)) {
      let i2 = [...s2[0]].length - 1, o3, p2, a2 = i2, u2 = this.rules.inline.delRDelim;
      for (u2.lastIndex = 0, t3 = t3.slice(-1 * e3.length + i2); (s2 = u2.exec(t3)) !== null; ) {
        if (o3 = s2[1] || s2[2] || s2[3] || s2[4] || s2[5] || s2[6], !o3 || (p2 = [...o3].length, p2 !== i2)) continue;
        if (s2[3] || s2[4]) {
          a2 += p2;
          continue;
        }
        if (a2 -= p2, a2 > 0) continue;
        p2 = Math.min(p2, p2 + a2);
        let c2 = [...s2[0]][0].length, h3 = e3.slice(0, i2 + s2.index + c2 + p2), k = h3.slice(i2, -i2);
        return { type: "del", raw: h3, text: k, tokens: this.lexer.inlineTokens(k) };
      }
    }
  }
  autolink(e3) {
    let t3 = this.rules.inline.autolink.exec(e3);
    if (t3) {
      let n3, s2;
      return t3[2] === "@" ? (n3 = t3[1], s2 = "mailto:" + n3) : (n3 = t3[1], s2 = n3), { type: "link", raw: t3[0], text: n3, href: s2, tokens: [{ type: "text", raw: n3, text: n3 }] };
    }
  }
  url(e3) {
    var _a2;
    let t3;
    if (t3 = this.rules.inline.url.exec(e3)) {
      let n3, s2;
      if (t3[2] === "@") n3 = t3[0], s2 = "mailto:" + n3;
      else {
        let r3;
        do
          r3 = t3[0], t3[0] = ((_a2 = this.rules.inline._backpedal.exec(t3[0])) == null ? void 0 : _a2[0]) ?? "";
        while (r3 !== t3[0]);
        n3 = t3[0], t3[1] === "www." ? s2 = "http://" + t3[0] : s2 = t3[0];
      }
      return { type: "link", raw: t3[0], text: n3, href: s2, tokens: [{ type: "text", raw: n3, text: n3 }] };
    }
  }
  inlineText(e3) {
    let t3 = this.rules.inline.text.exec(e3);
    if (t3) {
      let n3 = this.lexer.state.inRawBlock;
      return { type: "text", raw: t3[0], text: t3[0], escaped: n3 };
    }
  }
};
var x = class l2 {
  constructor(e3) {
    __publicField(this, "tokens");
    __publicField(this, "options");
    __publicField(this, "state");
    __publicField(this, "inlineQueue");
    __publicField(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e3 || R, this.options.tokenizer = this.options.tokenizer || new y(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let t3 = { other: m2, block: H.normal, inline: B.normal };
    this.options.pedantic ? (t3.block = H.pedantic, t3.inline = B.pedantic) : this.options.gfm && (t3.block = H.gfm, this.options.breaks ? t3.inline = B.breaks : t3.inline = B.gfm), this.tokenizer.rules = t3;
  }
  static get rules() {
    return { block: H, inline: B };
  }
  static lex(e3, t3) {
    return new l2(t3).lex(e3);
  }
  static lexInline(e3, t3) {
    return new l2(t3).inlineTokens(e3);
  }
  lex(e3) {
    e3 = e3.replace(m2.carriageReturn, `
`), this.blockTokens(e3, this.tokens);
    for (let t3 = 0; t3 < this.inlineQueue.length; t3++) {
      let n3 = this.inlineQueue[t3];
      this.inlineTokens(n3.src, n3.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e3, t3 = [], n3 = false) {
    var _a2, _b, _c;
    this.tokenizer.lexer = this, this.options.pedantic && (e3 = e3.replace(m2.tabCharGlobal, "    ").replace(m2.spaceLine, ""));
    let s2 = 1 / 0;
    for (; e3; ) {
      if (e3.length < s2) s2 = e3.length;
      else {
        this.infiniteLoopError(e3.charCodeAt(0));
        break;
      }
      let r3;
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.block) == null ? void 0 : _b.some((o3) => (r3 = o3.call({ lexer: this }, e3, t3)) ? (e3 = e3.substring(r3.raw.length), t3.push(r3), true) : false)) continue;
      if (r3 = this.tokenizer.space(e3)) {
        e3 = e3.substring(r3.raw.length);
        let o3 = t3.at(-1);
        r3.raw.length === 1 && o3 !== void 0 ? o3.raw += `
` : t3.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.code(e3)) {
        e3 = e3.substring(r3.raw.length);
        let o3 = t3.at(-1);
        (o3 == null ? void 0 : o3.type) === "paragraph" || (o3 == null ? void 0 : o3.type) === "text" ? (o3.raw += (o3.raw.endsWith(`
`) ? "" : `
`) + r3.raw, o3.text += `
` + r3.text, this.inlineQueue.at(-1).src = o3.text) : t3.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.fences(e3)) {
        e3 = e3.substring(r3.raw.length), t3.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.heading(e3)) {
        e3 = e3.substring(r3.raw.length), t3.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.hr(e3)) {
        e3 = e3.substring(r3.raw.length), t3.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.blockquote(e3)) {
        e3 = e3.substring(r3.raw.length), t3.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.list(e3)) {
        e3 = e3.substring(r3.raw.length), t3.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.html(e3)) {
        e3 = e3.substring(r3.raw.length), t3.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.def(e3)) {
        e3 = e3.substring(r3.raw.length);
        let o3 = t3.at(-1);
        (o3 == null ? void 0 : o3.type) === "paragraph" || (o3 == null ? void 0 : o3.type) === "text" ? (o3.raw += (o3.raw.endsWith(`
`) ? "" : `
`) + r3.raw, o3.text += `
` + r3.raw, this.inlineQueue.at(-1).src = o3.text) : this.tokens.links[r3.tag] || (this.tokens.links[r3.tag] = { href: r3.href, title: r3.title }, t3.push(r3));
        continue;
      }
      if (r3 = this.tokenizer.table(e3)) {
        e3 = e3.substring(r3.raw.length), t3.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.lheading(e3)) {
        e3 = e3.substring(r3.raw.length), t3.push(r3);
        continue;
      }
      let i2 = e3;
      if ((_c = this.options.extensions) == null ? void 0 : _c.startBlock) {
        let o3 = 1 / 0, p2 = e3.slice(1), a2;
        this.options.extensions.startBlock.forEach((u2) => {
          a2 = u2.call({ lexer: this }, p2), typeof a2 == "number" && a2 >= 0 && (o3 = Math.min(o3, a2));
        }), o3 < 1 / 0 && o3 >= 0 && (i2 = e3.substring(0, o3 + 1));
      }
      if (this.state.top && (r3 = this.tokenizer.paragraph(i2))) {
        let o3 = t3.at(-1);
        n3 && (o3 == null ? void 0 : o3.type) === "paragraph" ? (o3.raw += (o3.raw.endsWith(`
`) ? "" : `
`) + r3.raw, o3.text += `
` + r3.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o3.text) : t3.push(r3), n3 = i2.length !== e3.length, e3 = e3.substring(r3.raw.length);
        continue;
      }
      if (r3 = this.tokenizer.text(e3)) {
        e3 = e3.substring(r3.raw.length);
        let o3 = t3.at(-1);
        (o3 == null ? void 0 : o3.type) === "text" ? (o3.raw += (o3.raw.endsWith(`
`) ? "" : `
`) + r3.raw, o3.text += `
` + r3.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o3.text) : t3.push(r3);
        continue;
      }
      if (e3) {
        this.infiniteLoopError(e3.charCodeAt(0));
        break;
      }
    }
    return this.state.top = true, t3;
  }
  inline(e3, t3 = []) {
    return this.inlineQueue.push({ src: e3, tokens: t3 }), t3;
  }
  inlineTokens(e3, t3 = []) {
    var _a2, _b, _c, _d, _e3;
    this.tokenizer.lexer = this;
    let n3 = e3;
    if (this.tokens.links) {
      let o3 = Object.keys(this.tokens.links);
      o3.length > 0 && (n3 = n3.replace(this.tokenizer.rules.inline.reflinkSearch, (p2) => o3.includes(p2.slice(p2.lastIndexOf("[") + 1, -1)) ? "[" + "a".repeat(p2.length - 2) + "]" : p2));
    }
    n3 = n3.replace(this.tokenizer.rules.inline.anyPunctuation, (o3) => "+".repeat(o3.length)), n3 = n3.replace(this.tokenizer.rules.inline.blockSkip, (o3, p2, a2) => {
      let u2 = a2 ? a2.length : 0;
      return o3.slice(0, u2) + "[" + "a".repeat(o3.length - u2 - 2) + "]";
    }), n3 = ((_b = (_a2 = this.options.hooks) == null ? void 0 : _a2.emStrongMask) == null ? void 0 : _b.call({ lexer: this }, n3)) ?? n3;
    let s2 = false, r3 = "", i2 = 1 / 0;
    for (; e3; ) {
      if (e3.length < i2) i2 = e3.length;
      else {
        this.infiniteLoopError(e3.charCodeAt(0));
        break;
      }
      s2 || (r3 = ""), s2 = false;
      let o3;
      if ((_d = (_c = this.options.extensions) == null ? void 0 : _c.inline) == null ? void 0 : _d.some((a2) => (o3 = a2.call({ lexer: this }, e3, t3)) ? (e3 = e3.substring(o3.raw.length), t3.push(o3), true) : false)) continue;
      if (o3 = this.tokenizer.escape(e3)) {
        e3 = e3.substring(o3.raw.length), t3.push(o3);
        continue;
      }
      if (o3 = this.tokenizer.tag(e3)) {
        e3 = e3.substring(o3.raw.length), t3.push(o3);
        continue;
      }
      if (o3 = this.tokenizer.link(e3)) {
        e3 = e3.substring(o3.raw.length), t3.push(o3);
        continue;
      }
      if (o3 = this.tokenizer.reflink(e3, this.tokens.links)) {
        e3 = e3.substring(o3.raw.length);
        let a2 = t3.at(-1);
        o3.type === "text" && (a2 == null ? void 0 : a2.type) === "text" ? (a2.raw += o3.raw, a2.text += o3.text) : t3.push(o3);
        continue;
      }
      if (o3 = this.tokenizer.emStrong(e3, n3, r3)) {
        e3 = e3.substring(o3.raw.length), t3.push(o3);
        continue;
      }
      if (o3 = this.tokenizer.codespan(e3)) {
        e3 = e3.substring(o3.raw.length), t3.push(o3);
        continue;
      }
      if (o3 = this.tokenizer.br(e3)) {
        e3 = e3.substring(o3.raw.length), t3.push(o3);
        continue;
      }
      if (o3 = this.tokenizer.del(e3, n3, r3)) {
        e3 = e3.substring(o3.raw.length), t3.push(o3);
        continue;
      }
      if (o3 = this.tokenizer.autolink(e3)) {
        e3 = e3.substring(o3.raw.length), t3.push(o3);
        continue;
      }
      if (!this.state.inLink && (o3 = this.tokenizer.url(e3))) {
        e3 = e3.substring(o3.raw.length), t3.push(o3);
        continue;
      }
      let p2 = e3;
      if ((_e3 = this.options.extensions) == null ? void 0 : _e3.startInline) {
        let a2 = 1 / 0, u2 = e3.slice(1), c2;
        this.options.extensions.startInline.forEach((h3) => {
          c2 = h3.call({ lexer: this }, u2), typeof c2 == "number" && c2 >= 0 && (a2 = Math.min(a2, c2));
        }), a2 < 1 / 0 && a2 >= 0 && (p2 = e3.substring(0, a2 + 1));
      }
      if (o3 = this.tokenizer.inlineText(p2)) {
        e3 = e3.substring(o3.raw.length), o3.raw.slice(-1) !== "_" && (r3 = o3.raw.slice(-1)), s2 = true;
        let a2 = t3.at(-1);
        (a2 == null ? void 0 : a2.type) === "text" ? (a2.raw += o3.raw, a2.text += o3.text) : t3.push(o3);
        continue;
      }
      if (e3) {
        this.infiniteLoopError(e3.charCodeAt(0));
        break;
      }
    }
    return t3;
  }
  infiniteLoopError(e3) {
    let t3 = "Infinite loop on byte: " + e3;
    if (this.options.silent) console.error(t3);
    else throw new Error(t3);
  }
};
var P = class {
  constructor(e3) {
    __publicField(this, "options");
    __publicField(this, "parser");
    this.options = e3 || R;
  }
  space(e3) {
    return "";
  }
  code({ text: e3, lang: t3, escaped: n3 }) {
    var _a2;
    let s2 = (_a2 = (t3 || "").match(m2.notSpaceStart)) == null ? void 0 : _a2[0], r3 = e3.replace(m2.endingNewline, "") + `
`;
    return s2 ? '<pre><code class="language-' + O(s2) + '">' + (n3 ? r3 : O(r3, true)) + `</code></pre>
` : "<pre><code>" + (n3 ? r3 : O(r3, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: e3 }) {
    return `<blockquote>
${this.parser.parse(e3)}</blockquote>
`;
  }
  html({ text: e3 }) {
    return e3;
  }
  def(e3) {
    return "";
  }
  heading({ tokens: e3, depth: t3 }) {
    return `<h${t3}>${this.parser.parseInline(e3)}</h${t3}>
`;
  }
  hr(e3) {
    return `<hr>
`;
  }
  list(e3) {
    let t3 = e3.ordered, n3 = e3.start, s2 = "";
    for (let o3 = 0; o3 < e3.items.length; o3++) {
      let p2 = e3.items[o3];
      s2 += this.listitem(p2);
    }
    let r3 = t3 ? "ol" : "ul", i2 = t3 && n3 !== 1 ? ' start="' + n3 + '"' : "";
    return "<" + r3 + i2 + `>
` + s2 + "</" + r3 + `>
`;
  }
  listitem(e3) {
    return `<li>${this.parser.parse(e3.tokens)}</li>
`;
  }
  checkbox({ checked: e3 }) {
    return "<input " + (e3 ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
  }
  paragraph({ tokens: e3 }) {
    return `<p>${this.parser.parseInline(e3)}</p>
`;
  }
  table(e3) {
    let t3 = "", n3 = "";
    for (let r3 = 0; r3 < e3.header.length; r3++) n3 += this.tablecell(e3.header[r3]);
    t3 += this.tablerow({ text: n3 });
    let s2 = "";
    for (let r3 = 0; r3 < e3.rows.length; r3++) {
      let i2 = e3.rows[r3];
      n3 = "";
      for (let o3 = 0; o3 < i2.length; o3++) n3 += this.tablecell(i2[o3]);
      s2 += this.tablerow({ text: n3 });
    }
    return s2 && (s2 = `<tbody>${s2}</tbody>`), `<table>
<thead>
` + t3 + `</thead>
` + s2 + `</table>
`;
  }
  tablerow({ text: e3 }) {
    return `<tr>
${e3}</tr>
`;
  }
  tablecell(e3) {
    let t3 = this.parser.parseInline(e3.tokens), n3 = e3.header ? "th" : "td";
    return (e3.align ? `<${n3} align="${e3.align}">` : `<${n3}>`) + t3 + `</${n3}>
`;
  }
  strong({ tokens: e3 }) {
    return `<strong>${this.parser.parseInline(e3)}</strong>`;
  }
  em({ tokens: e3 }) {
    return `<em>${this.parser.parseInline(e3)}</em>`;
  }
  codespan({ text: e3 }) {
    return `<code>${O(e3, true)}</code>`;
  }
  br(e3) {
    return "<br>";
  }
  del({ tokens: e3 }) {
    return `<del>${this.parser.parseInline(e3)}</del>`;
  }
  link({ href: e3, title: t3, tokens: n3 }) {
    let s2 = this.parser.parseInline(n3), r3 = Y(e3);
    if (r3 === null) return s2;
    e3 = r3;
    let i2 = '<a href="' + e3 + '"';
    return t3 && (i2 += ' title="' + O(t3) + '"'), i2 += ">" + s2 + "</a>", i2;
  }
  image({ href: e3, title: t3, text: n3, tokens: s2 }) {
    s2 && (n3 = this.parser.parseInline(s2, this.parser.textRenderer));
    let r3 = Y(e3);
    if (r3 === null) return O(n3);
    e3 = r3;
    let i2 = `<img src="${e3}" alt="${O(n3)}"`;
    return t3 && (i2 += ` title="${O(t3)}"`), i2 += ">", i2;
  }
  text(e3) {
    return "tokens" in e3 && e3.tokens ? this.parser.parseInline(e3.tokens) : "escaped" in e3 && e3.escaped ? e3.text : O(e3.text);
  }
};
var L = class {
  strong({ text: e3 }) {
    return e3;
  }
  em({ text: e3 }) {
    return e3;
  }
  codespan({ text: e3 }) {
    return e3;
  }
  del({ text: e3 }) {
    return e3;
  }
  html({ text: e3 }) {
    return e3;
  }
  text({ text: e3 }) {
    return e3;
  }
  link({ text: e3 }) {
    return "" + e3;
  }
  image({ text: e3 }) {
    return "" + e3;
  }
  br() {
    return "";
  }
  checkbox({ raw: e3 }) {
    return e3;
  }
};
var b = class l3 {
  constructor(e3) {
    __publicField(this, "options");
    __publicField(this, "renderer");
    __publicField(this, "textRenderer");
    this.options = e3 || R, this.options.renderer = this.options.renderer || new P(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new L();
  }
  static parse(e3, t3) {
    return new l3(t3).parse(e3);
  }
  static parseInline(e3, t3) {
    return new l3(t3).parseInline(e3);
  }
  parse(e3) {
    var _a2, _b;
    this.renderer.parser = this;
    let t3 = "";
    for (let n3 = 0; n3 < e3.length; n3++) {
      let s2 = e3[n3];
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.renderers) == null ? void 0 : _b[s2.type]) {
        let i2 = s2, o3 = this.options.extensions.renderers[i2.type].call({ parser: this }, i2);
        if (o3 !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "checkbox", "html", "def", "paragraph", "text"].includes(i2.type)) {
          t3 += o3 || "";
          continue;
        }
      }
      let r3 = s2;
      switch (r3.type) {
        case "space": {
          t3 += this.renderer.space(r3);
          break;
        }
        case "hr": {
          t3 += this.renderer.hr(r3);
          break;
        }
        case "heading": {
          t3 += this.renderer.heading(r3);
          break;
        }
        case "code": {
          t3 += this.renderer.code(r3);
          break;
        }
        case "table": {
          t3 += this.renderer.table(r3);
          break;
        }
        case "blockquote": {
          t3 += this.renderer.blockquote(r3);
          break;
        }
        case "list": {
          t3 += this.renderer.list(r3);
          break;
        }
        case "checkbox": {
          t3 += this.renderer.checkbox(r3);
          break;
        }
        case "html": {
          t3 += this.renderer.html(r3);
          break;
        }
        case "def": {
          t3 += this.renderer.def(r3);
          break;
        }
        case "paragraph": {
          t3 += this.renderer.paragraph(r3);
          break;
        }
        case "text": {
          t3 += this.renderer.text(r3);
          break;
        }
        default: {
          let i2 = 'Token with "' + r3.type + '" type was not found.';
          if (this.options.silent) return console.error(i2), "";
          throw new Error(i2);
        }
      }
    }
    return t3;
  }
  parseInline(e3, t3 = this.renderer) {
    var _a2, _b;
    this.renderer.parser = this;
    let n3 = "";
    for (let s2 = 0; s2 < e3.length; s2++) {
      let r3 = e3[s2];
      if ((_b = (_a2 = this.options.extensions) == null ? void 0 : _a2.renderers) == null ? void 0 : _b[r3.type]) {
        let o3 = this.options.extensions.renderers[r3.type].call({ parser: this }, r3);
        if (o3 !== false || !["escape", "html", "link", "image", "checkbox", "strong", "em", "codespan", "br", "del", "text"].includes(r3.type)) {
          n3 += o3 || "";
          continue;
        }
      }
      let i2 = r3;
      switch (i2.type) {
        case "escape": {
          n3 += t3.text(i2);
          break;
        }
        case "html": {
          n3 += t3.html(i2);
          break;
        }
        case "link": {
          n3 += t3.link(i2);
          break;
        }
        case "image": {
          n3 += t3.image(i2);
          break;
        }
        case "checkbox": {
          n3 += t3.checkbox(i2);
          break;
        }
        case "strong": {
          n3 += t3.strong(i2);
          break;
        }
        case "em": {
          n3 += t3.em(i2);
          break;
        }
        case "codespan": {
          n3 += t3.codespan(i2);
          break;
        }
        case "br": {
          n3 += t3.br(i2);
          break;
        }
        case "del": {
          n3 += t3.del(i2);
          break;
        }
        case "text": {
          n3 += t3.text(i2);
          break;
        }
        default: {
          let o3 = 'Token with "' + i2.type + '" type was not found.';
          if (this.options.silent) return console.error(o3), "";
          throw new Error(o3);
        }
      }
    }
    return n3;
  }
};
var _a;
var S = (_a = class {
  constructor(e3) {
    __publicField(this, "options");
    __publicField(this, "block");
    this.options = e3 || R;
  }
  preprocess(e3) {
    return e3;
  }
  postprocess(e3) {
    return e3;
  }
  processAllTokens(e3) {
    return e3;
  }
  emStrongMask(e3) {
    return e3;
  }
  provideLexer(e3 = this.block) {
    return e3 ? x.lex : x.lexInline;
  }
  provideParser(e3 = this.block) {
    return e3 ? b.parse : b.parseInline;
  }
}, __publicField(_a, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), __publicField(_a, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), _a);
var Z = class {
  constructor(...e3) {
    __publicField(this, "defaults", C());
    __publicField(this, "options", this.setOptions);
    __publicField(this, "parse", this.parseMarkdown(true));
    __publicField(this, "parseInline", this.parseMarkdown(false));
    __publicField(this, "Parser", b);
    __publicField(this, "Renderer", P);
    __publicField(this, "TextRenderer", L);
    __publicField(this, "Lexer", x);
    __publicField(this, "Tokenizer", y);
    __publicField(this, "Hooks", S);
    this.use(...e3);
  }
  walkTokens(e3, t3) {
    var _a2, _b;
    let n3 = [];
    for (let s2 of e3) switch (n3 = n3.concat(t3.call(this, s2)), s2.type) {
      case "table": {
        let r3 = s2;
        for (let i2 of r3.header) n3 = n3.concat(this.walkTokens(i2.tokens, t3));
        for (let i2 of r3.rows) for (let o3 of i2) n3 = n3.concat(this.walkTokens(o3.tokens, t3));
        break;
      }
      case "list": {
        let r3 = s2;
        n3 = n3.concat(this.walkTokens(r3.items, t3));
        break;
      }
      default: {
        let r3 = s2;
        ((_b = (_a2 = this.defaults.extensions) == null ? void 0 : _a2.childTokens) == null ? void 0 : _b[r3.type]) ? this.defaults.extensions.childTokens[r3.type].forEach((i2) => {
          let o3 = r3[i2].flat(1 / 0);
          n3 = n3.concat(this.walkTokens(o3, t3));
        }) : r3.tokens && (n3 = n3.concat(this.walkTokens(r3.tokens, t3)));
      }
    }
    return n3;
  }
  use(...e3) {
    let t3 = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e3.forEach((n3) => {
      let s2 = { ...n3 };
      if (s2.async = this.defaults.async || s2.async || false, n3.extensions && (n3.extensions.forEach((r3) => {
        if (!r3.name) throw new Error("extension name required");
        if ("renderer" in r3) {
          let i2 = t3.renderers[r3.name];
          i2 ? t3.renderers[r3.name] = function(...o3) {
            let p2 = r3.renderer.apply(this, o3);
            return p2 === false && (p2 = i2.apply(this, o3)), p2;
          } : t3.renderers[r3.name] = r3.renderer;
        }
        if ("tokenizer" in r3) {
          if (!r3.level || r3.level !== "block" && r3.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let i2 = t3[r3.level];
          i2 ? i2.unshift(r3.tokenizer) : t3[r3.level] = [r3.tokenizer], r3.start && (r3.level === "block" ? t3.startBlock ? t3.startBlock.push(r3.start) : t3.startBlock = [r3.start] : r3.level === "inline" && (t3.startInline ? t3.startInline.push(r3.start) : t3.startInline = [r3.start]));
        }
        "childTokens" in r3 && r3.childTokens && (t3.childTokens[r3.name] = r3.childTokens);
      }), s2.extensions = t3), n3.renderer) {
        let r3 = this.defaults.renderer || new P(this.defaults);
        for (let i2 in n3.renderer) {
          if (!(i2 in r3)) throw new Error(`renderer '${i2}' does not exist`);
          if (["options", "parser"].includes(i2)) continue;
          let o3 = i2, p2 = n3.renderer[o3], a2 = r3[o3];
          r3[o3] = (...u2) => {
            let c2 = p2.apply(r3, u2);
            return c2 === false && (c2 = a2.apply(r3, u2)), c2 || "";
          };
        }
        s2.renderer = r3;
      }
      if (n3.tokenizer) {
        let r3 = this.defaults.tokenizer || new y(this.defaults);
        for (let i2 in n3.tokenizer) {
          if (!(i2 in r3)) throw new Error(`tokenizer '${i2}' does not exist`);
          if (["options", "rules", "lexer"].includes(i2)) continue;
          let o3 = i2, p2 = n3.tokenizer[o3], a2 = r3[o3];
          r3[o3] = (...u2) => {
            let c2 = p2.apply(r3, u2);
            return c2 === false && (c2 = a2.apply(r3, u2)), c2;
          };
        }
        s2.tokenizer = r3;
      }
      if (n3.hooks) {
        let r3 = this.defaults.hooks || new S();
        for (let i2 in n3.hooks) {
          if (!(i2 in r3)) throw new Error(`hook '${i2}' does not exist`);
          if (["options", "block"].includes(i2)) continue;
          let o3 = i2, p2 = n3.hooks[o3], a2 = r3[o3];
          S.passThroughHooks.has(i2) ? r3[o3] = (u2) => {
            if (this.defaults.async && S.passThroughHooksRespectAsync.has(i2)) return (async () => {
              let h3 = await p2.call(r3, u2);
              return a2.call(r3, h3);
            })();
            let c2 = p2.call(r3, u2);
            return a2.call(r3, c2);
          } : r3[o3] = (...u2) => {
            if (this.defaults.async) return (async () => {
              let h3 = await p2.apply(r3, u2);
              return h3 === false && (h3 = await a2.apply(r3, u2)), h3;
            })();
            let c2 = p2.apply(r3, u2);
            return c2 === false && (c2 = a2.apply(r3, u2)), c2;
          };
        }
        s2.hooks = r3;
      }
      if (n3.walkTokens) {
        let r3 = this.defaults.walkTokens, i2 = n3.walkTokens;
        s2.walkTokens = function(o3) {
          let p2 = [];
          return p2.push(i2.call(this, o3)), r3 && (p2 = p2.concat(r3.call(this, o3))), p2;
        };
      }
      this.defaults = { ...this.defaults, ...s2 };
    }), this;
  }
  setOptions(e3) {
    return this.defaults = { ...this.defaults, ...e3 }, this;
  }
  lexer(e3, t3) {
    return x.lex(e3, t3 ?? this.defaults);
  }
  parser(e3, t3) {
    return b.parse(e3, t3 ?? this.defaults);
  }
  parseMarkdown(e3) {
    return (n3, s2) => {
      let r3 = { ...s2 }, i2 = { ...this.defaults, ...r3 }, o3 = this.onError(!!i2.silent, !!i2.async);
      if (this.defaults.async === true && r3.async === false) return o3(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n3 > "u" || n3 === null) return o3(new Error("marked(): input parameter is undefined or null"));
      if (typeof n3 != "string") return o3(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n3) + ", string expected"));
      if (i2.hooks && (i2.hooks.options = i2, i2.hooks.block = e3), i2.async) return (async () => {
        let p2 = i2.hooks ? await i2.hooks.preprocess(n3) : n3, u2 = await (i2.hooks ? await i2.hooks.provideLexer(e3) : e3 ? x.lex : x.lexInline)(p2, i2), c2 = i2.hooks ? await i2.hooks.processAllTokens(u2) : u2;
        i2.walkTokens && await Promise.all(this.walkTokens(c2, i2.walkTokens));
        let k = await (i2.hooks ? await i2.hooks.provideParser(e3) : e3 ? b.parse : b.parseInline)(c2, i2);
        return i2.hooks ? await i2.hooks.postprocess(k) : k;
      })().catch(o3);
      try {
        i2.hooks && (n3 = i2.hooks.preprocess(n3));
        let a2 = (i2.hooks ? i2.hooks.provideLexer(e3) : e3 ? x.lex : x.lexInline)(n3, i2);
        i2.hooks && (a2 = i2.hooks.processAllTokens(a2)), i2.walkTokens && this.walkTokens(a2, i2.walkTokens);
        let c2 = (i2.hooks ? i2.hooks.provideParser(e3) : e3 ? b.parse : b.parseInline)(a2, i2);
        return i2.hooks && (c2 = i2.hooks.postprocess(c2)), c2;
      } catch (p2) {
        return o3(p2);
      }
    };
  }
  onError(e3, t3) {
    return (n3) => {
      if (n3.message += `
Please report this to https://github.com/markedjs/marked.`, e3) {
        let s2 = "<p>An error occurred:</p><pre>" + O(n3.message + "", true) + "</pre>";
        return t3 ? Promise.resolve(s2) : s2;
      }
      if (t3) return Promise.reject(n3);
      throw n3;
    };
  }
};
var E = new Z();
function f2(l4, e3) {
  return E.parse(l4, e3);
}
f2.options = f2.setOptions = function(l4) {
  return E.setOptions(l4), f2.defaults = E.defaults, j(f2.defaults), f2;
};
f2.getDefaults = C;
f2.defaults = R;
function kt(...l4) {
  return E.use(...l4), f2.defaults = E.defaults, j(f2.defaults), f2;
}
f2.use = kt;
f2.walkTokens = function(l4, e3) {
  return E.walkTokens(l4, e3);
};
f2.parseInline = E.parseInline;
f2.Parser = b;
f2.parser = b.parse;
f2.Renderer = P;
f2.TextRenderer = L;
f2.Lexer = x;
f2.lexer = x.lex;
f2.Tokenizer = y;
f2.Hooks = S;
f2.parse = f2;
var nn = f2.options;
var rn = f2.setOptions;
var sn = f2.walkTokens;
var on = f2.parseInline;
var ln = b.parse;
var pn = x.lex;

// node_modules/marked-highlight/src/index.js
function markedHighlight(options) {
  if (typeof options === "function") {
    options = {
      highlight: options
    };
  }
  if (!options || typeof options.highlight !== "function") {
    throw new Error("Must provide highlight function");
  }
  if (typeof options.langPrefix !== "string") {
    options.langPrefix = "language-";
  }
  if (typeof options.emptyLangClass !== "string") {
    options.emptyLangClass = "";
  }
  return {
    async: !!options.async,
    walkTokens(token) {
      if (token.type !== "code") {
        return;
      }
      const lang = getLang(token.lang);
      if (options.async) {
        return Promise.resolve(options.highlight(token.text, lang, token.lang || "")).then(updateToken(token));
      }
      const code = options.highlight(token.text, lang, token.lang || "");
      if (code instanceof Promise) {
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      }
      updateToken(token)(code);
    },
    useNewRenderer: true,
    renderer: {
      code(code, infoString, escaped) {
        if (typeof code === "object") {
          escaped = code.escaped;
          infoString = code.lang;
          code = code.text;
        }
        const lang = getLang(infoString);
        const classValue = lang ? options.langPrefix + escape(lang) : options.emptyLangClass;
        const classAttr = classValue ? ` class="${classValue}"` : "";
        code = code.replace(/\n$/, "");
        return `<pre><code${classAttr}>${escaped ? code : escape(code, true)}
</code></pre>`;
      }
    }
  };
}
function getLang(lang) {
  return (lang || "").match(/\S*/)[0];
}
function updateToken(token) {
  return (code) => {
    if (typeof code === "string" && code !== token.text) {
      token.escaped = true;
      token.text = code;
    }
  };
}
var escapeTest = /[&<>"']/;
var escapeReplace = new RegExp(escapeTest.source, "g");
var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}

// node_modules/@waline/client/dist/slim.js
var import_recaptcha_v3 = __toESM(require_ReCaptcha());

// node_modules/autosize/dist/autosize.esm.js
var e2 = /* @__PURE__ */ new Map();
function t2(t3) {
  var o3 = e2.get(t3);
  o3 && o3.destroy();
}
function o2(t3) {
  var o3 = e2.get(t3);
  o3 && o3.update();
}
var r2 = null;
"undefined" == typeof window ? ((r2 = function(e3) {
  return e3;
}).destroy = function(e3) {
  return e3;
}, r2.update = function(e3) {
  return e3;
}) : ((r2 = function(t3, o3) {
  return t3 && Array.prototype.forEach.call(t3.length ? t3 : [t3], function(t4) {
    return function(t5) {
      if (t5 && t5.nodeName && "TEXTAREA" === t5.nodeName && !e2.has(t5)) {
        var o4, r3 = null, n3 = window.getComputedStyle(t5), i2 = (o4 = t5.value, function() {
          a2({ testForHeightReduction: "" === o4 || !t5.value.startsWith(o4), restoreTextAlign: null }), o4 = t5.value;
        }), l4 = (function(o5) {
          t5.removeEventListener("autosize:destroy", l4), t5.removeEventListener("autosize:update", s2), t5.removeEventListener("input", i2), window.removeEventListener("resize", s2), Object.keys(o5).forEach(function(e3) {
            return t5.style[e3] = o5[e3];
          }), e2.delete(t5);
        }).bind(t5, { height: t5.style.height, resize: t5.style.resize, textAlign: t5.style.textAlign, overflowY: t5.style.overflowY, overflowX: t5.style.overflowX, wordWrap: t5.style.wordWrap });
        t5.addEventListener("autosize:destroy", l4), t5.addEventListener("autosize:update", s2), t5.addEventListener("input", i2), window.addEventListener("resize", s2), t5.style.overflowX = "hidden", t5.style.wordWrap = "break-word", e2.set(t5, { destroy: l4, update: s2 }), s2();
      }
      function a2(e3) {
        var o5, i3, l5 = e3.restoreTextAlign, s3 = void 0 === l5 ? null : l5, d3 = e3.testForHeightReduction, u2 = void 0 === d3 || d3, c2 = n3.overflowY;
        if (0 !== t5.scrollHeight && ("vertical" === n3.resize ? t5.style.resize = "none" : "both" === n3.resize && (t5.style.resize = "horizontal"), u2 && (o5 = function(e4) {
          for (var t6 = []; e4 && e4.parentNode && e4.parentNode instanceof Element; ) e4.parentNode.scrollTop && t6.push([e4.parentNode, e4.parentNode.scrollTop]), e4 = e4.parentNode;
          return function() {
            return t6.forEach(function(e5) {
              var t7 = e5[0], o6 = e5[1];
              t7.style.scrollBehavior = "auto", t7.scrollTop = o6, t7.style.scrollBehavior = null;
            });
          };
        }(t5), t5.style.height = ""), i3 = "content-box" === n3.boxSizing ? t5.scrollHeight - (parseFloat(n3.paddingTop) + parseFloat(n3.paddingBottom)) : t5.scrollHeight + parseFloat(n3.borderTopWidth) + parseFloat(n3.borderBottomWidth), "none" !== n3.maxHeight && i3 > parseFloat(n3.maxHeight) ? ("hidden" === n3.overflowY && (t5.style.overflow = "scroll"), i3 = parseFloat(n3.maxHeight)) : "hidden" !== n3.overflowY && (t5.style.overflow = "hidden"), t5.style.height = i3 + "px", s3 && (t5.style.textAlign = s3), o5 && o5(), r3 !== i3 && (t5.dispatchEvent(new Event("autosize:resized", { bubbles: true })), r3 = i3), c2 !== n3.overflow && !s3)) {
          var v2 = n3.textAlign;
          "hidden" === n3.overflow && (t5.style.textAlign = "start" === v2 ? "end" : "start"), a2({ restoreTextAlign: v2, testForHeightReduction: true });
        }
      }
      function s2() {
        a2({ testForHeightReduction: true, restoreTextAlign: null });
      }
    }(t4);
  }), t3;
}).destroy = function(e3) {
  return e3 && Array.prototype.forEach.call(e3.length ? e3 : [e3], t2), e3;
}, r2.update = function(e3) {
  return e3 && Array.prototype.forEach.call(e3.length ? e3 : [e3], o2), e3;
});
var n2 = r2;
var autosize_esm_default = n2;

// node_modules/@waline/client/dist/slim.js
var U2 = /* @__PURE__ */ new Set([`nick`, `mail`, `link`]);
var W2 = (e3) => e3.filter((e4) => U2.has(e4));
var G2 = [`//unpkg.com/@waline/emojis@1.1.0/weibo`];
var me2 = [`//unpkg.com/@waline/emojis/tieba/tieba_agree.png`, `//unpkg.com/@waline/emojis/tieba/tieba_look_down.png`, `//unpkg.com/@waline/emojis/tieba/tieba_sunglasses.png`, `//unpkg.com/@waline/emojis/tieba/tieba_pick_nose.png`, `//unpkg.com/@waline/emojis/tieba/tieba_awkward.png`, `//unpkg.com/@waline/emojis/tieba/tieba_sleep.png`];
var K2 = (e3) => new Promise((t3, n3) => {
  if (e3.size > 128 * 1e3) {
    n3(Error(`File too large! File size limit 128KB`));
    return;
  }
  let r3 = new FileReader();
  r3.readAsDataURL(e3), r3.addEventListener(`load`, () => {
    t3(r3.result);
  }), r3.addEventListener(`error`, n3);
});
var he2 = (e3) => e3 ? `<p class="wl-tex">TeX is not available in preview</p>` : `<span class="wl-tex">TeX is not available in preview</span>`;
var q2 = (e3) => {
  let t3 = (t4, n3 = {}) => fetch(`https://api.giphy.com/v1/gifs/${t4}?${new URLSearchParams({ lang: e3, limit: `20`, rating: `g`, api_key: `6CIMLkNMMOhRcXPoMCPkFy4Ybk2XUiMp`, ...n3 }).toString()}`).then((e4) => e4.json()).then(({ data: e4 }) => e4.map((e5) => ({ title: e5.title, src: e5.images.downsized_medium.url })));
  return { search: (e4) => t3(`search`, { q: e4, offset: `0` }), default: () => t3(`trending`, {}), more: (e4, n3 = 0) => t3(`search`, { q: e4, offset: n3.toString() }) };
};
var ge2 = RegExp(`(${/[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\uAC00-\uD7AF\u0400-\u04FF]+|\w+/u.source}|${/</u.source})|((?:${/(?:^|\s)\/\/(.+?)$/gmu.source})|(?:${/\/\*([\S\s]*?)\*\//gmu.source}))`, `gmiu`);
var J2 = [`23AC69`, `91C132`, `F19726`, `E8552D`, `1AAB8E`, `E1147F`, `2980C1`, `1BA1E6`, `9FA0A0`, `F19726`, `E30B20`, `E30B20`, `A3338B`];
var Y2 = {};
var X2 = (e3) => {
  let t3 = 0;
  return e3.replace(ge2, (e4, n3, r3) => {
    if (r3) return `<span style="color: slategray">${r3}</span>`;
    if (n3 === `<`) return `&lt;`;
    let i2;
    Y2[n3] ? i2 = Y2[n3] : (i2 = J2[t3], Y2[n3] = i2);
    let a2 = `<span style="color: #${i2}">${n3}</span>`;
    return t3 = ++t3 % J2.length, a2;
  });
};
var _e2 = `nick.nickError.mail.mailError.link.optional.placeholder.sofa.submit.like.cancelLike.reply.cancelReply.comment.refresh.more.preview.emoji.uploadImage.seconds.minutes.hours.days.now.uploading.login.logout.admin.sticky.word.wordHint.anonymous.level0.level1.level2.level3.level4.level5.gif.gifSearchPlaceholder.profile.approved.waiting.spam.unsticky.oldest.latest.hottest.reactionTitle.commentUnderReview.subPostComment.subSiteComment.subscribeToReplies`.split(`.`);
var Z2 = (e3) => Object.fromEntries(e3.map((e4, t3) => [_e2[t3], e4]));
var ve2 = Z2(`Benutzername,Der Benutzername darf nicht weniger als 3 Bytes umfassen.,E-Mail,Bitte bestätigen Sie Ihre E-Mail-Adresse.,Webseite,Optional,Kommentieren Sie hier...,Noch keine Kommentare.,Senden,Gefällt mir,Gefällt mir nicht mehr,Antworten,Antwort abbrechen,Kommentare,Aktualisieren,Mehr laden...,Vorschau,Emoji,Ein Bild hochladen,Vor einigen Sekunden,Vor einigen Minuten,Vor einigen Stunden,Vor einigen Tagen,Gerade eben,Hochladen läuft,Anmelden,Abmelden,Admin,Angeheftet,Wörter,Bitte geben Sie Kommentare zwischen $0 und $1 Wörtern ein! Aktuelle Anzahl der Wörter: $2,Anonym,Zwerge,Hobbits,Ents,Magier,Elfen,Maïar,GIF,Nach einem GIF suchen,Profil,Genehmigt,Ausstehend,Spam,Lösen,Älteste,Neueste,Am beliebtesten,Was denken Sie?,Ihr Kommentar wird überprüft und ist derzeit nur für Sie sichtbar. Nach der Genehmigung wird er öffentlich angezeigt.,Abonnieren Sie die Kommentare zu diesem Beitrag,Abonnieren Sie die Kommentare auf dieser Seite,Abonnieren Sie die Antworten auf Ihre Kommentare`.split(`,`));
var ye2 = Z2(`NickName,NickName cannot be less than 3 bytes.,E-Mail,Please confirm your email address.,Website,Optional,Comment here...,No comment yet.,Submit,Like,Cancel like,Reply,Cancel reply,Comments,Refresh,Load More...,Preview,Emoji,Upload Image,seconds ago,minutes ago,hours ago,days ago,just now,Uploading,Login,logout,Admin,Sticky,Words,Please input comments between $0 and $1 words!
 Current word number: $2,Anonymous,Dwarves,Hobbits,Ents,Wizards,Elves,Maiar,GIF,Search GIF,Profile,Approved,Waiting,Spam,Unsticky,Oldest,Latest,Hottest,What do you think?,Your comment is under review and is currently only visible to you. It will be publicly visible after approval.,Subscribe to comments of this post,Subscribe to comments of this site,Subscribe to replies of your comments`.split(`,`));
var be = Z2(`Nombre de usuario,El nombre de usuario no puede tener menos de 3 bytes.,Correo electrónico,Por favor confirma tu dirección de correo electrónico.,Sitio web,Opcional,Comenta aquí...,Sin comentarios todavía.,Enviar,Like,Anular like,Responder,Anular respuesta,Comentarios,Recargar,Cargar Más...,Previsualizar,Emoji,Subir Imagen,segundos atrás,minutos atrás,horas atrás,días atrás,justo ahora,Subiendo,Iniciar sesión,cerrar sesión,Admin,Fijado,Palabras,Por favor escriba entre $0 y $1 palabras!
 El número actual de palabras: $2,Anónimo,Enanos,Hobbits,Ents,Magos,Elfos,Maiar,GIF,Buscar GIF,Perfil,Aprobado,Esperando,Spam,Desfijar,Más antiguos,Más recientes,Más vistos,¿Qué piensas?,Tu comentario está en revisión y actualmente solo es visible para ti. Será visible públicamente después de la aprobación.,Suscribirse a los comentarios de esta publicación,Suscribirse a los comentarios de este sitio,Suscribirse a las respuestas de tus comentarios`.split(`,`));
var xe2 = Z2(`Pseudo,Le pseudo ne peut pas faire moins de 3 octets.,E-mail,Veuillez confirmer votre adresse e-mail.,Site Web,Optionnel,Commentez ici...,Aucun commentaire pour l'instant.,Envoyer,J'aime,Annuler le j'aime,Répondre,Annuler la réponse,Commentaires,Actualiser,Charger plus...,Aperçu,Emoji,Télécharger une image,Il y a quelques secondes,Il y a quelques minutes,Il y a quelques heures,Il y a quelques jours,À l'instant,Téléchargement en cours,Connexion,Déconnexion,Admin,Épinglé,Mots,Veuillez saisir des commentaires entre $0 et $1 mots !
 Nombre actuel de mots : $2,Anonyme,Nains,Hobbits,Ents,Mages,Elfes,Maïar,GIF,Rechercher un GIF,Profil,Approuvé,En attente,Indésirable,Détacher,Le plus ancien,Dernier,Le plus populaire,Qu'en pensez-vous ?,Votre commentaire est en cours de révision et n'est actuellement visible que par vous. Il sera visible publiquement après approbation.,S’abonner aux commentaires de ce post,S’abonner aux commentaires de ce site,S’abonner aux réponses de vos commentaires`.split(`,`));
var Se2 = Z2(`Nama Panggilan,Nama Panggilan tidak boleh kurang dari 3 bita.,E-Mail,Silakan konfirmasi alamat email Anda.,Situs Web,Opsional,Tulis komentar di sini...,Belum ada komentar.,Kirim,Suka,Batal suka,Balas,Batal balas,Komentar,Segarkan,Muat Lebih Banyak...,Pratinjau,Emoji,Unggah Gambar,detik yang lalu,menit yang lalu,jam yang lalu,hari yang lalu,baru saja,Mengunggah,Masuk,Keluar,Admin,Sematkan,Kata,Silakan masukkan komentar antara $0 dan $1 kata!
 Jumlah kata saat ini: $2,Anonim,Kurcaci,Hobbit,Ent,Penyihir,Peri,Maiar,GIF,Cari GIF,Profil,Disetujui,Menunggu,Spam,Lepas Sematan,Terlama,Terbaru,Terpopuler,Apa yang Anda pikirkan?,Komentar Anda sedang ditinjau dan saat ini hanya terlihat oleh Anda. Komentar akan terlihat secara publik setelah disetujui.,Berlangganan komentar di postingan ini,Berlangganan komentar di situs ini,Berlangganan balasan komentar Anda`.split(`,`));
var Ce2 = Z2(`Nickname,Il nickname non può avere meno di 3 caratteri.,E-mail,Per favore conferma il tuo indirizzo e-mail.,Sito web,Facoltativo,Scrivi un commento...,Ancora nessun commento.,Invia,Mi piace,Annulla mi piace,Rispondi,Annulla risposta,Commenti,Aggiorna,Carica altri...,Anteprima,Emoji,Carica immagine,secondi fa,minuti fa,ore fa,giorni fa,adesso,Caricamento in corso...,Accedi,Esci,Admin,In evidenza,Parole,Inserisci un commento tra $0 e $1 parole!
 Numero attuale di parole: $2,Anonimo,Nano,Hobbit,Ent,Mago,Elfo,Maiar,GIF,Cerca GIF,Profilo,Approvato,In attesa,Spam,Rimuovi evidenza,Più vecchi,Più recenti,Più popolari,Cosa ne pensi?,Il tuo commento è in fase di revisione ed è attualmente visibile solo a te. Sarà visibile pubblicamente dopo l'approvazione.,Iscriviti ai commenti di questo post,Iscriviti ai commenti di questo sito,Iscriviti alle risposte dei tuoi commenti`.split(`,`));
var we2 = Z2(`ニックネーム,3バイト以上のニックネームをご入力ください.,メールアドレス,メールアドレスをご確認ください.,サイト,オプション,ここにコメント,コメントしましょう~,提出する,Like,Cancel like,返信する,キャンセル,コメント,更新,さらに読み込む,プレビュー,絵文字,画像をアップロード,秒前,分前,時間前,日前,たっだ今,アップロード,ログインする,ログアウト,管理者,トップに置く,ワード,コメントは $0 から $1 ワードの間でなければなりません!
 現在の単語番号: $2,匿名,うえにん,なかにん,しもおし,特にしもおし,かげ,なぬし,GIF,探す GIF,個人情報,承認済み,待っている,スパム,べたつかない,逆順,正順,人気順,どう思いますか？,あなたのコメントは審査中で、現在はあなただけに表示されています。承認後に公開されます。,この投稿のコメントを購読する,このサイトのコメントを購読する,あなたのコメントの返信を購読する`.split(`,`));
var Te2 = Z2(`닉네임,닉네임은 3바이트 이상이어야 합니다.,이메일,이메일 주소를 확인해 주세요.,웹사이트,선택사항,여기에 댓글을 입력하세요...,아직 댓글이 없습니다.,제출,좋아요,좋아요 취소,답글,답글 취소,댓글,새로고침,더 보기...,미리보기,이모지,이미지 업로드,초 전,분 전,시간 전,일 전,방금 전,업로드 중,로그인,로그아웃,관리자,고정,글자 수,댓글은 $0자에서 $1자 사이여야 합니다!
현재 글자 수: $2,익명,난쟁이,호빗,엔트,마법사,엘프,마이아,GIF,GIF 검색,프로필,승인됨,대기 중,스팸,고정 해제,오래된 순,최신 순,인기순,어떻게 생각하시나요?,댓글이 검토 중이며 현재 본인만 볼 수 있습니다. 승인 후 공개됩니다.,이 게시물의 댓글 구독,이 사이트의 댓글 구독,댓글에 대한 답글 구독`.split(`,`));
var Ee2 = Z2(`Apelido(Apelido não pode ser menor que 3 bytes.(E-Mail(Por favor, confirme seu endereço de e-mail.(Website(Opcional(Comente aqui...(Nenhum comentário, ainda.(Enviar(Like(Cancel like(Responder(Cancelar resposta(Comentários(Refrescar(Carregar Mais...(Visualizar(Emoji(Enviar Imagem(segundos atrás(minutos atrás(horas atrás(dias atrás(agora mesmo(Enviando(Entrar(Sair(Admin(Sticky(Palavras(Favor enviar comentário com $0 a $1 palavras!
 Número de palavras atuais: $2(Anônimo(Dwarves(Hobbits(Ents(Wizards(Elves(Maiar(GIF(Pesquisar GIF(informação pessoal(Aprovado(Espera(Spam(Unsticky(Mais velho(Mais recentes(Mais quente(O que você acha?(Seu comentário está em revisão e atualmente está visível apenas para você. Ele será visível publicamente após a aprovação.(Assinar os comentários deste post(Assinar os comentários deste site(Assinar as respostas dos seus comentários`.split(`(`));
var De2 = Z2(`Псевдоним(Никнейм не может быть меньше 3 байт.(Эл. адрес(Пожалуйста, подтвердите адрес вашей электронной почты.(Веб-сайт(Необязательный(Комментарий здесь...(Пока нет комментариев.(Отправить(Like(Cancel like(Отвечать(Отменить ответ(Комментарии(Обновить(Загрузи больше...(Превью(эмодзи(Загрузить изображение(секунд назад(несколько минут назад(несколько часов назад(дней назад(прямо сейчас(Загрузка(Авторизоваться(Выход из системы(Админ(Липкий(Слова(Пожалуйста, введите комментарии от $0 до $1 слов!
Номер текущего слова: $2(Анонимный(Dwarves(Hobbits(Ents(Wizards(Elves(Maiar(GIF(Поиск GIF(Персональные данные(Одобренный(Ожидающий(Спам(Нелипкий(самый старый(последний(самый горячий(Что вы думаете?(Ваш комментарий находится на рассмотрении и в настоящее время виден только вам. После одобрения он станет общедоступным.(Подписаться на комментарии к этому посту(Подписаться на комментарии этого сайта(Подписаться на ответы ваших комментариев`.split(`(`));
var Oe2 = Z2(`Tên,Tên không được nhỏ hơn 3 ký tự.,E-Mail,Vui lòng xác nhập địa chỉ email của bạn.,Website,Tùy chọn,Hãy bình luận có văn hoá!,Chưa có bình luận,Gửi,Thích,Bỏ thích,Trả lời,Hủy bỏ,bình luận,Làm mới,Tải thêm...,Xem trước,Emoji,Tải lên hình ảnh,giây trước,phút trước,giờ trước,ngày trước,Vừa xong,Đang tải lên,Đăng nhập,đăng xuất,Quản trị viên,Dính,từ,Bình luận phải có độ dài giữa $0 và $1 từ!
 Số từ hiện tại: $2,Vô danh,Người lùn,Người tí hon,Thần rừng,Pháp sư,Tiên tộc,Maiar,Ảnh GIF,Tìm kiếm ảnh GIF,thông tin cá nhân,Đã được phê duyệt,Đang chờ đợi,Thư rác,Không dính,lâu đời nhất,muộn nhất,nóng nhất,What do you think?,Bình luận của bạn đang được xem xét và hiện chỉ hiển thị với bạn. Nó sẽ được công khai sau khi được phê duyệt.,Đăng ký nhận xét của bài viết này,Đăng ký nhận xét của trang web này,Đăng ký nhận xét của bạn`.split(`,`));
var ke2 = Z2(`昵称,昵称不能少于3个字符,邮箱,请填写正确的邮件地址,网址,可选,欢迎评论,来发评论吧~,提交,喜欢,取消喜欢,回复,取消回复,评论,刷新,加载更多...,预览,表情,上传图片,秒前,分钟前,小时前,天前,刚刚,正在上传,登录,退出,博主,置顶,字,评论字数应在 $0 到 $1 字之间！
当前字数：$2,匿名,潜水,冒泡,吐槽,活跃,话痨,传说,表情包,搜索表情包,个人资料,通过,待审核,垃圾,取消置顶,按倒序,按正序,按热度,你认为这篇文章怎么样？,评论正在审核中，当前仅自己可见，审核通过后公开可见。,订阅本文评论,订阅本站评论,订阅你的评论回复`.split(`,`));
var Q2 = { zh: ke2, "zh-cn": ke2, "zh-tw": Z2(`暱稱,暱稱不能少於3個字元,郵箱,請填寫正確的郵件地址,網址,可選,歡迎留言,來發留言吧~,送出,喜歡,取消喜歡,回覆,取消回覆,留言,重整,載入更多...,預覽,表情,上傳圖片,秒前,分鐘前,小時前,天前,剛剛,正在上傳,登入,登出,管理者,置頂,字,留言字數應在 $0 到 $1 字之間！
目前字數：$2,匿名,潛水,冒泡,吐槽,活躍,多話,傳說,表情包,搜尋表情包,個人資料,通過,待審核,垃圾,取消置頂,最早,最新,熱門,你認為這篇文章怎麼樣？,您的評論正在審核中，目前僅您可見。審核通過後將公開顯示。,訂閱此文章的評論,訂閱本站的評論,訂閱您的評論回覆`.split(`,`)), en: ye2, "en-us": ye2, fr: xe2, "fr-fr": xe2, id: Se2, "id-id": Se2, it: Ce2, "it-it": Ce2, jp: we2, "jp-jp": we2, ko: Te2, "ko-kr": Te2, "pt-br": Ee2, ru: De2, "ru-ru": De2, vi: Oe2, "vi-vn": Oe2, de: ve2, es: be, "es-mx": be };
var Ae2 = (e3) => Q2[e3.toLowerCase()] ?? Q2[`en-us`];
var je2 = (e3) => Object.keys(Q2).includes(e3.toLowerCase()) ? e3 : `en-US`;
var Me2 = { latest: `insertedAt_desc`, oldest: `insertedAt_asc`, hottest: `like_desc` };
var Ne2 = Object.keys(Me2);
var Pe2 = Symbol(`waline-config`);
var Fe2 = (e3) => {
  try {
    return decodeURI(e3);
  } catch {
    return e3;
  }
};
var Ie2 = (e3 = ``) => e3.replace(/\/$/u, ``);
var Le2 = (e3) => /^(https?:)?\/\//u.test(e3);
var Re = (e3) => {
  let t3 = Ie2(e3);
  return Le2(t3) ? t3 : `https://${t3}`;
};
var ze2 = (e3) => Array.isArray(e3) ? e3 : typeof e3 == `number` && e3 > 0 ? [0, e3] : false;
var Be2 = (e3, t3) => e3 == null || e3 === true ? t3 : e3 === false ? null : e3;
var Ve2 = ({ serverURL: e3, path: t3 = location.pathname, lang: n3 = typeof navigator > `u` ? `en-US` : navigator.language, locale: r3, meta: i2 = [`nick`, `mail`, `link`], requiredMeta: a2 = [], dark: o3 = false, pageSize: s2 = 10, wordLimit: c2, noCopyright: l4 = false, noRss: u2 = false, login: d3 = `enable`, recaptchaV3Key: f3 = ``, turnstileKey: p2 = ``, commentSorting: m3 = `latest`, emoji: h3 = G2, imageUploader: g, highlighter: _2, texRenderer: v2, search: y2, reaction: b2, ...x2 }) => ({ serverURL: Re(e3), path: Fe2(t3), lang: je2(n3), locale: { ...Ae2(je2(n3)), ...typeof r3 == `object` ? r3 : {} }, wordLimit: ze2(c2), meta: W2(i2), requiredMeta: W2(a2), dark: o3, pageSize: s2, commentSorting: m3, login: d3, noCopyright: l4, noRss: u2, recaptchaV3Key: f3, turnstileKey: p2, ...x2, reaction: b2 === true ? me2 : b2 || null, imageUploader: Be2(g, K2), highlighter: Be2(_2, X2), texRenderer: Be2(v2, he2), emoji: Be2(h3, G2), search: Be2(y2, q2(n3)) });
var $2 = (e3) => typeof e3 == `string`;
var He2 = `{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bg-color:#1e1e1e;--waline-bg-color-light:#272727;--waline-bg-color-hover: #444;--waline-border-color:#333;--waline-disable-bg-color:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bg-color:#272727;--waline-info-color:#666}`;
var Ue2 = (e3) => $2(e3) ? e3 === `auto` ? `@media(prefers-color-scheme:dark){body${He2}}` : `${e3}${He2}` : e3 === true ? `:root${He2}` : ``;
var We2 = (e3, t3) => {
  let n3 = e3.toString();
  for (; n3.length < t3; ) n3 = `0${n3}`;
  return n3;
};
var Ge2 = (e3) => {
  let t3 = We2(e3.getDate(), 2), n3 = We2(e3.getMonth() + 1, 2);
  return `${We2(e3.getFullYear(), 2)}-${n3}-${t3}`;
};
var Ke2 = (e3, t3, n3) => {
  if (!e3) return ``;
  let r3 = $2(e3) ? new Date(e3.includes(` `) ? e3.replaceAll(`-`, `/`) : e3) : e3, i2 = t3.getTime() - r3.getTime(), a2 = Math.floor(i2 / (24 * 3600 * 1e3));
  if (a2 === 0) {
    let e4 = i2 % (24 * 3600 * 1e3), t4 = Math.floor(e4 / (3600 * 1e3));
    if (t4 === 0) {
      let t5 = e4 % (3600 * 1e3), r4 = Math.floor(t5 / (60 * 1e3));
      if (r4 === 0) {
        let e5 = t5 % (60 * 1e3);
        return `${Math.round(e5 / 1e3)} ${n3.seconds}`;
      }
      return `${r4} ${n3.minutes}`;
    }
    return `${t4} ${n3.hours}`;
  }
  return a2 < 0 ? n3.now : a2 < 8 ? `${a2} ${n3.days}` : Ge2(r3);
};
var qe2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/u;
var Je2 = (e3) => qe2.test(e3);
var Ye2 = useStorage(`WALINE_EMOJI`, {});
var Xe2 = (e3) => /@[0-9]+\.[0-9]+\.[0-9]+/u.test(e3);
var Ze2 = (e3) => {
  let t3 = Xe2(e3);
  if (t3) {
    let t4 = Ye2.value[e3];
    if (t4) return Promise.resolve(t4);
  }
  return fetch(`${e3}/info.json`).then((e4) => e4.json()).then((n3) => {
    let r3 = { folder: e3, ...n3 };
    return t3 && (Ye2.value[e3] = r3), r3;
  });
};
var Qe2 = (e3, t3 = ``, n3 = ``, r3 = ``) => `${t3 ? `${t3}/` : ``}${n3}${e3}${r3 ? `.${r3}` : ``}`;
var $e2 = (e3) => Promise.all(e3 ? e3.map((e4) => $2(e4) ? Ze2(Ie2(e4)) : Promise.resolve(e4)) : []).then((e4) => {
  let t3 = { tabs: [], map: {} };
  return e4.forEach((e5) => {
    let { name: n3, folder: r3, icon: i2, prefix: a2 = ``, type: o3, items: s2 } = e5;
    t3.tabs.push({ name: n3, icon: Qe2(i2, r3, a2, o3), items: s2.map((e6) => {
      let n4 = `${a2}${e6}`;
      return t3.map[n4] = Qe2(e6, r3, a2, o3), n4;
    }) });
  }), t3;
});
var et2 = (e3) => {
  e3.name !== `AbortError` && console.error(e3.message);
};
var tt2 = (e3) => e3 instanceof HTMLElement ? e3 : $2(e3) ? document.querySelector(e3) : null;
var nt2 = (e3) => {
  let t3 = [...e3].find((e4) => e4.type.includes(`image`));
  return t3 ? t3.getAsFile() : null;
};
var rt2 = /\$.*?\$/u;
var it2 = /^\$(.*?)\$/u;
var at2 = /^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/u;
var ot2 = (e3) => [{ name: `blockMath`, level: `block`, tokenizer(t3) {
  let n3 = at2.exec(t3);
  if (n3 != null) return { type: `html`, raw: n3[0], text: e3(true, n3[1]) };
} }, { name: `inlineMath`, level: `inline`, start(e4) {
  let t3 = e4.search(rt2);
  return t3 === -1 ? e4.length : t3;
}, tokenizer(t3) {
  let n3 = it2.exec(t3);
  if (n3 != null) return { type: `html`, raw: n3[0], text: e3(false, n3[1]) };
} }];
var st2 = (e3 = ``, t3 = {}) => e3.replaceAll(/:(.+?):/gu, (e4, n3) => t3[n3] ? `<img class="wl-emoji" src="${t3[n3]}" alt="${n3}">` : e4);
var ct2 = (e3, { emojiMap: t3, highlighter: n3, texRenderer: r3 }) => {
  let i2 = new Z();
  if (i2.setOptions({ breaks: true }), n3 && i2.use(markedHighlight({ highlight: n3 })), r3) {
    let e4 = ot2(r3);
    i2.use({ extensions: e4 });
  }
  return i2.parse(st2(e3, t3));
};
var lt2 = (e3) => {
  let { path: t3 } = e3.dataset;
  return (t3 == null ? void 0 : t3.length) ? t3 : null;
};
var ut2 = (e3) => e3.match(/[\w\d\s,.\u00C0-\u024F\u0400-\u04FF]+/giu);
var dt2 = (e3) => e3.match(/[\u4E00-\u9FD5]/gu);
var ft = (e3) => {
  var _a2, _b;
  return (((_a2 = ut2(e3)) == null ? void 0 : _a2.reduce((e4, t3) => e4 + ([``, `,`, `.`].includes(t3.trim()) ? 0 : t3.trim().split(/\s+/u).length), 0)) ?? 0) + (((_b = dt2(e3)) == null ? void 0 : _b.length) ?? 0);
};
var pt2 = async () => {
  let { userAgentData: e3 } = navigator, t3 = navigator.userAgent;
  if ((e3 == null ? void 0 : e3.platform) !== `Windows`) return t3;
  let { platformVersion: n3 } = await e3.getHighEntropyValues([`platformVersion`]);
  return n3 && Number.parseInt(n3.split(`.`)[0], 10) >= 13 && (t3 = t3.replace(`Windows NT 10.0`, `Windows NT 11.0`)), t3;
};
var mt = ({ serverURL: e3, path: t3 = window.location.pathname, selector: r3 = `.waline-comment-count`, lang: i2 = navigator.language }) => {
  let a2 = new AbortController(), o3 = document.querySelectorAll(r3);
  return o3.length > 0 && l({ serverURL: Re(e3), paths: Array.from(o3, (e4) => Fe2(lt2(e4) ?? t3)), lang: i2, signal: a2.signal }).then((e4) => {
    o3.forEach((t4, n3) => {
      t4.textContent = e4[n3].toString();
    });
  }).catch(et2), a2.abort.bind(a2);
};
var ht2 = () => useStorage(`WALINE_USER_META`, { nick: ``, mail: ``, link: `` });
var gt = () => useStorage(`WALINE_COMMENT_BOX_EDITOR`, ``);
var _t = useStorage(`WALINE_LIKE`, []);
var vt = () => _t;
var yt = useStorage(`WALINE_REACTION`, {});
var bt = () => yt;
var xt = {};
var St = (e3) => {
  let t3 = xt[e3] ?? (xt[e3] = (0, import_recaptcha_v3.load)(e3, { useRecaptchaNet: true, autoHideBadge: true }));
  return { execute: (e4) => t3.then((t4) => t4.execute(e4)) };
};
var Ct = (e3) => ({ execute: async (t3) => {
  let { load: n3 } = useScriptTag(`https://challenges.cloudflare.com/turnstile/v0/api.js`, void 0, { async: false });
  await n3();
  let { turnstile: r3 } = window;
  return new Promise((n4) => {
    r3 == null ? void 0 : r3.ready(() => {
      r3.render(`.wl-captcha-container`, { sitekey: e3, action: t3, size: `compact`, callback: n4 });
    });
  });
} });
var wt = useStorage(`WALINE_USER`, {});
var Tt = () => wt;
var Et = `3.15.2`;
var Dt = ({ size: e3 }) => h(`svg`, { class: `wl-close-icon`, viewBox: `0 0 1024 1024`, width: e3, height: e3 }, [h(`path`, { d: `M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z`, fill: `currentColor` }), h(`path`, { d: `m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z`, fill: `#888` })]);
var Ot = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, h(`path`, { d: `m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z`, fill: `red` }));
var kt2 = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, h(`path`, { d: `M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z`, fill: `currentColor` }));
var At = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, [h(`path`, { d: `M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z`, fill: `currentColor` }), h(`path`, { d: `M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z`, fill: `currentColor` })]);
var jt = ({ active: e3 = false }) => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, [h(`path`, { d: `M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z${e3 ? `` : `M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z`}`, fill: e3 ? `red` : `currentColor` })]);
var Mt = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, [h(`path`, { d: `M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0`, fill: `currentColor` }), h(`path`, { d: `M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0`, fill: `currentColor` })]);
var Nt = () => h(`svg`, { width: `16`, height: `16`, ariaHidden: `true` }, h(`path`, { d: `M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z`, fill: `currentColor` }));
var Pt = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, h(`path`, { d: `M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z`, fill: `currentColor` }));
var Ft = () => h(`svg`, { viewBox: `0 0 1024 1024`, width: `24`, height: `24` }, h(`path`, { d: `M813.039 318.772L480.53 651.278H360.718V531.463L693.227 198.961C697.904 194.284 704.027 192 710.157 192C716.302 192 722.436 194.284 727.114 198.961L813.039 284.88C817.72 289.561 820 295.684 820 301.825C820 307.95 817.72 314.093 813.039 318.772ZM710.172 261.888L420.624 551.431V591.376H460.561L750.109 301.825L710.172 261.888ZM490.517 291.845H240.906V771.09H720.156V521.479C720.156 504.947 733.559 491.529 750.109 491.529C766.653 491.529 780.063 504.947 780.063 521.479V791.059C780.063 813.118 762.18 831 740.125 831H220.937C198.882 831 181 813.118 181 791.059V271.872C181 249.817 198.882 231.935 220.937 231.935H490.517C507.06 231.935 520.47 245.352 520.47 261.888C520.47 278.424 507.06 291.845 490.517 291.845Z`, fill: `currentColor` }));
var It = () => h(`svg`, { class: `verified-icon`, viewBox: `0 0 1024 1024`, width: `14`, height: `14` }, h(`path`, { d: `m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z`, fill: `#27ae60` }));
var Lt = () => h(`svg`, { class: `administrator-icon`, viewBox: `0 0 1024 1024`, width: `14`, height: `14` }, [h(`path`, { d: `M461.6 129.56C489.6 105.96 534.8 105.96 562.4 129.56L625.6 183.96C637.6 194.36 660.4 202.76 676 202.76H744C786.4 202.76 821.2 237.56 821.2 279.96V347.96C821.2 363.96 829.6 386.36 840 398.36L894.4 461.56C918 489.16 918 534.76 894.8 562.36L840.4 625.56C830 637.56 821.6 660.36 821.6 675.96V743.96C821.6 786.36 786.8 821.16 744.4 821.16H676.4C660.4 821.16 638 829.56 626 839.96L562.8 894.36C534.8 917.96 489.6 917.96 462 894.36L398.8 839.96C386.8 829.56 364 821.16 348.4 821.16H279.2C236.8 821.16 202 786.36 202 743.96V675.56C201.999 659.96 193.6 637.56 183.6 625.56L129.6 561.96C106.4 534.36 106.4 489.56 129.6 461.96L183.6 398.36C193.6 386.359 202 363.959 202 348.36V279.96C202 237.56 236.8 202.76 279.2 202.76H348.4C364 202.76 386.8 194.36 398.8 184.36L461.6 129.56ZM549.567 331.896C530.047 303.082 486.645 306.12 471.433 337.412L442.175 396.526C435.587 409.848 422.856 419.097 408.146 421.226L342.706 430.726C340.776 431 338.884 431.397 336.993 431.946C303.482 441.361 292.756 483.493 317.671 507.812L364.975 553.96C375.623 564.321 380.507 579.299 377.991 593.954L366.917 659.102C366.595 661.03 366.355 662.967 366.279 664.923C364.906 699.688 401.683 722.937 432.514 706.738L491.05 675.966C504.217 669.068 519.954 669.069 533.121 675.966L591.675 706.738C593.406 707.645 595.174 708.432 597.028 709.104C629.666 721.205 663.139 693.382 657.273 659.102L646.069 593.954C643.42 579.176 648.24 564.083 659.001 553.6L706.315 507.461C707.687 506.118 708.994 504.66 710.215 503.127C731.779 475.809 715.737 435.41 681.281 430.365L615.839 420.874C601.13 418.745 588.4 409.486 581.821 396.174L552.562 337.052C551.644 335.284 550.674 333.551 549.567 331.896Z`, fill: `#f59831` })]);
var Rt = ({ size: e3 = 100 }) => h(`svg`, { width: e3, height: e3, viewBox: `0 0 100 100`, preserveAspectRatio: `xMidYMid` }, h(`circle`, { cx: 50, cy: 50, fill: `none`, stroke: `currentColor`, strokeWidth: `4`, r: `40`, "stroke-dasharray": `85 30` }, h(`animateTransform`, { attributeName: `transform`, type: `rotate`, repeatCount: `indefinite`, dur: `1s`, values: `0 50 50;360 50 50`, keyTimes: `0;1` })));
var zt = () => h(`svg`, { width: 24, height: 24, fill: `currentcolor`, viewBox: `0 0 24 24` }, [h(`path`, { style: `transform: translateY(0.5px)`, d: `M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z` }), h(`path`, { d: `M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z` })]);
var Bt = () => h(`svg`, { width: `16`, height: `16`, viewBox: `0 0 24 24` }, h(`g`, { transform: `translate(0 -1028.4)` }, h(`g`, {}, [h(`path`, { d: `m4 1031.4c-1.1046 0-2 0.9-2 2v16c0 1.1 0.8954 2 2 2h16c1.105 0 2-0.9 2-2v-16c0-1.1-0.895-2-2-2h-16z`, fill: `#d35400` }), h(`path`, { d: `m4 2c-1.1046 0-2 0.8954-2 2v16c0 1.105 0.8954 2 2 2h16c1.105 0 2-0.895 2-2v-16c0-1.1046-0.895-2-2-2h-16z`, transform: `translate(0 1028.4)`, fill: `#e67e22` }), h(`path`, { d: `m5 1034.4v2.3c6.443 0 11.667 5.2 11.667 11.7h2.333c0-7.8-6.268-14-14-14zm0 4.6v2.4c3.866 0 7 3.1 7 7h2.333c0-5.2-4.178-9.4-9.333-9.4zm2.0417 5.3c-1.1276 0-2.0417 0.9-2.0417 2s0.9141 2.1 2.0417 2.1c1.1275 0 2.0416-1 2.0416-2.1s-0.9141-2-2.0416-2z`, fill: `#d35400` }), h(`path`, { d: `m5 1033.4v2.3c6.443 0 11.667 5.2 11.667 11.7h2.333c0-7.8-6.268-14-14-14zm0 4.6v2.4c3.866 0 7 3.1 7 7h2.333c0-5.2-4.178-9.4-9.333-9.4zm2.0417 5.3c-1.1276 0-2.0417 0.9-2.0417 2s0.9141 2.1 2.0417 2.1c1.1275 0 2.0416-1 2.0416-2.1s-0.9141-2-2.0416-2z`, fill: `#ecf0f1` })])));
var Vt = () => h(`svg`, { fill: `currentColor`, width: `24`, height: `24`, viewBox: `-3 0 19 19`, class: `cf-icon-svg` }, h(`path`, { d: `M.926 12.818a1.403 1.403 0 1 1 0 1.984 1.402 1.402 0 0 1 0-1.984zm10.531 2.357a1.03 1.03 0 0 1-1.029-1.03 8.775 8.775 0 0 0-.694-3.438A8.826 8.826 0 0 0 1.591 5.31a1.03 1.03 0 1 1 0-2.059 10.817 10.817 0 0 1 4.24.857 10.893 10.893 0 0 1 3.463 2.334 10.867 10.867 0 0 1 3.19 7.703 1.027 1.027 0 0 1-1.027 1.029zm-4.538 0a1.03 1.03 0 0 1-1.029-1.03 4.297 4.297 0 0 0-4.299-4.298 1.03 1.03 0 0 1 0-2.059 6.362 6.362 0 0 1 5.857 3.883 6.298 6.298 0 0 1 .5 2.475 1.03 1.03 0 0 1-1.029 1.029z` }));
var Ht = { key: 0, class: `wl-reaction` };
var Ut = [`textContent`];
var Wt = { class: `wl-reaction-list` };
var Gt = [`onClick`];
var Kt = { class: `wl-reaction-img` };
var qt = [`src`, `alt`];
var Jt = [`textContent`];
var Yt = [`textContent`];
var Xt = defineComponent({ __name: `ArticleReaction`, setup(e3) {
  let t3 = bt(), n3 = inject(Pe2), i2 = ref(-1), a2 = ref([]), o3 = computed(() => n3.value.locale), s2 = computed(() => {
    let { reaction: e4 } = n3.value;
    return (e4 == null ? void 0 : e4.length) ? e4 : null;
  }), c2 = computed(() => {
    var _a2;
    let { path: e4 } = n3.value;
    return ((_a2 = s2.value) == null ? void 0 : _a2.map((n4, r3) => ({ icon: n4, desc: o3.value[`reaction${r3}`], active: t3.value[e4] === r3 }))) ?? null;
  }), u2, d3 = async () => {
    let { serverURL: e4, lang: t4, path: i3 } = n3.value;
    if (!s2.value) return;
    let o4 = new AbortController();
    u2 = o4.abort.bind(o4);
    let [c3] = await r({ serverURL: e4, lang: t4, paths: [i3], type: s2.value.map((e5, t5) => `reaction${t5}`), signal: o4.signal });
    a2.value = s2.value.map((e5, t5) => c3[`reaction${t5}`]);
  }, f3 = async (e4) => {
    if (i2.value !== -1) return;
    let { serverURL: r3, lang: o4, path: s3 } = n3.value, c3 = t3.value[s3];
    i2.value = e4, c3 != null && (await i({ serverURL: r3, lang: o4, path: s3, type: `reaction${c3}`, action: `desc` }), a2.value[c3] = Math.max(a2.value[c3] - 1, 0)), c3 !== e4 && (await i({ serverURL: r3, lang: o4, path: s3, type: `reaction${e4}` }), a2.value[e4] = (a2.value[e4] || 0) + 1), c3 === e4 ? delete t3.value[s3] : t3.value[s3] = e4, i2.value = -1;
  };
  return onMounted(() => {
    watchImmediate(() => [n3.value.serverURL, n3.value.path], () => d3());
  }), onUnmounted(() => {
    u2 == null ? void 0 : u2();
  }), (e4, t4) => c2.value ? (openBlock(), createElementBlock(`div`, Ht, [createBaseVNode(`div`, { class: `wl-reaction-title`, textContent: toDisplayString(o3.value.reactionTitle) }, null, 8, Ut), createBaseVNode(`ul`, Wt, [(openBlock(true), createElementBlock(Fragment, null, renderList(c2.value, ({ active: e5, icon: t5, desc: n4 }, r3) => (openBlock(), createElementBlock(`li`, { key: r3, class: normalizeClass([`wl-reaction-item`, { active: e5 }]), onClick: (e6) => f3(r3) }, [createBaseVNode(`div`, Kt, [createBaseVNode(`img`, { src: t5, alt: n4 }, null, 8, qt), i2.value === r3 ? (openBlock(), createBlock(unref(Rt), { key: 0, class: `wl-reaction-loading` })) : (openBlock(), createElementBlock(`div`, { key: 1, class: `wl-reaction-votes`, textContent: toDisplayString(a2.value[r3] || 0) }, null, 8, Jt))]), createBaseVNode(`div`, { class: `wl-reaction-text`, textContent: toDisplayString(n4) }, null, 8, Yt)], 10, Gt))), 128))])])) : createCommentVNode(`v-if`, true);
} });
var Zt = [`data-index`];
var Qt = [`src`, `title`, `onClick`];
var $t = defineComponent({ __name: `ImageWall`, props: { items: { default: () => [] }, columnWidth: { default: 300 }, gap: { default: 0 } }, emits: [`insert`], setup(e3) {
  let t3 = null, n3 = useTemplateRef(`wall`), r3 = ref({}), i2 = ref([]), a2 = () => {
    let t4 = Math.floor((n3.value.getBoundingClientRect().width + e3.gap) / (e3.columnWidth + e3.gap));
    return t4 > 0 ? t4 : 1;
  }, o3 = (e4) => Array.from({ length: e4 }, () => []), s2 = async (t4) => {
    var _a2;
    if (t4 >= e3.items.length) return;
    await nextTick();
    let r4 = [...((_a2 = n3.value) == null ? void 0 : _a2.children) ?? []].reduce((e4, t5) => t5.getBoundingClientRect().height < e4.getBoundingClientRect().height ? t5 : e4);
    i2.value[Number(r4.dataset.index)].push(t4), await s2(t4 + 1);
  }, c2 = async (e4 = false) => {
    if (i2.value.length === a2() && !e4) return;
    i2.value = o3(a2());
    let { scrollY: t4 } = window;
    await s2(0), window.scrollTo({ top: t4 });
  }, l4 = (e4) => {
    r3.value[e4.target.src] = true;
  };
  return onMounted(() => {
    c2(true), t3 = new ResizeObserver(() => {
      c2();
    }), t3.observe(n3.value), watch(() => [e3.items], () => {
      r3.value = {}, c2(true);
    }), watch(() => [e3.columnWidth, e3.gap], () => {
      c2();
    });
  }), onBeforeUnmount(() => {
    t3.unobserve(n3.value);
  }), (t4, a3) => (openBlock(), createElementBlock(`div`, { ref_key: `wall`, ref: n3, class: `wl-gallery`, style: normalizeStyle({ gap: `${e3.gap}px` }) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(i2.value, (n4, i3) => (openBlock(), createElementBlock(`div`, { key: i3, class: `wl-gallery-column`, "data-index": i3, style: normalizeStyle({ gap: `${e3.gap}px` }) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(n4, (n5) => (openBlock(), createElementBlock(Fragment, { key: n5 }, [r3.value[e3.items[n5].src] ? createCommentVNode(`v-if`, true) : (openBlock(), createBlock(unref(Rt), { key: 0, size: 36, style: { margin: `20px auto` } })), createBaseVNode(`img`, { class: `wl-gallery-item`, src: e3.items[n5].src, title: e3.items[n5].title, loading: `lazy`, onLoad: l4, onClick: (r4) => t4.$emit(`insert`, `![](${e3.items[n5].src})`) }, null, 40, Qt)], 64))), 128))], 12, Zt))), 128))], 4));
} });
var en = { key: 0, class: `wl-login-info` };
var tn = { class: `wl-avatar` };
var nn2 = [`title`];
var rn2 = [`title`];
var an = [`src`];
var on2 = [`title`, `textContent`];
var sn2 = { class: `wl-panel` };
var cn = [`for`, `textContent`];
var ln2 = [`id`, `onUpdate:modelValue`, `name`, `type`];
var un = [`placeholder`];
var dn = { class: `wl-preview` };
var fn = [`innerHTML`];
var pn2 = { class: `wl-footer` };
var mn = { class: `wl-actions` };
var hn = { href: `https://guides.github.com/features/mastering-markdown/`, title: `Markdown Guide`, "aria-label": `Markdown is supported`, class: `wl-action`, target: `_blank`, rel: `noopener noreferrer` };
var gn = [`title`];
var _n = [`title`];
var vn = [`title`, `aria-label`];
var yn = [`title`];
var bn = { class: `wl-info` };
var xn = { class: `wl-text-number` };
var Sn = { key: 0 };
var Cn = [`textContent`];
var wn = [`textContent`];
var Tn = [`disabled`];
var En = [`placeholder`];
var Dn = { key: 1, class: `wl-loading` };
var On = [`title`, `onClick`, `onMouseenter`];
var kn = [`src`, `alt`];
var An = [`src`];
var jn = { key: 0, class: `wl-tabs` };
var Mn = [`onClick`];
var Nn = [`src`, `alt`, `title`];
var Pn = [`title`];
var Fn = defineComponent({ __name: `CommentBox`, props: { edit: {}, rootId: {}, replyId: {}, replyUser: {} }, emits: [`log`, `cancelEdit`, `cancelReply`, `submit`], setup(t3, { emit: n3 }) {
  let r3 = t3, i2 = n3, a2 = inject(Pe2), o3 = gt(), s2 = ht2(), l4 = Tt(), d3 = ref({}), m3 = useTemplateRef(`textarea`), h3 = useTemplateRef(`image-uploader`), g = useTemplateRef(`emoji-button`), _2 = useTemplateRef(`emoji-popup`), y2 = useTemplateRef(`gif-button`), b2 = useTemplateRef(`gif-popup`), C2 = useTemplateRef(`gif-search`), A2 = ref({ tabs: [], map: {} }), j2 = ref(0), P2 = ref(false), I2 = ref(``), re = ref({}), ae2, ue2 = (e3, t4) => {
    clearTimeout(ae2), I2.value = t4;
    let n4 = e3.currentTarget, r4 = _2.value;
    if (n4 && r4) {
      let e4 = n4.getBoundingClientRect(), t5 = r4.getBoundingClientRect();
      re.value = { left: `${e4.left - t5.left + e4.width / 2}px`, top: `${e4.top - t5.top}px`, transform: `translate(-50%, -100%)` };
    }
  }, fe3 = () => {
    ae2 = setTimeout(() => {
      I2.value = ``;
    }, 50);
  }, U3 = ref(false), W3 = ref(false), G3 = ref(``), me3 = ref(0), K3 = reactive({ loading: true, list: [] }), he3 = ref(0), q3 = ref(false), ge3 = ref(``), J3 = ref(false), Y3 = ref(false), X3 = computed(() => a2.value.locale), _e3 = computed(() => !!l4.value.token), Z3 = computed(() => a2.value.imageUploader != null), ve3 = (e3) => {
    let t4 = m3.value, n4 = t4.selectionStart, r4 = t4.selectionEnd || 0, { scrollTop: i3 } = t4;
    o3.value = t4.value.slice(0, n4) + e3 + t4.value.slice(r4), t4.focus(), t4.selectionStart = n4 + e3.length, t4.selectionEnd = n4 + e3.length, t4.scrollTop = i3;
  }, ye3 = async (e3) => {
    let t4 = `![${a2.value.locale.uploading} ${e3.name}]()`;
    ve3(t4), J3.value = true;
    try {
      let n4 = await a2.value.imageUploader(e3);
      o3.value = o3.value.replace(t4, `\r
![${e3.name}](${n4})`);
    } catch (e4) {
      alert(e4.message), o3.value = o3.value.replace(t4, ``);
    } finally {
      J3.value = false;
    }
  }, be2 = (e3) => {
    var _a2;
    if ((_a2 = e3.dataTransfer) == null ? void 0 : _a2.items) {
      let t4 = nt2(e3.dataTransfer.items);
      t4 && Z3.value && (ye3(t4), e3.preventDefault());
    }
  }, xe3 = (e3) => {
    if (e3.clipboardData) {
      let t4 = nt2(e3.clipboardData.items);
      t4 && Z3.value && ye3(t4);
    }
  }, Se3 = () => {
    let e3 = h3.value;
    e3.files && Z3.value && ye3(e3.files[0]).then(() => {
      e3.value = ``;
    });
  }, Ce3 = async () => {
    var _a2;
    let { serverURL: t4, lang: n4, login: c2, wordLimit: f3, requiredMeta: p2, recaptchaV3Key: h4, turnstileKey: g2 } = a2.value, _3 = { comment: ge3.value, nick: s2.value.nick, mail: s2.value.mail, link: s2.value.link, url: a2.value.path, ua: await pt2() };
    if (!r3.edit) if (l4.value.token) _3.nick = l4.value.display_name, _3.mail = l4.value.email, _3.link = l4.value.url;
    else {
      if (c2 === `force`) return;
      if (p2.includes(`nick`) && !_3.nick) {
        d3.value.nick.focus(), alert(X3.value.nickError);
        return;
      }
      if (p2.includes(`mail`) && !_3.mail || _3.mail && !Je2(_3.mail)) {
        d3.value.mail.focus(), alert(X3.value.mailError);
        return;
      }
      _3.nick || (_3.nick = X3.value.anonymous);
    }
    if (!_3.comment) {
      m3.value.focus();
      return;
    }
    if (!q3.value) {
      alert(X3.value.wordHint.replace(`$0`, f3[0].toString()).replace(`$1`, f3[1].toString()).replace(`$2`, me3.value.toString()));
      return;
    }
    _3.comment = st2(_3.comment, A2.value.map), r3.replyId && r3.rootId && (_3.pid = r3.replyId, _3.rid = r3.rootId, _3.at = r3.replyUser), J3.value = true;
    try {
      h4 && (_3.recaptchaV3 = await St(h4).execute(`social`)), g2 && (_3.turnstile = await Ct(g2).execute(`social`));
      let a3 = { serverURL: t4, lang: n4, token: l4.value.token, comment: _3 }, s3 = await (r3.edit ? c({ objectId: r3.edit.objectId, ...a3 }) : o(a3));
      if (J3.value = false, s3.errmsg) {
        alert(s3.errmsg);
        return;
      }
      i2(`submit`, s3.data), o3.value = ``, G3.value = ``, await nextTick(), r3.replyId && i2(`cancelReply`), ((_a2 = r3.edit) == null ? void 0 : _a2.objectId) && i2(`cancelEdit`);
    } catch (e3) {
      J3.value = false, alert(e3.message);
    }
  }, we3 = ({ key: e3, ctrlKey: t4, metaKey: n4 }) => {
    J3.value || (t4 || n4) && e3 === `Enter` && Ce3();
  }, Te3 = (e3) => {
    e3.preventDefault();
    let { lang: t4, serverURL: n4 } = a2.value;
    d({ serverURL: n4, lang: t4 }).then((e4) => {
      l4.value = e4, (e4.remember ? localStorage : sessionStorage).setItem(`WALINE_USER`, JSON.stringify(e4)), i2(`log`);
    });
  }, Ee3 = () => {
    l4.value = {}, localStorage.setItem(`WALINE_USER`, `null`), sessionStorage.setItem(`WALINE_USER`, `null`), i2(`log`);
  }, De3 = (e3) => {
    var _a2;
    e3.preventDefault();
    let { lang: t4, serverURL: n4 } = a2.value, r4 = 1200, i3 = (window.innerWidth - r4) / 2, o4 = (window.innerHeight - 720) / 2, s3 = new URLSearchParams({ lng: t4, token: l4.value.token });
    (_a2 = window.open(`${n4}/ui/profile?${s3.toString()}`, `_blank`, `width=${r4},height=720,left=${i3},top=${o4},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`)) == null ? void 0 : _a2.postMessage({ type: `TOKEN`, data: l4.value.token }, `*`);
  }, Oe3 = (e3) => {
    var _a2, _b, _c, _d;
    !((_a2 = g.value) == null ? void 0 : _a2.contains(e3.target)) && !((_b = _2.value) == null ? void 0 : _b.contains(e3.target)) && (P2.value = false), !((_c = y2.value) == null ? void 0 : _c.contains(e3.target)) && !((_d = b2.value) == null ? void 0 : _d.contains(e3.target)) && (U3.value = false);
  }, ke3 = async (e3) => {
    var _a2;
    let { scrollTop: t4, clientHeight: n4, scrollHeight: r4 } = e3.target, i3 = (n4 + t4) / r4, o4 = a2.value.search, s3 = ((_a2 = C2.value) == null ? void 0 : _a2.value) ?? ``;
    i3 < 0.9 || K3.loading || Y3.value || (K3.loading = true, (o4.more && K3.list.length > 0 ? await o4.more(s3, K3.list.length) : await o4.search(s3)).length > 0 ? K3.list = [...K3.list, ...o4.more && K3.list.length > 0 ? await o4.more(s3, K3.list.length) : await o4.search(s3)] : Y3.value = true, K3.loading = false, setTimeout(() => {
      e3.target.scrollTop = t4;
    }, 50));
  }, Q3 = useDebounceFn((e3) => {
    K3.list = [], Y3.value = false, ke3(e3);
  }, 300);
  return useEventListener(`click`, Oe3), useEventListener(`message`, ({ data: e3 }) => {
    (e3 == null ? void 0 : e3.type) === `profile` && (l4.value = { ...l4.value, ...e3.data }, [localStorage, sessionStorage].filter((e4) => e4.getItem(`WALINE_USER`)).forEach((e4) => {
      e4.setItem(`WALINE_USER`, JSON.stringify(l4));
    }));
  }), watchImmediate([a2, me3], ([e3, t4]) => {
    let { wordLimit: n4 } = e3;
    n4 ? t4 < n4[0] && n4[0] !== 0 ? ([he3.value] = n4, q3.value = false) : ([, he3.value] = n4, q3.value = t4 <= n4[1]) : (he3.value = 0, q3.value = true);
  }), watch(U3, async (e3) => {
    var _a2;
    if (!e3) return;
    let t4 = a2.value.search;
    C2.value && (C2.value.value = ``), K3.loading = true, K3.list = await (((_a2 = t4.default) == null ? void 0 : _a2.call(t4)) ?? t4.search(``)), K3.loading = false;
  }), onMounted(() => {
    var _a2;
    ((_a2 = r3.edit) == null ? void 0 : _a2.objectId) && (o3.value = r3.edit.orig), watchImmediate(() => o3.value, (e3) => {
      let { highlighter: t4, texRenderer: n4 } = a2.value;
      ge3.value = e3, G3.value = ct2(e3, { emojiMap: A2.value.map, highlighter: t4, texRenderer: n4 }), me3.value = ft(e3), e3 ? autosize_esm_default(m3.value) : autosize_esm_default.destroy(m3.value);
    }), watchImmediate(() => a2.value.emoji, async (e3) => {
      A2.value = await $e2(e3);
    });
  }), (e3, n4) => {
    var _a2, _b;
    return openBlock(), createElementBlock(`div`, { key: unref(l4).token, class: `wl-comment` }, [unref(a2).login !== `disable` && _e3.value && !((_a2 = t3.edit) == null ? void 0 : _a2.objectId) ? (openBlock(), createElementBlock(`div`, en, [createBaseVNode(`div`, tn, [createBaseVNode(`button`, { type: `submit`, class: `wl-logout-btn`, title: X3.value.logout, onClick: Ee3 }, [createVNode(unref(Dt), { size: 14 })], 8, nn2), createBaseVNode(`a`, { href: `#`, class: `wl-login-nick`, "aria-label": `Profile`, title: X3.value.profile, onClick: De3 }, [createBaseVNode(`img`, { src: unref(l4).avatar, alt: `avatar` }, null, 8, an)], 8, rn2)]), createBaseVNode(`a`, { href: `#`, class: `wl-login-nick`, "aria-label": `Profile`, title: X3.value.profile, onClick: De3, textContent: toDisplayString(unref(l4).display_name) }, null, 8, on2)])) : createCommentVNode(`v-if`, true), createBaseVNode(`div`, sn2, [unref(a2).login !== `force` && unref(a2).meta.length && !_e3.value ? (openBlock(), createElementBlock(`div`, { key: 0, class: normalizeClass([`wl-header`, `item${unref(a2).meta.length}`]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(a2).meta, (e4) => (openBlock(), createElementBlock(`div`, { key: e4, class: `wl-header-item` }, [createBaseVNode(`label`, { for: `wl-${e4}`, textContent: toDisplayString(X3.value[e4] + (unref(a2).requiredMeta.includes(e4) || !unref(a2).requiredMeta.length ? `` : `(${X3.value.optional})`)) }, null, 8, cn), withDirectives(createBaseVNode(`input`, { id: `wl-${e4}`, ref_for: true, ref: (t4) => {
      t4 && (d3.value[e4] = t4);
    }, "onUpdate:modelValue": (t4) => unref(s2)[e4] = t4, class: normalizeClass([`wl-input`, `wl-${e4}`]), name: e4, type: e4 === `mail` ? `email` : `text` }, null, 10, ln2), [[vModelDynamic, unref(s2)[e4]]])]))), 128))], 2)) : createCommentVNode(`v-if`, true), withDirectives(createBaseVNode(`textarea`, { id: `wl-edit`, ref: `textarea`, "onUpdate:modelValue": n4[0] || (n4[0] = (e4) => isRef(o3) ? o3.value = e4 : null), class: `wl-editor`, placeholder: t3.replyUser ? `@${t3.replyUser}` : X3.value.placeholder, onKeydown: we3, onDrop: be2, onPaste: xe3 }, null, 40, un), [[vModelText, unref(o3)]]), withDirectives(createBaseVNode(`div`, dn, [n4[7] || (n4[7] = createBaseVNode(`hr`, null, null, -1)), createBaseVNode(`h4`, null, toDisplayString(X3.value.preview) + `:`, 1), createBaseVNode(`div`, { class: `wl-content`, innerHTML: G3.value }, null, 8, fn)], 512), [[vShow, W3.value]]), createBaseVNode(`div`, pn2, [createBaseVNode(`div`, mn, [createBaseVNode(`a`, hn, [createVNode(unref(Nt))]), withDirectives(createBaseVNode(`button`, { ref: `emoji-button`, type: `button`, class: normalizeClass([`wl-action`, { active: P2.value }]), title: X3.value.emoji, onClick: n4[1] || (n4[1] = (e4) => P2.value = !P2.value) }, [createVNode(unref(kt2))], 10, gn), [[vShow, A2.value.tabs.length]]), unref(a2).search ? (openBlock(), createElementBlock(`button`, { key: 0, ref: `gif-button`, type: `button`, class: normalizeClass([`wl-action`, { active: U3.value }]), title: X3.value.gif, onClick: n4[2] || (n4[2] = (e4) => U3.value = !U3.value) }, [createVNode(unref(zt))], 10, _n)) : createCommentVNode(`v-if`, true), createBaseVNode(`input`, { id: `wl-image-upload`, ref: `image-uploader`, class: `upload`, "aria-hidden": `true`, type: `file`, accept: `.png,.jpg,.jpeg,.webp,.bmp,.gif`, onChange: Se3 }, null, 544), Z3.value ? (openBlock(), createElementBlock(`label`, { key: 1, for: `wl-image-upload`, class: `wl-action`, title: X3.value.uploadImage, "aria-label": X3.value.uploadImage }, [createVNode(unref(At))], 8, vn)) : createCommentVNode(`v-if`, true), createBaseVNode(`button`, { type: `button`, class: normalizeClass([`wl-action`, { active: W3.value }]), title: X3.value.preview, onClick: n4[3] || (n4[3] = (e4) => W3.value = !W3.value) }, [createVNode(unref(Mt))], 10, yn)]), createBaseVNode(`div`, bn, [n4[9] || (n4[9] = createBaseVNode(`div`, { class: `wl-captcha-container` }, null, -1)), createBaseVNode(`div`, xn, [createTextVNode(toDisplayString(me3.value) + ` `, 1), unref(a2).wordLimit ? (openBlock(), createElementBlock(`span`, Sn, [n4[8] || (n4[8] = createTextVNode(`  /  `, -1)), createBaseVNode(`span`, { class: normalizeClass({ illegal: !q3.value }), textContent: toDisplayString(he3.value) }, null, 10, Cn)])) : createCommentVNode(`v-if`, true), createTextVNode(`  ` + toDisplayString(X3.value.word), 1)]), unref(a2).login !== `disable` && !_e3.value ? (openBlock(), createElementBlock(`button`, { key: 0, type: `button`, class: `wl-btn`, onClick: Te3, textContent: toDisplayString(X3.value.login) }, null, 8, wn)) : createCommentVNode(`v-if`, true), unref(a2).login !== `force` || _e3.value ? (openBlock(), createElementBlock(`button`, { key: 1, type: `submit`, class: `primary wl-btn`, title: `Cmd|Ctrl + Enter`, disabled: J3.value, onClick: Ce3 }, [J3.value ? (openBlock(), createBlock(unref(Rt), { key: 0, size: 16 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(X3.value.submit), 1)], 64))], 8, Tn)) : createCommentVNode(`v-if`, true)]), createBaseVNode(`div`, { ref: `gif-popup`, class: normalizeClass([`wl-gif-popup`, { display: U3.value }]) }, [createBaseVNode(`input`, { ref: `gif-search`, type: `text`, placeholder: X3.value.gifSearchPlaceholder, onInput: n4[4] || (n4[4] = (...e4) => unref(Q3) && unref(Q3)(...e4)) }, null, 40, En), K3.list.length ? (openBlock(), createBlock($t, { key: 0, items: K3.list, "column-width": 200, gap: 6, onInsert: n4[5] || (n4[5] = (e4) => ve3(e4)), onScroll: ke3 }, null, 8, [`items`])) : createCommentVNode(`v-if`, true), K3.loading ? (openBlock(), createElementBlock(`div`, Dn, [createVNode(unref(Rt), { size: 30 })])) : createCommentVNode(`v-if`, true)], 2), createBaseVNode(`div`, { ref: `emoji-popup`, class: normalizeClass([`wl-emoji-popup`, { display: P2.value }]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(A2.value.tabs, (e4, t4) => (openBlock(), createElementBlock(Fragment, { key: e4.name }, [t4 === j2.value ? (openBlock(), createElementBlock(`div`, { key: 0, class: `wl-tab-wrapper`, onScroll: fe3 }, [(openBlock(true), createElementBlock(Fragment, null, renderList(e4.items, (e5) => (openBlock(), createElementBlock(`button`, { key: e5, type: `button`, title: e5, onClick: (t5) => ve3(`:${e5}:`), onMouseenter: (t5) => ue2(t5, e5), onMouseleave: fe3 }, [P2.value ? (openBlock(), createElementBlock(`img`, { key: 0, class: `wl-emoji`, src: A2.value.map[e5], alt: e5, loading: `lazy`, referrerPolicy: `no-referrer` }, null, 8, kn)) : createCommentVNode(`v-if`, true)], 40, On))), 128))], 32)) : createCommentVNode(`v-if`, true)], 64))), 128)), createBaseVNode(`div`, null, [I2.value ? (openBlock(), createElementBlock(`img`, { key: 0, class: `wl-emoji-preview`, src: A2.value.map[I2.value], alt: `preview`, loading: `lazy`, referrerPolicy: `no-referrer`, style: normalizeStyle(re.value) }, null, 12, An)) : createCommentVNode(`v-if`, true)]), A2.value.tabs.length > 1 ? (openBlock(), createElementBlock(`div`, jn, [(openBlock(true), createElementBlock(Fragment, null, renderList(A2.value.tabs, (e4, t4) => (openBlock(), createElementBlock(`button`, { key: e4.name, type: `button`, class: normalizeClass([`wl-tab`, { active: j2.value === t4 }]), onClick: (e5) => j2.value = t4 }, [createBaseVNode(`img`, { class: `wl-emoji`, src: e4.icon, alt: e4.name, title: e4.name, loading: `lazy`, referrerPolicy: `no-referrer` }, null, 8, Nn)], 10, Mn))), 128))])) : createCommentVNode(`v-if`, true)], 2)])]), t3.replyId || ((_b = t3.edit) == null ? void 0 : _b.objectId) ? (openBlock(), createElementBlock(`button`, { key: 1, type: `button`, class: `wl-close`, title: X3.value.cancelReply, onClick: n4[6] || (n4[6] = (e4) => t3.replyId ? i2(`cancelReply`) : i2(`cancelEdit`)) }, [createVNode(unref(Dt), { size: 24 })], 8, Pn)) : createCommentVNode(`v-if`, true)]);
  };
} });
var In = [`id`];
var Ln = { class: `wl-user`, "aria-hidden": `true` };
var Rn = [`src`];
var zn = { class: `wl-card` };
var Bn = { class: `wl-head` };
var Vn = [`href`];
var Hn = { key: 1, class: `wl-nick` };
var Un = [`textContent`];
var Wn = [`textContent`];
var Gn = [`textContent`];
var Kn = [`textContent`];
var qn = { class: `wl-comment-actions` };
var Jn = [`title`, `href`];
var Yn = [`title`];
var Xn = [`title`];
var Zn = { class: `wl-meta`, "aria-hidden": `true` };
var Qn = [`data-value`, `textContent`];
var $n = { key: 0, class: `wl-warning`, "aria-hidden": `true` };
var er = { key: 1, class: `wl-content` };
var tr = { key: 0, class: `wl-reply-to` };
var nr = [`href`];
var rr = [`innerHTML`];
var ir = { key: 2, class: `wl-admin-actions` };
var ar = { class: `wl-comment-status` };
var or = [`disabled`, `onClick`, `textContent`];
var sr = { key: 4, class: `wl-quote` };
var cr = defineComponent({ __name: `CommentCard`, props: { comment: {}, edit: {}, rootId: {}, reply: {} }, emits: [`log`, `submit`, `delete`, `like`, `sticky`, `edit`, `reply`, `status`], setup(e3, { emit: t3 }) {
  let n3 = t3, r3 = [`approved`, `waiting`, `spam`], i2 = inject(Pe2), a2 = vt(), o3 = useNow(), s2 = Tt(), c2 = computed(() => i2.value.locale), l4 = computed(() => {
    let { link: t4 } = e3.comment;
    return t4 ? Le2(t4) ? t4 : `https://${t4}` : ``;
  }), u2 = computed(() => a2.value.includes(e3.comment.objectId)), d3 = computed(() => Ke2(new Date(e3.comment.time), o3.value, c2.value)), f3 = computed(() => s2.value.type === `administrator`), p2 = computed(() => e3.comment.user_id && s2.value.objectId === e3.comment.user_id), h3 = computed(() => {
    var _a2;
    return e3.comment.objectId === ((_a2 = e3.reply) == null ? void 0 : _a2.objectId);
  }), g = computed(() => {
    var _a2;
    return e3.comment.objectId === ((_a2 = e3.edit) == null ? void 0 : _a2.objectId);
  });
  return (t4, a3) => {
    var _a2;
    let o4 = resolveComponent(`CommentCard`, true);
    return openBlock(), createElementBlock(`div`, { id: e3.comment.objectId.toString(), class: `wl-card-item` }, [createBaseVNode(`div`, Ln, [e3.comment.avatar ? (openBlock(), createElementBlock(`img`, { key: 0, class: `wl-user-avatar`, src: e3.comment.avatar, alt: `` }, null, 8, Rn)) : createCommentVNode(`v-if`, true), e3.comment.type === `guest` ? (openBlock(), createBlock(unref(It), { key: 1 })) : createCommentVNode(`v-if`, true), e3.comment.type === `administrator` ? (openBlock(), createBlock(unref(Lt), { key: 2 })) : createCommentVNode(`v-if`, true)]), createBaseVNode(`div`, zn, [createBaseVNode(`div`, Bn, [l4.value ? (openBlock(), createElementBlock(`a`, { key: 0, class: `wl-nick`, href: l4.value, target: `_blank`, rel: `ugc nofollow noreferrer noopener` }, toDisplayString(e3.comment.nick), 9, Vn)) : (openBlock(), createElementBlock(`span`, Hn, toDisplayString(e3.comment.nick), 1)), e3.comment.label ? (openBlock(), createElementBlock(`span`, { key: 2, class: `wl-badge`, textContent: toDisplayString(e3.comment.label) }, null, 8, Un)) : createCommentVNode(`v-if`, true), e3.comment.sticky ? (openBlock(), createElementBlock(`span`, { key: 3, class: `wl-badge`, textContent: toDisplayString(c2.value.sticky) }, null, 8, Wn)) : createCommentVNode(`v-if`, true), typeof e3.comment.level == `number` ? (openBlock(), createElementBlock(`span`, { key: 4, class: normalizeClass(`wl-badge level${e3.comment.level}`), textContent: toDisplayString(c2.value[`level${e3.comment.level}`] || `Level ${e3.comment.level}`) }, null, 10, Gn)) : createCommentVNode(`v-if`, true), createBaseVNode(`span`, { class: `wl-time`, textContent: toDisplayString(d3.value) }, null, 8, Kn), createBaseVNode(`div`, qn, [f3.value || p2.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode(`button`, { type: `button`, class: `wl-edit`, onClick: a3[0] || (a3[0] = (t5) => n3(`edit`, e3.comment)) }, [createVNode(unref(Ft))]), createBaseVNode(`button`, { type: `button`, class: `wl-delete`, onClick: a3[1] || (a3[1] = (t5) => n3(`delete`, e3.comment)) }, [createVNode(unref(Ot))])], 64)) : createCommentVNode(`v-if`, true), p2.value && !unref(i2).noRss ? (openBlock(), createElementBlock(`a`, { key: 1, role: `button`, class: `wl-rss`, title: c2.value.subscribeToReplies, href: `${unref(i2).serverURL}/api/comment/rss?user_id=${e3.comment.user_id}`, target: `_blank`, rel: `noopener noreferrer` }, [createVNode(unref(Vt))], 8, Jn)) : createCommentVNode(`v-if`, true), createBaseVNode(`button`, { type: `button`, class: `wl-like`, title: u2.value ? c2.value.cancelLike : c2.value.like, onClick: a3[2] || (a3[2] = (t5) => n3(`like`, e3.comment)) }, [createVNode(unref(jt), { active: u2.value }, null, 8, [`active`]), createTextVNode(` ` + toDisplayString(`like` in e3.comment ? e3.comment.like : ``), 1)], 8, Yn), createBaseVNode(`button`, { type: `button`, class: normalizeClass([`wl-reply`, { active: h3.value }]), title: h3.value ? c2.value.cancelReply : c2.value.reply, onClick: a3[3] || (a3[3] = (t5) => n3(`reply`, h3.value ? null : e3.comment)) }, [createVNode(unref(Pt))], 10, Xn)])]), createBaseVNode(`div`, Zn, [(openBlock(), createElementBlock(Fragment, null, renderList([`addr`, `browser`, `os`], (t5) => (openBlock(), createElementBlock(Fragment, null, [e3.comment[t5] ? (openBlock(), createElementBlock(`span`, { key: t5, class: normalizeClass(`wl-${t5}`), "data-value": e3.comment[t5], textContent: toDisplayString(e3.comment[t5]) }, null, 10, Qn)) : createCommentVNode(`v-if`, true)], 64))), 64))]), e3.comment.status === `waiting` && !f3.value ? (openBlock(), createElementBlock(`div`, $n, toDisplayString(c2.value.commentUnderReview), 1)) : createCommentVNode(`v-if`, true), g.value ? createCommentVNode(`v-if`, true) : (openBlock(), createElementBlock(`div`, er, [`reply_user` in e3.comment && e3.comment.reply_user ? (openBlock(), createElementBlock(`p`, tr, [createBaseVNode(`a`, { href: `#` + e3.comment.pid }, `@` + toDisplayString(e3.comment.reply_user.nick), 9, nr), a3[17] || (a3[17] = createBaseVNode(`span`, null, `: `, -1))])) : createCommentVNode(`v-if`, true), createBaseVNode(`div`, { innerHTML: e3.comment.comment }, null, 8, rr)])), f3.value && !g.value ? (openBlock(), createElementBlock(`div`, ir, [createBaseVNode(`span`, ar, [(openBlock(), createElementBlock(Fragment, null, renderList(r3, (t5) => createBaseVNode(`button`, { key: t5, type: `submit`, class: normalizeClass(`wl-btn wl-${t5}`), disabled: e3.comment.status === t5, onClick: (r4) => n3(`status`, { status: t5, comment: e3.comment }), textContent: toDisplayString(c2.value[t5]) }, null, 10, or)), 64))]), f3.value && !(`rid` in e3.comment) ? (openBlock(), createElementBlock(`button`, { key: 0, type: `submit`, class: `wl-btn wl-sticky`, onClick: a3[4] || (a3[4] = (t5) => n3(`sticky`, e3.comment)) }, toDisplayString(e3.comment.sticky ? c2.value.unsticky : c2.value.sticky), 1)) : createCommentVNode(`v-if`, true)])) : createCommentVNode(`v-if`, true), h3.value || g.value ? (openBlock(), createElementBlock(`div`, { key: 3, class: normalizeClass({ "wl-reply-wrapper": h3.value, "wl-edit-wrapper": g.value }) }, [createVNode(Fn, { edit: e3.edit, "reply-id": (_a2 = e3.reply) == null ? void 0 : _a2.objectId, "reply-user": e3.comment.nick, "root-id": e3.rootId, onLog: a3[5] || (a3[5] = (e4) => n3(`log`)), onCancelReply: a3[6] || (a3[6] = (e4) => n3(`reply`, null)), onCancelEdit: a3[7] || (a3[7] = (e4) => n3(`edit`, null)), onSubmit: a3[8] || (a3[8] = (e4) => n3(`submit`, e4)) }, null, 8, [`edit`, `reply-id`, `reply-user`, `root-id`])], 2)) : createCommentVNode(`v-if`, true), `children` in e3.comment ? (openBlock(), createElementBlock(`div`, sr, [(openBlock(true), createElementBlock(Fragment, null, renderList(e3.comment.children, (t5) => (openBlock(), createBlock(o4, { key: t5.objectId, comment: t5, reply: e3.reply, edit: e3.edit, "root-id": e3.rootId, onLog: a3[9] || (a3[9] = (e4) => n3(`log`)), onDelete: a3[10] || (a3[10] = (e4) => n3(`delete`, e4)), onEdit: a3[11] || (a3[11] = (e4) => n3(`edit`, e4)), onLike: a3[12] || (a3[12] = (e4) => n3(`like`, e4)), onReply: a3[13] || (a3[13] = (e4) => n3(`reply`, e4)), onStatus: a3[14] || (a3[14] = (e4) => n3(`status`, e4)), onSticky: a3[15] || (a3[15] = (e4) => n3(`sticky`, e4)), onSubmit: a3[16] || (a3[16] = (e4) => n3(`submit`, e4)) }, null, 8, [`comment`, `reply`, `edit`, `root-id`]))), 128))])) : createCommentVNode(`v-if`, true)])], 8, In);
  };
} });
var lr = { "data-waline": `` };
var ur = { class: `wl-meta-head` };
var dr = { class: `wl-count` };
var fr = [`textContent`];
var pr = { class: `wl-sort` };
var mr = [`onClick`];
var hr = { class: `wl-cards` };
var gr = { key: 1, class: `wl-operation` };
var _r = [`textContent`];
var vr = { key: 2, class: `wl-loading` };
var yr = [`textContent`];
var br = { key: 4, class: `wl-operation` };
var xr = [`textContent`];
var Sr = { key: 5, class: `wl-meta-foot` };
var Cr = { key: 0, class: `wl-rss` };
var wr = [`href`, `alt`];
var Tr = [`textContent`];
var Er = [`href`, `alt`];
var Dr = [`textContent`];
var Or = { key: 1, class: `wl-power` };
var kr = defineComponent({ __name: `WalineComment`, props: { serverURL: {}, path: {}, meta: {}, requiredMeta: {}, wordLimit: {}, pageSize: {}, lang: {}, locale: {}, commentSorting: {}, dark: { type: [String, Boolean] }, login: {}, noCopyright: { type: Boolean }, noRss: { type: Boolean }, recaptchaV3Key: {}, turnstileKey: {}, reaction: { type: [Array, Boolean] }, emoji: {}, search: { type: [Object, Boolean] }, highlighter: { type: Function }, imageUploader: { type: Function }, texRenderer: { type: Function } }, setup(e3) {
  let n3 = e3, r3 = Tt(), a2 = vt(), o3 = ref(`loading`), s2 = ref(0), c2 = ref(1), l4 = ref(0), d3 = computed(() => Ve2(n3)), f3 = ref(d3.value.commentSorting), p2 = ref([]), m3 = ref(null), h3 = ref(null), g = computed(() => Ue2(d3.value.dark)), y2 = computed(() => d3.value.locale);
  useStyleTag(g, { id: `waline-darkmode` });
  let b2 = null, C2 = (e4) => {
    let { serverURL: t3, path: n4, pageSize: a3 } = d3.value, u2 = new AbortController();
    o3.value = `loading`, b2 == null ? void 0 : b2(), a({ serverURL: t3, lang: d3.value.lang, path: n4, pageSize: a3, sortBy: Me2[f3.value], page: e4, signal: u2.signal, token: r3.value.token }).then((t4) => {
      o3.value = `success`, s2.value = t4.count, p2.value.push(...t4.data), c2.value = e4, l4.value = t4.totalPages;
    }).catch((e5) => {
      e5.name !== `AbortError` && (console.error(e5.message), o3.value = `error`);
    }), b2 = u2.abort.bind(u2);
  }, A2 = () => {
    C2(c2.value + 1);
  }, j2 = () => {
    s2.value = 0, p2.value = [], C2(1);
  }, ee2 = (e4) => {
    f3.value !== e4 && (f3.value = e4, j2());
  }, te2 = (e4) => {
    m3.value = e4;
  }, ne = (e4) => {
    h3.value = e4;
  }, N = (e4) => {
    if (h3.value) h3.value.comment = e4.comment, h3.value.orig = e4.orig;
    else if (`rid` in e4) {
      let t3 = p2.value.find(({ objectId: t4 }) => t4 === e4.rid);
      if (!t3) return;
      Array.isArray(t3.children) || (t3.children = []), t3.children.push(e4);
    } else p2.value.unshift(e4), s2.value += 1;
  }, P2 = async ({ comment: e4, status: t3 }) => {
    if (e4.status === t3) return;
    let { serverURL: n4, lang: i2 } = d3.value;
    await c({ serverURL: n4, lang: i2, token: r3.value.token, objectId: e4.objectId, comment: { status: t3 } }), e4.status = t3;
  }, ie2 = async (e4) => {
    if (`rid` in e4) return;
    let { serverURL: t3, lang: n4 } = d3.value;
    await c({ serverURL: t3, lang: n4, token: r3.value.token, objectId: e4.objectId, comment: { sticky: +!e4.sticky } }), e4.sticky = !e4.sticky;
  }, ae2 = async ({ objectId: e4 }) => {
    if (!confirm(`Are you sure you want to delete this comment?`)) return;
    let { serverURL: n4, lang: i2 } = d3.value;
    await s({ serverURL: n4, lang: i2, token: r3.value.token, objectId: e4 }), p2.value.some((t3, n5) => t3.objectId === e4 ? (p2.value = p2.value.filter((e5, t4) => t4 !== n5), true) : t3.children.some((r4, i3) => r4.objectId === e4 ? (p2.value[n5].children = t3.children.filter((e5, t4) => t4 !== i3), true) : false));
  }, H2 = async (e4) => {
    let { serverURL: t3, lang: n4 } = d3.value, { objectId: i2 } = e4, o4 = a2.value.includes(i2);
    await c({ serverURL: t3, lang: n4, objectId: i2, token: r3.value.token, comment: { like: !o4 } }), o4 ? a2.value = a2.value.filter((e5) => e5 !== i2) : (a2.value = [...a2.value, i2], a2.value.length > 50 && (a2.value = a2.value.slice(-50))), e4.like = Math.max(0, (e4.like || 0) + (o4 ? -1 : 1));
  };
  return provide(Pe2, d3), onMounted(async () => {
    var _a2;
    watchImmediate(() => [n3.serverURL, n3.path], () => {
      j2();
    });
    let e4 = new URLSearchParams(location.search).get(`token`);
    if (!e4) return;
    let t3 = await fetch(`${d3 == null ? void 0 : d3.value.serverURL}/token`, { headers: { Authorization: `Bearer ${e4}` } }).then((e5) => e5.json()).catch((e5) => (console.error(e5), {}));
    !t3.errno && ((_a2 = t3 == null ? void 0 : t3.data) == null ? void 0 : _a2.objectId) && (r3.value = { ...t3.data, token: e4 });
    let i2 = new URL(window.location.href);
    i2.searchParams.delete(`token`), history.replaceState(null, ``, i2.pathname + (i2.searchParams.toString() ? `?${i2.searchParams.toString()}` : ``) + i2.hash);
  }), onUnmounted(() => {
    b2 == null ? void 0 : b2();
  }), (e4, t3) => (openBlock(), createElementBlock(`div`, lr, [createVNode(Xt), !m3.value && !h3.value ? (openBlock(), createBlock(Fn, { key: 0, onLog: j2, onSubmit: N })) : createCommentVNode(`v-if`, true), createBaseVNode(`div`, ur, [createBaseVNode(`div`, dr, [s2.value ? (openBlock(), createElementBlock(`span`, { key: 0, class: `wl-num`, textContent: toDisplayString(s2.value) }, null, 8, fr)) : createCommentVNode(`v-if`, true), createTextVNode(` ` + toDisplayString(y2.value.comment), 1)]), createBaseVNode(`ul`, pr, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(Ne2), (e5) => (openBlock(), createElementBlock(`li`, { key: e5, class: normalizeClass([e5 === f3.value ? `active` : ``]), onClick: (t4) => ee2(e5) }, toDisplayString(y2.value[e5]), 11, mr))), 128))])]), createBaseVNode(`div`, hr, [(openBlock(true), createElementBlock(Fragment, null, renderList(p2.value, (e5) => (openBlock(), createBlock(cr, { key: e5.objectId, "root-id": e5.objectId, comment: e5, reply: m3.value, edit: h3.value, onLog: j2, onReply: te2, onEdit: ne, onSubmit: N, onStatus: P2, onDelete: ae2, onSticky: ie2, onLike: H2 }, null, 8, [`root-id`, `comment`, `reply`, `edit`]))), 128))]), o3.value === `error` ? (openBlock(), createElementBlock(`div`, gr, [createBaseVNode(`button`, { type: `button`, class: `wl-btn`, onClick: j2, textContent: toDisplayString(y2.value.refresh) }, null, 8, _r)])) : o3.value === `loading` ? (openBlock(), createElementBlock(`div`, vr, [createVNode(unref(Rt), { size: 30 })])) : p2.value.length ? c2.value < l4.value ? (openBlock(), createElementBlock(`div`, br, [createBaseVNode(`button`, { type: `button`, class: `wl-btn`, onClick: A2, textContent: toDisplayString(y2.value.more) }, null, 8, xr)])) : createCommentVNode(`v-if`, true) : (openBlock(), createElementBlock(`div`, { key: 3, class: `wl-empty`, textContent: toDisplayString(y2.value.sofa) }, null, 8, yr)), p2.value.length || o3.value !== `loading` ? (openBlock(), createElementBlock(`div`, Sr, [d3.value.noRss ? createCommentVNode(`v-if`, true) : (openBlock(), createElementBlock(`div`, Cr, [createBaseVNode(`a`, { href: `${d3.value.serverURL}/api/comment/rss?path=${encodeURIComponent(d3.value.path)}`, target: `_blank`, rel: `noopener noreferrer`, alt: y2.value.subPostComment }, [createVNode(unref(Bt)), createBaseVNode(`span`, { textContent: toDisplayString(y2.value.subPostComment) }, null, 8, Tr)], 8, wr), createBaseVNode(`a`, { href: `${d3.value.serverURL}/api/comment/rss`, target: `_blank`, rel: `noopener noreferrer`, alt: y2.value.subSiteComment }, [createVNode(unref(Bt)), createBaseVNode(`span`, { textContent: toDisplayString(y2.value.subSiteComment) }, null, 8, Dr)], 8, Er)])), d3.value.noCopyright ? createCommentVNode(`v-if`, true) : (openBlock(), createElementBlock(`div`, Or, [t3[0] || (t3[0] = createTextVNode(` Powered by `, -1)), t3[1] || (t3[1] = createBaseVNode(`a`, { href: `https://github.com/walinejs/waline`, target: `_blank`, rel: `noopener noreferrer` }, ` Waline `, -1)), createTextVNode(` v` + toDisplayString(unref(Et)), 1)]))])) : createCommentVNode(`v-if`, true)]));
} });
var Ar = (e3, t3) => {
  t3.forEach((t4, n3) => {
    let r3 = e3[n3].time;
    typeof r3 == `number` && (t4.textContent = r3.toString());
  });
};
var jr = ({ serverURL: e3, path: t3 = window.location.pathname, selector: n3 = `.waline-pageview-count`, update: r3 = true, lang: i2 = navigator.language }) => {
  let o3 = new AbortController(), s2 = [...document.querySelectorAll(n3)], c2 = (e4) => {
    let n4 = lt2(e4);
    return n4 != null && t3 !== n4;
  }, l4 = (n4) => f({ serverURL: Re(e3), paths: n4.map((e4) => lt2(e4) ?? t3), lang: i2, signal: o3.signal }).then((e4) => {
    Ar(e4, n4);
  }).catch(et2);
  if (r3) {
    let n4 = s2.filter((e4) => !c2(e4)), r4 = s2.filter((e4) => c2(e4));
    p({ serverURL: Re(e3), path: t3, lang: i2 }).then((e4) => {
      Ar(e4, n4);
    }), r4.length > 0 && l4(r4);
  } else l4(s2);
  return o3.abort.bind(o3);
};
var Mr = ({ el: e3 = `#waline`, path: t3 = window.location.pathname, comment: n3 = false, pageview: r3 = false, ...i2 }) => {
  let a2 = e3 ? tt2(e3) : null;
  if (e3 && !a2) throw Error(`Option 'el' do not match any domElement!`);
  if (!i2.serverURL) throw Error(`Option 'serverURL' is missing!`);
  let o3 = reactive({ ...i2 }), s2 = reactive({ comment: n3, pageview: r3, path: t3 }), c2 = () => {
    s2.comment && mt({ serverURL: o3.serverURL, path: s2.path, ...$2(s2.comment) ? { selector: s2.comment } : {} });
  }, l4 = () => {
    s2.pageview && jr({ serverURL: o3.serverURL, path: s2.path, ...$2(s2.pageview) ? { selector: s2.pageview } : {} });
  }, u2 = null;
  a2 && (u2 = createApp(() => h(kr, { path: s2.path, ...o3 })), u2.mount(a2));
  let d3 = watchEffect(c2), f3 = watchEffect(l4);
  return { el: a2, update: ({ comment: e4, pageview: t4, path: n4 = window.location.pathname, ...r4 } = {}) => {
    Object.entries(r4).forEach(([e5, t5]) => {
      o3[e5] = t5;
    }), s2.path = n4, e4 != null && (s2.comment = e4), t4 != null && (s2.pageview = t4);
  }, destroy: () => {
    u2 == null ? void 0 : u2.unmount(), d3(), f3();
  } };
};
var Nr = ({ el: e3, serverURL: t3, count: n3, lang: r3 = navigator.language }) => {
  let i2 = Tt(), a2 = tt2(e3), s2 = new AbortController();
  return m({ serverURL: t3, count: n3, lang: r3, signal: s2.signal, token: i2.value.token }).then((e4) => a2 && e4.length > 0 ? (a2.innerHTML = `<ul class="wl-recent-list">${e4.map((e5) => `<li class="wl-recent-item"><a href="${e5.url}">${e5.nick}</a>：${e5.comment}</li>`).join(``)}</ul>`, { comments: e4, destroy: () => {
    s2.abort(), a2.innerHTML = ``;
  } }) : { comments: e4, destroy: () => {
    s2.abort();
  } });
};
var Pr = ({ el: e3, serverURL: t3, count: n3, locale: r3, lang: i2 = navigator.language, mode: a2 = `list` }) => {
  let o3 = tt2(e3), c2 = new AbortController();
  return h2({ serverURL: t3, pageSize: n3, lang: i2, signal: c2.signal }).then((e4) => {
    if (!o3 || e4.length === 0) return { users: e4, destroy: () => {
      c2.abort();
    } };
    let t4 = { ...Ae2(i2), ...typeof r3 == `object` ? r3 : {} };
    return o3.innerHTML = `<ul class="wl-user-${a2}">${e4.map((e5, n4) => [`<li class="wl-user-item" aria-label="${e5.nick}">`, e5.link ? `<a href="${e5.link}" target="_blank">` : ``, `<div class="wl-user-avatar">`, `<img src="${e5.avatar}" alt="${e5.nick}">`, `<span class="wl-user-badge">${n4 + 1}</span>`, `</div>`, `<div class="wl-user-meta">`, `<div class="wl-user-name">`, e5.nick, typeof e5.level == `number` ? `<span class="wl-badge">${t4[`level${e5.level}`] ?? `Level ${e5.level}`}</span>` : ``, e5.label ? `<span class="wl-badge">${e5.label}</span>` : ``, `</div>`, e5.link, `</div>`, e5.link ? `</a>` : ``, `</li>`].filter(Boolean).join(``)).join(``)}</ul>`, { users: e4, destroy: () => {
      c2.abort(), o3.innerHTML = ``;
    } };
  });
};
var Fr = async ({ serverURL: e3, lang: t3, path: n3 }) => {
  let i2 = [1, 2, 3, 4, 5], a2 = new AbortController(), o3 = a2.abort.bind(a2), [s2] = await r({ serverURL: e3, lang: t3, paths: [n3], type: Array.from({ length: 5 }, (e4, t4) => `reaction${t4}`), signal: a2.signal });
  return { value: i2.map((e4, t4) => s2[`reaction${t4}`]), abort: o3 };
};
var Ir = (e3) => Number.isNaN(e3) ? 0 : Math.min(5, Math.max(0, Math.round(e3)));
var Lr = (e3 = []) => Array.from({ length: 5 }, (t3, n3) => {
  let r3 = e3[n3] ?? 0;
  return typeof r3 == `number` && r3 > 0 ? r3 : 0;
});
var Rr = { class: `wl-star-icon`, viewBox: `0 0 24 24` };
var zr = defineComponent({ __name: `WalineStarDisplay`, props: { score: { default: 0 } }, setup(e3) {
  let t3 = computed(() => Ir(e3.score)), n3 = (e4) => t3.value >= e4 ? `wl-star-solid` : `wl-star-outline`;
  return (e4, t4) => (openBlock(), createElementBlock(Fragment, null, renderList([1, 2, 3, 4, 5], (e5) => createBaseVNode(`span`, { key: e5, class: `wl-star-item` }, [(openBlock(), createElementBlock(`svg`, Rr, [createBaseVNode(`path`, { class: normalizeClass(n3(e5)), d: `M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z` }, null, 2)]))])), 64));
} });
var Br = { class: `wl-star` };
var Vr = { class: `wl-star-score` };
var Hr = { class: `wl-star-rate` };
var Ur = { class: `wl-star-progress` };
var Wr = [`data-count`];
var Gr = { class: `wl-star-percent` };
var Kr = defineComponent({ __name: `WalineStarWidget`, props: { serverURL: {}, lang: {}, path: {} }, emits: [`rate`], setup(e3, { emit: t3 }) {
  let n3 = e3, r3 = t3, i2 = ref(null), a2 = bt(), o3 = ref(Ir((a2.value[n3.path] ?? 0) + 1)), s2 = ref(null), c2 = ref(Lr([])), u2 = ref(false);
  onMounted(() => {
    watchImmediate(() => [n3.serverURL, n3.path], async () => {
      try {
        c2.value = Lr((await Fr(n3)).value);
      } catch (e4) {
        console.error(`Failed to fetch reaction data:`, e4);
      }
    });
  });
  let d3 = computed(() => s2.value ?? o3.value), f3 = computed(() => c2.value.reduce((e4, t4) => e4 + t4, 0)), p2 = computed(() => c2.value.map((e4) => f3.value ? e4 / f3.value : 0)), m3 = (e4) => {
    if (!i2.value) return 0;
    let { firstElementChild: t4, lastElementChild: n4 } = i2.value;
    if (!t4 || !n4) return 0;
    let { left: r4 } = t4.getBoundingClientRect(), { right: a3 } = n4.getBoundingClientRect(), o4 = a3 - r4, s3 = (e4.clientX - r4) / o4;
    return Ir(Math.min(1, Math.max(0, s3)) * 5);
  }, h3 = (e4) => {
    s2.value = m3(e4);
  }, g = () => {
    s2.value = null;
  }, _2 = async (e4) => {
    let t4 = s2.value ?? m3(e4);
    if (t4 === o3.value || u2.value) return;
    u2.value = true;
    let i3 = o3.value;
    try {
      i3 && (await i({ ...n3, type: `reaction${i3 - 1}`, action: `desc` }), c2.value[i3 - 1] = Math.max(0, (c2.value[i3 - 1] ?? 0) - 1)), o3.value = t4;
      let e5 = t4 - 1;
      a2.value[n3.path] = e5, await i({ ...n3, type: `reaction${e5}`, action: `inc` }), c2.value[e5] = (c2.value[e5] ?? 0) + 1, r3(`rate`, t4);
    } catch (e5) {
      o3.value = i3, i3 ? a2.value[n3.path] = i3 - 1 : delete a2.value[n3.path], console.error(`[Waline] Failed to update reaction counter`, e5);
    } finally {
      u2.value = false;
    }
  }, y2 = (e4) => c2.value[e4 - 1] ?? 0, b2 = (e4) => `${((p2.value[e4 - 1] ?? 0) * 100).toFixed(1)}%`;
  return (e4, t4) => (openBlock(), createElementBlock(`div`, Br, [createBaseVNode(`div`, { ref_key: `ratingArea`, ref: i2, class: `wl-star-rate`, onMousemove: h3, onMouseleave: g, onClick: _2 }, [createVNode(zr, { score: d3.value }, null, 8, [`score`])], 544), createBaseVNode(`div`, Vr, [(openBlock(), createElementBlock(Fragment, null, renderList([5, 4, 3, 2, 1], (e5) => createBaseVNode(`div`, { key: e5, class: `wl-star-row` }, [createBaseVNode(`div`, Hr, [createVNode(zr, { score: e5 }, null, 8, [`score`])]), createBaseVNode(`div`, Ur, [createBaseVNode(`div`, { class: `wl-star-progress-bar`, style: normalizeStyle({ width: b2(e5) }), "data-count": y2(e5).toString() }, null, 12, Wr)]), createBaseVNode(`span`, Gr, toDisplayString(b2(e5)), 1)])), 64))])]));
} });
var qr = ({ el: e3, path: t3, lang: n3 = navigator.language, serverURL: r3, onRate: i2 }) => {
  let a2 = tt2(e3);
  if (!a2) return { destroy: () => {
  } };
  let o3 = createApp(Kr, { path: t3, lang: n3, serverURL: r3, onRate: i2 });
  return o3.mount(a2), { destroy: () => {
    o3.unmount(), a2.innerHTML = ``;
  } };
};
export {
  Nr as RecentComments,
  qr as Star,
  Pr as UserList,
  o as addComment,
  mt as commentCount,
  Q2 as defaultLocales,
  s as deleteComment,
  l as fetchCommentCount,
  r as getArticleCounter,
  a as getComment,
  f as getPageview,
  m as getRecentComment,
  h2 as getUserList,
  Mr as init,
  d as login,
  jr as pageviewCount,
  i as updateArticleCounter,
  c as updateComment,
  p as updatePageview,
  Et as version
};
//# sourceMappingURL=@waline_client.js.map
