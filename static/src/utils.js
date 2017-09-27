import $ from 'jquery';

module.exports = {
  fetchData: function(loginId, id, config, products){
    if(!loginId) return console.warn('Need loginId');
    let url;
    const cbName = 'tvp_' + Math.floor(Math.random() * 555);

    if (!products) {
      url = config.api_base_url + '/channels/'+id+'/videos?X-login-id='+loginId+'&p=0&n=1000&callback='+cbName;
      let params = config.channel.parameters || {};
      for (let i in params) {
        if(!params[i] || !params[i].length) break; 
        url += "&" + i + "=" + params[i];
      }
    }else{
      url = config.api_base_url + '/videos/'+id+'/products?X-login-id='+loginId+'&callback='+cbName;
    }

    url = window.encodeURI(url);

    return Promise.resolve($.get({
        url: url,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp'
      }));
  },
  getType: function(e){
    if (!e || !this.isset(e, "type")) throw new Error("Must pass \"Widget.TYPE\"");
    let evt = e.type;
    return evt.charAt(0).toUpperCase() + evt.slice(1);
  },
  isset: function(o,p){
      let val = o;
      if (p) val = o[p];
      return "undefined" !== typeof val;
  },
  removeObjectProperties: function(obj, props) {
    for(var i = 0; i < props.length; i++) {
      if(obj.hasOwnProperty(props[i])) {
        delete obj[props[i]];
      }
    }
  }
};