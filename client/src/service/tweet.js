export default class TweetService {
  constructor(http) {
    this.http = http;
  }
  async getTweets(username) {
    const query = username ? `?username=${username}` : "";
    return this.http.fetch(`/tweet${query}`, {
      method: "GET",
    });
  }

  async postTweet(text) {
    return this.http.fetch(`/tweets`, {
      method: "POST",
      body: JSON.stringify({ text, username: "ellie", name: "Ellie" }),
    });
  }

  async updateTweet(tweetId, text) {
    return this.http.fetch(`/tweets${tweetId}`, {
      method: "PUT",
      body: JSON.stringify({ text }),
    });
  }

  async deleteTweet(tweetId) {
    return this.http.fetch(`${this.baseURL}/tweets/${tweetId}`, {
      method: "DELETE",
    });
  }
}
