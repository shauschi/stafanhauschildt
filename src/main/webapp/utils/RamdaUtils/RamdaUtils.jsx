'use strict';
import _find from 'ramda/src/find';
import _equals from 'ramda/src/equals';
import _lensPath from 'ramda/src/lensPath';
import _prop from 'ramda/src/prop';
import _propEq from 'ramda/src/propEq';
import _set from 'ramda/src/set';
import _view from 'ramda/src/view';

/*
 * Setzt den Wert entlang eines Pfades auf 'value'
 */
export const setPath = (path, value, obj) => {
  const lens = _lensPath(path);
  return _set(lens, value, obj);
};

/*
 * Verneint den Wert entlang des Pfades
 */
export const togglePath = (path, obj) => {
  const lens = _lensPath(path);
  const oldValue = _view(lens, obj);
  return _set(lens, !oldValue, obj);
};

/*
 * Liest den Wert entland des Pfades
 */
export const viewPath = (path, obj) => {
  const lens = _lensPath(path);
  return _view(lens, obj);
};

/*
 * Gibt sofern vorhanden das Property vom Object zurück
 */
export const view = (prop, obj) => _prop(prop, obj);

/*
 * Durchsucht ein Array nach einem Element mit einem bestimmten Property
 */
export const findBy = (prop, data, id) => {
  if (!data) {
    return undefined;
  }
  return _find(_propEq(prop, id))(data);
};

/*
 * Durchsucht ein Array nach einem Element mit einer bestimmten ID
 */
export const findById = (data, id) => findBy('id', data, id);

/*
 * Vergleicht zwei Strukturen auf Gleichheit
 */
export const deepEqual = (obj1, obj2) => _equals(obj1, obj2);