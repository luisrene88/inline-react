import dispatcher from './dispatcher';
import Utils from './utils';

export function fetchVideos(config){
  const logId = config.loginId;
  const channId = config.channel.id;
  Utils.fetchData(logId, channId, config, false)
    .then((res) => {
      dispatcher.dispatch({type:'VIDEO', video: res});
  });
}