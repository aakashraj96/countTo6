let testStr = '';
const foot = {
  kick() {
    this.yelp = 'Ouch!';
    setImmediate(() => { console.log(this.yelp); testStr = this.yelp; });
  },
};
foot.kick();

module.exports = testStr;
