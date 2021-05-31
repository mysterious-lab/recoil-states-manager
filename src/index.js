import { useState, useEffect } from 'react';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  useRecoilStateLoadable,
  useRecoilValueLoadable,
  useResetRecoilState,
  useGotoRecoilSnapshot,
  useRecoilCallback,
  useRecoilSnapshot,
  RecoilRoot,
  isRecoilValue,
  useRecoilBridgeAcrossReactRoots_UNSTABLE, // eslint-disable-line camelcase
} from 'recoil';

export default class RecoilStatesManager extends Array {
  get Root() {
    return RecoilRoot;
  }

  get Bridge() {
    return useRecoilBridgeAcrossReactRoots_UNSTABLE();
  }

  atom(options) {
    return atom(options);
  }

  selector(options) {
    return selector(options);
  }

  validate(value) {
    return typeof value === 'object' && isRecoilValue(value);
  }

  get(key) {
    for (let i = 0, l = this.length; i < l; ++i) {
      if (this[i].key === key) {
        return this[i];
      }
    }

    return null;
  }

  has(key) {
    for (let i = 0, l = this.length; i < l; ++i) {
      if (this[i].key === key) {
        return true;
      }
    }

    return false;
  }

  add(...items) {
    items = items.map((item) => (this.validate(item) ? item : atom(item)));
    this.push(...items);

    return this;
  }

  remove(...keys) {
    for (let n = 0, len = keys.length; n < len; ++n) {
      for (let i = 0, l = this.length; i < l; ++i) {
        if (this[i].key === keys[n]) {
          this.splice(i, 1);
          break;
        }
      }
    }

    return this;
  }

  watch(key, onChange) {
    const value = this.useValue(key);
    const [currentValue, setCurrentValue] = useState(value);

    useEffect(() => {
      if (JSON.stringify(currentValue) !== JSON.stringify(value)) {
        typeof onChange === 'function' && onChange(currentValue, value);
        setCurrentValue(value);
      }
    }, [value]);
  }

  use(key) {
    return useRecoilState(this.get(key));
  }

  useValue(key) {
    return useRecoilValue(this.get(key));
  }

  useUpdater(key) {
    return useSetRecoilState(this.get(key));
  }

  useSelector(key) {
    return useRecoilValue(this.get(key));
  }

  useStateLoadable(key) {
    return useRecoilStateLoadable(this.get(key));
  }

  useValueLoadable(key) {
    return useRecoilValueLoadable(this.get(key));
  }

  useResetter(key) {
    return useResetRecoilState(this.get(key));
  }

  useCallback(callback, dependencies) {
    return useRecoilCallback(callback, dependencies);
  }

  useSnapshot() {
    return useRecoilSnapshot();
  }

  useGotoSnapshot() {
    return useGotoRecoilSnapshot();
  }
}
