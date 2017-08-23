module.exports = {
  isset: function(o,p){
      let val = o;
      if (p) val = o[p];
      return "undefined" !== typeof val;
  },
  getType: function(e){
    if (!e || !this.isset(e, "config") || !this.isset(e.config, "type")) throw new Error("Must pass \"Widget.TYPE\"");
    let evt = e.config.type;
    return evt.charAt(0).toUpperCase() + evt.slice(1);
  },
  removeObjectProperties: function(obj, props) {
    for(var i = 0; i < props.length; i++) {
      if(obj.hasOwnProperty(props[i])) {
        delete obj[props[i]];
      }
    }
  }
};