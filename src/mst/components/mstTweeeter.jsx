import React, { Component } from "react";
import { Grid, Row, Col, Well, Button, FormControl } from "react-bootstrap";
import MSTTweetInput from "./mstTweetInput";
import { MSTTweet } from "./mstTweet";
import { Spinner } from "./spinner";
import { inject, observer } from "mobx-react";

@inject("tweetStore")
@observer
export default class MSTTweeeter extends Component {
  _renderTweetList() {
    const tweetList = this.props.tweetStore.tweets.map(tweet => (
      <MSTTweet key={tweet.id} tweet={tweet} />
    ));
    return (
      <Row>
        <Col md={12}>
          <ul>{tweetList}</ul>
        </Col>
      </Row>
    );
  }

  _renderSpinner() {
    return (
      <Row>
        <Col md={1} className="col-centered">
          <Spinner />
        </Col>
      </Row>
    );
  }

  render() {
    const { isFetching } = this.props.tweetStore;
    return (
      <Grid>
        <a href="/" className="red">
          <h1>{this.props.header}</h1>
        </a>
        <Button onClick={() => {this.props.history.push("/redux")}}>
          To Redux!
        </Button>

        <br />
        <MSTTweetInput />
        <hr />
        {isFetching && this._renderSpinner()}
        {this._renderTweetList()}
      </Grid>
    );
  }
}
