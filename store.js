/**
 * @typedef {object}
 * @prop {string} id
 * @prop {string} title
 * @prop {Date} created
 */

/**
 * @typedef {object} Filters
 * @prop {'A-Z' | 'Z-A'} sorting
 */

/**
 * @typedef {State}
 * @prop {'idle'| 'adding'} phase
 * @prop {Record<string, Task>} tasks
 * @prop { Filter} filters
 */

/**
 * @callback GetState
 * @returns {state}
 */

/**
 * @callback Dispatch
 * @param {Action} Action
 */

/**
 * @callback EmptyFn
 */



/**
 * @callback Subscribe
 * @param {State} prev
 * @param {State} next
 * @return {EmptyFn}
 */

/**
 * @typedef {object} store
 * @prop {GetState} GetState
 * @prop {Subscribe} subscribe
 * @prop {Dispatch} dispatch
 */