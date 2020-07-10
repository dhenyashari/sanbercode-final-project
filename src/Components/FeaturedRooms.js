import React, { Component } from "react";
import Title from "./Title";
import items from '../RoomData/data';
import Room from "./Room";
// import Loading from "./Loading";

export default class FeaturedRooms extends Component {
  state = {
    rooms: [],
    featuredRooms: [],
  };

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    this.setState({
      rooms,
      featuredRooms,
    });
    
  }

  render() {
    // let { featuredRooms: rooms } = this.context;

    this.state.featuredRooms = this.state.featuredRooms.map(room => <Room key={room.id} room={room} /> );
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {this.state.featuredRooms}
        </div>
      </section>
    );
  }
}
