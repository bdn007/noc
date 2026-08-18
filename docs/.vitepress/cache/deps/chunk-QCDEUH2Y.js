import {
  computed,
  customRef,
  getCurrentInstance,
  getCurrentScope,
  isRef,
  nextTick,
  onMounted,
  onScopeDispose,
  onUnmounted,
  readonly,
  ref,
  shallowReadonly,
  shallowRef,
  toRef,
  toValue,
  unref,
  watch
} from "./chunk-IGPK6NSI.js";
import {
  __commonJS,
  __publicField
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

// node_modules/@waline/client/node_modules/@vueuse/shared/dist/index.js
function tryOnScopeDispose(fn, failSilently) {
  if (getCurrentScope()) {
    onScopeDispose(fn, failSilently);
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
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), {
        fn,
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
function cacheStringFunction(fn) {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    return cache[str] || (cache[str] = fn(str));
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
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(debounceFilter(ms, options), fn);
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
function tryOnMounted(fn, sync = true, target) {
  if (getLifeCycleTarget(target)) onMounted(fn, target);
  else if (sync) fn();
  else nextTick(fn);
}
function tryOnUnmounted(fn, target) {
  if (getLifeCycleTarget(target)) onUnmounted(fn, target);
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
      cleanups.forEach((fn) => fn());
    });
  }, { flush: "post" });
}
function useRafFn(fn, options = {}) {
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
    fn({
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
    return interval === "requestAnimationFrame" ? (fn) => useRafFn(fn, { immediate }) : (fn) => useIntervalFn(fn, interval, options);
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
          let w = this.rules.other.nextBulletRegex(g), M = this.rules.other.hrRegex(g), ne = this.rules.other.fencesBeginRegex(g), re = this.rules.other.headingBeginRegex(g), be = this.rules.other.htmlBeginRegex(g), Re = this.rules.other.blockquoteBeginRegex(g);
          for (; e3; ) {
            let N = e3.split(`
`, 1)[0], D;
            if (k = N, this.options.pedantic ? (k = k.replace(this.rules.other.listReplaceNesting, "  "), D = k) : D = k.replace(this.rules.other.tabCharGlobal, "    "), ne.test(k) || re.test(k) || be.test(k) || Re.test(k) || w.test(k) || M.test(k)) break;
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
    var _a2, _b, _c, _d, _e2;
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
      if ((_e2 = this.options.extensions) == null ? void 0 : _e2.startInline) {
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

export {
  useDebounceFn,
  watchImmediate,
  useEventListener,
  useStorage,
  useNow,
  useScriptTag,
  useStyleTag,
  r,
  i,
  a,
  o,
  s,
  c,
  l,
  d,
  f,
  p,
  m,
  h2 as h,
  require_ReCaptcha,
  Z,
  markedHighlight,
  autosize_esm_default
};
//# sourceMappingURL=chunk-QCDEUH2Y.js.map
