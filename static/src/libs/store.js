import { EventEmitter } from 'events';
import dispatcher from './dispatcher';

class VideoStore extends EventEmitter{
  constructor(){
    super();
    this.videoList = {};
  }
  addVideos(videos){
    this.videoList = videos;
    this.emit('received');
  }
  getAll(){
    return this.videoList;
  }
  handleActions(action){
    switch (action.type) {
      case 'VIDEO':{
        this.addVideos(action.video)
      }
    }
  }
}

const videoStore = new VideoStore;
dispatcher.register(videoStore.handleActions.bind(videoStore));
export default videoStore;