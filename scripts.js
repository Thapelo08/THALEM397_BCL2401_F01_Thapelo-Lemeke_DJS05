import { subscribe, update, Action } from "./store";

const handler = (prev, next) => console.log(prev, next)
const unsubscribe = subscribe(handler)

/**
 * @type {Action}
 */
const customAction = (state) => {
    return {
        ...state,
        wind: {
            ...state.wind,
        }
    }
}

update()