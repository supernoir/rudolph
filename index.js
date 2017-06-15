const ping = require('net-ping');
const session = ping.createSession();
const pingTarget = '8.8.8.8';

session.pingHost(pingTarget, function(error, pingTarget, sent, rcvd) {
  var ms = rcvd - sent;
  if (error) console.log(pingTarget + ': ' + error.toString());
  else console.log(pingTarget + ': Alive (ms=' + ms + ')');
});

console.log(
  `
        ,_,_,_,
          \ /
       O--oo.
        7,"\\_______)
           ( )  __( )
           //"""   \\
      ctr //       //
`
);

