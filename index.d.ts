/* eslint-disable no-unused-vars */
import * as React from 'react';
import * as Recoil from 'recoil';

/**
 * Manage your recoil states (atoms & selectors) with one root class
 */
declare class RecoilStatesManager extends Array<Recoil.RecoilState<any>> {
  /**
   * Recoil Root Component
   */
  get Root(): Recoil.RecoilRoot;

  /**
   * Create Bridge Component
   */
  get Bridge(): React.FC;

  /**
   * @see Recoil.atom
   */
  atom(options: Recoil.AtomOptions<any>): Recoil.RecoilState<any>;

  /**
   * @see Recoil.selector
   */
  selector(options: Recoil.ReadWriteSelectorOptions<any>): Recoil.RecoilState<any>;
 
  /**
   * @see Recoil.isRecoilValue
   */
  validate(value: any): boolean;

  /**
   * Watch changes
   */
  watch(key: string, onChange: (previousValue: any, currentValue: any) => void): void;

  /**
   * Get atom/selector by
   */
  get(key: string): null|Recoil.RecoilState<any>;

  /**
   * Check if atom/selector exists
   */
  has(key: string): boolean;

  /**
   * Add atoms/selectors
   */
  add(...items: (Recoil.RecoilState<any> | any)[]): this;

  /**
   * Remove atoms/selectors
   */
  remove(...keys: string[]): this;
  
  /**
   * @see Recoil.useRecoilState
   */
  use(key: string): [any, Recoil.SetterOrUpdater<any>];

  /**
   * @see Recoil.useRecoilValue
   */
  useValue(key: string): any;

  /**
   * @see Recoil.SetterOrUpdater
   */
  useUpdater(key: string): Recoil.SetterOrUpdater<any>;

  /**
   * @see Recoil.useRecoilValue
   */
  useSelector(key: string): any;

  /**
   * @see Recoil.useRecoilStateLoadable
   */
  useStateLoadable(key: string): [Recoil.Loadable<any>, Recoil.SetterOrUpdater<any>];

  /**
   * @see Recoil.useRecoilValueLoadable
   */
  useValueLoadable(key: string): Recoil.Loadable<any>;

  /**
   * @see Recoil.useResetRecoilState
   */
  useResetter(key: string): Recoil.Resetter;

  /**
   * @see Recoil.useRecoilCallback
   */
  useCallback(callback: (c: Recoil.CallbackInterface) => (...args: any) => any): void;

  /**
   * @see Recoil.useRecoilSnapshot
   */
  useSnapshot(): Recoil.Snapshot;

  /**
   * @see Recoil.useGotoRecoilSnapshot
   */
  useGotoSnapshot(): (snapshot: Recoil.Snapshot) => void;
}

export default RecoilStatesManager;
