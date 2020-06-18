const prefix = [ 'webkit', 'moz', 'ms', 'o' ];

export const requestAnimationFrame = (() => {

  for ( let i = 0, limit = prefix.length ; i < limit && ! window.requestAnimationFrame ; ++i ) {
    window.requestAnimationFrame = window[ prefix[ i ] + 'RequestAnimationFrame' ];
  }

  if ( ! window.requestAnimationFrame ) {
    let lastTime = 0;

    window.requestAnimationFrame = callback => {
      const now   = new Date().getTime();
      const ttc   = Math.max( 0, 16 - now - lastTime );
      const timer = window.setTimeout( () => callback( now + ttc ), ttc );

      lastTime = now + ttc;

      return timer;
    };
  }

  return window.requestAnimationFrame.bind( window );
})();

export const cancelAnimationFrame = (() => {

  for ( let i = 0, limit = prefix.length ; i < limit && ! window.cancelAnimationFrame ; ++i ) {
    window.cancelAnimationFrame = window[ prefix[ i ] + 'CancelAnimationFrame' ] || window[ prefix[ i ] + 'CancelRequestAnimationFrame' ];
  }

  if ( ! window.cancelAnimationFrame ) {
    window.cancelAnimationFrame = timer => {
      window.clearTimeout( timer );
    };
  }

  return window.cancelAnimationFrame.bind( window );
})();
