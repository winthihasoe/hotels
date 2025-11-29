const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"homeOne":{"uri":"1","methods":["GET","HEAD"]},"aboutOne":{"uri":"1\/about-us","methods":["GET","HEAD"]},"contactOne":{"uri":"1\/contact","methods":["GET","HEAD"]},"homeTwo":{"uri":"2","methods":["GET","HEAD"]},"aboutTwo":{"uri":"2\/about-us","methods":["GET","HEAD"]},"homeThree":{"uri":"3","methods":["GET","HEAD"]},"aboutThree":{"uri":"3\/about-us","methods":["GET","HEAD"]},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
