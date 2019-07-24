const logger = store => next => action => {
  debugger;
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()


    // try {
    //   return next(action)
    // } catch (err) {
    //   console.error('Caught an exception!', err)
    //   Raven.captureException(err, {
    //     extra: {
    //       action,
    //       state: store.getState()
    //     }
    //   })
    //   throw err
    // }

    return result
  }
  
  export default logger