import { ListenerCallback } from 'adze';

/**
 * Create a new adze log factory that inherits the adze-security-validator namespace.
 */
// const log = adze()
//   .ns('adze-transport-browser-queue')
//   .seal();

/**
 * This function acts as a callback wrapper for log listeners with Adze. When a log containing
 * either AccessEvent or AuthenticationEvent meta data passes through this function it will
 * validate that all of the required properties are present and will warn the user if they are not.
 * This is an extra level of runtime validation and is mostly useful for vanilla JS implementations.
 *
 * When using TypeScript this is optional because passing the generics of `AccessEvent` or
 * `AuthenticationEvent` that are provided by this plugin will force the user to enter the
 * required properties.
 */

export function transportQueue(
  cb: ListenerCallback = () => {}
): ListenerCallback {
  let wrapper: ListenerCallback = (data, render) => {
    // Execute the user's listener callback.
    cb(data, render);
  };
  return wrapper;
}
